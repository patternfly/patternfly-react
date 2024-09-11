---
id: Popover
section: components
cssPrefix: pf-v6-c-popover
propComponents: ['Popover']
---

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';

## Examples

By default, the `appendTo` prop of the popover will append to the document body in order to avoid the popover content not being fully visible. Another option is to increase the z-index of the element the popover is appended to to be higher than the z-index of the element that is hiding the popover.

### Basic

```ts file="./PopoverBasic.tsx"

```

### Hoverable

```ts file="./PopoverHover.tsx"

```

### Close popover from content (controlled)

```ts file="./PopoverCloseControlled.tsx"

```

### Close popover from content (uncontrolled)

Note: If you use the isVisible prop, either refer to the example above or if you want to use the hide callback from the content then be sure to keep isVisible in-sync.

```ts file="./PopoverCloseUncontrolled.tsx"

```

### Without header/footer/close and no padding

```ts file="./PopoverWithoutHeaderFooterCloseNoPadding.tsx"

```

### Width auto

Here the popover goes over the navigation, so the prop `appendTo` is set to the documents body.

```ts file="./PopoverWidthAuto.tsx"

```

### Popover react ref

```ts file="./PopoverReactRef.tsx"

```

### Popover selector ref

```ts file="./PopoverSelectorRef.tsx"

```

### Advanced

```ts file="./PopoverAdvanced.tsx"

```

### Popover with icon in the title

Here the popover goes over the navigation, so the prop `appendTo` is set to the documents body.

```ts file="./PopoverWithIconInTheTitle.tsx"

```

### Alert popover

Here the popover goes over the navigation, so the prop `appendTo` is set to the documents body.

```ts file="./PopoverAlert.tsx"

```

### Custom focus

Use the `elementToFocus` property to customize which element inside the Popover receives focus when opened.

```ts file="./PopoverCustomFocus.tsx"

```
