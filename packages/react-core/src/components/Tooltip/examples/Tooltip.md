---
id: Tooltip
section: components
cssPrefix: pf-c-tooltip
propComponents: ['Tooltip']
---

import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import './TooltipExamples.css';

## Examples

### Basic

```ts file="./TooltipBasic.tsx"
```

### Tooltip react ref

```ts file="./TooltipReactRef.tsx"
```

### Tooltip selector ref

```ts file="./TooltipSelectorRef.tsx"
```

### On icon with dynamic content

When the tooltip is used as a wrapper and its content will dynamically update, the `aria` prop should have a value of "none" passed in. This prevents assistive technologies from announcing the tooltip contents more than once. Additionally, the `aria-live` prop should have a value of "polite" passed in, in order for assistive technologies to announce when the tooltip contents gets updated.

When using a React or selector ref with a tooltip that has dynamic content, the `aria` and `aria-live` props do not need to be manually passed in.

```ts file="./TooltipIcon.tsx"
```

### Options

```ts file="./TooltipOptions.tsx"
```
