import { test as baseTest } from '@playwright/test';
import { LoginPage, SidebarPage, TicketStatusPage, Hooks } from '../utils/imports.ts';

type MyFixtures = {
    loginPage: LoginPage;
    sidebarPage: SidebarPage;
    ticketStatusPage: TicketStatusPage;
}

export const test = baseTest.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    sidebarPage: async ({ page }, use) => {
        await use(new SidebarPage(page));
    },
    ticketStatusPage: async ({ page }, use) => {
        await use(new TicketStatusPage(page));
    },
})

export { expect } from '@playwright/test';
