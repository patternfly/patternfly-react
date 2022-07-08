import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Spinner",
  "section": "components",
  "source": "react",
  "slug": "/components/spinner/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Spinner/examples/Spinner.md",
  "propComponents": [
    {
      "name": "Spinner",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label to describe what is loading"
        },
        {
          "name": "aria-labelledBy",
          "type": "string",
          "description": "Id of element which describes what is being loaded"
        },
        {
          "name": "aria-valuetext",
          "type": "string",
          "description": "Text describing that current loading status or progress",
          "defaultValue": "'Loading...'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Spinner.",
          "defaultValue": "''"
        },
        {
          "name": "diameter",
          "type": "string",
          "description": "Diameter of spinner set as CSS variable"
        },
        {
          "name": "isSVG",
          "type": "boolean",
          "description": "Whether to use an SVG (new) rather than a span (old)",
          "defaultValue": "false"
        },
        {
          "name": "size",
          "type": "'sm' | 'md' | 'lg' | 'xl'",
          "description": "Size variant of progress.",
          "defaultValue": "'xl'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-spinner"
  ],
  "examples": [
    "Basic",
    "Size variations",
    "Custom size"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Spinner } from '@patternfly/react-core';\n\nconst Basic = () => <Spinner isSVG aria-label=\"Contents of the basic example\"/>","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Size variations': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Spinner } from '@patternfly/react-core';\n\nconst SizeVariations = () => (\n  <React.Fragment>\n    <Spinner isSVG size=\"sm\" aria-label=\"Contents of the small example\"/>\n    <Spinner isSVG size=\"md\" aria-label=\"Contents of the medium example\"/>\n    <Spinner isSVG size=\"lg\" aria-label=\"Contents of the large example\"/>\n    <Spinner isSVG size=\"xl\" aria-label=\"Contents of the extra large example\"/>\n  </React.Fragment>\n)","title":"Size variations","lang":"js"}}>
      
    </Example>,
  'Custom size': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Spinner } from '@patternfly/react-core';\n\nconst CustomSize = () => <Spinner isSVG diameter=\"80px\" aria-label=\"Contents of the custom size example\"/>","title":"Custom size","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Size variations"])}
    {React.createElement(pageData.examples["Custom size"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSpinnerReactDocs';
Component.pageData = pageData;

export default Component;
