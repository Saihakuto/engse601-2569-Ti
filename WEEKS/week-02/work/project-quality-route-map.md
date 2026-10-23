# W02 · Project Quality Route Map · ทีม Ti

> จัดทำเป็นไฟล์ส่ง 23 ต.ค. 2569 · สถานะหลักฐานตามที่มีจริง ณ วันที่จัดทำ (repo โครงงาน commit `29bd025`)

## Context

- Project/team: อำพร OMS · ทีม Ti
- Current SDLC status: Release (ส่งเล่มปริญญานิพนธ์แล้ว 22 ต.ค. 2569 · UAT ที่ร้าน 16–20 ต.ค. 2569)
- Milestone/sprint/date: M6 รายงานผลการทดสอบและเล่มฉบับสมบูรณ์
- Critical requirement/feature/risk: **UC-07 ยืนยันจ่ายสินค้าและตัดสต็อก** (FR-05, FR-06, BR-02, NFR-04) จาก W01 QR-01 และ QR-02
- Source/version: Use Case SRS v2.0 (20/09/2569) · ปริญญานิพนธ์บทที่ 3–4 ฉบับส่งเล่ม
- Authors/reviewer: ตรัยรัตน์ วงษ์สิทธิ์ / พนาวุฒน์ อภิปสันติ

## Route Map — one critical slice

```text
Requirements/SRS ──Gate A──▶ HLD/Detail Design ──Gate B──▶ Implement/Build ──Gate C──▶ Test/Defect ──Gate C──▶ Release ──Gate D
   FR-05 FR-06 BR-02            stock-deduction               dispatch.test.js          DSP-01..07, SYS        UAT-03/04 ผ่าน
   AC-07 AC-08                  ธุรกรรมเดียว + ล็อก 2 ชั้น       13/13 ผ่าน                 UAT-05 ไม่มีข้อมูล     → Conditional
        ▲                                                                                     │
        └────────── feedback: BR-02 ขัดกับ UC-07 เรื่องผู้จัดการจ่ายได้หรือไม่ (S1-B ขั้นที่ 4) ──┘
```

| Phase / Gate | V&V question | Evidence + status | Decision / feedback | Owner / when |
|---|---|---|---|---|
| Requirements/SRS — Gate A | FR-06 และ BR-02 วัดผ่าน–ไม่ผ่านได้หรือไม่ และใครเป็นเจ้าของงานจ่ายสินค้า | Use Case SRS v2.0 หัวข้อ 4.7, 5.5, AC-07, AC-08 · **Existing** · W03/W04 ของทีม · **Existing** | **Conditional** — AC ชัดเรื่องจ่ายซ้ำและสต็อกไม่พอ แต่ BR-02 กับ UC-07 ขัดกันเรื่องบทบาท (W04 RV-01) | ตรัยรัตน์ · 23 ต.ค. 2569 |
| HLD/Detail Design — Gate B | ส่วนประกอบใดบังคับกฎ และถ้าพังเห็นที่ไหน | บทที่ 3 แผนภาพลำดับ UC-07 · ภาพส่วนประกอบใน S1-B (สร้างย้อนหลัง) · **Existing** | **Ready** — กฎอยู่ที่ `stock-deduction` ฝั่งเซิร์ฟเวอร์ หน้าจอไม่ได้บังคับกฎ | ตรัยรัตน์ · ก.ย. 2569 |
| Implement/Build — Gate C | โค้ดใส่เงื่อนไขสถานะเดิมและยอดพอไว้ในคำสั่ง UPDATE เดียวกันจริงหรือไม่ | `soml/backend/modules/stock-deduction/index.js` commit `29bd025` · ชุดเดิม 13 ข้อผ่าน · **Existing** | **Proceed** | ตรัยรัตน์ · 23 ต.ค. 2569 |
| Test/Defect — Gate C | กรณีจ่ายซ้ำ พร้อมกัน สต็อกไม่พอ ค่าขอบ และบทบาท ได้ผลตาม AC หรือไม่ | ชุดอ้างอิง v1 DSP-01..07 + DSP-SYS-01 · 8/8 Pass (`03-test-execution/`) · **Existing** | **Pass** · ไม่มีข้อบกพร่องค้าง | ตรัยรัตน์ · 23 ต.ค. 2569 |
| Release/Portfolio — Gate D | ตัวเลขในระบบตรงกับของจริงในคลังหลังใช้งานหรือไม่ | UAT-03, UAT-04 ผ่านที่ร้าน · UAT-05 **Not Executed** (ไม่ได้นับสต็อก) | **Conditional** — ส่งมอบได้ แต่ข้ออ้างเรื่อง BR-02 ยังยืนยันกับของจริงไม่ได้ | ตรัยรัตน์ กับเจ้าของร้าน · วันขายครั้งถัดไป |

## Feedback loop

| Trigger/finding | ย้อนกลับไปแก้ artifact ใด | Evidence ที่ต้องอัปเดต | Owner/when |
|---|---|---|---|
| S1-B ขั้นที่ 4: BR-02 ว่า “พนักงานคลังเท่านั้น” แต่ UC-07 และโค้ด (`app.js` บรรทัด 52) ให้ผู้จัดการจ่ายได้ | Use Case SRS v2.0 หัวข้อ 5.5 BR-02 · AC-07 เพิ่มบทบาท | ชุดกรณีทดสอบรุ่น v2 เพิ่มกรณีผู้จัดการ · RTM แถว BR-02 | ตรัยรัตน์ ถามเจ้าของร้าน · ก่อนออก SRS ฉบับถัดไป |

## Evidence gap and next action

| Gap / Not Ready item | Why | Next action | Owner | Target milestone |
|---|---|---|---|---|
| UAT-05 นับสต็อกจริงเทียบยอดในระบบ | วันที่ทดสอบที่ร้านไม่ได้นับสต็อก | นับสินค้า 5 รายการก่อนเปิดและหลังปิดร้านหนึ่งวัน | ตรัยรัตน์ + เจ้าของร้าน | หลังส่งเล่ม |
| ข้อสรุปเรื่องผู้จัดการยืนยันจ่าย | รอคำตอบเจ้าของร้าน | ถามและแก้ BR-02 | ตรัยรัตน์ | SRS ฉบับถัดไป |

## Peer review and handoff

- Reviewer + date/commit: พนาวุฒน์ อภิปสันติ · 23 ต.ค. 2569
- Revision made: เปลี่ยนสถานะ Release จาก Not Executed เป็น Conditional หลังพบว่า UAT-03/04 ทำแล้วที่ร้าน แต่ UAT-05 ยังไม่ได้ทำ
- Requirement IDs ที่จะเข้า Week 03: **FR-05, FR-06, BR-02** (เพิ่ม NFR-04 เป็นข้อที่ 4 เพราะเป็นเกณฑ์การทำงานพร้อมกันของกฎเดียวกัน)
- AI Use Declaration: ใช้ Claude ดู [AI-LOG.md](../../../AI-LOG.md)
