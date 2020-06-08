# Integration testing for PatternFly 4 React

## Overview

PatternFly 4 React provides an integration testing demo app as an environment to verify and test PatternFly 4 code changes and contributions.

The demo app is written in TypeScript and includes Cypress. We use Cypress for integration testing. If you’re new to Cypress and want to learn more, you can start with their documentation.

- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
- [Cypress API](https://docs.cypress.io/api/api/table-of-contents.html)
- [Cypresss Examples](https://docs.cypress.io/examples/examples/recipes.html#Node-Modules)

All new components need to be written in TypeScript and then added to the demo application.

When making a new PatternFly 4 contribution, you’ll need to write a Cypress test to verify and test functionality. You will also need to test all user facing interfaces and components.

This README will show you how to launch the demo app and use Cypress to run your tests against it.

## Building your react component

Building your React component
Once you’ve completed development of a new component, you need to perform a build before you can start writing integration tests.

1. Make your changes in packages/react-core
2. Run the following command from the root directory to build your component:

   `yarn build`

## Running the demo app

Run the following command from the root directory to launch the demo app:

`yarn start:demo-app`

Once the demo app is launched, all saved changes you make to the code should be applied automatically.

## Building a typescript demo

Before you can start writing a Cypress test, you need to build a demo page to test against.

1. Go to the [component demo section](./demo-app-ts/src/components/demos) and create a new folder to add your demo page.
2. To see your demo in app navigation, add your demo to the [Demo.ts](./demo-app-ts/src/Demos.ts) file.

## Building Cypress tests

We use [Cypress](https://www.cypress.io/) for integration testing. View all of our existing Cypress tests [here](./cypress/integration).

Make sure your demo app is running. If you need to launch the demo application, run the following command from the root directory:

`yarn start:demo-app`

Run the following command from the root directory to launch Cypress:

`yarn start:cypress`

You can leave both the demo app and Cypress running while you develop your tests. You may receive notifications from Cypress that ask you to refresh as you make changes. Use the “Try again” button to refresh Cypress with your updated tests.

Add any new integration tests you write to the [integration folder here](./cypress/integration).

## Running integration tests

Once you’ve completed writing your integration tests, run all tests to verify that both new tests and previously written tests are all working.

Run the following command from the root directory to run all tests:

`yarn test:integration`
