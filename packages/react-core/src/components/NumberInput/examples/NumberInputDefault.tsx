import React from 'react';
import { NumberInput } from '@patternfly/react-core';

export const NumberInputDefault: React.FunctionComponent = () => {
  const [value, setValue] = React.useState<number | ''>(90);

  const onMinus = () => {
    const newValue = (value || 0) - 1;
    setValue(newValue);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(value === '' ? value : +value);
  };

  const onPlus = () => {
    const newValue = (value || 0) + 1;
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
      allowEmptyInput
    />
  );
};
