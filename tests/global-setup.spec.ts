import {test} from '../fixtures/common-fixture';
import { expect } from '@playwright/test';

test('global setup for login', async ({page, fixtureLogin,dashboardPage, commonutils})=>{

    const decryptedUsername = commonutils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonutils.decryptData(process.env.PASSWORD!);
    await fixtureLogin.goToOrageHRMLoginPage();
    console.log("login page");
    await fixtureLogin.logInOrangeHRM(decryptedUsername, decryptedPassword);
    await expect(page).toHaveURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);
    console.log("dashboard page");
    await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    // store the storage(cookie and localStorage) state to a file for later use
    await page.context().storageState({ path: './playwright/.auth/.auth.json' });

})
