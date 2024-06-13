import React from 'react';
import { Slider, SliderOnChangeEvent, Content } from '@patternfly/react-core';

export const SliderDisabled: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(50);
  const steps = [
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

  const displayValue = () => {
    const step = steps.find((step) => step.value === value);
    return step ? step.label : 0;
  };

  return (
    <>
      <Content component="h3">Slider value is: {displayValue()}</Content>
      <Slider
        isDisabled
        value={value}
        onChange={(_event: SliderOnChangeEvent, value: number) => setValue(value)}
        customSteps={steps}
      />
    </>
  );
};
