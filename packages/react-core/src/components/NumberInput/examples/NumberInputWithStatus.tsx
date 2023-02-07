import React from 'react';
import { NumberInput, ValidatedOptions } from '@patternfly/react-core';

export const NumberInputWithStatus: React.FunctionComponent = () => {
  const max = 10;
  const min = 0;

  const [validated, setValidated] = React.useState<ValidatedOptions>(ValidatedOptions.success);
  const [value, setValue] = React.useReducer((state, newVal) => Math.max(min, Math.min(max, Number(newVal))), 5);

  const onPlus = () => {
    const newVal = (value || 0) + 1;
    setValue(newVal);
    validate(newVal);
  };

  const onMinus = () => {
    const newVal = (value || 0) - 1;
    setValue(newVal);
    validate(newVal);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(value === '' ? value : +value);
    validate(value);
  };

  const validate = newVal => {
    const diff = Math.abs(5 - newVal);
    if (diff > 3) {
      setValidated(ValidatedOptions.error);
    } else if (diff > 1) {
      setValidated(ValidatedOptions.warning);
    } else {
      setValidated(ValidatedOptions.success);
    }
  };
  return (
    <>
      In the following example, the validated status will update based on the value of the number input and how far from
      the number 5 it is.
      <br />
      <NumberInput
        validated={validated}
        value={value}
        min={0}
        max={10}
        onMinus={onMinus}
        onPlus={onPlus}
        onChange={onChange}
        inputName="input"
        inputAriaLabel="number input"
        minusBtnAriaLabel="minus"
        plusBtnAriaLabel="plus"
        allowEmptyInput
      />
    </>
  );
};
