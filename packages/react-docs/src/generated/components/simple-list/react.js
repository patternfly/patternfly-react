import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Simple list",
  "section": "components",
  "source": "react",
  "slug": "/components/simple-list/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/SimpleList/examples/SimpleList.md",
  "propComponents": [
    {
      "name": "SimpleList",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the SimpleList",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the SimpleList container",
          "defaultValue": "''"
        },
        {
          "name": "isControlled",
          "type": "boolean",
          "description": "Indicates whether component is controlled by its internal state",
          "defaultValue": "true"
        },
        {
          "name": "onSelect",
          "type": "(\n  ref: React.RefObject<HTMLButtonElement> | React.RefObject<HTMLAnchorElement>,\n  props: SimpleListItemProps\n) => void",
          "description": "Callback when an item is selected"
        }
      ]
    },
    {
      "name": "SimpleListGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the SimpleList group",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the SimpleList <ul>",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of SimpleList group",
          "defaultValue": "''"
        },
        {
          "name": "title",
          "type": "React.ReactNode",
          "description": "Title of the SimpleList group",
          "defaultValue": "''"
        },
        {
          "name": "titleClassName",
          "type": "string",
          "description": "Additional classes added to the SimpleList group title",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "SimpleListItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the SimpleList item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the SimpleList <li>",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "'button' | 'a'",
          "description": "Component type of the SimpleList item",
          "defaultValue": "'button'"
        },
        {
          "name": "componentClassName",
          "type": "string",
          "description": "Additional classes added to the SimpleList <a> or <button>",
          "defaultValue": "''"
        },
        {
          "name": "componentProps",
          "type": "any",
          "description": "Additional props added to the SimpleList <a> or <button>"
        },
        {
          "name": "href",
          "type": "string",
          "description": "Default hyperlink location",
          "defaultValue": "''"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Indicates if the link is current/highlighted",
          "defaultValue": "false"
        },
        {
          "name": "isCurrent",
          "type": "boolean",
          "description": "please use isActive instead",
          "defaultValue": "false",
          "deprecated": true
        },
        {
          "name": "itemId",
          "type": "number | string",
          "description": "id for the item."
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent | React.ChangeEvent) => void",
          "description": "OnClick callback for the SimpleList item",
          "defaultValue": "() => {}"
        },
        {
          "name": "type",
          "type": "'button' | 'submit' | 'reset'",
          "description": "Type of button SimpleList item",
          "defaultValue": "'button'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-simple-list"
  ],
  "examples": [
    "Simple list",
    "Grouped list",
    "Uncontrolled simple list"
  ]
};
pageData.examples = {
  'Simple list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SimpleList, SimpleListItem } from '@patternfly/react-core';\n\nclass SimpleListDemo extends React.Component {\n  onSelect(selectedItem, selectedItemProps) {\n    console.log('new selection SimpleListDemo', selectedItem, selectedItemProps);\n  }\n\n  render() {\n    const items = [\n      <SimpleListItem key=\"item1\" isActive>\n        List item 1\n      </SimpleListItem>,\n      <SimpleListItem key=\"item2\" component=\"a\" href=\"#\">\n        List item 2\n      </SimpleListItem>,\n      <SimpleListItem key=\"item3\">List item 3</SimpleListItem>\n    ];\n\n    return (\n      <SimpleList onSelect={this.onSelect} aria-label=\"Simple List Example\">\n        {items}\n      </SimpleList>\n    );\n  }\n}","title":"Simple list","lang":"js"}}>
      
    </Example>,
  'Grouped list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SimpleList, SimpleListItem, SimpleListGroup } from '@patternfly/react-core';\n\nclass SimpleListGroupDemo extends React.Component {\n  onSelect(selectedItem, selectedItemProps) {\n    console.log('new selection SimpleListGroupDemo', selectedItem, selectedItemProps);\n  }\n\n  render() {\n    const group1Items = [\n      <SimpleListItem key=\"item1\" isActive>\n        List item 1\n      </SimpleListItem>,\n      <SimpleListItem key=\"item2\" id=\"test 2\">\n        List item 2\n      </SimpleListItem>,\n      <SimpleListItem key=\"item3\">List item 3</SimpleListItem>,\n      <SimpleListItem key=\"item4\">List item 4</SimpleListItem>\n    ];\n\n    const group2Items = [\n      <SimpleListItem key=\"item5\">List item 1</SimpleListItem>,\n      <SimpleListItem key=\"item6\" component=\"a\" href=\"#\">\n        List item 2\n      </SimpleListItem>,\n      <SimpleListItem key=\"item7\" component=\"a\" href=\"#\">\n        List item 3\n      </SimpleListItem>,\n      <SimpleListItem key=\"item8\">List item 4</SimpleListItem>\n    ];\n\n    return (\n      <SimpleList onSelect={this.onSelect} aria-label=\"Grouped List Example\">\n        <SimpleListGroup title=\"Group 1\" id=\"group-1\">\n          {group1Items}\n        </SimpleListGroup>\n        <SimpleListGroup title=\"Group 2\" id=\"group-2\">\n          {group2Items}\n        </SimpleListGroup>\n      </SimpleList>\n    );\n  }\n}","title":"Grouped list","lang":"js"}}>
      
    </Example>,
  'Uncontrolled simple list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SimpleList, SimpleListItem } from '@patternfly/react-core';\n\nclass SimpleListUncontrolledDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (selectedItem, selectedItemProps) => {\n      console.log('new selection SimpleListUncontrolledDemo', selectedItem, selectedItemProps);\n      this.setState({ activeItem: selectedItemProps.itemId });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    const items = [\n      <SimpleListItem key=\"item1\" itemId={0} isActive={activeItem === 0}>\n        List item 1\n      </SimpleListItem>,\n      <SimpleListItem key=\"item2\" itemId={1} isActive={activeItem === 1}>\n        List item 2\n      </SimpleListItem>,\n      <SimpleListItem key=\"item3\" itemId={2} isActive={activeItem === 2}>\n        List item 3\n      </SimpleListItem>\n    ];\n\n    return (\n      <SimpleList onSelect={this.onSelect} isControlled={false} aria-label=\"Uncontrolled Simple List Example\">\n        {items}\n      </SimpleList>\n    );\n  }\n}","title":"Uncontrolled simple list","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Simple list"])}
    {React.createElement(pageData.examples["Grouped list"])}
    {React.createElement(pageData.examples["Uncontrolled simple list"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSimpleListReactDocs';
Component.pageData = pageData;

export default Component;
