---
id: Expandable section
section: components
cssPrefix: pf-v5-c-expandable-section
propComponents: ['ExpandableSection', 'ExpandableSectionToggle']
---

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

### Detached

When passing the `isDetached` property into `<ExpandableSection>`, you must also manually pass in the same `toggleId` and `contentId` properties to both `<ExpandableSection>` and `<ExpandableSectionToggle>`. This will link the content to the toggle via ARIA attributes.

```ts file="ExpandableSectionDetached.tsx"

```

### Disclosure variation

```ts file="ExpandableSectionDisclosure.tsx"

```

### Indented

```ts file="ExpandableSectionIndented.tsx"

```

### With custom toggle content

By using the `toggleContent` prop, you can pass in content other than a simple string such as an icon or a badge. When passing in custom content in this way, you should not pass in any interactive element such as a button.

```ts file="ExpandableSectionCustomToggle.tsx"

```

### Truncate expansion

By passing in `variant="truncate"`, the expandable content will be visible up to a maximum number of lines before being truncated, with the toggle revealing or hiding the truncated content. By default the expandable content will truncate after 3 lines, and this can be customized by also passing in the `truncateMaxLines` prop.

```ts file="ExpandableSectionTruncateExpansion.tsx" isBeta

```
