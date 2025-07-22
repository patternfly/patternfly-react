import figma from '@figma/code-connect';
import { CalendarMonth, CalendarMonthInlineProps, Title } from '@patternfly/react-core';

// Documentation for CalendarMonth can be found at https://www.patternfly.org/components/calendar-month
const inlineProps: CalendarMonthInlineProps = {
  component: 'article',
  title: (
    <Title headingLevel="h4" id="favorite-date">
      Select your favorite date
    </Title>
  ),
  ariaLabelledby: 'favorite-date'
};

figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136846',
  {
    props: {
      date: '2025-06-16'
    },
    example: (props) => (
      <CalendarMonth date={props.date} inlineProps={inlineProps} onChange={() => {}} onMonthChange={() => {}} />
    )
  }
);

figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136846',
  {
    variant: { Type: 'With date range' },
    props: {
      startDate: new Date(2020, 10, 11),
      endDate: new Date(2020, 10, 24)
    },
    example: (props) => (
      <CalendarMonth
        date={props.startDate}
        inlineProps={inlineProps}
        onChange={() => {}}
        onMonthChange={() => {}}
        rangeStart={props.endDate}
      />
    )
  }
);
