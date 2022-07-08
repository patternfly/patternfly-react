import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { TimePicker } from '@patternfly/react-core';
const pageData = {
  "id": "Time picker",
  "section": "components",
  "source": "react",
  "slug": "/components/time-picker/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/TimePicker/examples/TimePicker.md",
  "propComponents": [
    {
      "name": "TimePicker",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the time picker",
          "defaultValue": "'Time picker'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the time picker.",
          "defaultValue": "''"
        },
        {
          "name": "delimiter",
          "type": "string",
          "description": "Character to display between the hour and minute",
          "defaultValue": "':'"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the time picker"
        },
        {
          "name": "includeSeconds",
          "type": "boolean",
          "description": "Includes number of seconds with the chosen time and allows users to manually edit the seconds value."
        },
        {
          "name": "inputProps",
          "type": "TextInputProps",
          "description": "Additional props for input field",
          "defaultValue": "{}"
        },
        {
          "name": "invalidFormatErrorMessage",
          "type": "string",
          "description": "Error message to display when the time is provided in an invalid format.",
          "defaultValue": "'Invalid time format'"
        },
        {
          "name": "invalidMinMaxErrorMessage",
          "type": "string",
          "description": "Error message to display when the time provided is not within the minTime/maxTime constriants",
          "defaultValue": "'Invalid time entered'"
        },
        {
          "name": "is24Hour",
          "type": "boolean",
          "description": "True if the time is 24 hour time. False if the time is 12 hour time",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating the time picker is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to control the opened state of the time picker menu"
        },
        {
          "name": "maxTime",
          "type": "string | Date",
          "description": "A time string indicating the maximum value allowed. The format could be an ISO 8601 formatted date string or in 'HH{delimiter}MM' format",
          "defaultValue": "''"
        },
        {
          "name": "menuAppendTo",
          "type": "HTMLElement | (() => HTMLElement) | 'inline' | 'parent'",
          "description": "The container to append the menu to. Defaults to 'inline'.\nIf your menu is being cut off you can append it to an element higher up the DOM tree.\nSome examples:\nmenuAppendTo=\"parent\"\nmenuAppendTo={() => document.body}\nmenuAppendTo={document.getElementById('target')}",
          "defaultValue": "'inline'"
        },
        {
          "name": "minTime",
          "type": "string | Date",
          "description": "A time string indicating the minimum value allowed. The format could be an ISO 8601 formatted date string or in 'HH{delimiter}MM' format",
          "defaultValue": "''"
        },
        {
          "name": "onChange",
          "type": "(time: string, hour?: number, minute?: number, seconds?: number, isValid?: boolean) => void",
          "description": "Optional event handler called each time the value in the time picker input changes."
        },
        {
          "name": "placeholder",
          "type": "string",
          "description": "String to display in the empty time picker field as a hint for the expected time format",
          "defaultValue": "'hh:mm'"
        },
        {
          "name": "setIsOpen",
          "type": "(isOpen?: boolean) => void",
          "description": "Handler invoked each time the open state of time picker updates",
          "defaultValue": "() => {}"
        },
        {
          "name": "stepMinutes",
          "type": "number",
          "description": "Size of step between time options in minutes.",
          "defaultValue": "30"
        },
        {
          "name": "time",
          "type": "string | Date",
          "description": "A time string. The format could be  an ISO 8601 formatted date string or in 'HH{delimiter}MM' format",
          "defaultValue": "''"
        },
        {
          "name": "validateTime",
          "type": "(time: string) => boolean",
          "description": "Optional validator can be provided to override the internal time validator."
        },
        {
          "name": "width",
          "type": "string",
          "description": "Width of the time picker.",
          "defaultValue": "'150px'"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-time-picker"
  ],
  "examples": [
    "Basic 12 hour",
    "Basic 24 hour",
    "Custom delimiter",
    "Minimum/maximum times",
    "With seconds",
    "Basic 24 hours with seconds"
  ]
};
pageData.liveContext = {
  TimePicker
};
pageData.examples = {
  'Basic 12 hour': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TimePicker } from '@patternfly/react-core';\n\nSimpleTimePicker = () => {\n  const onChange = (time, hour, minute, seconds, isValid) => {\n    console.log('time', time);\n    console.log('hour', hour);\n    console.log('minute', minute);\n    console.log('seconds', seconds);\n    console.log('isValid', isValid);\n  };\n\n  return <TimePicker time=\"3:35 AM\" onChange={onChange} />;\n};","title":"Basic 12 hour","lang":"js"}}>
      
    </Example>,
  'Basic 24 hour': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TimePicker } from '@patternfly/react-core';\n\nconst Basic24Hour = () => <TimePicker time=\"2020-10-14T18:06:02Z\" is24Hour />;","title":"Basic 24 hour","lang":"js"}}>
      
    </Example>,
  'Custom delimiter': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TimePicker } from '@patternfly/react-core';\n\nconst CustomDelimiter = () => <TimePicker is24Hour delimiter=\"h\" placeholder=\"\" />;","title":"Custom delimiter","lang":"js"}}>
      
    </Example>,
  'Minimum/maximum times': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TimePicker } from '@patternfly/react-core';\n\nconst MinimummaximumTimes = () => <TimePicker is24Hour minTime=\"9:30\" maxTime=\"17:15\" placeholder=\"14:00\" />;","title":"Minimum/maximum times","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`minTime`}
        </code>
        {`/`}
        
        <code {...{"className":"ws-code"}}>
          {`maxTime`}
        </code>
        {` props restrict the options shown for the user to select from as well as trigger the `}
        
        <code {...{"className":"ws-code"}}>
          {`invalidMinMaxErrorMessage`}
        </code>
        {` if the user enters a time outside this range.`}
      </p>
    </Example>,
  'With seconds': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TimePicker } from '@patternfly/react-core';\n\nconst WithSeconds = () => <TimePicker time=\"3:35:20 PM\" includeSeconds />;","title":"With seconds","lang":"js"}}>
      
    </Example>,
  'Basic 24 hours with seconds': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TimePicker } from '@patternfly/react-core';\n\nconst Basic24HoursWithSeconds = () => <TimePicker time=\"12:35:50\" includeSeconds is24Hour />;","title":"Basic 24 hours with seconds","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Appending the TimePicker to the `}
      <code {...{"className":"ws-code"}}>
        {`document.body`}
      </code>
      {` may cause accessibility issues, including being unable to navigate into the menu via keyboard or other assistive technologies. Instead, appending to the `}
      <code {...{"className":"ws-code"}}>
        {`"parent"`}
      </code>
      {` is recommended.`}
    </p>
    {React.createElement(pageData.examples["Basic 12 hour"])}
    {React.createElement(pageData.examples["Basic 24 hour"])}
    {React.createElement(pageData.examples["Custom delimiter"])}
    {React.createElement(pageData.examples["Minimum/maximum times"])}
    {React.createElement(pageData.examples["With seconds"])}
    {React.createElement(pageData.examples["Basic 24 hours with seconds"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTimePickerReactDocs';
Component.pageData = pageData;

export default Component;
