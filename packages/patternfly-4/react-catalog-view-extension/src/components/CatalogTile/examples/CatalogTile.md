---
title: 'Catalog tile'
section: 'catalog view'
propComponents: ['CatalogTile']
typescript: true
---

import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { CogIcon, OutlinedCheckCircleIcon } from '@patternfly/react-icons';
import { pfLogo2 } from './pfLogo2.svg'
import './catalogTile.css';

## Introduction

Note: Catalog tile lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.

## Examples
```js title=Basic-featured-tile
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { CogIcon } from '@patternfly/react-icons';
import { pfLogo2 } from './examples/pfLogo2.svg'

Basic = () => (
  <React.Fragment>
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
      maxDescriptionLength={-1}
      description={
        'This is a very, very long description that should be truncated after three lines. ' +
        'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
        'This has changed from PatternFly 3.'
      }
    />
  </React.Fragment>
);
```

```js title=Basic-with-footer
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { CogIcon, OutlinedCheckCircleIcon } from '@patternfly/react-icons';
import { pfLogo2 } from './examples/pfLogo2.svg'

SimpleFooter = () => (
  <React.Fragment>
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
      maxDescriptionLength={-1}
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
  </React.Fragment>
);
```

```js title=Link-variant
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { CogIcon } from '@patternfly/react-icons';
import { pfLogo2 } from './examples/pfLogo2.svg'

Link = () => (
  <React.Fragment>
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
      maxDescriptionLength={-1}
      description={
        'This is a very, very long description that should be truncated after three lines. ' +
        'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
        'This has changed from PatternFly 3.'
      }
    />
  </React.Fragment>
);
```

```js title=With-multiple-icon-badges
import React from 'react';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import { CogIcon, OutlinedCheckCircleIcon } from '@patternfly/react-icons';
import { pfLogo2 } from './examples/pfLogo2.svg'

MultiIcon = () => (
  <React.Fragment>
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
      maxDescriptionLength={-1}
      description={
        'This is a very, very long description that should be truncated after three lines. ' +
        'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
        'This has changed from PatternFly 3.'
      }
    />
  </React.Fragment>
);
```

```js title=With-text-badge
import React from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import { pfLogo2 } from './examples/pfLogo2.svg'

TextBadge = () => (
  <React.Fragment>
    <CatalogTile
      id="text-badge"
      iconImg={pfLogo2}
      iconAlt="PatternFly logo"
      badges={[
        'Community'
      ]}
      title="Patternfly-React"
      vendor={<React.Fragment>provided by <a href="http://redhat.com">Red Hat</a></React.Fragment>}
      maxDescriptionLength={-1}
      description={
        'This is a very, very long description that should be truncated after three lines. ' +
        'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +
        'This has changed from PatternFly 3.'
      }
    />
  </React.Fragment>
);
```
