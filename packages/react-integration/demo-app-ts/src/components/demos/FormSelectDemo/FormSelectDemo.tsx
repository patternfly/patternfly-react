import React, { Component } from 'react';
import { FormSelect, FormSelectOption, FormSelectOptionGroup, Text, ValidatedOptions } from '@patternfly/react-core';

interface FormSelectState {
  value: string;
  validatedValue: string;
  validated: ValidatedOptions.default | ValidatedOptions.error | ValidatedOptions.success;
}

interface FormSelectOption {
  value: string;
  label: string;
  disabled: boolean;
}

interface FormSelectGroup {
  groupLabel: string;
  disabled: boolean;
  options: FormSelectOption[];
}

export class FormSelectDemo extends Component<{}, FormSelectState> {
  groups: FormSelectGroup[];
  validatedSelectOptions: FormSelectOption[];
  constructor(props: {}) {
    super(props);
    this.state = {
      value: '2',
      validatedValue: '',
      validated: ValidatedOptions.default
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

    this.validatedSelectOptions = [
      { value: '', label: 'Choose a number', disabled: false },
      { value: '1', label: 'One', disabled: false },
      { value: '2', label: 'Two', disabled: false },
      { value: '3', label: 'Three - the only valid option', disabled: false }
    ];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (value: string, _event: any) => {
    this.setState({ value });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChangeValidatedSelect = (value: string, _event: any) => {
    const validated = value === '3' ? ValidatedOptions.success : ValidatedOptions.error;
    this.setState({ validatedValue: value, validated });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getOptionLbl = (option: FormSelectOption) => option.label;
  getOptionVal = (option: FormSelectOption) => option.value;
  getOptionsGroupLbl = (group: FormSelectGroup) => group && group.groupLabel;
  getGroupOptions = (group: FormSelectGroup) => group && group.options;

  render() {
    return (
      <React.Fragment>
        <FormSelect id="select1" value={this.state.value} onChange={this.onChange} aria-label="FormSelect Input">
          {this.groups.map((group, index) => (
            <FormSelectOptionGroup isDisabled={group.disabled} key={index} label={group.groupLabel}>
              {group.options.map((option: FormSelectOption, i: number) => (
                <FormSelectOption isDisabled={option.disabled} key={i} value={option.value} label={option.label} />
              ))}
            </FormSelectOptionGroup>
          ))}
        </FormSelect>
        <Text>Validated text area </Text>
        <FormSelect
          id="validated-select"
          value={this.state.validatedValue}
          onChange={this.onChangeValidatedSelect}
          aria-label="FormSelect Validated Input"
          validated={this.state.validated}
        >
          {this.validatedSelectOptions.map((option, index) => (
            <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
          ))}
        </FormSelect>
      </React.Fragment>
    );
  }
}
