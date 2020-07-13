---
id: Level
cssPrefix: pf-l-level
section: layouts
propComponents: ['Level', 'LevelItem']
---

import './level.css';

## Examples
### Basic
```js
import { Level, LevelItem } from '@patternfly/react-core';

LevelBasicExample = () => (
  <Level>
    <LevelItem>Level Item</LevelItem>
    <LevelItem>Level Item</LevelItem>
    <LevelItem>Level Item</LevelItem>
  </Level>
);
```

### With gutters
```js
import { Level, LevelItem } from '@patternfly/react-core';

LevelWithGuttersExample = () => (
  <Level hasGutter>
    <LevelItem>Level Item</LevelItem>
    <LevelItem>Level Item</LevelItem>
    <LevelItem>Level Item</LevelItem>
  </Level>
);
```
