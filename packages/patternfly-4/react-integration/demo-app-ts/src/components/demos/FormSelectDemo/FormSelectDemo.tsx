import React, {Component} from 'react';
import { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';

interface FormSelectState {
  value: string 
}

export class FormSelectDemo extends Component<{}, FormSelectState> {
  constructor(props) {
    super(props);
    this.state = {
      value: '2'
    };
    this.onChange = (value: string, event: any) => {
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
