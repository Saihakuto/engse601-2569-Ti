# W03 · Revised Critical Requirements · ทีม Ti

> จัดทำเป็นไฟล์ส่ง 23 ต.ค. 2569 · ข้อความเดิมคัดจาก Use Case SRS v2.0 โดยไม่แก้ต้นฉบับ ข้อความที่ปรับเป็นข้อเสนอของทีม ยังไม่ใช่การตัดสินของเจ้าของร้าน

## Review scope

- Project/team: อำพร OMS · ทีม Ti
- SRS/Requirement artifact + version/commit: Use Case SRS v2.0 (Review Candidate, 20/09/2569) · `Documents/UseCaseX_SOML_v2.0_TH.md` ใน repo โครงงาน commit `29bd025`
- Critical slice / linked W01 risk / W02 route: UC-07 ยืนยันจ่ายสินค้าและตัดสต็อก · QR-01, QR-02 · Route Map Gate A
- Authors: ตรัยรัตน์ วงษ์สิทธิ์
- Decision owner(s): เจ้าของร้านอำพรคอนกรีต (กฎธุรกิจและบทบาท) · ผู้จัดทำ (ถ้อยคำทางเทคนิค)

## REQ-01 · FR-05

### A. Source and risk

| Field | Record |
|---|---|
| Original Requirement ID | FR-05 |
| Original text | ระบบต้องรับคำขอยืนยันจ่ายสินค้าจากหน้าจอคลังสินค้า โดยต้องยืนยันสองครั้ง และควบคุมลำดับการทำงานของธุรกรรม |
| Source/version/location | Use Case SRS v2.0 หัวข้อ 4.7 ตาราง FR ของ UC-07 |
| Linked risk/stakeholder | QR-01 · พนักงานคลังสินค้า |

### B. Lightweight review

| Check / issue type | Pass / Finding | Evidence, question or counterexample |
|---|---|---|
| Clear / unambiguous | Finding | “ควบคุมลำดับการทำงานของธุรกรรม” ไม่บอกว่าลำดับอะไร ผู้อ่านสองคนตีความต่างกันได้ |
| Complete | Finding | ไม่ระบุว่าใครส่งคำขอได้ (UC-07 บอก “ผู้จัดการทำแทนได้” แต่ BR-02 บอก “พนักงานคลังเท่านั้น”) |
| Consistent | Finding | ขัดกับ BR-02 เรื่องบทบาท (ดู REQ-03) |
| Feasible | Pass | มีหน้าจอยืนยันจ่ายและปุ่มยืนยันซ้ำแล้ว |
| Testable / observable | Pass บางส่วน | “ยืนยันสองครั้ง” มองเห็นได้บนหน้าจอ · “ควบคุมลำดับ” มองไม่เห็น |

### C. Revision and open decision

- Revised wording: **ระบบต้องให้พนักงานคลังสินค้า [และผู้จัดการ — รอยืนยัน] ยืนยันจ่ายคำสั่งซื้อที่อยู่ในสถานะรอจ่ายสินค้าหรือกำลังจัดของ โดยต้องกดยืนยันสองครั้งก่อนระบบส่งคำขอ และบทบาทอื่นที่ส่งคำขอนี้ต้องได้รหัส 403**
- Assumption ที่ยังไม่ใช่ decision: ผู้จัดการจ่ายได้ ตามโค้ดปัจจุบัน
- Open question: OQ-01 ผู้จัดการยืนยันจ่ายได้หรือไม่
- Decision owner + due/decision point: เจ้าของร้าน · ก่อนออก SRS ฉบับถัดไป
- Status: Conditional

### D. Acceptance Criteria

| AC ID | Context/Input/State | Event/Rule | Observable expected result | Type/risk covered |
|---|---|---|---|---|
| AC-05.1 | คำสั่งซื้อรอจ่ายสินค้า พนักงานคลังเปิดใบ | กด “ยืนยันจ่ายสินค้า” | ระบบแสดงกล่องยืนยันซ้ำ ยังไม่ส่งคำขอและสต็อกยังไม่เปลี่ยน | Normal |
| AC-05.2 | กล่องยืนยันซ้ำแสดงอยู่ | กด “ยืนยัน จ่ายสินค้าเลย” | แจ้งส่งมอบสำเร็จ คำสั่งซื้อหายจากคิว | Normal |
| AC-05.3 | ผู้ใช้บทบาทพนักงานขาย | เรียก `POST /api/orders/:id/dispatch` ตรง | ได้ 403 สถานะและสต็อกไม่เปลี่ยน | Negative |

