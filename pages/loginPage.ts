import { expect } from '@playwright/test';
import {
    Locator, Page, PageBase, ElementBuilder, loginPageBeforeSubmitEmailElements, loginPageAfterSubmitEmailElements, LoginHandler
} from '../utils/imports.ts';

export class LoginPage extends PageBase {
    //Variables 
    loginInputElementsBeforeEmail: Locator[];
    loginInputElementsAfterEmail: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.loginInputElementsBeforeEmail = ElementBuilder.buildElements(page, loginPageBeforeSubmitEmailElements);
        this.loginInputElementsAfterEmail = ElementBuilder.buildElements(page, loginPageAfterSubmitEmailElements);
    };

    //Methods
    async login() {
        console.log(process.env);
        console.log(<string>process.env.URL);
        this.page.goto(<string>process.env.URL);
        await this.page.waitForURL(/^https:\/\/auth\.atera\.com\/.*/);
        await LoginHandler.performLogin(this.page, this.loginInputElementsBeforeEmail, process.env.EMAIL);
        await LoginHandler.performLogin(this.page, this.loginInputElementsAfterEmail, process.env.PASSWORD);
        await expect(this.page.getByRole('heading', { name: 'Devices' })).toBeVisible();
        await this.page.context().storageState({ path: process.env.LOGINSTATEPATH });
    }
};
