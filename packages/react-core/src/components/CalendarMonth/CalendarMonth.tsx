import React, { useEffect } from 'react';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Select, SelectList, SelectOption } from '../Select';
import { MenuToggle, MenuToggleElement } from '../MenuToggle';
import { InputGroup, InputGroupItem } from '../InputGroup';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/CalendarMonth/calendar-month';
import { getUniqueId } from '../../helpers/util';
import { isValidDate } from '../../helpers/datetimeUtils';

export enum Weekday {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export interface CalendarMonthInlineProps {
  /** Component wrapping the calendar month when used inline. Recommended to be 'article'. */
  component?: keyof JSX.IntrinsicElements;
  /** Title of the calendar rendered above the inline calendar month. Recommended to be a 'title' component. */
  title?: React.ReactNode;
  /** Id of the accessible label of the calendar month. Recommended to map to the title. */
  ariaLabelledby?: string;
}

/** Additional properties that extend from and can be passed to the main component. These
 * properties allow customizing the calendar formatting and aria-labels.
 */

export interface CalendarFormat {
  /** Accessible label for the date cells. */
  cellAriaLabel?: (date: Date) => string;
  /** How to format days in buttons in table cells. */
  dayFormat?: (date: Date) => React.ReactNode;
  /** If using the default formatters which locale to use. Undefined defaults to current locale.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
   */
  locale?: string;
  /** How to format days in header for screen readers. */
  longWeekdayFormat?: (date: Date) => React.ReactNode;
  /** How to format months in month select. */
  monthFormat?: (date: Date) => React.ReactNode;
  /** Accessible label for the previous month button. */
  prevMonthAriaLabel?: string;
  /** Accessible label for the next month button. */
  nextMonthAriaLabel?: string;
  /** Which date to start range styles from. */
  rangeStart?: Date;
  /** How to format week days in header. */
  weekdayFormat?: (date: Date) => React.ReactNode;
  /** Day of week that starts the week. 0 is Sunday, 6 is Saturday. */
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | Weekday;
  /** Accessible label for the year input. */
  yearInputAriaLabel?: string;
  /** Props used to ensure accessibility when displaying the calendar month inline. */
  inlineProps?: CalendarMonthInlineProps;
}

export interface CalendarProps extends CalendarFormat, Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** Additional classes to add to the outer div of the calendar month. */
  className?: string;
  /** Month/year to base other dates around. */
  date?: Date;
  /** Flag to set browser focus on the passed date. **/
  isDateFocused?: boolean;
  /** Callback when date is selected. */
  onChange?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, date: Date) => void;
  /** Callback when month or year is changed. */
  onMonthChange?: (
    event?: React.MouseEvent | React.ChangeEvent | React.FormEvent<HTMLInputElement>,
    newDate?: Date
  ) => void;
  /** @hide Internal prop to allow pressing escape in select menu to not close popover. */
  onSelectToggle?: (open: boolean) => void;
  /** Functions that returns if a date is valid and selectable. */
  validators?: ((date: Date) => boolean)[];
}

const buildCalendar = (year: number, month: number, weekStart: number, validators: ((date: Date) => boolean)[]) => {
  const defaultDate = new Date(year, month);

  const firstDayOfWeek = new Date(defaultDate);
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + weekStart);

  // We will show a maximum of 6 weeks like Google calendar
  // Assume we just want the numbers for now...
  const calendarWeeks = [];

  if (firstDayOfWeek.getMonth() === defaultDate.getMonth() && firstDayOfWeek.getDate() !== 1) {
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 7);
  }
  for (let i = 0; i < 6; i++) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      const date = new Date(firstDayOfWeek);
      week.push({
        date,
        isValid: validators.every((validator) => validator(date))
      });
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
    }
    calendarWeeks.push(week);
    if (firstDayOfWeek.getMonth() !== defaultDate.getMonth()) {
      break;
    }
  }

  return calendarWeeks;
};

const isSameDate = (d1: Date, d2: Date) =>
  d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

const today = new Date();

/** The main calendar month component. */

