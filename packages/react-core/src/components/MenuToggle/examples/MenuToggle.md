---
id: Menu toggle
section: components
subsection: menus
cssPrefix: pf-v5-c-menu-toggle
propComponents: ['MenuToggle', 'MenuToggleAction', 'MenuToggleCheckbox', 'SplitButtonOptions']
---

import './MenuToggle.css'

import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

## Examples

### Collapsed toggle

A toggle is collapsed until it is selected by a user.

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<MenuToggle>Collapsed</MenuToggle>

```

### Expanded toggle

When a user selects a toggle, it becomes expanded and is styled with a blue underline. To flag expanded toggles, and apply expanded styling, use the `isExpanded` property .

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<MenuToggle isExpanded>Expanded</MenuToggle>;

```

### Disabled toggle

To disable the selection and expansion of a toggle, use the `isDisabled` property.

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<MenuToggle isDisabled>Disabled</MenuToggle>

```

### With a badge

To display a count of selected items in a toggle, use the `badge` property.

```ts
import React from 'react';
import { MenuToggle, Badge } from '@patternfly/react-core';

<MenuToggle badge={<Badge>4 selected</Badge>}>Count</MenuToggle>

```

### With icons

To add a recognizable icon to a menu toggle, use the `icon` property. The following example adds a `CogIcon` to the toggle.

For most basic icons, it is recommended to wrap it inside our [icon component](/components/icon).

```ts
import React from 'react';
import { MenuToggle, Icon } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

<React.Fragment>
  <MenuToggle
    icon={
      <Icon>
        <CogIcon />
      </Icon>
    }
    variant="primary"
  >
    Icon
  </MenuToggle>{' '}
  <MenuToggle
    icon={
      <Icon>
        <CogIcon />
      </Icon>
    }
    variant="secondary"
  >
    Icon
  </MenuToggle>{' '}
  <MenuToggle
    icon={
      <Icon>
        <CogIcon />
      </Icon>
    }
    variant="secondary"
    isDisabled
  >
    Icon
  </MenuToggle>
</React.Fragment>;
```

### With avatar and text

You can also pass images into the `icon` property. The following example passes in an `<Avatar>` component with an `imgAvatar`.

This can be used alongside a text label that provides more context for the image.

```ts
import React from 'react';
import { MenuToggle, Avatar } from '@patternfly/react-core';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';

<React.Fragment>
  <MenuToggle icon={<Avatar src={imgAvatar} alt="avatar" />}>Ned Username</MenuToggle>{' '}
  <MenuToggle icon={<Avatar src={imgAvatar} alt="avatar" />} isExpanded>Ned Username</MenuToggle>{' '}
  <MenuToggle icon={<Avatar src={imgAvatar} alt="avatar" />} isDisabled>Ned Username</MenuToggle>
</React.Fragment>
```

### Variant styles

Variant styling can be applied to menu toggles. In the following example, the toggle uses primary styling by passing `variant="primary"` into the `<MenuToggle>` component. Additional variant options include “default”, “plain”, “plainText”, “secondary”, and “typeahead”.

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

<React.Fragment>
  <MenuToggle variant="primary">Collapsed</MenuToggle>{' '}
  <MenuToggle variant="primary" isExpanded>
    Expanded
  </MenuToggle>{' '}
  <MenuToggle variant="primary" isDisabled>
    Disabled
  </MenuToggle>
</React.Fragment>

```

### Plain toggle with icon

To apply plain styling to a menu toggle with an icon, pass in `variant="plain"`. This will remove the default bottom border and caret. You may pass in an `icon` to serve as the menu toggle. The following example passes in an `EllipsisVIcon`.

If the toggle does not have any visible text content, use the `aria-label` property to provide an accessible name.

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

