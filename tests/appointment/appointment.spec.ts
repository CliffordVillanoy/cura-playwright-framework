import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AppointmentPage } from '../../pages/AppointmentPage';
import { loginData, negativeScenarios, edgeScenarios } from '../../fixtures/testData';

// ==========================
// Positive Scenario
// ==========================
test('Verify user can book an appointment successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const appointmentPage = new AppointmentPage(page);

  await loginPage.navigate();
  await loginPage.clickMakeAppointment();
  await loginPage.login(
    loginData.valid.username,
    loginData.valid.password
  );

  await appointmentPage.selectFacility('Tokyo CURA Healthcare Center');

  await appointmentPage.selectHospitalReadmission();
  await appointmentPage.selectHealthcareProgram('Medicare');

  await appointmentPage.setVisitDate('30/03/2026');
  await appointmentPage.setComment('Test appointment');

  
  await appointmentPage.clickBookAppointment();

  await expect(page).toHaveURL(/#summary/);
});

// ==========================
// Healthcare Program Tests
// ==========================
const healthcarePrograms = ['Medicare', 'Medicaid', 'None'] as const;

healthcarePrograms.forEach((program) => {
  test(`Verify user can book appointment using ${program}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const appointmentPage = new AppointmentPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(
      loginData.valid.username,
      loginData.valid.password
    );

    // Appointment actions
    await appointmentPage.selectFacility('Tokyo CURA Healthcare Center');

    // Optional but recommended
    await appointmentPage.selectHospitalReadmission();

    await appointmentPage.selectHealthcareProgram(program);

    await appointmentPage.setVisitDate('30/03/2026');
    await appointmentPage.setComment(`Test ${program}`);

    await appointmentPage.clickBookAppointment();

    // Assertion
    await expect(page).toHaveURL(/#summary/);

    await appointmentPage.validateAppointmentSummary({
      facility: 'Tokyo CURA Healthcare Center',
      readmission: 'Yes',
      program: program,
      date: '30/03/2026',
      comment: `Test ${program}`
    });

  });
});


// ==========================
// Negative Scenarios
// ==========================
negativeScenarios.forEach(({ name, data, expectedUrl }) => {
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


// ==========================
// Edge Scenarios
// ==========================
edgeScenarios.forEach(({ name, data, expectedUrl }) => {
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