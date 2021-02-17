---
id: Spinner
section: components
cssPrefix: pf-c-spinner
propComponents: ['Spinner']
---

## Examples
### Basic
```js
import React from 'react';
import { Spinner } from '@patternfly/react-core';

<Spinner isSVG />
```

### Size variations
```js
import React from 'react';
import { Spinner } from '@patternfly/react-core';

<React.Fragment>
  <Spinner isSVG size="sm"/>
  <Spinner isSVG size="md"/>
  <Spinner isSVG size="lg"/>
  <Spinner isSVG size="xl"/>
</React.Fragment>
```

### Custom size
```js
import React from 'react';
import { Spinner } from '@patternfly/react-core';

<Spinner isSVG diameter="80px" />
```

