---
id: Truncate
section: components
cssPrefix: pf-v6-c-truncate
propComponents: [Truncate]
---

import './TruncateExamples.css';

## Examples

### Default
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';

<div className="truncate-example-resize">
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
  />
</div>
```

### Middle
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';

<div className="truncate-example-resize">
  <Truncate
    content={'rh_logo_black_and_white_reversed_fedora_container.zip'}
    trailingNumChars={0}
    position={'middle'}
  />
</div>
```

### Start
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';

<div className="truncate-example-resize">
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    position={'start'}
  />
</div>
```

### Default with tooltip at the bottom
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';

<div className="truncate-example-resize">
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    tooltipPosition={'bottom'}
  />
</div>
```
