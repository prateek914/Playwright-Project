import { test as baseTest } from '../fixtures/pom-fixture';
import CommonUtils from '../utils/commonUtils';

export type commonfixtureType = {
  commonutils: CommonUtils;
}


export const test = 
    baseTest.extend<commonfixtureType>({

    commonutils: async({}, use)=>{
      await use(new CommonUtils());

    }

})