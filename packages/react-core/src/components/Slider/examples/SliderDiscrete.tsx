import React from 'react';
import { Slider, SliderOnChangeEvent, Content } from '@patternfly/react-core';

export const SliderDiscrete: React.FunctionComponent = () => {
  const initialValues = {
    value1: 50,
    value2: 50,
    value3: 25,
    value4: 50,
    value5: 50,
    value6: 3,
    value7: 25
  };

  const [numValue, setNumValue] = React.useState(initialValues);

  const handleChange = (value: number, name: string) => {
    setNumValue({ ...numValue, [name]: value });
  };

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

  const stepsDiscreteWithMax = [
    { value: 0, label: 'A' },
    { value: 1, label: 'B' },
    { value: 2, label: 'C' },
    { value: 3, label: 'D' },
    { value: 4, label: 'E' },
    { value: 5, label: 'F' }
  ];

  const stepsDiscreteNoLinearWithMaxMin = [
    { value: 12, label: '12' },
    { value: 15, label: '15' },
    { value: 25, label: '25' },
    { value: 54, label: '54' },
    { value: 67, label: '67' },
    { value: 86, label: '86' }
  ];

  return (
    <>
      <Content component="h3">Slider value is: {numValue.value1}</Content>
      <Slider
        value={initialValues.value1}
        onChange={(_event: SliderOnChangeEvent, value: number) => handleChange(value, 'value1')}
        customSteps={steps}
      />
      <br />
      <Content component="h3">Slider value is: {numValue.value2}</Content>
      <Content component="small">(min = 0, max = 200, step = 50) </Content>
      <Slider
        value={initialValues.value2}
        onChange={(_event: SliderOnChangeEvent, value: number) => handleChange(value, 'value2')}
        max={200}
        step={50}
        showTicks
      />
      <br />
      <Content component="h3">Slider value is: {Math.floor(numValue.value3)}</Content>
      <Content component="small">(min = -25, max = 75, step = 10, boundaries not shown) </Content>
      <Slider
        value={initialValues.value3}
        onChange={(_event: SliderOnChangeEvent, value: number) => handleChange(value, 'value3')}
        min={-25}
        max={75}
        step={10}
        showTicks
        showBoundaries={false}
      />
      <br />
      <Content component="h3">Slider value is: {Math.floor(numValue.value4)}</Content>
      <Content component="small">(min = -25, max = 75, step = 10, boundaries shown) </Content>
      <Slider
        value={initialValues.value4}
        onChange={(_event: SliderOnChangeEvent, value: number) => handleChange(value, 'value4')}
        min={-25}
        max={75}
        step={10}
        showTicks
      />
      <br />
      <Content component="h3">Slider value is: {Math.floor(numValue.value5)}</Content>
      <Content component="small">(min = -25, max = 75, step = 10, boundaries shown, ticks not shown) </Content>
      <Slider
        value={initialValues.value5}
        onChange={(_event: SliderOnChangeEvent, value: number) => handleChange(value, 'value5')}
        min={-25}
        max={75}
        step={10}
      />
      <br />
      <Content component="h3">Slider value is: {Math.floor(numValue.value6)}</Content>
      <Content component="small">(max = 5, custom steps) </Content>
      <Slider
        value={initialValues.value6}
        showTicks
        max={5}
        customSteps={stepsDiscreteWithMax}
        onChange={(_event: SliderOnChangeEvent, value: number) => handleChange(value, 'value6')}
      />
      <br />
      <Content component="h3">Slider value is: {Math.floor(numValue.value7)}</Content>
      <Content component="small">(min = 12, max = 86, custom steps with non linear data) </Content>
      <Slider
        value={initialValues.value7}
        showTicks
        customSteps={stepsDiscreteNoLinearWithMaxMin}
        onChange={(_event: SliderOnChangeEvent, value: number) => handleChange(value, 'value7')}
        min={12}
        max={86}
      />
      <br />
    </>
  );
};
