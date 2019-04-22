---

title: 'ClipboardCopy'
cssPrefix: 'pf-c-copyclipboard'

---

## Clipboard Copy

```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';
class SimpleClipboardCopy extends React.Component {
  render() {
    return <ClipboardCopy>This is editable</ClipboardCopy>;
  }
}
```

## Read Only Clipboard Copy

```js
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core';
class SimpleClipboardCopy extends React.Component {
  render() {
    return <ClipboardCopy isReadOnly>This is editable</ClipboardCopy>;
  }
}
```

## Expanded Clipboard Copy

```js
import React from 'react';
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';
class SimpleClipboardCopy extends React.Component {
  render() {
    return (
      <ClipboardCopy variant={ClipboardCopyVariant.expansion}>
        Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
        expansion.
      </ClipboardCopy>
    );
  }
}
```
