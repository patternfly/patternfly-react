---
title: 'Catalog tile'
section: 'catalog view'
propComponents: ['CatalogTile']
typescript: true
---

Note: Catalog tile lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!
<br />
This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.
<br />
<br />

import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { CogIcon, OutlinedCheckCircleIcon } from '@patternfly/react-icons';
import { pfBrand } from './examples/pfLogo.svg'
import './examples/catalogTile.scss';

## Simple featured catalog tile
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { pfLogo } from './examples/pfLogo.svg'

Simple = () => (
  <React.Fragment>
    <CatalogTile
      id="simple"
      featured
      iconImg={pfLogo}
      iconAlt="PatternFly logo"
      badges={[
        <CatalogTileBadge title="Certified">
          <CogIcon />
        </CatalogTileBadge>
      ]}
      title="Patternfly-React"
      vendor="provided by Red Hat"
      description={
        'This is a very long description that should be truncated after 112 characters. ' +
        '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
        'to truncate the description how you see fit. It will be passed the description, max length, and id.'
      }
    />
  </React.Fragment>
);
```

## Simple catalog tile without truncated text
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { pfLogo } from './examples/pfLogo.svg'

SimpleUnTrunc = () => (
  <React.Fragment>
    <CatalogTile
      id="simple"
      iconImg={pfLogo}
      iconAlt="PatternFly logo"
      badges={[
        <CatalogTileBadge title="Certified">
          <CogIcon />
        </CatalogTileBadge>
      ]}
      title="Patternfly-React"
      vendor="provided by Red Hat"
      maxDescriptionLength={-1}
      description={
        'This is a very long description that is not truncated after 112 characters. ' +
        'To turn off truncation, pass in a maxDescriptionLength of -1. Please note that this has changed from ' +
        'PatternFly 3.'
      }
    />
  </React.Fragment>
);
```

## Simple catalog tile with footer
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { pfLogo } from './examples/pfLogo.svg'

SimpleFooter = () => (
  <React.Fragment>
    <CatalogTile
      id="simple-footer"
      iconImg={pfLogo}
      iconAlt="PatternFly logo"
      badges={[
        <CatalogTileBadge title="Certified">
          <CogIcon />
        </CatalogTileBadge>
      ]}
      title="Patternfly-React"
      vendor="provided by Red Hat"
      description={
        'This is a very long description that should be truncated after 112 characters. ' +
        '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
        'to truncate the description how you see fit. It will be passed the description, max length, and id.'
      }
      footer={
        <span>
          <OutlinedCheckCircleIcon className="example-ok-icon" /> Enabled
        </span>
      }
    />
  </React.Fragment>
);
```

## Catalog tile link variant
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { pfLogo } from './examples/pfLogo.svg'

Link = () => (
  <React.Fragment>
    <CatalogTile
      id="simple"
      iconImg={pfLogo}
      iconAlt="PatternFly logo"
      badges={[
        <CatalogTileBadge title="Certified">
          <CogIcon />
        </CatalogTileBadge>
      ]}
      href="http://patternfly.org/v4"
      title="Patternfly-React"
      vendor={<React.Fragment>provided by <a href="http://redhat.com">Red Hat</a></React.Fragment>}
      description={
        'This is a very long description that should be truncated after 112 characters. ' +
        '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
        'to truncate the description how you see fit. It will be passed the description, max length, and id.'
      }
    />
  </React.Fragment>
);
```

## Catalog tile with multiple icon badges
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { pfLogo } from './examples/pfLogo.svg'

MultiIcon = () => (
  <React.Fragment>
    <CatalogTile
      id="multiIcon"
      iconImg={pfLogo}
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
        'This is a very long description that should be truncated after 112 characters. ' +
        '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
        'to truncate the description how you see fit. It will be passed the description, max length, and id.'
      }
    />
  </React.Fragment>
);
```


## Catalog tile with text badge
```js
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { pfLogo } from './examples/pfLogo.svg'

TextBadge = () => (
  <React.Fragment>
    <CatalogTile
      id="multiIcon"
      iconImg={pfLogo}
      iconAlt="PatternFly logo"
      badges={[
        'Community'
      ]}
      title="Patternfly-React"
      vendor={<React.Fragment>provided by <a href="http://redhat.com">Red Hat</a></React.Fragment>}
      description={
        'This is a very long description that should be truncated after 112 characters. ' +
        '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
        'to truncate the description how you see fit. It will be passed the description, max length, and id.'
      }
    />
  </React.Fragment>
);
```

