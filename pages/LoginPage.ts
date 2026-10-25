import {Locator, Page} from '@playwright/test';

export class LoginPage {
    // Define locators for the login page elements
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        // Initialize the page and locators
        this.page = page;
        this.usernameInput = page.locator("input[name='username']");
        this.passwordInput = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");
    }

    async goToOrageHRMLoginPage() {
        // Navigate to the OrangeHRM login page
            await this.page.goto(`${process.env.Base_URL}/web/index.php/auth/login`);
    }

    async logInOrangeHRM(username: string, password: string) {
        // Perform login action
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}