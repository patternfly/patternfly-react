---
id: 'Search input'
section: components
cssPrefix: 'pf-c-search-input'
propComponents: ['SearchInput', 'SearchAttribute']
beta: true
---

import { ExternalLinkSquareAltIcon } from '@patternfly/react-icons';

## Examples

### Basic

```ts file='./SearchInputBasic.tsx'
```

### Match with result count

```ts file='./SearchInputWithResultCount.tsx'
```

### Match with navigable options

```ts file='./SearchInputWithNavigableOptions.tsx'
```

### With submit button

```ts file='./SearchInputWithSubmitButton.tsx'
```

### Focus search input using ref

```ts file='./SearchInputFocusSearch.tsx'
```

### Advanced

The search input component can be used to dynamically build a one to one attribute-value advanced search.
Using the `attributes` prop alongside the `advancedSearchDelimiter` will expose this functionality, as demonstrated in
the following example. The search input component can also be used as a composable component and paired with a Popper 
or other elements to build a completely custom advanced search form. This feature is demonstrated 
in the search input's <a href="/components/search-input/react-demos">react demos</a>.

```ts file='./SearchInputAdvanced.tsx'
```
