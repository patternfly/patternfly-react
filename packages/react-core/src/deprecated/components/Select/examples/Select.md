---
id: Select
section: components
subsection: menus
cssPrefix: pf-v5-c-select
propComponents: ['Select', 'SelectOption', 'SelectGroup', 'SelectOptionObject', 'SelectViewMoreObject']
ouia: true
deprecated: true
---

import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

## Examples

### Single select

To let users select a single item from a list, use a single select list.

A select list may use other properties for additional customization. Select each checkbox in the example below to visualize the following behavior:

- To prevent a toggle click from opening a select list, use the `isDisabled` property.
- To adjust the direction a select menu opens, use the `direction` property. The menu in the following example expands upwards. By default, select lists open upwards.
- To add an icon to a select toggle, use the `toggleIcon` property.

```js
import React from 'react';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import { Checkbox, Divider } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant, SelectDirection } from '@patternfly/react-core/deprecated';

class SingleSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="Select a title" isPlaceholder />,
      <SelectOption key={1} value="Mr" />,
      <SelectOption key={2} value="Miss" />,
      <SelectOption key={3} value="Mrs" />,
      <SelectOption key={4} value="Ms" />,
      <Divider component="li" key={5} />,
      <SelectOption key={6} value="Dr" />,
      <SelectOption key={7} value="Other" />
    ];

    this.toggleRef = React.createRef();

    this.state = {
      isToggleIcon: false,
      isOpen: false,
      selected: null,
      isDisabled: false,
      direction: SelectDirection.down
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
        this.toggleRef.current.focus();
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.toggleDisabled = checked => {
      this.setState({
        isDisabled: checked
      });
    };

    this.setIcon = checked => {
      this.setState({
        isToggleIcon: checked
      });
    };

    this.toggleDirection = () => {
      if (this.state.direction === SelectDirection.up) {
        this.setState({
          direction: SelectDirection.down
        });
      } else {
        this.setState({
          direction: SelectDirection.up
        });
      }
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;
    const titleId = 'title-id-1';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          toggleRef={this.toggleRef}
          toggleIcon={isToggleIcon && <CubeIcon />}
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isDisabled={isDisabled}
          direction={direction}
          ouiaId="SingleSelect"
        >
          {this.options}
        </Select>
        <Checkbox
          label="isDisabled"
          isChecked={this.state.isDisabled}
          onChange={(_event, checked) => this.toggleDisabled(checked)} 
          aria-label="disabled checkbox"
          id="toggle-disabled"
          name="toggle-disabled"
        />
        <Checkbox
          label="Expands up"
          isChecked={direction === SelectDirection.up}
          onChange={this.toggleDirection}
          aria-label="direction checkbox"
          id="toggle-direction"
          name="toggle-direction"
        />
        <Checkbox
          label="Show icon"
          isChecked={isToggleIcon}
          onChange={(_event, checked) => this.setIcon(checked)} 
          aria-label="show icon checkbox"
          id="toggle-icon"
          name="toggle-icon"
        />
      </div>
    );
  }
}
```

### With item descriptions

To give more context to a `<SelectOption>` in a list, use the `description` property.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class SingleSelectDescription extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: 'Mr', disabled: false },
      { value: 'Miss', disabled: false },
      { value: 'Mrs', disabled: false },
      { value: 'Ms', disabled: false },
      { value: 'Dr', disabled: false },
      { value: 'Other', disabled: false }
    ];

    this.toggleRef = React.createRef();

    this.state = {
      isOpen: false,
      selected: null,
      isDisabled: false
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
        this.toggleRef.current.focus();
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;
    const titleId = 'select-descriptions-title';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          variant={SelectVariant.single}
          placeholderText="Select an option"
          aria-label="Select Input with descriptions"
          onToggle={this.onToggle}
          toggleRef={this.toggleRef}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isDisabled={isDisabled}
        >
          {this.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              isPlaceholder={option.isPlaceholder}
              description="This is a description"
            />
          ))}
        </Select>
      </div>
    );
  }
}
```

### With grouped items

To group related select options together, use 1 or more `<SelectGroup>` components and title each group using the `label` property.

```js
import React from 'react';
import { Divider } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core/deprecated';

class GroupedSingleSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: null
    };

    this.toggleRef = React.createRef();

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      this.setState({
        selected: selection,
        isOpen: false
      });
      this.toggleRef.current.focus();
    };

    this.clearSelection = () => {
      this.setState({
        selected: null
      });
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs maintenance" />
      </SelectGroup>,
      <Divider key="divider" />,
      <SelectGroup label="Vendor names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'grouped-single-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Grouped Checkbox Title
        </span>
        <Select
          variant={SelectVariant.single}
          toggleRef={this.toggleRef}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status/vendor"
          aria-labelledby={titleId}
          isGrouped
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Favoriting items

To allow users to favorite items in a select list, use the `onFavorite` callback. When users click the favorite button, the item is duplicated and placed in a separated group at the top of the menu. To change the name of the group use the `favoritesLabel` property.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core/deprecated';

class FavoritesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: null,
      favorites: []
    };

    this.onToggle =  (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.onFavorite = (itemId, isFavorite) => {
      if (isFavorite) {
        this.setState({
          favorites: this.state.favorites.filter(id => id !== itemId)
        });
      } else
        this.setState({
          favorites: [...this.state.favorites, itemId]
        });
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption id={'option-1'} key={0} value="Running" description="This is a description." />
        <SelectOption id={'option-2'} key={1} value="Stopped" />
        <SelectOption id={'option-3'} key={2} value="Down (disabled)" isDisabled />
        <SelectOption id={'option-4'} key={3} value="Degraded" />
        <SelectOption id={'option-5'} key={4} value="Needs maintenance" />
      </SelectGroup>,
      <SelectGroup label="Vendor names" key="group2">
        <SelectOption id={'option-6'} key={5} value="Dell" />
        <SelectOption id={'option-7'} key={6} value="Samsung" description="This is a description." />
        <SelectOption id={'option-8'} key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];
  }

  render() {
    const { isOpen, selected, favorites } = this.state;
    const titleId = 'grouped-single-select-id';
    return (
      <Select
        variant={SelectVariant.typeahead}
        typeAheadAriaLabel="Select value"
        onToggle={this.onToggle}
        onSelect={this.onSelect}
        selections={selected}
        isOpen={isOpen}
        placeholderText="Favorites"
        aria-labelledby={titleId}
        isGrouped
        onFavorite={this.onFavorite}
        favorites={favorites}
        onClear={this.clearSelection}
      >
        {this.options}
      </Select>
    );
  }
}
```

### Validated selections

To validate selections that users make, pass a validation state to the `validated` property. Validating selections can let users know if the selections they make would cause issues or errors.

The example below passes an "error" state when you choose “select a title”, a "warning" state when you choose "other", and a "success" state for any other item selected from the menu.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class ValidatedSelect extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="Select a title" isPlaceholder />,
      <SelectOption key={1} value="Mr" />,
      <SelectOption key={2} value="Miss" />,
      <SelectOption key={3} value="Mrs" />,
      <SelectOption key={4} value="Ms" />,
      <SelectOption key={5} value="Dr" />,
      <SelectOption key={6} value="Other" />
    ];

    this.toggleRef = React.createRef();

    this.state = {
      isOpen: false,
      selected: null,
      isDisabled: false,
      validated: 'default'
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      let validatedState = 'success';
      if (isPlaceholder) {
        this.clearSelection();
        validatedState = 'error';
      } else {
        if (selection === 'Other') {
          validatedState = 'warning';
        } else {
          validatedState = 'success';
        }
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
      this.setState({
        validated: validatedState
      });
      this.toggleRef.current.focus();
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction, isToggleIcon, validated } = this.state;
    const titleId = 'select-validated-title';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          variant={SelectVariant.single}
          toggleRef={this.toggleRef}
          placeholderText="Select an option"
          aria-label="Select Input with validation"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isDisabled={isDisabled}
          validated={validated}
          aria-describedby="validated-helper"
          aria-invalid={validated === 'error' ? true : false}
        >
          {this.options}
        </Select>
        <div aria-live="polite" id="validated-helper" hidden>
          {validated}
        </div>
      </div>
    );
  }
}
```

### Styled placeholder text

To add a toggle label to a select, use the `placeholderText` property. The following example displays "Filter by status" in the toggle before a selection is made.

To fade the color of `placeholderText` to gray, use the `hasPlaceholderStyle` property.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

function SelectWithPlaceholderStyle() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  const options = [
    <SelectOption key={0} value="Active" />,
    <SelectOption key={1} value="Cancelled" />,
    <SelectOption key={2} value="Paused" />
  ];

  const onToggle = (_event, isOpen) => setIsOpen(isOpen);

  const onSelect = (event, selection, isPlaceholder) => {
    setSelected(selection);
    setIsOpen(false);
  };

  const clearSelection = () => {
    setSelected(null);
    setIsOpen(false);
  };

  const titleId = 'placeholder-style-select-id';

  return (
    <div>
      <span id={titleId} hidden>
        Placeholder styles
      </span>
      <Select
        variant={SelectVariant.single}
        hasPlaceholderStyle
        aria-label="Select input"
        onToggle={onToggle}
        onSelect={onSelect}
        onClear={clearSelection}
        selections={selected}
        isOpen={isOpen}
        placeholderText="Filter by status"
        aria-labelledby={titleId}
      >
        {options}
      </Select>
    </div>
  );
}
```

### Placeholder select options

To set a `<SelectOption>` as a placeholder, use the `isPlaceholder` property. The following example sets the "Filter by status" as a placeholder so that it is pre-selected.

```js

import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

function SelectWithPlaceholderStyle() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  const options = [
    <SelectOption key={0} value="Filter by status" isPlaceholder />,
    <SelectOption key={1} value="Active" />,
    <SelectOption key={2} value="Cancelled" />,
    <SelectOption key={3} value="Paused" />
  ];

  const onToggle = (_event, isOpen) => setIsOpen(isOpen);

  const onSelect = (event, selection, isPlaceholder) => {
    setSelected(selection);
    setIsOpen(false);
  };

  const clearSelection = () => {
    setSelected(null);
    setIsOpen(false);
  };

  const titleId = 'placeholder-style-select-option-id';

  return (
    <div>
      <span id={titleId} hidden>
        Placeholder styles - select option
      </span>
      <Select
        variant={SelectVariant.single}
        hasPlaceholderStyle
        aria-label="Select input"
        onToggle={onToggle}
        onSelect={onSelect}
        onClear={clearSelection}
        selections={selected}
        isOpen={isOpen}
        aria-labelledby={titleId}
      >
        {options}
      </Select>
    </div>
  );
}
```

### With a footer

You can add a `footer` to a `<Select>` list to hold actions that users can take on menu items.

```js
import React from 'react';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import { Divider, Button } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant, SelectDirection } from '@patternfly/react-core/deprecated';

