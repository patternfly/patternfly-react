---
id: Divider
section: components
cssPrefix: pf-c-divider
propComponents: ['Divider']
---

### Using hr (default)
```js
import { Divider } from '@patternfly/react-core';

DividerHr = () => (
  <Divider/>
);
```

### Using li
```js
import { Divider } from '@patternfly/react-core/dist';

DividerLi = () => (
  <ul>
    <li>List item one</li>
    <Divider component="li"/>
    <li>List item two</li>
  </ul>
);
```

### Using div
```js
import { Divider } from '@patternfly/react-core';

DividerDiv = () => (
  <Divider component="div"/>
);
```

### Inset medium
```js
import { Divider } from '@patternfly/react-core';

DividerInsetMedium = () => (
  <Divider inset={{default: 'insetMd'}}/>
);
```

### Inset at various breakpoints
```js
import { Divider } from '@patternfly/react-core';

DividerInsetVarious = () => (
  <Divider inset={{
          default: 'insetMd',
          md: 'insetNone',
          lg: 'inset3xl',
          xl: 'insetLg'
        }}
      />
);
```

### Vertical in flex layout
```js
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

DividerVertical = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider isVertical/>
    <FlexItem>second item</FlexItem>
  </Flex>
);
```

### Vertical, inset medium in flex layout
```js
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

DividerVerticalInsetMd = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider isVertical inset={{default: 'insetMd'}}/>
    <FlexItem>second item</FlexItem>
  </Flex>
);
```

### Vertical, inset at various breakpoints
```js
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

DividerVerticalInsetVarious = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider isVertical 
      inset={{
        default: 'insetMd',
        md: 'insetNone',
        lg: 'insetSm',
        xl: 'insetXs'
      }}
    />
    <FlexItem>first item</FlexItem>
  </Flex>
);
```