### E. Planned evidence

- Planned test level: System (AC-05.1, 05.2) · Integration/API (AC-05.3)
- Planned evidence: DSP-SYS-01 ภาพหน้าจอ · DSP-07 ผลเทอร์มินัล
- Current status: Planned (ณ W03) → ผลจริงอยู่ใน `03-test-execution/`
- Owner/next action: ตรัยรัตน์

## REQ-02 · FR-06

### A. Source and risk

| Field | Record |
|---|---|
| Original Requirement ID | FR-06 |
| Original text | ระบบต้องดำเนินธุรกรรมตัดสต็อกแบบอะตอมมิก ป้องกันการจ่ายซ้ำ และไม่ให้ยอดคงเหลือติดลบ |
| Source/version/location | Use Case SRS v2.0 หัวข้อ 4.7 · AC-07, AC-08 |
| Linked risk/stakeholder | QR-01, QR-02 · พนักงานคลัง เจ้าของร้าน |

### B. Lightweight review

| Check / issue type | Pass / Finding | Evidence, question or counterexample |
|---|---|---|
| Clear / unambiguous | Finding | “อะตอมมิก” เป็นศัพท์เทคนิค ไม่บอกผลที่ผู้ใช้เห็น · ตัวอย่างค้าน: ใบที่มี 2 รายการ รายการที่สองไม่พอ “อะตอมมิก” หมายถึงรายการแรกต้องถูกคืนด้วยหรือไม่ |
| Complete | Pass | E1 E2 E3 ของ UC-07 ระบุรหัส 409/404 ครบ |
| Consistent | Pass | ตรงกับ AC-07, AC-08, CON-05 |
| Feasible | Pass | ใช้ธุรกรรม InnoDB และ UPDATE แบบมีเงื่อนไข |
| Testable / observable | Finding | ไม่มีค่าขอบ: ยอดเท่ากับจำนวนที่สั่งพอดีจ่ายได้หรือไม่ |

### C. Revision and open decision

- Revised wording: **เมื่อยืนยันจ่าย ระบบต้องหักยอดคงเหลือของทุกรายการตามจำนวนที่สั่งพร้อมกันทั้งใบ ถ้ารายการใดมียอดน้อยกว่าจำนวนที่สั่ง ต้องไม่หักรายการใดเลยและตอบ 409 “สต็อกไม่พอ” ถ้ายอดเท่ากับจำนวนที่สั่งพอดีต้องจ่ายได้และเหลือศูนย์ และคำสั่งซื้อหนึ่งใบจ่ายสำเร็จได้ครั้งเดียว คำขอถัดไปได้ 409 “ถูกจ่ายไปแล้ว”**
- Assumption ที่ยังไม่ใช่ decision: ไม่มี
- Open question: ไม่มี
- Status: Ready

### D. Acceptance Criteria

| AC ID | Context/Input/State | Event/Rule | Observable expected result | Type/risk covered |
|---|---|---|---|---|
| AC-06.1 | ใบเดียว สถานะรอจ่าย คงเหลือ 10 สั่ง 4 | ส่งคำขอยืนยันจ่าย 2 คำขอพร้อมกัน | 200 หนึ่ง 409 หนึ่ง · คงเหลือ 6 · เคลื่อนไหว 1 แถว | Normal + concurrency |
| AC-06.2 | คงเหลือ 2 สั่ง 5 | ยืนยันจ่าย | 409 · คงเหลือ 2 · สถานะรอจ่าย · เคลื่อนไหว 0 | Negative |
| AC-06.3 | รายการ A คงเหลือ 10 สั่ง 1 · รายการ B คงเหลือ 0 สั่ง 1 | ยืนยันจ่าย | 409 · A ยัง 10 · B ยัง 0 | Negative (ย้อนกลับทั้งใบ) |
| AC-06.4 | คงเหลือ 5 สั่ง 5 · และคงเหลือ 4 สั่ง 5 | ยืนยันจ่าย | 5/5 → 200 เหลือ 0 · 4/5 → 409 ยัง 4 | Boundary |

### E. Planned evidence

- Planned test level: Integration
- Planned evidence: DSP-01..06 ผลเทอร์มินัล Jest
- Current status: Planned (ณ W03)
- Owner/next action: ตรัยรัตน์

