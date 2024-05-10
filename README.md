**Project Definition:**
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
The project environment control is a dotenv based, to set an environment use:

```bash
$env:ENV="test"
```

Change "test" to the needed environment.
* The .env file holds general environmental variables.

<br> 

**Password encapsulation:**
"MY" password should be added locally, it can be done in two different ways:
1) Add it manually to the '.env.test' under env folder.
2) Use command line:

```bash
$env:PASSWORD="MYPASSWORD"
```

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

The testConfig file under the config folder is the only endpoint to be used by the user.
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

1) pageBase: Creates the basic page playwright object, all pom classes will extend this base class.
2) elementBuilder: Builds an array from the page elements for verification.
   The 'elementBuilder' purpose is to be a generic array builder that can take any amount of elements from the same kind for example, all the input text elements, or all text elements, and
   make them ready to be used within the pom.
3) In general, classes such as 'elementClicker' should be designed to be as generic as possible so they can be used by all pom.

<br>

**Security and CI:**
1) It's a best practice to add the '.env' files to the git ignore list, in the case of this project '.env.test' has been added, yet it does not contain the password.
2) When run on CI, it uses a separate .env file '.env.ci', this file also does not contain the password, and the password for the CI is stored under environment secret variables.
3) After login the 'loginAuth.json' file contains cookies and the JWT, on CI the file will always stay empty (only with {} to indicate a json file). locally the file will keep the date after the first run.

<br>

**What was difficult / What I would change / notes:**

There were a few points that were more difficult to overcome:
1) Navigation to the login page, before the 302 redirect, the playwright finds an element on the page, that causes the test to stop at this point with a blank screen.
   I had to remove 'await' and keep it alive until validation of a new URL endpoint.
2) Saving the storage state, I had to use the network monitor to know when I was receiving the JWT and relevant cookies.
3) I originally designed the login as a POM that extended as a fixture, now I think it was a mistake, that created an issue as fixtures can not run from within the 'global-setup' or the hooks. For my next project, I would research ways to design the login, as I want it to be a separate module from the loginPage.
   
Note - Fixtures can run from the 'global-setup' or the hooks, but it requires controlling the context manually and it seems like something that I don't want or need to do.

As I tried to place myself in a role of infrastructure, I found out it can be a bottomless pit :), there is no end to how many more capabilities you can add.
I think it's super important to collect the correct requirements from the customers and translate them to actionable tasks only what's necessary.
All in all, it was a nice project to work on, I pushed myself hard on it, and it should accurately reflect where I am in terms of hands-on coding experience. 
   
   
