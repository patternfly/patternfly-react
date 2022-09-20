---
id: Menu
section: components
cssPrefix: pf-c-menu
propComponents: ['Menu', 'MenuList', 'MenuItem', 'MenuItemAction', 'MenuContent', 'MenuInput']
ouia: true
---

import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';

## Examples

### Basic menus

A menu may contain multiple variations of `<MenuItem>` components. The following example shows a few different states of menu items, where they may:

- Use the `itemId` property to link to callbacks. In this example, the `onSelect` property logs information to the console when a menu item is selected. In practice, specific actions can be linked to `onSelect` callbacks.
- Use the `onClick` and `to` properties to direct users to other resources or webpages after selecting a menu item.
- Use the `isDisabled` property to disable a menu item. 

```ts file="MenuBasic.tsx"
```

### With icons

Use the `icon` property to add a familiar icon before a `<MenuItem>` to accelerate text label recognition.

```ts file="MenuWithIcons.tsx"
```

### With actions

Add a `<MenuItemAction>` to a `<MenuItem>` to trigger an action when that item is selected. 

```ts file="MenuWithActions.tsx"
```

### With links

Use the `to` property to add a link to a `<MenuItem>` that directs users to a new page when the item is selected. Use the `isExternalLink` property when linking to external resources. This will annotate a menu item link with an external link icon when they navigate to the link or hover over it.

```ts file="MenuWithLinks.tsx"
```

### With descriptions

Use the `description` property to add short descriptive text below any menu item that needs additional context. 

```ts file="MenuWithDescription.tsx"
```

### Item checkbox

Use the `hasCheck` property to add a checkbox to a `<MenuItem>`. Use the `isSelected` property to indicate when a `<MenuItem>` is selected.

```ts file="./MenuWithCheckbox.tsx" isBeta
```

### Menu footer

Add a `<MenuFooter>` that contains separate, but related actions at the bottom of a menu.

```ts file="MenuWithFooter.tsx"
```

### Separated items

Use a (divider)[/components/divider] to visually separate `<MenuContent>`. Use the `component` property to specify the type of divider component to use. 

```ts file="MenuWithSeparators.tsx"
```

### Titled groups of items

Add a `<MenuGroup>` to organize `<MenuContent>` and use the `label` property to title a group of menu items. Use the `labelHeadingLevel` property to assign a heading level to the menu group. 

```ts file="MenuWithTitledGroups.tsx"
```

### With favorites

The following menu example allows users to favorite menu items, an action that duplicates a menu item and places it in a separated group at the top of the menu. The `isFavorited` property identifies items that have been favorited by a user.

```ts file="MenuWithFavorites.tsx"
```

### Filtering with text input

A (text input)[components/text-input] component can be loaded within `<MenuInput>` to load a search input at the top of the menu that filters menu items as a user types.

```ts file="MenuFilteringWithTextInput.tsx"
```

### Option single select

The following example demonstrates an option select menu that persists a selected menu item. Use the `selected` property to label a selected item with a checkmark. A `<MenuItem>` may use the `isSelected` property to indicate that it is selected.

```ts file="MenuOptionSingleSelect.tsx"
```

### Option multi select

You may need to persist multiple selections that a user makes, as demonstrated below.

```ts file="MenuOptionMultiSelect.tsx"
```

### With drilldown

Use a drilldown menu to contain different levels of menu items. When a parent menu item (an item that has a submenu of children) is selected, the menu is replaced with the children items. A header displays the name of the parent, with the option to go back one level.

```ts file="./MenuWithDrilldown.tsx" isBeta
```

### Initially drilled in menu

To render an initially drilled-in menu, the `menuDrilledIn`, `drilldownPath`, and `activeMenu` states must be set to an initial state. The `menuHeights` state must also be set, defining the height of the root menu. The `setHeight` function passed into the `onGetMenuHeight` property must also account for updating heights, other than the root menu, as menus drill in and out of view.

```ts file="./MenuWithDrilldownInitialState.tsx" isBeta
```

### With drilldown - submenu functions

```ts file="./MenuWithDrilldownSubmenuFunctions.tsx" isBeta
```

### With drilldown breadcrumbs

Use breadcrumbs when a drilldown menu has more than 2 levels to offer users better navigation.

```ts file="MenuWithDrilldownBreadcrumbs.tsx" isBeta
```

### Scrollable menus

Use the `isScrollable` property to make a long `<Menu>` scrollable and visually condensed.

```ts file="MenuScrollable.tsx"
```

### Scrollable menu with custom height

Adjust the visual size of a scrollable menu by using the `menuHeight` property within `<MenuContent>`. This example adjusts the height to 200px.

```ts file="MenuScrollableCustomMenuHeight.tsx"
```

### With view more

You may add a "view more" link at the bottom of a menu, which allows users to expand long menus. In this example, 3 additional menu items are revealed each time the "view more" option is selected. Once all items are visible, the "view more" link disappears.

```ts file="MenuWithViewMore.tsx"
```
