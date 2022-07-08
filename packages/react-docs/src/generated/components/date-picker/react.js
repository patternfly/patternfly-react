import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Date picker",
  "section": "components",
  "source": "react",
  "slug": "/components/date-picker/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/DatePicker/examples/DatePicker.md",
  "propComponents": [
    {
      "name": "DatePicker",
      "description": "",
      "props": [
        {
          "name": "appendTo",
          "type": "HTMLElement | ((ref?: HTMLElement) => HTMLElement) | 'parent'",
          "description": "The container to append the menu to. Defaults to 'parent'.\nIf your menu is being cut off you can append it to an element higher up the DOM tree.\nSome examples:\nmenuAppendTo={() => document.body}\nmenuAppendTo={document.getElementById('target')}",
          "defaultValue": "'parent'"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the date picker",
          "defaultValue": "'Date picker'"
        },
        {
          "name": "buttonAriaLabel",
          "type": "string",
          "description": "Aria label for the button to open the date picker",
          "defaultValue": "'Toggle date picker'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the date time picker."
        },
        {
          "name": "dateFormat",
          "type": "(date: Date) => string",
          "description": "How to format the date in the TextInput",
          "defaultValue": "(date: Date) =>\n`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date\n  .getDate()\n  .toString()\n  .padStart(2, '0')}`"
        },
        {
          "name": "dateParse",
          "type": "(value: string) => Date",
          "description": "How to format the date in the TextInput",
          "defaultValue": "(val: string) => val.split('-').length === 3 && new Date(`${val}T00:00:00`)"
        },
        {
          "name": "helperText",
          "type": "React.ReactNode",
          "description": "Text for label"
        },
        {
          "name": "inputProps",
          "type": "TextInputProps",
          "description": "Additional props for input field",
          "defaultValue": "{}"
        },
        {
          "name": "invalidFormatText",
          "type": "string",
          "description": "Error message to display when the TextInput cannot be parsed.",
          "defaultValue": "'Invalid date'"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating the date picker is disabled",
          "defaultValue": "false"
        },
        {
          "name": "locale",
          "type": "No type info",
          "defaultValue": "undefined"
        },
        {
          "name": "onBlur",
          "type": "(value: string, date?: Date) => void",
          "description": "Callback called every time the input loses focus",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "onChange",
          "type": "(value: string, date?: Date) => void",
          "description": "Callback called every time the input value changes",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "placeholder",
          "type": "string",
          "description": "String to display in the empty date picker field as a hint for the expected date format",
          "defaultValue": "'YYYY-MM-DD'"
        },
        {
          "name": "popoverProps",
          "type": "Omit<PopoverProps, 'appendTo'>",
          "description": "Props to pass to the Popover"
        },
        {
          "name": "style",
          "type": "No type info",
          "defaultValue": "{}"
        },
        {
          "name": "validators",
          "type": "((date: Date) => string)[]",
          "description": "Functions that returns an error message if a date is invalid",
          "defaultValue": "[]"
        },
        {
          "name": "value",
          "type": "string",
          "description": "Value of TextInput",
          "defaultValue": "''"
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
    },
    {
      "name": "DatePickerRef",
      "description": "",
      "props": [
        {
          "name": "isCalendarOpen",
          "type": "boolean",
          "description": "Current calendar open status",
          "required": true
        },
        {
          "name": "setCalendarOpen",
          "type": "(isOpen: boolean) => void",
          "description": "Sets the calendar open status",
          "required": true
        },
        {
          "name": "toggleCalendar",
          "type": "(isOpen?: boolean, eventKey?: string) => void",
          "description": "Toggles the calendar open status. If no parameters are passed, the calendar will simply toggle its open status.\nIf the isOpen parameter is passed, that will set the calendar open status to the value of the isOpen parameter.\nIf the eventKey parameter is set to 'Escape', that will invoke the date pickers onEscapePress event to toggle the\ncorrect control appropriately.",
          "required": true
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-date-picker"
  ],
  "examples": [
    "Basic",
    "American format",
    "Helper text",
    "Min and max date",
    "French",
    "Controlled",
    "Controlling the date picker calendar state"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DatePicker } from '@patternfly/react-core';\n\nexport const DatePickerBasic: React.FunctionComponent = () => (\n  <DatePicker\n    // eslint-disable-next-line no-console\n    onBlur={(str, date) => console.log('onBlur', str, date)}\n    // eslint-disable-next-line no-console\n    onChange={(str, date) => console.log('onChange', str, date)}\n  />\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'American format': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DatePicker } from '@patternfly/react-core';\n\nexport const DatePickerAmerican: React.FunctionComponent = () => {\n  const dateFormat = (date: Date) =>\n    date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\\//g, '-');\n  const dateParse = (date: string) => {\n    const split = date.split('-');\n    if (split.length !== 3) {\n      return new Date();\n    }\n    const month = split[0];\n    const day = split[1];\n    const year = split[2];\n    return new Date(`${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00`);\n  };\n\n  return <DatePicker value=\"03-05-2020\" placeholder=\"MM-DD-YYYY\" dateFormat={dateFormat} dateParse={dateParse} />;\n};\n","title":"American format","lang":"ts"}}>
      
    </Example>,
  'Helper text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DatePicker } from '@patternfly/react-core';\n\nexport const DatePickerHelperText: React.FunctionComponent = () => (\n  <DatePicker value=\"2020-03-05\" helperText=\"Select a date.\" />\n);\n","title":"Helper text","lang":"ts"}}>
      
    </Example>,
  'Min and max date': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DatePicker } from '@patternfly/react-core';\n\nexport const DatePickerMinMax: React.FunctionComponent = () => {\n  const minDate = new Date(2020, 2, 16);\n  const maxDate = new Date(2020, 2, 20);\n  const rangeValidator = (date: Date) => {\n    if (date < minDate) {\n      return 'Date is before the allowable range.';\n    } else if (date > maxDate) {\n      return 'Date is after the allowable range.';\n    }\n\n    return '';\n  };\n  return <DatePicker value=\"2020-03-17\" validators={[rangeValidator]} />;\n};\n","title":"Min and max date","lang":"ts"}}>
      
    </Example>,
  'French': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DatePicker, Weekday } from '@patternfly/react-core';\n\nexport const DatePickerFrench: React.FunctionComponent = () => {\n  const minDate = new Date(2020, 2, 16);\n  const maxDate = new Date(2020, 2, 20);\n  const rangeValidator = (date: Date) => {\n    if (date < minDate) {\n      return 'Cette date est antérieure à la première date valide.';\n    } else if (date > maxDate) {\n      return 'Cette date est postérieure à la dernière date valide.';\n    }\n\n    return '';\n  };\n  return (\n    <DatePicker\n      value=\"2020-03-17\"\n      validators={[rangeValidator]}\n      placeholder=\"aaaa-mm-jj\"\n      invalidFormatText=\"Cette date est invalide.\"\n      locale=\"fr\"\n      weekStart={Weekday.Monday}\n    />\n  );\n};\n","title":"French","lang":"ts"}}>
      
    </Example>,
  'Controlled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, DatePicker } from '@patternfly/react-core';\n\nexport const DatePickerControlled: React.FunctionComponent = () => {\n  const initialValue = '2020-03-17';\n  const [value, setValue] = React.useState(initialValue);\n  return (\n    <React.Fragment>\n      <Button onClick={() => setValue(initialValue)}>Reset date</Button>\n      <DatePicker value={value} onChange={value => setValue(value)} />\n    </React.Fragment>\n  );\n};\n","title":"Controlled","lang":"ts"}}>
      
    </Example>,
  'Controlling the date picker calendar state': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, DatePicker } from '@patternfly/react-core';\n\nexport const DatePickerControlledCalendar: React.FunctionComponent = () => {\n  const dateRef = React.useRef(null);\n  const onClick = () => {\n    if (dateRef.current) {\n      dateRef.current.toggleCalendar();\n    }\n  };\n  return (\n    <React.Fragment>\n      <Button onClick={onClick}>Toggle calendar</Button>\n      <DatePicker ref={dateRef} />\n    </React.Fragment>\n  );\n};\n","title":"Controlling the date picker calendar state","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["American format"])}
    {React.createElement(pageData.examples["Helper text"])}
    {React.createElement(pageData.examples["Min and max date"])}
    {React.createElement(pageData.examples["French"])}
    {React.createElement(pageData.examples["Controlled"])}
    {React.createElement(pageData.examples["Controlling the date picker calendar state"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDatePickerReactDocs';
Component.pageData = pageData;

export default Component;
