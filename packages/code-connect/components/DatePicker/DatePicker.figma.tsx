import figma from '@figma/code-connect';
import { DatePicker } from '@patternfly/react-core';

// Documentation for DatePicker can be found at https://www.patternfly.org/components/date-picker

figma.connect(
  DatePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958:136841',
  {
    props: {},
    example: () => <DatePicker onChange={() => {}} />
  }
);
