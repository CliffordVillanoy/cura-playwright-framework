import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { loginData } from '../../fixtures/testData';

//Navigation of webpage and setup before each test
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    // Navigate to the application
    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
});

// Positive Scenario: Verify user can login successfully with valid credentials
test ('Verify user can login successfully with valid credentials', async ({ page }) => {

    // Input of valid credentials from test data
    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    // Verify successful login by checking for the presence of the appointment page
    await expect(page).toHaveURL(/#appointment/);
});

const invalidLoginScenarios = [
    {
        name: 'invalid credentials',
        data: loginData.invalidUser,
    },
    {
        name: 'empty credentials',
        data: loginData.emptyUser,
    },
];

invalidLoginScenarios.forEach(({ name, data }) => {
    test(`Verify user cannot login with ${name}`, async () => {
        await loginPage.login(data.username, data.password);

        const errorMessage = await loginPage.getLoginErrorMessage();

    await expect(errorMessage?.trim()).toContain('Login failed');
    });
});





























