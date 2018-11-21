# @patternfly/react-console

This package provides VncConsole, SerialConsole and DesktopViewer React components
to be used alongside patternfly-react to access virtual machine or server consoles.

### Installing

```
yarn add @patternfly/react-console
```

or

```
npm install @patternfly/react-console --save
```

### Usage

```javascript
import { VncConsole, SerialConsole } from '@patternfly/react-console';
```

#### Styling:

Example with LESS:

```
@import "~bootstrap/less/variables";
@import "~patternfly/dist/less/variables";
@import "~patternfly-react/dist/less/patternfly-react.less";
@import "~xterm/dist/xterm.css";
@import "~@patternfly/react-console/dist/less/console.less";
```

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo. To only run the console tests:

```
yarn test packages/console
```

### Publishing

```
yarn publish
```
