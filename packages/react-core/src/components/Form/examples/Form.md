---
title: 'Form'
section: components
cssPrefix: 'pf-c-form'
typescript: true
propComponents: ['ActionGroup', 'Form', 'FormGroup', 'FormHelperText', 'Button', 'Popover']
---

import {
  Button,
  Form,
  FormGroup,
  Popover,
  TextInput,
  TextArea,
  FormSelect,
  FormHelperText,
  Checkbox,
  ActionGroup,
  Radio
} from '@patternfly/react-core';
import { ExclamationCircleIcon, HelpIcon } from '@patternfly/react-icons';

## Examples

```js title=Basic
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelect,
  Checkbox,
  Popover,
  ActionGroup,
  Button,
  Radio
} from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: ''
    };
    this.handleTextInputChange1 = value1 => {
      this.setState({ value1 });
    };
    this.handleTextInputChange2 = value2 => {
      this.setState({ value2 });
    };
    this.handleTextInputChange3 = value3 => {
      this.setState({ value3 });
    };
  }

  render() {
    const { value1, value2, value3 } = this.state;

    return (
      <Form>
        <FormGroup
          label="Name"
          labelIcon={
            <Popover
              headerContent={
                <div>The <a href="https://schema.org/name">name</a> of a <a href="https://schema.org/Person">Person</a></div>}
              bodyContent={
                <div>Often composed of <a href="https://schema.org/givenName" target="_blank">givenName</a> and <a href="https://schema.org/familyName" target="_blank">familyName</a>.
                </div>
              }>
              <button aria-label="More info for name field" onClick={e => e.preventDefault()} aria-describedby="simple-form-name" className="pf-c-form__group-label-help">
                <HelpIcon noVerticalAlign />
              </button>
            </Popover>
          }
          isRequired
          fieldId="simple-form-name"
          helperText="Please provide your full name"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name"
            name="simple-form-name"
            aria-describedby="simple-form-name-helper"
            value={value1}
            onChange={this.handleTextInputChange1}
          />
        </FormGroup>
        <FormGroup label="Email" isRequired fieldId="simple-form-email">
          <TextInput
            isRequired
            type="email"
            id="simple-form-email"
            name="simple-form-email"
            value={value2}
            onChange={this.handleTextInputChange2}
          />
        </FormGroup>
        <FormGroup label="Phone number" isRequired fieldId="simple-form-number">
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
        <FormGroup isInline label="How can we contact you?" isRequired>
          <Checkbox label="Email" aria-label="Email" id="inlinecheck1" />
          <Checkbox label="Phone" aria-label="Phone" id="inlinecheck2" />
          <Checkbox label="Please don't contact me" aria-label="Please don't contact me" id="inlinecheck3" />
        </FormGroup>
        <FormGroup label="Additional Note:" fieldId="simple-form-note">
          <TextInput isDisabled type="text" id="simple-form-note" name="simple-form-number" value="disabled" />
        </FormGroup>
        <FormGroup fieldId="checkbox1">
          <Checkbox label="I'd like updates via email" id="checkbox1" name="checkbox1" aria-label="Update via email" />
        </FormGroup>
        <ActionGroup>
          <Button variant="primary">Submit form</Button>
          <Button variant="link">Cancel</Button>
        </ActionGroup>
      </Form>
    );
  }
}
```

