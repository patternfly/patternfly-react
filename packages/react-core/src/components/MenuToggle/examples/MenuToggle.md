---
id: Menu toggle
section: components
subsection: menus
cssPrefix: pf-v6-c-menu-toggle
propComponents: ['MenuToggle', 'MenuToggleAction', 'MenuToggleCheckbox']
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

### Small toggle

You can pass `size="sm"` to a MenuToggle to style it as a small toggle, such as within a [breadcrumb](/components/breadcrumb).

```ts file="./MenuToggleSmall.tsx"

```

### Disabled toggle

To disable the selection and expansion of a toggle, use the `isDisabled` property.

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<MenuToggle isDisabled>Disabled</MenuToggle>

```

### With a badge

To display a count of selected items in a toggle, use the `badge` property. You can also pass in `variant="plainText"` for a badge only toggle.

```ts
import React from 'react';
import { MenuToggle, Badge } from '@patternfly/react-core';

<React.Fragment>
  <MenuToggle badge={<Badge>4 selected</Badge>}>Count</MenuToggle>
  <MenuToggle variant="plainText" badge={<Badge screenReaderText="additional items">4</Badge>} />
</React.Fragment>
```

### With icons

To add a recognizable icon to a menu toggle, use the `icon` property. The following example adds a `CogIcon` to the toggle.

For most basic icons, it is recommended to wrap it inside our [icon component](/components/icon).

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

<React.Fragment>
  <MenuToggle
    icon={<CogIcon />}
    variant="primary"
  >
    Icon
  </MenuToggle>{' '}
  <MenuToggle
    icon={<CogIcon />}
    variant="secondary"
  >
    Icon
  </MenuToggle>{' '}
  <MenuToggle
    icon={<CogIcon />}
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
  <MenuToggle icon={<EllipsisVIcon />} variant="plain" aria-label="plain kebab"/>
  {' '}
  <MenuToggle icon={<EllipsisVIcon />} variant="plain" isExpanded aria-label="plain expanded kebab"/>
  {' '}
  <MenuToggle icon={<EllipsisVIcon />} variant="plain" isDisabled aria-label="disabled plain kebab"/>
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

### Split toggle with checkbox

To add a checkbox (or other action/control) to a menu toggle, use a split button.

A `<MenuToggle>` can be rendered as a split button by adding a `splitButtonItems` property. Elements to be displayed before the toggle button must be included in the `splitButtonItems`.

The following example shows a split button with a `<MenuToggleCheckbox>`.

Variant styling can be applied to split button toggles to adjust their appearance for different scenarios. Both "primary" and "secondary" variants can be used with split button toggles.

```ts file='MenuToggleSplitButtonCheckbox.tsx'

```

### Split toggle with labeled checkbox

You can allow users to select a toggle checkbox by clicking either the checkbox or the text label.

To link a split toggle label to the toggle's checkbox, pass both the label and the `<MenuToggleCheckbox>` component to `splitButtonItems`. 

```ts file='MenuToggleSplitButtonCheckboxWithText.tsx'

```

### Split toggle with checkbox and toggle text 

To link a split toggle label to the toggle button itself, pass the label to the `<MenuToggle>` component, instead of `splitButtonItems`.

```ts file='MenuToggleSplitButtonCheckboxWithToggleText.tsx'

```

### Split toggle with action

To add an action to a split button, add a `<MenuToggleAction>` to the `splitButtonItems` property.

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

```ts file='MenuToggleStatus.tsx'

```

### Placeholder text in toggle

To indicate the toggle contains placeholder text, pass the `isPlaceholder` property to the `MenuToggle`.

```ts file='MenuTogglePlaceholder.tsx'

```
