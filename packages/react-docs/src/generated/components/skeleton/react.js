import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Skeleton",
  "section": "components",
  "source": "react",
  "slug": "/components/skeleton/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Skeleton/examples/Skeleton.md",
  "propComponents": [
    {
      "name": "Skeleton",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Skeleton"
        },
        {
          "name": "fontSize",
          "type": "'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",
          "description": "The font size height of the Skeleton"
        },
        {
          "name": "height",
          "type": "string",
          "description": "The height of the Skeleton. Must specify pixels or percentage."
        },
        {
          "name": "screenreaderText",
          "type": "string",
          "description": "Text read just to screen reader users"
        },
        {
          "name": "shape",
          "type": "'circle' | 'square'",
          "description": "The shape of the Skeleton"
        },
        {
          "name": "width",
          "type": "string",
          "description": "The width of the Skeleton. Must specify pixels or percentage."
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-skeleton"
  ],
  "examples": [
    "Default",
    "Percentage widths",
    "Percentage heights",
    "Text modifiers",
    "Shapes"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Skeleton } from '@patternfly/react-core';\n\nconst Default = () => <Skeleton screenreaderText=\"Loading contents\" />;","title":"Default","lang":"js"}}>
      
    </Example>,
  'Percentage widths': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Skeleton } from '@patternfly/react-core';\n\nconst PercentageWidths = () => (\n  <React.Fragment>\n    <Skeleton width=\"25%\" screenreaderText=\"Loading contents\" />\n    <br />\n    <Skeleton width=\"33%\" />\n    <br />\n    <Skeleton width=\"50%\" />\n    <br />\n    <Skeleton width=\"66%\" />\n    <br />\n    <Skeleton width=\"75%\" />\n    <br />\n    <Skeleton />\n  </React.Fragment>\n)","title":"Percentage widths","lang":"js"}}>
      
    </Example>,
  'Percentage heights': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Skeleton } from '@patternfly/react-core';\n\nconst PercentageHeights = () => (\n  <div style={{ height: '400px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>\n    <Skeleton height=\"25%\" width=\"15%\" screenreaderText=\"Loading contents\" />\n    <Skeleton height=\"33%\" width=\"15%\" />\n    <Skeleton height=\"50%\" width=\"15%\" />\n    <Skeleton height=\"66%\" width=\"15%\" />\n    <Skeleton height=\"75%\" width=\"15%\" />\n    <Skeleton height=\"100%\" width=\"15%\" />\n  </div>\n)","title":"Percentage heights","lang":"js"}}>
      
    </Example>,
  'Text modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Skeleton } from '@patternfly/react-core';\n\nconst TextModifiers = () => (\n  <React.Fragment>\n    --pf-global--FontSize--4xl\n    <Skeleton fontSize=\"4xl\" screenreaderText=\"Loading font size 4xl\" />\n    <br />\n    --pf-global--FontSize--3xl\n    <Skeleton fontSize=\"3xl\" screenreaderText=\"Loading font size 3xl\" />\n    <br />\n    --pf-global--FontSize--2xl\n    <Skeleton fontSize=\"2xl\" screenreaderText=\"Loading font size 2xl\" />\n    <br />\n    --pf-global--FontSize--xl\n    <Skeleton fontSize=\"xl\" screenreaderText=\"Loading font size xl\" />\n    <br />\n    --pf-global--FontSize--lg\n    <Skeleton fontSize=\"lg\" screenreaderText=\"Loading font size lg\" />\n    <br />\n    --pf-global--FontSize--md\n    <Skeleton fontSize=\"md\" screenreaderText=\"Loading font size md\" />\n    <br />\n    --pf-global--FontSize--sm\n    <Skeleton fontSize=\"sm\" screenreaderText=\"Loading font size sm\" />\n  </React.Fragment>\n)","title":"Text modifiers","lang":"js"}}>
      
    </Example>,
  'Shapes': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Skeleton } from '@patternfly/react-core';\n\nconst Shapes = () => (\n  <React.Fragment>\n    Small circle\n    <Skeleton shape=\"circle\" width=\"15%\" screenreaderText=\"Loading small circle contents\" />\n    <br />\n    Medium circle\n    <Skeleton shape=\"circle\" width=\"30%\" screenreaderText=\"Loading medium circle contents\" />\n    <br />\n    Large circle\n    <Skeleton shape=\"circle\" width=\"50%\" screenreaderText=\"Loading large circle contents\" />\n    <br />\n    Small square\n    <Skeleton shape=\"square\" width=\"15%\" screenreaderText=\"Loading small square contents\" />\n    <br />\n    Medium square\n    <Skeleton shape=\"square\" width=\"30%\" screenreaderText=\"Loading medium square contents\" />\n    <br />\n    Large square\n    <Skeleton shape=\"square\" width=\"50%\" screenreaderText=\"Loading large square contents\" />\n    <br />\n    Small rectangle\n    <div style={{ height: '200px' }}>\n      <Skeleton height=\"50%\" width=\"50%\" screenreaderText=\"Loading small rectangle contents\" />\n    </div>\n    <br />\n    Medium rectangle\n    <div style={{ height: '200px' }}>\n      <Skeleton height=\"75%\" width=\"75%\" screenreaderText=\"Loading medium rectangle contents\" />\n    </div>\n    <br />\n    Large rectangle\n    <div style={{ height: '200px' }}>\n      <Skeleton height=\"100%\" screenreaderText=\"Loading large rectangle contents\" />\n    </div>\n  </React.Fragment>\n)","title":"Shapes","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Percentage widths"])}
    {React.createElement(pageData.examples["Percentage heights"])}
    {React.createElement(pageData.examples["Text modifiers"])}
    {React.createElement(pageData.examples["Shapes"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSkeletonReactDocs';
Component.pageData = pageData;

export default Component;
