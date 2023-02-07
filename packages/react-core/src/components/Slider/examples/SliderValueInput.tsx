import React from 'react';
import { Slider } from '@patternfly/react-core';

export const SliderValueInput: React.FunctionComponent = () => {
  const [valueDiscrete, setValueDiscrete] = React.useState(62.5);
  const [inputValueDiscrete, setInputValueDiscrete] = React.useState(5);
  const [valuePercent, setValuePercent] = React.useState(50);
  const [inputValuePercent, setInputValuePercent] = React.useState(50);
  const [valueContinuous, setValueContinuous] = React.useState(50);
  const [inputValueContinuous, setInputValueContinuous] = React.useState(50);

  const stepsDiscrete = [
    { value: 0, label: '0' },
    { value: 12.5, label: '1', isLabelHidden: true },
    { value: 25, label: '2' },
    { value: 37.5, label: '3', isLabelHidden: true },
    { value: 50, label: '4' },
    { value: 62.5, label: '5', isLabelHidden: true },
    { value: 75, label: '6' },
    { value: 87.5, label: '7', isLabelHidden: true },
    { value: 100, label: '8' }
  ];
  const stepsPercent = [
    { value: 0, label: '0%' },
    { value: 25, label: '25%', isLabelHidden: true },
    { value: 50, label: '50%' },
    { value: 75, label: '75%', isLabelHidden: true },
    { value: 100, label: '100%' }
  ];

  const onChangeDiscrete = (
    value: number,
    inputValue: number,
    setLocalInputValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let newValue;
    let newInputValue;

    if (inputValue === undefined) {
      const step = stepsDiscrete.find(step => step.value === value);
      newInputValue = step ? step.label : 0;
      newInputValue = Number(newInputValue);
      newValue = value;
    } else {
      const maxValue = Number(stepsDiscrete[stepsDiscrete.length - 1].label);
      if (inputValue > maxValue) {
        newValue = Number(stepsDiscrete[stepsDiscrete.length - 1].value);
        newInputValue = maxValue;
        setLocalInputValue(maxValue);
      } else {
        const minValue = Number(stepsDiscrete[0].label);
        if (inputValue < minValue) {
          newValue = Number(stepsDiscrete[0].value);
          newInputValue = minValue;
          setLocalInputValue(minValue);
        } else {
          const stepIndex = stepsDiscrete.findIndex(step => Number(step.label) >= inputValue);
          if (Number(stepsDiscrete[stepIndex].label) === inputValue) {
            newValue = stepsDiscrete[stepIndex].value;
            newInputValue = inputValue;
          } else {
            const midpoint = (Number(stepsDiscrete[stepIndex].label) + Number(stepsDiscrete[stepIndex - 1].label)) / 2;
            if (midpoint > inputValue) {
              newValue = stepsDiscrete[stepIndex - 1].value;
              newInputValue = Number(stepsDiscrete[stepIndex - 1].label);
            } else {
              newValue = stepsDiscrete[stepIndex].value;
              newInputValue = Number(stepsDiscrete[stepIndex].label);
            }
          }
        }
      }
    }

    setInputValueDiscrete(newInputValue);
    setValueDiscrete(newValue);
  };

  const onChangePercent = (
    value: number,
    inputValue: number,
    setLocalInputValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let newValue;
    let newInputValue;

    if (inputValue === undefined) {
      const step = stepsPercent.find(step => step.value === value);
      newInputValue = step ? step.label.slice(0, -1) : 0;
      newInputValue = Number(newInputValue);
      newValue = value;
    } else {
      const maxValue = Number(stepsPercent[stepsPercent.length - 1].label.slice(0, -1));
      if (inputValue > maxValue) {
        newValue = Number(stepsPercent[stepsPercent.length - 1].value);
        newInputValue = maxValue;
        setLocalInputValue(maxValue);
      } else {
        const minValue = Number(stepsPercent[0].label.slice(0, -1));
        if (inputValue < minValue) {
          newValue = minValue;
          setLocalInputValue(minValue);
        } else {
          const stepIndex = stepsPercent.findIndex(step => Number(step.label.slice(0, -1)) >= inputValue);
          if (Number(stepsPercent[stepIndex].label.slice(0, -1)) === inputValue) {
            newValue = stepsPercent[stepIndex].value;
            newInputValue = inputValue;
          } else {
            const midpoint =
              (Number(stepsPercent[stepIndex].label.slice(0, -1)) +
                Number(stepsPercent[stepIndex - 1].label.slice(0, -1))) /
              2;
            if (midpoint > inputValue) {
              newValue = stepsPercent[stepIndex - 1].value;
              newInputValue = Number(stepsPercent[stepIndex - 1].label.slice(0, -1));
            } else {
              newValue = stepsPercent[stepIndex].value;
              newInputValue = Number(stepsPercent[stepIndex].label.slice(0, -1));
            }
          }
        }
      }
    }

    setInputValuePercent(newInputValue);
    setValuePercent(newValue);
  };

  const onChangeContinuous = (
    value: number,
    inputValue: number,
    setLocalInputValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let newValue;
    if (inputValue === undefined) {
      newValue = Math.floor(value);
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
    setInputValueContinuous(newValue);
    setValueContinuous(newValue);
  };

  return (
    <>
      <Slider
        value={valueDiscrete}
        isInputVisible
        inputValue={inputValueDiscrete}
        customSteps={stepsDiscrete}
        onChange={onChangeDiscrete}
      />
      <br />
      <Slider
        value={valuePercent}
        isInputVisible
        inputValue={inputValuePercent}
        inputLabel="%"
        onChange={onChangePercent}
        customSteps={stepsPercent}
      />
      <br />
      <Slider
        value={valueContinuous}
        isInputVisible
        inputValue={inputValueContinuous}
        inputLabel="%"
        onChange={onChangeContinuous}
      />
    </>
  );
};
