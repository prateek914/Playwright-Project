import { Locator, Page } from "@playwright/test";

export class UserPage {

    readonly page: Page;
    readonly userProfileButton: Locator;
    readonly userLogoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userProfileButton = page.locator('.oxd-userdropdown-tab');
        this.userLogoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }

    async userLogout() {
        await this.userProfileButton.click();
        await this.userLogoutButton.click();
    }

}