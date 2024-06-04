import { Slider, SliderOnChangeEvent } from '@patternfly/react-core';
import { useState, useEffect } from 'react';

export const SliderDemo = () => {
  const [valueDiscrete, setValueDiscrete] = useState(62.5);
  const [valuePercent, setValuePercent] = useState(50);
  const [inputValuePercent, setInputValuePercent] = useState(50);
  const [valueContinuous, setValueContinuous] = useState(50);
  const [inputValueContinuous, setInputValueContinuous] = useState(50);
  const [customStepsValue, setCustomStepsValue] = useState(20);
  const [disabledValue, setDisabledValue] = useState(20);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const customSteps = [
    { value: 0, label: '0' },
    { value: 20, label: '20' },
    { value: 40, label: '40' },
    { value: 60, label: '60' },
    { value: 80, label: '80' },
    { value: 100, label: '100' }
  ];

  const onChangeDiscrete = (_event: SliderOnChangeEvent, value: number, inputValue?: number) => {
    let newValue;

    if (!inputValue) {
      newValue = value;
    } else {
      const maxValue = Number(stepsDiscrete[stepsDiscrete.length - 1].label);
      if (inputValue > maxValue) {
        newValue = Number(stepsDiscrete[stepsDiscrete.length - 1].value);
      } else {
        const stepIndex = stepsDiscrete.findIndex((step) => Number(step.label) >= inputValue);
        if (Number(stepsDiscrete[stepIndex].label) === inputValue) {
          newValue = stepsDiscrete[stepIndex].value;
        } else {
          const midpoint = (Number(stepsDiscrete[stepIndex].label) + Number(stepsDiscrete[stepIndex - 1].label)) / 2;
          if (midpoint > inputValue) {
            newValue = stepsDiscrete[stepIndex - 1].value;
          } else {
            newValue = stepsDiscrete[stepIndex].value;
          }
        }
      }
    }

    setValueDiscrete(newValue);
  };

  const onChangePercent = (_event: SliderOnChangeEvent, value: number, inputValue?: number) => {
    let newValue = value;
    let newInputValue = inputValue;

    const getStepLabelValue = (label: string) => Number(label.slice(0, -1));

    if (!inputValue) {
      const step = stepsPercent.find((step) => step.value === value);
      newInputValue = step ? getStepLabelValue(step.label) : 0;
    } else {
      const maxValue = getStepLabelValue(stepsPercent[stepsPercent.length - 1].label);

      if (inputValue > maxValue) {
        newValue = stepsPercent[stepsPercent.length - 1].value;
        newInputValue = maxValue;
      } else {
        const stepIndex = stepsPercent.findIndex((step) => getStepLabelValue(step.label) >= inputValue);
        const currentStepValue = getStepLabelValue(stepsPercent[stepIndex].label);

        if (currentStepValue === inputValue) {
          newValue = stepsPercent[stepIndex].value;
          newInputValue = currentStepValue;
        } else {
          const previousStepValue = getStepLabelValue(stepsPercent[stepIndex - 1].label);
          const midpoint = (currentStepValue + previousStepValue) / 2;

          if (inputValue < midpoint) {
            newValue = stepsPercent[stepIndex - 1].value;
            newInputValue = previousStepValue;
          } else {
            newValue = stepsPercent[stepIndex].value;
            newInputValue = currentStepValue;
          }
        }
      }
    }

    setValuePercent(newValue);
    setInputValuePercent(newInputValue);
  };

  const onChangeContinuous = (_event: SliderOnChangeEvent, value: number) => {
    const newValue = Math.floor(value);
    setValueContinuous(newValue);
    setInputValueContinuous(newValue);
  };

  const onChangeCustomSteps = (_event: SliderOnChangeEvent, value: number) => {
    setCustomStepsValue(value);
  };

  const onChangeDisabled = (_event: SliderOnChangeEvent, value: number) => {
    setDisabledValue(value);
  };

  return (
    <>
      <Slider id="discrete-slider" value={valueDiscrete} customSteps={stepsDiscrete} onChange={onChangeDiscrete} />
      <br />
      <Slider
        id="discrete-slider-input-label"
        value={valuePercent}
        isInputVisible
        inputValue={inputValuePercent}
        inputLabel="%"
        onChange={onChangePercent}
        customSteps={stepsPercent}
      />
      <br />
      <Slider
        id="continuous-slider"
        value={valueContinuous}
        isInputVisible
        inputPosition="aboveThumb"
        inputValue={inputValueContinuous}
        inputLabel="%"
        onChange={onChangeContinuous}
      />
      <br />
      <Slider onChange={onChangeDisabled} value={disabledValue} id="disabled-slider" isDisabled inputLabel="%" />
      <br />
      <Slider
        id="custom-steps-slider"
        value={customStepsValue}
        customSteps={customSteps}
        onChange={onChangeCustomSteps}
      />
    </>
  );
};