export const CalendarMonth = ({
  date: dateProp,
  locale = undefined,
  monthFormat = (date) => date.toLocaleDateString(locale, { month: 'long' }),
  weekdayFormat = (date) => date.toLocaleDateString(locale, { weekday: 'narrow' }),
  longWeekdayFormat = (date) => date.toLocaleDateString(locale, { weekday: 'long' }),
  dayFormat = (date) => date.getDate(),
  weekStart = 0, // Use the American Sunday as a default
  onChange = () => {},
  validators = [() => true],
  className,
  onSelectToggle = () => {},
  onMonthChange = () => {},
  rangeStart,
  prevMonthAriaLabel = 'Previous month',
  nextMonthAriaLabel = 'Next month',
  yearInputAriaLabel = 'Select year',
  cellAriaLabel,
  isDateFocused = false,
  inlineProps,
  ...props
}: CalendarProps) => {
  const longMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    .map((monthNum) => new Date(1990, monthNum))
    .map(monthFormat);
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);

  const getInitialDate = () => {
    if (isValidDate(dateProp)) {
      return dateProp;
    }
    if (isValidDate(rangeStart)) {
      return rangeStart;
    }
    return today;
  };
  const initialDate = getInitialDate();
  const [focusedDate, setFocusedDate] = React.useState(initialDate);

  // Must be numeric given current header design
  const yearFormat = (date: Date) => date.getFullYear();
  //
  const yearFormatted = yearFormat(focusedDate);
  const [yearInput, setYearInput] = React.useState(yearFormatted.toString());

  const [hoveredDate, setHoveredDate] = React.useState<Date>(undefined);
  const focusRef = React.useRef<HTMLButtonElement>();
  const [hiddenMonthId] = React.useState(getUniqueId('hidden-month-span'));
  const [shouldFocus, setShouldFocus] = React.useState(false);

  const isValidated = (date: Date) => validators.every((validator) => validator(date));
  const focusedDateValidated = isValidated(focusedDate);
  useEffect(() => {
    if (isValidDate(dateProp) && !isSameDate(focusedDate, dateProp)) {
      setFocusedDate(dateProp);
    } else if (!dateProp) {
      setFocusedDate(today);
    }
  }, [dateProp]);

  useEffect(() => {
    // Calendar month should not be focused on page load
    if ((shouldFocus || isDateFocused) && focusedDateValidated && focusRef.current) {
      focusRef.current.focus();
    }
  }, [focusedDate, isDateFocused, focusedDateValidated, focusRef]);

  const onMonthClick = (ev: React.MouseEvent, newDate: Date) => {
    setFocusedDate(newDate);
    setShouldFocus(false);
    onMonthChange(ev, newDate);
    setYearInput(yearFormat(newDate).toString());
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
    if (newDate.getTime() !== focusedDate.getTime() && isValidated(newDate)) {
      ev.preventDefault();
      setFocusedDate(newDate);
      setShouldFocus(true);
    }
  };

  const changeYear = (newYear: number) => changeMonth(focusedDate.getMonth(), newYear);

  const changeMonth = (newMonth: number, newYear?: number) =>
    new Date(newYear ?? focusedDate.getFullYear(), newMonth, 1);

  const MIN_YEAR = 1900;
  const MAX_YEAR = 2100;

  const handleYearInputChange = (event: React.FormEvent<HTMLInputElement>, yearStr: string) => {
    if (!/^\d{0,4}$/.test(yearStr)) {
      return;
    }

    setYearInput(yearStr);

    if (yearStr.length === 4) {
      const yearNum = Number(yearStr);

      if (yearNum >= MIN_YEAR && yearNum <= MAX_YEAR) {
        const newDate = changeYear(yearNum);
        setFocusedDate(newDate);
        setShouldFocus(false);

        // We need to manually focus the year input in FireFox when the scroll buttons are clicked, as FireFox doesn't place focus automatically
        (event.target as HTMLElement).focus();
        onMonthChange(event, newDate);
      } else {
        setYearInput(yearFormatted.toString());
      }
    }
  };

  const addMonth = (toAdd: -1 | 1) => {
    let newMonth = focusedDate.getMonth() + toAdd;
    let newYear = focusedDate.getFullYear();

    if (newMonth === -1) {
      newMonth = 11;
      newYear--;
    } else if (newMonth === 12) {
      newMonth = 0;
      newYear++;
    }

    return changeMonth(newMonth, newYear);
  };

  const prevMonth = addMonth(-1);
  const nextMonth = addMonth(1);
  const focusedYear = focusedDate.getFullYear();
  const focusedMonth = focusedDate.getMonth();
  const calendar = React.useMemo(
    () => buildCalendar(focusedYear, focusedMonth, weekStart, validators),
    [focusedYear, focusedMonth, weekStart, validators]
  );
  if (!focusedDateValidated) {
    const toFocus = calendar
      .reduce((acc, cur) => [...acc, ...cur], [])
      .filter(({ date, isValid }) => isValid && date.getMonth() === focusedMonth)
      .map(({ date }) => ({ date, days: Math.abs(focusedDate.getTime() - date.getTime()) }))
      .sort((o1, o2) => o1.days - o2.days)
      .map(({ date }) => date)[0];
    if (toFocus) {
      setFocusedDate(toFocus);
    }
  }
  const isHoveredDateValid = hoveredDate && isValidated(hoveredDate);
  const monthFormatted = monthFormat(focusedDate);

  const calendarToRender = (
    <div className={css(styles.calendarMonth, className)} {...props}>
      <div className={styles.calendarMonthHeader}>
        <div className={css(styles.calendarMonthHeaderNavControl, 'pf-m-prev-month')}>
          <Button
            variant="plain"
            aria-label={prevMonthAriaLabel}
            onClick={(ev: React.MouseEvent) => onMonthClick(ev, prevMonth)}
            icon={<AngleLeftIcon aria-hidden={true} />}
          />
        </div>
        <InputGroup>
          <InputGroupItem isFill>
            <div className={styles.calendarMonthHeaderMonth}>
              <span id={hiddenMonthId} hidden>
                Month
              </span>
              <Select
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    isExpanded={isSelectOpen}
                    style={{ width: '140px' } as React.CSSProperties}
                  >
                    {monthFormatted}
                  </MenuToggle>
                )}
                aria-labelledby={hiddenMonthId}
                isOpen={isSelectOpen}
                onOpenChange={(isOpen) => {
                  setIsSelectOpen(isOpen);
                  onSelectToggle(isOpen);
                }}
                onSelect={(ev, monthNum) => {
                  setIsSelectOpen(false);
                  onSelectToggle(false);
                  const newDate = changeMonth(Number(monthNum as string));
                  setFocusedDate(newDate);
                  setShouldFocus(false);
                  onMonthChange(ev, newDate);
                }}
                selected={monthFormatted}
                popperProps={{ appendTo: 'inline' }}
              >
                <SelectList>
                  {longMonths.map((longMonth, index) => (
                    <SelectOption key={index} value={index} isSelected={longMonth === monthFormatted}>
                      {longMonth}
                    </SelectOption>
                  ))}
                </SelectList>
              </Select>
            </div>
          </InputGroupItem>
          <InputGroupItem>
            <div className={styles.calendarMonthHeaderYear}>
              <TextInput
                aria-label={yearInputAriaLabel}
                type="number"
                value={yearInput}
                onChange={handleYearInputChange}
              />
            </div>
          </InputGroupItem>
        </InputGroup>
        <div className={css(styles.calendarMonthHeaderNavControl, 'pf-m-next-month')}>
          <Button
            variant="plain"
            aria-label={nextMonthAriaLabel}
            onClick={(ev: React.MouseEvent) => onMonthClick(ev, nextMonth)}
            icon={<AngleRightIcon aria-hidden={true} />}
          />
        </div>
      </div>
      <table className={styles.calendarMonthCalendar} onMouseLeave={() => setHoveredDate(undefined)}>
        <thead className={styles.calendarMonthDays}>
          <tr>
            {calendar[0].map(({ date }, index) => (
              <th key={index} className={styles.calendarMonthDay} scope="col">
                <span className="pf-v6-screen-reader">{longWeekdayFormat(date)}</span>
                <span aria-hidden>{weekdayFormat(date)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody onKeyDown={onKeyDown}>
          {calendar.map((week, index) => (
            <tr key={index} className={styles.calendarMonthDatesRow}>
              {week.map(({ date, isValid }, index) => {
                const dayFormatted = dayFormat(date);
                const isToday = isSameDate(date, today);
                const isSelected = isValidDate(dateProp) && isSameDate(date, dateProp);
                const isFocused = isSameDate(date, focusedDate);
                const isAdjacentMonth = date.getMonth() !== focusedDate.getMonth();
                const isRangeStart = isValidDate(rangeStart) && isSameDate(date, rangeStart);
                let isInRange = false;
                let isRangeEnd = false;
                if (isValidDate(rangeStart)) {
                  let rangeEndDate: Date;

                  if (isValidDate(dateProp)) {
                    rangeEndDate = dateProp;
                  }
                  if (isHoveredDateValid && (!isValidDate(dateProp) || hoveredDate > dateProp)) {
                    rangeEndDate = hoveredDate;
                  }

                  if (rangeEndDate) {
                    isInRange = date >= rangeStart && date <= rangeEndDate;
                    isRangeEnd = isSameDate(date, rangeEndDate);
                  }
                  // Core would likely need new styles for "is selected but disabled"
                }

                return (
                  <td
                    key={index}
                    className={css(
                      styles.calendarMonthDatesCell,
                      isAdjacentMonth && styles.modifiers.adjacentMonth,
                      isToday && styles.modifiers.current,
                      (isSelected || isRangeStart) && styles.modifiers.selected,
                      !isValid && !(isInRange || isRangeStart || isRangeEnd || isSelected) && styles.modifiers.disabled,
                      isInRange && styles.modifiers.inRange,
                      isRangeStart && styles.modifiers.startRange,
                      isRangeEnd && styles.modifiers.endRange
                    )}
                  >
                    <button
                      className={css(
                        styles.calendarMonthDate,
                        isRangeEnd && styles.modifiers.hover,
                        !isValid && styles.modifiers.disabled
                      )}
                      type="button"
                      onClick={(event) => onChange(event, date)}
                      onMouseOver={() => setHoveredDate(date)}
                      tabIndex={isFocused ? 0 : -1}
                      disabled={!isValid}
                      aria-label={
                        cellAriaLabel
                          ? cellAriaLabel(date)
                          : `${dayFormat(date)} ${monthFormat(date)} ${yearFormat(date)}`
                      }
                      {...(isFocused && { ref: focusRef })}
                    >
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

  if (inlineProps !== undefined) {
    const Component = (inlineProps.component ? inlineProps.component : 'article') as any;
    return (
      <Component {...(inlineProps.ariaLabelledby && { 'aria-labelledby': inlineProps.ariaLabelledby })}>
        {inlineProps.title}
        {calendarToRender}
      </Component>
    );
  }
  return calendarToRender;
};
CalendarMonth.displayName = 'CalendarMonth';
