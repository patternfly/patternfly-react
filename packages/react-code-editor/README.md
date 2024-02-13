# @patternfly/react-code-editor

This package provides a PatternFly wrapper for the Monaco code editor, using the `@monaco-editor/react` package.

### Prerequisite

#### Node Environment

This project currently supports Node [Active LTS](https://github.com/nodejs/Release#release-schedule) releases. Please stay current with Node Active LTS when developing patternfly-react.

For example, to develop with Node 18, use the following:

```
nvm install 18
nvm use 18
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
"react": "^17 || ^18",
"react-dom": "^17 || ^18"
```

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

You can now start your app with `npm start` and syntax highlighting should work.

#### Enable YAML Syntax Highlighting

The Monaco editor doesn't ship with full YAML support. You can configure your code editor with `Languages.yaml` but there will be no highlighting. To enable YAML support you need to do the following:

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
  schemas: []
});
```

Finally, to allow the `monaco-yaml` autocomplete to function properly with `@monaco-editor/react`, you should configure your YAML schema in a `beforeMount` call with the `monaco-yaml` `configureMonacoYaml` function. This `beforeMount` function should be passed to `CodeEditor` via the `editorProps` property like so:

```
editorProps: {
  beforeMount: yourBeforeMountHandler
}
```

The `monaco-yaml` plugin has a lot of options so check out their docs to see what else you may want to add.
