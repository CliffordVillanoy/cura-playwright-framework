import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AppointmentPage } from '../../pages/AppointmentPage';
import { loginData } from '../../fixtures/auth/login-positive';
import { positiveScenario } from '../../fixtures/appointment/positiveScenarioTestData';

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

    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(
      loginData.valid.username,
      loginData.valid.password
    );

    const data = positiveScenario.valid;

    await appointmentPage.selectFacility(data.facility);
    await appointmentPage.selectHospitalReadmission();
    await appointmentPage.selectHealthcareProgram(program);

    await appointmentPage.setVisitDate(data.visitDate);
    await appointmentPage.setComment(`Test ${program}`);

    await appointmentPage.clickBookAppointment();

    await expect(page).toHaveURL(/#summary/);

    await appointmentPage.validateAppointmentSummary({
      facility: data.facility,
      readmission: 'Yes',
      program: program,
      date: data.visitDate,
      comment: `Test ${program}`
    });
  });
});