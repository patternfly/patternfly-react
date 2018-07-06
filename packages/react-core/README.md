# @patternfly/react-core

This package provides Core PatternFly components for the [PatternFly 4][patternfly-4].

### Installing

```
yarn add @patternfly/react-core
```

or

```
npm install @patternfly/react-core --save
```


# Usage

#### Pre-requisites

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```javascript
import '@patternfly/react-core/dist/styles/base.css'
```

#### Example Component Usage

```javascript
import React from 'react';
import { Button } from '@patternfly/react-core';

export default (
  <Button variant="primary">Button</Button>
);
```

All css related to each component is provided alongside it. There is no component level CSS to import.

# Documentation

A comprehensive list of components and detailed usage of each can be found on the [PatternFly React Docs][docs] website
You can also find how each component is meant to be used from a design perspective on the [PatternFly 4 Core][patternfly-4] website.


# Contributing Components
This library makes use of the babel plugin from [@patternfly/react-styles](../react-styles/README.md) to enable providing the CSS alongside the components.  This removes the need for consumers to use (style|css|sass)-loaders. For an example of using CSS from core you can reference [Button.js](./src/components/Button/Button.js). For any CSS not provided by core please use the `StyleSheet.create` utility from [@patternfly/react-styles](../react-styles/README.md). This will prevent collisions with any consumers, and allow the CSS to be bundled with the component.

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo. To only run the patternfly-react tests:

```
yarn test packages/react-core
```

[patternfly-4]: https://github.com/patternfly/patternfly-next
[docs]: https://patternfly-react.netlify.com/
