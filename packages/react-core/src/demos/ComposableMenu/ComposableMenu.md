---
id: Composable menu
section: demos
---

import { Link } from '@reach/router';

import { Label, LabelGroup } from '@patternfly/react-core';

import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import pfIcon from './examples/pf-logo-small.svg';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import avatarImg from './examples/avatarImg.svg';

## Demos

This page contains demo(s) that utilize multiple Patternfly components to showcase various use cases not covered under a single component, as well as how components may be used together to achieve a specific purpose in application-style content.

Composable menus currently require consumer keyboard handling and use of our undocumented [popper.js](https://popper.js.org/) wrapper component called Popper. We understand this is inconvientent boilerplate and these examples will be updated to use [Dropdown](/components/dropdown) in a future release.

### Composable simple dropdown

This demo showcases a simple dropdown, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableSimpleDropdown.tsx"
```

### Composable actions menu

This demo showcases a dropdown action menu, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableActionsMenu.tsx"
```

### Composable simple select

This demo showcases a simple single select, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableSimpleSelect.tsx"
```

### Composable drilldown menu

This demo showcases a drilldown menu, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Divider](/components/divider)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts isBeta file="./examples/ComposableDrilldownMenu.tsx"
```

### Composable tree view menu

This demo showcases a menu containing multiple tree views. When rendering a menu-like element that does not contain MenuItem components, [Panel](/components/panel) allows more flexible control and customization.

It contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Panel](/components/panel)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Title](/components/title)</Label>
<Label variant="outline">[TreeView](/components/tree-view)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableTreeViewMenu.tsx"
```

### Composable flyout

This demo showcases a menu containing multiple flyouts.

The flyout will automatically position to the left or top if it would otherwise go outside the window. The menu must be placed in a container outside the main content like Popper, [Popover](/components/popover) or [Tooltip](/components/tooltip) since it may go over the side nav.

It contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts isBeta file="./examples/ComposableFlyout.tsx"
```

### Composable application launcher

This demo showcases an application launcher, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Tooltip](/components/tooltip)</Label>
<Label variant="outline">[Divider](/components/divider)</Label>
<Label variant="outline">[TextInput](/components/text-input)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableApplicationLauncher.tsx"
```

### Composable context selector

This demo showcases a context selector, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Divider](/components/divider)</Label>
<Label variant="outline">[TextInput](/components/text-input)</Label>
<Label variant="outline">[InputGroup](/components/input-group)</Label>
<Label variant="outline">[Button](/components/button)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableContextSelector.tsx"
```

### Composable options menu variants

This demo showcases an options menu, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Divider](/components/divider)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableOptionsMenuVariants.tsx"
```

### Composable dropdown variants

This demo showcases a several dropdown variants, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Divider](/components/divider)</Label>
<Label variant="outline">[ToggleGroup](/components/toggle-group)</Label>
<Label variant="outline">[Avatar](/components/avatar)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableDropdwnVariants.tsx"
```

### Composable date select

This demo showcases a date select, and contains the following components:

<LabelGroup categoryName="Components">
<Label variant="outline">[Menu](/components/menu)</Label>
<Label variant="outline">[MenuToggle](/components/menu-toggle)</Label>
<Label variant="outline">[Popper (not exported yet)](/components/popper)</Label>
</LabelGroup>

```ts file="./examples/ComposableDateSelect.tsx"
```
