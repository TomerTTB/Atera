//Base
export { type Locator, type Page } from '@playwright/test';
export { PageBase } from '../classes/base/pageBase';
export { ElementBuilder } from '../classes/base/elementBuilder';

//Handler Classes
export { LoginHandler } from '../classes/loginHandler';
export { ElementClicker } from '../classes/elementClicker';
export { StatusValidator } from '../classes/statusValidator';

//loginPage
export { LoginPage } from '../pages/loginPage';
export { loginPageBeforeSubmitEmailElements } from '../pagesElements/loginPage/loginPageElementsInput';
export { loginPageAfterSubmitEmailElements } from '../pagesElements/loginPage/loginPageElementsInput';
export { loginPageElementsClick } from '../pagesElements/loginPage/loginPageElementsClick';

//SideBarPage
export { SidebarPage } from '../pages/sidebarPage';
export { sidebarElements } from '../pagesElements/sidebar/sidebarElements';

//TicketStatusPage
export { TicketStatusPage } from '../pages/Dashboard/ticketStatusPage';
export { dashboardTicketStatusElements } from '../pagesElements/dashboard/dashboardTicketStatusElements'