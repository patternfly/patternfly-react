---
title: 'Card'
cssPrefix: 'pf-c-card'
---

import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

## Simple card
```js
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

SimpleCard = () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
```

## Card with no footer
```js
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

NoFooterCard = () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>This card has no footer</CardBody>
  </Card>
);
```

## Card with no header
```js
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

NoHeaderCard = () => (
  <Card>
    <CardBody>This card has no header</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
```

## Card with only a content section
```js
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

ContentOnlyCard = () => (
  <Card>
    <CardBody>Body</CardBody>
  </Card>
);
```

## Card with multiple body sections
```js
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

MultipleBodyCard = () => (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>Body</CardBody>
    <CardBody>Body</CardBody>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
```

## Card with only one body that fills
```js
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

NoFillBodyCard = () => (
  <Card style={{ minHeight: '30em' }}>
    <CardHeader>Header</CardHeader>
    <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
    <CardBody isFilled={false}>Body pf-m-no-fill</CardBody>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
```

## Card hover example
```js
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

HoverableCard = () => (
  <Card isHoverable={true}>
    <CardHeader>Header</CardHeader>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);
```
