---
title: "Card"
cssPrefix: "pf-c-card"
---
## Simple Card
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

## Card with no Footer
```js
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

NoFooterCard = () =>  (
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>This card has no footer</CardBody>
  </Card>
);
```

## Card with no Header
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

## Card with only a Content Section
```js
import React from 'react';
import { Card, CardBody } from '@patternfly/react-core';

ContentOnlyCard = () => (
  <Card>
    <CardBody>Body</CardBody>
  </Card>
);
```