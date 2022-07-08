import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Date picker",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/date-picker/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/DatePicker/DatePicker.md",
  "beta": true,
  "examples": [
    "Date range picker",
    "Date and time range picker",
    "Date and time pickers in modal"
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
      
    </Example>,
  'Date and time pickers in modal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DatePicker, Modal, ModalVariant, Button, TimePicker, InputGroup } from '@patternfly/react-core';\n\nexport const SimpleModal = () => {\n  const [isModalOpen, setIsModalOpen] = React.useState(false);\n  const [isTimePickerOpen, setIsTimePickerOpen] = React.useState(false);\n  const dateRef = React.useRef(null);\n\n  const handleModalToggle = () => {\n    setIsModalOpen(!isModalOpen);\n  };\n\n  const onEscapePress = (event: KeyboardEvent) => {\n    if (dateRef && dateRef.current && dateRef.current.isCalendarOpen) {\n      dateRef.current.toggleCalendar(false, event.key);\n    } else if (isTimePickerOpen) {\n      setIsTimePickerOpen(false);\n    } else {\n      handleModalToggle();\n    }\n  };\n\n  return (\n    <React.Fragment>\n      <Button variant=\"primary\" onClick={handleModalToggle}>\n        Launch modal\n      </Button>\n      <Modal\n        id=\"date-time-picker-modal\"\n        variant={ModalVariant.small}\n        title=\"Generic modal header\"\n        isOpen={isModalOpen}\n        onEscapePress={onEscapePress}\n        onClose={handleModalToggle}\n        actions={[\n          <Button key=\"confirm\" variant=\"primary\" onClick={handleModalToggle}>\n            Confirm\n          </Button>,\n          <Button key=\"cancel\" variant=\"link\" onClick={handleModalToggle}>\n            Cancel\n          </Button>\n        ]}\n      >\n        <InputGroup>\n          <DatePicker ref={dateRef} appendTo={() => document.getElementById('date-time-picker-modal')} />\n          <TimePicker menuAppendTo=\"parent\" isOpen={isTimePickerOpen} setIsOpen={setIsTimePickerOpen} />\n        </InputGroup>\n      </Modal>\n    </React.Fragment>\n  );\n};\n","title":"Date and time pickers in modal","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Modals trap focus and watch a few document level events. In order to place a date picker in a modal:`}
      </p>
      
      <ul {...{"className":"ws-ul"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`To avoid the modal's escape press event handler from overruling the date picker's escape press handlers, use the `}
          
          <code {...{"className":"ws-code"}}>
            {`DatePickerRef`}
          </code>
          {` to close the calendar when it is open and the escape key is pressed.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Append the calendar to the modal to keep it as close to the date picker in the DOM while maintaining correct layouts visually
In order to place a time picker in the modal, its menu must be appended to the time picker's parent.`}
        </li>
        

      </ul>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Date range picker"])}
    {React.createElement(pageData.examples["Date and time range picker"])}
    {React.createElement(pageData.examples["Date and time pickers in modal"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDatePickerReactDemosDocs';
Component.pageData = pageData;

export default Component;
