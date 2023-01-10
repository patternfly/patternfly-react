---
id: Dropdown
section: components
cssPrefix: pf-c-dropdown
propComponents: ['Dropdown', DropdownGroup, 'DropdownItem', 'DropdownList']
beta: true
---

import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

## Examples

### Basic dropdowns
Basic dropdowns present users with a menu of items upon clicking a dropdown toggle. 

A `<Dropdown>` uses a [menu toggle](/components/menu-toggle), which is passed to the `toggle` property, as well as a `<DropdownList>` with multiple `<DropdownItem>` components. To allow a dropdown to change the open state of the menu, pass the `isOpen` property into the `onOpenChange` callback. 

The following example shows a few different states of dropdown items. As shown in this example, dropdown items may: 
- Use the `isDisabled` property to disable an item.
- Use the `onClick` property to trigger a callback for an action.

This example also uses a `<Divider>` which passes in `key=”separator”` to split the menu into 2 sections with a horizontal line.

```ts file="./DropdownBasic.tsx"
```

### With kebab toggle

To style a dropdown menu's toggle with a kebab icon, pass a "plain" `<MenuToggle>` to the `toggle` property. When there isn't enough space for a labeled button, a kebab icon can be used to toggle the dropdown menu open or closed.

```ts file="./DropdownWithKebabToggle.tsx"
```

### With groups of items
To group sets of related dropdown items together, use a `<DropdownGroup>`. When more than 1 `<DropdownGroup>` is created in a menu, use the `label` and `labelHeadingLevel` properties to assign a name and heading level to each group. 

```ts file="./DropdownWithGroups.tsx"
```

### With item descriptions

To provide users with more context about a `<DropdownItem>`, pass a short message to `description` property. As shown in the example below, an item's description will appear below its label. 

```ts file="./DropdownWithDescriptions.tsx"
```