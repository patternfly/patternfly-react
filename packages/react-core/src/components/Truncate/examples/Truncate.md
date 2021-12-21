---
id: Truncate
section: components
propComponents: [Truncate]
beta: true
---

## Examples

### End
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
<div style={{ width: '226px', resize: 'horizontal', overflow: 'auto' }}>
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    position={'end'}
  />
</div>
```

### Middle
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
<div style={{  width: '226px', resize: 'horizontal', overflow: 'auto' }}>
  <Truncate
    content={'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}
    position={'middle'}
  />
</div>
```

### Start
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
<div style={{  width: '226px', resize: 'horizontal', overflow: 'auto' }}>
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    position={'start'}
  />
</div>
```