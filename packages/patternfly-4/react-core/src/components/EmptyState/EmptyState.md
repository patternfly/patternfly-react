---
title: 'Empty state'
cssPrefix: 'pf-c-empty-state'
typescript: true
propComponents: ['EmptyState', 'EmptyStateBody', 'EmptyStateIcon', 'EmptyStateSecondaryActions']
---

## Empty state

import {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  EmptyStatePrimary
} from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

```js
import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

SimpleEmptyState = () => (
  <EmptyState variant={EmptyStateVariant.full}>
    <EmptyStateIcon icon={CubesIcon} />
    <Title headingLevel="h5" size="lg">
      Empty State
    </Title>
    <EmptyStateBody>
      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
      enough to meet a variety of needs.
    </EmptyStateBody>
    <Button variant="primary">Primary Action</Button>
    <EmptyStateSecondaryActions>
      <Button variant="link">Multiple</Button>
      <Button variant="link">Action Buttons</Button>
      <Button variant="link">Can</Button>
      <Button variant="link">Go here</Button>
      <Button variant="link">In the secondary</Button>
      <Button variant="link">Action area</Button>
    </EmptyStateSecondaryActions>
  </EmptyState>
);
```

## Empty state small
```js
import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

SimpleEmptyState = () => (
  <EmptyState variant={EmptyStateVariant.small}>
    <EmptyStateIcon icon={CubesIcon} />
    <Title headingLevel="h5" size="lg">
      Empty State
    </Title>
    <EmptyStateBody>
      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
      enough to meet a variety of needs.
    </EmptyStateBody>
    <Button variant="primary">Primary Action</Button>
    <EmptyStateSecondaryActions>
      <Button variant="link">Multiple</Button>
      <Button variant="link">Action Buttons</Button>
      <Button variant="link">Can</Button>
      <Button variant="link">Go here</Button>
      <Button variant="link">In the secondary</Button>
      <Button variant="link">Action area</Button>
    </EmptyStateSecondaryActions>
  </EmptyState>
);
```

## Empty state large
```js
import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

SimpleEmptyState = () => (
  <EmptyState variant={EmptyStateVariant.large}>
    <EmptyStateIcon icon={CubesIcon} />
    <Title headingLevel="h5" size="lg">
      Empty State
    </Title>
    <EmptyStateBody>
      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
      enough to meet a variety of needs.
    </EmptyStateBody>
    <Button variant="primary">Primary Action</Button>
    <EmptyStateSecondaryActions>
      <Button variant="link">Multiple</Button>
      <Button variant="link">Action Buttons</Button>
      <Button variant="link">Can</Button>
      <Button variant="link">Go here</Button>
      <Button variant="link">In the secondary</Button>
      <Button variant="link">Action area</Button>
    </EmptyStateSecondaryActions>
  </EmptyState>
);
```

## Empty state spinner
```js
import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';


EmptyStateSpinner = () => {
  const Spinner = () => (
    <span className="pf-c-spinner" role="progressbar" aria-valuetext="Loading...">
      <span class="pf-c-spinner__clipper" />
      <span class="pf-c-spinner__lead-ball" />
      <span class="pf-c-spinner__tail-ball" />
    </span>
  )
  return (
    <EmptyState>
      <EmptyStateIcon variant="container" component={Spinner} />
      <Title size="lg">
        Loading
      </Title>
    </EmptyState>
  );
}
```

## Empty state no match found
```js
import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';


NoMatchEmptyState = () => {
  return (
    <EmptyState>
      <EmptyStateIcon icon={SearchIcon} />
      <Title size="lg">
        No results found
      </Title>
      <EmptyStateBody>
        No results match the filter criteria. Remove all filters or clear all filters to show results.
      </EmptyStateBody>
      <EmptyStatePrimary>
        <Button variant="link">Clear all filters</Button>
      </EmptyStatePrimary>
    </EmptyState>
  );
}
```
