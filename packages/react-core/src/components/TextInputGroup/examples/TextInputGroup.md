---
id: Text input group
section: components
cssPrefix: pf-v5-c-text-input-group
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

When you disable a text input group, add an `aria-label` to provide context to assistive technologies.

```ts file="./TextInputGroupDisabled.tsx"
```

### With icon and clear button

To help users identify the purpose of an input group, you can add an icon. To do this, import your icon and pass it to `icon` within `<TextInputGroupMain>`.

You can also add a clear button that allows users remove their previous input. Pass your button into `<TextInputGroupUtilities>`.

```ts file="./TextInputGroupUtilitiesAndIcon.tsx"
```

### With filters

When a text input group is used within a data view, like a table, you can nest filter labels within the group. To do this, pass a `<LabelGroup>` to `<TextInputGroupMain>`, with all of the labels that a user has selected. Users can interact with these labels as needed.

```ts file="./TextInputGroupFilters.tsx"
```
