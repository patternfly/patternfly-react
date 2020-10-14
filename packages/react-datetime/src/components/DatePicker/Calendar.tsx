import React, { useEffect } from 'react';
import { TextInput } from '@patternfly/react-core/dist/js/components/TextInput/TextInput';
import { Button } from '@patternfly/react-core/dist/js/components/Button';
import { Select, SelectOption } from '@patternfly/react-core/dist/js/components/Select';
import ArrowLeftIcon from '@patternfly/react-icons/dist/js/icons/arrow-left-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
// https://date-fns.org/v2.16.1/docs/format
import { format, Locale } from 'date-fns';

export interface CalendarProps {
  /** Month/year to base other dates around */
  date: Date;
  /** How to format months in dropdown according to date-fns */
  monthFormat?: string;
  /** How to format days in header according to date-fns */
  dayFormat?: string;
  /** Callback when date is selected */
  onChange?: (date: Date) => void;
  /** Specify the locale of the date. */
  locale?: Locale;
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

export const Calendar = ({
  date: dateProp,
  monthFormat = 'MMMM',
  dayFormat = 'EEE',
  onChange = () => {},
  locale
}: CalendarProps) => {
  const longMonthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    .map(monthNum => new Date(1990, monthNum))
    .map(date => format(date, monthFormat, { locale }))
    .reduce((prev, cur, index) => {
      prev[cur] = index;
      return prev;
    }, {} as { [key: string]: number });
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [selectedMonth, setSelectedMonth] = React.useState(format(dateProp, monthFormat, { locale }));
  const [selectedYear, setSelectedYear] = React.useState(format(dateProp, yearFormat, { locale }));
  useEffect(() => {
    setSelectedMonth(format(dateProp, monthFormat, { locale }));
    setSelectedYear(format(dateProp, yearFormat, { locale }));
  }, [dateProp]);

  const onMonthClick = (toAdd: -1 | 1) => {
    let newMonth = longMonthNames[selectedMonth] + toAdd;
    if (newMonth === 12) {
      setSelectedYear(+selectedYear + 1 + '');
      newMonth = 0;
    } else if (newMonth === -1) {
      setSelectedYear(+selectedYear - 1 + '');
      newMonth = 11;
    }
    setSelectedMonth(Object.keys(longMonthNames)[newMonth]);
  };

  const calendar = buildCalendar(+selectedYear, longMonthNames[selectedMonth], locale);
  return (
    <table style={{ width: '340px', tableLayout: 'fixed' }}>
      <thead>
        <tr>
          <td colSpan={1}>
            <Button isInline onClick={() => onMonthClick(-1)}>
              <ArrowLeftIcon />
            </Button>
          </td>
          <td colSpan={3}>
            <Select
              maxHeight="336px"
              isOpen={isSelectOpen}
              onToggle={() => setIsSelectOpen(!isSelectOpen)}
              onSelect={(_ev, longMonth) => {
                setIsSelectOpen(false);
                setSelectedMonth(longMonth as string);
              }}
              variant="single"
              selections={selectedMonth}
            >
              {Object.keys(longMonthNames).map(longMonth => (
                <SelectOption key={longMonth} value={longMonth} isSelected={longMonth === selectedMonth} />
              ))}
            </Select>
          </td>
          <td colSpan={2}>
            <TextInput
              aria-label="Select a year"
              type="number"
              value={selectedYear}
              onChange={year => setSelectedYear(year)}
            />
          </td>
          <td colSpan={1}>
            <Button isInline onClick={() => onMonthClick(1)}>
              <ArrowRightIcon />
            </Button>
          </td>
        </tr>
        <tr>
          {calendar[0]
            .map(date => format(date, dayFormat, { locale }))
            .map(shortName => (
              <th key={shortName} style={{ width: '14.285714285%' }}>
                {shortName}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {calendar.map((week, index) => (
          <tr key={index}>
            {week.map((day, index) => (
              <td key={index}>
                <button style={{ width: '100%' }} onClick={() => onChange(day)}>
                  {/* Current design uses this, could custom render anything */}
                  {format(day, 'd')}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
