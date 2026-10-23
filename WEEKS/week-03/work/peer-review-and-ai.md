# W03 Peer Review, Revision and AI Record · ทีม Ti

## Peer review

- Draft commit/version: `critical-requirement-review.md` ร่าง 23 ต.ค. 2569 (ก่อน commit `179db52`)
- Author(s): ตรัยรัตน์ วงษ์สิทธิ์
- Reviewer(s): พนาวุฒน์ อภิปสันติ
- Date: 23 ต.ค. 2569

| Finding ID | Requirement/AC location | Finding/question | Disposition | Revision made / open action | Owner | Re-check |
|---|---|---|---|---|---|---|
| W03-PR-01 | FR-06 AC-06.4 | ไม่มีค่าขอบเมื่อยอดเท่ากับจำนวนที่สั่ง | Fix | เพิ่ม AC-06.4 (5/5 และ 4/5) | ตรัยรัตน์ | พนาวุฒน์ |
| W03-PR-02 | BR-02 | “ตรงกับของจริง” วัดไม่ได้ | Clarify | แยก AC-B2.1 (ระบบ) กับ AC-B2.2 (นับจริง) · จำนวนรายการเปิดเป็น OQ-02 | ตรัยรัตน์ | พนาวุฒน์ |
| W03-PR-03 | FR-05 / BR-02 | บทบาทผู้จัดการขัดกัน | Defer | บันทึก OQ-01 ไม่เดาคำตอบ · สถานะ Conditional | เจ้าของร้าน | Open |

## Revision note

- จาก draft → revision commit/version: ร่าง 23 ต.ค. 2569 → `179db52`
- เปลี่ยนอะไรและเพราะอะไร: เพิ่ม AC ค่าขอบของ FR-06 และแยก AC ของ BR-02 เป็นส่วนที่ทดสอบในระบบได้กับส่วนที่ต้องนับของจริง
- ยังมี open issue ใด: OQ-01 บทบาทผู้จัดการ · OQ-02 วิธีนับสินค้าจริง
- Reviewer re-check result: Conditional

## AI Use Declaration

- ใช้ AI: Yes
- ใช้เพื่อ: Claude Code ร่างการตรวจห้ามุมและข้อความที่ปรับจาก Use Case SRS v2.0
- Input ที่ให้/วิธีปกป้องข้อมูล: Use Case SRS v2.0 (ไม่ส่งข้อมูลลูกค้าหรือรหัสผ่าน) · ตัดรหัสนักศึกษาออกจากไฟล์ใน repo
- ข้อเสนอที่ใช้/แก้/ปฏิเสธ: ใช้โครงตาราง · แก้ข้อความที่ปรับให้ใช้รหัส FR/BR/AC เดิม · ปฏิเสธการเดาคำตอบของ OQ-01 และ OQ-02
- ตรวจสอบกับ SRS/owner อย่างไร: เทียบข้อความเดิมกับ Use Case SRS v2.0 หัวข้อ 4.7, 5.4, 5.5 ทุกข้อ · ตำแหน่งบทบาทเทียบกับ `soml/backend/app.js` บรรทัด 52
- Verification owner/date: ตรัยรัตน์ วงษ์สิทธิ์ · 23 ต.ค. 2569

ทีมยืนยันว่าไม่มี stakeholder decision, approval, test result, log หรือ screenshot ที่ AI/ทีมสร้างขึ้นโดยไม่ได้ดำเนินการจริง
