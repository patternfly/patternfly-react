import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/layouts/Split/examples/./split.css';
const pageData = {
  "id": "Split",
  "section": "layouts",
  "source": "react",
  "slug": "/layouts/split/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/layouts/Split/examples/Split.md",
  "propComponents": [
    {
      "name": "Split",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Split layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Split layout",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ReactNode",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        },
        {
          "name": "hasGutter",
          "type": "boolean",
          "description": "Adds space between children.",
          "defaultValue": "false"
        },
        {
          "name": "isWrappable",
          "type": "boolean",
          "description": "Allows children to wrap",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "SplitItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Split Layout Item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Split Layout Item",
          "defaultValue": "''"
        },
        {
          "name": "isFilled",
          "type": "boolean",
          "description": "Flag indicating if this Split Layout item should fill the available horizontal space.",
          "defaultValue": "false"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-l-split"
  ],
  "examples": [
    "Basic",
    "With gutter",
    "Wrappable"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Split, SplitItem } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <Split>\n    <SplitItem>content</SplitItem>\n    <SplitItem isFilled>pf-m-fill</SplitItem>\n    <SplitItem>content</SplitItem>\n  </Split>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With gutter': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Split, SplitItem } from '@patternfly/react-core';\n\nconst WithGutter = () => (\n  <Split hasGutter>\n    <SplitItem>content</SplitItem>\n    <SplitItem isFilled>pf-m-fill</SplitItem>\n    <SplitItem>content</SplitItem>\n  </Split>\n)","title":"With gutter","lang":"js"}}>
      
    </Example>,
  'Wrappable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Split, SplitItem } from '@patternfly/react-core';\n\nconst Wrappable = () => (\n  <Split hasGutter isWrappable>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n    <SplitItem>content</SplitItem>\n  </Split>\n)","title":"Wrappable","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With gutter"])}
    {React.createElement(pageData.examples["Wrappable"])}
  </React.Fragment>
);
Component.displayName = 'LayoutsSplitReactDocs';
Component.pageData = pageData;

export default Component;
