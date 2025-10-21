---
id: Expandable section
section: components
cssPrefix: pf-v6-c-expandable-section
propComponents: ['ExpandableSection', 'ExpandableSectionToggle']
---

import { useState } from 'react';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

## Examples

### Basic

```ts file="ExpandableSectionBasic.tsx"

```

### Uncontrolled

```ts file="ExpandableSectionUncontrolled.tsx"

```

### Uncontrolled with dynamic toggle text

```ts file="ExpandableSectionUncontrolledDynamicToggleText.tsx"

```

### Uncontrolled with dynamic toggle content (function)

Use `toggleContent` as a function to dynamically render different content based on the expanded state without managing state yourself.

```ts file="ExpandableSectionUncontrolledDynamicToggleFunction.tsx"

```

### Detached

When passing the `isDetached` property into `<ExpandableSection>`, you must also manually pass in the same `toggleId` and `contentId` properties to both `<ExpandableSection>` and `<ExpandableSectionToggle>`. This will link the content to the toggle via ARIA attributes.

By default animations will not be enabled for a detached `<ExpandableSection>`. You must manually pass the `direction` property with an appropriate value based on where the expandable content is rendered. If the expandable content is above the expandable toggle, `direction="up"` must be passed like in this example.

```ts file="ExpandableSectionDetached.tsx"

```

### Disclosure variation

You can pass in the `displaySize="lg"` property for a disclosure variation styling.

```ts file="ExpandableSectionDisclosure.tsx"

```

### Indented expandable content

You can indent the expandable content by passing in the `isIndented` property. This will not affect the expandable toggle.

```ts file="ExpandableSectionIndented.tsx"

```

### With custom toggle content

By using the `toggleContent` prop, you can pass in content other than a simple string such as an icon or a badge. When passing in custom content in this way, you should not pass in any interactive element such as a button.

```ts file="ExpandableSectionCustomToggle.tsx"

```

### Truncate expansion

By passing in `variant="truncate"`, the expandable content will be visible up to a maximum number of lines before being truncated, with the toggle revealing or hiding the truncated content. By default the expandable content will truncate after 3 lines, and this can be customized by also passing in the `truncateMaxLines` prop.

```ts file="ExpandableSectionTruncateExpansion.tsx"

```
