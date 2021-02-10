---
id: 'Description list'
section: components
cssPrefix: 'pf-c-description-list'
beta: true
propComponents: ['DescriptionList', 'DescriptionListDescription', 'DescriptionListGroup', 'DescriptionListTerm']
---

import { Button, DescriptionList, DescriptionListTerm, DescriptionListDescription, DescriptionListGroup } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

## Examples
### Basic
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Default 2 col
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList
  columnModifier={{
    default: '2Col'
  }}
>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Default 3 col on lg
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList columnModifier={{ lg: '3Col' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Horizontal
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isHorizontal>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Horizontal 2 col
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isHorizontal columnModifier={{ default: '2Col' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Horizontal 3 col on lg
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isHorizontal columnModifier={{ lg: '3Col' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

## Responsive column definitions

### Default responsive columns
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList columnModifier={{ lg: '2Col', xl: '3Col' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Horizontal responsive columns
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isHorizontal columnModifier={{ lg: '2Col', xl: '3Col' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

## Auto-column-width

### Default auto column width
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isAutoColumnWidths columnModifier={{ default: '3Col' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Horizontal auto column width
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isHorizontal isAutoColumnWidths columnModifier={{ lg: '2Col' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

## Inline grid
### Default inline grid
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList columnModifier={{ default: '3Col' }} isInlineGrid>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

## Auto fit
### Auto-fit basic
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isAutoFit>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Auto-fit, min width modified grid template columns
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isAutoFit autoFitModifier={{ default: '200px' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```

### Auto-fit, min width modified, responsive grid template columns
```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

<DescriptionList isAutoFit autoFitModifier={{ md: '100px', lg: '150px', xl: '200px', '2xl': '300px' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Namespace</DescriptionListTerm>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Labels</DescriptionListTerm>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Pod selector</DescriptionListTerm>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTerm>Annotation</DescriptionListTerm>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>
```
