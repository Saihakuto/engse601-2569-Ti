# Peer Review Record · ทีม Ti

## Review context

- Week/artifact: งานส่ง G1–G9 ทั้งชุด (W01–W05, S1-B, S2-B, B1)
- Version/commit: `179db52`
- Author(s): ตรัยรัตน์ วงษ์สิทธิ์
- Reviewer(s): พนาวุฒน์ อภิปสันติ · ทวีชัย ทิใจ (ตรวจรูปแบบและชื่อไฟล์)
- วันที่: 23 ต.ค. 2569
- Checklist/Definition of Done ที่ใช้: “ตรวจก่อนส่ง” ใน SUBMISSIONS.md · Definition of Done ใน README ของแต่ละสัปดาห์ · EVIDENCE-RULES.md · `tools/check_submission.py`

## Findings and disposition

| Finding ID | Location / source | Finding or question | Impact / priority | Disposition | Owner | Due | Re-check evidence/status |
|---|---|---|---|---|---|---|---|
| PR-01 | S1-B (docx เดิม) | มีรหัสนักศึกษา repo เป็น Public | สูง | Fix | ทวีชัย | 23 ต.ค. | ตัดออกแล้ว · checker ไม่พบรูปแบบรหัส |
| PR-02 | ภาพ DSP-SYS-01 รอบแรก | ภาพมีชื่อพนักงานร้าน | สูง | Fix | ตรัยรัตน์ | 23 ต.ค. | ลบภาพ รันใหม่โดยปิดชื่อ |
| PR-03 | W01 QR-03, QR-04 | สถานะ Not Executed ไม่ตรงกับบทที่ 4 ฉบับส่งเล่ม (TC-12 และ UAT-02 ทำแล้ว) | กลาง | Fix | ตรัยรัตน์ | 23 ต.ค. | แก้เป็น Existing พร้อมอ้างตาราง |
| PR-04 | execution-report.md รอบแรก | รันจาก `main` ซึ่งเก่ากว่ารุ่นส่งเล่ม | กลาง | Fix | ตรัยรัตน์ | 23 ต.ค. | รันใหม่บน `29bd025` · บันทึกรอบเก่าไว้ |
| PR-05 | S2-B ขั้นที่ 5 | ผลการตรวจในตารางร่างโดย Claude | กลาง | Clarify | พนาวุฒน์ | ก่อนสร้าง Release | รอผู้ทบทวนยืนยัน |
| PR-06 | TEAM.md | ผู้ส่งหลักไม่ตรงกันระหว่างหัวตารางกับตารางสมาชิก | ต่ำ | Fix | ทวีชัย | 23 ต.ค. | ใช้ทวีชัย (เจ้าของ repo) |
| PR-07 | W05 | ไม่ได้ตรวจข้ามทีม | ต่ำ | Defer | ทีม | — | เขียนบอกตามจริงใน W05 หัวข้อ 7 |

## Review decision

- [ ] Ready to submit
- [x] Ready with recorded open issues
- [ ] Revise and re-check
- เหตุผลจากหลักฐาน: checker ผ่าน G1–G9 (GitHub Actions สำเร็จบน `179db52`) · ไม่มีรหัสนักศึกษาหรือชื่อพนักงานร้าน · ประเด็นเปิดคือ PR-05 และ DI-01, DI-02
- Revision commit/path: `179db52` และ commit ที่กรอก TEMPLATES
- Reviewer re-check: พนาวุฒน์ อภิปสันติ / (รอลงวันที่)
