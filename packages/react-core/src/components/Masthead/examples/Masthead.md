---
id: Masthead
section: components
cssPrefix: pf-c-masthead
propComponents: ['Masthead', 'MastheadToggle', 'MastheadMain', 'MastheadBrand', 'MastheadContent']
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

## Examples

### Default

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<Masthead>
  <MastheadToggle>
    <Button variant="plain" onClick={() => {}}>
      <BarsIcon />
    </Button>
  </MastheadToggle>
  <MastheadMain>
    <MastheadBrand>Logo</MastheadBrand>
  </MastheadMain>
  <MastheadContent>Content</MastheadContent>
</Masthead>;
```
