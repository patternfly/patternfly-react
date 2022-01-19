---
id: Truncate
section: components
propComponents: [Truncate]
beta: true
---

import './TruncateExamples.css';

## Examples

### Default
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
<div className="pf-c-truncate--example">
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
  />
</div>
```

### Middle

The `charsToSlice` parameter determines where the string (from the end) should be sliced, the truncation starts there. The default is 7 characters. Numbers between 5 to 10 works the best.

```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
<div className="pf-c-truncate--example">
  <Truncate
    content={'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}
    charsToSlice={10}
    position={'middle'}
  />
</div>
```

### Start
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
<div className="pf-c-truncate--example">
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
<div className="pf-c-truncate--example">
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    tooltipPosition={'bottom'}
  />
</div>
```