class SelectWithFooter extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="Select a title" isPlaceholder />,
      <SelectOption key={1} value="Mr" />,
      <SelectOption key={2} value="Miss" />,
      <SelectOption key={3} value="Mrs" />,
      <SelectOption key={4} value="Ms" />,
      <Divider component="li" key={5} />,
      <SelectOption key={6} value="Dr" />,
      <SelectOption key={7} value="Other" />
    ];

    this.toggleRef = React.createRef();

    this.state = {
      isToggleIcon: false,
      isOpen: false,
      selected: null,
      isDisabled: false,
      direction: SelectDirection.down
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
        this.toggleRef.current.focus();
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;
    const titleId = 'title-id-footer';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          toggleIcon={isToggleIcon && <CubeIcon />}
          toggleRef={this.toggleRef}
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isDisabled={isDisabled}
          direction={direction}
          footer={
            <>
              <Button variant="link" isInline>
                Action
              </Button>
            </>
          }
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### With view more

To reduce the processing load for long select lists, replace overflow items with a "View more" link at the bottom of the select menu.

Adjust the number of items shown above the "View more" link with the `numOptions` property. The following example passes 3 items into this property.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class SelectViewMore extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="Select a title" isPlaceholder />,
      <SelectOption key={1} value="Mr" />,
      <SelectOption key={2} value="Miss" />,
      <SelectOption key={3} value="Mrs" />,
      <SelectOption key={4} value="Ms" />,
      <SelectOption key={5} value="Dr" />,
      <SelectOption key={6} value="Other" />
    ];

    this.toggleRef = React.createRef();

    this.state = {
      isOpen: false,
      selected: null,
      numOptions: 3,
      isLoading: false
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
        this.toggleRef.current.focus();
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.simulateNetworkCall = callback => {
      setTimeout(callback, 2000);
    };

    this.onViewMoreClick = () => {
      // Set select loadingVariant to spinner then simulate network call before loading more options
      this.setState({ isLoading: true });
      this.simulateNetworkCall(() => {
        const newLength =
          this.state.numOptions + 3 <= this.options.length ? this.state.numOptions + 3 : this.options.length;
        this.setState({ numOptions: newLength, isLoading: false });
      });
    };
  }

  render() {
    const { isOpen, selected, isToggleIcon, numOptions, loadingVariant, isLoading } = this.state;
    const titleId = 'title-id-view-more';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          variant={SelectVariant.single}
          toggleRef={this.toggleRef}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          {...(!isLoading &&
            numOptions < this.options.length && {
              loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }
            })}
          {...(isLoading && { loadingVariant: 'spinner' })}
        >
          {this.options.slice(0, numOptions)}
        </Select>
      </div>
    );
  }
}
```

### Checkbox select

To let users select multiple list options via checkbox input, use a checkbox select. To create a checkbox select, pass `variant={SelectVariant.checkbox}` into the `<Select>` component.

By default, a badge is displayed in the menu toggle that indicates the number of items a user has selected.

```js
import React from 'react';
import { Divider } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class CheckboxSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectOption key={0} value="Active" description="This is a description" />,
      <SelectOption key={1} value="Cancelled" />,
      <SelectOption key={2} value="Paused" />,
      <Divider key={3} />,
      <SelectOption key={4} value="Warning" />,
      <SelectOption key={5} value="Restarted" />
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Checkbox select with grouped items

You can use groups alongside checkbox input. The item count badge will display the number of items selected across all groups.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core/deprecated';

class GroupedCheckboxSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs maintenance" />
      </SelectGroup>,
      <SelectGroup label="Vendor names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'grouped-checkbox-select-id-1';
    return (
      <div>
        <span id={titleId} hidden>
          Grouped Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          isGrouped
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

###  Checkbox select with custom badge

To change the default badge text for a checkbox select, use the `customBadgeText` property. The following example uses `customBadgeText` to display "all" in the badge once all menu items are selected.

```js
import React from 'react';
import { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core/deprecated';

class FilteringCheckboxSelectInputWithBadging extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: [],
      customBadgeText: 0
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs maintenance" />
      </SelectGroup>,
      <SelectGroup label="Vendor names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({
            selected: prevState.selected.filter(item => item !== selection),
            customBadgeText: this.setBadgeText(prevState.selected.length - 1)
          }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({
            selected: [...prevState.selected, selection],
            customBadgeText: this.setBadgeText(prevState.selected.length + 1)
          }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.onFilter = (_, textInput) => {
      if (textInput === '') {
        return this.options;
      } else {
        let filteredGroups = this.options
          .map(group => {
            let filteredGroup = React.cloneElement(group, {
              children: group.props.children.filter(item => {
                return item.props.value.toLowerCase().includes(textInput.toLowerCase());
              })
            });
            if (filteredGroup.props.children.length > 0) return filteredGroup;
          })
          .filter(newGroup => newGroup);
        return filteredGroups;
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        customBadgeText: this.setBadgeText(0)
      });
    };

    this.setBadgeText = selected => {
      if (selected === 7) {
        return 'All';
      }
      if (selected === 0) {
        return 0;
      }
      return null;
    };
  }

  render() {
    const { isOpen, selected, filteredOptions, customBadgeText } = this.state;
    const titleId = 'checkbox-filtering-custom-badging-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          onFilter={this.onFilter}
          onClear={this.clearSelection}
          isGrouped
          hasInlineFilter
          customBadgeText={customBadgeText}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Checkbox select without selected count

To remove the default item count badge, use the `isCheckboxSelectionBadgeHidden` property.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class CheckboxSelectInputNoBadge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectOption key={0} value="Debug" />,
      <SelectOption key={1} value="Info" />,
      <SelectOption key={2} value="Warn" />,
      <SelectOption key={3} value="Error" />
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'checkbox-no-badge-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isCheckboxSelectionBadgeHidden
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Checkbox select with item counts

To show users the number of items that a `<SelectOption>` would match, use the `itemCount` property. The numerical value you pass into `itemCount` is displayed to the right of each menu item.

```js
import React from 'react';
import { Divider } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class CheckboxSelectWithCounts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectOption key={0} value="Active" description="This is a description" itemCount={3} />,
      <SelectOption key={1} value="Cancelled" itemCount={1} />,
      <SelectOption key={2} value="Paused" itemCount={15} />,
      <SelectOption key={3} value="Warning" itemCount={2} />,
      <SelectOption key={4} value="Restarted" itemCount={8} />
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'checkbox-select-with-counts-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox With Counts Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Checkbox select with a footer

You can combine a footer with checkbox input to allow users to apply an action to multiple items.

```js
import React from 'react';
import { Button } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class SelectWithFooterCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: [],
      numOptions: 3,
      isLoading: false
    };

    this.toggleRef = React.createRef();

    this.options = [
      <SelectOption key={0} value="Active" description="This is a description" />,
      <SelectOption key={1} value="Cancelled" />,
      <SelectOption key={2} value="Paused" />,
      <SelectOption key={4} value="Warning" />,
      <SelectOption key={5} value="Restarted" />
    ];

    this.onToggle = (_event, isOpen) => {
      this.setState({ isOpen });
    };

    this.onSelect = (event, selection) => {
      this.setState({ selected: selection, isOpen: false }), console.log('selected: ', selection);
      this.toggleRef.current.focus();
    };

    this.onFilter = (_, textInput) => {
      if (textInput === '') {
        return this.options;
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;
    const titleId = 'title-id-footer-checkbox';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          variant={SelectVariant.single}
          toggleRef={this.toggleRef}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          footer={
            <Button variant="link" isInline>
              Action
            </Button>
          }
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Checkbox select with view more

When a "view more" link is used alongside checkbox input, selections that users make prior to clicking "view more" are persisted after the click.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class SelectViewMoreCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: [],
      numOptions: 3,
      isLoading: false
    };

    this.options = [
      <SelectOption key={0} value="Active" description="This is a description" />,
      <SelectOption key={1} value="Cancelled" />,
      <SelectOption key={2} value="Paused" />,
      <SelectOption key={4} value="Warning" />,
      <SelectOption key={5} value="Restarted" />,
      <SelectOption key={6} value="Down" />,
      <SelectOption key={7} value="Disabled" />,
      <SelectOption key={8} value="Needs maintenance " />,
      <SelectOption key={9} value="Degraded " />
    ];

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.simulateNetworkCall = callback => {
      setTimeout(callback, 2000);
    };

    this.onViewMoreClick = () => {
      // Set select loadingVariant to spinner then simulate network call before loading more options
      this.setState({ isLoading: true });
      this.simulateNetworkCall(() => {
        const newLength =
          this.state.numOptions + 3 <= this.options.length ? this.state.numOptions + 3 : this.options.length;
        this.setState({ numOptions: newLength, isLoading: false });
      });
    };
  }

  render() {
    const { isOpen, selected, numOptions, isLoading } = this.state;
    const titleId = 'view-more-checkbox-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox View more check
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          {...(!isLoading &&
            numOptions < this.options.length && {
              loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }
            })}
          {...(isLoading && { loadingVariant: 'spinner' })}
        >
          {this.options.slice(0, numOptions)}
        </Select>
      </div>
    );
  }
}
```

### Filtering with placeholder text

To preload a filter search bar with placeholder text, use the `inlineFilterPlaceholderText` property. The following example preloads the search bar with "Filter by status".

```js
import React from 'react';
import { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core/deprecated';

class FilteringCheckboxSelectInputWithPlaceholder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs maintenance" />
      </SelectGroup>,
      <SelectGroup label="Vendor names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.onFilter = (_, textInput) => {
      if (textInput === '') {
        return this.options;
      } else {
        let filteredGroups = this.options
          .map(group => {
            let filteredGroup = React.cloneElement(group, {
              children: group.props.children.filter(item => {
                return item.props.value.toLowerCase().includes(textInput.toLowerCase());
              })
            });
            if (filteredGroup.props.children.length > 0) return filteredGroup;
          })
          .filter(newGroup => newGroup);
        return filteredGroups;
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };
  }

  render() {
    const { isOpen, selected, filteredOptions } = this.state;
    const titleId = 'checkbox-filtering-with-placeholder-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          onFilter={this.onFilter}
          onClear={this.clearSelection}
          isGrouped
          hasInlineFilter
          inlineFilterPlaceholderText="Filter by status"
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Inline filtering

To allow users to filter select lists using text input, use the `hasInlineFilter` property. Filtering behavior can be further customized with other properties, as shown in the example below. Select each checkbox to visualize the following behavior:

- To persist filter results on blur, use the `isInputValuePersisted` property.
- To persist a filter that a user has searched, use the `isInputFilterPersisted` property.
- To allow users to add new items to a select list, use the `isCreatable` property. When this property is applied and a user searches for an option that doesn't exist, they will be prompted to "create" the item.

```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';
import { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core/deprecated';

class FilteringSingleSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: '',
      isCreatable: false,
      isInputValuePersisted: false,
      isInputFilterPersisted: false
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs maintenance" />
      </SelectGroup>,
      <SelectGroup label="Vendor names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      this.setState({ selected: selection, isOpen: false }), console.log('selected: ', selection);
    };

    this.onFilter = (_, textInput) => {
      if (textInput === '') {
        return this.options;
      } else {
        let filteredGroups = this.options
          .map(group => {
            let filteredGroup = React.cloneElement(group, {
              children: group.props.children.filter(item => {
                return item.props.value.toLowerCase().includes(textInput.toLowerCase());
              })
            });
            if (filteredGroup.props.children.length > 0) return filteredGroup;
          })
          .filter(Boolean);
        return filteredGroups;
      }
    };

    this.toggleCreatable = (_, checked) => {
      this.setState({
        isCreatable: checked
      });
    };

    this.toggleInputValuePersisted = (_, checked) => {
      this.setState({
        isInputValuePersisted: checked
      });
    };

    this.toggleInputFilterPersisted = (_, checked) => {
      this.setState({
        isInputFilterPersisted: checked
      });
    };
  }

  render() {
    const {
      isOpen,
      selected,
      filteredOptions,
      isInputValuePersisted,
      isInputFilterPersisted,
      isCreatable
    } = this.state;
    const titleId = 'single-filtering-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Single select with filter
        </span>
        <Select
          variant={SelectVariant.single}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          onFilter={this.onFilter}
          isGrouped
          hasInlineFilter
          isCreatable={isCreatable}
          isInputValuePersisted={isInputValuePersisted}
          isInputFilterPersisted={isInputFilterPersisted}
        >
          {this.options}
        </Select>
        <Checkbox
          label="isInputValuePersisted"
          isChecked={isInputValuePersisted}
          onChange={this.toggleInputValuePersisted}
          aria-label="toggle input value persisted"
          id="toggle-inline-filter-input-value-persisted"
          name="toggle-inline-filter-input-value-persisted"
        />
        <Checkbox
          label="isInputFilterPersisted"
          isChecked={isInputFilterPersisted}
          onChange={this.toggleInputFilterPersisted}
          aria-label="toggle input filter persisted"
          id="toggle-inline-filter-input-filter-persisted"
          name="toggle-inline-filter-input-filter-persisted"
        />
        <Checkbox
          label="isCreatable"
          isChecked={this.state.isCreatable}
          onChange={this.toggleCreatable}
          aria-label="toggle creatable checkbox"
          id="toggle-inline-filter-creatable-typeahead"
          name="toggle-inline-filter-creatable-typeahead"
        />
      </div>
    );
  }
}
```

### Typeahead

Typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and button toggle combo. As a user types in the text input, the select menu will provide suggestions by filtering the select options.

To make a typeahead, pass `variant=typeahead` into the `<Select>` component. To specify a label for the input field, use the `typeAheadAriaLabel` property.

A few additional customization options are shown in the example below. Select each checkbox to visualize the following behavior:

- To place a created item at the top of a typeahead list use the `isCreateOptionOnTop` property.
- To trigger a callback for newly created items, use the `onCreateOption` property.
- To reset the typeahead value after a user makes a selection, use the `shouldResetOnSelect` property.

```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class TypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.defaultOptions = [
      { value: 'Alabama' },
      { value: 'Florida', description: 'This is a description' },
      { value: 'New Jersey' },
      { value: 'New Mexico' },
      { value: 'New York' },
      { value: 'North Carolina' }
    ];

    this.state = {
      options: this.defaultOptions,
      isOpen: false,
      selected: null,
      isDisabled: false,
      isCreatable: false,
      isCreateOptionOnTop: false,
      isInputValuePersisted: false,
      isInputFilterPersisted: false,
      hasOnCreateOption: false,
      resetOnSelect: true
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: this.state.resetOnSelect ? false : this.state.isOpen
        });
        console.log('selected:', selection);
      }
    };

    this.onCreateOption = newValue => {
      this.setState({
        options: [...this.state.options, { value: newValue }]
      });
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false,
        options: this.defaultOptions
      });
    };

    this.toggleDisabled = checked => {
      this.setState({
        isDisabled: checked
      });
    };

    this.toggleCreatable = checked => {
      this.setState({
        isCreatable: checked
      });
    };

    this.toggleCreateOptionOnTop = checked => {
      this.setState({
        isCreateOptionOnTop: checked
      });
    };

    this.toggleCreateNew = checked => {
      this.setState({
        hasOnCreateOption: checked
      });
    };

    this.toggleInputValuePersisted = checked => {
      this.setState({
        isInputValuePersisted: checked
      });
    };

    this.toggleInputFilterPersisted = checked => {
      this.setState({
        isInputFilterPersisted: checked
      });
    };

    this.toggleResetOnSelect = checked => {
      this.setState({
        resetOnSelect: checked
      });
    };
  }

  render() {
    const {
      isOpen,
      selected,
      isDisabled,
      isCreatable,
      isCreateOptionOnTop,
      hasOnCreateOption,
      isInputValuePersisted,
      isInputFilterPersisted,
      resetOnSelect,
      options
    } = this.state;
    const titleId = 'typeahead-select-id-1';
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isInputValuePersisted={isInputValuePersisted}
          isInputFilterPersisted={isInputFilterPersisted}
          placeholderText="Select a state"
          isDisabled={isDisabled}
          isCreatable={isCreatable}
          isCreateOptionOnTop={isCreateOptionOnTop}
          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}
          shouldResetOnSelect={resetOnSelect}
        >
          {options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              {...(option.description && { description: option.description })}
            />
          ))}
        </Select>
        <Checkbox
          label="isDisabled"
          isChecked={this.state.isDisabled}
          onChange={(_event, checked) => this.toggleDisabled(checked)} 
          aria-label="toggle disabled checkbox"
          id="toggle-disabled-typeahead"
          name="toggle-disabled-typeahead"
        />
        <Checkbox
          label="isCreatable"
          isChecked={this.state.isCreatable}
          onChange={(_event, checked) => this.toggleCreatable(checked)} 
          aria-label="toggle creatable checkbox"
          id="toggle-creatable-typeahead"
          name="toggle-creatable-typeahead"
        />
        <Checkbox
          label="isCreateOptionOnTop"
          isChecked={this.state.isCreateOptionOnTop}
          onChange={(_event, checked) => this.toggleCreateOptionOnTop(checked)} 
          aria-label="toggle createOptionOnTop checkbox"
          id="toggle-create-option-on-top-typeahead"
          name="toggle-create-option-on-top-typeahead"
        />
        <Checkbox
          label="onCreateOption"
          isChecked={this.state.hasOnCreateOption}
          onChange={(_event, checked) => this.toggleCreateNew(checked)} 
          aria-label="toggle new checkbox"
          id="toggle-new-typeahead"
          name="toggle-new-typeahead"
        />
        <Checkbox
          label="isInputValuePersisted"
          isChecked={isInputValuePersisted}
          onChange={(_event, checked) => this.toggleInputValuePersisted(checked)} 
          aria-label="toggle input value persisted"
          id="toggle-input-value-persisted"
          name="toggle-input-value-persisted"
        />
        <Checkbox
          label="isInputFilterPersisted"
          isChecked={isInputFilterPersisted}
          onChange={(_event, checked) => this.toggleInputFilterPersisted(checked)} 
          aria-label="toggle input filter persisted"
          id="toggle-input-filter-persisted"
          name="toggle-input-filter-persisted"
        />
        <Checkbox
          label="shouldResetOnSelect"
          isChecked={this.state.resetOnSelect}
          onChange={(_event, checked) => this.toggleResetOnSelect(checked)} 
          aria-label="toggle reset checkbox"
          id="toggle-reset-typeahead"
          name="toggle-reset-typeahead"
        />
      </div>
    );
  }
}
```

### Grouped typeahead

Typeahead matches items with user input across groups.

```js
import React from 'react';
import { Checkbox, Divider } from '@patternfly/react-core';
import { Select, SelectGroup, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class GroupedTypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        <SelectGroup label="Status" key="group1">
          <SelectOption key={0} value="Running" />
          <SelectOption key={1} value="Stopped" />
          <SelectOption key={2} value="Down" />
          <SelectOption key={3} value="Degraded" />
          <SelectOption key={4} value="Needs maintenance" />
        </SelectGroup>,
        <Divider key="divider" />,
        <SelectGroup label="Vendor names" key="group2">
          <SelectOption key={5} value="Dell" />
          <SelectOption key={6} value="Samsung" isDisabled />
          <SelectOption key={7} value="Hewlett-Packard" />
        </SelectGroup>
      ],
      newOptions: [],
      isOpen: false,
      selected: null,
      isCreatable: false,
      hasOnCreateOption: false
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.onCreateOption = newValue => {
      this.setState({
        newOptions: [...this.state.newOptions, <SelectOption key={newValue} value={newValue} />]
      });
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.toggleCreatable = checked => {
      this.setState({
        isCreatable: checked
      });
    };

    this.toggleCreateNew = checked => {
      this.setState({
        hasOnCreateOption: checked
      });
    };
  }

  render() {
    const { isOpen, selected, isDisabled, isCreatable, hasOnCreateOption, options, newOptions } = this.state;
    const titleId = 'grouped-typeahead-select-id';
    const allOptions =
      newOptions.length > 0
        ? options.concat(
            <SelectGroup label="Created" key="create-group">
              {newOptions}
            </SelectGroup>
          )
        : options;
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
          isGrouped
          isCreatable={isCreatable}
          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}
        >
          {allOptions}
        </Select>
        <Checkbox
          label="isCreatable"
          isChecked={this.state.isCreatable}
          onChange={(_event, checked) => this.toggleCreatable(checked)} 
          aria-label="toggle creatable checkbox"
          id="toggle-creatable-grouped-typeahead"
          name="toggle-creatable-grouped-typeahead"
        />
        <Checkbox
          label="onCreateOption"
          isChecked={this.state.hasOnCreateOption}
          onChange={(_event, checked) => this.toggleCreateNew(checked)} 
          aria-label="toggle new checkbox"
          id="toggle-new-grouped-typeahead"
          name="toggle-new-grouped-typeahead"
        />
      </div>
    );
  }
}
```

### Typeahead with custom filtering

You can add custom filtering to a select list to better fit needs that aren't covered by inline filtering. If you use custom filtering, use the `onFilter` property to trigger a callback with your custom filter implementation.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class TypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="Alabama" />,
      <SelectOption key={1} value="Florida" />,
      <SelectOption key={2} value="New Jersey" />,
      <SelectOption key={3} value="New Mexico" />,
      <SelectOption key={4} value="New York" />,
      <SelectOption key={5} value="North Carolina" />
    ];
    this.state = {
      isOpen: false,
      selected: null
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.customFilter = (_, value) => {
      if (!value) {
        return this.options;
      }

      const input = new RegExp(value, 'i');
      return this.options.filter(child => input.test(child.props.value));
    };
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'typeahead-select-id-2';
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          onFilter={this.customFilter}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Multiple typeahead

To create a multiple typeahead select variant, pass `variant={SelectVariant.typeaheadMulti}` into the `<Select>` component. Multiple typeaheads let users select multiple items from a select list. Selected items appear as chips in the select toggle.

When many items are selected, you can hide overflowing items under a "more" button. The following example hides items after more than 3 are selected. To show hidden items, select the “more” button. Click "show less" to hide extra items again.

```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class MultiTypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'Alabama', disabled: false },
        { value: 'Florida', disabled: false },
        { value: 'New Jersey', disabled: false },
        { value: 'New Mexico', disabled: false, description: 'This is a description' },
        { value: 'New York', disabled: false },
        { value: 'North Carolina', disabled: false }
      ],
      isOpen: false,
      selected: [],
      isCreatable: false,
      hasOnCreateOption: false,
      hasDisabledOption: false,
      resetOnSelect: true
    };

    this.onCreateOption = newValue => {
      this.setState({
        options: [...this.state.options, { value: newValue }]
      });
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };

    this.toggleCreatable = checked => {
      this.setState({
        isCreatable: checked
      });
    };

    this.toggleCreateNew = checked => {
      this.setState({
        hasOnCreateOption: checked
      });
    };

    this.toggleOptionDisabled = toggleIndex => () => {
      this.setState(prevState => ({
        hasDisabledOption: !prevState.hasDisabledOption,
        options: prevState.options.map((option, index) =>
          index === toggleIndex ? { ...option, disabled: !option.disabled } : option
        )
      }));
    };

    this.toggleResetOnSelect = checked => {
      this.setState({
        resetOnSelect: checked
      });
    };
  }

  render() {
    const { isOpen, selected, isCreatable, hasOnCreateOption, resetOnSelect, options } = this.state;
    const titleId = 'multi-typeahead-select-id-1';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
          isCreatable={isCreatable}
          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}
          shouldResetOnSelect={resetOnSelect}
        >
          {options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              {...(option.description && { description: option.description })}
            />
          ))}
        </Select>
        <Checkbox
          label="isCreatable"
          isChecked={this.state.isCreatable}
          onChange={(_event, checked) => this.toggleCreatable(checked)} 
          aria-label="toggle creatable checkbox"
          id="toggle-creatable-typeahead-multi"
          name="toggle-creatable-typeahead-multi"
        />
        <Checkbox
          label="onCreateOption"
          isChecked={this.state.hasOnCreateOption}
          onChange={(_event, checked) => this.toggleCreateNew(checked)} 
          aria-label="toggle new checkbox"
          id="toggle-new-typeahead-multi"
          name="toggle-new-typeahead-multi"
        />
        <Checkbox
          label="isDisabled (1st option only)"
          isChecked={this.state.hasDisabledOption}
          onChange={this.toggleOptionDisabled(0)}
          aria-label="toggle disable first option"
          id="toggle-disable-first-option"
          name="toggle-disable-first-option"
        />
        <Checkbox
          label="shouldResetOnSelect"
          isChecked={this.state.resetOnSelect}
          onChange={(_event, checked) => this.toggleResetOnSelect(checked)} 
          aria-label="toggle multi reset checkbox"
          id="toggle-reset-multi-typeahead"
          name="toggle-reset-multi-typeahead"
        />
      </div>
    );
  }
}
```

### Multiple typeahead with custom chips

To customize the appearance of chips, use the `chipGroupProps` property. The `numChips` property allows you to control the number of items shown, while the `expandedText` and `collapsedText` properties allow you to control the labels of the expansion and collapse chips.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class MultiTypeaheadSelectInputWithChipGroupProps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'Alabama', disabled: false },
        { value: 'Florida', disabled: false },
        { value: 'New Jersey', disabled: false },
        { value: 'New Mexico', disabled: false, description: 'This is a description' },
        { value: 'New York', disabled: false },
        { value: 'North Carolina', disabled: false }
      ],
      isOpen: false,
      selected: []
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, selected, isCreatable, hasOnCreateOption } = this.state;
    const titleId = 'multi-typeahead-custom-chip-group-props-id-1';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          chipGroupProps={{ numChips: 1, expandedText: 'Hide', collapsedText: 'Show ${remaining}' }}
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
        >
          {this.state.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              {...(option.description && { description: option.description })}
            />
          ))}
        </Select>
      </div>
    );
  }
}
```

