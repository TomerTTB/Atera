import { Locator, expect, type Page } from '@playwright/test';

export class StatusValidator {
    static async findElements(elementsDashboard: Locator[], testConfig) {
        for (let i = 0; i < testConfig.status[0].asserts.length; i++) {
            for (let j = 0; j < elementsDashboard.length; j++) {
                const currentElement = elementsDashboard[j];
                const value = await currentElement.textContent();
                //console.log(value);
                if (value?.includes(testConfig.status[0].asserts[i].name)) {
                    await StatusValidator.assertCount(value, testConfig.status[0].asserts[i].value);
                    break;
                };
            };
        };
    };

    static async assertCount(elment: string, assertValue: any) {
        const count = parseInt(elment.match(/\d+/)?.[0] || '0');
        await expect(count).toBe(parseInt(assertValue));
    };
};
