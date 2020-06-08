# @patternfly/react-topology

This package provides Topology View components based on [PatternFly 4][patternfly-4]

### Prerequisites

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
yarn add @patternfly/react-topology
```

or

```
npm install @patternfly/react-topology --save
```

## Usage

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```javascript
import '@patternfly/react-core/dist/styles/base.css';
```

#### Example Component Usage

```javascript
import React from 'react';
// TODO
```

## Contribution

This library makes use of the babel plugin from [@patternfly/react-styles](../react-styles/README.md) to enable providing the CSS alongside the components. This removes the need for consumers to use (style|css|sass)-loaders. For an example of using CSS from core you can reference [Button.js](./src/components/Button/Button.js). For any CSS not provided by core please use the `StyleSheet.create` utility from [@patternfly/react-styles](../react-styles/README.md). This will prevent collisions with any consumers, and allow the CSS to be bundled with the component.

### Documentation

This project uses Gatsby. For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

A comprehensive list of components and detailed usage of each can be found on the [PatternFly React Docs][docs] website
You can also find how each component is meant to be used from a design perspective on the [PatternFly 4 Core][patternfly-4] website.

Note: All commands below assume you are on the root directory in this repository.

### Install

Run to install all the dependencies

```sh
yarn && yarn bootstrap && yarn build && yarn build:docs
```

### Building

```sh
yarn bootstrap && yarn build && yarn build:docs
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

### Building

```
yarn build
```

### Testing

Testing is done at the root of this repo. To only run the @patternfly/react-topology tests:

```
yarn test packages/react-topology
```

[patternfly-4]: https://github.com/patternfly/patternfly-next
[docs]: https://patternfly-react.surge.sh/patternfly-4
