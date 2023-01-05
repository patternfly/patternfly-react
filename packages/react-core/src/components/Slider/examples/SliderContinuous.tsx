import React from 'react';
import { Checkbox, Slider, Text, TextVariants } from '@patternfly/react-core';

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
        onChange={setHasTooltipOverThumb}
        style={{ marginBottom: 20 }}
      />
      <Text component={TextVariants.h3}>Slider Value is: {value}</Text>
      <Slider hasTooltipOverThumb={hasTooltipOverThumb} value={value} onChange={setValue} />
      <br />
      <Text component={TextVariants.h3}>Slider value is: {valueCustom}</Text>
      <Slider
        onChange={setValueCustom}
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
