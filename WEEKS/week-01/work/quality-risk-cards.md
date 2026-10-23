# W01 · Quality Risk Cards · ทีม Ti

> จัดทำเป็นไฟล์ส่ง 23 ต.ค. 2569 จากเอกสารโครงงานที่มีอยู่แล้ว (Use Case SRS v2.0 ลงวันที่ 20/09/2569) · สถานะหลักฐานเขียนตามปริญญานิพนธ์บทที่ 4 ฉบับส่งเล่ม (commit `29bd025`, 22 ต.ค. 2569) · รหัส TC/UAT ตามบทที่ 4

## Submission context

- Project/team: อำพร OMS ระบบจัดการคำสั่งซื้อและตรวจสอบคลังสินค้า ร้านอำพรคอนกรีต · ทีม Ti
- Proposal/SRS source + version: ปริญญานิพนธ์บทที่ 1 (บทนำ) · Use Case SRS v2.0 (Review Candidate, 20/09/2569) หัวข้อ 4.3–4.7, 5.5, Appendix C–D
- Authors: ตรัยรัตน์ วงษ์สิทธิ์
- Peer reviewer: พนาวุฒน์ อภิปสันติ
- Review date/commit: 23 ต.ค. 2569 · repo โครงงาน commit `29bd025`

## Card QR-01 จ่ายสินค้าซ้ำจากคำสั่งซื้อใบเดิม

| Field | Team record |
|---|---|
| Requirement/feature/stakeholder source | FR-06 ตัดสต็อกแบบอะตอมมิก ป้องกันการจ่ายซ้ำ · UC-07 · AC-07 · หลักฐานหน้างาน EV-06 (บิลกระดาษถูกใช้รับของซ้ำ) · พนักงานคลังและเจ้าของร้าน |
| Situation/context | พนักงานคลังสองคนเปิดคำสั่งซื้อใบเดียวกันบนมือถือคนละเครื่อง หรือกดยืนยันซ้ำเพราะเครือข่ายช้า |
| Quality risk statement | เมื่อมีคำขอยืนยันจ่ายใบเดิมสองคำขอใกล้กัน อาจถูกตัดสต็อกสองครั้งและจ่ายของออกสองชุด ทำให้ร้านเสียสินค้าฟรีและยอดสต็อกผิดทันที |
| Quality concern | Reliability (ความถูกต้องภายใต้การทำงานพร้อมกัน) · Functional correctness |
| Impact and rationale | เป็นปัญหาที่เคยเกิดจริงก่อนมีระบบ และเป็นเหตุผลหลักที่ร้านต้องการระบบ ถ้าพังจะไม่มีใครรู้จนนับของ |
| Verification question/action | เงื่อนไขสถานะเดิมอยู่ในคำสั่ง UPDATE เดียวกับการเปลี่ยนสถานะหรือไม่ · ยิงคำขอพร้อมกันแล้วตรวจจำนวนแถวเคลื่อนไหวสต็อก |
| Validation question/action | พนักงานคลังมั่นใจหรือไม่ว่าจะไม่จ่ายซ้ำ และเมื่อถูกปฏิเสธเข้าใจข้อความหรือไม่ |
| Planned evidence | ชุดทดสอบ Integration ของ UC-07 · ทดสอบ System ผ่านหน้าจอ · แบบประเมินผู้ใช้ข้อ “มั่นใจว่าไม่จ่ายซ้ำ” |
| Evidence status | Existing (TC-06 ระดับ Integration ผ่าน · UAT-04 ที่ร้าน 17 และ 19 ต.ค. 2569 ผ่านตามภาพหลักฐาน) |
| Evidence path/owner/next action | `soml/backend/tests/integration/dispatch.test.js` · ตรัยรัตน์ · รันซ้ำในใบงานรวม 3–4 |

## Card QR-02 ยอดสต็อกในระบบไม่ตรงกับของจริงในคลัง

| Field | Team record |
|---|---|
| Requirement/feature/stakeholder source | BR-02 ตัวเลขสินค้าคงเหลือในระบบต้องตรงกับจำนวนสินค้าจริง · FR-06 · AC-08 · TBD-02 · EV-07 (สต็อกไม่ตรง) · เจ้าของร้าน |
| Situation/context | สินค้ารายการหนึ่งในคำสั่งซื้อมีไม่พอ หรือมีการปรับสต็อกระหว่างวัน |
| Quality risk statement | เมื่อสินค้ารายการที่สองของคำสั่งซื้อมีไม่พอแต่รายการแรกถูกหักไปแล้ว ยอดอาจค้างครึ่งทาง ทำให้เจ้าของร้านสั่งซื้อผิดและตัวเลขในระบบเชื่อไม่ได้ |
| Quality concern | Data integrity · Functional suitability |
| Impact and rationale | วัตถุประสงค์ข้อ 1.2.3 ของโครงงานคือให้ตัวเลขตรงกับของจริง ถ้าไม่ตรง ระบบไม่มีประโยชน์ต่อเจ้าของร้าน |
| Verification question/action | ธุรกรรมย้อนกลับทุกรายการเมื่อรายการใดไม่พอหรือไม่ · ยอดคงเหลือติดลบได้หรือไม่ |
| Validation question/action | หลังใช้งานจริงหนึ่งวัน นับของจริงแล้วตรงกับยอดในระบบหรือไม่ |
| Planned evidence | Integration กรณีสต็อกไม่พอและหลายรายการ · UAT นับของจริงเทียบยอด 20 คำสั่งซื้อ |
| Evidence status | Existing (TC-07 สต็อกไม่พอ ผ่าน) · Not Executed (UAT-05 นับของจริง ไม่มีข้อมูลยืนยันเพราะไม่ได้นับสต็อก) |
| Evidence path/owner/next action | UAT: ตรัยรัตน์ กับเจ้าของร้าน · ต้องทำที่ร้าน |

