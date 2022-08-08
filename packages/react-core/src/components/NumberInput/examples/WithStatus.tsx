import React from 'react';
import { NumberInput } from '@patternfly/react-core';

export const WithStatus: React.FunctionComponent = () => {
  const [validated, setValidated] = React.useState<'success' | 'error' | 'warning'>('success');
  const [value, setValue] = React.useState<number>(5);

  const onPlus = () => {
    const newVal = value + 1;
    setValue(newVal);
    validate(newVal);
  };

  const onMinus = () => {
    const newVal = value - 1;
    setValue(newVal);
    validate(newVal);
  };

  const validate = newVal => {
    const diff = Math.abs(5 - newVal);
    if (diff > 3) {
      setValidated('error');
    } else if (diff > 1) {
      setValidated('warning');
    } else {
      setValidated('success');
    }
  };
  return (
    <>
      Status will change to warning/error depending on how far from 5.
      <br />
      <NumberInput
        validated={validated}
        value={value}
        min={0}
        max={10}
        onMinus={onMinus}
        onPlus={onPlus}
        inputName="input"
        inputAriaLabel="number input"
        minusBtnAriaLabel="minus"
        plusBtnAriaLabel="plus"
      />
    </>
  );
};
