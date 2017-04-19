[![Build Status](https://travis-ci.org/patternfly/patternfly-react.svg?branch=master)](https://travis-ci.org/patternfly/patternfly-react)
[![npm version](https://badge.fury.io/js/patternfly-react.svg)](https://badge.fury.io/js/patternfly-react)

# patternfly-react

This project will provide a set of React UI components for the [PatternFly project](https://patternfly.org).

##  Getting Started
```
npm install --save patternfly-react
```

Then import Patternfly React UI modules as ES6 modules:
```
import { Alert } from 'patternfly-react'
```

## Storybook UI Development
This project uses [React Storybook](https://getstorybook.io/) to test and demo new React UI components.

How to use Storybook locally:
```
npm run storybook
```

How to deploy storybook to github pages in your fork:
```
npm run build-storybook
npm run storybook:deploy
```
