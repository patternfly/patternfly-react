---
title: 'Description List'
section: components
cssPrefix: 'pf-c-description-list'
typescript: true
beta: true
propComponents:
  [
    'DescriptionList',
    'DescriptionListDescription',
    'DescriptionListGroup',
    'DescriptionListTerm',
  ]
---

import { Button, DescriptionList, DescriptionListTerm, DescriptionListDescription, DescriptionListGroup } from '@patternfly/react-core';

## Examples

```js title=Default
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

SimpleDescriptionList = (
  <DescriptionList>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

```js title=Default-2-col
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

TwoColDescriptionList = (
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
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

```js title=Default-3-col-on-lg
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

ThreeColOnLgDescriptionList = (
  <DescriptionList columnModifier={{ lg: '3Col' }}>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

```js title=Horizontal
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

HorizontalDescriptionList = (
  <DescriptionList isHorizontal>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

```js title=Horizontal-2-col
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

Horizontal2ColDescriptionList = (
  <DescriptionList isHorizontal columnModifier={{ default: '2Col' }}>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

```js title=Horizontal-3-col-on-lg
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

Horizontal3ColOnLgDescriptionList = (
  <DescriptionList isHorizontal columnModifier={{ lg: '3Col' }}>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

## Responsive column definitions

```js title=Default-responsive-columns
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

ResponsiveDescriptionList = (
  <DescriptionList columnModifier={{ lg: '2Col', xl: '3Col' }}>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

```js title=Horizontal-responsive-columns
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

HorizontalResponsiveDescriptionList = (
  <DescriptionList isHorizontal columnBreakpoint={{ lg: '2Col', xl: '3Col' }}>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

## Auto-column-width

```js title=Default-auto-column-width
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

AutoColumnsDescriptionList = (
  <DescriptionList hasAutoColumnWidths columnModifier={{ default: '3Col' }}>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

```js title=Horizontal-auto-column-width
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

HorizontalAutoColumnsDescriptionList = (
  <DescriptionList isHorizontal hasAutoColumnWidths columnModifier={{ lg: '2Col' }}>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```

## Inline Grid

```js title=Default-inline-grid
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListText,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';

InlineGridDescriptionList = (
  <DescriptionList columnModifier={{ default: '3Col' }} hasInlineGrid>
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription textComponent="a" href="#">
        mary-test
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
);
```
