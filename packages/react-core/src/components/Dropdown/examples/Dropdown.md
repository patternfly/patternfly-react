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

### Basic

Basic dropdowns present all selectable items in a menu upon clicking within the dropdown box. The `isOpen` property is used to flag a menu as opened. 

All of the items in a dropdown list are created using the `DropdownItem` component. The following example shows a few different states of dropdown items. For each item, you may: 
- Use the `tooltip` property to enable tooltip support. 
- Use the `isDisabled` property to disable certain menu items.
- Use the `isAriaDisabled` property to 

This example also uses a `DropdownSeparator` to add a horizontal line to separate sections of the menu. 

```ts file='./DropdownBasic.tsx'
```

### With initial selection

Use the `autoFocus` property to indicate a dropdown item that is pre-selected upon clicking the dropdown box. `autoFocus` cannot be applied to disabled dropdown items.

```ts file="./DropdownInitialSelection.tsx"
```

### With groups

Use the `DropdownGroup` component to group sets of dropdown items together. This allows you to group related items together to help contextualize the options. Use the `isGrouped` property on the `Dropdown` component to indicate that the dropdown contains grouped items.

```ts file="./DropdownGroups.tsx"
```

### Disabled

Use the `isDisabled` property within the `DropdownToggle` component to disable the expansion of the entire dropdown menu.

```ts file="./DropdownDisabled.tsx"
```

### Dropdown with descriptions

Assign a `description` property and respective value to each `DropdownItem` that you wish you offer more context to. This description will appear in the menu itself, under the dropdown item it corresponds to.

```ts file="./DropdownDescriptions.tsx"
```

### Dropdown with image and text

Use the `icon` property to display an image in the `DropdownToggle`. Icons can be used alongside text, as shown in the following example.

```ts file="./DropdownImageAndText.tsx"
```

### Primary toggle

You can adjust the styling of the `DropdownToggle` as needed. The following example uses the `isPrimary` to apply primary button styling. This method is deprecated and we now suggest using `toggleVariant="primary"` to acheive the same results.

```ts file="./DropdownPrimaryToggle.tsx"
```

### Secondary toggle

This example uses `toggleVariant="secondary"` to apply secondary button styling to the `DropdownToggle`.

```ts file="./DropdownSecondaryToggle.tsx"
```

### Plain with text toggle

The following example uses the `isText` and `isPlain`properties to plainly style the `Dropdown`.

```ts file="./DropdownPlainTextToggle.tsx"
```

### Position right

The following example demonstrates a dropdown menu that is right aligned, which may be useful depending on the placement of your dropdown toggle and menu.

```ts file="./DropdownPositionRight.tsx"
```

### Alignments on different breakpoints

The following example adjusts the alignment of the dropdown menu based on the size of the user's browser window.

```ts file="./DropdownAlignmentOnBreakpoints.tsx"
```

### Direction up

The following example changes the direction of the menu from the default of downwards to an upwards direction instead. This may be useful depending on the placement of your dropdown toggle and menu.

```ts file="./DropdownDirectionUp.tsx"
```

### With kebab

You may use a kebab icon instead of a text label.

```ts file="./DropdownKebab.tsx"
```

### With badge

You may use a badge instead of a text label. A badge allows you to display the number of dropdown menu items.

```ts file="./DropdownBadge.tsx"
```

### Icon only

You may use an icon instead of a text label.

```ts file="./DropdownIconOnly.tsx"
```

### Split button

You may use a split button checkbox instead of a text label.

```ts file="./DropdownSplitButton.tsx"
```

### Split button (with text)

A split button checkbox may be used in combination with a text label.

```ts file="./DropdownSplitButtonText.tsx"
```

### Split button (indeterminate state)



```ts file="./DropdownSplitButtonIndeterminate.tsx"
```

### Split button (disabled)

```ts file="./DropdownSplitButtonDisabled.tsx"
```

### Split button action

```ts file="./DropdownSplitButtonAction.tsx"
```

### Split button primary action

```ts file="./DropdownSplitButtonActionPrimary.tsx"
```

### Split button secondary action

```ts file="./DropdownSplitButtonActionSecondary.tsx"
```

### Basic panel

```ts file="./DropdownBasicPanel.tsx"
```

### Router link

```ts file="./DropdownRouterLink.tsx"
```

### Appending document body vs parent

Avoid passing in `document.body` when passing a value to the `menuAppendTo` prop on the Dropdown component, as it can cause accessibility issues. These issues can include, but are not limited to, being unable to enter the contents of the Dropdown options via assistive technologies (like keyboards or screen readers).

Instead append to `"parent"` to achieve the same result without sacrificing accessibility.

In this example, while, after making a selection, both variants retain focus on their respective Dropdown component, the options for the `document.body` variant cannot be navigated to via Voice Over.

```ts file="./DropdownAppendBodyVsParent.tsx"
```
