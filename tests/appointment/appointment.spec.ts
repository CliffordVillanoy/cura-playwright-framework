import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AppointmentPage } from '../../pages/AppointmentPage';
import { loginData } from '../../fixtures/testData';

test('Verify user can book an appointment successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const appointmentPage = new AppointmentPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.clickMakeAppointment();
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  // Appointment
  await appointmentPage.selectFacility('Tokyo CURA Healthcare Center');

  await appointmentPage.setVisitDate('30/03/2026');
  
  await appointmentPage.setComment('Test appointment');

  await appointmentPage.clickBookAppointment();

  // Assertion
  await expect(page).toHaveURL(/#summary/);
});