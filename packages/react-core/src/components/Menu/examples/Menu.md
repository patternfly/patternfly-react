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

### Basic

```ts file="MenuBasic.tsx"
```

### Danger menu item

```ts file="MenuDangerMenuItem.tsx"
```

### With icons

```ts file="MenuWithIcons.tsx"
```

### With checkbox

```ts file="./MenuWithCheckbox.tsx"
```

### Filtering with text input

```ts file="MenuFilteringWithTextInput.tsx"
```

### With links

```ts file="MenuWithLinks.tsx"
```

### With separator(s)

```ts file="MenuWithSeparators.tsx"
```

### With titled groups

```ts file="MenuWithTitledGroups.tsx"
```

### With description

```ts file="MenuWithDescription.tsx"
```

### With actions

```ts file="MenuWithActions.tsx"
```

### With favorites

```ts file="MenuWithFavorites.tsx"
```

### Option single select

```ts file="MenuOptionSingleSelect.tsx"
```

### Option multi select

```ts file="MenuOptionMultiSelect.tsx"
```

### With drilldown

```ts file="./MenuWithDrilldown.tsx" isBeta
```

### With drilldown - initial drill in state

To render an initially drilled in menu, the `menuDrilledIn`, `drilldownPath`, and `activeMenu` states must be set to an initial state. The `menuHeights` state must also be set, defining the height of the root menu. The `setHeight` function passed into the `onGetMenuHeight` property must also account for updating heights, other than the root menu, as menus drill in and out of view.

```ts file="./MenuWithDrilldownInitialState.tsx" isBeta
```

### With drilldown - submenu functions

```ts file="./MenuWithDrilldownSubmenuFunctions.tsx" isBeta
```

### With drilldown breadcrumbs

```ts file="MenuWithDrilldownBreadcrumbs.tsx" isBeta
```

### Scrollable

```ts file="MenuScrollable.tsx"
```

### Scrollable with custom menu height

```ts file="MenuScrollableCustomMenuHeight.tsx"
```

### With footer

```ts file="MenuWithFooter.tsx"
```

### With view more

```ts file="MenuWithViewMore.tsx"
```
