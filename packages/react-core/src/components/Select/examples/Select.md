---
id: Select
section: components
subsection: menus
cssPrefix: pf-v6-c-select
propComponents:
  ['Select', 'SelectOption', 'SelectGroup', 'SelectList', 'MenuToggle', 'SelectToggleProps', 'SelectPopperProps']
ouia: true
---

import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

## Examples

Select builds off of the menu component suite to adapt commonly used properties and functions to create a select menu. See the [menu documentation](/components/menus/menu) for a full list of properties that may be used to further customize a select menu. View the [custom menu examples](/components/menus/custom-menus) to see examples of fully functional select menus.

For use cases that do not require a lot of customization, there are various template components available to use in the `@react-templates` package. These templates have a streamlined API and logic, making them easier to set up and use, but are limited in scope and flexibility. See the [templates page](/components/menus/select/react-templates) for details.

### Single select

To let users select a single item from a list, use a single select menu.

You can add multiple `<SelectOption>` components to build out a list of menu items. For each select option, pass a relevant option label to the `value` property.

To disable the select menu toggle, use the `isDisabled` property. In the following example, select the checkbox to observe this behavior.

```ts file="./SelectBasic.tsx"

```

### Select option variants

The following example showcases different option variants and customizations that are commonly used in a select menu.

To create these variants, you can pass different properties into a `<SelectOption>` component.

This example provides examples of:

- An option with a description, which is created by using the `description` property.
- An option with a link, which is created by passing a URL into the `to` property. For external links, use the `isExternalLink` property so that the option is styled with an outbound link icon.
- An option with an icon, which is created by using the `icon` property.
- An option that is disabled by using the `isDisabled` property.

```ts file="./SelectOptionVariations.tsx"

```

### With grouped items

To group related select options together, use 1 or more `<SelectGroup>` components and title each group using the `label` property.

```ts file="./SelectGrouped.tsx"

```

### With validation

To create a toggle with a status, pass in `status` to the `MenuToggle`. The default icon associated with each status may be overridden by using the `statusIcon` property.

When the status value is "warning" or "danger", you must include helper text that conveys what is causing the warning/error.

```ts file="./SelectValidated.tsx"

```

### Checkbox select

To let users select multiple list options via checkbox input, use a checkbox select.

To create a checkbox select, pass `role="menu"` to the `<Select>`, and `hasCheckbox` into each `<SelectOption>` component. To indicate that an option is selected, use the `isSelected` property.

By default, the menu toggle will display a badge to indicate the number of items that a user has selected.

```ts file="./SelectCheckbox.tsx"

```

### Typeahead
Typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.

Typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.

To make a typeahead, pass `variant=typeahead` into the `<MenuToggle>` component and link an `onClick` function to the `<TextInputGroupMain>` component.

Typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.

To make a typeahead, pass `variant=typeahead` into the `<MenuToggle>` component and link an `onClick` function to the `<TextInputGroupMain>` component.

```ts file="./SelectTypeahead.tsx"

```

### Typeahead with create option
If a user enters a value into a typeahead select menu that does not exist, you can allow them to create an option of that value. 

If a user enters a value into a typeahead select menu that does not exist, you can allow them to create an option of that value.

To enable the creation ability, pass a predetermined `value` into a `<SelectOption>` component. You can use the `placeholder` property to change the default text shown in the text input.

The following example outlines the code implementation required to create a working typeahead menu that allows for creation.

If a user enters a value into a typeahead select menu that does not exist, you can allow them to create an option of that value.

To enable the creation ability, pass a predetermined `value` into a `<SelectOption>` component. You can use the `placeholder` property to change the default text shown in the text input.

The following example outlines the code implementation required to create a working typeahead menu that allows for creation.

```ts file="./SelectTypeaheadCreatable.tsx"

```

### Multiple typeahead with chips
A multiple typeahead can be used to allow users to select multiple options from a list. Additionally, you can render a chip group to be placed in the select toggle.

A multiple typeahead can be used to allow users to select multiple options from a list. Additionally, you can render a chip group to be placed in the select toggle.

When more items than the allowed limit are selected, overflowing items will be hidden under a "more" button. The following example hides items after more than 3 are selected. To show hidden items, select the “more” button. Select "show less" to hide extra items again.

A multiple typeahead can be used to allow users to select multiple options from a list. Additionally, you can render a chip group to be placed in the select toggle.

When more items than the allowed limit are selected, overflowing items will be hidden under a "more" button. The following example hides items after more than 3 are selected. To show hidden items, select the “more” button. Select "show less" to hide extra items again.

```ts file="./SelectMultiTypeahead.tsx"

```

### Multiple typeahead with create option
If the text that is entered into a typeahead doesn't match a menu item, users can choose to create a new option that matches the text input. You can also combine this create functionality with a chip group to display created items as chips."

If the text that is entered into a typeahead doesn't match a menu item, users can choose to create a new option that matches the text input. You can also combine this create functionality with a chip group to display created items as chips."

If the text that is entered into a typeahead doesn't match a menu item, users can choose to create a new option that matches the text input. You can also combine this create functionality with a chip group to display created items as chips."

```ts file="./SelectMultiTypeaheadCreatable.tsx"

```

### Multiple typeahead with checkboxes
By default, a multiple typeahead select allows you to select multiple menu items, placing a checkmark beside selected items. Like basic checkbox select menus, you can add checkboxes to your menu items. This approach may be more accurate and comprehensive for more complex menu scenarios like filtering.

By default, a multiple typeahead select allows you to select multiple menu items, placing a checkmark beside selected items. Like basic checkbox select menus, you can add checkboxes to your menu items. This approach may be more accurate and comprehensive for more complex menu scenarios like filtering.

By default, a multiple typeahead select allows you to select multiple menu items, placing a checkmark beside selected items. Like basic checkbox select menus, you can add checkboxes to your menu items. This approach may be more accurate and comprehensive for more complex menu scenarios like filtering.

```ts file="./SelectMultiTypeaheadCheckbox.tsx"

```

### With view more

To reduce the processing load for long select lists, you can add a "View more" action to load additional items.

The following example shows 3 items before the "View more" link, but you can adjust the number of visible items for your use case.

```ts file="./SelectViewMore.tsx"

```

### With a footer

You can add a `<MenuFooter>` component to a select menu to hold additional actions that users can take on menu items, through elements such as link buttons. A footer will be placed beneath a divider at the end of the select menu.

```ts file="./SelectFooter.tsx"

```
