import {test} from '../fixtures/common-fixture';

test('global setup for login', async ({page, FixtureLogin, commonutils})=>{

    const decryptedUsername = commonutils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonutils.decryptData(process.env.PASSWORD!);
    FixtureLogin.goToOrageHRMLoginPage();
    FixtureLogin.logInOrangeHRM(decryptedUsername, decryptedPassword);

})
