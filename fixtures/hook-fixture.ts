import { test as baseTest } from '../fixtures/common-fixture';


type hookFixtureType = {
    gotoURL: void;
    logout: void;
}

export const test =
    baseTest.extend<hookFixtureType>({
        gotoURL: async ({ fixtureLogin }, use) => {
            await fixtureLogin.goToOrageHRMLoginPage();
            await use();
        },
        logout: async ({ userPage }, use) => {
            await use();
            await userPage.userLogout();
        }
    })