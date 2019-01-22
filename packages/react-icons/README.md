# @patternfly/react-icons

PatternFly 4 Icons as React Components.

## Usage

```jsx
import React from 'react';
import { TimesIcon } from '@patternfly/react-icons';

const closeIcon = <TimesIcon />;
```

For a list of the available icons please refer to the [PatternFly React Docs](https://patternfly-react.surge.sh/patternfly-4/styles/icons)

Every icon component has the following props:

| Prop  | Description                                                      | Default        |
| ----- | ---------------------------------------------------------------- | -------------- |
| color | Color of the icon (e.g. red, white, #c3ee)                       | 'currentColor' |
| size  | Size of the icon. There are 4 different sizes: sm, md, lg and xl | sm             |
| title | Label of the icon                                                | null           |

## Adding Icons

Icons for this package are generated from the `@fortawesome/free-solid-svg-icons` package. To add more to what is generated, modify the [icons.js](./build/icons.js) file in the build folder.

If you have some custom icon defined by svg path the best way to add such icon to this repository is to add it's path definition in [pfIcons.js](./build/pfIcons.js) file in the build folder.
```JS
module.exports = {
  pfIcons: {
    // ... other icon defintions
    bigPlus: {width: 1024, height: 1024, svgPathData: 'M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z'}
  }
}
```