```js title=Horizontal
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
  Radio
} from '@patternfly/react-core';

class HorizontalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'please choose',
      value1: '',
      value2: '',
      value3: ''
    };
    this.onChange = (value, event) => {
      this.setState({ value });
    };
    this.handleTextInputChange1 = value1 => {
      this.setState({ value1 });
    };
    this.handleTextInputChange2 = value2 => {
      this.setState({ value2 });
    };
    this.handleTextInputChange3 = value3 => {
      this.setState({ value3 });
    };
    this.options = [
      { value: 'please choose', label: 'Please Choose', disabled: false },
      { value: 'mr', label: 'Mr', disabled: false },
      { value: 'miss', label: 'Miss', disabled: false },
      { value: 'mrs', label: 'Mrs', disabled: false },
      { value: 'ms', label: 'Ms', disabled: false },
      { value: 'dr', label: 'Dr', disabled: false },
      { value: 'other', label: 'Other', disabled: false }
    ];
  }

  render() {
    const { value1, value2, value3 } = this.state;

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
            value={this.state.value}
            onChange={this.onChange}
            id="horzontal-form-title"
            name="horizontal-form-title"
            aria-label="Your title"
          >
            {this.options.map((option, index) => (
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
        <FormGroup>
          <Checkbox label="Follow up via email" id="alt-form-checkbox-1" name="alt-form-checkbox-1" />
        </FormGroup>
        <FormGroup>
          <Checkbox label="Remember my password for 30 days" id="alt-form-checkbox-2" name="alt-form-checkbox-2" />
        </FormGroup>
        <ActionGroup>
          <Button variant="primary">Submit form</Button>
          <Button variant="link">Cancel</Button>
        </ActionGroup>
      </Form>
    );
  }
}
```

```js title=Invalid
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelect,
  FormHelperText,
  Checkbox,
  ActionGroup,
  Button,
  Radio
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

class InvalidForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Five',
      validated: 'error'
    };
    this.handleTextInputChange = value => {
      this.setState({ value, validated: value === '' ? 'noval' : /^\d+$/.test(value) ? 'success' : 'error' });
    };
  }

  render() {
    const { value, validated } = this.state;

    return (
      <Form>
        <FormGroup
          label="Age:"
          type="number"
          helperText={
            <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'noval'}>
              Please enter your age
            </FormHelperText>
          }
          helperTextInvalid="Age has to be a number"
          helperTextInvalidIcon={<ExclamationCircleIcon />}
          fieldId="age-1"
          validated={validated}
        >
          <TextInput
            validated={validated}
            value={value}
            id="age-1"
            aria-describedby="age-1-helper"
            onChange={this.handleTextInputChange}
          />
        </FormGroup>
      </Form>
    );
  }
}
```

```js title=Validated
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelect,
  Checkbox,
  ActionGroup,
  Button,
  Radio
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

class InvalidForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      invalidText: 'Age has to be a number',
      validated: 'default',
      helperText: 'Enter your age to continue'
    };

    this.simulateNetworkCall = callback => {
      setTimeout(callback, 2000);
    };

    this.handleTextInputChange = value => {
      this.setState(
        { value, validated: 'default', helperText: 'Validating...' },
        this.simulateNetworkCall(() => {
          if (/^\d+$/.test(value)) {
            if (parseInt(value, 10) >= 21) {
              this.setState({ validated: 'success', helperText: 'Enjoy your stay' });
            } else {
              this.setState({ validated: 'error', invalidText: 'You must be at least 21 to continue' });
            }
          } else {
            this.setState({ validated: 'error', invalidText: 'Age has to be a number' });
          }
        })
      );
    };
  }

  render() {
    const { value, validated, helperText, invalidText } = this.state;

    return (
      <Form>
        <FormGroup
          label="Age:"
          type="number"
          helperText={helperText}
          helperTextInvalid={invalidText}
          helperTextInvalidIcon={<ExclamationCircleIcon />}
          fieldId="age-2"
          validated={validated}
        >
          <TextInput
            validated={validated}
            value={value}
            id="age-2"
            aria-describedby="age-2-helper"
            onChange={this.handleTextInputChange}
          />
        </FormGroup>
      </Form>
    );
  }
}
```

```js title=Horizontal-no-padding-top
import React from 'react';
import { Form, FormGroup, Checkbox, Radio } from '@patternfly/react-core';

class HorizontalForm extends React.Component {
  render() {
    return (
      <Form isHorizontal>
        <FormGroup label="Label" hasNoPaddingTop fieldId="options">
          <Checkbox label="option 1" id="option-1" />
          <Checkbox label="option 2" id="option-2" />
        </FormGroup>
      </Form>
    );
  }
}
```
