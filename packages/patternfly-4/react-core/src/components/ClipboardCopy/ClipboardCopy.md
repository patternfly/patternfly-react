---
title: 'Clipboard copy'
cssPrefix: 'pf-c-copyclipboard'
propComponents: ['ClipboardCopy']
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
