# W04-03 — RTM Lite · ทีม Ti

ไฟล์ข้อมูล: [03-rtm-lite.csv](03-rtm-lite.csv) · 8 แถว · 4 ความต้องการ

## Forward trace

| Requirement | Acceptance basis | Planned test level | Planned evidence | Status (ณ W04) |
|---|---|---|---|---|
| FR-05 | AC-05.1–05.3 | System · API | DSP-SYS-01 · DSP-07 | Planned |
| FR-06 | AC-06.1–06.4 | Integration | DSP-01..06 | Planned |
| BR-02 | AC-B2.1 · AC-B2.2 | Integration · UAT | dispatch.test.js · ตารางนับสินค้า | Planned · Not Ready |
| NFR-04 | AC-N4.1–N4.2 | Integration | dispatch.test.js | Planned |

## Backward trace

| Planned evidence | ย้อนกลับไปที่ | Risk |
|---|---|---|
| DSP-01, DSP-02 | FR-06 AC-06.1 · NFR-04 | QR-01 |
| DSP-03, DSP-04, DSP-05, DSP-06 | FR-06 AC-06.2–06.4 | QR-02 |
| DSP-07 | FR-05 AC-05.3 · BR-02 AC-B2.3 | QR-01 (RV-06) |
| DSP-SYS-01 | FR-05 AC-05.1–05.2 | QR-01 |
| ตารางนับสินค้า | BR-02 AC-B2.2 | QR-02 |

ไม่มี evidence ที่ย้อนกลับไม่ได้ · ช่อง Planned Evidence ไม่มีผล Pass/Fail เพราะ W04 ยังไม่รัน ผลจริงอยู่ใน `03-test-execution/`
