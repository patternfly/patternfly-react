import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelect,
  FormSelectOption,
  Checkbox,
  ActionGroup,
  Button,
  FormProps
} from '@patternfly/react-core';

export interface FormHorizontalState {
  value: string;
  value1: string;
  value2: string;
  value3: string;
}

export class HorizontalFormDemo extends React.Component<FormProps, FormHorizontalState> {
  static displayName = 'HorizontalFormDemo';
  constructor(props: FormProps) {
    super(props);
    this.state = {
      value: 'please choose',
      value1: '',
      value2: '',
      value3: ''
    };
  }

  onChange = (value: string) => {
    this.setState({ value });
  };
  handleTextInputChange1 = (value1: string) => {
    this.setState({ value1 });
  };
  handleTextInputChange2 = (value2: string) => {
    this.setState({ value2 });
  };
  handleTextInputChange3 = (value3: string) => {
    this.setState({ value3 });
  };

  render() {
    const { value, value1, value2, value3 } = this.state;

    const options = [
      { value: 'please choose', label: 'Please Choose', disabled: false },
      { value: 'mr', label: 'Mr', disabled: false },
      { value: 'miss', label: 'Miss', disabled: false },
      { value: 'mrs', label: 'Mrs', disabled: false },
      { value: 'ms', label: 'Ms', disabled: false },
      { value: 'dr', label: 'Dr', disabled: false },
      { value: 'other', label: 'Other', disabled: false }
    ];

    return (
      <Form isHorizontal>
        <FormGroup label="Name" isRequired fieldId="horizontal-form-name" helperText="Please provide your full name">
          <TextInput
            value={value1}
            isRequired
            type="text"
            id="horizontal-form-name"
            aria-describedby="horizontal-form-name-helper"
            name="horizontal-form-name"
            onChange={this.handleTextInputChange1}
          />
        </FormGroup>
        <FormGroup label="Email" isRequired fieldId="horizontal-form-email">
          <TextInput
            value={value2}
            onChange={this.handleTextInputChange2}
            isRequired
            type="email"
            id="horizontal-form-email"
            name="horizontal-form-email"
          />
        </FormGroup>
        <FormGroup label="Your title" fieldId="horizontal-form-title">
          <FormSelect
            value={value}
            onChange={this.onChange}
            id="horzontal-form-title"
            name="horizontal-form-title"
            aria-label="Your title"
          >
            {options.map((option, index) => (
              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup label="Your experience" fieldId="horizontal-form-exp">
          <TextArea
            value={value3}
            onChange={this.handleTextInputChange3}
            name="horizontal-form-exp"
            id="horizontal-form-exp"
          />
        </FormGroup>
        <FormGroup label="How can we contact you?" isRequired isStack hasNoPaddingTop fieldId="alt-form-checkbox-1">
          <Checkbox label="Email" id="alt-form-checkbox-1" name="alt-form-checkbox-1" />
          <Checkbox label="Phone" id="alt-form-checkbox-2" name="alt-form-checkbox-2" />
          <Checkbox label="Please don't contact me" id="alt-form-checkbox-3" name="alt-form-checkbox-3" />
        </FormGroup>
        <ActionGroup>
          <Button variant="primary">Submit form</Button>
          <Button variant="link">Cancel</Button>
        </ActionGroup>
      </Form>
    );
  }
}
