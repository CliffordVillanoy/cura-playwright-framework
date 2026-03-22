import { Page } from "@playwright/test";   

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Selectors
    private makeAppoitmentButton = '#btn-make-appointment';
    private usernameInput = '#txt-username';
    private passwordInput = '#txt-password';
    private loginButton = '#btn-login';
    private loginErrorMessage = 'p.lead.text-danger';

    //Validate Error Message for Invalid login
    async getLoginErrorMessage() {
        return (await this.page.textContent(this.loginErrorMessage))?.trim();
    }

    //Actions
    async navigate() {
        await this.page.goto('https://katalon-demo-cura.herokuapp.com/');
    }

    async clickMakeAppointment() {
        await this.page.click(this.makeAppoitmentButton);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}   