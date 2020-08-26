# Getting Started

Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

We make it possible to:

- Set up tests
- Write tests
- Run tests
- Debug Tests

Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

This enables you to write faster, easier and more reliable tests.

# Prerequisites

If you’re using npm to install Cypress:

- Node.js 10 and above

# Installing

We need to install Cypress:

```bash
npm install cypress --save-dev
```

This will install Cypress locally as a dev dependency for your project.

> Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.

# Running the tests

We can run our tests with Cypress in two ways:

1. Cypress Runner Open: It is a UI where you can run all the tests.

```bash
.\node_modules\.bin\cypress open
```

2. By command line: It is the way we will use in the CI. For example:

```bash
npm run test:login
```

In package.json are all the scripts to run the tests in different browsers.


