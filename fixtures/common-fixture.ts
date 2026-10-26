import { test as baseTest } from './pom-fixture';
import CommonUtils from '../utils/CommonUtils';

type commonfixtureType = {
  commonutils: CommonUtils;
}


export const test =
  baseTest.extend<commonfixtureType>({

    commonutils: async ({ }, use) => {
      await use(new CommonUtils());

    }

  })