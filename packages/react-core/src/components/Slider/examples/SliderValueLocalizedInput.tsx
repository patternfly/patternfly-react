import { useState } from 'react';
import { Content, Slider, SliderOnChangeEvent } from '@patternfly/react-core';

const boundarySteps = [
  { value: 0, label: '0' },
  { value: 1, label: '1' }
];

export const SliderValueLocalizedInput: React.FunctionComponent = () => {
  const [valueDe, setValueDe] = useState(0.6);
  const [inputValueDe, setInputValueDe] = useState(0.6);
  const [valueEn, setValueEn] = useState(0.5);
  const [inputValueEn, setInputValueEn] = useState(0.5);

  const onChangeDe = (
    _event: SliderOnChangeEvent,
    value: number,
    inputValue: number,
    setLocalInputValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (inputValue === undefined) {
      setValueDe(value);
      setInputValueDe(value);
    } else {
      const newValue = Math.min(1, Math.max(0, inputValue));
      if (newValue !== inputValue) {
        setLocalInputValue(newValue);
      }
      setValueDe(newValue);
      setInputValueDe(newValue);
    }
  };

  const onChangeEn = (
    _event: SliderOnChangeEvent,
    value: number,
    inputValue: number,
    setLocalInputValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (inputValue === undefined) {
      setValueEn(value);
      setInputValueEn(value);
    } else {
      const newValue = Math.min(1, Math.max(0, inputValue));
      if (newValue !== inputValue) {
        setLocalInputValue(newValue);
      }
      setValueEn(newValue);
      setInputValueEn(newValue);
    }
  };

  return (
    <>
      <Content component="small">German locale (de-DE) - uses a comma as the decimal separator</Content>
      <Slider
        value={valueDe}
        min={0}
        max={1}
        step={0.1}
        isInputVisible
        inputValue={inputValueDe}
        areCustomStepsContinuous
        customSteps={boundarySteps}
        locale="de-DE"
        onChange={onChangeDe}
      />
      <br />
      <Content component="small">English locale (en-US) - uses a period as the decimal separator</Content>
      <Slider
        value={valueEn}
        min={0}
        max={1}
        step={0.1}
        isInputVisible
        inputValue={inputValueEn}
        areCustomStepsContinuous
        customSteps={boundarySteps}
        locale="en-US"
        onChange={onChangeEn}
      />
    </>
  );
};
