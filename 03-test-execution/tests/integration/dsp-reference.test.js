// ชุดอ้างอิง v1 (02-test-design/S2-B_Ti.md) · UC-07 ยืนยันจ่ายสินค้าและตัดสต็อก
// ระดับ Integration: เรียกเส้นทาง POST /api/orders/:id/dispatch ผ่าน HTTP (supertest) กับฐานข้อมูล MySQL ทดสอบจริง
// ผลที่คาดหวังทุกข้อคัดจากตารางขั้นที่ 3 ของ S2-B ไม่ได้ดูจากพฤติกรรมของโค้ด
//
// ใช้ตัวช่วยของ repo โครงงาน soml (backend/tests/integration/helpers.js) ซึ่งล็อกอินด้วยบัญชีทดสอบจาก seed
// วิธีรัน: ดู 03-test-execution/tests/README.md
const path = require('path');
const SOML = process.env.SOML_DIR;
const { app, request, pool, allTokens, auth } = require(path.join(SOML, 'backend/tests/integration/helpers'));

let tokens, P1, P2;
beforeAll(async () => {
  tokens = await allTokens();
  process.env.PRINT_SERVICE_URL = 'http://127.0.0.1:1'; // ไม่มีเครื่องพิมพ์ในการทดสอบนี้ (นอกขอบเขต UC-07)
  [[P1]] = await pool.query("SELECT product_id FROM products WHERE sku = '100001'");
  [[P2]] = await pool.query("SELECT product_id FROM products WHERE sku = '101001'");
});
afterAll(() => pool.end());

const stockOf = async (id) => (await pool.query('SELECT stock_qty FROM products WHERE product_id = ?', [id]))[0][0].stock_qty;
const setStock = (id, qty) => pool.query('UPDATE products SET stock_qty = ? WHERE product_id = ?', [qty, id]);
const statusOf = async (id) => (await pool.query('SELECT status FROM orders WHERE order_id = ?', [id]))[0][0].status;
const movesOf = async (id) => (await pool.query('SELECT * FROM stock_movements WHERE order_id = ?', [id]))[0];
const dispatchLogs = async (id) =>
  (await pool.query("SELECT * FROM audit_logs WHERE action = 'CONFIRM_DISPATCH' AND entity_id = ?", [id]))[0];
async function newOrder(items) {
  const res = await auth(tokens.sales)(request(app).post('/api/orders').send({ items }));
  if (res.status !== 201) throw new Error(JSON.stringify(res.body));
  return res.body.order.orderId;
}
const confirm = (token, id) => auth(token)(request(app).post(`/api/orders/${id}/dispatch`));

test('DSP-01 ยืนยันใบเดิมครั้งที่สอง → 409 แจ้งว่าถูกจ่ายไปแล้ว สต็อกถูกหักครั้งเดียว', async () => {
  await setStock(P1.product_id, 10);
  const id = await newOrder([{ productId: P1.product_id, qty: 2 }]);
  expect((await confirm(tokens.warehouse, id)).status).toBe(200);
  const second = await confirm(tokens.warehouse, id);
  expect(second.status).toBe(409);
  expect(second.body.error).toMatch(/ถูกจ่าย/);
  expect(await stockOf(P1.product_id)).toBe(8);
  expect(await movesOf(id)).toHaveLength(1);
});

test('DSP-02 สองคำขอพร้อมกันต่อใบเดียว → สำเร็จ 1 ปฏิเสธ 409 อีก 1 สต็อกหักครั้งเดียว เคลื่อนไหว 1 แถว', async () => {
  await setStock(P1.product_id, 10);
  const id = await newOrder([{ productId: P1.product_id, qty: 4 }]);
  const [a, b] = await Promise.all([confirm(tokens.warehouse, id), confirm(tokens.warehouse, id)]);
  expect([a.status, b.status].sort()).toEqual([200, 409]);
  expect(await stockOf(P1.product_id)).toBe(6);
  expect(await movesOf(id)).toHaveLength(1);
  expect(await dispatchLogs(id)).toHaveLength(1);
});

test('DSP-03 สต็อก 2 สั่ง 5 → 409 สต็อกไม่พอ สถานะยังรอจ่าย สต็อกยัง 2 ไม่มีเคลื่อนไหว ไม่มีประวัติจ่าย', async () => {
  await setStock(P1.product_id, 2);
  const id = await newOrder([{ productId: P1.product_id, qty: 5 }]);
  const res = await confirm(tokens.warehouse, id);
  expect(res.status).toBe(409);
  expect(res.body.error).toMatch(/ไม่พอ/);
  expect(await statusOf(id)).toBe('awaiting_dispatch');
  expect(await stockOf(P1.product_id)).toBe(2);
  expect(await movesOf(id)).toHaveLength(0);
  expect(await dispatchLogs(id)).toHaveLength(0);
});

test('DSP-04 สองรายการ รายการแรกพอ รายการที่สองสต็อก 0 → 409 ทั้งสองรายการไม่ถูกหัก สถานะไม่เปลี่ยน', async () => {
  await setStock(P1.product_id, 10);
  await setStock(P2.product_id, 0);
  const id = await newOrder([{ productId: P1.product_id, qty: 1 }, { productId: P2.product_id, qty: 1 }]);
  expect((await confirm(tokens.warehouse, id)).status).toBe(409);
  expect(await stockOf(P1.product_id)).toBe(10);
  expect(await stockOf(P2.product_id)).toBe(0);
  expect(await statusOf(id)).toBe('awaiting_dispatch');
  expect(await movesOf(id)).toHaveLength(0);
});

test('DSP-05 ค่าขอบ สต็อก 5 สั่ง 5 → จ่ายได้ เหลือ 0', async () => {
  await setStock(P1.product_id, 5);
  const id = await newOrder([{ productId: P1.product_id, qty: 5 }]);
  expect((await confirm(tokens.warehouse, id)).status).toBe(200);
  expect(await stockOf(P1.product_id)).toBe(0);
  expect(await statusOf(id)).toBe('delivered');
});

test('DSP-06 ค่าขอบ สต็อก 4 สั่ง 5 → 409 สต็อกยัง 4 ไม่ติดลบ', async () => {
  await setStock(P1.product_id, 4);
  const id = await newOrder([{ productId: P1.product_id, qty: 5 }]);
  expect((await confirm(tokens.warehouse, id)).status).toBe(409);
  expect(await stockOf(P1.product_id)).toBe(4);
  expect(await statusOf(id)).toBe('awaiting_dispatch');
});

test('DSP-07 พนักงานขายเรียกเส้นทางยืนยันจ่ายตรง → 403 สต็อกและสถานะไม่เปลี่ยน', async () => {
  await setStock(P1.product_id, 10);
  const id = await newOrder([{ productId: P1.product_id, qty: 1 }]);
  expect((await confirm(tokens.sales, id)).status).toBe(403);
  expect(await stockOf(P1.product_id)).toBe(10);
  expect(await statusOf(id)).toBe('awaiting_dispatch');
});
