import React from 'react';
import { CalendarMonth, Title, CalendarMonthInlineProps } from '@patternfly/react-core';

export const CalendarMonthSelectableDate: React.FunctionComponent = () => {
  const [date, setDate] = React.useState(new Date(2020, 10, 24));

  const onMonthChange = (newDate: Date) => {
    // eslint-disable-next-line no-console
    console.log(`updated month: ${newDate.getMonth()}, updated year: ${newDate.getFullYear()}`);
  };

  const inlineProps: CalendarMonthInlineProps = {
    component: 'article',
    title: (
      <Title headingLevel="h4" id="favorite-date">
        Select your favorite date
      </Title>
    ),
    ariaLabelledby: 'favorite-date'
  };

  return (
    <>
      <CalendarMonth date={date} onChange={setDate} onMonthChange={onMonthChange} inlineProps={inlineProps} />
      <pre>Selected date: {date.toString()}</pre>
    </>
  );
};
