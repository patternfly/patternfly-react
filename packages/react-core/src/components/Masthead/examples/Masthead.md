---
id: Masthead
section: components
cssPrefix: pf-c-masthead
propComponents: ['Masthead', 'MastheadToggle', 'MastheadMain', 'MastheadBrand', 'MastheadContent']
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import { Link } from '@reach/router';

## Examples

### Basic

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

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
</Masthead>;
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

### Display inline

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<Masthead id="inline-masthead" display={{ default: 'inline' }}>
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
</Masthead>;
```

### Display stack

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<Masthead id="stack-masthead" display={{ default: 'stack' }}>
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
</Masthead>;
```

### Display stack, display inline responsive

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<Masthead id="stack-masthead" display={{ default: 'inline', lg: 'stack', '2xl': 'inline' }}>
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
</Masthead>;
```

### Light variant

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<Masthead id="light-masthead" backgroundColor="light">
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
</Masthead>;
```

### Light 200 variant

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<Masthead id="light200-masthead" backgroundColor="light200">
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
</Masthead>;
```

### Inset

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

<Masthead id="inset-masthead" inset={{ default: 'insetSm' }}>
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
</Masthead>;
```

### With router link

```js
import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import { Link } from '@reach/router';

<Masthead id="basic">
  <MastheadToggle>
    <Button variant="plain" onClick={() => {}} aria-label="Global navigation">
      <BarsIcon />
    </Button>
  </MastheadToggle>
  <MastheadMain>
    <MastheadBrand component={props => <Link {...props} to="#" />}>Logo</MastheadBrand>
  </MastheadMain>
  <MastheadContent>
    <span>Content</span>
  </MastheadContent>
</Masthead>;
```
