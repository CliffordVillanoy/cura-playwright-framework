import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { loginData, invalidLoginScenarios } from '../../../test-data/auth/login.data';

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
test('should login successfully with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.clickMakeAppointment();

  await loginPage.login(
    loginData.valid.username,
    loginData.valid.password
  );

  await expect(page).toHaveURL(/#appointment/);
});

// ==========================
// Negative Scenarios
// ==========================
invalidLoginScenarios.forEach(({ name, data }) => {
  test(`Verify user cannot login with ${name}`, async ({ page }) => {
    await loginPage.login(data.username, data.password);

    const errorMessage = await loginPage.getLoginErrorMessage();

    await expect(errorMessage?.trim()).toContain('Login failed');
  });
});