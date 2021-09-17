# **Demo** E2E test with Cypress

## Features
- Cypress Framework
- Test runner using mocha 
- POM(Page Object Model) design
- Supports multiple viewports (mobile and desktop). 
- Reuseable code and fucntionality implementation
- Reporting using Allure reports

## Setup

1. `git clone `
2. `cd cypress-demo`  
3. `npm install` or `npm i`


## Tests execution

- Open Cypress test runner with device ie web or mobile:
      - `cypress open --env device=web` 
      - For mobile `cypress open --env device=mobile`
    
- Run cypress tests in headless mode :
      - **`cypress run --env device=web`

##  Understanding code structure
:file_folder: Tests location `cypress/integration` folder

:file_folder: Custom commands location `cypress/support` folder

:file_folder: POM (Page object model) pages are located in `cypress/pages` folder 

#### Cypress Configuration

By default tests will be executed in desktop on `1280 * 800` if device is not passed. We can change the resolution by passing `viewportWidth` and  `viewportHeight` as env parameter in the cli as below

    **`cypress open --env device=web viewportWidth=1200 viewportHeight=800` 

Similarly configuration will drive the test execution as defined in `cypress.json` 

```
{
    "baseUrl": "http://angularjs.realworld.io/#",
    "numTestsKeptInMemory": 25,
    "defaultCommandTimeout": 10000,
    "experimentalFetchPolyfill": true,
    "viewportWidth": 1280,
    "viewportHeight": 800,
    "env": {
        "apiUrl": "https://conduit.productionready.io/api",
        "email": "abc456@test.com",
        "password": "Cypress123",
        "device": "desktop",
        "allure": true
    },
    "retries":{
        "runMode": 1,
        "openMode": 0
    },
    "reporter": "junit",
    "reporterOptions": {
      "mochaFile": "results/cypress-report.[hash].xml",
      "toConsole": true
    }
}
```