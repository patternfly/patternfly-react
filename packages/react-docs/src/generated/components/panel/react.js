import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Panel",
  "section": "components",
  "source": "react",
  "slug": "/components/panel/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Panel/examples/Panel.md",
  "propComponents": [
    {
      "name": "Panel",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the panel"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        },
        {
          "name": "isScrollable",
          "type": "boolean",
          "description": "Flag to add scrollable styling to the panel"
        },
        {
          "name": "variant",
          "type": "'raised' | 'bordered'",
          "description": "Adds panel variant styles"
        }
      ]
    },
    {
      "name": "PanelMain",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the panel main div"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        },
        {
          "name": "maxHeight",
          "type": "string",
          "description": "Max height of the panel main div as a string with the value and unit"
        }
      ]
    },
    {
      "name": "PanelMainBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the panel main body div"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        }
      ]
    },
    {
      "name": "PanelHeader",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the panel header"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        }
      ]
    },
    {
      "name": "PanelFooter",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the panel footer"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to outer div"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-panel"
  ],
  "examples": [
    "Basic",
    "Header",
    "Footer",
    "Header and footer",
    "No body",
    "Raised",
    "Bordered",
    "Scrollable",
    "Scrollable with header and footer"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';\n\nconst BasicPanel = () => (\n  <Panel>\n    <PanelMain>\n      <PanelMainBody>Main content</PanelMainBody>\n    </PanelMain>\n  </Panel>\n);","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Header': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain, PanelMainBody, PanelHeader, Divider } from '@patternfly/react-core';\n\nconst HeaderPanel = () => (\n  <Panel>\n    <PanelHeader>Header content</PanelHeader>\n    <Divider />\n    <PanelMain>\n      <PanelMainBody>Main content</PanelMainBody>\n    </PanelMain>\n  </Panel>\n);","title":"Header","lang":"js"}}>
      
    </Example>,
  'Footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain, PanelMainBody, PanelFooter } from '@patternfly/react-core';\n\nconst FooterPanel = () => (\n  <Panel>\n    <PanelMain>\n      <PanelMainBody>Main content</PanelMainBody>\n    </PanelMain>\n    <PanelFooter>Footer content</PanelFooter>\n  </Panel>\n);","title":"Footer","lang":"js"}}>
      
    </Example>,
  'Header and footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain, PanelMainBody, PanelHeader, Divider, PanelFooter } from '@patternfly/react-core';\n\nconst HeaderFooterPanel = () => (\n  <Panel>\n    <PanelHeader>Header content</PanelHeader>\n    <Divider />\n    <PanelMain>\n      <PanelMainBody>Main content</PanelMainBody>\n    </PanelMain>\n    <PanelFooter>Footer content</PanelFooter>\n  </Panel>\n);","title":"Header and footer","lang":"js"}}>
      
    </Example>,
  'No body': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain } from '@patternfly/react-core';\n\nconst NoBodyPanel = () => (\n  <Panel>\n    <PanelMain>Main content</PanelMain>\n  </Panel>\n);","title":"No body","lang":"js"}}>
      
    </Example>,
  'Raised': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';\n\nconst RaisedPanel = () => (\n  <Panel variant=\"raised\">\n    <PanelMain>\n      <PanelMainBody>Main content</PanelMainBody>\n    </PanelMain>\n  </Panel>\n);","title":"Raised","lang":"js"}}>
      
    </Example>,
  'Bordered': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';\n\nconst BorderedPanel = () => (\n  <Panel variant=\"bordered\">\n    <PanelMain>\n      <PanelMainBody>Main content</PanelMainBody>\n    </PanelMain>\n  </Panel>\n);","title":"Bordered","lang":"js"}}>
      
    </Example>,
  'Scrollable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';\n\nconst ScrollablePanel = () => (\n  <Panel isScrollable>\n    <PanelMain tabIndex={0}>\n      <PanelMainBody>\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n      </PanelMainBody>\n    </PanelMain>\n  </Panel>\n);","title":"Scrollable","lang":"js"}}>
      
    </Example>,
  'Scrollable with header and footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Panel, PanelMain, PanelMainBody, PanelHeader, Divider, PanelFooter } from '@patternfly/react-core';\n\nconst ScrollableHeaderFooterPanel = () => (\n  <Panel isScrollable>\n    <PanelHeader>Header content</PanelHeader>\n    <Divider />\n    <PanelMain tabIndex={0}>\n      <PanelMainBody>\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n        <br />\n        <br />\n        Main content\n      </PanelMainBody>\n    </PanelMain>\n    <PanelFooter>Footer content</PanelFooter>\n  </Panel>\n);","title":"Scrollable with header and footer","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Header"])}
    {React.createElement(pageData.examples["Footer"])}
    {React.createElement(pageData.examples["Header and footer"])}
    {React.createElement(pageData.examples["No body"])}
    {React.createElement(pageData.examples["Raised"])}
    {React.createElement(pageData.examples["Bordered"])}
    {React.createElement(pageData.examples["Scrollable"])}
    {React.createElement(pageData.examples["Scrollable with header and footer"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsPanelReactDocs';
Component.pageData = pageData;

export default Component;
