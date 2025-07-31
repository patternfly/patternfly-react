import figma from '@figma/code-connect';
import { CalendarMonth, Title } from '@patternfly/react-core';

// Documentation for CalendarMonth can be found at https://www.patternfly.org/components/calendar-month

figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136846',
  {
    props: {
      date: '2025-06-16'
    },
    example: (props) => (
      <CalendarMonth
        date={props.date}
        inlineProps={{ component: 'article', ariaLabelledby: 'favorite-date' }}
        onChange={() => {}}
        onMonthChange={() => {}}
      />
    )
  }
);

figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136846',
  {
    variant: { Type: 'With date range' },
    props: {
      rangeStart: new Date(2020, 10, 11),
      date: new Date(2020, 10, 24)
    },
    example: (props) => (
      <>
        <Title headingLevel="h4" id="favorite-date">
          Select your favorite date
        </Title>
        <CalendarMonth
          date={props.date}
          inlineProps={{ component: 'article', ariaLabelledby: 'favorite-date' }}
          onChange={() => {}}
          onMonthChange={() => {}}
          rangeStart={props.rangeStart}
        />
      </>
    )
  }
);
