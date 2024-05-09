import { expect } from '@playwright/test';
import {
    Locator, Page, PageBase, ElementBuilder, loginPageBeforeEmailElements, loginPageAfterEmailElements, LoginHandler
} from '../utils/imports.ts';

export class ApplicationPage extends PageBase {
    //Variables 

    //constructor
    constructor(page: Page) {
        super(page);

    };

    //Methods
    async go() {
        this.page.goto(<string>process.env.URL);
        //await this.page.waitForURL(/^https:\/\/auth\.atera\.com\/.*/);
        await expect(this.page.getByRole('heading', { name: 'Devices' })).toBeVisible();
    }
};