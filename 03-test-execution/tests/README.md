# โค้ดทดสอบ

| ไฟล์ | TC | ระดับ |
|---|---|---|
| [integration/dsp-reference.test.js](integration/dsp-reference.test.js) | DSP-01 ถึง DSP-07 | Integration (HTTP + MySQL ทดสอบ) |
| [system/DSP-SYS-01.spec.js](system/DSP-SYS-01.spec.js) | DSP-SYS-01 | System (Playwright ผ่านหน้าจอจริง) |
| [LINKS.md](LINKS.md) | ชุดเดิมของโครงงานที่รันประกอบ และตัวช่วยที่ไฟล์ข้างบนเรียกใช้ | — |

ทั้งสองไฟล์เรียกตัวช่วยจาก repo โครงงาน จึงต้องบอกตำแหน่งโฟลเดอร์ `soml/` ผ่านตัวแปร `SOML_DIR`

## วิธีรัน Integration

ต้องมี MySQL และไฟล์ `soml/.env` ตามคู่มือติดตั้งของโครงงาน · `globalSetup` รีเซ็ตฐาน `soml_new_test` ก่อนรัน

`jest.dsp.config.js` (วางที่ใดก็ได้ แก้ `<SOML>` และ `<REPO>` เป็น path จริง)

```js
module.exports = {
  rootDir: '<REPO>/03-test-execution/tests',
  testEnvironment: 'node',
  testMatch: ['**/integration/*.test.js'],
  setupFiles: ['<SOML>/backend/tests/integration/setup-env.js'],
  globalSetup: '<SOML>/backend/tests/integration/global-setup.js',
  moduleDirectories: ['node_modules', '<SOML>/node_modules'],
};
```

```bash
cd <SOML> && SOML_DIR=<SOML> npx jest --config jest.dsp.config.js --runInBand --verbose
```

## วิธีรัน System

เปิดระบบไว้ก่อน `cd <SOML> && npm run dev` (หน้าจอที่ http://localhost:5173)

`pw.config.js`

```js
const { defineConfig, devices } = require('<SOML>/node_modules/@playwright/test');
module.exports = defineConfig({
  testDir: '<REPO>/03-test-execution/tests/system',
  workers: 1, timeout: 60000, expect: { timeout: 10000 }, reporter: [['list']],
  use: { baseURL: 'http://localhost:5173', locale: 'th-TH', timezoneId: 'Asia/Bangkok' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } } }],
});
```

```bash
cd <SOML> && SOML_DIR=<SOML> EVIDENCE_DIR=<REPO>/03-test-execution/evidence npx playwright test --config pw.config.js
```
