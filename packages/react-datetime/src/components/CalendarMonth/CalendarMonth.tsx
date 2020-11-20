import React, { useEffect } from 'react';
import { TextInput } from '@patternfly/react-core/dist/js/components/TextInput/TextInput';
import { Button } from '@patternfly/react-core/dist/js/components/Button';
import { Select, SelectOption } from '@patternfly/react-core/dist/js/components/Select';
import ArrowLeftIcon from '@patternfly/react-icons/dist/js/icons/arrow-left-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CalendarMonth/calendar-month';
import commonStyles from '@patternfly/react-styles/css/base/patternfly-common';
import { getUniqueId } from '@patternfly/react-core/dist/js/helpers/util';

export enum Weekday {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export interface CalendarFormat {
  /** How to format months in Select */
  monthFormat?: (date: Date) => React.ReactNode;
  /** How to format week days in header */
  weekdayFormat?: (date: Date) => React.ReactNode;
  /** How to format days in header for screen readers */
  longWeekdayFormat?: (date: Date) => React.ReactNode;
  /** How to format days in buttons in table cells */
  dayFormat?: (date: Date) => React.ReactNode;
  /** If using the default formatters which locale to use. Undefined defaults to current locale. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation */
  locale?: string;
  /** Day of week that starts the week. 0 is Sunday, 6 is Saturday. */
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | Weekday;
}

export interface CalendarProps extends CalendarFormat, Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** Month/year to base other dates around */
  date: Date;
  /** Callback when date is selected */
  onChange?: (date: Date) => void;
  /** Functions that returns if a date is valid and selectable */
  validators?: ((date: Date) => boolean)[];
  /** Classname to add to outer div */
  className?: string;
  /** @hide Internal prop to allow pressing escape in select menu to not close popover */
  onSelectToggle?: (open: boolean) => void;
}

// Must be numeric given current header design
const yearFormat = (date: Date) => date.getFullYear();

const buildCalendar = (year: number, month: number, weekStart: number) => {
  const selectedDate = new Date(year, month);
  const firstDayOfWeek = new Date(selectedDate);
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + weekStart);
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
  locale = undefined,
  monthFormat = date => date.toLocaleDateString(locale, { month: 'long' }),
  weekdayFormat = date => date.toLocaleDateString(locale, { weekday: 'narrow' }),
  longWeekdayFormat = date => date.toLocaleDateString(locale, { weekday: 'long' }),
  dayFormat = date => date.getDate(),
  weekStart = 0, // Use the American Sunday as a default
  onChange = () => {},
  validators = [() => true],
  className,
  onSelectToggle = () => {},
  ...props
}: CalendarProps) => {
  const longMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(monthNum => new Date(1990, monthNum)).map(monthFormat);
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [focusedDate, setFocusedDate] = React.useState(dateProp);
  const focusRef = React.useRef<HTMLButtonElement>();
  const [hiddenMonthId] = React.useState(getUniqueId('hidden-month-span'));
  const [focusDate, setFocusDate] = React.useState(true);

  useEffect(() => setFocusedDate(dateProp), [dateProp]);
  useEffect(() => {
    // When using header controls don't move focus
    if (focusDate) {
      if (focusRef.current) {
        focusRef.current.focus();
      }
    } else {
      setFocusDate(true);
    }
  }, [focusedDate]);

  const onMonthClick = (toAdd: -1 | 1) => {
    const newDate = new Date(focusedDate);
    newDate.setMonth(newDate.getMonth() + toAdd);
    setFocusedDate(newDate);
    setFocusDate(false);
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
      setFocusDate(true);
    }
  };

  const today = new Date();
  const calendar = buildCalendar(focusedDate.getFullYear(), focusedDate.getMonth(), weekStart);
  const monthFormatted = monthFormat(focusedDate);
  const yearFormatted = yearFormat(focusedDate);
  return (
    <div className={css(styles.calendarMonth, className)} {...props}>
      <div className={styles.calendarMonthHeader}>
        <div className={css(styles.calendarMonthHeaderNavControl, styles.modifiers.prevMonth)}>
          <Button variant="plain" aria-label="Previous month" onClick={() => onMonthClick(-1)}>
            <ArrowLeftIcon aria-hidden={true} />
          </Button>
        </div>
        <div className={styles.calendarMonthHeaderMonth}>
          <span id={hiddenMonthId} hidden>
            Month
          </span>
          <Select
            // Max width with "September"
            width="140px"
            aria-labelledby={hiddenMonthId}
            isOpen={isSelectOpen}
            onToggle={() => {
              setIsSelectOpen(!isSelectOpen);
              onSelectToggle(!isSelectOpen);
            }}
            onSelect={(_ev, monthNum) => {
              // When we put CalendarMonth in a Popover we want the Popover's onDocumentClick
              // to see the SelectOption as a child so it doesn't close the Popover.
              setIsSelectOpen(false);
              onSelectToggle(false);
              const newDate = new Date(focusedDate);
              newDate.setMonth(Number(monthNum as string));
              setFocusedDate(newDate);
              setFocusDate(false);
            }}
            variant="single"
            selections={monthFormatted}
          >
            {longMonths.map((longMonth, index) => (
              <SelectOption key={index} value={index} isSelected={longMonth === monthFormatted}>
                {longMonth}
              </SelectOption>
            ))}
          </Select>
        </div>
        <div className={styles.calendarMonthHeaderYear}>
          <TextInput
            aria-label="Select year"
            type="number"
            value={yearFormatted}
            onChange={year => {
              const newDate = new Date(focusedDate);
              newDate.setFullYear(+year);
              setFocusedDate(newDate);
              setFocusDate(false);
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
            {calendar[0].map((date, index) => (
              <th key={index} className={styles.calendarMonthDay} scope="col">
                <span className={commonStyles.screenReader}>{longWeekdayFormat(date)}</span>
                <span aria-hidden>{weekdayFormat(date)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody onKeyDown={onKeyDown}>
          {calendar.map((week, index) => (
            <tr key={index} className={styles.calendarMonthDatesRow}>
              {week.map((day, index) => {
                const isToday = isSameDate(day, today);
                const isSelected = isSameDate(day, dateProp);
                const isFocused = isSameDate(day, focusedDate);
                const isValid = validators.every(validator => validator(day));
                const isAdjacentMonth = day.getMonth() !== focusedDate.getMonth();
                const dayFormatted = dayFormat(day);

                return (
                  <td
                    key={index}
                    className={css(
                      styles.calendarMonthDatesCell,
                      isAdjacentMonth && styles.modifiers.adjacentMonth,
                      isToday && styles.modifiers.current,
                      isSelected && styles.modifiers.selected,
                      !isValid && styles.modifiers.disabled
                    )}
                  >
                    <button
                      className={css(styles.calendarMonthDate, isFocused && styles.modifiers.hover)}
                      onClick={() => onChange(day)}
                      tabIndex={isFocused ? 0 : -1}
                      disabled={!isValid}
                      aria-label={`${dayFormatted} ${monthFormatted} ${yearFormatted}`}
                      {...(isFocused && { ref: focusRef })}
                    >
                      {/* Current design uses this, could custom render anything */}
                      {dayFormatted}
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
