import { FunctionComponent, FormEvent, useState } from 'react';
import { NumberInput } from '@patternfly/react-core';

export const NumberInputCustomStep: FunctionComponent = () => {
  const [value, setValue] = useState<number | ''>(90);
  const step = 3;

  const stepper = (stepValue: number) => {
    setValue((value || 0) + stepValue);
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(value === '' ? value : +value);
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
