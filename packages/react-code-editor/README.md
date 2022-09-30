# @patternfly/react-code-editor

This package provides a PatternFly wrapper for the Monaco code editor

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
yarn add @patternfly/react-code-editor
```

or

```
npm install @patternfly/react-code-editor --save
```

### Usage

#### Pre-requisites

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```js
import '@patternfly/react-core/dist/styles/base.css';
```

```js
import { CodeEditor } from '@patternfly/react-code-editor';
```

Install peer deps
```json
"monaco-editor": "^0.21.3",
"monaco-editor-webpack-plugin": "^2.1.0",
"react": "^16.8 || ^17 || ^18",
"react-dom": "^16.8 || ^17 || ^18",
"react-monaco-editor": "^0.41.2"
```

To properly install the library `monaco-editor-webpack-plugin` be sure to follow the [plugin instructions](https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin)
