import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Hint",
  "section": "components",
  "source": "react",
  "slug": "/components/hint/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Hint/examples/Hint.md",
  "propComponents": [
    {
      "name": "Hint",
      "description": "",
      "props": [
        {
          "name": "actions",
          "type": "React.ReactNode",
          "description": "Actions of the hint."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the hint."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the hint."
        }
      ]
    },
    {
      "name": "HintTitle",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the hint title."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the hint title."
        }
      ]
    },
    {
      "name": "HintBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the hint body."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the hint body."
        }
      ]
    },
    {
      "name": "HintFooter",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the hint footer."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the hint footer."
        }
      ]
    }
  ],
  "examples": [
    "Basic with title",
    "Basic without title"
  ]
};
pageData.examples = {
  'Basic with title': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Hint,\n  HintTitle,\n  HintBody,\n  HintFooter,\n  Button,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\n\nexport const HintBasicWithTitle: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState<boolean>(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onSelect = () => {\n    setIsOpen(!isOpen);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n  const actions = (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={<KebabToggle onToggle={onToggle} id=\"hint-kebab-toggle\" />}\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n      position=\"right\"\n      isPlain\n    />\n  );\n  return (\n    <Hint actions={actions}>\n      <HintTitle>Do more with Find it Fix it capabilities</HintTitle>\n      <HintBody>\n        Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.\n      </HintBody>\n      <HintFooter>\n        <Button variant=\"link\" isInline>\n          Try it for 90 days\n        </Button>\n      </HintFooter>\n    </Hint>\n  );\n};\n","title":"Basic with title","lang":"ts"}}>
      
    </Example>,
  'Basic without title': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Hint,\n  HintBody,\n  HintFooter,\n  Button,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  KebabToggle\n} from '@patternfly/react-core';\n\nexport const HintBasicWithoutTitle: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState<boolean>(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onSelect = () => {\n    setIsOpen(!isOpen);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled>\n      Disabled Link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n      Disabled Action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated Action\n    </DropdownItem>\n  ];\n  const actions = (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={<KebabToggle onToggle={onToggle} id=\"hint-notitle-kebab-toggle\" />}\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n      position=\"right\"\n      isPlain\n    />\n  );\n  return (\n    <React.Fragment>\n      <Hint>\n        <HintBody>\n          Welcome to the new documentation experience.\n          <Button variant=\"link\" isInline>\n            Learn more about the improved features.\n          </Button>\n        </HintBody>\n      </Hint>\n      <br />\n      <Hint actions={actions}>\n        <HintBody>\n          Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.\n        </HintBody>\n        <HintFooter>\n          <Button variant=\"link\" isInline>\n            Try it for 90 days\n          </Button>\n        </HintFooter>\n      </Hint>\n    </React.Fragment>\n  );\n};\n","title":"Basic without title","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic with title"])}
    {React.createElement(pageData.examples["Basic without title"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsHintReactDocs';
Component.pageData = pageData;

export default Component;
