---
id: Open UI Automation
section: developer-resources
---

## About Open UI Automation

Open UI Automation (OUIA) is a specification of certain key guidelines to follow when creating a new
web framework or application. The goal is to ease the burden of individuals wishing to create and
maintain automated testing environments. OUIA standartizes some HTML attributes and web page
behaviour. It helps to create trivial and unambigious locators of the elements in the DOM for
various automated test suites.

### Why not to use `id`, `ARIA` etc.?

`ARIA` is designed as an accessibility specification and it doesn't account aspects that are crucial
for automation such as a component type. `id` attribute might be reserved by some frontend code and
there might be restrictions of changing it. Having a separate id attribute makes it application and
framework independent. Developers and testers have a contract that these attributes are designed for
UI automation.

### Specification parts

The following blocks exist in the specification:

* `OUIA:Component` - components and component frameworks;
* `OUIA:Page` - page identification;
* `OUIA:PageSafe` - interaction safety.

The complete description you can find in [https://ouia.readthedocs.io](https://ouia.readthedocs.io).

### OUIA:Component

This part of the specification is designed to cover components in use on pages. Components that are
`OUIA:Component` compliant MUST have the following properties:

* A root level HTML element with a `data-ouia-component-type` attribute describing a unique name
  identifying ALL HTML components that can be controlled with the same code or interactions.
  These identifiers MAY and SHOULD be namespaced when used within a framework, particularly when
  the name is generic. The delimiter between namespace and type name should be a single `/`
  character.
  * e.g. A page that has a special dropdown could choose to name that dropdown as
   `FrameworkA/CustomDropdown`. All instances of this `FrameworkA/CustomDropdown` component
   MUST be expected to be able to be controlled via the same automation.
* An id attribute called `data-ouia-component-id`
  * if there is only one instance of the component on the page at once, it is OPTIONAL
  * if there are multiple instances of a component on the page it MUST be used
  * it MUST be unique within the surrounding context of the component (context may be a
    surrounding component or collection)
  * e.g. A vertical navigation can be expected to only be instantiated once on a page. As such
    it does not need any other identifying factors. Another component type, like a button,
    would be created multiple times on a page and requires some kind of unique identifying id.
  * e.g. An list of items could have tags associated with them. These could be presented in a
    tabular format. Whilst the ids of those tags could be identical, they are also contained
    in rows that make them contextually different. An alternative to this is that the id could
    be prefixed with the item id that it is related to, to create a compound id.
* An attribute called `data-ouia-safe`, which is `True` only when the component is in a static
  state, i.e. no animations are occurring. At all other times, this value MUST be `False`.

[Selected](#list-of-ouia-compliant-components) PatternFly 4 components are `OUIA:Component`
compliant.

### Usage

PatternFly 4 generates `data-ouia-component-type` attribute for selected components automatically
based on the name. For example, for [`Button`](/components/button) `data-ouia-component-type` is
`PF4/Button`. The id of `data-ouia-component-id` attribute is random by default. In order to specify
the concrete id you should add an `ouiaId` prop to the component.

### Example

```js
import React from 'react';
import { Button } from '@patternfly/react-core';

<React.Fragment>
  <Button>Button</Button>
  
  <Button ouiaId="static_id">Button with ouiaId</Button>
</React.Fragment>
```

## List of OUIA compliant components

### react-core package

* Alert
* Breadcrumb
* Button
* Card
* Chip
* ChipGroup
* ContextSelector
* Dropdown
* DropdownItem
* DropdownSeparator
* DropdownToggle
* DropdownToggleCheckbox
* FormSelect
* Menu
* Modal
* ModalContent
* Nav
* NavExpandable
* NavItem
* OptionsMenu
* Pagination
* Radio
* Select
* Switch
* TabButton
* TabContent
* Tabs

### react-table package

* RowWrapper
* Table
* TableComposablw
* Tr
