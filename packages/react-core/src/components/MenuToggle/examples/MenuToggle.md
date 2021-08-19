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

```js
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

class MenuToggleCollapsed extends React.Component {
  render() {
    return <MenuToggle>Collapsed</MenuToggle>;
  }
}
```

### Expanded

```js
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

class MenuToggleCollapsed extends React.Component {
  render() {
    return <MenuToggle isExpanded>Expanded</MenuToggle>;
  }
}
```

### Disabled

```js
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

class MenuToggleCollapsed extends React.Component {
  render() {
    return <MenuToggle isDisabled>Disabled</MenuToggle>;
  }
}
```

### Icon

```js
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

class MenuToggleCollapsed extends React.Component {
  render() {
    return <MenuToggle icon={<CogIcon />}>Icon</MenuToggle>;
  }
}
```

### Count

```js
import React from 'react';
import { MenuToggle, Badge } from '@patternfly/react-core';

class MenuToggleCollapsed extends React.Component {
  render() {
    return <MenuToggle badge={<Badge>4 selected</Badge>}>Count</MenuToggle>;
  }
}
```

### Primary

```js
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

class MenuToggleCollapsed extends React.Component {
  render() {
    return (
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
    );
  }
}
```

### Plain

```js
import React from 'react';
import { MenuToggle } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

class MenuToggleCollapsed extends React.Component {
  render() {
    return (
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
    );
  }
}
```
