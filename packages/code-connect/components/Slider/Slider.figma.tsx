import figma from '@figma/code-connect';
import { Button, Slider } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

// TODO: DESIGN: Define left/right actions
// Documentation for Slider can be found at https://www.patternfly.org/components/slider

figma.connect(
  Slider,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3155-97956&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      isInputVisible: figma.boolean('Value input'),
      showBoundaries: figma.boolean('Min/max values'),
      startActions: figma.boolean('Left action', {
        true: <Button variant="plain" aria-label="Minus" onClick={() => {}} icon={<MinusIcon />} />,
        false: undefined
      }),
      endActions: figma.boolean('Right action', {
        true: <Button variant="plain" aria-label="Plus" onClick={() => {}} icon={<PlusIcon />} />,
        false: undefined
      }),

      // enum
      areCustomStepsContinuous: figma.enum('Type', { Continuous: true }),
      isDisabled: figma.enum('State', { Disabled: true }),
      showTicks: figma.enum('Type', { Discrete: true })
    },
    example: (props) => (
      <Slider
        isInputVisible={props.isInputVisible}
        showBoundaries={props.showBoundaries}
        startActions={props.startActions}
        endActions={props.endActions}
        areCustomStepsContinuous={props.areCustomStepsContinuous}
        isDisabled={props.isDisabled}
        showTicks={props.showTicks}
        max={200}
        min={0}
        step={50}
        value={100}
      />
    )
  }
);
