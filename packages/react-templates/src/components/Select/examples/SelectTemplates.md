---
id: Select
section: components
subsection: menus
template: true
beta: true
propComponents: ['SimpleSelect', 'CheckboxSelect', 'TypeaheadSelect']
---

Note: Templates live in their own package at [@patternfly/react-templates](https://www.npmjs.com/package/@patternfly/react-templates)!

For custom use cases, please see the select component suite from [@patternfly/react-core](https://www.npmjs.com/package/@patternfly/react-core).

import { Checkbox } from '@patternfly/react-core';
import { SimpleSelect, CheckboxSelect, TypeaheadSelect, MultiTypeaheadSelect } from '@patternfly/react-templates';

## Select template examples

### Simple

```ts file="SimpleSelectDemo.tsx"

```

### Checkbox

```ts file="CheckboxSelectDemo.tsx"

```

### Typeahead

Typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.

Selection can be given by either the `selected` property or by setting `isSelected` on the option that is currently selected.
```ts file="TypeaheadSelectDemo.tsx"

```

### Multi-Typeahead

```ts file="MultiTypeaheadSelectDemo.tsx"

```
