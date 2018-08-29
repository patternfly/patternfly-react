# @patternfly/react-icons

PatternFly 4 Icons as React Components.

## Usage

```jsx
import React from 'react';
import { TimesIcon } from '@patternfly/react-icons';

const closeIcon = <TimesIcon />;
```

For a list of the available icons please refer to the [PatternFly React Docs](https://patternfly-react.netlify.com/styles/icons)

## Adding Icons

Icons for this package are generated from the `@fortawesome/free-solid-svg-icons` package. To add more to what is generated, modify the [icons.js](./build/icons.js) file in the build folder.