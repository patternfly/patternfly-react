---
id: Clipboard copy
section: components
cssPrefix: pf-v6-c-clipboard-copy
propComponents: ['ClipboardCopy', 'ClipboardCopyButton']
ouia: true
---

import { Fragment, useEffect, useState } from 'react';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

## Examples

### Basic

```ts file="./ClipboardCopyBasic.tsx"
```

### Read Only

```ts file="./ClipboardCopyReadOnly.tsx"
```

### Expanded

```ts file="./ClipboardCopyExpanded.tsx"
```

### Read only expanded

```ts file="./ClipboardCopyReadOnlyExpanded.tsx"
```

### Read only expanded by default

```ts file="./ClipboardCopyReadOnlyExpandedByDefault.tsx"
```

### Expanded with array

```ts file="./ClipboardCopyExpandedWithArray.tsx"
```

### JSON object (wrap code with pre)

```ts file="./ClipboardCopyJSONObject.tsx"
```

### Inline compact

```ts file="./ClipboardCopyInlineCompact.tsx"
```

### Inline compact code

```ts file="./ClipboardCopyInlineCompactCode.tsx"
```

### Inline compact with additional action

```ts file="./ClipboardCopyInlineCompactWithAdditionalAction.tsx"
```

### Inline compact in sentence

```ts file="./ClipboardCopyInlineCompactInSentence.tsx"
```

### Inline compact with truncation

You can control the truncation for an `inline-compact` variant by passing the `truncation` property. The following example shows the different ways to use the property: passing a boolean will apply default truncation, while passing an object of `TruncateProps` offers more fine-tuned control over the truncation behavior.

```ts file="./ClipboardCopyInlineCompactTruncation.tsx"
```
