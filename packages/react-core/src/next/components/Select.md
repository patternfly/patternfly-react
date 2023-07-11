---
id: Select
section: components
subsection: menus
cssPrefix: pf-v5-c-select
propComponents:
  ['Select', 'SelectOption', 'SelectGroup', 'SelectList', 'MenuToggle', 'SelectToggleProps', 'SelectPopperProps']
ouia: true
---

import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

## Examples

### Single select
Single select dropdown menus allow your users to select a single option from a list of options. To change the name of the options, alter the ‘itemId’ property.

The initial text is listed in the select box to guide what options the user can select from. To change this text, alter the ‘React.useState’ property.

You can also add more options by adding `<SelectOption>`. You can follow the format of the preexisting options to ensure proper application.
```ts file="./SelectBasic.tsx"

```

### Option variations

Showcases different option variants and customizations that are commonly used in a select menu. For a more complete list, see the [Menu documentation](/components/menus/menu).

```ts file="./SelectOptionVariations.tsx"

### Grouped single select
You can change a single select component to have multiple groups. To do this, you have to add the component `<SelectGroup>` and list the desired options below.

You can also change the text above the group by inserting the property `label` and the desired name of the group by altering `<SelectGroup>`.
```ts file="./SelectGrouped.tsx"

```

### Checkbox select
You can use a checkbox select to allow your users to check multiple options in one select component. You can change the name of each checkbox by altering the `<SelectOption>` component. You can also change the name of the initial prompt in `<MenuToggle>`.

You also have the option to disable one of the checkmark options. To do this, you can pass the variable `isDisabled` inside of `<SelectOption>`
```ts file="./SelectCheckbox.tsx"

```

### Typeahead
A typeahead allows your users to type their response to narrow it down from the list of options. You can change the name of the checks by altering both the `ItemId` and `children` properties.

You can also change the name of the initial prompt under `placeholder` in `<MenuToggle>`.
```ts file="./SelectTypeahead.tsx"

```

### Typeahead with create option

```ts file="./SelectTypeaheadCreatable.tsx"

```

### Multiple typeahead
A typeahead can also be used to select multiple options from its list.
```ts file="./SelectMultiTypeahead.tsx"

```

### Typeahead with create option

```ts file="./SelectMultiTypeaheadCreatable.tsx"

```

### Multiple typeahead with checkboxes

```ts file="./SelectMultiTypeaheadCheckbox.tsx"

```

### View more

```ts file="./SelectViewMore.tsx"

```

### Footer

```ts file="./SelectFooter.tsx"

```
