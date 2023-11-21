import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormContextConsumer, FormContextProvider } from '../FormContext';

const customRender = (ui, initialValues?: Record<string, any>) =>
  render(<FormContextProvider initialValues={initialValues}>{ui}</FormContextProvider>);

test('consumers can show all values from "values" provided by "initialValues"', () => {
  const initialValues = { fieldOneId: 'some value', fieldTwoId: 'some other value' };

  customRender(
    <FormContextConsumer>
      {({ values }) => Object.values(values).map((value) => <span key={value}>{value}</span>)}
    </FormContextConsumer>,
    initialValues
  );

  Object.values(initialValues).forEach((initialValue) => expect(screen.getByText(initialValue)).toBeVisible());
});

test('consumer results in "isValid" as "true" without errors and "false" with errors', async () => {
  const user = userEvent.setup();
  const initialValues = { someId: 'some value' };
  const onChange = (setValue, setError) => (event) => {
    const { value } = event.target;
    setValue('someId', value);

    if (!value) {
      setError('someId', 'Some error!');
    }
  };

  customRender(
    <FormContextConsumer>
      {({ values, setValue, setError, isValid }) => (
        <>
          <input onChange={onChange(setValue, setError)} value={values.someId} />
          {`isValid: ${isValid}`}
        </>
      )}
    </FormContextConsumer>,
    initialValues
  );

  expect(screen.getByText(/^isValid:/)).toHaveTextContent('isValid: true');

  await user.clear(screen.getByRole('textbox'));
  expect(screen.getByText(/^isValid:/)).toHaveTextContent('isValid: false');
});

test('using getValue, the consumer can show a value passed from initialValues', () => {
  customRender(<FormContextConsumer>{({ getValue }) => <>{getValue('someId')}</>}</FormContextConsumer>, {
    someId: 'some value'
  });

  expect(screen.getByText('some value')).toBeVisible();
});

test('sets a new value for a single field using setValue', async () => {
  const user = userEvent.setup();

  customRender(
    <FormContextConsumer>
      {({ getValue, setValue }) => (
        <input onChange={(event) => setValue('someId', event.target.value)} value={getValue('someId')} />
      )}
    </FormContextConsumer>,
    {
      someId: 'some value'
    }
  );

  const consumerInput = screen.getByRole('textbox');

  await user.clear(consumerInput);
  await user.type(consumerInput, 'some updated value');

  expect(consumerInput).toHaveValue('some updated value');
});

test('using setValues, consumers can set multiple values at once', async () => {
  const user = userEvent.setup();
  const newValues = { someId: 'updated value', someNewId: 'new value' };

  customRender(
    <FormContextConsumer>
      {({ values, setValues }) => (
        <>
          <input type="checkbox" onClick={() => setValues(newValues)} />
          {Object.entries(values).map(([fieldId, value]) => (
            <span key={fieldId}>{`${fieldId}: ${value}`}</span>
          ))}
        </>
      )}
    </FormContextConsumer>,
    {
      someId: 'some value'
    }
  );

  await user.click(screen.getByRole('checkbox'));
  Object.entries(newValues).map(([fieldId, value]) => expect(screen.getByText(`${fieldId}: ${value}`)).toBeVisible());
});

test('using getError, the consumer returns an error', async () => {
  const user = userEvent.setup();

  customRender(
    <FormContextConsumer>
      {({ getError, setError }) => (
        <>
          <input type="checkbox" onClick={() => setError('someId', 'some error!')} />
          {getError('someId')}
        </>
      )}
    </FormContextConsumer>
  );

  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByText('some error!')).toBeVisible();
});

test('sets a new error for a single field using setError', async () => {
  const user = userEvent.setup();

  customRender(
    <FormContextConsumer>
      {({ errors, setError }) => (
        <>
          <input type="checkbox" onClick={() => setError('someId', 'some error!')} />
          {`Error: ${errors.someId}`}
        </>
      )}
    </FormContextConsumer>
  );

  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByText(/^Error:/)).toHaveTextContent('Error: some error!');
});

test('using setErrors, consumers can set multiple errors at once', async () => {
  const user = userEvent.setup();
  const newErrors = { someId: 'some error!', someNewId: 'new field error!' };

  customRender(
    <FormContextConsumer>
      {({ errors, setErrors }) => (
        <>
          <input type="checkbox" onClick={() => setErrors(newErrors)} />
          {Object.entries(errors).map(([fieldId, error]) => (
            <span key={fieldId}>{`${fieldId}: ${error}`}</span>
          ))}
        </>
      )}
    </FormContextConsumer>,
    {
      someId: 'some value'
    }
  );

  await user.click(screen.getByRole('checkbox'));
  Object.entries(newErrors).map(([fieldId, error]) => expect(screen.getByText(`${fieldId}: ${error}`)).toBeVisible());
});

test('sets a new touched state for a single field using setTouched', async () => {
  const user = userEvent.setup();

  customRender(
    <FormContextConsumer>
      {({ touched, setTouched }) => (
        <>
          <input type="checkbox" onClick={() => setTouched('someId', true)} />
          {`isTouched: ${touched.someId}`}
        </>
      )}
    </FormContextConsumer>
  );

  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByText(/^isTouched:/)).toHaveTextContent('isTouched: true');
});

test("can get a single field's touched state by using isTouched", async () => {
  const user = userEvent.setup();

  customRender(
    <FormContextConsumer>
      {({ touched, setTouched, isTouched }) => (
        <>
          <input type="checkbox" onClick={() => setTouched('someId', !touched.someId)} />
          {`isTouched: ${isTouched('someId')}`}
        </>
      )}
    </FormContextConsumer>
  );

  const consumerCheckbox = screen.getByRole('checkbox');

  await user.click(consumerCheckbox);
  expect(screen.getByText(/^isTouched:/)).toHaveTextContent('isTouched: true');

  await user.click(consumerCheckbox);
  expect(screen.getByText(/^isTouched:/)).toHaveTextContent('isTouched: false');
});

test('validate returns errors set by the "setValidator" function', async () => {
  const user = userEvent.setup();

  customRender(
    <FormContextConsumer>
      {({ validate, setValidator }) => {
        const errors = validate();

        return (
          <>
            <input type="checkbox" onClick={() => setValidator('someId', (value) => (!value ? 'some error!' : null))} />
            {`Error: ${errors.someId}`}
          </>
        );
      }}
    </FormContextConsumer>
  );

  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByText(/^Error:/)).toHaveTextContent('Error: some error!');
});
