import { Page } from '@playwright/test';

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


}

