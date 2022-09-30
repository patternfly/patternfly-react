import React from 'react';
import { NumberInput } from '@patternfly/react-core';

export const NumberInputCustomStep: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(90);
  const step = 3;

  const stepper = (stepValue: number) => {
    setValue(value + stepValue);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setValue(Number(target.value));
  };

  return (
    <NumberInput
      value={value}
      onMinus={() => stepper(-step)}
      onChange={onChange}
      onPlus={() => stepper(step)}
      inputName="input"
      inputAriaLabel="number input"
      minusBtnAriaLabel="minus"
      plusBtnAriaLabel="plus"
    />
  );
};
