import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AppointmentPage } from '../../pages/AppointmentPage';
import {negativeScenario} from '../../fixtures/appointment/appointment-negative';
import { loginData } from '../../fixtures/auth/login-positive';

// ==========================
// Negative Scenarios
// ==========================
negativeScenario.forEach(({ name, data, expectedUrl }) => {
  test(`Verify system behavior when booking appointment with ${name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const appointmentPage = new AppointmentPage(page);

    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(
      loginData.valid.username,
      loginData.valid.password
    );

    if (data.facility) {
      await appointmentPage.selectFacility(data.facility);
    }

    if (data.visitDate) {
      await appointmentPage.setVisitDate(data.visitDate);
    }

    if (data.comment) {
      await appointmentPage.setComment(data.comment);
    }

    await appointmentPage.clickBookAppointment();

    await expect(page).toHaveURL(new RegExp(expectedUrl));
  });
});