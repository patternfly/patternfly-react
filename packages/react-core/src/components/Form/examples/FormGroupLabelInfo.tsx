import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Popover,
  HelperText,
  HelperTextItem,
  FormHelperText,
  FormGroupLabelHelp
} from '@patternfly/react-core';

export const FormGroupLabelInfo: React.FunctionComponent = () => {
  const [name, setName] = React.useState('');
  const labelHelpRef = React.useRef(null);

  const handleNameChange = (_event, name: string) => {
    setName(name);
  };

  return (
    <Form>
      <FormGroup
        label="Full name"
        labelInfo="Additional label info"
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
        fieldId="form-group-label-info"
      >
        <TextInput
          isRequired
          type="text"
          id="form-group-label-info"
          name="form-group-label-info"
          aria-describedby="form-group-label-info-helper"
          value={name}
          onChange={handleNameChange}
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem>Include your middle name if you have one.</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
    </Form>
  );
};
