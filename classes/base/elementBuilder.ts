import { Page, Locator } from '@playwright/test';

type LocatorParams = {
    functionType: string;
    role?: any;
    text?: string;
    id?: string;
    exact?: boolean;
    locator?: string;
};

export class ElementBuilder {
    static buildElements(page: Page,
        elements: LocatorParams[]): Locator[] {
        const myElements: Locator[] = [];

        for (const element of elements) {
            const { functionType, ...params } = element;
            let currentElement;

            switch (element.functionType) {
                case 'getByText':
                    if (!params.text) {
                        throw new Error('Text parameter is required for getByText.');
                    }
                    currentElement = params.text && page.getByText(params.text, params.exact ? { exact: true } : {});
                    break;
                case 'getByRole':
                    if (!params.role || !params.text) {
                        throw new Error('Role and text parameters are required for getByRole.');
                    }
                    currentElement = page.getByRole(params.role, { name: params.text });
                    break;
                case 'getByPlaceholder':
                    if (!params.text) {
                        throw new Error('Text parameter is required for getByPlaceholder.');
                    }
                    currentElement = page.getByPlaceholder(<string>params.text);
                    break;
                case 'getByLabel':
                    if (!params.text) {
                        throw new Error('Text parameter is required for getByLabel.');
                    }
                    currentElement = page.getByLabel(<string>params.text, {
                        exact: params.exact ?? false,
                    });
                    break;
                case 'getById':
                    if (!params.id) {
                        throw new Error('ID parameter is required for getById.');
                    }
                    currentElement = page.locator(<string>params.id);
                    break;
                case 'getByLocator':
                    if (!params.locator) {
                        throw new Error('Locator parameter is required for getByLocator.');
                    }
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