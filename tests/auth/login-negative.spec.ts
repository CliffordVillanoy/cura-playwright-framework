import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { invalidLoginScenarios } from '../../fixtures/auth/loginNegativeScenario';

// Setup
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.clickMakeAppointment();
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