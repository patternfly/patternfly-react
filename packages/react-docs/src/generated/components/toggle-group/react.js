import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/components/ToggleGroup/examples/./toggleGroup.css';
import { ToggleGroup, ToggleGroupItem, Button, Stack, StackItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';
const pageData = {
  "id": "Toggle group",
  "section": "components",
  "source": "react",
  "slug": "/components/toggle-group/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/ToggleGroup/examples/ToggleGroup.md",
  "propComponents": [
    {
      "name": "ToggleGroup",
      "description": "",
      "props": [
        {
          "name": "areAllGroupsDisabled",
          "type": "boolean",
          "description": "Disable all toggle group items under this component.",
          "defaultValue": "false"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the toggle group"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the toggle group"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the toggle group"
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Modifies the toggle group to include compact styling.",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "ToggleGroupItem",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "required when icon is used with no supporting text",
          "defaultValue": "''"
        },
        {
          "name": "buttonId",
          "type": "string",
          "description": "Optional id for the button within the toggle group item",
          "defaultValue": "''"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the toggle group item"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon rendered inside the toggle group item"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating if the toggle group item is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isSelected",
          "type": "boolean",
          "description": "Flag indicating if the toggle group item is selected",
          "defaultValue": "false"
        },
        {
          "name": "onChange",
          "type": "(selected: boolean, event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => void",
          "description": "A callback for when the toggle group item selection changes.",
          "defaultValue": "() => {}"
        },
        {
          "name": "text",
          "type": "React.ReactNode",
          "description": "Text rendered inside the toggle group item"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-toggle-group"
  ],
  "examples": [
    "Default with multiple selectable",
    "Default with single selectable",
    "Icons",
    "Text and icons",
    "Compact variant"
  ]
};
pageData.liveContext = {
  ToggleGroup,
  ToggleGroupItem,
  Button,
  Stack,
  StackItem,
  UndoIcon,
  CopyIcon,
  ShareSquareIcon
};
pageData.examples = {
  'Default with multiple selectable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ToggleGroup, ToggleGroupItem, Button, Stack, StackItem } from '@patternfly/react-core';\n\nclass DefaultToggleGroupExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isSelected: {\n        first: false,\n        second: false,\n        disableAll: false\n      }\n    };\n    this.handleItemClick = (isSelected, event) => {\n      const id = event.currentTarget.id;\n      this.setState(prevState => {\n        prevState.isSelected[id] = isSelected;\n        return {\n          isSelected: prevState.isSelected\n        };\n      });\n    };\n    this.disableAllClick = () => {\n      this.setState(prevState => ({ disableAll: !prevState.disableAll }));\n    };\n  }\n\n  render() {\n    const { isSelected } = this.state;\n\n    return (\n      <Stack hasGutter>\n        <StackItem>\n          <Button onClick={this.disableAllClick}>\n            {this.state.disableAll ? \"Enable back\" : \"Disable all\"}\n          </Button>\n        </StackItem>\n        <StackItem>\n          <ToggleGroup areAllGroupsDisabled={this.state.disableAll} aria-label=\"Default with multiple selectable\">\n            <ToggleGroupItem text=\"Option 1\" key={0} buttonId=\"first\" isSelected={isSelected.first} onChange={this.handleItemClick} />\n            <ToggleGroupItem text=\"Option 2\" key={1} buttonId=\"second\" isSelected={isSelected.second} onChange={this.handleItemClick} />\n            <ToggleGroupItem text=\"Option 3\" key={2} isDisabled/>\n          </ToggleGroup>\n        </StackItem>\n      </Stack>\n    );\n  }\n}","title":"Default with multiple selectable","lang":"js"}}>
      
    </Example>,
  'Default with single selectable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';\n\nclass DefaultAsRadioToggleGroupExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isSelected: \"\"\n    };\n    this.handleItemClick = (isSelected, event) => {\n      const id = event.currentTarget.id;\n      this.setState({ isSelected: id });\n    };\n  }\n\n  render() {\n    const { isSelected } = this.state;\n\n    return (\n      <ToggleGroup aria-label=\"Default with single selectable\">\n        <ToggleGroupItem text=\"Option 1\" buttonId=\"firstRadio\" isSelected={isSelected === \"firstRadio\"} onChange={this.handleItemClick} />\n        <ToggleGroupItem text=\"Option 2\" buttonId=\"secondRadio\" isSelected={isSelected === \"secondRadio\"} onChange={this.handleItemClick} />\n        <ToggleGroupItem text=\"Option 3\" buttonId=\"thirdRadio\" isSelected={isSelected === \"thirdRadio\"} onChange={this.handleItemClick} />\n      </ToggleGroup>\n    );\n  }\n}","title":"Default with single selectable","lang":"js"}}>
      
    </Example>,
  'Icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';\nimport UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';\nimport CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';\nimport ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';\n\nclass IconToggleGroupExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isSelected: {\n        third: false,\n        fourth: false,\n        fifth: true\n      }\n    };\n    this.handleItemClick = (isSelected, event) => {\n      const id = event.currentTarget.id;\n      this.setState(prevState => {\n        prevState.isSelected[id] = isSelected;\n        return {\n          isSelected: prevState.isSelected\n        };\n      });\n    };\n  }\n\n  render() {\n    const { isSelected } = this.state;\n    return (\n      <ToggleGroup aria-label=\"Icon variant toggle group\">\n        <ToggleGroupItem icon={<CopyIcon />} aria-label=\"copy icon button\" buttonId=\"third\" isSelected={isSelected.third} onChange={this.handleItemClick} />\n        <ToggleGroupItem icon={<UndoIcon />} aria-label=\"undo icon button\" buttonId=\"fourth\" isSelected={isSelected.fourth} onChange={this.handleItemClick} />\n        <ToggleGroupItem icon={<ShareSquareIcon />} aria-label=\"share square icon button\" buttonId=\"fifth\" isSelected={isSelected.fifth} onChange={this.handleItemClick} />\n      </ToggleGroup>\n    );\n  }\n}","title":"Icons","lang":"js"}}>
      
    </Example>,
  'Text and icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';\nimport UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';\nimport CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';\nimport ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';\n\nclass TextIconToggleGroupExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isSelected: {\n        third: false,\n        fourth: false,\n        fifth: true\n      }\n    };\n    this.handleItemClick = (isSelected, event) => {\n      const id = event.currentTarget.id;\n      this.setState(prevState => {\n        prevState.isSelected[id] = isSelected;\n        return {\n          isSelected: prevState.isSelected\n        };\n      });\n    };\n  }\n\n  render() {\n    const { isSelected } = this.state;\n    return (\n      <ToggleGroup aria-label=\"Icon variant toggle group\">\n        <ToggleGroupItem icon={<CopyIcon />} text=\"Copy\" aria-label=\"copy icon button\" buttonId=\"third\" isSelected={isSelected.third} onChange={this.handleItemClick} />\n        <ToggleGroupItem icon={<UndoIcon />} text=\"Undo\" aria-label=\"undo icon button\" buttonId=\"fourth\" isSelected={isSelected.fourth} onChange={this.handleItemClick} />\n        <ToggleGroupItem icon={<ShareSquareIcon />} text=\"Share\" aria-label=\"share square icon button\" buttonId=\"fifth\" isSelected={isSelected.fifth} onChange={this.handleItemClick} />\n      </ToggleGroup>\n    );\n  }\n}","title":"Text and icons","lang":"js"}}>
      
    </Example>,
  'Compact variant': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ToggleGroup, ToggleGroupItem, ToggleGroupVariant } from '@patternfly/react-core';\n\nclass CompactToggleGroupExample extends React.Component {\nconstructor(props) {\n    super(props);\n    this.state = {\n      isSelected: {\n        sixth: false,\n        seventh: false\n      }\n    };\n    this.handleItemClick = (isSelected, event) => {\n      const id = event.currentTarget.id;\n      this.setState(prevState => {\n        prevState.isSelected[id] = isSelected;\n        return {\n          isSelected: prevState.isSelected\n        };\n      });\n    };\n  }\n\n  render() {\n    const { isSelected } = this.state;\n\n    return (\n      <ToggleGroup isCompact aria-label=\"Compact variant toggle group\">\n        <ToggleGroupItem text=\"Option 1\" buttonId=\"sixth\" isSelected={isSelected.sixth} onChange={this.handleItemClick} />\n        <ToggleGroupItem text=\"Option 2\" buttonId=\"seventh\" isSelected={isSelected.seventh} onChange={this.handleItemClick} />\n        <ToggleGroupItem text=\"Option 3\" isDisabled />\n      </ToggleGroup>\n    );\n  }\n}","title":"Compact variant","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default with multiple selectable"])}
    {React.createElement(pageData.examples["Default with single selectable"])}
    {React.createElement(pageData.examples["Icons"])}
    {React.createElement(pageData.examples["Text and icons"])}
    {React.createElement(pageData.examples["Compact variant"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsToggleGroupReactDocs';
Component.pageData = pageData;

export default Component;
