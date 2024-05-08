import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  Popover,
  ActionGroup,
  Button,
  Radio,
  HelperText,
  HelperTextItem,
  FormHelperText,
  FormGroupLabelHelp
} from '@patternfly/react-core';

export const FormLimitWidth: React.FunctionComponent = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const labelHelpRef = React.useRef(null);

  const handleNameChange = (_event, name: string) => {
    setName(name);
  };

  const handleEmailChange = (_event, email: string) => {
    setEmail(email);
  };

  const handlePhoneChange = (_event, phone: string) => {
    setPhone(phone);
  };

  return (
    <Form isWidthLimited>
      <FormGroup
        label="Full name"
        labelHelp={
          <Popover
            triggerRef={labelHelpRef}
            headerContent={
              <div>
                The{' '}
                <a href="https://schema.org/name" target="_blank" rel="noreferrer">
                  name
                </a>{' '}
                of a{' '}
                <a href="https://schema.org/Person" target="_blank" rel="noreferrer">
                  Person
                </a>
              </div>
            }
            bodyContent={
              <div>
                Often composed of{' '}
                <a href="https://schema.org/givenName" target="_blank" rel="noreferrer">
                  givenName
                </a>{' '}
                and{' '}
                <a href="https://schema.org/familyName" target="_blank" rel="noreferrer">
                  familyName
                </a>
                .
              </div>
            }
          >
            <FormGroupLabelHelp ref={labelHelpRef} aria-label="More info for name field" />
          </Popover>
        }
        isRequired
        fieldId="simple-form-name-02"
      >
        <TextInput
          isRequired
          type="text"
          id="simple-form-name-02"
          name="simple-form-name-02"
          aria-describedby="simple-form-name-02-helper"
          value={name}
          onChange={handleNameChange}
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem>Include your middle name if you have one.</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <FormGroup label="Email" isRequired fieldId="simple-form-email-02">
        <TextInput
          isRequired
          type="email"
          id="simple-form-email-02"
          name="simple-form-email-02"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup label="Phone number" isRequired fieldId="simple-form-number">
        <TextInput
          isRequired
          type="tel"
          placeholder="555-555-5555"
          id="simple-form-number"
          name="simple-form-number"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>
      <FormGroup role="group" isInline fieldId="limit-width-form-checkbox-group" label="How can we contact you?">
        <Checkbox label="Email" aria-label="Email" id="inlinecheck04" />
        <Checkbox label="Phone" aria-label="Phone" id="inlinecheck05" />
        <Checkbox label="Mail" aria-label="Mail" id="inlinecheck06" />
      </FormGroup>
      <FormGroup role="radiogroup" isInline fieldId="limit-width-form-radio-group" label="Time zone">
        <Radio name="limit-width-radio" label="Eastern" id="limit-width-inline-radio-01" />
        <Radio name="limit-width-radio" label="Central" id="limit-width-inline-radio-02" />
        <Radio name="limit-width-radio" label="Pacific" id="limit-width-inline-radio-03" />
      </FormGroup>
      <FormGroup label="Additional note" fieldId="simple-form-note-02">
        <TextInput isDisabled type="text" id="simple-form-note-02" name="simple-form-number" value="disabled" />
      </FormGroup>
      <FormGroup fieldId="checkbox02">
        <Checkbox label="I'd like updates via email." id="checkbox02" name="checkbox02" aria-label="Update via email" />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary">Submit</Button>
        <Button variant="link">Cancel</Button>
      </ActionGroup>
    </Form>
  );
};
