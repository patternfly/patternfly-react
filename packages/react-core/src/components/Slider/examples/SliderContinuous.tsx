import React from 'react';
import { Checkbox, Slider, SliderOnChangeEvent, Content } from '@patternfly/react-core';

export const SliderContinuous: React.FunctionComponent = () => {
  const [hasTooltipOverThumb, setHasTooltipOverThumb] = React.useState(false);
  const [value, setValue] = React.useState(50);
  const [valueCustom, setValueCustom] = React.useState(50);

  return (
    <>
      <Checkbox
        id="thumb-has-tooltip"
        label="hasTooltipOverThumb"
        isChecked={hasTooltipOverThumb}
        onChange={(_event: React.FormEvent<HTMLInputElement>, checked: boolean) => setHasTooltipOverThumb(checked)}
        style={{ marginBottom: 20 }}
      />
      <Content component="h3">Slider Value is: {value}</Content>
      <Slider
        hasTooltipOverThumb={hasTooltipOverThumb}
        value={value}
        onChange={(_event: SliderOnChangeEvent, value: number) => setValue(value)}
      />
      <br />
      <Content component="h3">Slider value is: {valueCustom}</Content>
      <Slider
        onChange={(_event: SliderOnChangeEvent, value: number) => setValueCustom(value)}
        value={valueCustom}
        areCustomStepsContinuous
        hasTooltipOverThumb={hasTooltipOverThumb}
        customSteps={[
          { value: 0, label: '0%' },
          { value: 100, label: '100%' }
        ]}
      />
    </>
  );
};
