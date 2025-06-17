import figma from '@figma/code-connect';
import { Slider } from '@patternfly/react-core';

figma.connect(
  Slider,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3155-97956&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      leftAction: figma.boolean('Left action'),
      minmaxValues: figma.boolean('Min/max values'),
      rightAction: figma.boolean('Right action'),
      valueInput: figma.boolean('Value input'),

      // enum
      state: figma.enum('State', {
        Default: undefined,
        Active: 'active',
        Disabled: 'disabled',
        Hover: 'hover'
      }),
      isDisabled: figma.enum('State', { Disabled: true }),
      type: figma.enum('Type', {
        Continuous: 'continuous',
        Discrete: 'discrete'
      })
    },
    example: (props) => (
      // Documentation for Slider can be found at https://www.patternfly.org/components/slider
      <Slider
        areCustomStepsContinuous={props.type}
        isDisabled={props.isDisabled}
        showBoundaries={props.minmaxValues}
        showTicks={props.type}
      />
    )
  }
);
