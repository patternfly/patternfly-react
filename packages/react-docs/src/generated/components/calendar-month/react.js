import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Calendar month",
  "section": "components",
  "source": "react",
  "slug": "/components/calendar-month/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/CalendarMonth/examples/CalendarMonth.md",
  "propComponents": [
    {
      "name": "CalendarMonth",
      "description": "",
      "props": [
        {
          "name": "cellAriaLabel",
          "type": "(date: Date) => string",
          "description": "Aria-label for the date cells"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classname to add to outer div"
        },
        {
          "name": "date",
          "type": "Date",
          "description": "Month/year to base other dates around"
        },
        {
          "name": "dayFormat",
          "type": "(date: Date) => React.ReactNode",
          "description": "How to format days in buttons in table cells",
          "defaultValue": "date => date.getDate()"
        },
        {
          "name": "isDateFocused",
          "type": "boolean",
          "description": "Flag to set browser focus on the passed date *",
          "defaultValue": "false"
        },
        {
          "name": "locale",
          "type": "string",
          "description": "If using the default formatters which locale to use. Undefined defaults to current locale. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation",
          "defaultValue": "undefined"
        },
        {
          "name": "longWeekdayFormat",
          "type": "(date: Date) => React.ReactNode",
          "description": "How to format days in header for screen readers",
          "defaultValue": "date => date.toLocaleDateString(locale, { weekday: 'long' })"
        },
        {
          "name": "monthFormat",
          "type": "(date: Date) => React.ReactNode",
          "description": "How to format months in Select",
          "defaultValue": "date => date.toLocaleDateString(locale, { month: 'long' })"
        },
        {
          "name": "nextMonthAriaLabel",
          "type": "string",
          "description": "Aria-label for the next month button",
          "defaultValue": "'Next month'"
        },
        {
          "name": "onChange",
          "type": "(date: Date) => void",
          "description": "Callback when date is selected",
          "defaultValue": "() => {}"
        },
        {
          "name": "prevMonthAriaLabel",
          "type": "string",
          "description": "Aria-label for the previous month button",
          "defaultValue": "'Previous month'"
        },
        {
          "name": "rangeStart",
          "type": "Date",
          "description": "Which date to start range styles from"
        },
        {
          "name": "validators",
          "type": "((date: Date) => boolean)[]",
          "description": "Functions that returns if a date is valid and selectable",
          "defaultValue": "[() => true]"
        },
        {
          "name": "weekdayFormat",
          "type": "(date: Date) => React.ReactNode",
          "description": "How to format week days in header",
          "defaultValue": "date => date.toLocaleDateString(locale, { weekday: 'narrow' })"
        },
        {
          "name": "weekStart",
          "type": "0 | 1 | 2 | 3 | 4 | 5 | 6 | Weekday",
          "description": "Day of week that starts the week. 0 is Sunday, 6 is Saturday.",
          "defaultValue": "0"
        },
        {
          "name": "yearInputAriaLabel",
          "type": "string",
          "description": "Aria-label for the year input",
          "defaultValue": "'Select year'"
        }
      ]
    },
    {
      "name": "CalendarFormat",
      "description": "",
      "props": [
        {
          "name": "cellAriaLabel",
          "type": "(date: Date) => string",
          "description": "Aria-label for the date cells"
        },
        {
          "name": "dayFormat",
          "type": "(date: Date) => React.ReactNode",
          "description": "How to format days in buttons in table cells"
        },
        {
          "name": "locale",
          "type": "string",
          "description": "If using the default formatters which locale to use. Undefined defaults to current locale. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation"
        },
        {
          "name": "longWeekdayFormat",
          "type": "(date: Date) => React.ReactNode",
          "description": "How to format days in header for screen readers"
        },
        {
          "name": "monthFormat",
          "type": "(date: Date) => React.ReactNode",
          "description": "How to format months in Select"
        },
        {
          "name": "nextMonthAriaLabel",
          "type": "string",
          "description": "Aria-label for the next month button"
        },
        {
          "name": "prevMonthAriaLabel",
          "type": "string",
          "description": "Aria-label for the previous month button"
        },
        {
          "name": "rangeStart",
          "type": "Date",
          "description": "Which date to start range styles from"
        },
        {
          "name": "weekdayFormat",
          "type": "(date: Date) => React.ReactNode",
          "description": "How to format week days in header"
        },
        {
          "name": "weekStart",
          "type": "0 | 1 | 2 | 3 | 4 | 5 | 6 | Weekday",
          "description": "Day of week that starts the week. 0 is Sunday, 6 is Saturday."
        },
        {
          "name": "yearInputAriaLabel",
          "type": "string",
          "description": "Aria-label for the year input"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-calendar-month"
  ],
  "examples": [
    "Default",
    "Selectable date",
    "Date range"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CalendarMonth } from '@patternfly/react-core';\n\nexport const CalendarMonthDefault: React.FunctionComponent = () => <CalendarMonth date={new Date()} />;\n","title":"Default","lang":"ts"}}>
      
    </Example>,
  'Selectable date': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CalendarMonth } from '@patternfly/react-core';\n\nexport const CalendarMonthSelectableDate: React.FunctionComponent = () => {\n  const [date, setDate] = React.useState(new Date(2020, 10, 24));\n\n  return (\n    <React.Fragment>\n      <pre>Selected date: {date.toString()}</pre>\n      <CalendarMonth date={date} onChange={setDate} />\n    </React.Fragment>\n  );\n};\n","title":"Selectable date","lang":"ts"}}>
      
    </Example>,
  'Date range': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CalendarMonth } from '@patternfly/react-core';\n\nexport const CalendarMonthDateRange: React.FunctionComponent = () => {\n  const startDate = new Date(2020, 10, 11);\n  const endDate = new Date(2020, 10, 24);\n  const disablePreStartDates = (date: Date) => date >= startDate;\n\n  return <CalendarMonth validators={[disablePreStartDates]} date={endDate} rangeStart={startDate} />;\n};\n","title":"Date range","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`In this example, there are 2 dates selected: a range start date (via the `}
        
        <code {...{"className":"ws-code"}}>
          {`rangeStart`}
        </code>
        {` prop) and a range end date (via the `}
        
        <code {...{"className":"ws-code"}}>
          {`date`}
        </code>
        {` prop). Additionally, any dates prior to the range start date are disabled by passing in an array of functions to the `}
        
        <code {...{"className":"ws-code"}}>
          {`validators`}
        </code>
        {` prop. In this case a single function is passed in, which checks whether a date is greater than or equal to the range start date.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`For this example, these dates are static and cannot be updated. For an interactive demo, see our `}
        
        <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/date-picker/react-demos"}}>
          {`Date picker demos`}
        </PatternflyThemeLink>
        {`.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Selectable date"])}
    {React.createElement(pageData.examples["Date range"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsCalendarMonthReactDocs';
Component.pageData = pageData;

export default Component;
