import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';
const pageData = {
  "id": "Date and time picker",
  "section": "demos",
  "source": "react-demos",
  "slug": "/demos/date-and-time-picker/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/DateTimePicker.md",
  "beta": true,
  "examples": [
    "Date and time picker"
  ]
};
pageData.liveContext = {
  OutlinedCalendarAltIcon,
  OutlinedClockIcon
};
pageData.examples = {
  'Date and time picker': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, CalendarMonth, InputGroup, TextInput, Button, Popover } from '@patternfly/react-core';\nimport OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';\nimport OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';\n\nDateTimePicker = () => {\n  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);\n  const [isTimeOpen, setIsTimeOpen] = React.useState(false);\n  const [valueDate, setValueDate] = React.useState(\"YYYY-MM-DD\");\n  const [valueTime, setValueTime] = React.useState(\"HH:MM\");\n  const times = Array.from(new Array(10), (_, i) => i + 8);\n  const defaultTime = \"0:00\";\n  const dateFormat = date => date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\\//g,'-');\n\n  const onToggleCalendar = () => {\n    setIsCalendarOpen(!isCalendarOpen);\n    setIsTimeOpen(false);\n  };\n\n  const onToggleTime = ev => {\n      setIsTimeOpen(!isTimeOpen);\n      setIsCalendarOpen(false);\n  };\n\n  const onSelectCalendar = newValueDate => {\n      const newValue = dateFormat(newValueDate);\n      setValueDate(newValue);\n      setIsCalendarOpen(!isCalendarOpen);\n      // setting default time when it is not picked\n      if (valueTime === \"HH:MM\") {\n          setValueTime(defaultTime);\n      }\n  };\n\n  const onSelectTime = ev => {\n      setValueTime(ev.target.value);\n      setIsTimeOpen(!isTimeOpen);\n  };\n\n  const timeOptions = times.map(time => (\n      <DropdownItem key={time} component=\"button\" value={`${time}:00`}>\n        {`${time}:00`}\n      </DropdownItem>\n  ));\n  const calendar = (\n      <CalendarMonth\n        date={valueDate}\n        onChange={onSelectCalendar}\n      />\n  );\n  const time = (\n      <Dropdown\n        onSelect={onSelectTime}\n        toggle={\n          <DropdownToggle aria-label=\"Toggle the time picker menu\" toggleIndicator={null} onToggle={onToggleTime} style={{ padding: '6px 16px' }}>\n            <OutlinedClockIcon />\n          </DropdownToggle>\n        }\n        isOpen={isTimeOpen}\n        dropdownItems={timeOptions}\n    />\n  );\n  const calendarButton = (\n      <Button variant=\"control\" aria-label=\"Toggle the calendar\" onClick={onToggleCalendar}>\n          <OutlinedCalendarAltIcon />\n      </Button>\n  );\n  return (\n    <div style={{ width: '300px' }}>\n        <Popover\n            position=\"bottom\"\n            bodyContent={calendar}\n            showClose={false}\n            isVisible={isCalendarOpen}\n            hasNoPadding\n            hasAutoWidth\n        >\n            <InputGroup>\n                <TextInput type=\"'datetime-local\" id=\"date-time\" aria-label=\"date and time picker demo\" value={valueDate + ' ' + valueTime} isReadOnly/>\n                {calendarButton}\n                {time}\n            </InputGroup>\n        </Popover>\n    </div>\n  );\n};","title":"Date and time picker","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this demo, learn how to use a `}
      <PatternflyThemeLink {...{"to":"/components/calendar-month"}}>
        {`CalendarMonth`}
      </PatternflyThemeLink>
      {` component and a `}
      <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
        {`Dropdown`}
      </PatternflyThemeLink>
      {` component to compose a simple DateTimePicker. The input is read only, meaning that the following example does not cover pasting a copied date and time. Also, you can pick the time only from the predefined options and cannot change it in the input.`}
    </p>
    {React.createElement(pageData.examples["Date and time picker"])}
  </React.Fragment>
);
Component.displayName = 'DemosDateAndTimePickerReactDemosDocs';
Component.pageData = pageData;

export default Component;
