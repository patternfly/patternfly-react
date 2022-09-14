import React from 'react';
import { NumberInput } from '@patternfly/react-core';

export const NumberInputDefault: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(90);

  const onMinus = () => {
    const newValue = value - 1;
    setValue(newValue);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setValue(Number(target.value));
  };

  const onPlus = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  return (
    <NumberInput
      value={value}
      onMinus={onMinus}
      onChange={onChange}
      onPlus={onPlus}
      inputName="input"
      inputAriaLabel="number input"
      minusBtnAriaLabel="minus"
      plusBtnAriaLabel="plus"
    />
  );
};
