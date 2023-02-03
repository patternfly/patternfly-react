import React from 'react';
import { Slider } from '@patternfly/react-core';

export const SliderThumbValueInput: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(50);
  const [inputValue, setInputValue] = React.useState(50);

  const onChange = (
    value: number,
    inputValue: number,
    setLocalInputValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let newValue;
    if (inputValue === undefined) {
      newValue = Number(value);
    } else {
      if (inputValue > 100) {
        newValue = 100;
        setLocalInputValue(100);
      } else if (inputValue < 0) {
        newValue = 0;
        setLocalInputValue(0);
      } else {
        newValue = Math.floor(inputValue);
      }
    }
    setValue(newValue);
    setInputValue(newValue);
  };

  return (
    <Slider
      value={value}
      isInputVisible
      inputValue={inputValue}
      inputLabel="%"
      inputPosition="aboveThumb"
      onChange={onChange}
    />
  );
};
