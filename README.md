'**Project Definition:**
This work assignment was given during an interview, to develop a program for automated end-to-end testing.

<br>

**Project Scope:**
The project involves setting up an automation infrastructure foundation. This includes tests to perform the following actions:
Login: Automating the login process to the application.
Navigation: Creating test scripts to navigate through different pages or sections of the application.
Assertion: Writing assertions to verify statuses.

<br> 

**GitHub Actions:**
The project holds a '.yml' file and supports remote running using GitHub Actions.
A customer with no dev environment can run the tests.

<br> 

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

<br> 


**Environment control:**
The project environment control is a dotenv based, to change an environment use:

```bash
$env:ENV="test"
```

Change "test" to the needed environment.
* The .env file holds general environmental variables.

<br> 

**Running Tests:**
The project is set with a script to run all spec files using Chrome browser.

```bash 
npm run test_chrome
``` 

Other running options:
Run all tests using all browsers (Controlled from playwright.config)

```bash 
npx playwright test tests
```

Run all tests using all browsers with headed browser:

```bash
npx playwright test tests --headed
```

Use Debug mode:
```bash
--debug
```

Use Interactive ui mode:
```bash
--ui
```

<br> 

**Test reporter and trace:**
HTML reporter will automatically open if the test fails.
To launch the reporter manually or for a successful run:
```bash
npx playwright show-report
```

The project Trace is on and will log for success and fail runs.

<br> 
  
**Project Structure:**

**TestConfig:**
The testConfig file under config folder is the only endpoint to be used by the user.
1) Menu navigation by populating name/value
2) Ticket status can add 1 or more statuses and a number to be assessed.

<br>

**Fixtures and bateTest:**
This folder contains fixture setups using the test.extend function. Fixtures provide reusable setups and are used to establish the environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests.

<br>

The baseTest is extended with custom fixtures, which are instances of the pages. Fixture setup functions are asynchronous and create instances of respective page classes, passing a page object to them. The use function is utilized to define what will be passed to the test after the fixture setup completes, enabling access to the page class instance.

<br>

**Authentication state and auth folder:**
Playwright provides a storage method that can be used to retrieve the storage state from an authenticated context and then create new contexts with that state.
This means that after a successful login, the authentication details are saved and stored in 'loginAuth.json' under the auth folder.
<br>
Once saved the tests in the project can now navigate directly to the UI endpoints without the need to pass through the login page.

<br>

**auth folder:**
The project implements reusing of the authentication state, the authentication details are saved after a successful login and stored under this folder.
All the tests in the project can now navigate directly to the UI endpoints without the need to pass through the login page.

<br>

**tests folder:**
The run spec (test) files are located under the tests folder.

<br>

**pages folder:**
Each page is represented as a page object model design pattern, facilitating better organization and maintenance.

<br>

**classes folder:** 
1) pageBase: Creates the basic page playwright object to be used by most classes.
2) elementBuilder: Builds an array from the page elements for verification.
   The 'elementBuilder' purpose is to be a generic array builder that can take any amount of elements from the same kind for example, all the input text elements, or all text elements, and
   make them ready to be used within the POM's.
   