## REQ-03 · BR-02

### A. Source and risk

| Field | Record |
|---|---|
| Original Requirement ID | BR-02 |
| Original text | ต้องควบคุมคลังสินค้าแบบเรียลไทม์ ให้ตัวเลขในระบบตรงกับสินค้าจริงในคลัง · การจ่ายสินค้าและการตัดสต็อกต้องเป็นธุรกรรมเดียวกัน และเจ้าของงานคือพนักงานคลังเท่านั้น (UC-07) |
| Source/version/location | Use Case SRS v2.0 หัวข้อ 5.5 |
| Linked risk/stakeholder | QR-02 · เจ้าของร้าน |

### B. Lightweight review

| Check / issue type | Pass / Finding | Evidence, question or counterexample |
|---|---|---|
| Clear / unambiguous | Finding | “ตรงกับสินค้าจริง” ไม่บอกว่าตรงเมื่อใด นับอย่างไร คลาดได้เท่าไร |
| Complete | Finding | ไม่มีวิธีวัด จึงต้องพึ่ง TBD-02 |
| Consistent | **Finding** | “พนักงานคลังเท่านั้น” ขัดกับ UC-07 “ผู้จัดการทำแทนได้” และหัวข้อ 2.3 |
| Feasible | Pass | ระบบควบคุมยอดได้ แต่ของที่หยิบออกนอกระบบควบคุมไม่ได้ |
| Testable / observable | Finding | ทดสอบในห้องทดสอบได้แค่ “ยอด = ยอดตั้งต้น − ที่จ่าย” ส่วน “ตรงกับของจริง” ต้องนับที่ร้าน |

### C. Revision and open decision

- Revised wording: **หลังพนักงานจ่ายสินค้าผ่านระบบ ยอดคงเหลือในระบบของทุกสินค้าต้องเท่ากับยอดตั้งต้นลบผลรวมจำนวนที่จ่าย และเมื่อนับสินค้าจริงตอนปิดร้านต้องตรงกับยอดในระบบทุกรายการที่นับ งานจ่ายสินค้าเป็นของพนักงานคลังสินค้า [ผู้จัดการทำแทนได้ — รอยืนยัน]**
- Assumption ที่ยังไม่ใช่ decision: ไม่มีการหยิบของออกนอกระบบระหว่างวันที่นับ
- Open question: OQ-01 (บทบาทผู้จัดการ) · OQ-02 นับกี่รายการ ยอมคลาดได้หรือไม่
- Decision owner + due/decision point: เจ้าของร้าน · ก่อน UAT-05
- Status: Not Ready (ส่วนนับของจริง) · Conditional (ส่วนธุรกรรม)

### D. Acceptance Criteria

| AC ID | Context/Input/State | Event/Rule | Observable expected result | Type/risk covered |
|---|---|---|---|---|
| AC-B2.1 | บันทึกยอดตั้งต้นของสินค้า แล้วจ่ายหลายใบ | ตรวจยอดหลังจ่าย | ยอดในตารางสินค้า = ยอดตั้งต้น − ผลรวมที่จ่าย = ยอดหลังเปลี่ยนในบันทึกเคลื่อนไหวล่าสุด | Normal |
| AC-B2.2 | ผู้จัดการนับสินค้า 5 รายการก่อนเปิดร้าน | จ่ายตามคิวจริงหนึ่งวันแล้วนับใหม่ตอนปิดร้าน | ยอดนับจริงตรงกับยอดในระบบทั้ง 5 รายการ | Validation (UAT) |
| AC-B2.3 | ผู้ใช้บทบาทพนักงานขาย | เรียกยืนยันจ่าย | 403 (ร่วมกับ AC-05.3) | Negative |

### E. Planned evidence

- Planned test level: Integration (AC-B2.1) · UAT (AC-B2.2)
- Planned evidence: ผลเทอร์มินัล · ตารางนับสินค้าที่เจ้าของร้านลงนาม
- Current status: Planned · AC-B2.2 Not Ready รอ OQ-02
- Owner/next action: ตรัยรัตน์กับเจ้าของร้าน

## REQ-04 · NFR-04

### A. Source and risk

