Project Definition: This is a work assignment given during an interview, to develop a program for automated end-to-end testing.

Project Scope: The project involves setting up an automation infrastructure foundation. This includes tests to perform the following actions:
Login: Automating the login process to the application.
Navigation: Creating test scripts to navigate through different pages or sections of the application.
Assertion: Writing assertions to verify statuses.

Project Installation (JS/TS):
Node.js: https://nodejs.org
Playwright: npm install playwright
Dotenv: npm install dotenv --save

Dotenv setup is necessary: $env:ENV="test"








Running Tests:
To execute tests, use the following command: npx playwright tests "Spec Name under tests folder"

Running Tests using predifined scripts:
To run all tests on all browsers: npm run tests_allBrowsers

Project Structure:

Enviorments control:
The project enviorment control is a dotenv based, to change an envriments use:
Example - $env:ENV="test" / Change the test to needed enviorment.

The .env file holds general enviorment varibles 

Fixtures Folder: This folder contains fixture setups using the test.extend function. Fixtures provide reusable setups that offer test contexts or resources.

The baseTest is extended with custom fixtures, which are instances of the pages. Fixture setup functions are asynchronous and create instances of respective page classes, passing a page object to them. The use function is utilized to define what will be passed to the test after the fixture setup completes, enabling access to the page class instance.

auth folder: The project implements reusing of authentication state, in context and gloabl level (Currntly remarked) the authentication detials saved after a succesful login and stored under this folder.
This method allow us to save time, reduce flakenes, reduce server volume.

Tests Folder: Contains separate test (spec) files for each page object on the website.

Pages Folder: Each page is represented as a page object model, facilitating better organization and maintenance.

Classes Folder: PageBase: Creates the basic page playwright object to be used by most classes. TextElementBuilder: Builds an array from the page elements for verification. TextVerifier: Provides functions for text verification, usable by any page requiring text validation.

Utils Folder: uiPages: Dynamically builds the URL for a test, enhancing flexibility and maintainability.


