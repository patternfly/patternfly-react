---
id: Navigation
section: components
cssPrefix: pf-v6-c-nav
propComponents: ['Nav', 'NavList', 'NavGroup', 'NavItem', 'NavItemSeparator', 'NavExpandable']
ouia: true
---

import { useState } from 'react';
import './nav.css';
import RhMicronsCaretRightIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-caret-right-icon';
import RhUiCubesIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-cubes-icon';
import RhUiFolderIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-folder-icon';
import RhUiFolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-folder-open-icon';
import RhUiCloudIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-cloud-icon';
import RhUiLinkIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-link-icon';
import RhUiCodeIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-code-icon';

## Examples

### Default

```ts file="./NavDefault.tsx"

```

### Grouped

The following example shows two navigation groups, each with a `title` prop passed into the nav group component. To keep nav groups accessible an `aria-label` must be passed in if the `title` prop is not passed in.

```ts file="./NavGrouped.tsx"

```

### Expandable

```ts file="./NavExpandable.tsx"

```

### Expandable third level

```ts file="./NavExpandableThirdLevel.tsx"

```

### Mixed

```ts file="./NavMixed.tsx"

```

### Horizontal navigation

```ts file="./NavHorizontalNav.tsx"

```

### Horizontal subnav

```ts file="./NavHorizontalSubNav.tsx"

```

### Flyout

A flyout should be a `Menu` component. Press `space` or `right arrow` to open a flyout using the keyboard, use the arrow keys to navigate between flyout items, and press `escape` or `left arrow` to close a flyout.

```ts file="./NavFlyout.tsx"

```

### Drilldown

```ts file="./NavDrilldown.tsx"

```

### With icons

```ts file="./NavIcons.tsx"

```

### Docked

The docked variant of `Navigation` displays only icons passed to child `NavItems` or `NavExpandable`. Text becomes visible when `isDockTextExpanded` or `isDockExpandableExpanded` are applied to an outer page or compass dock.

`NavExpandable` items should include the `hasExpandableIcon` prop to indicate their expandable nature while in the collapsed state of the docked nav as the caret will not be rendered.

See the [docked nav demo](/components/navigation/react-demos#docked-nav) for a fully functional example.

```ts file="./NavDocked.tsx"

```

## Types

### NavSelectClickHandler

The NavItem `onClick` prop accepts the `NavSelectClickHandler` type, which is made up of the following argument and return types:

```noLive
(
  event: React.FormEvent<HTMLInputElement>,
  itemId: number | string,
  groupId: number | string,
  to: string
) => void;
```
