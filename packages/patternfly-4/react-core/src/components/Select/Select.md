---
title: 'Select'
cssPrefix: 'pf-c-select'
---

import { Select, SelectOption, SelectVariant, CheckboxSelectGroup, CheckboxSelectOption } from '@patternfly/react-core';

## Single select input
```js
import React from 'react';
import { Select, SelectOption, SelectVariant, CheckboxSelectGroup, CheckboxSelectOption } from '@patternfly/react-core';

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
import { Select, SelectOption, SelectVariant, CheckboxSelectGroup, CheckboxSelectOption } from '@patternfly/react-core';

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
      <CheckboxSelectOption key={0} value="Active" />,
      <CheckboxSelectOption key={1} value="Cancelled" />,
      <CheckboxSelectOption key={2} value="Paused" />,
      <CheckboxSelectOption key={3} value="Warning" />,
      <CheckboxSelectOption key={4} value="Restarted" />
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
import { Select, SelectOption, SelectVariant, CheckboxSelectGroup, CheckboxSelectOption } from '@patternfly/react-core';

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
      <CheckboxSelectGroup label="Status" key="group1">
        <CheckboxSelectOption key={0} value="Running" />
        <CheckboxSelectOption key={1} value="Stopped" />
        <CheckboxSelectOption key={2} value="Down" />
        <CheckboxSelectOption key={3} value="Degraded" />
        <CheckboxSelectOption key={4} value="Needs Maintenence" />
      </CheckboxSelectGroup>,
      <CheckboxSelectGroup label="Vendor Names" key="group2">
        <CheckboxSelectOption key={5} value="Dell" />
        <CheckboxSelectOption key={6} value="Samsung" isDisabled />
        <CheckboxSelectOption key={7} value="Hewlett-Packard" />
      </CheckboxSelectGroup>
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
          aria-label="Grouped Checkbox Select Input"
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
import { Select, SelectOption, SelectVariant, CheckboxSelectGroup, CheckboxSelectOption } from '@patternfly/react-core';

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
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
      </div>
    );
  }
}
```

## Multiple typeahead select input
```js
import React from 'react';
import { Select, SelectOption, SelectVariant, CheckboxSelectGroup, CheckboxSelectOption } from '@patternfly/react-core';

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
        isExpanded: false,
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
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
      </div>
    );
  }
}
```