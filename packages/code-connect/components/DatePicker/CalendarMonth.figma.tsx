import figma from '@figma/code-connect';
import { CalendarMonth } from '@patternfly/react-core';

// Documentation for CalendarMonth can be found at https://www.patternfly.org/components/calendar-month

figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7741-2677',
  {
    props: {
      date: '2025-06-16'
    },
    example: (props) => <CalendarMonth date={new Date(props.date)} onChange={() => {}} onMonthChange={() => {}} />
  }
);
