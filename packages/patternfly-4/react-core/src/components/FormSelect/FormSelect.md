---
title: 'FormSelect'
cssPrefix: 'pf-c-form-control'
propComponents: ['FormSelect', 'FormSelectOption', 'FormSelectOptionGroup']
---

import { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';

## Simple form select
```js
import React from 'react';
import { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';

class FormSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'mrs'
    };
    this.onChange = (value, event) => {
      this.setState({ value });
    };
    this.options = [
      { value: 'please choose', label: 'Please Choose', disabled: true },
      { value: 'mr', label: 'Mr', disabled: false },
      { value: 'miss', label: 'Miss', disabled: false },
      { value: 'mrs', label: 'Mrs', disabled: false },
      { value: 'ms', label: 'Ms', disabled: false },
      { value: 'dr', label: 'Dr', disabled: false },
      { value: 'other', label: 'Other', disabled: false }
    ];
  }

  render() {
    return (
      <FormSelect value={this.state.value} onChange={this.onChange} aria-label="FormSelect Input">
        {this.options.map((option, index) => (
          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </FormSelect>
    );
  }
}
```

## Invalid form select
```js
import React from 'react';
import { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';

class FormSelectInputInvalid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.isEmpty = () => this.state.value !== '';
    this.onChange = (value, event) => {
      this.setState({ value });
    };
    this.options = [
      { value: '', label: 'Choose a number', disabled: false },
      { value: '1', label: 'One', disabled: false },
      { value: '2', label: 'Two', disabled: false },
      { value: '3', label: 'Three', disabled: false }
    ];
  }

  render() {
    return (
      <FormSelect
        isValid={this.isEmpty()}
        value={this.state.value}
        onChange={this.onChange}
        aria-label="FormSelect Input"
      >
        {this.options.map((option, index) => (
          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </FormSelect>
    );
  }
}
```

## Disabled form select
```js
import React from 'react';
import { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';

class FormSelectInputDisabled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'mrs'
    };
    this.onChange = (value, event) => {
      this.setState({ value });
    };
    this.options = [
      { value: 'please choose', label: 'Please Choose', disabled: true },
      { value: 'mr', label: 'Mr', disabled: false },
      { value: 'miss', label: 'Miss', disabled: false },
      { value: 'mrs', label: 'Mrs', disabled: false },
      { value: 'ms', label: 'Ms', disabled: false },
      { value: 'dr', label: 'Dr', disabled: false },
      { value: 'other', label: 'Other', disabled: false }
    ];
  }

  render() {
    return (
      <FormSelect value={this.state.value} onChange={this.onChange} isDisabled aria-label="FormSelect Input">
        {this.options.map((option, index) => (
          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
        ))}
      </FormSelect>
    );
  }
}
```

## Grouped form select
```js
import React from 'react';
import { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';

class FormSelectInputGrouped extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2'
    };
    this.onChange = (value, event) => {
      this.setState({ value });
    };
    this.groups = [
      {
        groupLabel: 'Group1',
        disabled: false,
        options: [
          { value: '1', label: 'The First Option', disabled: false },
          { value: '2', label: 'Second option is selected by default', disabled: false }
        ]
      },
      {
        groupLabel: 'Group2',
        disabled: false,
        options: [
          { value: '3', label: 'The Third Option', disabled: false },
          { value: '4', label: 'The Fourth option', disabled: false }
        ]
      },
      {
        groupLabel: 'Group3',
        disabled: true,
        options: [
          { value: '5', label: 'The Fifth Option', disabled: false },
          { value: '6', label: 'The Sixth option', disabled: false }
        ]
      }
    ];
    this.getOptionLbl = option => option.label;
    this.getOptionVal = option => option.value;
    this.getOptionsGroupLbl = group => group && group.groupLabel;
    this.getGroupOptions = group => group && group.options;
  }

  render() {
    return (
      <FormSelect value={this.state.value} onChange={this.onChange} aria-label="FormSelect Input">
        {this.groups.map((group, index) => (
          <FormSelectOptionGroup isDisabled={group.disabled} key={index} label={group.groupLabel}>
            {group.options.map((option, i) => (
              <FormSelectOption isDisabled={option.disabled} key={i} value={option.value} label={option.label} />
            ))}
          </FormSelectOptionGroup>
        ))}
      </FormSelect>
    );
  }
}
```
