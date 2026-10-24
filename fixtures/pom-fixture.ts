import {test as baseTest} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

type MyFixtures = {
FixtureLogin : LoginPage;

}

export const test =  
baseTest.extend<MyFixtures>({
FixtureLogin: async ({page}, use) =>{
const objPage = new LoginPage(page);
await use(objPage);
}
})