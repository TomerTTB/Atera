import { test as baseTest } from '@playwright/test';
import { LoginPage, SidebarPage, TicketStatusPage } from '../utils/imports.ts';

type Fixtures = {
    loginPage: LoginPage;
    sidebarPage: SidebarPage;
    ticketStatusPage: TicketStatusPage;
}

export const test = baseTest.extend<Fixtures>({
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