### Multiple typeahead with chip group

To customize chips even more, render a [`<ChipGroup>`](/components/chip-group) component and pass it into the `chipGroupComponent` property of the `<Select>` component.

```js
import React from 'react';
import { ChipGroup, Chip } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class MultiTypeaheadSelectInputWithChipGroupProps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'Alabama', disabled: false },
        { value: 'Florida', disabled: false },
        { value: 'New Jersey', disabled: false },
        { value: 'New Mexico', disabled: false, description: 'This is a description' },
        { value: 'New York', disabled: false },
        { value: 'North Carolina', disabled: false }
      ],
      isOpen: false,
      selected: []
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };
    this.chipGroupComponent = () => {
      const { selected } = this.state;
      return (
        <ChipGroup>
          {(selected || []).map((currentChip, index) => (
            <Chip
              isReadOnly={index === 0 ? true : false}
              key={currentChip}
              onClick={event => this.onSelect(event, currentChip)}
            >
              {currentChip}
            </Chip>
          ))}
        </ChipGroup>
      );
    };
  }

  render() {
    const { isOpen, selected, isCreatable, hasOnCreateOption } = this.state;
    const titleId = 'multi-typeahead-render-chip-group-props-id-1';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          chipGroupProps={{ numChips: 1, expandedText: 'Hide', collapsedText: 'Show ${remaining}' }}
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
          chipGroupComponent={this.chipGroupComponent()}
        >
          {this.state.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              {...(option.description && { description: option.description })}
            />
          ))}
        </Select>
      </div>
    );
  }
}
```

