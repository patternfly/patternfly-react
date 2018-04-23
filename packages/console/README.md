# @patternfly-react/console

This package provides VncConsole and SerialConsole React components to be used alongside patternfly-react.

**_The below commands are temporary and will be replaced once this repo starts using Lerna._**

### Installing

```
yarn add @patternfly-react/console
```

or

```
npm install @patternfly-react/console --save
```

### Usage

```javascript
import { VncConsole, SerialConsole } from '@patternfly-react/console
```

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `build:console:*`.

### Testing

Testing is done at the root of this repo. To only run the console tests:

```
yarn test packages/console
```

### Publishing

```
yarn publish
```
