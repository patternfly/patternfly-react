---
id: Menu toggle
section: components
cssPrefix: pf-c-menu-toggle
propComponents: ['MenuToggle']
beta: true
---

import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

## Examples

### Collapsed

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<MenuToggle>Collapsed</MenuToggle>

```

### Expanded

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<MenuToggle isExpanded>Expanded</MenuToggle>;

```

### Disabled

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<MenuToggle isDisabled>Disabled</MenuToggle>

```

### Icon

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

<MenuToggle icon={<CogIcon />}>Icon</MenuToggle>;

```

### Count

```ts
import React from 'react';
import { MenuToggle, Badge } from '@patternfly/react-core';

<MenuToggle badge={<Badge>4 selected</Badge>}>Count</MenuToggle>

```

### Primary

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

<React.Fragment>
  <MenuToggle variant="primary">Collapsed</MenuToggle>{' '}
  <MenuToggle variant="primary" icon={<CogIcon />}>
    Icon
  </MenuToggle>{' '}
  <MenuToggle variant="primary" isExpanded>
    Expanded
  </MenuToggle>{' '}
  <MenuToggle variant="primary" isDisabled>
    Disabled
  </MenuToggle>
</React.Fragment>

```

### Plain

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

<React.Fragment>
  <MenuToggle variant="plain" aria-label="plain kebab">
    <EllipsisVIcon />
  </MenuToggle>
  <MenuToggle variant="plain" isExpanded aria-label="plain expanded kebab">
    <EllipsisVIcon />
  </MenuToggle>
  <MenuToggle variant="plain" isDisabled aria-label="disabled kebab">
    <EllipsisVIcon />
  </MenuToggle>
</React.Fragment>
```
### Plain with text

```ts
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

<React.Fragment>
  <MenuToggle variant="plainText" isDisabled aria-label="Disabled plain menu toggle">
    Disabled
  </MenuToggle>
  &nbsp;
  <MenuToggle variant="plainText" aria-label="Plain menu toggle">
    Custom text
  </MenuToggle>
  <MenuToggle variant="plainText" isExpanded aria-label="Expanded plain menu toggle">
    Custom text (expanded)
  </MenuToggle>
</React.Fragment>
```