### Multiple typeahead with custom objects

A `<SelectOption>` can have an object passed into the `value` property in order to store additional data beyond just a string value. The object passed in must have a `toString` function that returns a string to display in the `SelectMenu`.

```js
import React from 'react';
import { Divider } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class MultiTypeaheadSelectInputCustomObjects extends React.Component {
  constructor(props) {
    super(props);
    this.createState = (name, abbreviation, capital, founded) => {
      return {
        name: name,
        abbreviation: abbreviation,
        capital: capital,
        founded: founded,
        toString: function() {
          return `${this.name} (${this.abbreviation}) - Founded: ${this.founded}`;
        },
        compareTo: function(value) {
          return this.toString()
            .toLowerCase()
            .includes(value.toString().toLowerCase());
        }
      };
    };
    this.options = [
      <SelectOption key={0} value={this.createState('Alabama', 'AL', 'Montgomery', 1846)} />,
      <Divider component="li" key={111} />,
      <SelectOption key={1} value={this.createState('Florida', 'FL', 'Tailahassee', 1845)} />,
      <SelectOption key={2} value={this.createState('New Jersey', 'NJ', 'Trenton', 1787)} />,
      <SelectOption key={3} value={this.createState('New Mexico', 'NM', 'Santa Fe', 1912)} />,
      <SelectOption key={4} value={this.createState('New York', 'NY', 'Albany', 1788)} />,
      <SelectOption key={5} value={this.createState('North Carolina', 'NC', 'Raleigh', 1789)} />
    ];

    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'multi-typeahead-select-id-2';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          onFilter={this.customFilter}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Plain multiple typeahead

To plainly style a typeahead, use the `isPlain` property.

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated';

class PlainSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: 'Alabama', disabled: false },
      { value: 'Florida', disabled: false },
      { value: 'New Jersey', disabled: false },
      { value: 'New Mexico', disabled: false },
      { value: 'New York', disabled: false },
      { value: 'North Carolina', disabled: false }
    ];

    this.state = {
      isOpen: false,
      isPlain: true,
      selected: []
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, isPlain, selected } = this.state;
    const titleId = 'plain-typeahead-select-id';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          isPlain={isPlain}
          aria-labelledby={titleId}
          placeholderText="Select a state"
        >
          {this.options.map((option, index) => (
            <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
          ))}
        </Select>
      </div>
    );
  }
}
```

