import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import BookOpenIcon from '@patternfly/react-icons/dist/esm/icons/book-open-icon';
import KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';
import DesktopIcon from '@patternfly/react-icons/dist/esm/icons/desktop-icon';
const pageData = {
  "id": "List",
  "section": "components",
  "source": "react",
  "slug": "/components/list/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/List/examples/List.md",
  "propComponents": [
    {
      "name": "List",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of the list",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the list",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "'ol' | 'ul'",
          "description": "",
          "defaultValue": "ListComponent.ul"
        },
        {
          "name": "iconSize",
          "type": "'default' | 'large'",
          "description": "Modifies the size of the icons in the list",
          "defaultValue": "'default'"
        },
        {
          "name": "isBordered",
          "type": "boolean",
          "description": "Modifies the list to add borders between items",
          "defaultValue": "false"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Modifies the list to include plain styling",
          "defaultValue": "false"
        },
        {
          "name": "ref",
          "type": "No type info",
          "defaultValue": "null"
        },
        {
          "name": "type",
          "type": "OrderType",
          "description": "Sets the way items are numbered if variant is set to ordered",
          "defaultValue": "OrderType.number"
        },
        {
          "name": "variant",
          "type": "ListVariant.inline",
          "description": "Adds list variant styles",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "ListItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of list item",
          "defaultValue": "null"
        },
        {
          "name": "icon",
          "type": "React.ReactNode | null",
          "description": "Icon for the list item",
          "defaultValue": "null"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-list"
  ],
  "examples": [
    "Basic",
    "Inline",
    "Ordered",
    "Plain",
    "With horizontal rules",
    "With icons",
    "With large icons"
  ]
};
pageData.liveContext = {
  BookOpenIcon,
  KeyIcon,
  DesktopIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { List, ListItem } from '@patternfly/react-core';\n\nexport const ListBasic: React.FunctionComponent = () => (\n  <List>\n    <ListItem>First</ListItem>\n    <ListItem>Second</ListItem>\n    <ListItem>Third</ListItem>\n  </List>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Inline': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { List, ListItem, ListVariant } from '@patternfly/react-core';\n\nexport const ListInline: React.FunctionComponent = () => (\n  <List variant={ListVariant.inline}>\n    <ListItem>First</ListItem>\n    <ListItem>Second</ListItem>\n    <ListItem>Third</ListItem>\n  </List>\n);\n","title":"Inline","lang":"ts"}}>
      
    </Example>,
  'Ordered': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { List, ListItem, ListComponent, OrderType } from '@patternfly/react-core';\n\nexport const ListOrdered: React.FunctionComponent = () => (\n  <List component={ListComponent.ol} type={OrderType.number}>\n    <ListItem>First</ListItem>\n    <ListItem>Second</ListItem>\n    <ListItem>Third</ListItem>\n  </List>\n);\n","title":"Ordered","lang":"ts"}}>
      
    </Example>,
  'Plain': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { List, ListItem } from '@patternfly/react-core';\n\nexport const ListPlain: React.FunctionComponent = () => (\n  <List isPlain>\n    <ListItem>First</ListItem>\n    <ListItem>Second</ListItem>\n    <ListItem>Third</ListItem>\n  </List>\n);\n","title":"Plain","lang":"ts"}}>
      
    </Example>,
  'With horizontal rules': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { List, ListItem } from '@patternfly/react-core';\n\nexport const ListHorizontalRules: React.FunctionComponent = () => (\n  <List isPlain isBordered>\n    <ListItem>First</ListItem>\n    <ListItem>Second</ListItem>\n    <ListItem>Third</ListItem>\n  </List>\n);\n","title":"With horizontal rules","lang":"ts"}}>
      
    </Example>,
  'With icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { List, ListItem } from '@patternfly/react-core';\nimport BookOpenIcon from '@patternfly/react-icons/dist/esm/icons/book-open-icon';\nimport KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';\nimport DesktopIcon from '@patternfly/react-icons/dist/esm/icons/desktop-icon';\n\nexport const ListIcons: React.FunctionComponent = () => (\n  <List isPlain>\n    <ListItem icon={<BookOpenIcon />}>First</ListItem>\n    <ListItem icon={<KeyIcon />}>Second</ListItem>\n    <ListItem icon={<DesktopIcon />}>Third</ListItem>\n  </List>\n);\n","title":"With icons","lang":"ts"}}>
      
    </Example>,
  'With large icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { List, ListItem } from '@patternfly/react-core';\nimport BookOpenIcon from '@patternfly/react-icons/dist/esm/icons/book-open-icon';\nimport KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';\nimport DesktopIcon from '@patternfly/react-icons/dist/esm/icons/desktop-icon';\n\nexport const ListLargeIcons: React.FunctionComponent = () => (\n  <List isPlain iconSize=\"large\">\n    <ListItem icon={<BookOpenIcon />}>First</ListItem>\n    <ListItem icon={<KeyIcon />}>Second</ListItem>\n    <ListItem icon={<DesktopIcon />}>Third</ListItem>\n  </List>\n);\n","title":"With large icons","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Inline"])}
    {React.createElement(pageData.examples["Ordered"])}
    {React.createElement(pageData.examples["Plain"])}
    {React.createElement(pageData.examples["With horizontal rules"])}
    {React.createElement(pageData.examples["With icons"])}
    {React.createElement(pageData.examples["With large icons"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsListReactDocs';
Component.pageData = pageData;

export default Component;
