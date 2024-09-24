---
id: Text input group
section: components
cssPrefix: pf-v6-c-text-input-group
propComponents: ['TextInputGroup', 'TextInputGroupMain', 'TextInputGroupUtilities']
---

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

## Examples

### Basic text input group 

A basic text input group updates its contents as users enter text.

```ts file="./TextInputGroupBasic.tsx"

```

### Disabled text input group

To prevent users from making edits to a text input group, you can disable it using `isDisabled`.

```ts file="./TextInputGroupDisabled.tsx"

```

### With icon and utilities

To help users identify the purpose of an input group, you can add an icon. To do this, import your icon and pass it to `icon` within `<TextInputGroupMain>`.

You can also add additional actions or utilities via `<TextInputGroupUtilities>`. The following example includes a clear button that allows users to remove their previous input. 

```ts file="./TextInputGroupUtilitiesAndIcon.tsx"

```

### With validation

You can add a validation status to a `<TextInputGroup>` by passing the `validated` property with a value of either "success", "warning", or "error".

```ts file="./TextInputGroupWithStatus.tsx"

```

### With filters

When a text input group is used within a data view, like a table, you can nest filter labels within the group. To do this, pass a `<LabelGroup>` to `<TextInputGroupMain>`, with all of the labels that a user has selected. Users can interact with these labels as needed.

```ts file="./TextInputGroupFilters.tsx"

```
