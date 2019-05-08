---
title: 'Level'
cssPrefix: 'pf-l-level'
section: 'layouts'
---

import { Level, LevelItem } from '@patternfly/react-core';
import './level.scss';

## Simple level layout
```js
import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

<Level>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
</Level>
```

## Level with gutters
```js
import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

<Level gutter="md">
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
</Level>
```
