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
    'DescriptionListText',
  ]
---

import { Button, DescriptionList, DescriptionListTerm, DescriptionListText, DescriptionListDescription, DescriptionListGroup } from '@patternfly/react-core';

## Examples

```js title=Default
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

SimpleDescriptionList = (
  <DescriptionList>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
  <DescriptionList variant="2Col">
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
import plusCircleIcon as {PlusCircleIcon} from '@patternfly/react-icons';

ThreeColOnLgDescriptionList = (
  <DescriptionList variantOnLg="3ColOnLg">
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}> app=MyApp </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
        <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
  <DescriptionList isHorizontal variant="2Col">
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
import plusCircleIcon as {PlusCircleIcon} from '@patternfly/react-icons';

Horizontal3ColOnLgDescriptionList = (
  <DescriptionList isHorizontal variantOnLg="3ColOnLg">
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}> app=MyApp </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
        <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
  <DescriptionList variantOnLg="2ColOnLg" variantOnXl="3ColOnXl">
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
  <DescriptionList isHorizontal variantOnLg="2ColOnLg" variantOnXl="3ColOnXl">
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
  <DescriptionList hasAutoColumnWidths variant="3Col">
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
  <DescriptionList isHorizontal hasAutoColumnWidths variantOnLg="2ColOnLg">
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
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
  <DescriptionList variant="3Col" hasInlineGrid>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Name</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>Example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Namespace</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText component="a" href="#">
          mary-test
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Labels</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>example</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Pod selector</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>
          <Button variant="link" isInline icon={<PlusCircleIcon />}>
            {' '}
            app=MyApp{' '}
          </Button>
        </DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>
        <DescriptionListText>Annotation</DescriptionListText>
      </DescriptionListTerm>
      <DescriptionListDescription>
        <DescriptionListText>2 Annotations</DescriptionListText>
      </DescriptionListDescription>
    </DescriptionListGroup>
  </DescriptionList>
);
```
