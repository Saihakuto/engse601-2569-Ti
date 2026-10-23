# Evidence Register · ทีม Ti

| Evidence ID | Supports requirement/risk/decision | Artifact/path/URL | Version/build/commit | Method/context | Status | Owner | Next action / limitation |
|---|---|---|---|---|---|---|---|
| EV-01 | FR-06 · AC-07 · AC-08 · QR-01 · QR-02 | `03-test-execution/evidence/DSP-01_to_DSP-07_integration_2026-10-23.txt` | soml `29bd025` | Jest + Supertest กับ MySQL ทดสอบ · 23 ต.ค. 2569 | Existing | ตรัยรัตน์ | รันในห้องทดสอบ ไม่ใช่เครือข่ายร้าน |
| EV-02 | FR-06 · NFR-04 · BR-02 | `03-test-execution/evidence/DSP_integration_2026-10-23.txt` | soml `29bd025` | ชุดทดสอบเดิมของโครงงาน 13 ข้อ · 23 ต.ค. 2569 | Existing | ตรัยรัตน์ | ส่วนหัวบันทึกรอบที่ล้มเพราะสภาพแวดล้อม |
| EV-03 | FR-05 · AC-07 · REQ-05 | `03-test-execution/evidence/DSP-SYS-01_system_2026-10-23*` (txt + ภาพ 6 ภาพ) | soml `29bd025` | Playwright Chromium ผ่านหน้าจอจริง · 23 ต.ค. 2569 | Existing | ตรัยรัตน์ | ขับด้วยสคริปต์ ไม่ใช่คนกด · ชื่อพนักงานถูกปิด |
| EV-04 | FR-05 · AC-05.3 · RV-06 | DSP-07 ใน EV-01 · `soml/backend/app.js` บรรทัด 52 | soml `29bd025` | API ด้วยโทเคนพนักงานขาย | Existing | ตรัยรัตน์ | — |
| EV-05 | BR-02 · QR-02 · AC-B2.2 | UAT-01 (นับของจริงเทียบยอด) | — | UAT กับพนักงานคลังและเจ้าของร้าน | Not Executed | ตรัยรัตน์ + เจ้าของร้าน | รอ DI-02 · UAT-05 ในบทที่ 4 ไม่ได้นับ |
| EV-06 | QR-01 · UC-07 (Validation) | ปริญญานิพนธ์บทที่ 4 ตารางที่ 4.10 UAT-03, UAT-04 | ฉบับส่งเล่ม `29bd025` | UAT ที่ร้าน 17 และ 19 ต.ค. 2569 | Existing | ตรัยรัตน์ | ใบบันทึกผลมีลายมือชื่อพนักงาน ไม่นำเข้า repo สาธารณะ |
| EV-07 | ข้อค้นพบ S1-B · DI-01 | `01-plan/S1-B_Ti.pdf` ขั้นที่ 4 | 30 ก.ย. 2569 | ทบทวนเอกสาร | Existing | ตรัยรัตน์ | ยังไม่ได้คำตอบจากเจ้าของร้าน |
| EV-08 | Gate A | `WEEKS/week-04/submission/W04_Ti_SRS-Review-and-RTM_v1.pdf` | 23 ต.ค. 2569 | Review Log + RTM | Existing | ตรัยรัตน์ / พนาวุฒน์ | Conditional |
| EV-09 | Gate B (Case X) | `WEEKS/week-05/submission/W05_Ti_Requirement-to-Design-Trace_v1.pdf` | CaseX HLD v0.9 | ทบทวนเอกสารออกแบบ | Existing | ตรัยรัตน์ | ไม่ได้ตรวจข้ามทีม |
| EV-10 | ชุดอ้างอิง v1 | `02-test-design/S2-B_Ti.pdf` | v1 · 23 ต.ค. 2569 | ออกแบบจาก SRS ก่อนรัน | Existing | ตรัยรัตน์ | ผู้ทบทวนต้องยืนยันขั้นที่ 5 |

หลักฐาน `Existing` ต้องเปิดตรวจได้ ส่วน `Planned`, `Not Ready`, `Not Executed` ต้องไม่เขียน actual result หรือ pass/fail เสมือนเกิดขึ้นแล้ว
