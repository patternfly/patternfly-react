---
id: Label
section: components
cssPrefix: pf-c-label
propComponents: ['Label', 'LabelGroup']
---

import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import { Link } from '@reach/router';

## Label examples

### Filled

```ts file="LabelFilled.tsx"
```

### Outline

```ts file="LabelOutline.tsx"
```

### Compact

```ts file="LabelCompact.tsx"
```

### Router link

```ts file="LabelRouterLink.tsx"
```

### Editable

Click or press either enter or space to begin editing a label. After editing, click outside the label or press enter again to complete the edit. To cancel an edit, press escape. 

You can also customize any Label's close button aria-label as this example shows with `closeBtnAriaLabel`.

```ts file="LabelEditable.tsx" isBeta
```

## Label group examples

Use a label group when you have multiple labels to display at once. Label groups can be oriented either horizontally or vertically and can optionally be named and be dismissable. You may also make the label group editable to allow users to edit an existing label or add a new label.

### Basic

```ts file="LabelGroupBasic.tsx"
```

### Overflow

```ts file="LabelGroupOverflow.tsx"
```

### Category

```ts file="LabelGroupCategory.tsx"
```

### Category removable

```ts file="LabelGroupCategoryRemovable.tsx"
```

### Vertical category overflow removable

```ts file="LabelGroupVerticalCategoryOverflowRemovable.tsx"
```

### Editable labels

```ts isBeta file="LabelGroupEditableLabels.tsx"
```

### Editable labels with add button

For additional documentation that showcases adding a new label, see [label group demos](/components/label/react-demos).

```ts isBeta file="LabelGroupEditableAdd.tsx"
```
