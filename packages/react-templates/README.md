# @patternfly/react-templates

This package provides wrapped Patternfly component demos with a streamlined API for ease of use.

### Prerequisite

#### Node Environment

This project currently supports [Node Active LTS](https://github.com/nodejs/Release#release-schedule) releases. Please stay current with Node Active LTS when developing patternfly-react.

For example, to develop with Node 18, use the following:

```
nvm install 18
nvm use 18
```

This project also requires a Yarn version of >=1.6.0. The latest version can be installed from the [Yarn](https://yarnpkg.com/) home page.

### Installing

```
yarn add @patternfly/react-templates
```

or

```
npm install @patternfly/react-templates --save
```

### Usage

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```js
import '@patternfly/react-core/dist/styles/base.css';
```

```js
import { SimpleSelect } from '@patternfly/react-templates';
```
