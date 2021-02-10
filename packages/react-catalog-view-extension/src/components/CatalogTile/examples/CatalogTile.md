---
id: Catalog view tile
section: extensions
propComponents: ['CatalogTile']
---

import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/js/icons/outlined-check-circle-icon';
import pfLogo2 from './pfLogo2.svg';
import './catalogTile.css';

## Introduction

Note: Catalog tile lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.

## Examples
### Basic featured tile
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="simple"
  featured
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>
  ]}
  title="Patternfly-React"
  vendor="provided by Red Hat"
  description={
    'This is a very, very long description that should be truncated after three lines. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
/>
```

### Basic with footer
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/js/icons/outlined-check-circle-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="simple-footer"
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>
  ]}
  title="Patternfly-React"
  vendor="provided by Red Hat"
  description={
    'This is a very, very long description that should be truncated after one line. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
  footer={
    <span>
      <OutlinedCheckCircleIcon className="example-ok-icon" /> Enabled
    </span>
  }
/>
```

### Link variant
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="link-variant"
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>
  ]}
  href="http://patternfly.org/v4"
  title="Patternfly-React"
  vendor="provided by Red Hat"
  description={
    'This is a very, very long description that should be truncated after three lines. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
/>
```

### With multiple icon badges
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/js/icons/outlined-check-circle-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="multiIcon"
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>,
    <CatalogTileBadge title="USDA Approved">
      <OutlinedCheckCircleIcon className="example-ok-icon" />
    </CatalogTileBadge>
  ]}
  title="Patternfly-React"
  vendor={<React.Fragment>provided by <a href="http://redhat.com">Red Hat</a></React.Fragment>}
  description={
    'This is a very, very long description that should be truncated after three lines. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
/>
```

### With text badge
```js
import React from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="text-badge"
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    'Community'
  ]}
  title="Patternfly-React"
  vendor={<React.Fragment>provided by <a href="http://redhat.com">Red Hat</a></React.Fragment>}
  description={
    'This is a very, very long description that should be truncated after three lines. ' +
    'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
    'This has changed from PatternFly 3.'
  }
/>
```

### With children instead of description
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import pfLogo2 from './pfLogo2.svg';

<CatalogTile
  id="simple"
  featured
  iconImg={pfLogo2}
  iconAlt="PatternFly logo"
  badges={[
    <CatalogTileBadge title="Certified">
      <CogIcon />
    </CatalogTileBadge>
  ]}
  title="Patternfly-React"
  vendor="provided by Red Hat"
>
  This is a very, very long stetch of child text that should be not be truncated
  and illustrates how Flyers can add longer content to PatternFly 4 catalog tiles
  using the children prop. Cards usually truncate descriptions at three lines.
  Cards with a footer are truncated after one line. This has changed from PatternFly 3.
  Children can be of any length.
</CatalogTile>
```
