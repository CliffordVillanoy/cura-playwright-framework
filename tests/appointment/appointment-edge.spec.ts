import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AppointmentPage } from '../../pages/AppointmentPage';
import { loginData } from '../../fixtures/auth/login-positive';
import { edgeScenario } from '../../fixtures/appointment/appointment-edge';

// ==========================
// Edge Scenarios
// ==========================
edgeScenario.forEach(({ name, data, expectedUrl }) => {
  test(`Verify edge case: ${name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const appointmentPage = new AppointmentPage(page);

    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(
      loginData.valid.username,
      loginData.valid.password
    );

    await appointmentPage.selectFacility(data.facility);
    await appointmentPage.setVisitDate(data.visitDate);
    await appointmentPage.setComment(data.comment);

    await appointmentPage.clickBookAppointment();

    await expect(page).toHaveURL(new RegExp(expectedUrl));
  });
});