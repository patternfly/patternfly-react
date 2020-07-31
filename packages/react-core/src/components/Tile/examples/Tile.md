---
id: Tile
section: components
cssPrefix: pf-c-tile
propComponents: ['Tile']
beta: true
---

import { Tile, Flex } from '@patternfly/react-core';
import { PlusIcon, BellIcon } from '@patternfly/react-icons';

## Examples

### Tile

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';

BasicTile = () => (
  <React.Fragment>
    <Tile title="Default" /> <Tile title="Selected" isSelected /> <Tile title="Disabled" isDisabled />
  </React.Fragment>
);
```

### Tile with subtext

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';

SubtextTile = () => (
  <React.Fragment>
    <Tile title="Default">Subtext goes here</Tile>{' '}
    <Tile title="Selected" isSelected>
      Subtext goes here
    </Tile>{' '}
    <Tile title="Disabled" isDisabled>
      Subtext goes here
    </Tile>
  </React.Fragment>
);
```

### Tile with icon

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';
import { PlusIcon } from '@patternfly/react-icons';

IconTile = () => (
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
);
```

### Stacked tile

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';
import { BellIcon } from '@patternfly/react-icons';

StackedTile = () => (
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
);
```

### Stacked tile with large icons

```js
import React from 'react';
import { Tile } from '@patternfly/react-core';
import { BellIcon } from '@patternfly/react-icons';

LargeStackedTile = () => (
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
);
```

### Tile with extra content

```js
import React from 'react';
import { Tile, Flex } from '@patternfly/react-core';
import { BellIcon } from '@patternfly/react-icons';

ExtraContentTile = () => (
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
);
```
