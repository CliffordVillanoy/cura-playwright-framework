import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AppointmentPage } from '../../pages/AppointmentPage';
import { loginData } from '../../fixtures/testData';
import { appointmentData } from '../../fixtures/testData';


// ==========================
// Positive Scenario
// ==========================


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

// ==========================
// Negative Scenario
// ==========================
const negativeScenarios = [
  { 
    name: 'missing date', 
    data: appointmentData.missingDate,
    expectedUrl: '#appointment'
  },
  { name: 'missing facility', 
    data: appointmentData.missingFacility,
    expectedUrl: '#summary'
  },
  { name: 'empty form', 
    data: appointmentData.emptyForm, 
    expectedUrl: '#appointment' 
  },
];

negativeScenarios.forEach(({ name, data, expectedUrl }) => {
  test(`Verify system behavior when booking appointment with ${name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const appointmentPage = new AppointmentPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    // Conditional inputs
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

    // Assertion based on actual behavior
    if (name === 'missing date' || name === 'empty form') {
      await expect(page).toHaveURL(/#appointment/);
        } 
    else {
      await expect(page).toHaveURL(/#summary/);
        }


  });
});