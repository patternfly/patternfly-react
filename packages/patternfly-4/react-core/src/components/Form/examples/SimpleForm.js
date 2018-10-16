import React from 'react';
import { Form, FormGroup, TextInput, Checkbox, ActionGroup } from '@patternfly/react-core';
import { Toolbar, ToolbarGroup, Button, Radio } from '@patternfly/react-core';

class SimpleForm extends React.Component {
  static title = 'Simple Form';

  state = {
    value1: '',
    value2: '',
    value3: ''
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

  render() {
    const { value1, value2, value3 } = this.state;

    return (
      <Form>
        <FormGroup
          label="required Name"
          isRequired
          fieldId="simple-form-name"
          helperText="Please provide your full name"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name"
            name="simple-form-name"
            aria-describedby="simple-form-name-helper-1"
            value={value1}
            onChange={this.handleTextInputChange1}
          />
        </FormGroup>
        <FormGroup label="required Email" isRequired fieldId="simple-form-email">
          <TextInput
            isRequired
            type="email"
            id="simple-form-email"
            name="simple-form-email"
            value={value2}
            onChange={this.handleTextInputChange2}
          />
        </FormGroup>
        <FormGroup label="Phone number" fieldId="simple-form-number">
          <TextInput
            isRequired
            type="tel"
            id="simple-form-number"
            placeholder="555-555-5555"
            name="simple-form-number"
            value={value3}
            onChange={this.handleTextInputChange3}
          />
        </FormGroup>
        <FormGroup isInline label="required How can we contact you?" isRequired fieldId="inline-radio1">
          <div className="pf-c-check">
            <Radio className="pf-c-check__input" id="inlineradio1" name="inlineradios" />
            <label className="pf-c-check__label" htmlFor="inlineradio1">
              Email
            </label>{' '}
          </div>{' '}
          <div className="pf-c-check">
            <Radio className="pf-c-check__input" id="inlineradio2" name="inlineradios" />
            <label className="pf-c-check__label" htmlFor="inlineradio2">
              Phone
            </label>{' '}
          </div>{' '}
          <div className="pf-c-check">
            <Radio className="pf-c-check__input" id="inlineradio3" name="inlineradios" />
            <label className="pf-c-check__label" htmlFor="inlineradio3">
              Please don't contact me
            </label>
          </div>
        </FormGroup>
        <FormGroup fieldId="checkbox1">
          <Checkbox label="I'd like updates via email" id="checkbox1" name="checkbox1" aria-label="Update via email" />
        </FormGroup>
        <ActionGroup>
          <Toolbar>
            <ToolbarGroup>
              <Button variant="primary">Submit form</Button>
            </ToolbarGroup>
            <ToolbarGroup>
              <Button variant="secondary">Cancel</Button>
            </ToolbarGroup>
          </Toolbar>
        </ActionGroup>
      </Form>
    );
  }
}

export default SimpleForm;
