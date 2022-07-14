import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/components/BackToTop/examples/./BackToTop.css'
const pageData = {
  "id": "BackToTop",
  "section": "components",
  "source": "react",
  "slug": "/components/backtotop/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/BackToTop/examples/BackToTop.md",
  "propComponents": [
    {
      "name": "BackToTop",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the back to top"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-back-to-top"
  ],
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { BackToTop } from '@patternfly/react-core';\n\nconst Basic = () => <BackToTop />","title":"Basic","lang":"ts"}}>
      
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
Component.displayName = 'ComponentsBacktotopReactDocs';
Component.pageData = pageData;

export default Component;
