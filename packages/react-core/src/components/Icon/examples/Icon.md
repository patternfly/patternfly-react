---
id: Icon
section: components
cssPrefix: pf-v6-c-icon
propComponents: ['Icon']
---

import { Fragment, useState } from 'react';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import RhMicronsCaretRightIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-caret-right-icon';
import RhMicronsCaretDownIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-caret-down-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiWarningFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

## Examples

### Basic

```ts file="IconBasic.tsx"
```

### Standalone icon sizes

These are the standard options for sizing icons.

```ts file="StandaloneIconSizes.tsx"
```

### Body sizes

These size options are meant to make icons match the size of body text.

```ts file="BodyIconSizes.tsx"
```

### Heading sizes

These size options are meant to make icons match the size of heading text.

```ts file="HeadingIconSizes.tsx"
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
