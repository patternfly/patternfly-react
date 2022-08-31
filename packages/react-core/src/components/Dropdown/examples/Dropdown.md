---
id: Dropdown
section: components
cssPrefix: pf-c-dropdown
propComponents:
  ['Dropdown', 'DropdownGroup', 'DropdownItem', 'DropdownToggle', 'DropdownToggleCheckbox', 'DropdownToggleAction']
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

Basic dropdowns present all selectable items in a [menu](/components/menu) upon clicking a dropdown toggle. The `isOpen` property is used to determine whether the menu is opened or not.

All of the items in a dropdown list are created using the `DropdownItem` component. The following example shows a few different states of dropdown items. For each item, you may: 
- Use the `tooltip` property to enable tooltip support. 
- Use the `isDisabled` property to disable certain menu items.
- Use the `isAriaDisabled` property to make a menu item appear disabled, while still being able to receive keyboard focus and display a tooltip.

This example also uses a `DropdownSeparator` to add a horizontal line to separate sections of the menu. 

```ts file='./DropdownBasic.tsx'
```

### With initial focus

Use the `autoFocus` property on a `DropdownItem` to have it automatically receive focus upon clicking the dropdown toggle. `autoFocus` cannot be applied to disabled dropdown items.

```ts file="./DropdownInitialSelection.tsx"
```

### With groups

Use the `DropdownGroup` component to group sets of dropdown items together. This allows you to group related items together to help contextualize the options. Use the `isGrouped` property on the `Dropdown` component to indicate that the dropdown contains grouped items.

```ts file="./DropdownGroups.tsx"
```

### Disabled toggles

Use the `isDisabled` property within the `DropdownToggle` component to disable the expansion of the entire dropdown menu.

```ts file="./DropdownDisabled.tsx"
```

### With menu item descriptions

Assign a `description` property and respective value to each `DropdownItem` that you wish you offer more context to. This description will appear in the menu itself, under the dropdown item it corresponds to.

```ts file="./DropdownDescriptions.tsx"
```

### With images

Use the `icon` property to display an image in the `DropdownToggle`. Icons can be used alongside text, as shown in the following example.

```ts file="./DropdownImageAndText.tsx"
```

###  Toggle styling

You can adjust the styling of the `DropdownToggle` as needed. The following example uses  `toggleVariant="primary"` to apply primary button styling. 

```ts file="./DropdownPrimaryToggle.tsx"
```

### Plain with text toggle

The following example uses the `isText` and `isPlain`properties to plainly style the `Dropdown` menu.

```ts file="./DropdownPlainTextToggle.tsx"
```

### With kebab

You may use a kebab icon instead of a text label to condense the toggle size.

```ts file="./DropdownKebab.tsx"
```

### With badge

You may use a badge instead of a text label. A badge allows you to display the number of dropdown menu items.

```ts file="./DropdownBadge.tsx"
```

### Icon only

You may use an icon instead of a text label. Set `toggleIndicator={null}` to remove the dropdown toggle caret.

```ts file="./DropdownIconOnly.tsx"
```

### Right aligned menu

The following example demonstrates a dropdown menu that is right aligned, which may be useful depending on the placement of your dropdown toggle and menu.

```ts file="./DropdownPositionRight.tsx"
```

### Alignments on different breakpoints

The following example adjusts the alignment of the dropdown menu based on the size of the user's browser window.

```ts file="./DropdownAlignmentOnBreakpoints.tsx"
```

### Upwards directional menu

The following example changes the direction of the menu from the default of downwards to an upwards direction instead. This may be useful depending on the placement of your dropdown toggle and menu.

```ts file="./DropdownDirectionUp.tsx"
```

### Basic panel

You may attach a custom menu.

```ts file="./DropdownBasicPanel.tsx"
```

### Router link

Router links can be included as a `<DropdownItem>` using the `component` property.

```ts file="./DropdownRouterLink.tsx"
```

### Split button dropdown toggle

To combine an action button or other control with a dropdown menu, use a split buttonn. Use the `splitButtonItems` property to render the dropdown toggle as a split button.

Split buttons can utilize some of the same properties available to [button](/components/button) components, such as `isDisabled` to disable the button.

The following example shows a split button with a checkbox, which is primarily used for bulk select operations on large data sets. This example also includes a text label, which can be ommitted.

```ts file="./DropdownSplitButtonText.tsx"
```

### Split button and toggle variants

Use the `toggleVariant` and `splitButtonVariant` properties to adjust the styling of split button toggles. 

The following example uses `toggleVariant="primary"` and `splitButtonVariant="action"` to applying primary visual styling, and include an action.

```ts file="./DropdownSplitButtonActionPrimary.tsx"
```

### Split button checbox indeterminate state

You may set a split button checkbox to begin in an indeterminate state, which signals to users that a decision needs to be made regarding the checkbox.

```ts file="./DropdownSplitButtonIndeterminate.tsx"
```

### Using document parent element

Avoid passing in `document.body` when passing a value to the `menuAppendTo` prop on the Dropdown component, as it can cause accessibility issues. These issues can include, but are not limited to, being unable to enter the contents of the Dropdown options via assistive technologies (like keyboards or screen readers).

Instead append to `"parent"` to achieve the same result without sacrificing accessibility.

In this example, while, after making a selection, both variants retain focus on their respective Dropdown component, the options for the `document.body` variant cannot be navigated to via Voice Over.

```ts file="./DropdownAppendBodyVsParent.tsx"
```
