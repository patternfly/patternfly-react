---
id: Navigation
section: components
cssPrefix: pf-v6-c-nav
propComponents: ['Nav', 'NavList', 'NavGroup', 'NavItem', 'NavItemSeparator', 'NavExpandable']
ouia: true
---

import './nav.css';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import UserIcon from '@patternfly/react-icons/dist/esm/icons/user-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import CloudIcon from '@patternfly/react-icons/dist/esm/icons/cloud-icon';
import LinkIcon from '@patternfly/react-icons/dist/esm/icons/link-icon';

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

### With item icons

```ts file="./NavIcons.tsx"

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
