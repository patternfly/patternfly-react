import React, { useEffect } from 'react';
import { TextInput } from '@patternfly/react-core/dist/js/components/TextInput/TextInput';
import { Button } from '@patternfly/react-core/dist/js/components/Button';
import { Select, SelectOption } from '@patternfly/react-core/dist/js/components/Select';
import ArrowLeftIcon from '@patternfly/react-icons/dist/js/icons/arrow-left-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CalendarMonth/calendar-month';
// https://date-fns.org/v2.16.1/docs/format
import { format } from 'date-fns';
import { Locales, Locale } from '../../helpers';

export interface CalendarProps {
  /** Month/year to base other dates around */
  date: Date;
  /** How to format months in dropdown according to date-fns */
  monthFormat?: string;
  /** How to format days in header according to date-fns */
  dayFormat?: string;
  /** How to format days in buttons according to date-fns */
  buttonFormat?: string;
  /** Callback when date is selected */
  onChange?: (date: Date) => void;
  /** Specify the locale of the date. */
  locale?: Locale;
  /** Functions that returns if a date is valid and selectable */
  validators?: [(date: Date) => boolean];
}

// Must be numeric given current design
const yearFormat = 'yyyy';

const buildCalendar = (year: number, month: number, locale: Locale) => {
  const selectedDate = new Date(year, month);
  const firstDayOfWeek = new Date(selectedDate);
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + locale.options.weekStartsOn);
  // We will always show 6 weeks like google calendar
  // Assume we just want the numbers for now...
  const calendarWeeks = [] as Date[][];
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      week.push(new Date(firstDayOfWeek));
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
    }
    calendarWeeks.push(week);
  }

  return calendarWeeks;
};

const isSameDate = (d1: Date, d2: Date) =>
  d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

export const CalendarMonth = ({
  date: dateProp = new Date(),
  monthFormat = 'MMMM',
  dayFormat = 'EEEEE',
  buttonFormat = 'd',
  onChange = () => {},
  locale = Locales.enUS,
  validators = [() => true]
}: CalendarProps) => {
  const longMonthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    .map(monthNum => new Date(1990, monthNum))
    .map(date => format(date, monthFormat, { locale }))
    .reduce((prev, cur, index) => {
      prev[cur] = index;
      return prev;
    }, {} as { [key: string]: number });
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [focusedDate, setFocusedDate] = React.useState(dateProp);
  const focusRef = React.useRef<HTMLButtonElement>();

  useEffect(() => setFocusedDate(dateProp), [dateProp]);
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, [focusedDate]);

  const onMonthClick = (toAdd: -1 | 1) => {
    const newDate = new Date(focusedDate);
    newDate.setMonth(newDate.getMonth() + toAdd);
    setFocusedDate(newDate);
  };

  const onKeyDown = (ev: React.KeyboardEvent<HTMLTableSectionElement>) => {
    const newDate = new Date(focusedDate);
    if (ev.key === 'ArrowUp') {
      newDate.setDate(newDate.getDate() - 7);
    } else if (ev.key === 'ArrowRight') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (ev.key === 'ArrowDown') {
      newDate.setDate(newDate.getDate() + 7);
    } else if (ev.key === 'ArrowLeft') {
      newDate.setDate(newDate.getDate() - 1);
    }
    if (newDate.getTime() !== focusedDate.getTime()) {
      setFocusedDate(newDate);
    }
  };

  const today = new Date();
  const calendar = buildCalendar(focusedDate.getFullYear(), focusedDate.getMonth(), locale);
  return (
    <div className={styles.calendarMonth}>
      <div className={styles.calendarMonthHeader}>
        <div className={css(styles.calendarMonthHeaderNavControl, styles.modifiers.prevMonth)}>
          <Button variant="plain" aria-label="Previous month" onClick={() => onMonthClick(-1)}>
            <ArrowLeftIcon aria-hidden={true} />
          </Button>
        </div>
        <div className={styles.calendarMonthHeaderMonth}>
          <Select
            isOpen={isSelectOpen}
            onToggle={() => setIsSelectOpen(!isSelectOpen)}
            onSelect={(_ev, longMonth) => {
              // When we put CalendarMonth in a Popover we want the Popover's onDocumentClick
              // to see the SelectOption as a child so it doesn't close the Popover.
              setTimeout(() => {
                setIsSelectOpen(false);
                const monthNum = longMonthNames[longMonth as string];
                const newDate = new Date(focusedDate);
                newDate.setMonth(monthNum);
                setFocusedDate(newDate);
              }, 0);
            }}
            variant="single"
            selections={format(focusedDate, monthFormat, { locale })}
          >
            {Object.keys(longMonthNames).map((longMonth, index) => (
              <SelectOption
                key={index}
                value={longMonth}
                isSelected={longMonth === format(focusedDate, monthFormat, { locale })}
              />
            ))}
          </Select>
        </div>
        <div className={styles.calendarMonthHeaderYear}>
          <TextInput
            aria-label="Select year"
            type="number"
            value={format(focusedDate, yearFormat, { locale })}
            onChange={year => {
              const newDate = new Date(focusedDate);
              newDate.setFullYear(+year);
              setFocusedDate(newDate);
            }}
          />
        </div>
        <div className={css(styles.calendarMonthHeaderNavControl, styles.modifiers.nextMonth)}>
          <Button variant="plain" aria-label="Next month" onClick={() => onMonthClick(1)}>
            <ArrowRightIcon aria-hidden={true} />
          </Button>
        </div>
      </div>
      <table className={styles.calendarMonthCalendar}>
        <thead className={styles.calendarMonthDays}>
          <tr>
            {calendar[0]
              .map(date => format(date, dayFormat, { locale }))
              .map((shortName, index) => (
                <th key={index} className={styles.calendarMonthDay} scope="col">
                  {shortName}
                </th>
              ))}
          </tr>
        </thead>
        <tbody onKeyDown={onKeyDown}>
          {calendar.map((week, index) => (
            <tr key={index} className={styles.calendarMonthDatesRow}>
              {week.map((day, index) => {
                const isAdjacentMonth = day.getMonth() !== focusedDate.getMonth();
                const isToday = isSameDate(day, today);
                const isSelected = isSameDate(day, dateProp);
                const isFocused = isSameDate(day, focusedDate);
                const isValid = validators.every(validator => validator(day));
                return (
                  <td
                    key={index}
                    className={css(
                      styles.calendarMonthDatesCell,
                      isAdjacentMonth && styles.modifiers.adjacentMonth,
                      isToday && styles.modifiers.current,
                      isSelected && styles.modifiers.selected,
                      isFocused && styles.modifiers.focus,
                      !isValid && styles.modifiers.disabled
                    )}
                  >
                    <button
                      className={styles.calendarMonthDate}
                      onClick={() => onChange(day)}
                      tabIndex={isFocused ? 0 : -1}
                      disabled={!isValid}
                      {...(isFocused && { ref: focusRef })}
                    >
                      {/* Current design uses this, could custom render anything */}
                      {format(day, buttonFormat)}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
