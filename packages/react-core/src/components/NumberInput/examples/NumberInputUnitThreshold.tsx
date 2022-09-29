import React from 'react';
import { NumberInput } from '@patternfly/react-core';

export const NumberInputUnitThreshold: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);
  const minValue = 0;
  const maxValue = 10;

  const normalizeBetween = (value, min, max) => {
    if (min !== undefined && max !== undefined) {
      return Math.max(Math.min(value, max), min);
    } else if (value <= min) {
      return min;
    } else if (value >= max) {
      return max;
    }
    return value;
  };

  const onMinus = () => {
    const newValue = normalizeBetween(value - 1, minValue, maxValue);
    setValue(newValue);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const newValue = normalizeBetween(isNaN(+target.value) ? 0 : Number(target.value), minValue, maxValue);
    setValue(newValue);
  };

  const onPlus = () => {
    const newValue = normalizeBetween(value + 1, minValue, maxValue);
    setValue(newValue);
  };

  return (
    <React.Fragment>
      With a minimum value of 0 and maximum value of 10
      <br />
      <NumberInput
        value={value}
        min={minValue}
        max={maxValue}
        onMinus={onMinus}
        onChange={onChange}
        onPlus={onPlus}
        inputName="input"
        inputAriaLabel="number input"
        minusBtnAriaLabel="minus"
        plusBtnAriaLabel="plus"
        unit="%"
      />
    </React.Fragment>
  );
};
