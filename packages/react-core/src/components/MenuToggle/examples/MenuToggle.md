---
id: Menu toggle
section: components
cssPrefix: pf-c-menu-toggle
propComponents: ['MenuToggle']
beta: true
---

import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';

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
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';

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
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';

class MenuToggleCollapsed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MenuToggle isPrimary>Collapsed</MenuToggle>{' '}
        <MenuToggle isPrimary icon={<CogIcon />}>
          Icon
        </MenuToggle>{' '}
        <MenuToggle isPrimary isExpanded>
          Expanded
        </MenuToggle>{' '}
        <MenuToggle isPrimary isDisabled>
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
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';

class MenuToggleCollapsed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MenuToggle isPlain aria-label="plain kebab">
          <EllipsisVIcon />
        </MenuToggle>
        <MenuToggle isPlain isExpanded aria-label="plain expanded kebab">
          <EllipsisVIcon />
        </MenuToggle>
        <MenuToggle isPlain isDisabled aria-label="disabled kebab">
          <EllipsisVIcon />
        </MenuToggle>
      </React.Fragment>
    );
  }
}
```
