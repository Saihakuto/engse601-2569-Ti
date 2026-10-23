# Input Register and Source of Truth

| Input ID | Artifact | File path / URL | Version / date / commit | Owner | Status | Used by | Notes / change impact |
|---|---|---|---|---|---|---|---|
| IN-01 | Proposal | `INPUTS/proposal/` | v1.0 / ปีการศึกษา 2569 | นายตรัยรัตน์ วงษ์สิทธิ์, นายพนาวุฒน์ อภิปสันติ | Current | W01–W04 | อ้างอิงจากบทที่ 1 (บทนำและเค้าโครงโครงงาน) |
| IN-02 | Requirement/SRS | `INPUTS/requirements-srs/` | ภาคผนวก ก (SRS v1.0) / ปีการศึกษา 2569 | นายตรัยรัตน์ วงษ์สิทธิ์, นายพนาวุฒน์ อภิปสันติ | Current | W01–W04 | ข้อกำหนดความต้องการซอฟต์แวร์ฉบับสมบูรณ์ |
| IN-03 | HLD/Detail Design | `INPUTS/design/` | บทที่ 3 และภาคผนวก ข (SDD) / 2569 | นายตรัยรัตน์ วงษ์สิทธิ์, นายพนาวุฒน์ อภิปสันติ | Current | W02, W04–W08 | สถาปัตยกรรม C4, ERD และพจนานุกรมข้อมูลฐานข้อมูล |
| IN-04 | ENGSE212 repository | https://github.com/TriratWongsit/soml-pos-inventory | ภาคผนวก ฉ / Branch: main |นายตรัยรัตน์ วงษ์สิทธิ์, นายพนาวุฒน์ อภิปสันติ | Current | W02–W16 | คลังเก็บโค้ดซอร์สโค้ดระบบอำพร OMS |
| IN-05 | Stakeholder/glossary/risk notes | repo โครงงาน `Documents/ผู้มีส่วนได้ส่วนเสีย.md` · Use Case SRS v2.0 Appendix A | หน้า น (ประมวลศัพท์) และบทที่ 3 | นายตรัยรัตน์ วงษ์สิทธิ์, นายพนาวุฒน์ อภิปสันติ | Current | W01–W04 | อภิธานศัพท์ คำย่อ และการวิเคราะห์ผู้มีส่วนได้ส่วนเสีย/หลักฐานหน้างาน |

## Status meaning

- `Current`: version ที่ทีมประกาศเป็น source of truth สำหรับงานปัจจุบัน
- `Draft`: ใช้ทบทวนได้แต่ยังไม่เป็น baseline
- `Superseded`: มี version ใหม่กว่า; เก็บไว้เพื่อ trace
- `Not Ready`: ยังไม่มีหรือยังเปิดตรวจไม่ได้ ต้องมี owner/next action ใน Notes

## Input change log

| Date | Input ID | Old → New | Reason | Week/artifact affected | Action/owner |
|---|---|---|---|---|---|
| 23 ต.ค. 2569 | IN-02 | SRS v1.0 → Use Case SRS v2.0 (20/09/2569) | ฉบับที่ใช้ในใบงานครั้งที่ 1 และมี UC-07, BR-02, AC-07/08 ครบ | S1-B, S2-B, W01–W04 | ตรัยรัตน์ |
| 23 ต.ค. 2569 | IN-04 | branch `main` `ca3ddb4` → `final-book-20261022` `29bd025` | `main` เก่ากว่ารุ่นส่งเล่ม และสคริปต์รีเซ็ตฐานข้อมูลล้มเรื่องชุดอักขระ | B1 (03-test-execution) | ตรัยรัตน์ |
