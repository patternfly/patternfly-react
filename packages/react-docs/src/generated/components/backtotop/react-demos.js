import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "BackToTop",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/backtotop/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/BackToTop.md",
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n    BackToTop\n} from '@patternfly/react-core';\n\nconst BackToTopBasic: React.FunctionComponent = () => {\n    return <BackToTop />\n}","title":"Basic","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBacktotopReactDemosDocs';
Component.pageData = pageData;

export default Component;
