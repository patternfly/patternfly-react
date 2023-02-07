---
id: Dropdown
section: components
cssPrefix: pf-c-dropdown
propComponents:
  ['Dropdown', 'DropdownGroup', 'DropdownItem', 'DropdownToggle', 'DropdownToggleCheckbox', 'DropdownToggleAction', DropdownSeparator]
ouia: true
---

import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import { Link } from '@reach/router';
import avatarImg from '../../Avatar/examples/avatarImg.svg';

## Examples

### Basic dropdowns

Basic dropdowns present users with a menu of items upon clicking a dropdown toggle. The `isOpen` property is used to determine whether the menu is opened or not.

All of the items in a dropdown list are created as `<DropdownItem>` components. The following example shows a few different states of dropdown items. As shown in this example, dropdown items may: 
- Use the `tooltip` property to enable tooltip support. 
- Use the `isDisabled` property to disable an item.
- Use the `isAriaDisabled` property to style an item as disabled, while still allowing the item to receive keyboard focus and display a tooltip.

This example also uses a `<DropdownSeparator>`, which adds a horizontal line that splits the menu into 2 sections.

```ts file='./DropdownBasic.tsx'
```

### Autofocus on dropdown expansion

A `<DropdownItem>` may use the  `autoFocus` property so that it automatically receives focus when the menu is expanded. `autoFocus` cannot be applied to disabled dropdown items.

```ts file="./DropdownInitialSelection.tsx"
```

### With groups of items

Use the `<DropdownGroup>` component to group sets of related dropdown items together. Use the `isGrouped` property on the `Dropdown` component to indicate that a dropdown contains grouped items.

```ts file="./DropdownGroups.tsx"
```

### With item descriptions

A `<DropdownItem>` may use the `description` property to provide users with more context. This description will appear in the menu below the dropdown item it corresponds to.

```ts file="./DropdownDescriptions.tsx"
```

### With custom content

You may replace standard dropdown items with custom content. If so, you must style the menu contents and manage focus within your custom implementation.

```ts file="./DropdownBasicPanel.tsx"
```

### With router link items

`<DropdownItem>` may use the `component` property to include router links.

```ts file="./DropdownRouterLink.tsx"
```

### Toggle styling

You can adjust the styling of a `<DropdownToggle>` using the `toggleVariant` property. `toggleVariant` may be set to 'primary', 'secondary', or 'default'.

```ts file="./DropdownPrimaryToggle.tsx"
```

### Plain text toggle

A toggle may be styled as plain text using the `isText` and `isPlain`properties. The following example applies these properties to a `<Dropdown>` component.

```ts file="./DropdownPlainTextToggle.tsx"
```

### Disabled toggles

A `<DropdownToggle>` may use the `isDisabled` property to disable the expansion of the dropdown menu.

```ts file="./DropdownDisabled.tsx"
```

### Icon toggle

`<DropdownToggle>` may use a recognizable icon instead of a text label if text would take up too much room. Set the `toggleIndicator` property to `{null}` to remove the default dropdown toggle caret.

```ts file="./DropdownIconOnly.tsx"
```

### Kebab toggle

Use `<KebabToggle>` to replace the default text label and caret with a kebab icon. A kebab toggle can be used to indicate that a dropdown connects to a menu.

```ts file="./DropdownKebab.tsx"
```

### Toggle with image

The `icon` property can be used to display an image in the `DropdownToggle` and can be used alongside a text label.

```ts file="./DropdownImageAndText.tsx"
```

### Toggle with badge

You may use a `<BadgeToggle>` to display the number of dropdown menu items.

```ts file="./DropdownBadge.tsx"
```

### Split button (checkbox)

To combine an action button or other control with a dropdown menu, use a split button. A `<DropdownToggle>` can be rendered as a split button by using the `splitButtonItems` property. Elements to be displayed before the toggle button must be included in `splitButtonItems`.

The following example shows a split button with a `<DropdownToggleCheckbox>`, which is primarily used for bulk select operations on large data sets. 

```ts file="./DropdownSplitButton.tsx"
```

### Split button (checkbox with toggle text)

Text labels may optionally be used alongside actions within split buttons.

```ts file="./DropdownSplitButtonText.tsx"
```

### Split button (progress checkbox)

The `isInProgress` property can be used to indicate a progress state by rendering a spinner in place of a checkbox.

```ts isBeta file="./DropdownSplitButtonProgressCheckbox.tsx"
```

### Split button toggle variants

Use the `toggleVariant` and `splitButtonVariant` properties to adjust the styling of split button toggles. 

The following example uses `toggleVariant="primary"` to apply primary visual styling and `splitButtonVariant="action"` to include an action.

```ts file="./DropdownSplitButtonActionPrimary.tsx"
```

### Dropdown alignment

The alignment of a dropdown menu may be changed to better fit the size of a user's browser window. A `<Dropdown>` may use the `alignments` property to indicate how the menu will align at different screen sizes.

```ts file="./DropdownAlignmentOnBreakpoints.tsx"
```

### Right-positioned menu

The following example demonstrates a `<Dropdown>` with a `position` equal to 'right'. By default, a dropdown menu is left-positioned, but a right-positioned menu may work better depending on where your dropdown is placed on a page.

```ts file="./DropdownPositionRight.tsx"
```

### Upwards directional menu

The following example demonstrates a `<Dropdown>` with a  `direction` equal to 'up'. This will alter the default menu behavior so that the dropdown menu is displayed above the dropdown toggle.

```ts file="./DropdownDirectionUp.tsx"
```

### Using document parent element

Avoid passing in `document.body` to a `<Dropdown>` `menuAppendTo` property. Doing so can cause accessibility issues, such as being unable to navigate `<Dropdown>` options using keyboards or screen readers. 

Instead, append to ‘parent’ to avoid sacrificing accessibility.

The following example demonstrates both methods of appending. After making a selection, both dropdowns retain focus on their respective `<Dropdown>`, but the options for the `document.body` variant cannot be navigated via Voice Over.

```ts file="./DropdownAppendBodyVsParent.tsx"
```
