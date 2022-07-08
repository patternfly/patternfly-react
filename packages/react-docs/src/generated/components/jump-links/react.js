import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Jump links",
  "section": "components",
  "source": "react",
  "slug": "/components/jump-links/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/JumpLinks/examples/JumpLinks.md",
  "propComponents": [
    {
      "name": "JumpLinks",
      "description": "",
      "props": [
        {
          "name": "activeIndex",
          "type": "number",
          "description": "The index of the child Jump link to make active.",
          "defaultValue": "0"
        },
        {
          "name": "alwaysShowLabel",
          "type": "boolean",
          "description": "Flag to always show the label when using `expandable`",
          "defaultValue": "true"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label to add to nav element. Defaults to label.",
          "defaultValue": "typeof label === 'string' ? label : null"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children nodes"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class for nav"
        },
        {
          "name": "expandable",
          "type": "{\n  default?: 'expandable' | 'nonExpandable';\n  sm?: 'expandable' | 'nonExpandable';\n  md?: 'expandable' | 'nonExpandable';\n  lg?: 'expandable' | 'nonExpandable';\n  xl?: 'expandable' | 'nonExpandable';\n  '2xl'?: 'expandable' | 'nonExpandable';\n}",
          "description": "When to collapse/expand at different breakpoints"
        },
        {
          "name": "isCentered",
          "type": "boolean",
          "description": "Whether to center children."
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "On mobile whether or not the JumpLinks starts out expanded",
          "defaultValue": "false"
        },
        {
          "name": "isVertical",
          "type": "boolean",
          "description": "Whether the layout of children is vertical or horizontal."
        },
        {
          "name": "label",
          "type": "React.ReactNode",
          "description": "Label to add to nav element."
        },
        {
          "name": "offset",
          "type": "number",
          "description": "Offset to add to `scrollPosition`, potentially for a masthead which content scrolls under.",
          "defaultValue": "0"
        },
        {
          "name": "scrollableSelector",
          "type": "string",
          "description": "Selector for the scrollable element to spy on. Not passing a selector disables spying."
        },
        {
          "name": "toggleAriaLabel",
          "type": "string",
          "description": "Aria label for expandable toggle",
          "defaultValue": "'Toggle jump links'"
        }
      ]
    },
    {
      "name": "JumpLinksItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Text to be rendered inside span"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to li"
        },
        {
          "name": "href",
          "type": "string",
          "description": "Href for this link"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Whether this item is active. Parent JumpLinks component sets this when passed a `scrollableSelector`."
        },
        {
          "name": "node",
          "type": "string | HTMLElement",
          "description": "Selector or HTMLElement to spy on"
        },
        {
          "name": "onClick",
          "type": "(ev: React.MouseEvent<HTMLAnchorElement>) => void",
          "description": "Click handler for anchor tag. Parent JumpLinks components tap into this."
        }
      ]
    }
  ],
  "examples": [
    "Basic",
    "With centered list",
    "With label",
    "Vertical",
    "Vertical with label",
    "Expandable vertical with subsection"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { JumpLinks, JumpLinksItem } from '@patternfly/react-core';\n\nexport const JumpLinksBasic: React.FunctionComponent = () => (\n  <JumpLinks>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n    <JumpLinksItem isActive>Active section</JumpLinksItem>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n  </JumpLinks>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'With centered list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { JumpLinks, JumpLinksItem } from '@patternfly/react-core';\n\nexport const JumpLinksWithCenteredList: React.FunctionComponent = () => (\n  <JumpLinks isCentered>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n    <JumpLinksItem isActive>Active section</JumpLinksItem>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n  </JumpLinks>\n);\n","title":"With centered list","lang":"ts"}}>
      
    </Example>,
  'With label': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { JumpLinks, JumpLinksItem } from '@patternfly/react-core';\n\nexport const JumpLinksWithLabel: React.FunctionComponent = () => (\n  <>\n    <JumpLinks label=\"Jump to section\">\n      <JumpLinksItem>Inactive section</JumpLinksItem>\n      <JumpLinksItem isActive>Active section</JumpLinksItem>\n      <JumpLinksItem>Inactive section</JumpLinksItem>\n    </JumpLinks>\n    <JumpLinks isCentered label=\"Jump to section\">\n      <JumpLinksItem>Inactive section</JumpLinksItem>\n      <JumpLinksItem isActive>Active section</JumpLinksItem>\n      <JumpLinksItem>Inactive section</JumpLinksItem>\n    </JumpLinks>\n  </>\n);\n","title":"With label","lang":"ts"}}>
      
    </Example>,
  'Vertical': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { JumpLinks, JumpLinksItem } from '@patternfly/react-core';\n\nexport const JumpLinksVertical: React.FunctionComponent = () => (\n  <JumpLinks isVertical>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n    <JumpLinksItem isActive>Active section</JumpLinksItem>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n  </JumpLinks>\n);\n","title":"Vertical","lang":"ts"}}>
      
    </Example>,
  'Vertical with label': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { JumpLinks, JumpLinksItem } from '@patternfly/react-core';\n\nexport const JumpLinksVerticalWithLabel: React.FunctionComponent = () => (\n  <JumpLinks isVertical label=\"Jump to section\">\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n    <JumpLinksItem isActive>Active section</JumpLinksItem>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n  </JumpLinks>\n);\n","title":"Vertical with label","lang":"ts"}}>
      
    </Example>,
  'Expandable vertical with subsection': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { JumpLinks, JumpLinksItem, JumpLinksList } from '@patternfly/react-core';\n\nexport const JumpLinksExpandableVerticalWithSubsection: React.FunctionComponent = () => (\n  <JumpLinks isVertical label=\"Jump to section\" expandable={{ default: 'expandable' }}>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n    <JumpLinksItem>\n      Section with active subsection\n      <JumpLinksList>\n        <JumpLinksItem isActive>Active subsection</JumpLinksItem>\n        <JumpLinksItem>Inactive subsection</JumpLinksItem>\n        <JumpLinksItem>Inactive subsection</JumpLinksItem>\n      </JumpLinksList>\n    </JumpLinksItem>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n    <JumpLinksItem>Inactive section</JumpLinksItem>\n  </JumpLinks>\n);\n","title":"Expandable vertical with subsection","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`These examples are static because they have no element to scroll spy on that makes sense. Check out the `}
      <PatternflyThemeLink {...{"to":"./react-demos"}}>
        {`React demos`}
      </PatternflyThemeLink>
      {` to see scroll spying in action!`}
    </p>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With centered list"])}
    {React.createElement(pageData.examples["With label"])}
    {React.createElement(pageData.examples["Vertical"])}
    {React.createElement(pageData.examples["Vertical with label"])}
    {React.createElement(pageData.examples["Expandable vertical with subsection"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsJumpLinksReactDocs';
Component.pageData = pageData;

export default Component;
