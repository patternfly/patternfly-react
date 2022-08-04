import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import AtIcon from '@patternfly/react-icons/dist/esm/icons/at-icon';
import DollarSignIcon from '@patternfly/react-icons/dist/esm/icons/dollar-sign-icon';
import CalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/calendar-alt-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
const pageData = {
  "id": "Input group",
  "section": "components",
  "source": "react",
  "slug": "/components/input-group/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/InputGroup/examples/InputGroup.md",
  "propComponents": [
    {
      "name": "InputGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the input group.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the input group.",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "InputGroupText",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the input group text.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the input group text.",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ReactNode",
          "description": "Component that wraps the input group text.",
          "defaultValue": "'span'"
        },
        {
          "name": "variant",
          "type": "InputGroupTextVariant | 'default' | 'plain'",
          "description": "Input group text variant",
          "defaultValue": "InputGroupTextVariant.default"
        }
      ]
    }
  ],
  "examples": [
    "Basic",
    "With textarea",
    "With dropdown",
    "With popover",
    "With multiple group siblings"
  ]
};
pageData.liveContext = {
  AtIcon,
  DollarSignIcon,
  CalendarAltIcon,
  QuestionCircleIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport AtIcon from '@patternfly/react-icons/dist/esm/icons/at-icon';\nimport { InputGroup, InputGroupText, InputGroupTextVariant, TextInput, ValidatedOptions } from '@patternfly/react-core';\n\nexport const InputGroupBasic: React.FunctionComponent = () => (\n  <React.Fragment>\n    <InputGroup>\n      <TextInput id=\"textInput6\" type=\"email\" aria-label=\"email input field\" />\n      <InputGroupText id=\"email-example\">@example.com</InputGroupText>\n    </InputGroup>\n    <br />\n    <InputGroup>\n      <InputGroupText id=\"username\">\n        <AtIcon />\n      </InputGroupText>\n      <TextInput\n        validated={ValidatedOptions.error}\n        id=\"textInput7\"\n        type=\"email\"\n        aria-label=\"Error state username example\"\n      />\n    </InputGroup>\n    <br />\n    <InputGroup>\n      <TextInput name=\"textIndex12\" id=\"textInput12\" type=\"text\" aria-label=\"percentage\" />\n      <InputGroupText id=\"plain-example\" variant={InputGroupTextVariant.plain}>\n        %\n      </InputGroupText>\n    </InputGroup>\n  </React.Fragment>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'With textarea': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, TextArea, InputGroup } from '@patternfly/react-core';\n\nexport const InputGroupWithTextarea: React.FunctionComponent = () => (\n  <React.Fragment>\n    <InputGroup>\n      <TextArea name=\"textarea2\" id=\"textarea2\" aria-label=\"textarea with button\" />\n      <Button id=\"textAreaButton2\" variant=\"control\">\n        Button\n      </Button>\n    </InputGroup>\n  </React.Fragment>\n);\n","title":"With textarea","lang":"ts"}}>
      
    </Example>,
  'With dropdown': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, InputGroup, TextInput, Dropdown, DropdownToggle, DropdownItem } from '@patternfly/react-core';\n\nexport const InputGroupWithDropdown: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState<boolean>(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"opt-1\" value=\"Option 1\" component=\"button\">\n      Option 1\n    </DropdownItem>,\n    <DropdownItem key=\"opt-2\" value=\"Option 2\" component=\"button\">\n      Option 2\n    </DropdownItem>,\n    <DropdownItem key=\"opt-3\" value=\"Option 3\" component=\"button\">\n      Option 3\n    </DropdownItem>\n  ];\n\n  return (\n    <React.Fragment>\n      <InputGroup>\n        <Dropdown\n          onSelect={onSelect}\n          toggle={<DropdownToggle onToggle={onToggle}>Dropdown</DropdownToggle>}\n          isOpen={isOpen}\n          dropdownItems={dropdownItems}\n        />\n        <TextInput id=\"textInput3\" aria-label=\"input with dropdown and button\" />\n        <Button id=\"inputDropdownButton1\" variant=\"control\">\n          Button\n        </Button>\n      </InputGroup>\n    </React.Fragment>\n  );\n};\n","title":"With dropdown","lang":"ts"}}>
      
    </Example>,
  'With popover': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';\nimport { Button, InputGroup, TextInput, Popover, PopoverPosition } from '@patternfly/react-core';\n\nexport const InputGroupWithPopover: React.FunctionComponent = () => (\n  <React.Fragment>\n    <InputGroup>\n      <TextInput name=\"textInput10\" id=\"textInput10\" type=\"text\" aria-label=\"input example with popover\" />\n      <Popover\n        aria-label=\"popover example\"\n        position={PopoverPosition.top}\n        bodyContent=\"This field is an example of an input group with a popover.\"\n      >\n        <Button variant=\"control\" aria-label=\"popover for input\">\n          <QuestionCircleIcon />\n        </Button>\n      </Popover>\n    </InputGroup>\n    <br />\n    <InputGroup>\n      <TextInput name=\"textInput12\" id=\"textInput12\" type=\"text\" aria-label=\"input example with popover\" />\n      <Popover\n        aria-label=\"popover example\"\n        position={PopoverPosition.top}\n        bodyContent=\"This field is an example of an input group with a popover.\"\n      >\n        <Button variant=\"plain\" aria-label=\"Popover for input\">\n          <QuestionCircleIcon />\n        </Button>\n      </Popover>\n    </InputGroup>\n  </React.Fragment>\n);\n","title":"With popover","lang":"ts"}}>
      
    </Example>,
  'With multiple group siblings': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport DollarSignIcon from '@patternfly/react-icons/dist/esm/icons/dollar-sign-icon';\nimport { Button, TextArea, InputGroup, InputGroupText, TextInput } from '@patternfly/react-core';\n\nexport const InputGroupWithSiblings: React.FunctionComponent = () => (\n  <React.Fragment>\n    <InputGroup>\n      <Button id=\"textAreaButton1\" variant=\"control\">\n        Button\n      </Button>\n      <TextArea name=\"textarea1\" id=\"textarea1\" aria-label=\"textarea with buttons\" />\n      <Button variant=\"control\">Button</Button>\n    </InputGroup>\n    <br />\n    <InputGroup>\n      <Button id=\"textAreaButton3\" variant=\"control\">\n        Button\n      </Button>\n      <Button variant=\"control\">Button</Button>\n      <TextArea name=\"textarea3\" id=\"textarea3\" aria-label=\"textarea with 3 buttons\" />\n      <Button variant=\"control\">Button</Button>\n    </InputGroup>\n    <br />\n    <InputGroup>\n      <InputGroupText>\n        <DollarSignIcon />\n      </InputGroupText>\n      <TextInput id=\"textInput5\" type=\"number\" aria-label=\"Dollar amount input example\" />\n      <InputGroupText>.00</InputGroupText>\n    </InputGroup>\n  </React.Fragment>\n);\n","title":"With multiple group siblings","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With textarea"])}
    {React.createElement(pageData.examples["With dropdown"])}
    {React.createElement(pageData.examples["With popover"])}
    {React.createElement(pageData.examples["With multiple group siblings"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsInputGroupReactDocs';
Component.pageData = pageData;

export default Component;
