# @patternfly/react-icons

PatternFly 4 Icons as React Components.

## Usage

### Option 1 - Icon Component

As a convenience `@patternfly/react-icons` exports an `Icon` component that can render any of the provided icons by providing it a name prop. This option does remove the ability for treeshaking so this should only be used in environments where that is not a concern.

```jsx
import React from 'react';
import { Icon } from '@patternfly/react-icons';

const closeIcon = <Icon name="times" />;
```

For a list of the available icons please refer to the [PatternFly React Docs](https://patternfly-react.netlify.com/styles/icons)

### Option 2 - Use icons directly.

This is the best option use if you desire icons to be treeshaken.

```jsx
import React from 'react';
import { Times } from '@patternfly/react-icons';

const closeIcon = <Times />;
```

## Adding Icons

Icons for this package are generated from the `@fortawesome/free-solid-svg-icons` package. To add more to what is generated, modify the [icons.js](./build/icons.js) file in the build folder.