| Field | Record |
|---|---|
| Original Requirement ID | NFR-04 |
| Original text | ฐานข้อมูลต้องทนทานต่อธุรกรรมพร้อมกัน ไม่เกิดสภาวะแข่งขัน · วิธีทวนสอบ: ยิงคำขอยืนยันจ่ายพร้อมกันหลายคำขอต่อคำสั่งซื้อเดียว แล้วตรวจยอดสต็อกและบันทึกการเคลื่อนไหว |
| Source/version/location | Use Case SRS v2.0 หัวข้อ 5.4 |
| Linked risk/stakeholder | QR-01 |

### B. Lightweight review

| Check / issue type | Pass / Finding | Evidence, question or counterexample |
|---|---|---|
| Clear / unambiguous | Finding | “ไม่เกิดสภาวะแข่งขัน” พิสูจน์ว่าไม่เกิดไม่ได้ ต้องบอกจำนวนคำขอและจำนวนรอบ |
| Complete | Finding | ไม่ระบุจำนวนคำขอพร้อมกัน |
| Consistent | Pass | ตรงกับ AC-07 |
| Feasible | Pass | — |
| Testable / observable | Finding | ต้องมีตัวเลข |

### C. Revision and open decision

- Revised wording: **เมื่อส่งคำขอยืนยันจ่ายคำสั่งซื้อเดียวกันพร้อมกัน 10 คำขอ ต้องสำเร็จ 1 คำขอ ที่เหลือได้ 409 ยอดสต็อกถูกหักครั้งเดียว และมีบันทึกการเคลื่อนไหว 1 แถวต่อสินค้า 1 รายการ**
- Open question: ไม่มี (จำนวน 10 ใช้ตามชุดทดสอบเดิมของโครงงาน)
- Status: Ready

### D. Acceptance Criteria

| AC ID | Context/Input/State | Event/Rule | Observable expected result | Type/risk covered |
|---|---|---|---|---|
| AC-N4.1 | ใบเดียว คงเหลือ 10 สั่ง 1 | 10 ธุรกรรมพร้อมกัน | สำเร็จ 1 ปฏิเสธ 9 · คงเหลือ 9 | Concurrency |
| AC-N4.2 | สองใบต่างกัน สินค้าเดียวกัน คงเหลือ 1 | ยืนยันพร้อมกัน | สำเร็จ 1 ใบ อีกใบ 409 สต็อกไม่พอ · คงเหลือ 0 ไม่ติดลบ | Concurrency + boundary |

### E. Planned evidence

- Planned test level: Integration
- Planned evidence: `dispatch.test.js` ของโครงงาน
- Current status: Planned (ณ W03)
- Owner/next action: ตรัยรัตน์

## Handoff summary for Week 04

| Requirement ID | Revision status | Acceptance basis ready? | Open decision/blocker | Owner/due | Candidate test level |
|---|---|---|---|---|---|
| FR-05 | Conditional | Conditional | OQ-01 บทบาทผู้จัดการ | เจ้าของร้าน | System · API |
| FR-06 | Ready | Yes | — | ตรัยรัตน์ | Integration |
| BR-02 | Conditional / Not Ready | Conditional | OQ-01 · OQ-02 วิธีนับ | เจ้าของร้าน | Integration · UAT |
| NFR-04 | Ready | Yes | — | ตรัยรัตน์ | Integration |

## Peer review, revision and AI

| Finding ID | Requirement/AC location | Finding/question | Disposition | Revision made / open action | Owner | Re-check |
|---|---|---|---|---|---|---|
| W03-PR-01 | FR-06 AC-06.4 | ไม่มีค่าขอบ S = Q | Fix | เพิ่ม AC-06.4 สองค่า | ตรัยรัตน์ | พนาวุฒน์ |
| W03-PR-02 | BR-02 | “ตรงกับของจริง” วัดไม่ได้ | Clarify | แยก AC-B2.1 (ระบบ) กับ AC-B2.2 (นับจริง) | ตรัยรัตน์ | พนาวุฒน์ |

- Author: ตรัยรัตน์ วงษ์สิทธิ์ · Reviewer: พนาวุฒน์ อภิปสันติ · 23 ต.ค. 2569
- AI Use Declaration: ใช้ Claude ร่างการตรวจและข้อความที่ปรับจาก Use Case SRS v2.0 · ทีมเทียบรหัสและข้อความเดิมกับ SRS ทุกข้อ · ดู [AI-LOG.md](../../../AI-LOG.md)
- ทีมยืนยันว่าไม่มี stakeholder decision, approval, test result, log หรือ screenshot ที่สร้างขึ้นโดยไม่ได้ดำเนินการจริง
