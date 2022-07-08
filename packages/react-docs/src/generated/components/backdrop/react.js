import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImportbasic from './react/basic.png';
import srcImportwithspinner from './react/with-spinner.png';
const pageData = {
  "id": "Backdrop",
  "section": "components",
  "source": "react",
  "slug": "/components/backdrop/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Backdrop/examples/Backdrop.md",
  "propComponents": [
    {
      "name": "Backdrop",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the backdrop",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the button",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-backdrop"
  ],
  "fullscreenExamples": [
    "Basic",
    "With spinner"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasic} {...{"code":"import React from 'react';\nimport { Backdrop } from '@patternfly/react-core';\n\nexport const BackdropBasic: React.FunctionComponent = () => <Backdrop />;\n","title":"Basic","lang":"ts","isFullscreen":true}}>
      
    </Example>,
  'With spinner': props => 
    <Example {...pageData} {...props} thumbnail={srcImportwithspinner} {...{"code":"import React from 'react';\nimport { Backdrop, Spinner, Bullseye } from '@patternfly/react-core';\n\nexport const BackdropSpinner: React.FunctionComponent = () => (\n  <Backdrop>\n    <Bullseye>\n      <Spinner aria-label=\"Backdrop content\" aria-valueText=\"Loading...\" />\n    </Bullseye>\n  </Backdrop>\n);\n","title":"With spinner","lang":"ts","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With spinner"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBackdropReactDocs';
Component.pageData = pageData;

export default Component;
