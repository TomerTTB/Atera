import { test, expect } from '../../fixtures/page-fixtures';
const testConfig = require('../../config/testConfig.json')

test.describe('Assert open tickets', () => {
  test('sideBar --> Assert open tickets', async ({ page, loginPage, sidebarPage, ticketStatusPage }) => {
    test.slow();
    //await loginPage.login();
    await sidebarPage.navigateToMenuItem(testConfig);
    await ticketStatusPage.validateStatus();
  });
});