---
title: 'Level'
cssPrefix: 'pf-l-level'
section: 'layouts'
propComponents: ['Level', 'LevelItem']
typescript: true
---

import { Level, LevelItem } from '@patternfly/react-core';
import './level.css';

## Examples
```js title=Basic
import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

<Level>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
</Level>
```

```js title=With-gutters
import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

<Level gutter="md">
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
</Level>
```
