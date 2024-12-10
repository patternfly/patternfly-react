---
id: Custom menus
section: components
subsection: menus
---

import { Link } from '@reach/router';

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
import brandImg from '../assets/PF-IconLogo.svg';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import avatarImg from '../assets/avatarImg.svg';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import text from '@patternfly/react-styles/css/utilities/Text/text';

## Examples

Custom menus can be constructed using a composable approach by combining the [menu](/components/menus/menu) and [menu toggle](/components/menus/menu-toggle) components in unique ways. To handle basic keyboard inputs, [dropdown](/components/menus/dropdown), [select](/components/menus/select), or [`<MenuContainer>`](/components/menus/menu#menucontainer) components may be used in combination with menu components.

Additionally, menu components may be connected to each other manually through our undocumented internal [popper.js](https://popper.js.org/) wrapper component called Popper.

### With actions

```ts file="./examples/ActionsMenuDemo.tsx"

```

### With favorites

```ts file="./examples/FavoritesDemo.tsx"

```

### With drilldown

```ts file="./examples/DrilldownMenuDemo.tsx"

```

### With inline search filter

```ts file="./examples/InlineSearchFilterMenuDemo.tsx"

```

### Tree view menu

When rendering a menu-like element that does not contain `<MenuItem>` components, [panel](/components/panel) allows more flexible control and customization.

```ts file="./examples/TreeViewMenuDemo.tsx"

```

### Flyout menu

The flyout will automatically position to the left or top if it would otherwise go outside the window. The menu must be placed in a container outside the main content like Popper, [popover](/components/popover) or [tooltip](/components/tooltip), since it may go over the side nav.

```ts file="./examples/FlyoutDemo.tsx"

```

### Application launcher menu

```ts file="./examples/ApplicationLauncherDemo.tsx"

```

### Context selector menu

```ts file="./examples/ContextSelectorDemo.tsx"

```

### Date select menu

```ts file="./examples/DateSelectDemo.tsx"

```
