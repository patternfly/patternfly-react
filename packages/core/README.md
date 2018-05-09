# patternfly-react

This package provides Core PatternFly React components for PatternFly 3.

### Installing

```
yarn add patternfly-react
```

or

```
npm install patternfly-react --save
```

### Usage

```javascript
import { Alert } from 'patternfly-react';
```

#### Styling:

Example with LESS:

```
@import "~bootstrap/less/variables";
@import "~patternfly/dist/less/variables";
@import "~patternfly-react/dist/less/patternfly-react.less";
```

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo. To only run the patternfly-react tests:

```
yarn test packages/core
```

### Publishing

```
yarn publish
```
