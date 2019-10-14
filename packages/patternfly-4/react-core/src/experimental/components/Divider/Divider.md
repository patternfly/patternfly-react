---
title: 'Divider'
cssPrefix: 'pf-c-divider'
typescript: true 
propComponents: ['Divider']
section: 'experimental'
stage: 'early'
---
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

## Divider using hr (default)
```js
import React from 'react';
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

DividerHr = () => (
  <Divider/>
);
```

## Divider using li
```js
import React from 'react';
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

DividerLi = () => (
  <ul>
    <li>List item one</li>
    <Divider component="li"/>
    <li>List item two</li>
  </ul>
);
```

## Divider using div
```js
import React from 'react';
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

DividerDiv = () => (
  <Divider component="div"/>
);
```