### Custom menu content

To add custom menu content, use the `customContent` property.

```js
import React from 'react';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import { Checkbox } from '@patternfly/react-core';
import { Select, SelectOption, SelectDirection } from '@patternfly/react-core/deprecated';

class SingleSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      direction: SelectDirection.down
    };

    this.onToggle = (_event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.toggleDisabled = checked => {
      this.setState({
        isDisabled: checked
      });
    };

    this.toggleDirection = () => {
      if (this.state.direction === SelectDirection.up) {
        this.setState({
          direction: SelectDirection.down
        });
      } else {
        this.setState({
          direction: SelectDirection.up
        });
      }
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction } = this.state;
    const titleId = 'title-id-2';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          aria-label="Select Input"
          onToggle={this.onToggle}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isDisabled={isDisabled}
          direction={direction}
          customContent="[Panel contents here]"
          placeholderText="Filter by birth month"
        />
        <Checkbox
          label="isDisabled"
          isChecked={this.state.isDisabled}
          onChange={(_event, checked) => this.toggleDisabled(checked)} 
          aria-label="disabled checkbox panel"
          id="toggle-disabled-panel"
          name="toggle-disabled-panel"
        />
        <Checkbox
          label="Expands up"
          isChecked={direction === SelectDirection.up}
          onChange={this.toggleDirection}
          aria-label="direction checkbox panel"
          id="toggle-direction-panel"
          name="toggle-direction-panel"
        />
      </div>
    );
  }
}
```

