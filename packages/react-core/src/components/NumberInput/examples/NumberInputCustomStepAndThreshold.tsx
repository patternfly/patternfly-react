import React from 'react';
import { NumberInput } from '@patternfly/react-core';

export const NumberInputCustomStepAndThreshold: React.FunctionComponent = () => {
  const [value, setValue] = React.useState<number | ''>(90);
  const minValue = 90;
  const maxValue = 100;
  const step = 3;

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

  const stepper = (stepValue: number) => {
    setValue((value || 0) + stepValue);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(value === '' ? value : +value);
  };

  const onBlur = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const newValue = normalizeBetween(isNaN(+target.value) ? 0 : Number(target.value), minValue, maxValue);
    setValue(newValue);
  };

  return (
    <NumberInput
      value={value}
      min={minValue}
      max={maxValue}
      onMinus={() => stepper(-step)}
      onChange={onChange}
      onBlur={onBlur}
      onPlus={() => stepper(step)}
      inputName="input"
      inputAriaLabel="number input"
      minusBtnAriaLabel="minus"
      plusBtnAriaLabel="plus"
      allowEmptyInput
    />
  );
};
