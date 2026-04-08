import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { loginData } from '../../fixtures/auth/loginPositiveScenario';

// Setup
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.clickMakeAppointment();
});

// ==========================
// Positive Scenario
// ==========================
test('Verify user can login successfully with valid credentials', async ({ page }) => {
  await loginPage.login(
    loginData.valid.username,
    loginData.valid.password
  );

  await expect(page).toHaveURL(/#appointment/);
});