### Appending document body vs parent

Avoid passing in `document.body` to the `menuAppendTo` property. Doing so can cause accessibility issues because this prevents users from being able to enter the contents of the select options via assistive technologies (like keyboards or screen readers). Instead, pass in `parent` to achieve the same result without sacrificing accessibility.

The following example demonstrates both methods. When the dropdown is opened, both select variants manage focus the same way, but behave differently when the tab key is pressed after an option is selected.

- For the `document.body` variant, the focus will be placed at the end of the page, since that is where the dropdown content is appended to in the DOM (rather than focus being placed on the second Select variant as one might expect).
- For the `parent` variant, however, the focus will be placed on the next tab-able element (the "Toggle JS code" button for the code editor in this case).

```js
import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';
import { Select, SelectOption } from '@patternfly/react-core/deprecated';

class SelectDocumentBodyVsParent extends React.Component {
  constructor(props) {
    super(props);
    this.bodyOptions = [
      <SelectOption key={0} value="Select a title - document body" isPlaceholder />,
      <SelectOption key={1} value="Mr" />,
      <SelectOption key={2} value="Miss" />,
      <SelectOption key={3} value="Mrs" />,
      <SelectOption key={4} value="Ms" />,
      <SelectOption key={6} value="Dr" />,
      <SelectOption key={7} value="Other" />
    ];

    this.parentOptions = [
      <SelectOption key={0} value="Select a title - parent" isPlaceholder />,
      <SelectOption key={1} value="Mr" />,
      <SelectOption key={2} value="Miss" />,
      <SelectOption key={3} value="Mrs" />,
      <SelectOption key={4} value="Ms" />,
      <SelectOption key={6} value="Dr" />,
      <SelectOption key={7} value="Other" />
    ];

    this.state = {
      isBodyOpen: false,
      isParentOpen: false,
      bodySelected: null,
      parentSelected: null
    };

    this.onBodyToggle = (_event, isBodyOpen) => {
      this.setState({
        isBodyOpen
      });
    };

    this.onParentToggle = (_event, isParentOpen) => {
      this.setState({
        isParentOpen
      });
    };

    this.onBodySelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          bodySelected: selection,
          isBodyOpen: false
        });
        console.log('selected on document body:', selection);
      }
    };

    this.onParentSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          parentSelected: selection,
          isParentOpen: false
        });
        console.log('selected on parent:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };
  }

  render() {
    const { isBodyOpen, isParentOpen, bodySelected, parentSelected } = this.state;

    return (
      <Flex space={{ default: 'spacerMd' }} direction={{ default: 'column' }}>
        <FlexItem>
          <Select
            aria-label="Select Input for Document Body"
            onToggle={this.onBodyToggle}
            onSelect={this.onBodySelect}
            selections={bodySelected}
            isOpen={isBodyOpen}
            menuAppendTo={() => document.body}
          >
            {this.bodyOptions}
          </Select>
        </FlexItem>
        <FlexItem>
          <Select
            aria-label="Select Input for Parent"
            onToggle={this.onParentToggle}
            onSelect={this.onParentSelect}
            selections={parentSelected}
            isOpen={isParentOpen}
            menuAppendTo="parent"
          >
            {this.parentOptions}
          </Select>
        </FlexItem>
      </Flex>
    );
  }
}
```
