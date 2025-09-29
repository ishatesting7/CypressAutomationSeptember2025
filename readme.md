Folder Structure of Cypress
---------------------------

- download
- e2e - This is a folder all UI and API Test Cases
- fixture - Reading the data from this folder, contain XLSX, CSV, JSON
- support - command.js - Customized Command
          - e2e.js - Handling all the dependency

Understanding Github and Git
----------------------------

Create your account - https://github.com/
Install Git - https://git-scm.com/

Setup your username - https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html

git config --global user.name "Sam Smith"
git config --global user.email sam@example.com


Locator
-------

//Cypress - CSS Selector

// //With help of classname
// --> CSS Selector - .classname
// //With the help of id
// --> ID - #id
// //With the help of attribute name and value
// --> [attributename='attributevalue']
// //With the help of tagname and classname
// --> tagname.classname
// //With the help of tagname and id
// --> tagname#id
// //With the help of tagname and attribute name and value
// --> tagname[attributename='attributevalue']
// //With the help of tagname, attribute name and value and classname
// --> tagname[attributename='attributevalue'].classname
// //With the help of tagname, attribute name and value and id
// --> tagname[attributename='attributevalue']#id



Cypress CLI
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",

  // Open Cypress Test Runner
  "cypress:open": "npx cypress open",

  // Run a single test spec (headless)
  "cypress:runSingleTest": "npx cypress run --spec cypress/e2e/CypressUIAutomation/TC06RadioButton.cy.js --headless",

  // Run with Electron (default)
  "cypress:run:electron": "npx cypress run --spec cypress/e2e/CypressUIAutomation/visitCypress.cy.js",

  // Run in Chrome headless
  "cypress:run:chrome:headless": "npx cypress run --browser chrome --headless",

  // Run in Chrome headed
  "cypress:run:chrome:headed": "npx cypress run --browser chrome --headed",

  // Run in Firefox
  "cypress:run:firefox": "npx cypress run --browser firefox",

  // Run in Edge
  "cypress:run:edge": "npx cypress run --browser edge",

  // Run multiple specs
  "cypress:run:multi": "npx cypress run --spec 'cypress/e2e/CypressUIAutomation/TC01*.cy.js,cypress/e2e/CypressUIAutomation/TC02*.cy.js'",

  // Run all tests inside a folder
  "cypress:run:folder": "npx cypress run --spec 'cypress/e2e/CypressUIAutomation/*.cy.js'",

  // Run tests with baseUrl override
  "cypress:run:staging": "npx cypress run --config baseUrl=https://staging.myapp.com",

  // Run with environment variables
  "cypress:run:env": "npx cypress run --env username=admin,password=secret",

  // Run test by grep (filter test name)
  "cypress:run:grep": "npx cypress run --spec cypress/e2e/CypressUIAutomation/login.cy.js --grep 'Valid Login'",

  // Run excluding tests by grep
  "cypress:run:grep:exclude": "npx cypress run --grep-exclude 'Regression'",

  // Run with retries enabled
  "cypress:run:retries": "npx cypress run --config retries=2",

  // Run tests recording to Cypress Dashboard
  "cypress:run:record": "npx cypress run --record --key YOUR_DASHBOARD_KEY",

  // Run tests in parallel (dashboard required)
  "cypress:run:parallel": "npx cypress run --record --key YOUR_DASHBOARD_KEY --parallel",

  // Run with mochawesome reporter
  "cypress:run:mochawesome": "npx cypress run --reporter mochawesome",

  // Run with mochawesome custom options
  "cypress:run:mochawesome:opts": "npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports",

  // Run in Chrome Canary
  "cypress:run:chrome:canary": "npx cypress run --browser chrome:canary",

  // Disable video recording
  "cypress:run:noVideo": "npx cypress run --config video=false",

  // Disable screenshots on failure
  "cypress:run:noScreenshot": "npx cypress run --config screenshotOnRunFailure=false",

  // Run with slow test threshold
  "cypress:run:slow": "npx cypress run --config slowTestThreshold=5000",

  // Run with junit reporter (CI/CD integration)
  "cypress:run:junit": "npx cypress run --reporter junit --reporter-options 'mochaFile=results/test-results.xml'",

  // Open Cypress in Chrome browser
  "cypress:open:chrome": "npx cypress open --browser chrome",

  // Run only smoke tests (using tags/grep)
  "cypress:run:smoke": "npx cypress run --env grep=smoke",

  // Run only regression tests
  "cypress:run:regression": "npx cypress run --env grep=regression",

  // Run with allure reporter
  "cypress:run:allure": "npx cypress run --reporter mocha-allure-reporter",

  // Run with project path (monorepo use-case)
  "cypress:run:project": "npx cypress run --project ./my-cypress-project",

  // Run and export results to JSON
  "cypress:run:json": "npx cypress run --reporter json > results.json",

  // Run in CI/CD (headless chrome + record)
  "cypress:ci": "npx cypress run --headless --browser chrome --record"
}
```
