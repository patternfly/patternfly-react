---
id: Pagination
section: components
cssPrefix: pf-v6-c-pagination
propComponents: ['Pagination', PaginationTitles, PerPageOptions, PaginationToggleTemplateProps]
ouia: true
---

import { Fragment, useState, useRef, useLayoutEffect } from 'react';

## Examples

### Top

```ts file="./PaginationTop.tsx"

```

### Bottom

```ts file="./PaginationBottom.tsx"

```

### Indeterminate

By not passing `itemCount` and passing `toggleTemplate` you can customize the toggle with text.

```ts file="./PaginationIndeterminate.tsx"

```

### Disabled

```ts file="./PaginationDisabled.tsx"

```

### No items

```ts file="./PaginationNoItems.tsx"

```

### One page

```ts file="./PaginationOnePage.tsx"

```

### Compact

```ts file="./PaginationCompact.tsx"

```

### Offset

```ts file="./PaginationOffset.tsx"

```

### Sticky

```ts isFullscreen file="./PaginationSticky.tsx"

```

### Dynamic sticky top

A pagination may alternatively be made sticky with two properties: `isStickyBase` and `isStickyStuck`, which allows separate control of the sticky position and sticky styling respectively. In this example, `isStickyStuck` is only applied when the pagination is not at the top of the scroll parent container.

```ts isFullscreen file="./PaginationDynamicStickyTop.tsx"

```

### Dynamic sticky bottom

A bottom pagination may alternatively be made sticky with two properties: `isStickyBase` and `isStickyStuck`, which allows separate control of the sticky position and sticky styling respectively. In this example, `isStickyStuck` is only applied when the pagination is not at the bottom of the scroll parent container.

```ts isFullscreen file="./PaginationDynamicStickyBottom.tsx"

```

### Inset

```ts file="./PaginationInset.tsx"

```
