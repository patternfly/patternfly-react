---
id: Truncate
section: components
propComponents: [Truncate]
---

import './TruncateExamples.css';
import truncateStyles from '@patternfly/react-styles/css/docs/components/Truncate/examples/Truncate';

## Examples

### Default
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
import truncateStyles from '@patternfly/react-styles/css/docs/components/Truncate/examples/Truncate';
<div className={truncateStyles.truncateExample}>
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
  />
</div>
```

### Middle

```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
import truncateStyles from '@patternfly/react-styles/css/docs/components/Truncate/examples/Truncate';
<div className={truncateStyles.truncateExample}>
  <Truncate
    content={'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}
    trailingNumChars={10}
    position={'middle'}
  />
</div>
```

### Start
```js
import React from 'react';
import { Truncate } from '@patternfly/react-core';
import truncateStyles from '@patternfly/react-styles/css/docs/components/Truncate/examples/Truncate';
<div className={truncateStyles.truncateExample}>
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
import truncateStyles from '@patternfly/react-styles/css/docs/components/Truncate/examples/Truncate';
<div className={truncateStyles.truncateExample}>
  <Truncate
    content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
    tooltipPosition={'bottom'}
  />
</div>
```
