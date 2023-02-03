---
id: Menu
section: components
cssPrefix: pf-c-menu
propComponents: ['Menu', 'MenuList', 'MenuItem', 'MenuItemAction', 'MenuContent', 'MenuInput', 'MenuGroup']
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
- Use the `to` property to direct users to other resources or webpages after selecting a menu item, and the `onClick` property to pass in a callback for specific menu items.
- Use the `isDisabled` property to disable a menu item.
- Use the `isPlain` property to remove the outer box shadow and style the menu plainly instead.

```ts file="MenuBasic.tsx"
```

### Danger menu item

To indicate that a `<MenuItem>` is connected to a potentially destructive action, use the `isDanger` property. The "Delete" item in the following example demonstrates how danger items look.

```ts file="MenuDangerMenuItem.tsx"
```

### With icons

Use the `icon` property to add a familiar icon before a `<MenuItem>` to accelerate text label recognition.

```ts file="MenuWithIcons.tsx"
```

### With actions

To connect a menu item to an action icon, add a `<MenuItemAction>` to a `<MenuItem>`, and use the `icon` property to load an easily recognizable icon.

To trigger an action when any menu action icon is selected, pass a callback to the `onActionClick` property of the `<Menu>`. The following example logs to the console any time any action icon is selected.

To trigger an action when a specific item's action icon is selected, pass in the `onClick` property to that `<MenuItemAction>`. The following example logs "clicked on code icon" to the console when the "code" icon is selected.

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

Use a [divider](/components/divider) to visually separate `<MenuContent>`. Use the `component` property to specify the type of divider component to use.

```ts file="MenuWithSeparators.tsx"
```

### Titled groups of items

Add a `<MenuGroup>` to organize `<MenuContent>` and use the `label` property to title a group of menu items. Use the `labelHeadingLevel` property to assign a heading level to the menu group label.

```ts file="MenuWithTitledGroups.tsx"
```

### With favorites

The following menu example allows users to favorite menu items, an action that duplicates a menu item and places it in a separate group at the top of the menu. The `isFavorited` property identifies items that a user has favorited.

```ts file="MenuWithFavorites.tsx"
```

### Filtering with search input

A [search input](/components/search-input) component can be placed within `<MenuInput>` to render a search input at the top of the menu. In the following example, the `onChange` property of the text input is passed a callback that filters menu items as a user types.

```ts file="MenuFilteringWithSearchInput.tsx"
```

### Option single select menu

The following example demonstrates a single option select menu that persists a selected menu item. Use the `selected` property on the `<Menu>` to label a selected item with a checkmark. You can also use the `isSelected` property on a `<MenuItem>` to indicate that it is selected.

You must also use the `role` property on the `<Menu>` with a value of `"listbox"` when using a non-checkbox select menu.

```ts file="MenuOptionSingleSelect.tsx"
```

### Option multi select menu

To persist multiple selections that a user makes, use a multiple option select menu. To enable multi select, pass an array containing each selected `itemId` to the `selected` property on the `<Menu>`, and pass the `isAriaMultiselectable` property on the `<MenuList>`.

Similar to a single select menu, you must also pass `role="listbox"` to the `<Menu>`.

```ts file="MenuOptionMultiSelect.tsx"
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

If you want to initially render only a certain number of menu items within a large menu, you can add a "view more" menu item with a callback passed into its `onClick` property that will render additional menu items.

In this example, 3 additional menu items are revealed each time the "view more" option is selected, with a loading icon simulating a network call to fetch more items. After all items are visible, the "view more" link disappears.

```ts file="MenuWithViewMore.tsx"
```

### With drilldown

Use a drilldown menu to contain different levels of menu items. When a parent menu item (an item that has a submenu of children) is selected, the menu is replaced with the children items.

- To indicate that a menu contains a drilldown, use the `containsDrilldown` property.
- To indicate the path of drilled-in menu item ids, use the `drilldownItemPath` property.
- Pass in an array of drilled-in menus with the `drilledInMenus` property.
- Use the `onDrillIn` and `onDrillOut` properties to contain callbacks for drilling into and drilling out of a submenu, respectively.
- To account for updated heights as menus drill in and out of use, use the `onGetMenuHeight` property. When starting from a drilled-in state, the `onGetMenuHeight` property must define the height of the root menu.

```ts file="./MenuWithDrilldown.tsx" isBeta
```

### Initially drilled-in menu

To render an initially drilled-in menu, the `drilldownItemPath`, `drilledInMenus`, and `activeMenu` properties must be set to default values.

```ts file="./MenuWithDrilldownInitialState.tsx" isBeta
```

### With drilldown - submenu functions

For added flexibility with large menus, you may create a menu by passing a function to `drilldownMenu`. This approach allows you to create menu items dynamically, rather than creating everything up front.

```ts file="./MenuWithDrilldownSubmenuFunctions.tsx" isBeta
```

### With drilldown breadcrumbs

Use [breadcrumbs](/components/breadcrumb) when a drilldown menu has more than 2 levels to offer users better navigation.

To control the height of a menu, use the `maxMenuHeight` property. Selecting the "Set max menu height" checkbox in the following example sets the menu height to "100px" and makes the menu scrollable.

```ts file="MenuWithDrilldownBreadcrumbs.tsx" isBeta
```

### With drilldown and inline filter

```ts file="MenuFilterDrilldown.tsx"
```
