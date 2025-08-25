import figma from '@figma/code-connect';
import { CalendarMonth, Title } from '@patternfly/react-core';

// Documentation for CalendarMonth can be found at https://www.patternfly.org/components/calendar-month
const sharedProps = {
  inlineProps: {
    component: 'article',
    title: (
      <Title headingLevel="h4" id="favorite-date">
        Select your favorite date
      </Title>
    )
  }
};

figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136846',
  {
    props: {
      ...sharedProps,
      date: '2025-06-16'
    },
    example: (props) => (
      <CalendarMonth date={props.date} inlineProps={props.inlineProps} onChange={() => {}} onMonthChange={() => {}} />
    )
  }
);

figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136846',
  {
    props: {
      ...sharedProps,
      variant: { Type: 'With date range' },
      startDate: new Date(2020, 10, 11),
      endDate: new Date(2020, 10, 24)
    },
    example: (props) => (
      <CalendarMonth
        date={props.endDate}
        inlineProps={props.inlineProps}
        aria-labelledby="favorite-date"
        onChange={() => {}}
        onMonthChange={() => {}}
        rangeStart={props.startDate}
      />
    )
  }
);
