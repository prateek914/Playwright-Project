import { expect } from '@playwright/test';
import { test } from '../fixtures/hook-fixture';

// test.beforeEach('login to OrangeHRM', async({fixtureLogin})=>{
//     await fixtureLogin.goToOrageHRMLoginPage();
// })

// test.afterEach('logout from OrangeHRM', async({userPage})=>{
//     await userPage.userLogout();
// })

test('first test', async ({ page, gotoURL }) => {
    await expect(page).toHaveTitle('OrangeHRM');
    console.log("first test executed successfully");
})

test('second test', async ({ page, gotoURL, logout }) => {
    await expect(page).toHaveTitle('OrangeHRM');
    console.log("second test executed successfully");
})
// if you are not using the fixture, you can directly use the LoginPage class in your test
/*
test('Login to OrangeHRM', async ({page}) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.goToOrageHRMLoginPage();
    await loginPage.logInOrangeHRM('Admin', 'admin123');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})
    */

// if you are using the fixture, you can use the login fixture in your test

// test('login the OrangeHRM using ficture', async ({page, FixtureLogin})=>{

// await FixtureLogin.goToOrageHRMLoginPage();
// await FixtureLogin.logInOrangeHRM('Admin', 'admin123');
// await expect(FixtureLogin.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

// })


// // credentials can be stored in the .env file and accessed using process.env
// test('login the OrangeHRM using environment variables with encryption-decryption', async ({ page, fixtureLogin, commonutils }) => {

//     // console.log(process.env.BASE_URL);
//     // console.log(process.env.USER_NAME);
//     // console.log(process.env.PASSWORD);


//     // for encrypt the username
//     // const commonUtilsObj = new commonUtils();
//     // commonUtilsObj.encryptData('Admin');


//     // for encrypt the password
//     // const commonUtilsObj = new commonUtils();
//     // commonUtilsObj.encryptData('admin123');

//     // for decrypt the username

//     // const decryptedUsername = commonutils.decryptData(process.env.USER_NAME!);
//     // const decryptedPassword = commonutils.decryptData(process.env.PASSWORD!);

//     // to view the decrypted username and password in the console
//     //  console.log(decryptedUsername+"  "+decryptedPassword);

//     // calling the login page method with encrypted username and password
//     await fixtureLogin.goToOrageHRMLoginPage();
//     // await fixtureLogin.logInOrangeHRM(decryptedUsername, decryptedPassword);
//     // await expect(fixtureLogin.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

// })
