---
id: 'Description list'
section: components
cssPrefix: 'pf-c-description-list'
propComponents:
  [
    'DescriptionList',
    'DescriptionListDescription',
    'DescriptionListGroup',
    'DescriptionListTerm',
    'DescriptionListTermHelpText',
    'DescriptionListTermHelpTextButton',
    'Popover',
  ]
---

import { Button, DescriptionList, DescriptionListTerm, DescriptionListDescription, DescriptionListGroup, DescriptionListTermHelpText, DescriptionListTermHelpTextButton, Popover } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
```

### Term help text

```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  DescriptionListTermHelpText,
  DescriptionListTermHelpTextButton,
  Popover
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

<DescriptionList>
  <DescriptionListGroup>
    <DescriptionListTermHelpText>
      <Popover headerContent={<div>Name</div>} bodyContent={<div>Additional name info</div>}>
        <DescriptionListTermHelpTextButton> Name </DescriptionListTermHelpTextButton>
      </Popover>
    </DescriptionListTermHelpText>
    <DescriptionListDescription>Example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTermHelpText>
      <Popover headerContent={<div>Namespace</div>} bodyContent={<div>Additional namespace info</div>}>
        <DescriptionListTermHelpTextButton> Namespace </DescriptionListTermHelpTextButton>
      </Popover>
    </DescriptionListTermHelpText>
    <DescriptionListDescription>
      <a href="#">mary-test</a>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTermHelpText>
      <Popover headerContent={<div>Labels</div>} bodyContent={<div>Additional labels info</div>}>
        <DescriptionListTermHelpTextButton> Labels </DescriptionListTermHelpTextButton>
      </Popover>
    </DescriptionListTermHelpText>
    <DescriptionListDescription>example</DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTermHelpText>
      <Popover headerContent={<div>Pod selector</div>} bodyContent={<div>Additional pod selector info</div>}>
        <DescriptionListTermHelpTextButton> Pod selector </DescriptionListTermHelpTextButton>
      </Popover>
    </DescriptionListTermHelpText>
    <DescriptionListDescription>
      <Button variant="link" isInline icon={<PlusCircleIcon />}>
        app=MyApp
      </Button>
    </DescriptionListDescription>
  </DescriptionListGroup>
  <DescriptionListGroup>
    <DescriptionListTermHelpText>
      <Popover headerContent={<div>Annotation</div>} bodyContent={<div>Additional annotation info</div>}>
        <DescriptionListTermHelpTextButton> Annotation </DescriptionListTermHelpTextButton>
      </Popover>
    </DescriptionListTermHelpText>
    <DescriptionListDescription>2 Annotations</DescriptionListDescription>
  </DescriptionListGroup>
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
```

### Compact

```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

<DescriptionList isCompact>
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
</DescriptionList>;
```

### Compact horizontal

```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

<DescriptionList isCompact isHorizontal>
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
</DescriptionList>;
```

### Fluid horizontal

```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

<DescriptionList isHorizontal isFluid>
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
</DescriptionList>;
```

### Column fill

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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

<DescriptionList isFillColumns columnModifier={{ default: '2Col', lg: '3Col' }}>
  <DescriptionListGroup>
    <DescriptionListTerm>Name</DescriptionListTerm>
    <DescriptionListDescription>
      This is a long description that should wrap to multiple lines in a multi-column layout.
    </DescriptionListDescription>
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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
```

### Responsive horizontal, vertical group layout

```js
import React from 'react';
import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

<DescriptionList
  isHorizontal
  orientation={{
    md: 'vertical',
    lg: 'horizontal',
    xl: 'vertical',
    '2xl': 'horizontal'
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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

<DescriptionList isAutoFit autoFitMinModifier={{ default: '200px' }}>
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
</DescriptionList>;
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
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

<DescriptionList isAutoFit autoFitMinModifier={{ md: '100px', lg: '150px', xl: '200px', '2xl': '300px' }}>
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
</DescriptionList>;
```
