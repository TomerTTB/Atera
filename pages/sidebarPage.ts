import { expect } from '@playwright/test';
import uiEndPoints from '../utils/uiEndPoints.ts';
import {
    Locator, Page, PageBase, ElementBuilder, sidebarElements,
    ElementClicker
} from '../utils/imports.ts';

export class SidebarPage extends PageBase {
    //Variables 
    sidebarElements: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.sidebarElements = ElementBuilder.buildElements(page, sidebarElements);
    };

    //Methods
    async navigateToMenuItem(testConfig) {
        await this.page.goto(`${process.env.URL}${uiEndPoints.devices}`);
        const { menuNavigation } = testConfig;
        const menuItem = menuNavigation[0].value;
        const index = sidebarElements.findIndex((elem) => elem['id'] === menuItem);
        await ElementClicker.clickElementByIndex(this.page, this.sidebarElements, index);
        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    }
};