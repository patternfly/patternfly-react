---
id: Clipboard copy
section: components
cssPrefix: pf-c-copyclipboard
propComponents: ['ClipboardCopy']
---

## Examples
### Basic
```js
import { ClipboardCopy } from '@patternfly/react-core';

<ClipboardCopy>This is editable</ClipboardCopy>;
```

### Read Only
```js
import { ClipboardCopy } from '@patternfly/react-core';

<ClipboardCopy isReadOnly>This is read-only</ClipboardCopy>;
```

### Expanded
```js
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy variant={ClipboardCopyVariant.expansion}>
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>
```
### Read only expanded
```js
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy isReadOnly variant={ClipboardCopyVariant.expansion}>
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>
```

### Read only expanded by default
```js
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy isReadOnly isExpanded variant={ClipboardCopyVariant.expansion}>
  Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
  expansion.
</ClipboardCopy>
```

### Expanded with array
```js
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

### JSON object (wrap code with pre)
```js
import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

<ClipboardCopy isCode variant={ClipboardCopyVariant.expansion}>
  

{ `{ "menu": {
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
  
</ClipboardCopy>
```
