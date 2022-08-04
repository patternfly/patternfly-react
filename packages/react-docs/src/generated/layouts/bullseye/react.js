import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/layouts/Bullseye/examples/./bullseye.css';
const pageData = {
  "id": "Bullseye",
  "section": "layouts",
  "source": "react",
  "slug": "/layouts/bullseye/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/layouts/Bullseye/examples/Bullseye.md",
  "propComponents": [
    {
      "name": "Bullseye",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Bullseye layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Bullseye layout",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "unknown",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-l-bullseye"
  ],
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Bullseye } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <Bullseye>\n    <div>Bullseye ◎ layout</div>\n  </Bullseye>\n)","title":"Basic","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'LayoutsBullseyeReactDocs';
Component.pageData = pageData;

export default Component;
