import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
const pageData = {
  "id": "Action list",
  "section": "components",
  "source": "react",
  "slug": "/components/action-list/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/ActionList/examples/ActionList.md",
  "propComponents": [
    {
      "name": "ActionList",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children of the action list"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the action list",
          "defaultValue": "''"
        },
        {
          "name": "isIconList",
          "type": "boolean",
          "description": "Flag indicating the action list contains multiple icons and item padding should be removed"
        }
      ]
    },
    {
      "name": "ActionListGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children of the action list group"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the action list group",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "ActionListItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children of the action list item"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the action list item",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-action-list"
  ],
  "examples": [
    "Action list single group",
    "Action list with icons",
    "Action list multiple groups",
    "Action list with cancel button"
  ]
};
pageData.liveContext = {
  TimesIcon,
  CheckIcon
};
pageData.examples = {
  'Action list single group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  ActionList,\n  ActionListItem,\n  Button,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\n\nexport const ActionListSingleGroup: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (\n    isOpen: boolean,\n    event: MouseEvent | TouchEvent | KeyboardEvent | React.KeyboardEvent<any> | React.MouseEvent<HTMLButtonElement>\n  ) => {\n    event.stopPropagation();\n    setIsOpen(isOpen);\n  };\n\n  const onSelect = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {\n    event.stopPropagation();\n    setIsOpen(!isOpen);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n\n  return (\n    <React.Fragment>\n      <ActionList>\n        <ActionListItem>\n          <Button variant=\"primary\" id=\"next-button\">\n            Next\n          </Button>\n        </ActionListItem>\n        <ActionListItem>\n          <Button variant=\"secondary\" id=\"back-button\">\n            Back\n          </Button>\n        </ActionListItem>\n      </ActionList>\n      <br />\n      With kebab\n      <ActionList>\n        <ActionListItem>\n          <Button variant=\"primary\" id=\"next-button2\">\n            Next\n          </Button>\n        </ActionListItem>\n        <ActionListItem>\n          <Button variant=\"secondary\" id=\"back-button2\">\n            Back\n          </Button>\n        </ActionListItem>\n        <ActionListItem>\n          <Dropdown\n            onSelect={onSelect}\n            toggle={<KebabToggle onToggle={onToggle} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            position=\"right\"\n          />\n        </ActionListItem>\n      </ActionList>\n    </React.Fragment>\n  );\n};\n","title":"Action list single group","lang":"ts"}}>
      
    </Example>,
  'Action list with icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ActionList, ActionListItem, Button } from '@patternfly/react-core';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\nimport CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';\n\nexport const ActionListWithIcons: React.FunctionComponent = () => (\n  <ActionList isIconList>\n    <ActionListItem>\n      <Button variant=\"plain\" id=\"times-button\" aria-label=\"times icon button\">\n        <TimesIcon />\n      </Button>\n    </ActionListItem>\n    <ActionListItem>\n      <Button variant=\"plain\" id=\"check-button\" aria-label=\"check icon button\">\n        <CheckIcon />\n      </Button>\n    </ActionListItem>\n  </ActionList>\n);\n","title":"Action list with icons","lang":"ts"}}>
      
    </Example>,
  'Action list multiple groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';\n\nexport const ActionListMultipleGroups: React.FunctionComponent = () => (\n  <ActionList>\n    <ActionListGroup>\n      <ActionListItem>\n        <Button variant=\"primary\" id=\"next-button\">\n          Next\n        </Button>\n      </ActionListItem>\n      <ActionListItem>\n        <Button variant=\"secondary\" id=\"back-button\">\n          Back\n        </Button>\n      </ActionListItem>\n    </ActionListGroup>\n    <ActionListGroup>\n      <ActionListItem>\n        <Button variant=\"primary\" id=\"submit-button\">\n          Submit\n        </Button>\n      </ActionListItem>\n      <ActionListItem>\n        <Button variant=\"link\" id=\"cancel-button\">\n          Cancel\n        </Button>\n      </ActionListItem>\n    </ActionListGroup>\n  </ActionList>\n);\n","title":"Action list multiple groups","lang":"ts"}}>
      
    </Example>,
  'Action list with cancel button': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';\n\nexport const ActionListWithCancelButton: React.FunctionComponent = () => (\n  <React.Fragment>\n    In modals, forms, data lists\n    <ActionList>\n      <ActionListItem>\n        <Button variant=\"primary\" id=\"save-button\">\n          Save\n        </Button>\n      </ActionListItem>\n      <ActionListItem>\n        <Button variant=\"link\" id=\"cancel-button\">\n          Cancel\n        </Button>\n      </ActionListItem>\n    </ActionList>\n    <br />\n    In wizards\n    <ActionList>\n      <ActionListGroup>\n        <ActionListItem>\n          <Button variant=\"primary\" id=\"next-button\">\n            Next\n          </Button>\n        </ActionListItem>\n        <ActionListItem>\n          <Button variant=\"secondary\" id=\"back-button\">\n            Back\n          </Button>\n        </ActionListItem>\n      </ActionListGroup>\n      <ActionListGroup>\n        <ActionListItem>\n          <Button variant=\"link\" id=\"cancel-button2\">\n            Cancel\n          </Button>\n        </ActionListItem>\n      </ActionListGroup>\n    </ActionList>\n  </React.Fragment>\n);\n","title":"Action list with cancel button","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Action list single group"])}
    {React.createElement(pageData.examples["Action list with icons"])}
    {React.createElement(pageData.examples["Action list multiple groups"])}
    {React.createElement(pageData.examples["Action list with cancel button"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsActionListReactDocs';
Component.pageData = pageData;

export default Component;
