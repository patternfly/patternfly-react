---
id: Form
section: components
cssPrefix: pf-c-form
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
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';

## Examples

### Basic
```js
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  Popover,
  ActionGroup,
  Button
} from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';

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
                <div>
                  The{' '}<a href="https://schema.org/name" target="_blank">name</a>{' '}of a{' '}<a href="https://schema.org/Person" target="_blank">Person</a>
                </div>
              }
              bodyContent={
                <div>
                  Often composed of{' '}
                  <a href="https://schema.org/givenName" target="_blank">
                    givenName
                  </a>{' '}
                  and{' '}
                  <a href="https://schema.org/familyName" target="_blank">
                    familyName
                  </a>
                  .
                </div>
              }
            >
              <button
                type="button"
                aria-label="More info for name field"
                onClick={e => e.preventDefault()}
                aria-describedby="simple-form-name-01"
                className="pf-c-form__group-label-help"
              >
                <HelpIcon noVerticalAlign />
              </button>
            </Popover>
          }
          isRequired
          fieldId="simple-form-name-01"
          helperText="Please provide your full name"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name-01"
            name="simple-form-name-01"
            aria-describedby="simple-form-name-01-helper"
            value={value1}
            onChange={this.handleTextInputChange1}
          />
        </FormGroup>
        <FormGroup label="Email" isRequired fieldId="simple-form-email-01">
          <TextInput
            isRequired
            type="email"
            id="simple-form-email-01"
            name="simple-form-email-01"
            value={value2}
            onChange={this.handleTextInputChange2}
          />
        </FormGroup>
        <FormGroup label="Phone number" isRequired fieldId="simple-form-number-01">
          <TextInput
            isRequired
            type="tel"
            id="simple-form-number-01"
            placeholder="555-555-5555"
            name="simple-form-number-01"
            value={value3}
            onChange={this.handleTextInputChange3}
          />
        </FormGroup>
        <FormGroup isInline fieldId="simple-form-checkbox-group" label="How can we contact you?" isRequired>
          <Checkbox label="Email" aria-label="Email" id="inlinecheck01" />
          <Checkbox label="Phone" aria-label="Phone" id="inlinecheck02" />
          <Checkbox label="Please don't contact me" aria-label="Please don't contact me" id="inlinecheck03" />
        </FormGroup>
        <FormGroup label="Additional Note" fieldId="simple-form-note-01">
          <TextInput isDisabled type="text" id="simple-form-note-01" name="simple-form-number" value="disabled" />
        </FormGroup>
        <FormGroup fieldId="checkbox01">
          <Checkbox label="I'd like updates via email" id="checkbox01" name="checkbox01" aria-label="Update via email" />
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

### Horizontal
```js
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
  Button
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

### Limit width
```js
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  Popover,
  ActionGroup,
  Button
} from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';

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
      <Form isWidthLimited>
        <FormGroup
          label="Name"
          labelIcon={
            <Popover
              headerContent={
                <div>
                  The{' '}<a href="https://schema.org/name" target="_blank">name</a>{' '}of a{' '}<a href="https://schema.org/Person" target="_blank">Person</a>
                </div>
              }
              bodyContent={
                <div>
                  Often composed of{' '}
                  <a href="https://schema.org/givenName" target="_blank">
                    givenName
                  </a>{' '}
                  and{' '}
                  <a href="https://schema.org/familyName" target="_blank">
                    familyName
                  </a>
                  .
                </div>
              }
            >
              <button
                type="button"
                aria-label="More info for name field"
                onClick={e => e.preventDefault()}
                aria-describedby="simple-form-name-02"
                className="pf-c-form__group-label-help"
              >
                <HelpIcon noVerticalAlign />
              </button>
            </Popover>
          }
          isRequired
          fieldId="simple-form-name-02"
          helperText="Please provide your full name"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name-02"
            name="simple-form-name-02"
            aria-describedby="simple-form-name-02-helper"
            value={value1}
            onChange={this.handleTextInputChange1}
          />
        </FormGroup>
        <FormGroup label="Email" isRequired fieldId="simple-form-email-02">
          <TextInput
            isRequired
            type="email"
            id="simple-form-email-02"
            name="simple-form-email-02"
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
          <Checkbox label="Email" aria-label="Email" id="inlinecheck04" />
          <Checkbox label="Phone" aria-label="Phone" id="inlinecheck05" />
          <Checkbox label="Please don't contact me" aria-label="Please don't contact me" id="inlinecheck06" />
        </FormGroup>
        <FormGroup label="Additional Note" fieldId="simple-form-note-02">
          <TextInput isDisabled type="text" id="simple-form-note-02" name="simple-form-number" value="disabled" />
        </FormGroup>
        <FormGroup fieldId="checkbox02">
          <Checkbox label="I'd like updates via email" id="checkbox02" name="checkbox02" aria-label="Update via email" />
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

### Invalid
```js
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  FormHelperText,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

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
          label="Age"
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

