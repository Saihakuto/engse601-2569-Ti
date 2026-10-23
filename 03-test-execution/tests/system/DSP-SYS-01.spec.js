// DSP-SYS-01 (ระดับ System) · UC-07 ยืนยันจ่ายสินค้าและตัดสต็อก · REQ-01, REQ-02 ของชุดอ้างอิง v1
// ขับหน้าจอจริงด้วย Playwright และเก็บภาพหน้าจอทุกขั้นไว้ใน 03-test-execution/evidence/
// ใช้ตัวช่วย login / sellOne / apiAs จาก repo โครงงาน soml (tests/system/helpers.js)
//
// วิธีรัน (เปิดระบบไว้ก่อนด้วย  cd soml && npm run dev):
//   SOML_DIR=/path/to/soml EVIDENCE_DIR=/path/to/03-test-execution/evidence \
//   npx playwright test --config <config ที่ชี้ testDir มาที่โฟลเดอร์นี้>
const path = require('path');
const { test, expect } = require(path.join(process.env.SOML_DIR, 'node_modules/@playwright/test'));
const { login, sellOne, apiAs, STOCKED_SKU } = require(path.join(process.env.SOML_DIR, 'tests/system/helpers'));

const day = new Date().toISOString().slice(0, 10);
// repo เป็น Public: ปิดชื่อพนักงานร้าน (ข้อมูลส่วนบุคคล) ด้วย mask ของ Playwright ก่อนบันทึกภาพ
const shot = (page, n, label) =>
  page.screenshot({
    path: path.join(process.env.EVIDENCE_DIR, `DSP-SYS-01_system_${day}_${n}-${label}.png`),
    mask: [page.getByText(/ขายโดย|ศิริกันทา|ศริพรรณ|สันติ|นิ้ง/)],
  });

async function stockOf(page) {
  const r = await apiAs(page, 'GET', `/products?q=${STOCKED_SKU}&all=1`);
  return r.body.products.find((p) => p.sku === STOCKED_SKU).stock_qty;
}

test('DSP-SYS-01 พนักงานคลังยืนยันจ่ายผ่านหน้าจอ สต็อกลดตามจำนวน และเปิดใบเดิมซ้ำจ่ายไม่ได้', async ({ page }) => {
  await login(page, 'sales');
  const orderNo = await sellOne(page, { search: STOCKED_SKU, qty: 2 });
  await shot(page, 1, 'sales-order-created');

  await login(page, 'warehouse');
  const before = await stockOf(page);
  await page.goto('/queue');
  await expect(page.getByText(orderNo)).toBeVisible();
  await shot(page, 2, 'warehouse-queue');

  await page.getByText(orderNo).click();
  await expect(page.getByRole('button', { name: 'ยืนยันจ่ายสินค้า' })).toBeVisible();
  await shot(page, 3, 'order-detail');

  await page.getByRole('button', { name: 'ยืนยันจ่ายสินค้า' }).click();
  await shot(page, 4, 'confirm-dialog');
  await page.getByRole('button', { name: 'ยืนยัน จ่ายสินค้าเลย' }).click();
  await expect(page.locator('.alert.ok')).toContainText('ส่งมอบสำเร็จ');
  await shot(page, 5, 'dispatched');

  const after = await stockOf(page);
  console.log(`DSP-SYS-01 ${orderNo} · SKU ${STOCKED_SKU} คงเหลือก่อนจ่าย ${before} หลังจ่าย ${after} (ต่าง ${before - after})`);
  expect(before - after).toBe(2);

  await page.goto(page.url());
  await expect(page.locator('.alert.warn')).toContainText('ถูกจ่ายไปแล้ว');
  await expect(page.getByRole('button', { name: 'ยืนยันจ่ายสินค้า' })).toHaveCount(0);
  await shot(page, 6, 'reopen-already-dispatched');
});
