import figma from '@figma/code-connect';
import { TimePicker } from '@patternfly/react-core';

// Documentation for TimePicker can be found at https://www.patternfly.org/components/time-picker

figma.connect(
  TimePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136830',
  {
    props: {
      isDisabled: figma.enum('State', { Disabled: true }),
      isOpen: figma.enum('State', { Open: true })
    },
    example: (props) => (
      <TimePicker isDisabled={props.isDisabled} isOpen={props.isOpen} onChange={() => {}} time="3:35 AM" />
    )
  }
);

figma.connect(
  TimePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136830',
  {
    variant: { State: 'Invalid' },
    example: () => <TimePicker is24Hour minTime="9:30" maxTime="17:15" placeholder="14:00" />
  }
);
