# W04-04 — Quality Gate A Decision · ทีม Ti

## Evidence reviewed

- SRS/Requirement version: Use Case SRS v2.0 (20/09/2569)
- W03-OUT: `WEEKS/week-03/submission/W03_Ti_Revised-Critical-Requirements_v1.pdf`
- Review Log: `02-srs-review-log.md` (RV-01..07)
- RTM v1: `03-rtm-lite.csv` (8 แถว)
- Reviewers/decision owner/date: พนาวุฒน์ อภิปสันติ (reviewer) · ตรัยรัตน์ วงษ์สิทธิ์ (requirement owner) · 23 ต.ค. 2569

## Decision

- [ ] `Ready`
- [x] `Conditional` — ไปต่อเฉพาะส่วนที่ระบุ พร้อม conditions, owner และ due
- [ ] `Not Ready`

## Evidence-based rationale

FR-06 และ NFR-04 เป็น Ready เพราะ RV-02, RV-03, RV-04 แก้และตรวจซ้ำแล้ว และ RTM แถว FR-06/NFR-04 มี acceptance basis ครบ จึงพร้อมสำหรับการออกแบบกรณีทดสอบ Integration ทันที · FR-05 และ BR-02 เป็น Conditional เพราะ RV-01 (บทบาทผู้จัดการ) ยัง Deferred และ RV-05 ส่วนการนับของจริงยัง Open ทำให้ RTM แถว BR-02 AC-B2.2 เป็น Not Ready · ไม่มี finding ระดับ Critical ที่ทำให้หยุดทั้ง slice

## Conditions / blockers / actions

| ID | Condition or blocker | Affected requirement / Phase 2 work | Action | Owner | Due | Re-check evidence |
|---|---|---|---|---|---|---|
| GA-01 | ผู้จัดการยืนยันจ่ายได้หรือไม่ (OQ-01, RV-01) | FR-05, BR-02 · กรณีทดสอบผู้จัดการใน System/UAT | ถามเจ้าของร้าน แก้ BR-02 แล้วออกชุดกรณีทดสอบ v2 | ตรัยรัตน์ | ก่อน SRS ฉบับถัดไป | BR-02 ฉบับแก้ · S2-B v2 |
| GA-02 | วิธีนับสินค้าจริง (OQ-02, RV-05) | BR-02 AC-B2.2 · UAT | ตกลงจำนวนรายการและวันนับกับเจ้าของร้าน | ตรัยรัตน์ + เจ้าของร้าน | ก่อน UAT นับสต็อก | ตารางนับที่ลงนาม |

## Sign-off

- Requirement owner/representative: ตรัยรัตน์ วงษ์สิทธิ์ · 23 ต.ค. 2569 · เจ้าของร้าน `Not Available` (ยังไม่ได้ตอบ OQ-01, OQ-02)
- Reviewer: พนาวุฒน์ อภิปสันติ · 23 ต.ค. 2569
- Team: ทีม Ti · 23 ต.ค. 2569

Sign-off นี้เป็นบันทึกการทบทวนในรายวิชา ไม่ใช่การอนุมัติจากเจ้าของร้าน
