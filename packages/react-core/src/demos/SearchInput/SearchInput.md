---
id: Search input
section: components
---
import { useEffect, useRef, useState } from 'react';
import {
Button,
Card,
CardBody,
CardFooter,
DatePicker,
Form,
FormGroup,
Grid,
GridItem,
Menu,
MenuContent,
MenuItem,
MenuList,
MenuToggle,
Popper,
SearchInput,
TextInput
} from '@patternfly/react-core';
import { words } from './words.js';

## Demos

### Search with autocomplete

This demo handles building the advanced search form using the composable Menu, and the `SearchInput`'s `hint` prop.
It also demonstrates wiring up the appropriate keyboard interactions, focus management, and general event handling.

```ts file="examples/SearchInputAutocomplete.tsx"

```

### Composable advanced search

This demo handles building the advanced search form using the composable Menu, as well as wiring up a
select using the composable Menu and MenuToggle components. This demo also demonstrates wiring up the appropriate
keyboard interactions, focus management, and general event handling.

Note: This demo and its handling of 'date within' and a date picker is modeled after the gmail advanced search form.

```ts file="examples/SearchInputAdvancedComposable.tsx"

```
