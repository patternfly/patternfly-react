import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Title",
  "section": "components",
  "source": "react",
  "slug": "/components/title/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Title/examples/Title.md",
  "propComponents": [
    {
      "name": "Title",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Title",
          "defaultValue": "''"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Title",
          "defaultValue": "''"
        },
        {
          "name": "headingLevel",
          "type": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
          "description": "The heading level to use",
          "required": true
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "size",
          "type": "'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",
          "description": "The size of the Title",
          "defaultValue": "headingLevelSizeMap[HeadingLevel]"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-title"
  ],
  "examples": [
    "Sizes",
    "Default size mappings"
  ]
};
pageData.examples = {
  'Sizes': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Title, TitleSizes } from '@patternfly/react-core';\n\nconst Sizes = () => (\n  <React.Fragment>\n    <Title headingLevel=\"h1\" size={TitleSizes['4xl']}>\n      4xl Title\n    </Title>\n    <Title headingLevel=\"h2\" size=\"3xl\">\n      3xl Title\n    </Title>\n    <Title headingLevel=\"h3\" size={TitleSizes['2xl']}>\n      2xl Title\n    </Title>\n    <Title headingLevel=\"h4\" size=\"xl\">\n      xl Title\n    </Title>\n    <Title headingLevel=\"h5\" size={TitleSizes.lg}>\n      lg Title\n    </Title>\n    <Title headingLevel=\"h6\" size=\"md\">\n      md Title\n    </Title>\n  </React.Fragment>\n)","title":"Sizes","lang":"js"}}>
      
    </Example>,
  'Default size mappings': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Title } from '@patternfly/react-core';\n\nconst DefaultSizeMappings = () => (\n  <React.Fragment>\n    <Title headingLevel=\"h1\">\n      h1 default to 2xl\n    </Title>\n    <Title headingLevel=\"h2\">\n      h2 defaults to xl\n    </Title>\n    <Title headingLevel=\"h3\">\n      h3 defaults to lg\n    </Title>\n    <Title headingLevel=\"h4\">\n      h4 defaults to md\n    </Title>\n    <Title headingLevel=\"h5\">\n      h5 defaults to md\n    </Title>\n    <Title headingLevel=\"h6\">\n      h6 defaults to md\n    </Title>\n  </React.Fragment>\n)","title":"Default size mappings","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Sizes"])}
    {React.createElement(pageData.examples["Default size mappings"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTitleReactDocs';
Component.pageData = pageData;

export default Component;
