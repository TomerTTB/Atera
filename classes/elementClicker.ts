import { Locator, type Page } from '@playwright/test';

export class ElementClicker {
    static async clickElement(page: Page, elements: Locator[]) {
        for (let i = 0; i < elements.length; i++) {
            await elements[i].click();
        };
    };

    static async clickElementByIndex(page: Page, elements: Locator[], index: number) {
        await elements[index].click();
    };
};