# PatternFly React Getting Started

This README is intended to further detail some of the steps mentioned in the PatternFly React [Contributing Guide](./CONTRIBUTING.md#code-consistency) and help new contributors getting started with PatternFly React.

## Learning React

If you haven't already, we highly recommend taking a look at the [React Documentation site](https://reactjs.org/). This contains up to date information on React from the project's core maintainers at Facebook.

We also have a few documents started on this subject with some helpful links and descriptions that might help you learn React. Feel free to add your own docs and helpful links here!

- [Getting Started w/ React](https://gist.github.com/priley86/770aaf64ccca5bdfdb4beee208956f7b) by Patrick Riley

## PatternFly React Doc

See how to write documentation in the [`react-docs` README](./packages/react-docs/README.md)

When writing examples:

1. Keep them simple. It is much easier for a person to understand what is going on.
2. Try not to add extra external dependencies. These will only be approved on a case by case basis.

## Testing

PatternFly React currently uses [Jest](https://facebook.github.io/jest/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for running unit tests and [Cypress](https://www.cypress.io/) for running integration tests.

### Jest + React Testing Library

Use Jest and React Testing Library to capture how the DOM should look after rendering and verify that it functions as you expect. Save tests (`*.test.tsx` files) under a `__tests__` folder. A common test is to expect a rendered component to match a snapshot. You can run these with `yarn test`. You can find more information about React Testing Library as it pertains to this project and the standards we're following on our [React Testing Library Basics](https://github.com/patternfly/patternfly-react/wiki/React-Testing-Library-Basics,-Best-Practices,-and-Guidelines) wiki article.

### Cypress

Use Cypress tests to capture how the DOM should look after interactions. Save Cypress tests (`*.spec.ts` files) under `packages/react-integration/cypress/integration`. You can run these with `yarn start:cypress`.

## Linting

PatternFly React has 3 linters you can run all at once using `yarn lint:all`. These are run in `--fix` mode in on your staged files each commit.

### ESLint

ESLint is run on .js, .jsx, .ts, and .tsx files. It uses the [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) parser with custom config added over the years. We write some of our own ESLint rules in `eslint-plugin-patternfly-react`. You can run this linter with `yarn lint:ts` or on specific files with `yarn lint <path>`.