### Invalid with form alert
```js
import React from 'react';
import {
  Alert,
  Form,
  FormAlert,
  FormGroup,
  TextInput,
  FormHelperText,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

class InvalidFormWithFormAlert extends React.Component {
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
        { validated === "error" && (
          <FormAlert>
            <Alert
              variant="danger"
              title="You must fill out all required fields before you can proceed."
              aria-live="polite"
              isInline
            />
          </FormAlert>
        )}
        <FormGroup
          label="Age"
          type="number"
          helperText={
            <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'noval'}>
              Please enter your age
            </FormHelperText>
          }
          helperTextInvalid="Age has to be a number"
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

### Validated
```js
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

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
              this.setState({ validated: 'warning', helperText: 'You must be at least 21 to continue' });
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
          label="Age"
          type="number"
          helperText={helperText}
          helperTextInvalid={invalidText}
          helperTextInvalidIcon={<ExclamationCircleIcon />}
          fieldId="age-3"
          validated={validated}
        >
          <TextInput
            validated={validated}
            value={value}
            id="age-3"
            aria-describedby="age-3-helper"
            onChange={this.handleTextInputChange}
          />
        </FormGroup>
      </Form>
    );
  }
}
```

### Horizontal no padding top
```js
import React from 'react';
import { Form, FormGroup, Checkbox } from '@patternfly/react-core';

class HorizontalForm extends React.Component {
  render() {
    return (
      <Form isHorizontal>
        <FormGroup label="Label" hasNoPaddingTop fieldId="options">
          <Checkbox label="option 1" id="option-01" />
          <Checkbox label="option 2" id="option-02" />
        </FormGroup>
      </Form>
    );
  }
}
```

### Horizontal helper text on top
```js
import React from 'react';
import { Form, FormGroup, Checkbox } from '@patternfly/react-core';

class HorizontalFormHelperTextOnTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      helperText: 'Select all that apply'
    };
  }


  render() {
    return (
      <Form isHorizontal>
        <FormGroup
          label="Label"
          helperText={this.state.helperText}
          isHelperTextBeforeField
          hasNoPaddingTop
          fieldId="options">
          <Checkbox label="option 1" id="option-03" />
          <Checkbox label="option 2" id="option-04" />
        </FormGroup>
      </Form>
    );
  }
}
```

### Form Sections
```js
import React from 'react';
import { Form, FormGroup, FormSection, TextInput } from '@patternfly/react-core';

class FormSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
    };
    this.handleTextInputChange1 = value1 => {
      this.setState({ value1 });
    };
    this.handleTextInputChange2 = value2 => {
      this.setState({ value2 });
    };
  }

  render() {
    const { value1, value2 } = this.state;

    return (
      <Form>
        <FormSection>
          <FormGroup label="Form section 1 input" isRequired fieldId="simple-form-section-1-input">
            <TextInput
              isRequired
              type="section-1-input"
              id="simple-form-section-1-input"
              name="simple-form-section-1-input"
              value={value1}
              onChange={this.handleTextInputChange1}
            />
          </FormGroup>
        </FormSection>
        <FormSection>
          <FormGroup label="Form section 2 input" isRequired fieldId="simple-form-section-2-input">
            <TextInput
              isRequired
              type="section-2-input"
              id="simple-form-section-2-input"
              name="simple-form-section-2-input"
              value={value2}
              onChange={this.handleTextInputChange2}
            />
          </FormGroup>
        </FormSection>
      </Form>
    );
  }
}
```