## Card QR-03 คิวคลังไม่อัปเดตหรืออัปเดตช้า

| Field | Team record |
|---|---|
| Requirement/feature/stakeholder source | FR-04 · NFR-02 แสดงบนหน้าจอคิวภายใน 3 วินาที · AC-06 · BR-03 · TBD-06 · พนักงานคลังและลูกค้า |
| Situation/context | พนักงานขายยืนยันรับชำระ แล้วลูกค้าเดินไปที่คลัง |
| Quality risk statement | เมื่อการผลักข้อมูลไปหน้าจอคิวหลุดหรือช้า คลังไม่รู้ว่ามีคำสั่งซื้อ ลูกค้าต้องยืนรอ ซึ่งเป็นปัญหาเดิมที่ระบบตั้งใจแก้ |
| Quality concern | Performance efficiency · Reliability |
| Impact and rationale | วัดได้ด้วยเวลา และกระทบลูกค้าโดยตรง |
| Verification question/action | วัดเวลาตั้งแต่ยืนยันรับชำระจนรายการปรากฏบนหน้าจอคิวหลายรอบ |
| Validation question/action | บนเครือข่ายจริงของร้าน พนักงานคลังเริ่มจัดของก่อนลูกค้ามาถึงได้หรือไม่ |
| Planned evidence | ผลวัด TC-05 · แบบประเมินผู้ใช้ข้อ 6–7 |
| Evidence status | Existing (TC-05 สูงสุด 80 มิลลิวินาที · UAT-02 ที่ร้าน 16–17 ต.ค. 2569 ผ่าน) |
| Evidence path/owner/next action | ปริญญานิพนธ์ตารางที่ 4.8 และ 4.10 · พนาวุฒน์ · ไม่มีงานค้าง |

## Card QR-04 เครื่องพิมพ์ขัดข้องแล้วการขายล้มตาม

| Field | Team record |
|---|---|
| Requirement/feature/stakeholder source | FR-03 · BR-01 · NFR-05 พิมพ์สำเร็จภายใน 5 วินาที · AC-05 · AC-14 · TBD-01 · พนักงานขาย |
| Situation/context | เครื่อง Epson TM-T82 กระดาษหมดหรือหลุด USB ขณะลูกค้าชำระเงิน |
| Quality risk statement | เมื่อบริการพิมพ์ล้ม หากการบันทึกคำสั่งซื้อผูกกับการพิมพ์ ร้านจะขายไม่ได้ทั้งร้านเพราะอุปกรณ์ชิ้นเดียว |
| Quality concern | Fault tolerance · Usability (ภาษาไทยบนใบเสร็จ) |
| Impact and rationale | หน้าร้านเป็นจุดรับเงิน หยุดไม่ได้ |
| Verification question/action | ปิดบริการพิมพ์แล้วยืนยันรับชำระ คำสั่งซื้อยังเข้าคิวหรือไม่ |
| Validation question/action | ใบเสร็จภาษาไทยจากเครื่องจริงอ่านได้และพิมพ์ทันหรือไม่ |
| Planned evidence | Integration กรณีบริการพิมพ์ล่ม · พิมพ์กับเครื่องจริง TC-13 |
| Evidence status | Existing (ปิดบริการพิมพ์แล้วขายได้ตาม AC-05 · TC-12 เครื่องจริงพิมพ์ไทยถูกต้อง ประมาณ 2.3 วินาที) |
| Evidence path/owner/next action | ปริญญานิพนธ์หัวข้อ 4.3.3.3 และตารางที่ 4.8 · ตรัยรัตน์ · ไม่มีงานค้าง |

## Peer check and revision

| Check | Result / comment | Revision made / open action |
|---|---|---|
| ทุก card trace ไปยัง source จริงได้ | ทุกใบมีรหัส FR/NFR/BR/AC และหลักฐานหน้างาน EV | — |
| risk statement มี event/condition และ impact | ใช้รูป “เมื่อ… อาจ… ทำให้…” ครบทุกใบ | — |
| V&V action ตอบ risk ไม่ใช่คำกว้าง | แยก Verification (ตรวจกับข้อกำหนด) กับ Validation (ตรวจกับผู้ใช้และหน้างาน) | — |
| evidence status เป็นความจริง | เทียบกับบทที่ 4 ฉบับส่งเล่ม · UAT-05 ที่ไม่ได้นับสต็อกเขียน Not Executed | แก้สถานะ QR-03 และ QR-04 จาก Not Executed เป็น Existing หลังเทียบกับบทที่ 4 ฉบับล่าสุด |

## Team conclusion

- Critical risk/feature ที่เลือกไป Week 02: **QR-01 + QR-02 → UC-07 ยืนยันจ่ายสินค้าและตัดสต็อก** เพราะเป็นความสามารถที่ SRS ระบุว่าสำคัญที่สุด และทั้งสองความเสี่ยงอยู่ในธุรกรรมเดียวกัน
- สิ่งที่ยังไม่รู้และ owner: ยอดในระบบตรงกับของจริงหลังใช้งานหรือไม่ (UAT-05 / TBD-02, ตรัยรัตน์กับเจ้าของร้าน)
- AI Use Declaration: ใช้ Claude จัดข้อมูลจากเอกสารโครงงานลงแบบกรอก ดู [AI-LOG.md](../../../AI-LOG.md)
