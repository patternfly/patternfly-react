---
id: Hint
section: components
cssPrefix: null
propComponents: ['Hint', 'HintTitle', 'HintBody', 'HintFooter']
---

import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

## Examples

### Basic with title

```ts file="HintBasicWithTitle.tsx"

```

### Basic without title

```ts file="HintBasicWithoutTitle.tsx"

```

### Basic without no actions offset

The `actions` property for `<Hint>` can optionally be combined with the `hasNoOffset` property, which is `false` by default. When `hasNoOffset` is `false`, a negative margin is applied to help align default-sized hint titles with hint actions.

You may use `hasNoOffset` to remove this negative margin, which better aligns hint actions in implementations that use large hint titles, for example.

Select the "actions hasNoOffset" checkbox in the example below to illustrate this behavior.

```ts file="HintActionsWithNoOffset.tsx"

```
