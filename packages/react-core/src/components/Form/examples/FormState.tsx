import React from 'react';
import {
  ActionGroup,
  Button,
  ButtonType,
  ButtonVariant,
  Divider,
  Form,
  FormContextProvider,
  FormGroup,
  Select,
  SelectOption,
  TextArea,
  TextInput
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export const FormState = () => {
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [formStateExpanded, setFormStateExpanded] = React.useState(false);

  return (
    <FormContextProvider initialValues={{ 'select-id': 'option-1' }}>
      {({ setValue, getValue, setError, values, errors }) => (
        <Form>
          <FormGroup
            label="Input value"
            helperTextInvalid={errors['input-id']}
            helperTextInvalidIcon={<ExclamationCircleIcon />}
            fieldId="input-id"
            validated={errors['input-id'] ? 'error' : 'default'}
            isRequired
          >
            <TextInput
              id="input-id"
              onChange={(value) => {
                setValue('input-id', value);
                setError('input-id', undefined);
              }}
              value={getValue('input-id')}
              validated={errors['input-id'] ? 'error' : 'default'}
            />
          </FormGroup>

          <TextArea
            id="textarea-id"
            aria-label="Form state TextArea"
            onChange={(value) => setValue('textarea-id', value)}
            value={getValue('textarea-id')}
          />

          <Select
            id="select-id"
            isOpen={isSelectOpen}
            onToggle={(_, isOpen) => setIsSelectOpen(isOpen)}
            onSelect={(_, value) => {
              setValue('select-id', value.toString());
              setIsSelectOpen(false);
            }}
            selections={getValue('select-id')}
          >
            <SelectOption value="option-1">Option 1</SelectOption>
            <SelectOption value="option-2">Option 2</SelectOption>
            <SelectOption value="option-3">Option 3</SelectOption>
          </Select>

          <ActionGroup>
            <Button
              type={ButtonType.submit}
              onClick={(e) => {
                e.preventDefault();

                if (!values['input-id']) {
                  setError('input-id', 'Input value is required.');
                } else {
                  alert(`Form submitted with: \n ${JSON.stringify(values)}`);
                }
              }}
            >
              Submit
            </Button>
            <Button variant={ButtonVariant.link} onClick={() => setFormStateExpanded((prevExpanded) => !prevExpanded)}>
              {`${formStateExpanded ? 'Hide' : 'Show'} form state`}
            </Button>
          </ActionGroup>
          {formStateExpanded && (
            <>
              <Divider />
              <pre>{JSON.stringify({ values, errors }, null, 2)}</pre>
            </>
          )}
        </Form>
      )}
    </FormContextProvider>
  );
};
