import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/layouts/Stack/examples/./stack.css';
const pageData = {
  "id": "Stack",
  "section": "layouts",
  "source": "react",
  "slug": "/layouts/stack/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/layouts/Stack/examples/Stack.md",
  "propComponents": [
    {
      "name": "Stack",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Stack layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Stack layout",
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
        }
      ]
    },
    {
      "name": "StackItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "additional classes added to the Stack Layout Item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "content rendered inside the Stack Layout Item",
          "defaultValue": "''"
        },
        {
          "name": "isFilled",
          "type": "boolean",
          "description": "Flag indicating if this Stack Layout item should fill the available vertical space.",
          "defaultValue": "false"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-l-stack"
  ],
  "examples": [
    "Basic",
    "With gutter"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Stack, StackItem } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <Stack>\n    <StackItem>content</StackItem>\n    <StackItem isFilled>pf-m-fill</StackItem>\n    <StackItem>content</StackItem>\n  </Stack>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With gutter': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Stack, StackItem } from '@patternfly/react-core';\n\nconst WithGutter = () => (\n  <Stack hasGutter>\n    <StackItem>content</StackItem>\n    <StackItem isFilled>pf-m-fill</StackItem>\n    <StackItem>content</StackItem>\n  </Stack>\n)","title":"With gutter","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With gutter"])}
  </React.Fragment>
);
Component.displayName = 'LayoutsStackReactDocs';
Component.pageData = pageData;

export default Component;
