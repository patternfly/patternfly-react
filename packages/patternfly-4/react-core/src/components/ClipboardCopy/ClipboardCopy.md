---
title: 'Clipboard copy'
cssPrefix: 'pf-c-copyclipboard'
propComponents: ['ClipboardCopy']
typescript: true
---

import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

## Clipboard copy
```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

<ClipboardCopy>This is editable</ClipboardCopy>;
```

## Read only clipboard copy
```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';

<ClipboardCopy isReadOnly>This is read-only</ClipboardCopy>;
```

## Expanded clipboard copy
```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy variant={ClipboardCopyVariant.expansion}>
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>
```
## Read only expanded clipboard copy
```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy isReadOnly variant={ClipboardCopyVariant.expansion}>
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>
```

## Read only expanded by default clipboard copy
```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy isReadOnly isExpanded variant={ClipboardCopyVariant.expansion}>
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>
```

## Expanded clipboard copy with array
```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

ClipboardCopyArrayOfElements = () => {
  let text = [
    "Got a lot of text here," ,
    "need to see all of it?" ,
    "Click that arrow on the left side and check out the resulting expansion."
  ]
  return <ClipboardCopy variant={ClipboardCopyVariant.expansion}>
    {text.join(" ")}
  </ClipboardCopy>
}
```