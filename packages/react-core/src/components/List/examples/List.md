---
id: List
section: components
cssPrefix: pf-c-list
propComponents: ['List', 'ListItem']
---

import BookOpen from '@patternfly/react-icons/dist/esm/icons/book-open-icon';
import Key from '@patternfly/react-icons/dist/esm/icons/key-icon';
import Desktop from '@patternfly/react-icons/dist/esm/icons/desktop-icon';

## Examples
### Basic
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

<List>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
  <ListItem>Third</ListItem>
</List>
```

### Inline
```js
import React from 'react';
import { List, ListItem, ListVariant } from '@patternfly/react-core';

<List variant={ListVariant.inline}>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
  <ListItem>Third</ListItem>
</List>
```

### Ordered
```js
import React from 'react';
import { List, ListItem, ListComponent, OrderType } from '@patternfly/react-core';

<List component={ListComponent.ol} type={OrderType.number}>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
  <ListItem>Third</ListItem>
</List>
```

### Plain
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

<List isPlain>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
  <ListItem>Third</ListItem>
</List>
```

### With horizontal rules
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

<List isPlain isBordered>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
  <ListItem>Third</ListItem>
</List>
```

### With icons
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';
import BookOpen from '@patternfly/react-icons/dist/esm/icons/book-open-icon';
import Key from '@patternfly/react-icons/dist/esm/icons/key-icon';
import Desktop from '@patternfly/react-icons/dist/esm/icons/desktop-icon';

<List isPlain>
  <ListItem icon={<BookOpen />}>First</ListItem>
  <ListItem icon={<Key />}>Second</ListItem>
  <ListItem icon={<Desktop />}>Third</ListItem>
</List>
```

### With large icons
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';
import BookOpen from '@patternfly/react-icons/dist/esm/icons/book-open-icon';
import Key from '@patternfly/react-icons/dist/esm/icons/key-icon';
import Desktop from '@patternfly/react-icons/dist/esm/icons/desktop-icon';

<List isPlain iconSize="large">
  <ListItem icon={<BookOpen />}>First</ListItem>
  <ListItem icon={<Key />}>Second</ListItem>
  <ListItem icon={<Desktop />}>Third</ListItem>
</List>
```
