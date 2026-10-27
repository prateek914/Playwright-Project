import { test, expect } from '../fixtures/hook-fixture';
import loginData from '../data/login-module-data.json';

// Set up the test environment with a clean storage state
test.use({
    storageState: {
        "cookies": [],
        "origins": []
    }
});

test('verify the login funcality with valid userName and invalid password', async ({ gotoURL, fixtureLogin, commonutils }) => {
    const decryptedUsername = commonutils.decryptData(process.env.USER_NAME!);
    await fixtureLogin.logInOrangeHRM(decryptedUsername, loginData.invalidPassword);
    await expect(fixtureLogin.errorMessage).toHaveText(loginData.failedLoginErrorMessage);


});
