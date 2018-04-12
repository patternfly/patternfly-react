# patternfly-react

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.org/patternfly/patternfly-react.svg?branch=master)](https://travis-ci.org/patternfly/patternfly-react)
[![npm version](https://badge.fury.io/js/patternfly-react.svg)](https://badge.fury.io/js/patternfly-react)
[![Coverage Status](https://coveralls.io/repos/github/patternfly/patternfly-react/badge.svg?branch=master)](https://coveralls.io/github/patternfly/patternfly-react?branch=master)

This project will provide a set of React UI components for the [PatternFly project](https://patternfly.org).

## Getting Started

First, add `patternfly-react` dependency to your project. If you use Yarn:

```
yarn add patternfly-react
```

Alternatively, if you use npm:

```
npm install --save patternfly-react
```

Then import Patternfly React UI modules as ES6 modules:

```
import { Alert } from 'patternfly-react'
```

## Using patterfly-react Sass files

As an alernative to consuming the `patternfly-react.css` file (found in `dist/css`), you can build patternfly-react styles into your css by including the Sass partials from `dist/sass`. The partial `_patternfly-react.scss` will pull in all the partials required for the patternfly-react components. When using the patternfly-react Sass files, you **MUST** include bootstrap and patternfly variables and mixins. An example of the required imports can be found in [patternfly-react.scss](./sass/patternfly-react.scss).

## Node Environment

This project currently supports Node [Active LTS](https://github.com/nodejs/Release#release-schedule) releases. Please stay current with Node Active LTS when developing patternfly-react.

For example, to develop with Node 8, use the following:

```
nvm install 8
nvm use 8
```

## Storybook UI Development

This project uses [React Storybook](https://storybook.js.org/) to test and demo new React UI components. You can view our current storybook [here](https://rawgit.com/patternfly/patternfly-react/gh-pages/index.html).

How to use Storybook locally:

```
yarn install
yarn start
```

How to deploy storybook to github pages in your fork:

```
yarn storybook:build
yarn storybook:deploy
```

To deploy Storybook to a remote other than `origin`, pass a `--remote` flag to `yarn storybook:deploy`.
For example, to deploy to your `upstream` remote:

```
yarn storybook:deploy --remote=upstream
```

To deploy Storybook to a target branch and serve with rawgit instead of gh-pages, pass `--branch` flag to `yarn storybook:deploy`. This will create a new branch to serve your Storybook (and will be useful if you have multiple open pull requests).

For example, say you have `feature-branch`, you can deploy the storybook to a rawgit branch with:

```
yarn storybook:deploy --branch=feature-branch-storybook
```

## Meeting Notes

You can find all Patternfly React Community Meeting notes [here](http://www.patternfly.org/community/monthly-community-meeting/).
