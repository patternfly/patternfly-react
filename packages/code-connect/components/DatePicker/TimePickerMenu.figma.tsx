import figma from '@figma/code-connect';
import { TimePicker } from '@patternfly/react-core';

// Documentation for TimePicker can be found at https://www.patternfly.org/components/time-picker

figma.connect(
  TimePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136828',
  {
    example: () => <TimePicker time="3:35 AM" onChange={() => {}} />
  }
);
