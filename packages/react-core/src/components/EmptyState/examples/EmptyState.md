---
id: Empty state
section: components
cssPrefix: pf-c-empty-state
propComponents: ['EmptyState', 'EmptyStateBody', 'EmptyStateIcon', 'EmptyStateSecondaryActions']
---
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

## Examples
### Basic
```js
import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

<EmptyState>
  <EmptyStateIcon icon={CubesIcon} />
  <Title headingLevel="h4" size="lg">
    Empty state
  </Title>
  <EmptyStateBody>
    This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
    enough to meet a variety of needs.
  </EmptyStateBody>
  <Button variant="primary">Primary action</Button>
  <EmptyStateSecondaryActions>
    <Button variant="link">Multiple</Button>
    <Button variant="link">Action Buttons</Button>
    <Button variant="link">Can</Button>
    <Button variant="link">Go here</Button>
    <Button variant="link">In the secondary</Button>
    <Button variant="link">Action area</Button>
  </EmptyStateSecondaryActions>
</EmptyState>
```

### Extra small
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
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

<EmptyState variant={EmptyStateVariant.xs}>
  <Title headingLevel="h4" size="md">
    Empty state
  </Title>
  <EmptyStateBody>
    This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
    enough to meet a variety of needs.
  </EmptyStateBody>
  <EmptyStateSecondaryActions>
    <Button variant="link">Multiple</Button>
    <Button variant="link">Action Buttons</Button>
    <Button variant="link">Can</Button>
    <Button variant="link">Go here</Button>
    <Button variant="link">In the secondary</Button>
    <Button variant="link">Action area</Button>
  </EmptyStateSecondaryActions>
</EmptyState>
```

### Small
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
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

<EmptyState variant={EmptyStateVariant.small}>
  <EmptyStateIcon icon={CubesIcon} />
  <Title headingLevel="h4" size="lg">
    Empty state
  </Title>
  <EmptyStateBody>
    This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
    enough to meet a variety of needs.
  </EmptyStateBody>
  <Button variant="primary">Primary action</Button>
  <EmptyStateSecondaryActions>
    <Button variant="link">Multiple</Button>
    <Button variant="link">Action Buttons</Button>
    <Button variant="link">Can</Button>
    <Button variant="link">Go here</Button>
    <Button variant="link">In the secondary</Button>
    <Button variant="link">Action area</Button>
  </EmptyStateSecondaryActions>
</EmptyState>
```

### Large
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
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

<EmptyState variant={EmptyStateVariant.large}>
  <EmptyStateIcon icon={CubesIcon} />
  <Title headingLevel="h4" size="lg">
    Empty state
  </Title>
  <EmptyStateBody>
    This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
    enough to meet a variety of needs.
  </EmptyStateBody>
  <Button variant="primary">Primary action</Button>
  <EmptyStateSecondaryActions>
    <Button variant="link">Multiple</Button>
    <Button variant="link">Action Buttons</Button>
    <Button variant="link">Can</Button>
    <Button variant="link">Go here</Button>
    <Button variant="link">In the secondary</Button>
    <Button variant="link">Action area</Button>
  </EmptyStateSecondaryActions>
</EmptyState>
```

### Extra large
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
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

<EmptyState variant={EmptyStateVariant.xl}>
  <EmptyStateIcon icon={CubesIcon} />
  <Title headingLevel="h5" size="4xl">
    Empty state
  </Title>
  <EmptyStateBody>
    This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
    enough to meet a variety of needs.
  </EmptyStateBody>
  <Button variant="primary">Primary action</Button>
  <EmptyStateSecondaryActions>
    <Button variant="link">Multiple</Button>
    <Button variant="link">Action Buttons</Button>
    <Button variant="link">Can</Button>
    <Button variant="link">Go here</Button>
    <Button variant="link">In the secondary</Button>
    <Button variant="link">Action area</Button>
  </EmptyStateSecondaryActions>
</EmptyState>
```

### Spinner
```js
import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';


EmptyStateSpinner = () => {
  const Spinner = () => (
    <span className="pf-c-spinner" role="progressbar" aria-valuetext="Loading...">
      <span className="pf-c-spinner__clipper" />
      <span className="pf-c-spinner__lead-ball" />
      <span className="pf-c-spinner__tail-ball" />
    </span>
  )
  return (
    <EmptyState>
      <EmptyStateIcon variant="container" component={Spinner} />
      <Title size="lg" headingLevel="h4">
        Loading
      </Title>
    </EmptyState>
  );
}
```

### No match found
```js
import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStatePrimary,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';


<EmptyState>
  <EmptyStateIcon icon={SearchIcon} />
  <Title size="lg" headingLevel="h4">
    No results found
  </Title>
  <EmptyStateBody>
    No results match the filter criteria. Clear all filters and try again.
  </EmptyStateBody>
  <EmptyStatePrimary>
    <Button variant="link">Clear all filters</Button>
  </EmptyStatePrimary>
</EmptyState>
```
