# patternfly-react-extensions

This package provides extensions to the Patternfly React components to be used alongside patternfly-react.
The components in this package do not yet have associated patterns found on [PatternFly.org](https://www.patternfly.org/).

### Installing

```
yarn add patternfly-react-extensions
```

or

```
npm install patternfly-react-extension --save
```

### Usage

```javascript
import { <component> } from 'patternfly-react-extensions';
```

#### Styling:

Example with LESS:

```
@import "~bootstrap/less/variables";
@import "~patternfly/dist/less/variables";
@import "~patternfly-react/dist/less/patternfly-react.less";
@import "~patternfly-react-extensions/dist/less/patternfly-react-extensions.less";
```

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo. To only run the extensions tests:

```
yarn test packages/patternfly-3/patternfly-react-extensions
```

### Publishing

```
yarn publish
```
