import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/components/BackToTop/examples/./BackToTop.css'
const pageData = {
  "id": "Back to top",
  "section": "components",
  "source": "react",
  "slug": "/components/back-to-top/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/BackToTop/examples/BackToTop.md",
  "propComponents": [
    {
      "name": "BackToTop",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the back to top."
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "isAlwaysVisible",
          "type": "boolean",
          "description": "Flag to always show back to top button, defaults to false."
        },
        {
          "name": "scrollableSelector",
          "type": "string",
          "description": "Selector for the scrollable element to spy on. Not passing a selector defaults to spying on window scroll events."
        },
        {
          "name": "title",
          "type": "string",
          "description": "Title to appear in back to top button."
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-back-to-top"
  ],
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { BackToTop } from '@patternfly/react-core';\n\nexport const BackToTopBasic: React.FunctionComponent = () => <BackToTop isAlwaysVisible />;\n","title":"Basic","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Below example does not demonstrate functionality see React demos for a full demonstration.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Back to top only shows after overflowing element has been scrolled 400px.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBackToTopReactDocs';
Component.pageData = pageData;

export default Component;
