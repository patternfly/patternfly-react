import React from 'react';
import {
  FormGroup,
  TextInput,
  TextArea,
  Form,
  SelectOption,
  Select,
  Radio,
  Toolbar,
  ToolbarItem,
  ToolbarGroup,
  Button,
  ActionGroup,
  Checkbox
} from '@patternfly/react-core';

class HorizontalForm extends React.Component {
  state = {
    value: 'please choose',
    value1: '',
    value2: '',
    value3: ''
  };

  onChange = (value, event) => {
    this.setState({ value });
  };

  handleTextInputChange1 = value1 => {
    this.setState({ value1 });
  };

  handleTextInputChange2 = value2 => {
    this.setState({ value2 });
  };

  handleTextInputChange3 = value3 => {
    this.setState({ value3 });
  };

  options = [
    { value: 'please choose', label: 'Please Choose', disabled: false },
    { value: 'mr', label: 'Mr', disabled: false },
    { value: 'miss', label: 'Miss', disabled: false },
    { value: 'mrs', label: 'Mrs', disabled: false },
    { value: 'ms', label: 'Ms', disabled: false },
    { value: 'dr', label: 'Dr', disabled: false },
    { value: 'other', label: 'Other', disabled: false }
  ];

  render() {
    const { value1, value2, value3 } = this.state;

    return (
      <Form isHorizontal>
        <FormGroup
          label="required Name"
          isRequired
          fieldId="horizontal-form-name"
          helperText="Please provide your full name"
        >
          <TextInput
            value={value1}
            isRequired
            type="text"
            id="horizontal-form-name"
            describedby="horizontal-form-name-helper"
            name="horizontal-form-name"
            onChange={this.handleTextInputChange1}
          />
        </FormGroup>
        <FormGroup label="Email" fieldId="horizontal-form-email">
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
          <Select
            value={this.state.value}
            onChange={this.onChange}
            id="horzontal-form-title"
            name="horizontal-form-title"
          >
            {this.options.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
            ))}
          </Select>
        </FormGroup>
        <FormGroup label="Your experience" fieldId="horizontal-form-exp">
          <TextArea
            value={value3}
            onChange={this.handleTextInputChange3}
            name="horizontal-form-exp"
            id="horizontal-form-exp"
          />
        </FormGroup>
        <FormGroup label="Can we follow up via email?" fieldId="horizontal-radio1">
          <Radio label="Yes" aria-label="yes" id="horizontal-radio1" name="horizontal-radios" />
          <Radio label="No" aria-label="no" id="horizontal-radio2" name="horizontal-radios" />
        </FormGroup>
        <ActionGroup>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarItem>
                <Button variant="primary">Submit form</Button>
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarItem>
                <Button variant="secondary">Cancel</Button>
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarItem>
                <Checkbox
                  label="Remember my password for 30 days"
                  aria-label="Remember my password for 30 days"
                  id="alt-form-checkbox-1"
                  name="alt-form-checkbox-1"
                />
              </ToolbarItem>
            </ToolbarGroup>
          </Toolbar>
        </ActionGroup>
      </Form>
    );
  }
}

export default HorizontalForm;
