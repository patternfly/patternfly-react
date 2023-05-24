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
  FormHelperText,
  HelperText,
  HelperTextItem,
  MenuToggle,
  Select,
  SelectList,
  SelectOption,
  TextArea,
  TextInput
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export const FormState = () => {
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [formStateExpanded, setFormStateExpanded] = React.useState(false);

  return (
    <FormContextProvider initialValues={{ 'select-id': 'Option 1' }}>
      {({ setValue, getValue, setError, values, errors }) => (
        <Form>
          <FormGroup label="Input value" fieldId="input-id" isRequired>
            <TextInput
              id="input-id"
              onChange={(_event, value) => {
                setValue('input-id', value);
                setError('input-id', undefined);
              }}
              value={getValue('input-id')}
              validated={errors['input-id'] ? 'error' : 'default'}
            />
            <FormHelperText>
              <HelperText>
                <HelperTextItem
                  variant={errors['input-id'] ? 'error' : 'default'}
                  {...(errors['input-id'] && { icon: <ExclamationCircleIcon /> })}
                >
                  {errors['input-id']}
                </HelperTextItem>
              </HelperText>
            </FormHelperText>
          </FormGroup>

          <TextArea
            id="textarea-id"
            aria-label="Form state TextArea"
            onChange={(_event, value) => setValue('textarea-id', value)}
            value={getValue('textarea-id')}
          />

          <Select
            id="select-id"
            selected={getValue('select-id')}
            isOpen={isSelectOpen}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                onClick={(isOpen) => setIsSelectOpen(isOpen)}
                isExpanded={isSelectOpen}
                style={
                  {
                    width: '200px'
                  } as React.CSSProperties
                }
              >
                {getValue('select-id')}
              </MenuToggle>
            )}
            onOpenChange={(isOpen) => setIsSelectOpen(isOpen)}
            onSelect={(_, value) => {
              setValue('select-id', value as string);
              setIsSelectOpen(false);
            }}
          >
            <SelectList>
              <SelectOption value="Option 1">Option 1</SelectOption>
              <SelectOption value="Option 2">Option 2</SelectOption>
              <SelectOption value="Option 3">Option 3</SelectOption>
            </SelectList>
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
