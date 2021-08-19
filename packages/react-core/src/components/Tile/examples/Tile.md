---
id: Tile
section: components
cssPrefix: pf-c-tile
propComponents: ['Tile']
beta: true
---

import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';


## Examples

Keyboard interaction patterns and a11y is implemented in the Tile demos, located in the [Demo section](/documentation/react/demos/tiledemo).

### Basic

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';

<React.Fragment>
  <Tile title="Default" />
  <Tile title="Selected" isSelected />
  <Tile title="Disabled" isDisabled />
</React.Fragment>
```


### With subtext

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';

<React.Fragment>
  <Tile title="Default">Subtext goes here</Tile>{' '}
  <Tile title="Selected" isSelected>
    Subtext goes here
  </Tile>{' '}
  <Tile title="Disabled" isDisabled>
    Subtext goes here
  </Tile>
</React.Fragment>
```

### With icon

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

<React.Fragment>
  <Tile title="Default" icon={<PlusIcon />}>
    Subtext goes here
  </Tile>{' '}
  <Tile title="Selected" icon={<PlusIcon />} isSelected>
    Subtext goes here
  </Tile>{' '}
  <Tile title="Disabled" icon={<PlusIcon />} isDisabled>
    Subtext goes here
  </Tile>
</React.Fragment>
```

### Stacked

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

<React.Fragment>
  <Tile title="Default" icon={<BellIcon />} isStacked>
    Subtext goes here
  </Tile>{' '}
  <Tile title="Selected" icon={<BellIcon />} isStacked isSelected>
    Subtext goes here
  </Tile>{' '}
  <Tile title="Disabled" icon={<BellIcon />} isStacked isDisabled>
    Subtext goes here
  </Tile>
</React.Fragment>
```

### Stacked with large icons

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

<React.Fragment>
  <Tile title="Default" icon={<BellIcon />} isStacked isDisplayLarge>
    Subtext goes here
  </Tile>{' '}
  <Tile title="Selected" icon={<BellIcon />} isStacked isDisplayLarge isSelected>
    Subtext goes here
  </Tile>{' '}
  <Tile title="Disabled" icon={<BellIcon />} isStacked isDisplayLarge isDisabled>
    Subtext goes here
  </Tile>
</React.Fragment>
```

### With extra content

```js
import React from 'react';
import { Tile, Flex } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

<Flex>
  <Flex flex={{ default: 'flex_1' }}>
    <Tile title="Default" icon={<BellIcon />} isStacked>
      This is really really long subtext that goes on for so long that it has to wrap to the next line. This is really
      really long subtext that goes on for so long that it has to wrap to the next line.
    </Tile>
  </Flex>
  <Flex flex={{ default: 'flex_1' }}>
    <Tile title="Selected" icon={<BellIcon />} isStacked>
      This is really really long subtext that goes on for so long that it has to wrap to the next line.
    </Tile>
  </Flex>
  <Flex flex={{ default: 'flex_1' }}>
    <Tile title="Disabled" icon={<BellIcon />} isStacked>
      Subtext goes here
    </Tile>
  </Flex>
</Flex>
```
