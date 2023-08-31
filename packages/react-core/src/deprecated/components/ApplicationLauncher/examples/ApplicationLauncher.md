---
id: Application launcher
section: components
subsection: menus
cssPrefix: pf-v5-c-app-launcher
propComponents: ['ApplicationLauncher', 'ApplicationLauncherItem', 'ApplicationLauncherContent']
ouia: true
deprecated: true
---

import { DropdownDirection, DropdownPosition } from '@patternfly/react-core/deprecated';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import { Link } from '@reach/router';
import pfLogoSm from '@patternfly/react-core/src/demos/assets/pf-logo-small.svg';

Note: Application launcher is built on dropdown, for extended API go to [dropdown](/components/menus/dropdown) documentation.
To add a tooltip, use the `tooltip` prop and optionally add more tooltip props by using `tooltipProps`. For more tooltip information go to [tooltip](/components/tooltip).

## Examples

### Basic

```ts file="./ApplicationLauncherBasic.tsx"

```

### Router link

```ts file="./ApplicationLauncherRouterLink.tsx"

```

### Disabled

```ts file="./ApplicationLauncherDisabled.tsx"

```

### Aligned right

```ts file="./ApplicationLauncherAlignRight.tsx"

```

### Aligned top

```ts file="./ApplicationLauncherAlignTop.tsx"

```

### With tooltip

```ts file="./ApplicationLauncherTooltip.tsx"

```

### With sections and icons

```ts file="./ApplicationLauncherSectionsAndIcons.tsx"

```

### With favorites and search

```ts file="./ApplicationLauncherFavoritesAndSearch.tsx"

```

### With custom icon

```ts file="./ApplicationLauncherCustomIcon.tsx"

```

### Basic with menu appended to document body

```ts file="./ApplicationLauncherDocumentBody.tsx"

```
