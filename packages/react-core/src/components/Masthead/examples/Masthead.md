---
id: Masthead
section: components
cssPrefix: pf-c-masthead
propComponents: ['Masthead', 'MastheadToggle', 'MastheadMain', 'MastheadBrand', 'MastheadContent']
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

## Examples

### Basic

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<React.Fragment>
  <Masthead id="basic-alt" logo="Logo" onToggle={() => {}} toolbar={<span>Content</span>} />
  <br />
  <Masthead id="basic">
    <MastheadToggle>
      <Button variant="plain" onClick={() => {}} aria-label="Global navigation">
        <BarsIcon />
      </Button>
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand>Logo</MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
</React.Fragment>;
```

### Basic with mixed content

```js
import React from 'react';
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<Masthead id="basic-mixed">
  <MastheadToggle>
    <Button variant="plain" onClick={() => {}} aria-label="Global navigation">
      <BarsIcon />
    </Button>
  </MastheadToggle>
  <MastheadMain>
    <MastheadBrand>Logo</MastheadBrand>
  </MastheadMain>
  <MastheadContent>
    <Flex>
      <span>Testing text color</span>
      <Button>testing</Button>
      <FlexItem alignSelf={{ default: 'alignSelfFlexEnd' }}>
        <Button>testing</Button>
      </FlexItem>
    </Flex>
  </MastheadContent>
</Masthead>;
```
