import React from 'react';
import { NumberInput } from '@patternfly/react-core';

export const NumberInputUnit: React.FunctionComponent = () => {
  const [value1, setValue1] = React.useState<number | ''>(90);
  const [value2, setValue2] = React.useState<number | ''>(Number((1.0).toFixed(2)));

  const onMinus1 = () => setValue1((value1 || 0) - 1);
  const onChange1 = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue1(value === '' ? value : +value);
  };
  const onPlus1 = () => setValue1((value1 || 0) + 1);

  const onMinus2 = () => {
    const newValue = Number(((value2 || 0) - 0.01).toFixed(2));
    setValue2(newValue);
  };
  const onChange2 = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue2(value === '' ? value : +value);
  };
  const onPlus2 = () => {
    const newValue = Number(((value2 || 0) + 0.01).toFixed(2));
    setValue2(newValue);
  };

  return (
    <React.Fragment>
      <NumberInput
        value={value1}
        onMinus={onMinus1}
        onChange={onChange1}
        onPlus={onPlus1}
        inputName="input 1"
        inputAriaLabel="number input 1"
        minusBtnAriaLabel="minus 1"
        plusBtnAriaLabel="plus 1"
        unit="%"
        allowEmptyInput
      />
      <br />
      <br />
      <NumberInput
        value={value2}
        onMinus={onMinus2}
        onChange={onChange2}
        onPlus={onPlus2}
        inputName="input 2"
        inputAriaLabel="number input 2"
        minusBtnAriaLabel="minus 0.01"
        plusBtnAriaLabel="plus 0.01"
        unit="$"
        unitPosition="before"
        allowEmptyInput
      />
    </React.Fragment>
  );
};
