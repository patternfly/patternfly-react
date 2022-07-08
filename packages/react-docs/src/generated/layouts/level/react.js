import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/layouts/Level/examples/./level.css';
const pageData = {
  "id": "Level",
  "section": "layouts",
  "source": "react",
  "slug": "/layouts/level/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/layouts/Level/examples/Level.md",
  "propComponents": [
    {
      "name": "Level",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Level layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Level layout",
          "defaultValue": "''"
        },
        {
          "name": "hasGutter",
          "type": "boolean",
          "description": "Adds space between children."
        }
      ]
    },
    {
      "name": "LevelItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Level Layout Item",
          "defaultValue": "null"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-l-level"
  ],
  "examples": [
    "Basic",
    "With gutters"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Level, LevelItem } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <Level>\n    <LevelItem>Level Item</LevelItem>\n    <LevelItem>Level Item</LevelItem>\n    <LevelItem>Level Item</LevelItem>\n  </Level>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With gutters': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Level, LevelItem } from '@patternfly/react-core';\n\nconst WithGutters = () => (\n  <Level hasGutter>\n    <LevelItem>Level Item</LevelItem>\n    <LevelItem>Level Item</LevelItem>\n    <LevelItem>Level Item</LevelItem>\n  </Level>\n)","title":"With gutters","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With gutters"])}
  </React.Fragment>
);
Component.displayName = 'LayoutsLevelReactDocs';
Component.pageData = pageData;

export default Component;