<React.Fragment>
  <MenuToggle variant="plain" aria-label="plain kebab">
    <EllipsisVIcon />
  </MenuToggle>{' '}
  <MenuToggle variant="plain" isExpanded aria-label="plain expanded kebab">
    <EllipsisVIcon />
  </MenuToggle>{' '}
  <MenuToggle variant="plain" isDisabled aria-label="disabled kebab">
    <EllipsisVIcon />
  </MenuToggle>
</React.Fragment>
```

### Plain toggle with text label

To apply plain styling to a menu toggle with a text label, pass in `variant="plainText"`. Unlike the “plain” variant, “plainText” adds a caret pointing down in the toggle.

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<React.Fragment>
  <MenuToggle variant="plainText" isDisabled aria-label="Disabled plain menu toggle">
    Disabled
  </MenuToggle>{' '}
  <MenuToggle variant="plainText" aria-label="Plain menu toggle">
    Custom text
  </MenuToggle>{' '}
  <MenuToggle variant="plainText" isExpanded aria-label="Expanded plain menu toggle">
    Custom text (expanded)
  </MenuToggle>
</React.Fragment>
```

### Split button toggle with checkbox

To add an action button or other control to a menu toggle, use a split button. A `<MenuToggle>` can be rendered as a split button by adding a `splitButtonOptions` object. Elements to be displayed before the toggle button must be included in the `items` property of `splitButtonOptions`.

The following example shows a split button with a `<MenuToggleCheckbox>`.

Variant styling can be applied to split button toggles to adjust their appearance for different scenarios. Both "primary" and "secondary" variants can be used with split button toggles.

```ts file='MenuToggleSplitButtonCheckbox.tsx'

```

### Split button toggle with checkbox label

To display text in a split button menu toggle, add a label to the `items` property of `splitButtonOptions`.

```ts file='MenuToggleSplitButtonCheckboxWithText.tsx'

```

### Split button toggle with checkbox and toggle button text

For split button toggles that should still contain text which will trigger the toggle's `onClick`, pass `children` to the `MenuToggle`.

The following example shows a split button with a `<MenuToggleCheckbox>` and toggle button text.

```ts file='MenuToggleSplitButtonCheckboxWithToggleText.tsx'

```

### Split button toggle with action

To add an action to a split button, pass `variant='action'` into `splitButtonOptions` and add a `<MenuToggleAction>` to the `items` property of `splitButtonOptions`.

Actions may be used with primary and secondary toggle variants.

```ts file='MenuToggleSplitButtonAction.tsx'

```

### Full height toggle

A full height toggle fills the height of its parent. To flag a full height toggle, use the `isFullHeight` property.

In the following example, the toggle fills the size of the "80px" `<div>` element that it is within.

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<div style={{ height: "80px" }}>
  <MenuToggle isFullHeight aria-label="Full height menu toggle">
    Full height
  </MenuToggle>
</div>
```

### Full width toggle

A full width toggle fills the width of its parent. To flag a full width toggle, use the `isFullWidth` property.

In the following example, the toggle fills the width of its parent as the window size changes.

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

const fullWidth: React.FunctionComponent = () => {
  return (
    <MenuToggle isFullWidth aria-label="Full width menu toggle" >
      Full width
    </MenuToggle>
  );
}
```

### Typeahead toggle

To create a typeahead toggle, pass in `variant="typeahead"` to the `<MenuToggle>`. Then, pass a `<TextInputGroup>` component as a child of the `<MenuToggle>`.

To create a multiple typeahead toggle, pass a `<TextInputGroup>` component implemented like the [text input group's filter example](/components/text-input-group#filters) as a child of `<MenuToggle>`.

```ts file='MenuToggleTypeahead.tsx'

```

### Status toggle

To create a toggle with a status, pass in the `status` property to the `MenuToggle`. The default icon associated with each status may be overridden by using the `statusIcon` property.

When the status value is "warning" or "danger", you must include helper text that conveys what is causing the warning/error.

```ts isBeta file='MenuToggleStatus.tsx'

```
