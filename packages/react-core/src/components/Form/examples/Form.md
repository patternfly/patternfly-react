---
id: Form
section: components
cssPrefix: pf-c-form
propComponents:
  [
    'ActionGroup',
    'Form',
    'FormGroup',
    'FormSection',
    'FormHelperText',
    'FormFieldGroup',
    'FormFieldGroupExpandable',
    'FormFieldGroupHeader',
    'FormFiledGroupHeaderTitleTextObject',
    'Button',
    'Popover',
  ]
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
FormFieldGroup,
FormFieldGroupHeader,
FormFieldGroupExpandable,
Checkbox,
ActionGroup,
Radio
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';

## Examples

### Basic

```js
import React from 'react';
import { Form, FormGroup, TextInput, Checkbox, Popover, ActionGroup, Button } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

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
          label="Full name"
          labelIcon={
            <Popover
              headerContent={
                <div>
                  The{' '}
                  <a href="https://schema.org/name" target="_blank">
                    name
                  </a>{' '}
                  of a{' '}
                  <a href="https://schema.org/Person" target="_blank">
                    Person
                  </a>
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
          helperText="Include your middle name if you have one."
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
          <Checkbox label="Please don't contact me." aria-label="Please don't contact me." id="inlinecheck03" />
        </FormGroup>
        <FormGroup label="Additional note" fieldId="simple-form-note-01">
          <TextInput isDisabled type="text" id="simple-form-note-01" name="simple-form-number" value="disabled" />
        </FormGroup>
        <FormGroup fieldId="checkbox01">
          <Checkbox
            label="I'd like updates via email."
            id="checkbox01"
            name="checkbox01"
            aria-label="Update via email"
          />
        </FormGroup>
        <ActionGroup>
          <Button variant="primary">Submit</Button>
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
      { value: 'select one', label: 'Select one', disabled: false },
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
        <FormGroup label="Full name" isRequired fieldId="horizontal-form-name" helperText="Include your middle name if you have one.">
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
        <FormGroup label="How can we contact you?" isRequired isStack hasNoPaddingTop>
          <Checkbox label="Email" id="alt-form-checkbox-1" name="alt-form-checkbox-1" />
          <Checkbox label="Phone" id="alt-form-checkbox-2" name="alt-form-checkbox-2" />
          <Checkbox label="Please don't contact me." id="alt-form-checkbox-3" name="alt-form-checkbox-3" />
        </FormGroup>
        <ActionGroup>
          <Button variant="primary">Submit</Button>
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
import { Form, FormGroup, TextInput, Checkbox, Popover, ActionGroup, Button } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

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
          label="Full name"
          labelIcon={
            <Popover
              headerContent={
                <div>
                  The{' '}
                  <a href="https://schema.org/name" target="_blank">
                    name
                  </a>{' '}
                  of a{' '}
                  <a href="https://schema.org/Person" target="_blank">
                    Person
                  </a>
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
          helperText="Include your middle name if you have one."
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
          <Checkbox label="Please don't contact me." aria-label="Please don't contact me." id="inlinecheck06" />
        </FormGroup>
        <FormGroup label="Additional note" fieldId="simple-form-note-02">
          <TextInput isDisabled type="text" id="simple-form-note-02" name="simple-form-number" value="disabled" />
        </FormGroup>
        <FormGroup fieldId="checkbox02">
          <Checkbox
            label="I'd like updates via email."
            id="checkbox02"
            name="checkbox02"
            aria-label="Update via email"
          />
        </FormGroup>
        <ActionGroup>
          <Button variant="primary">Submit</Button>
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
import { Form, FormGroup, TextInput, FormHelperText } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

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
          helperTextInvalid="Must be a number"
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
import { Alert, Form, FormAlert, FormGroup, TextInput, FormHelperText } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

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
        {validated === 'error' && (
          <FormAlert>
            <Alert
              variant="danger"
              title="Fill out all required fields before continuing."
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
          helperTextInvalid="Must be a number"
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
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

class InvalidForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      invalidText: 'Must be a number',
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
            this.setState({ validated: 'error', invalidText: 'Must be a number' });
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

### Horizontal stacked no padding top

```js
import React from 'react';
import { Form, FormGroup, Checkbox } from '@patternfly/react-core';

class HorizontalForm extends React.Component {
  render() {
    return (
      <Form isHorizontal>
        <FormGroup label="Label" hasNoPaddingTop fieldId="options" isStack>
          <Checkbox label="option 1" id="option-01" />
          <Checkbox label="option 2" id="option-02" />
        </FormGroup>
      </Form>
    );
  }
}
```

### Horizontal stacked helper text on top

```js
import React from 'react';
import { Form, FormGroup, Checkbox } from '@patternfly/react-core';

class HorizontalFormHelperTextOnTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helperText: 'Select all that apply:'
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
          fieldId="options"
          isStack
        >
          <Checkbox label="Option 1" id="option-03" />
          <Checkbox label="Option 2" id="option-04" />
        </FormGroup>
      </Form>
    );
  }
}
```

### Form group with additional label info

```js
import React from 'react';
import { Form, FormGroup, TextInput, Popover } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

class FormGroupLabelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: ''
    };
    this.handleTextInputChange1 = value1 => {
      this.setState({ value1 });
    };
  }

  render() {
    const { value1 } = this.state;

    return (
      <Form>
        <FormGroup
          label="Full name"
          labelInfo="Additional label info"
          labelIcon={
            <Popover
              headerContent={
                <div>
                  The{' '}
                  <a href="https://schema.org/name" target="_blank">
                    name
                  </a>{' '}
                  of a{' '}
                  <a href="https://schema.org/Person" target="_blank">
                    Person
                  </a>
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
                aria-describedby="form-group-label-info"
                className="pf-c-form__group-label-help"
              >
                <HelpIcon noVerticalAlign />
              </button>
            </Popover>
          }
          isRequired
          fieldId="form-group-label-info"
          helperText="Include your middle name if you have one."
        >
          <TextInput
            isRequired
            type="text"
            id="form-group-label-info"
            name="form-group-label-info"
            aria-describedby="form-group-label-info-helper"
            value={value1}
            onChange={this.handleTextInputChange1}
          />
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
      value2: ''
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
        <FormSection title="Form section 2 (optional title)" titleElement="h2">
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

### Grid form

```js
import React from 'react';
import { Form, FormGroup, TextInput, Button, Grid, GridItem } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

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
        <Grid hasGutter md={6}>
          <GridItem span={12}>
            <FormGroup label="Full name" isRequired fieldId="grid-form-name-01" helperText="Include your middle name if you have one.">
              <TextInput
                isRequired
                type="text"
                id="grid-form-name-01"
                name="grid-form-name-01"
                aria-describedby="grid-form-name-01-helper"
                value={value1}
                onChange={this.handleTextInputChange1}
              />
            </FormGroup>
          </GridItem>
          <FormGroup label="Email" isRequired fieldId="grid-form-email-01">
            <TextInput
              isRequired
              type="email"
              id="grid-form-email-01"
              name="grid-form-email-01"
              value={value2}
              onChange={this.handleTextInputChange2}
            />
          </FormGroup>
          <FormGroup label="Phone number" isRequired fieldId="grid-form-number-01">
            <TextInput
              isRequired
              type="tel"
              id="grid-form-number-01"
              placeholder="555-555-5555"
              name="grid-form-number-01"
              value={value3}
              onChange={this.handleTextInputChange3}
            />
          </FormGroup>
        </Grid>
      </Form>
    );
  }
}
```

### Field Groups

```js
import React from 'react';
import {
  Form,
  FormGroup,
  FormFieldGroup,
  FormFieldGroupExpandable,
  FormFieldGroupHeader,
  TextInput,
  Button
} from '@patternfly/react-core';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';

class FieldGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value14: '',
      value15: '',
      value16: '',
      value17: '',
      value18: '',
      value19: '',
      value20: '',
      value21: '',
      value22: ''
    };
    this.handleTextInputChange = value => {
      this.setState(value);
    };
  }

  render() {
    const {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10,
      value11,
      value12,
      value13,
      value14,
      value15,
      value16,
      value17,
      value18,
      value19,
      value20,
      value21,
      value22
    } = this.state;

    return (
      <Form>
        <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-groups-label1">
          <TextInput
            isRequired
            id="form-expandable-field-groups-label1"
            name="form-expandable-field-groups-label1"
            value={value1}
            onChange={value => {
              this.handleTextInputChange({ value1: value });
            }}
          />
        </FormGroup>
        <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-groups-label2">
          <TextInput
            isRequired
            id="form-expandable-field-groups-label2"
            name="form-expandable-field-groups-label2"
            value={value2}
            onChange={value => {
              this.handleTextInputChange({ value2: value });
            }}
          />
        </FormGroup>
        <FormFieldGroupExpandable
          isExpanded
          toggleAriaLabel="Details"
          header={
            <FormFieldGroupHeader
              titleText={{ text: 'Field group 1', id: 'field-group1-titleText-id' }}
              titleDescription="Field group 1 description text."
              actions={
                <>
                  <Button variant="link">Delete all</Button> <Button variant="secondary">Add parameter</Button>
                </>
              }
            />
          }
        >
          <FormFieldGroupExpandable
            isExpanded
            toggleAriaLabel="Details"
            header={
              <FormFieldGroupHeader
                titleText={{ text: 'Nested field group 1', id: 'nested-field-group1-titleText-id' }}
                titleDescription="Nested field group 1 description text."
                actions={
                  <Button variant="plain" aria-label="Remove">
                    <TrashIcon />
                  </Button>
                }
              />
            }
          >
            <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-groups-field-group1-label1">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group1-label1"
                name="form-expandable-field-groups-field-group1-label1"
                value={value3}
                onChange={value => {
                  this.handleTextInputChange({ value3: value });
                }}
              />
            </FormGroup>
            <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-groups-field-group1-label2">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group1-label2"
                name="form-expandable-field-groups-field-group1-label2"
                value={value4}
                onChange={value => {
                  this.handleTextInputChange({ value4: value });
                }}
              />
            </FormGroup>
          </FormFieldGroupExpandable>
          <FormFieldGroupExpandable
            toggleAriaLabel="Details"
            header={
              <FormFieldGroupHeader
                titleText={{ text: 'Nested field group 2', id: 'nested-field-group2-titleText-id' }}
                actions={
                  <Button variant="plain" aria-label="Remove">
                    <TrashIcon />
                  </Button>
                }
              />
            }
          >
            <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-groups-field-group2-label1">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group2-label1"
                name="form-expandable-field-groups-field-group2-label1"
                value={value5}
                onChange={value => {
                  this.handleTextInputChange({ value5: value });
                }}
              />
            </FormGroup>
            <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-groups-field-group2-label2">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group2-label2"
                name="form-expandable-field-groups-field-group2-label2"
                value={value6}
                onChange={value => {
                  this.handleTextInputChange({ value6: value });
                }}
              />
            </FormGroup>
          </FormFieldGroupExpandable>
          <FormFieldGroupExpandable
            toggleAriaLabel="Details"
            header={
              <FormFieldGroupHeader
                titleText={{ text: 'Nested field group 3', id: 'nested-field-group3-titleText-id' }}
                titleDescription="Field group 3 description text."
                actions={
                  <Button variant="plain" aria-label="Remove">
                    <TrashIcon />
                  </Button>
                }
              />
            }
          >
            <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-groups-field-group3-label1">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group3-label1"
                name="form-expandable-field-groups-field-group3-label1"
                value={value7}
                onChange={value => {
                  this.handleTextInputChange({ value7: value });
                }}
              />
            </FormGroup>
            <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-groups-field-group3-label2">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group3-label2"
                name="form-expandable-field-groups-field-group3-label2"
                value={value8}
                onChange={value => {
                  this.handleTextInputChange({ value8: value });
                }}
              />
            </FormGroup>
          </FormFieldGroupExpandable>
          <FormGroup
            label="Label 1"
            isRequired
            fieldId="form-expandable-field-groupsform-expandable-field-groups-field-group1-label1"
          >
            <TextInput
              isRequired
              id="form-expandable-field-groupsform-expandable-field-groups-field-group1-label1"
              name="form-expandable-field-groupsform-expandable-field-groups-field-group1-label1"
              value={value9}
              onChange={value => {
                this.handleTextInputChange({ value9: value });
              }}
            />
          </FormGroup>
          <FormGroup
            label="Label 2"
            isRequired
            fieldId="form-expandable-field-groupsform-expandable-field-groups-field-group1-label2"
          >
            <TextInput
              isRequired
              id="form-expandable-field-groupsform-expandable-field-groups-field-group1-label2"
              name="form-expandable-field-groupsform-expandable-field-groups-field-group1-label2"
              value={value10}
              onChange={value => {
                this.handleTextInputChange({ value10: value });
              }}
            />
          </FormGroup>
        </FormFieldGroupExpandable>
        <FormFieldGroupExpandable
          toggleAriaLabel="Details"
          header={
            <FormFieldGroupHeader
              titleText={{ text: 'Field group 2', id: 'field-group2-titleText-id' }}
              titleDescription="Field group 2 description text."
              actions={
                <>
                  <Button variant="link">Delete all</Button> <Button variant="secondary">Add parameter</Button>
                </>
              }
            />
          }
        >
          <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-group2-label1">
            <TextInput
              isRequired
              id="form-expandable-field-group2-label1"
              name="form-expandable-field-group2-label1"
              value={value11}
              onChange={value => {
                this.handleTextInputChange({ value11: value });
              }}
            />
          </FormGroup>
          <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-group2-label2">
            <TextInput
              isRequired
              id="form-expandable-field-group2-label2"
              name="form-expandable-field-group2-label2"
              value={value12}
              onChange={value => {
                this.handleTextInputChange({ value12: value });
              }}
            />
          </FormGroup>
        </FormFieldGroupExpandable>
        <FormFieldGroupExpandable
          isExpanded
          toggleAriaLabel="Details"
          header={
            <FormFieldGroupHeader
              titleText={{ text: 'Field group 3', id: 'field-group3-titleText-id' }}
              titleDescription="Field group 3 description text."
            />
          }
        >
          <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-group3-label1">
            <TextInput
              isRequired
              id="form-expandable-field-group3-label1"
              name="form-expandable-field-group3-label1"
              value={value13}
              onChange={value => {
                this.handleTextInputChange({ value13: value });
              }}
            />
          </FormGroup>
          <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-group3-label2">
            <TextInput
              isRequired
              id="form-expandable-field-group3-label2"
              name="form-expandable-field-group3-label2"
              value={value14}
              onChange={value => {
                this.handleTextInputChange({ value14: value });
              }}
            />
          </FormGroup>
          <FormFieldGroup
            header={
              <FormFieldGroupHeader
                titleText={{
                  text: 'Nested field group 1 (non-expandable)',
                  id: 'nested-field-group1-non-expandable-titleText-id'
                }}
              />
            }
          >
            <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-groups-field-group7-label1">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group7-label1"
                name="form-expandable-field-groups-field-group7-label1"
                value={value15}
                onChange={value => {
                  this.handleTextInputChange({ value15: value });
                }}
              />
            </FormGroup>
            <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-groups-field-group7-label2">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group7-label2"
                name="form-expandable-field-groups-field-group7-label2"
                value={value16}
                onChange={value => {
                  this.handleTextInputChange({ value16: value });
                }}
              />
            </FormGroup>
          </FormFieldGroup>
          <FormFieldGroup
            header={
              <FormFieldGroupHeader
                titleText={{
                  text: 'Nested field group 2 (non-expandable)',
                  id: 'nested-field-group2-non-expandable-titleText-id'
                }}
                titleDescription="Field group 2 description text."
              />
            }
          >
            <FormGroup label="Label 1" isRequired fieldId="form-expandable-field-groups-field-group8-label1">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group8-label1"
                name="form-expandable-field-groups-field-group8-label1"
                value={value17}
                onChange={value => {
                  this.handleTextInputChange({ value17: value });
                }}
              />
            </FormGroup>
            <FormGroup label="Label 2" isRequired fieldId="form-expandable-field-groups-field-group8-label2">
              <TextInput
                isRequired
                id="form-expandable-field-groups-field-group8-label2"
                name="form-expandable-field-groups-field-group8-label2"
                value={value18}
                onChange={value => {
                  this.handleTextInputChange({ value18: value });
                }}
              />
            </FormGroup>
          </FormFieldGroup>
        </FormFieldGroupExpandable>
        <FormFieldGroup
          header={
            <FormFieldGroupHeader
              titleText={{ text: 'Field group 4 (non-expandable)', id: 'field-group4-non-expandable-titleText-id' }}
              titleDescription="Field group 4 description text."
              actions={
                <>
                  <Button variant="link">Delete all</Button> <Button variant="secondary">Add parameter</Button>
                </>
              }
            />
          }
        >
          <FormGroup
            label="Label 1"
            isRequired
            fieldId="form-expandable-field-groupsform-expandable-field-groups-field-group10-label1"
          >
            <TextInput
              isRequired
              id="form-expandable-field-groupsform-expandable-field-groups-field-group10-label1"
              name="form-expandable-field-groupsform-expandable-field-groups-field-group10-label1"
              value={value19}
              onChange={value => {
                this.handleTextInputChange({ value19: value });
              }}
            />
          </FormGroup>
          <FormGroup
            label="Label 2"
            isRequired
            fieldId="form-expandable-field-groupsform-expandable-field-groups-field-group10-label2"
          >
            <TextInput
              isRequired
              id="form-expandable-field-groupsform-expandable-field-groups-field-group10-label2"
              name="form-expandable-field-groupsform-expandable-field-groups-field-group10-label2"
              value={value20}
              onChange={value => {
                this.handleTextInputChange({ value20: value });
              }}
            />
          </FormGroup>
        </FormFieldGroup>
        <FormGroup label="Label 3" isRequired fieldId="form-expandable-field-groups-label3">
          <TextInput
            isRequired
            id="form-expandable-field-groups-label3"
            name="form-expandable-field-groups-label3"
            value={value21}
            onChange={value => {
              this.handleTextInputChange({ value21: value });
            }}
          />
        </FormGroup>
        <FormGroup label="Label 4" isRequired fieldId="form-expandable-field-groups-label4">
          <TextInput
            isRequired
            id="form-expandable-field-groups-label4"
            name="form-expandable-field-groups-label4"
            value={value22}
            onChange={value => {
              this.handleTextInputChange({ value22: value });
            }}
          />
        </FormGroup>
      </Form>
    );
  }
}
```
