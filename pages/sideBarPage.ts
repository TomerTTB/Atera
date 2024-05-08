import { expect } from '@playwright/test';
import {
    Locator, Page, PageBase, ElementBuilder, sideBarElements,
    ElementClicker
} from '../utils/imports.ts';

export class SidebarPage extends PageBase {
    //Variables 
    sidebarElements: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.sidebarElements = ElementBuilder.buildElements(page, sideBarElements);
    };

    //Methods
    async navigateToMenuItem(menuItem: String) {
        const index = sideBarElements.findIndex((elem) => elem['id'] === menuItem);
        await ElementClicker.clickElementByIndex(this.page, this.sidebarElements, index);
        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    }
}; 