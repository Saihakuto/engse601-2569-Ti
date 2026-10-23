# W04-05 — Phase 2 Entry Pack · ทีม Ti

| Phase 2 week | Candidate scope from RTM | Input/evidence ready now | Conditional / Not Ready item | Owner/next action | Entry status |
|---:|---|---|---|---|---|
| 05 Component/Unit Testing | `stock-deduction` ตรรกะหักยอด · FR-06 | AC-06.1–06.4 · โค้ด `soml/backend/modules/stock-deduction` | ตรรกะผูกกับฐานข้อมูล จึงเหมาะกับ Integration มากกว่า Unit | ตรัยรัตน์ | Ready |
| 06 Integration Testing | `POST /api/orders/:id/dispatch` กับ MySQL · FR-06, NFR-04, FR-05 AC-05.3 | AC ครบ · ฐานข้อมูลทดสอบและ seed มีแล้ว | กรณีผู้จัดการ (GA-01) | ตรัยรัตน์ | Conditional |
| 07 System/UAT | หน้าจอคิว → ยืนยันจ่าย · FR-05 · BR-02 AC-B2.2 | AC-05.1–05.2 · ระบบติดตั้งที่ร้านแล้ว | AC-B2.2 รอ GA-02 | ตรัยรัตน์ + เจ้าของร้าน | Conditional |
| 08 Test Design Techniques | ค่าขอบ S/Q · ตารางตัดสินใจหลายรายการ · สถานะรอจ่าย→ส่งมอบสำเร็จ | AC-06.2–06.4 | — | ตรัยรัตน์ | Ready |

## Priority handoff

- Critical slice ที่ควร trace ต่อก่อน: UC-07 → `stock-deduction` (W05 / ใบงานครั้งที่ 1)
- Requirement/AC ที่พร้อมที่สุด: FR-06 AC-06.1–06.4
- Open decision ที่เสี่ยง block หลายสัปดาห์: GA-01 บทบาทผู้จัดการ
- สิ่งที่ ENGSE212 ต้องทบทวน/อัปเดต: BR-02 ในหัวข้อ 5.5 ให้ตรงกับ UC-07 และโค้ด
- AI Use Declaration: ใช้ Claude ร่าง Review Log และ RTM · ดู [AI-LOG.md](../../../AI-LOG.md)
