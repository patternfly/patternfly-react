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
"react-monaco-editor": "^0.51.0"
```

To properly install the library `monaco-editor-webpack-plugin` be sure to follow the [plugin instructions](https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin)

#### With create-react-app Projects
If you created your project with `create-react-app` you'll have some extra work to do, or you wont have syntax highlighting. Using the webpack plugin requires updating your webpack config, which `create-react-app` abstracts away. You can `npm eject` your project, but you may not want to do that. To keep your app set up in the `create-react-app` style but to get access to your webpack config you can use `react-app-rewired`.

First, install `react-app-rewired` as a development dependency:
```sh
$ npm install -D react-app-rewired
```

Next, replace all of the `react-script` references in your `package.json` `scripts` section with `react-app-required`:
```json
 "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  }
```

Next, create a `config-overries.js` file at the root of your project and add the following:

```javascript
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {  
    config.plugins.push(new MonacoWebpackPlugin({
        languages: ['json', 'yaml', 'shell']
    }));
    return config;
}
```

Note: You should change the `languages` array based on your needs. 

You can now start your app with `npm start` and syntax highlighting should work.

#### Enable YAML Syntax Highlighting
The Monaco editor doesn't ship with full YAML support. You can configure your code editor with `Languages.yaml` but there will be no highlighting, even i you have the webpack plugin working correctly. To enable YAML support you need to do the following:

First, install `monaco-yaml`:
```shell
$ npm install --save monaco-yaml
```

Next, at the entrypoint of your app enable it:
```javascript
import { setDiagnosticsOptions } from 'monaco-yaml';

setDiagnosticsOptions({
  enableSchemaRequest: true,
  hover: true,
  completion: true,
  validate: true,
  format: true,
  schemas: [],
});
```

The `monaco-yaml` plugin has a lot of options so check out their docs to see what else you may want to add.
