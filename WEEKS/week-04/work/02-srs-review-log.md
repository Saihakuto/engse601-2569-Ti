# W04-02 — SRS Review Log · ทีม Ti

| Finding ID | Req ID / version / location | Lens | Pass/Finding + evidence/counterexample | Impact / priority | Disposition | Revision / decision | Owner / due | Re-check status/evidence |
|---|---|---|---|---|---|---|---|---|
| RV-01 | BR-02 / v2.0 / 5.5 · UC-07 / 4.7 · 2.3 | Consistent | Finding: BR-02 “เจ้าของงานคือพนักงานคลังเท่านั้น” · UC-07 “ผู้จัดการทำแทนได้” · โค้ด `app.js` บรรทัด 52 `requireRole('warehouse','manager')` | Major — ผลที่คาดหวังของกรณีผู้จัดการเขียนไม่ได้ | Deferred | รอเจ้าของร้านตัดสิน (OQ-01) ระหว่างนี้ชุดทดสอบ v1 ไม่มีกรณีผู้จัดการ | ตรัยรัตน์ / ก่อน SRS ฉบับถัดไป | Open |
| RV-02 | FR-06 / v2.0 / 4.7 | Testable | Finding: ไม่มีค่าขอบเมื่อยอดเท่ากับจำนวนที่สั่งพอดี | Minor | Revised | เพิ่ม AC-06.4 (5/5 จ่ายได้ · 4/5 ไม่ได้) | ตรัยรัตน์ / 23 ต.ค. | Re-checked โดยพนาวุฒน์ · มีใน S2-B DSP-05, DSP-06 |
| RV-03 | FR-06 / v2.0 / 4.7 | Clear | Finding: “อะตอมมิก” ไม่บอกผลที่สังเกตได้กรณีหลายรายการ | Minor | Revised | ข้อความใหม่ระบุ “ไม่หักรายการใดเลย” และเพิ่ม AC-06.3 | ตรัยรัตน์ / 23 ต.ค. | Re-checked · DSP-04 |
| RV-04 | NFR-04 / v2.0 / 5.4 | Testable | Finding: “ไม่เกิดสภาวะแข่งขัน” ไม่มีจำนวนคำขอ | Minor | Revised | 10 คำขอพร้อมกัน สำเร็จ 1 | ตรัยรัตน์ / 23 ต.ค. | Re-checked |
| RV-05 | BR-02 / v2.0 / 5.5 | Testable | Finding: “ตรงกับสินค้าจริง” ไม่มีวิธีนับและช่วงเวลา (เชื่อมกับ TBD-02) | Major — Validation ของวัตถุประสงค์หลัก | Revised (บางส่วน) | แยก AC-B2.1 (ระบบ) กับ AC-B2.2 (นับจริง 5 รายการ) · จำนวนรายการรอเจ้าของร้าน (OQ-02) | ตรัยรัตน์ + เจ้าของร้าน | AC-B2.2 Open |
| RV-06 | FR-05 / v2.0 / 4.7 | Complete | Finding: ไม่มี AC ว่าพนักงานขายเรียกเส้นทางยืนยันจ่ายตรงแล้วถูกปฏิเสธ (AC-01 ตรวจแค่เส้นทางผู้จัดการ) | Major — ช่องโหว่สิทธิ์ของกฎสำคัญ | Revised | เพิ่ม AC-05.3 403 | ตรัยรัตน์ / 23 ต.ค. | Re-checked · DSP-07 |
| RV-07 | FR-05 / v2.0 / 4.7 | Traceable | Pass: FR-05, FR-06 ชี้ไป AC-07, AC-08 และ TC ในบทที่ 3 ครบ | — | Accepted | — | — | — |

## Requirement status after review

| Requirement ID | Status | Acceptance basis | Remaining open issue | Owner/due | Reason/evidence |
|---|---|---|---|---|---|
| FR-05 | Conditional | AC-05.1–05.3 | OQ-01 | เจ้าของร้าน | RV-01, RV-06 |
| FR-06 | Ready | AC-06.1–06.4 | ไม่มี | ตรัยรัตน์ | RV-02, RV-03 ปิดแล้ว |
| BR-02 | Conditional | AC-B2.1–B2.3 | OQ-01, OQ-02 | เจ้าของร้าน | RV-01, RV-05 |
| NFR-04 | Ready | AC-N4.1–N4.2 | ไม่มี | ตรัยรัตน์ | RV-04 ปิดแล้ว |

ข้อความที่ปรับเป็นข้อเสนอของทีม ยังไม่ใช่การตัดสินของเจ้าของร้าน จึงใช้ Conditional กับข้อที่มี OQ ค้าง
