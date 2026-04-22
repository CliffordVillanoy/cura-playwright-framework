import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
    timeout: 30000,
    retries: 1,
    reporter: [
      ['html', {outputfolder: 'playwright-report', open: 'never'}]
    ]
    ,
    use: {
      headless: true,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
});