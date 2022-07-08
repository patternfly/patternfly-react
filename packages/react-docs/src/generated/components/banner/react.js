import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Banner",
  "section": "components",
  "source": "react",
  "slug": "/components/banner/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Banner/examples/Banner.md",
  "propComponents": [
    {
      "name": "Banner",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the banner"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the banner"
        },
        {
          "name": "isSticky",
          "type": "boolean",
          "description": "If set to true, the banner sticks to the top of its container",
          "defaultValue": "false"
        },
        {
          "name": "screenReaderText",
          "type": "string",
          "description": "Text announced by screen readers to indicate the type of banner. Defaults to \"${variant} banner\" if this prop is not passed in"
        },
        {
          "name": "variant",
          "type": "'default' | 'info' | 'danger' | 'success' | 'warning'",
          "description": "Variant styles for the banner",
          "defaultValue": "'default'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-banner"
  ],
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Banner } from '@patternfly/react-core';\n\nexport const BannerBasic: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Banner screenReaderText=\"This is a default Banner\">Default banner</Banner>\n    <br />\n    <Banner variant=\"info\" screenReaderText=\"This is an info Banner\">\n      Info banner\n    </Banner>\n    <br />\n    <Banner variant=\"danger\">Danger banner</Banner>\n    <br />\n    <Banner variant=\"success\">Success banner</Banner>\n    <br />\n    <Banner variant=\"warning\">Warning banner</Banner>\n  </React.Fragment>\n);\n","title":"Basic","lang":"ts"}}>
      
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
Component.displayName = 'ComponentsBannerReactDocs';
Component.pageData = pageData;

export default Component;
