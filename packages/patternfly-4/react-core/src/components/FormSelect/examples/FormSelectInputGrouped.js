import React from 'react';
import { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';

class FormSelectInputGrouped extends React.Component {
  state = {
    value: '2'
  };

  onChange = (value, event) => {
    this.setState({ value });
  };

  groups = [
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
  getOptionLbl = option => option.label;
  getOptionVal = option => option.value;
  getOptionsGroupLbl = group => group && group.groupLabel;
  getGroupOptions = group => group && group.options;

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

export default FormSelectInputGrouped;
