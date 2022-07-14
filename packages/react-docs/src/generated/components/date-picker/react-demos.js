import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Date picker",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/date-picker/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/DatePicker.md",
  "beta": true,
  "examples": [
    "Date range picker",
    "Date and time range picker"
  ]
};
pageData.examples = {
  'Date range picker': props => 
    <Example {...pageData} {...props} {...{"code":"import { Split, SplitItem, DatePicker, isValidDate, yyyyMMddFormat } from '@patternfly/react-core';\n\nDateRangePicker = () => {\n  const [from, setFrom] = React.useState();\n  const [to, setTo] = React.useState();\n\n  const toValidator = date => isValidDate(from) && date >= from ? '' : 'To date must be less than from date';\n  const onFromChange = (_str, date) => {\n    setFrom(new Date(date));\n    if (isValidDate(date)) {\n      date.setDate(date.getDate() + 1);\n      setTo(yyyyMMddFormat(date));\n    }\n    else {\n      setTo('');\n    }\n  };\n\n  return (\n    <Split>\n      <SplitItem>\n        <DatePicker\n          onChange={onFromChange}\n          aria-label=\"Start date\"\n          placeholder=\"YYYY-MM-DD\"\n        />\n      </SplitItem>\n      <SplitItem style={{ padding: '6px 12px 0 12px' }}>\n        to\n      </SplitItem>\n      <SplitItem>\n        <DatePicker\n          value={to}\n          onChange={date => setTo(date)}\n          isDisabled={!isValidDate(from)}\n          rangeStart={from}\n          validators={[toValidator]}\n          aria-label=\"End date\"\n          placeholder=\"YYYY-MM-DD\"\n        />\n      </SplitItem>\n    </Split>\n  );\n}","title":"Date range picker","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This is intended to be used as a filter. After selecting a start date, the next date is automatically selected.`}
      </p>
    </Example>,
  'Date and time range picker': props => 
    <Example {...pageData} {...props} {...{"code":"import { Flex, FlexItem, InputGroup, DatePicker, isValidDate, TimePicker, yyyyMMddFormat, updateDateTime } from '@patternfly/react-core';\n\nDateTimeRangePicker = () => {\n  const [from, setFrom] = React.useState();\n  const [to, setTo] = React.useState();\n\n  const toValidator = date => {\n    return isValidDate(from) && yyyyMMddFormat(date) >= yyyyMMddFormat(from) ? '' : 'To date must after from date';\n  };\n  \n  const onFromDateChange = (inputDate, newFromDate) => {\n    if (isValidDate(from) && isValidDate(newFromDate) && inputDate === yyyyMMddFormat(newFromDate)) {\n      newFromDate.setHours(from.getHours());\n      newFromDate.setMinutes(from.getMinutes());\n    }\n    if (isValidDate(newFromDate) && inputDate === yyyyMMddFormat(newFromDate)) {\n      setFrom(new Date(newFromDate));\n    }\n  };\n  \n  const onFromTimeChange = (time, hour, minute) => {\n    if (isValidDate(from)) {\n      const updatedFromDate = new Date(from);\n      updatedFromDate.setHours(hour);\n      updatedFromDate.setMinutes(minute);\n      setFrom(updatedFromDate);\n    }\n  };\n\n  const onToDateChange = (inputDate, newToDate) => {\n    if (isValidDate(to) && isValidDate(newToDate) && inputDate === yyyyMMddFormat(newToDate)) {\n      newToDate.setHours(to.getHours());\n      newToDate.setMinutes(to.getMinutes());\n    }\n    if (isValidDate(newToDate) && inputDate === yyyyMMddFormat(newToDate)){\n      setTo(newToDate);\n    }\n  };\n  \n  const onToTimeChange = (time, hour, minute) => {\n    if (isValidDate(to)) {\n      const updatedToDate = new Date(to);\n      updatedToDate.setHours(hour);\n      updatedToDate.setMinutes(minute);\n      setTo(updatedToDate);\n    }\n  };\n\n  return (\n    <Flex direction={{default: 'column', lg: 'row'}}>\n      <FlexItem>\n        <InputGroup>\n          <DatePicker\n            onChange={onFromDateChange}\n            aria-label=\"Start date\"\n            placeholder=\"YYYY-MM-DD\"\n          />\n          <TimePicker \n            aria-label=\"Start time\"\n            style={{width: '150px'}} \n            onChange={onFromTimeChange} \n          />\n        </InputGroup>\n      </FlexItem>\n      <FlexItem>\n        to\n      </FlexItem>\n      <FlexItem>\n        <InputGroup>\n          <DatePicker\n            value={isValidDate(to) ? yyyyMMddFormat(to) : to}\n            onChange={onToDateChange}\n            isDisabled={!isValidDate(from)}\n            rangeStart={from}\n            validators={[toValidator]}\n            aria-label=\"End date\"\n            placeholder=\"YYYY-MM-DD\"\n          />\n          <TimePicker style={{width: '150px'}} onChange={onToTimeChange} isDisabled={!isValidDate(from)}/>\n        </InputGroup>\n      </FlexItem>\n    </Flex>\n  );\n}","title":"Date and time range picker","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Date range picker"])}
    {React.createElement(pageData.examples["Date and time range picker"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDatePickerReactDemosDocs';
Component.pageData = pageData;

export default Component;
