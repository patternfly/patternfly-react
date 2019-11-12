# patternfly-catalog-view-extension

This package contains catalog components based on the ones in PF3's patternfly-react-extensions package.

This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.

### Installing

```
yarn add react-catalog-view-extension
```

or

```
npm install react-catalog-view-extension --save
```

### Usage

```javascript
import { Component } from 'react-catalog-view-extension';
```

#### Styling:

Example with LESS:

```
@import "~bootstrap/sass/variables";
@import "~patternfly/dist/sass/variables";
@import "~patternfly-react/dist/sass/patternfly-react.scss";
@import "~react-catalog-view-extension/dist/sass/react-catalog-view-extension.scss";
```

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo.

```
yarn test
```

### Publishing

```
yarn publish
```

