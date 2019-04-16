---
title: 'Level'
cssPrefix: 'pf-l-level'
section: 'layouts'
---

import { Level, LevelItem } from '@patternfly/react-core';

## Simple Level Layout
```js
import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

<Level>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
</Level>
```

## Level With Gutters
```js
import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

<Level gutter="md">
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
  <LevelItem>Level Item</LevelItem>
</Level>
```
