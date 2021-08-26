---
id: Clipboard copy
section: components
cssPrefix: pf-c-copyclipboard
propComponents: ['ClipboardCopy', 'ClipboardCopyButton']
---

import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

## Examples

### Basic

```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

<ClipboardCopy hoverTip="Copy" clickTip="Copied">This is editable</ClipboardCopy>;
```

### Read Only

```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

<ClipboardCopy isReadOnly hoverTip="Copy" clickTip="Copied">This is read-only</ClipboardCopy>;
```

### Expanded

```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy hoverTip="Copy" clickTip="Copied" variant={ClipboardCopyVariant.expansion} >
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>;
```

### Read only expanded

```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy isReadOnly hoverTip="Copy" clickTip="Copied" variant={ClipboardCopyVariant.expansion}>
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>;
```

### Read only expanded by default

```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy isReadOnly isExpanded hoverTip="Copy" clickTip="Copied" variant={ClipboardCopyVariant.expansion}>
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>;
```

### Expanded with array

```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

ClipboardCopyArrayOfElements = () => {
  let text = [
    'Got a lot of text here,',
    'need to see all of it?',
    'Click that arrow on the left side and check out the resulting expansion.'
  ];
  return <ClipboardCopy hoverTip="Copy" clickTip="Copied" variant={ClipboardCopyVariant.expansion}>{text.join(' ')}</ClipboardCopy>;
};
```

### JSON object (wrap code with pre)

```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy isCode hoverTip="Copy" clickTip="Copied" variant={ClipboardCopyVariant.expansion}>
  {`{ "menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}} `}
</ClipboardCopy>;
```

### Inline compact

```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

<ClipboardCopy hoverTip="Copy" clickTip="Copied" variant="inline-compact">2.3.4-2-redhat</ClipboardCopy>;
```

### Inline compact code

```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

<ClipboardCopy hoverTip="Copy" clickTip="Copied" variant="inline-compact" isCode>
  2.3.4-2-redhat
</ClipboardCopy>;
```

### Inline compact with additional action

```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyAction, Button } from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

<ClipboardCopy
  hoverTip="Copy"
  clickTip="Copied"
  variant="inline-compact"
  additionalActions={
    <ClipboardCopyAction>
      <Button variant="plain" aria-label="Run in web terminal">
        <PlayIcon aria-hidden />
      </Button>
    </ClipboardCopyAction>
  }
>
  2.3.4-2-redhat
</ClipboardCopy>;
```

### Inline compact in sentence

```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

<React.Fragment>
  <b>Basic</b>
  <br />
  Lorem ipsum {<ClipboardCopy hoverTip="Copy" clickTip="Copied" variant="inline-compact">2.3.4-2-redhat</ClipboardCopy>} dolor sit amet.
  <br /> <br />
  <b>Long copy string</b>
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
  {
    <ClipboardCopy hoverTip="Copy" clickTip="Copied" variant="inline-compact">
      https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890
    </ClipboardCopy>
  }{' '}
  Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.
  <br /> <br />
  <b>Long copy string in block</b>
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
  {
    <ClipboardCopy hoverTip="Copy" clickTip="Copied" variant="inline-compact" isBlock>
      https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890
    </ClipboardCopy>
  }{' '}
  Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.
</React.Fragment>;
```
