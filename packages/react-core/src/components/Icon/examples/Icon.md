---
id: Icon
section: components
cssPrefix: pf-c-icon
propComponents: ['Icon']
beta: true
---

import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

## Examples

### Basic

```ts file="IconBasic.tsx"
```

### Sizes

```ts file="IconSizes.tsx"
```

### Status colors

The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.

```ts file="IconStatus.tsx"
```

### Sizing an icon within the icon container

Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.

```ts file="IconContentSizes.tsx"
```

### Inline

```ts file="IconInline.tsx"
```

### In progress

Passing the `isInProgress` property will swap the icon to a progress icon. By default this progress icon will be a `Spinner` but may be customized or overriden using the `progressIcon` property.

```ts file="IconProgress.tsx"
```

### Custom in progress icon

```ts file="IconCustomProgress.tsx"
```
