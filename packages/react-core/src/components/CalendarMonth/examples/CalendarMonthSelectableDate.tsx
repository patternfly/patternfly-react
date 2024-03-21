import {
  useState,
  type FunctionComponent,
  type MouseEvent as ReactMouseEvent,
  type ChangeEvent as ReactChangeEvent,
  type FormEvent as ReactFormEvent
} from 'react';
import { CalendarMonth, Title, CalendarMonthInlineProps } from '@patternfly/react-core';

export const CalendarMonthSelectableDate: FunctionComponent = () => {
  const [date, setDate] = useState(new Date(2020, 10, 24));

  const onMonthChange = (
    _event: ReactMouseEvent | ReactChangeEvent | ReactFormEvent<HTMLInputElement> | undefined,
    newDate: Date
  ) => {
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
      <CalendarMonth
        date={date}
        onChange={(_event: ReactMouseEvent<HTMLButtonElement, MouseEvent>, date: Date) => setDate(date)}
        onMonthChange={onMonthChange}
        inlineProps={inlineProps}
      />
      <pre>Selected date: {date.toString()}</pre>
    </>
  );
};
