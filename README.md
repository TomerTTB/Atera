
**Project Definition:**
This work assignment was given during an interview, to develop a program for automated end-to-end testing.


**Project Scope:**
The project involves setting up an automation infrastructure foundation. This includes tests to perform the following actions:
Login: Automating the login process to the application.
Navigation: Creating test scripts to navigate through different pages or sections of the application.
Assertion: Writing assertions to verify statuses.


**GitHub Actions:**
The project holds a yml file and supports remote running using GitHub Actions.
A customer with no dev environment can run the tests.


**Project Installation (JS/TS):**
To install the necessary dependencies, run the following commands:
Node.js:
```bash
https://nodejs.org
```
Playwright:
```bash
npm install playwright
```
Dotenv:
```bash
npm install dotenv --save
```
Dotenv setup is necessary:
```bash
$env:ENV="test"
```

**Project Structure:**

**Environment control:**
The project environment control is a dotenv based, to change an environment use:

```bash$env:ENV="test"```
Change "test" to the needed environment.
* The .env file holds general environmental variables.


**Running Tests:**
The project is set with a script to run all spec files using Chrome browser.
```bash npm run test_chrome``` 

Other running options:
Run all tests using all browsers (Controlled under playwright.config)
```bash npx playwright test tests```

Run all tests using all browsers with headed browser 
```bash npx playwright test tests --headed```


**Test reporter and trace:**
HTML reporter will automatically open if the test fails.
To launch the reporter manually or for a successful run:
```npx playwright show-report```

The project Trace is on and will log for success and fail runs.












Fixtures Folder: This folder contains fixture setups using the test.extend function. Fixtures provide reusable setups that offer test contexts or resources.

The baseTest is extended with custom fixtures, which are instances of the pages. Fixture setup functions are asynchronous and create instances of respective page classes, passing a page object to them. The use function is utilized to define what will be passed to the test after the fixture setup completes, enabling access to the page class instance.

auth folder: The project implements reusing of authentication state, in context and gloabl level (Currntly remarked) the authentication detials saved after a succesful login and stored under this folder.
This method allow us to save time, reduce flakenes, reduce server volume.

Tests Folder: Contains separate test (spec) files for each page object on the website.

Pages Folder: Each page is represented as a page object model, facilitating better organization and maintenance.

Classes Folder: PageBase: Creates the basic page playwright object to be used by most classes. TextElementBuilder: Builds an array from the page elements for verification. TextVerifier: Provides functions for text verification, usable by any page requiring text validation.

Utils Folder: uiPages: Dynamically builds the URL for a test, enhancing flexibility and maintainability.


