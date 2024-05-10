import { Page, Locator } from '@playwright/test';

export class ElementBuilder {
    static buildElements(page: Page,
        elements: { functionType: string; role?, text?: string; id?: string; exact?: boolean; locator?: string }[]): Locator[] {
        const myElements: Locator[] = [];

        for (const element of elements) {
            const { functionType, ...params } = element;
            let currentElement;

            switch (element.functionType) {
                case 'getByText':
                    currentElement = params.text && page.getByText(params.text, params.exact ? { exact: true } : {});
                    break;
                case 'getByRole':
                    currentElement = page.getByRole(params.role, { name: params.text });
                    break;
                case 'getByPlaceholder':
                    currentElement = page.getByPlaceholder(<string>params.text);
                    break;
                case 'getByLabel':
                    currentElement = page.getByLabel(<string>params.text, {
                        exact: params.exact ?? false,
                    });
                    break;
                case 'getById':
                    currentElement = page.locator(<string>params.id);
                    break;
                case 'getByLocator':
                    currentElement = page.locator(<string>params.locator);
                    break;
            }
            if (currentElement) {
                myElements.push(currentElement);
            };
        }
        return myElements;
    };
};