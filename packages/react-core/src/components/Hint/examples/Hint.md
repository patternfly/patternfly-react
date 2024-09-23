---
id: Hint
section: components
cssPrefix: pf-v6-c-hint
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

### With actions

You can add actions to a hint to allow users to respond to suggestions and initiate any related processes.

When a `<Hint>` contains `actions`, a negative margin is applied to the actions so that they are better aligned with the hint title. For larger-sized titles or non-plain actions (such as a button), remove this negative margin by setting `hasNoActionsOffset` to `true`.

To illustrate this behavior, select the "actions hasNoActionsOffset" checkbox in the following example.

```ts file="HintActionsWithNoOffset.tsx"

```
