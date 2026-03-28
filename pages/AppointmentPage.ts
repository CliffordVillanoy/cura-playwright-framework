import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class AppointmentPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Selectors
  private facilityDropdown = '#combo_facility';
  private hospitalReadmissionCheckbox = '#chk_hospotal_readmission';
  private medicaidRadio = '#radio_program_medicaid';
  private visitDateInput = '#txt_visit_date';
  private commentInput = '#txt_comment';
  private bookAppointmentButton = '#btn-book-appointment';

  // Actions
  async selectFacility(facility: string) {
    await this.page.selectOption(this.facilityDropdown, { label: facility });
  }

  async setVisitDate(date: string) {
    await this.page.click(this.visitDateInput);
    await this.page.fill(this.visitDateInput, date);
    await this.page.press(this.visitDateInput, 'Enter');
}

  async setComment(comment: string) {
    await this.page.fill(this.commentInput, comment);
  }

  async clickBookAppointment() {
    await this.page.click(this.bookAppointmentButton);
  }

   async isOnAppointmentPage() {
    return this.page.url().includes('#appointment');
  }

// Select Hospital Readmission
async selectHospitalReadmission() {
  await this.page.check(this.hospitalReadmissionCheckbox);
}

// Select Healthcare Program
async selectHealthcareProgram(program: 'Medicare' | 'Medicaid' | 'None') {
  if (program === 'Medicare') {
    await this.page.check('#radio_program_medicare');
  } else if (program === 'Medicaid') {
    await this.page.check('#radio_program_medicaid');
  } else {
    await this.page.check('#radio_program_none');
  }
}

// ==========================
// Summary Page Locators
// ==========================
summaryFacility = '#facility';
summaryReadmission = '#hospital_readmission';
summaryProgram = '#program';
summaryDate = '#visit_date';
summaryComment = '#comment';

async validateAppointmentSummary(data: {
  facility: string;
  readmission: string;
  program: string;
  date: string;
  comment: string;
}) {
  await expect(this.page.locator(this.summaryFacility)).toHaveText(data.facility);
  await expect(this.page.locator(this.summaryReadmission)).toHaveText(data.readmission);
  await expect(this.page.locator(this.summaryProgram)).toHaveText(data.program);
  await expect(this.page.locator(this.summaryDate)).toBeVisible();
  await expect(this.page.locator(this.summaryComment)).toHaveText(data.comment);

}




}

