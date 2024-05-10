import { test } from '../../fixtures/page-fixtures';
import fs from 'fs';
const testConfig = require('../../config/testConfig.json')

test.describe('Assert open tickets', () => {
  test('sideBar --> Assert open tickets', async ({ loginPage, sidebarPage, ticketStatusPage, }) => {
    test.slow();
console.log('I am here');
console.log(process.env.PASSWORD);
    
    const fileStats = fs.statSync(<string>process.env.LOGINSTATEPATH);
    if (fileStats.size < 100) {
      await loginPage.login();
      await loginPage.storageState();
    }

    await sidebarPage.navigateToMenuItem(testConfig);
    await ticketStatusPage.validateStatus();
  });
});
