export { type Locator, type Page } from '@playwright/test';
export { PageBase } from '../classes/base/pageBase';
export { ElementBuilder } from '../classes/base/ElementBuilder';

//Handler Classes
export { LoginHandler } from '../classes/loginHandler';
export { ElementClicker } from '../classes/elementClicker';
export { StatusValidator } from '../classes/statusValidator';

//loginPage
export { LoginPage } from '../pages/loginPage';
export { loginPageBeforeEmailElements } from '../pagesData/loginPageData/loginPageElementsInput';
export { loginPageAfterEmailElements } from '../pagesData/loginPageData/loginPageElementsInput';
export { loginPageElementsClick } from '../pagesData/loginPageData/loginPageElementsClick';

//SideBarPage
export { SidebarPage } from '../pages/sidebarPage';
export { sideBarElements } from '../pagesData/sideBarData/sideBarElements';

//TicketStatusPage
export { TicketStatusPage } from '../pages/Dashboard/ticketStatusPage';
export { dashboardTicketStatusElements } from '../pagesData/dashboard/dashboardTicketStatusElements'