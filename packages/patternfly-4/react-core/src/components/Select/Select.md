---
title: 'Select'
cssPrefix: 'pf-c-select'
propComponents: ['Select', 'SelectOption', 'SelectGroup']
typescript: true
---

import { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core';

## Single select input

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class SingleSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: 'Choose...', disabled: false, isPlaceholder: true },
      { value: 'Mr', disabled: false },
      { value: 'Miss', disabled: false },
      { value: 'Mrs', disabled: false },
      { value: 'Ms', disabled: false },
      { value: 'Dr', disabled: false },
      { value: 'Other', disabled: false }
    ];

    this.state = {
      isExpanded: false,
      selected: null
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isExpanded: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'title-id';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isExpanded={isExpanded}
          ariaLabelledBy={titleId}
        >
          {this.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              isPlaceholder={option.isPlaceholder}
            />
          ))}
        </Select>
      </div>
    );
  }
}
```

## Checkbox select input

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class CheckboxSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      selected: []
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
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
      <SelectOption key={0} value="Active" />,
      <SelectOption key={1} value="Cancelled" />,
      <SelectOption key={2} value="Paused" />,
      <SelectOption key={3} value="Warning" />,
      <SelectOption key={4} value="Restarted" />
    ];
  }

  render() {
    const { isExpanded, selected } = this.state;
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
          isExpanded={isExpanded}
          placeholderText="Filter by status"
          ariaLabelledBy={titleId}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

## Grouped checkbox select input

```js
import React from 'react';
import { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core';

class GroupedCheckboxSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      selected: []
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
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
        <SelectOption key={4} value="Needs Maintenence" />
      </SelectGroup>,
      <SelectGroup label="Vendor Names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'grouped-checkbox-select-id';
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
          isExpanded={isExpanded}
          placeholderText="Filter by status"
          ariaLabelledBy={titleId}
          isGrouped
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

## Typeahead select input

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class TypeaheadSelectInput extends React.Component {
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
      isExpanded: false,
      selected: null
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isExpanded: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'typeahead-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          aria-label="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isExpanded={isExpanded}
          ariaLabelledBy={titleId}
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

## Typeahead select input - custom filtering

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

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
      isExpanded: false,
      selected: null
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isExpanded: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false
      });
    };

    this.customFilter = (e) => {
      let input;
      try {
        input = new RegExp(e.target.value, 'i');
      } catch (err) {
        input = new RegExp(e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      }
      let typeaheadFilteredChildren =
        e.target.value !== ''
          ? this.options.filter(child => input.test(child.props.value))
          : this.options;
      return typeaheadFilteredChildren;
    }
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'typeahead-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          aria-label="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          onFilter={this.customFilter}
          selections={selected}
          isExpanded={isExpanded}
          ariaLabelledBy={titleId}
          placeholderText="Select a state"
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```


## Multiple typeahead select input

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class MultiTypeaheadSelectInput extends React.Component {
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
      isExpanded: false,
      selected: []
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
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
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'multi-typeahead-select-id';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeaheadMulti}
          aria-label="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isExpanded={isExpanded}
          ariaLabelledBy={titleId}
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
