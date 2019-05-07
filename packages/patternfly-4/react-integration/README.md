# Patternfly 4 React Integration Testing

## Overview
Here you will find a demo application written in typescript, along with cypress integration testing.  This is used to allow developers to verify their code against a working react app that is running their latest PF4 react changes.

New componets should be written in typescript and added to the demo app.  Contributors should write cypress tests to test the functionality of their components.  Contributors should also test all of the user facing interfaces and components that they are creating.

## Building your react component
After completing the development of their component a contributor should perform a build so they can start writing integration tests.

1. Make your changes in packages/patternfly-4/react-core
2. Type `yarn build` to build your component.

## Running the demo app
To launch the demo app a contributor can run the following command:
1. `yarn start demo:app` this will launch the demo app and watch for changes in it.

## Building a typescript demo
Prior to writing a cypress test you will need to build a demo page to test aginst.  Demos can be found in the [components demos section](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-integration/demo-app-ts/src/components/demos).  You can create a new folder to add your demo.

In order for your demo to show up in the demo app you should add it to the [Demo.ts](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-integration/emo-app-ts/src/Demos.ts) file. Once you add it to the ts file you should see your demo show up in the navigation on the right hand side of the app.

## Building and running your integration test
For integration testing we use [Cypress](https://www.cypress.io/).  If you are new to Cypress and would like to learn more on how to the use the product a good starting point is their documentation.  Our cypress tests can be found [here](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-integration/cypress/integration).  Contributors should add their new tests for their new components there.

To launch cypress so you can run your tests against the demo application you should do the following:
1. Make sure your demo app is running. You launch it by running `yarn start:demo-app`
2. Launch cypress so you can run your tests by running `yarn start:cypress`

You can leave both applications running while developing your tests.  Cypress will update with changes you make to your test.  Once in a while Cypress may inform you it needs to be refresh when you are making changes to your tests.  If this happens you will be provide a try again button to refresh Cypress with your updated tests.

## Running all the tests.
Once you have completed writing your integration test you should run all the tests.  The reason for this is to verify that previously written tests still work.  This can be done by running the command `yarn run test:integration`.