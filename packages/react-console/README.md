# @patternfly/react-console

This package provides VncConsole, SerialConsole and DesktopViewer React components
to be used alongside patternfly-react to access virtual machine or server consoles.

### Prerequisite

#### Node Environment

This project currently supports Node [Active LTS](https://github.com/nodejs/Release#release-schedule) releases. Please stay current with Node Active LTS when developing patternfly-react.

For example, to develop with Node 8, use the following:

```
nvm install 8
nvm use 8
```

This project also requires a Yarn version of >=1.6.0. The latest version can be installed [here](https://yarnpkg.com/).

### Installing

```
yarn add @patternfly/react-console
```

or

```
npm install @patternfly/react-console --save
```

### Usage

#### Pre-requisites

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```js
import '@patternfly/react-core/dist/styles/base.css';
```

```js
import { VncConsole, SerialConsole } from '@patternfly/react-console';
```

# Documentation

This project uses Gatsby. For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

A comprehensive list of components and detailed usage of each can be found on the [PatternFly React Docs][docs] website
You can also find how each component is meant to be used from a design perspective on the [PatternFly 4 Core][patternfly-4] website.

Note: All commands below assume you are on the root directory in this repository.

### Install

Run to install all the dependencies

```sh
yarn && yarn bootstrap && yarn build && yarn build:docs
```

### Running

To start the site locally.

```sh
yarn build && yarn start:pf4
```

### Building

To build the site.

```sh
yarn build:docs
```

# Contributing Components

This library makes use of the babel plugin from [@patternfly/react-styles](../react-styles/README.md) to enable providing the CSS alongside the components. This removes the need for consumers to use (style|css|sass)-loaders. For any CSS not provided by core please use the `StyleSheet.create` utility from [@patternfly/react-styles](../react-styles/README.md). This will prevent collisions with any consumers, and allow the CSS to be bundled with the component.

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

[patternfly-4]: https://github.com/patternfly/patternfly
[docs]: https://patternfly-react-main.surge.sh/
