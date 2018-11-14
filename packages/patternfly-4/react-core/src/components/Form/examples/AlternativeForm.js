import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  ActionGroup,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Button
} from '@patternfly/react-core';

class AlternativeForm extends React.Component {
  state = {
    value: '',
    value1: ''
  };

  handleTextInputChange = value => {
    this.setState({ value });
  };

  handleTextInputChange1 = value1 => {
    this.setState({ value1 });
  };

  render() {
    const { value, value1 } = this.state;

    return (
      <Form>
        <FormGroup label="required Email" isRequired fieldId="alt-form-git-repo">
          <TextInput
            value={value}
            isRequired
            type="email"
            id="alt-form-git-repo"
            isAlt
            name="simple-form-git-repo"
            onChange={this.handleTextInputChange}
          />
        </FormGroup>
        <FormGroup
          label="required Password"
          isRequired
          fieldId="alt-form-password"
          helperText="Must be a minimum of 6 alpha-numeric characters."
        >
          <TextInput
            value={value1}
            isRequired
            type="password"
            id="alt-form-password"
            isAlt
            name="alt-form-password"
            aria-describedby="alt-form-password-helper"
            onChange={this.handleTextInputChange1}
          />
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
                  id="alt-form-checkbox"
                  aria-label="password"
                  name="alt-form-checkbox"
                />
              </ToolbarItem>
            </ToolbarGroup>
          </Toolbar>
        </ActionGroup>
      </Form>
    );
  }
}

export default AlternativeForm;
