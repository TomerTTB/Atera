import { Locator, expect, type Page } from '@playwright/test';

export class LoginHandler {
    static async enterCredentialsAndSubmit(page: Page, elements: Locator[], credentials: any) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            await element.type(credentials);
            await element.press('Enter');
        };
    };
};