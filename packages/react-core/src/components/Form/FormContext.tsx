import React, { Dispatch, SetStateAction } from 'react';

export interface FormContextProps {
  /** Record of values for all fieldIds */
  values: Record<string, string>;
  /** Record of errors for all fieldIds */
  errors: Record<string, string>;
  /** Record of touched state for all fieldIds */
  touched: Record<string, boolean>;
  /** Flag to determine the overall validity. True if the record of errors is empty. */
  isValid: boolean;

  /** Get the value for a given fieldId */
  getValue(fieldId: string): string;
  /** Set the value for a given fieldId */
  setValue(fieldId: string, value: string): void;
  /** Set multiple values within the managed record of values */
  setValues: Dispatch<SetStateAction<Record<string, string>>>;

  /** Get the error message for a given fieldId */
  getError(fieldId: string): string;
  /** Set the error message for a given fieldId */
  setError(fieldId: string, error: string | undefined): void;
  /** Set multiple errors within the managed record of errors */
  setErrors: Dispatch<SetStateAction<Record<string, string>>>;

  /** Used to determine touched state for a given fieldId */
  isTouched(fieldId: string): boolean;
  /** Used to update the touched state for a given fieldId */
  setTouched(fieldId: string, isTouched: boolean): void;

  /** Triggers all fieldId-specific validators */
  validate(): Record<string, string | null>;
  /** Set a validator for a specific fieldId */
  setValidator(fieldId: string, validate: (value: string) => string | null): void;
}

const FormContext = React.createContext({} as FormContextProps);

export const FormContextConsumer = FormContext.Consumer;

export interface FormContextProviderProps {
  /** Record of initial values */
  initialValues?: Record<string, string>;
  /** Any react node. Can optionally use render function to return context props. */
  children?: React.ReactNode | ((props: FormContextProps) => React.ReactNode);
}

export const FormContextProvider: React.FC<FormContextProviderProps> = ({ initialValues, children }) => {
  const [values, setValues] = React.useState<Record<string, string>>(initialValues || {});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [validators, setValidators] = React.useState<Record<string, Function>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const isValid = Object.keys(errors)?.length === 0;

  const getValue = (fieldId: string) =>
    Object.entries(values).reduce((acc, [id, value]) => (id === fieldId ? value : acc), '');

  const setValue = (fieldId: string, value: string, triggerValidation: boolean = true) => {
    if (values[fieldId] !== value) {
      setValues((prevValues) => ({ ...prevValues, [fieldId]: value }));
      triggerValidation && validators[fieldId]?.(value);
    }
  };

  const getError = (fieldId: string) =>
    Object.entries(errors).reduce((acc, [id, error]) => (id === fieldId ? error : acc), '');

  const setError = (fieldId: string, error: string) =>
    errors[fieldId] !== error &&
    setErrors(({ [fieldId]: _, ...prevErrors }) => ({
      ...prevErrors,
      ...(!!error && { [fieldId]: error })
    }));

  const isTouched = (fieldId: string) =>
    Object.entries(touched).reduce((acc, [id, isTouched]) => (id === fieldId ? isTouched : acc), false);

  const setFieldTouched = (fieldId: string, isTouched: boolean) =>
    touched[fieldId] !== isTouched &&
    setTouched(({ [fieldId]: _, ...prevTouched }) => ({
      ...prevTouched,
      ...(isTouched && { [fieldId]: isTouched })
    }));

  const setValidator = (fieldId: string, validate: (value: string) => string | null) =>
    validators[fieldId] !== validate && setValidators((prevValidators) => ({ ...prevValidators, [fieldId]: validate }));

  // Accumulate and return errors from all fields with validators.
  const validate = () =>
    Object.entries(validators)?.reduce((acc: Record<string, string>, [id, validateField]) => {
      const fieldError = validateField(values[id]);

      if (fieldError) {
        acc[id] = fieldError;
      }

      return acc;
    }, {});

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        touched,
        isValid,
        setValues,
        setErrors,
        getValue,
        setValue,
        getError,
        setError,
        validate,
        setValidator,
        isTouched,
        setTouched: setFieldTouched
      }}
    >
      {typeof children === 'function' ? (
        <FormContext.Consumer>{(formContext) => children(formContext)}</FormContext.Consumer>
      ) : (
        children
      )}
    </FormContext.Provider>
  );
};
FormContextProvider.displayName = 'FormContextProvider';

export const useFormContext = () => React.useContext(FormContext);
