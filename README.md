# patternfly-react
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.org/patternfly/patternfly-react.svg?branch=master)](https://travis-ci.org/patternfly/patternfly-react)
[![npm version](https://badge.fury.io/js/patternfly-react.svg)](https://badge.fury.io/js/patternfly-react)

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
This project uses [React Storybook](https://getstorybook.io/) to test and demo new React UI components. You can view our current storybook [here](https://rawgit.com/patternfly/patternfly-react/gh-pages/index.html).

How to use Storybook locally:
```
npm i
npm start
```

How to deploy storybook to github pages in your fork:
```
npm run storybook:build
npm run storybook:deploy
```

To deploy Storybook to a remote other than `origin`, pass a `--remote` flag to `npm run storybook:deploy`.
For example, to deploy to your `upstream` remote:
```
npm run storybook:deploy -- --remote=upstream
```
To deploy Storybook to a target branch and serve with rawgit instead of gh-pages, pass `--branch` flag
to `npm run storybook:deploy`.
For example, to deploy to `feature-branch` target:
```
npm run storybook:deploy -- --branch=feature-branch
```

## Meeting Notes
You can find all Patternfly React Community Meeting notes [here](http://www.patternfly.org/community/monthly-community-meeting/).
