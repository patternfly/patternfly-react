---
id: Label
section: components
cssPrefix: ['pf-v6-c-label', 'pf-v6-c-label-group']
propComponents: ['Label', 'LabelGroup']
---

import { Fragment, useEffect, useRef, useState } from 'react';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import './Label.css';

## Examples

### Filled labels

```ts file="LabelFilled.tsx"

```

### Outlined labels

```ts file="LabelOutline.tsx"

```

### Compact labels

```ts file="LabelCompact.tsx"

```

### Label with custom render

Labels may be passed a custom renderer to display customized content or for use with router components. When using a custom render, `isClickable` may also be passed to remove the underline text decoration of anchors or router links.

```ts file="LabelCustomRender.tsx"

```

### Editable labels

Click or press either enter or space to begin editing a label. After editing, click outside the label or press enter again to complete the edit. To cancel an edit, press escape.

You can also customize any Label's close button aria-label as this example shows with `closeBtnAriaLabel`.

```ts file="LabelEditable.tsx"

```

### Basic label group

Use a label group when you have multiple labels to display at once.

```ts file="LabelGroupBasic.tsx"

```

### Label group with overflow

An overflow label can be added to the end of a group to save space when the number of labels exceeds some threshold. Click the overflow label to expand and collapse the group.

```ts file="LabelGroupOverflow.tsx"

```

### Label group with categories

Use a category name to organize a set of labels

```ts file="LabelGroupCategory.tsx"

```

### Label group with removable categories

```ts file="LabelGroupCategoryRemovable.tsx"

```

### Vertical label group

Labels in a group can also be stacked vertically. This example shows a verical label group with a category name and overflow.

```ts file="LabelGroupVerticalCategoryOverflowRemovable.tsx"

```

### Editable label group

```ts file="LabelGroupEditableLabels.tsx"

```

### Editable label group with add button

The contents of a label group can be modified by removing labels or adding new ones using the add button. For additional documentation that showcases adding a new label, see [label demos](/components/label/react-demos).

```ts file="LabelGroupEditableAdd.tsx"

```

## Using router links

Router links can be used for in-app linking in React environments to prevent page reloading. To use a `Link` component from a router package, you can use the `render` property of the `Label`:

```nolive
<Label
  render={({ className, content, componentRef }) => (
    <Link to="/" className={className} innerRef={componentRef}>
      {content}
    </Link>
  )}
>
  Label router link
</Label>
```
