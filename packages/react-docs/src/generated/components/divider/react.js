import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Divider",
  "section": "components",
  "source": "react",
  "slug": "/components/divider/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Divider/examples/Divider.md",
  "propComponents": [
    {
      "name": "Divider",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the divider"
        },
        {
          "name": "component",
          "type": "'hr' | 'li' | 'div'",
          "description": "The component type to use",
          "defaultValue": "DividerVariant.hr"
        },
        {
          "name": "inset",
          "type": "{\n  default?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  sm?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  md?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  lg?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  xl?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  '2xl'?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n}",
          "description": "Insets at various breakpoints."
        },
        {
          "name": "isVertical",
          "type": "boolean",
          "description": "Use `orientation` instead. Flag to indicate the divider is vertical (must be in a flex layout)",
          "defaultValue": "false",
          "deprecated": true
        },
        {
          "name": "orientation",
          "type": "{\n  default?: 'vertical' | 'horizontal';\n  sm?: 'vertical' | 'horizontal';\n  md?: 'vertical' | 'horizontal';\n  lg?: 'vertical' | 'horizontal';\n  xl?: 'vertical' | 'horizontal';\n  '2xl'?: 'vertical' | 'horizontal';\n}",
          "description": "Indicates how the divider will display at various breakpoints. Vertical divider must be in a flex layout."
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-divider"
  ],
  "examples": [
    "Using hr",
    "Using li",
    "Using div",
    "Inset medium",
    "Inset at various breakpoints",
    "Vertical in flex layout",
    "Vertical in flex layout, inset medium",
    "Vertical in flex layout, inset at various breakpoints",
    "Switch orientation at various breakpoints"
  ]
};
pageData.examples = {
  'Using hr': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nexport const DividerUsingHr: React.FunctionComponent = () => <Divider />;\n","title":"Using hr","lang":"ts"}}>
      
    </Example>,
  'Using li': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nexport const DividerUsingLi: React.FunctionComponent = () => (\n  <ul>\n    <li>List item one</li>\n    <Divider component=\"li\" />\n    <li>List item two</li>\n  </ul>\n);\n","title":"Using li","lang":"ts"}}>
      
    </Example>,
  'Using div': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nexport const DividerUsingDiv: React.FunctionComponent = () => <Divider component=\"div\" />;\n","title":"Using div","lang":"ts"}}>
      
    </Example>,
  'Inset medium': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nexport const DividerInsetMedium: React.FunctionComponent = () => <Divider inset={{ default: 'insetMd' }} />;\n","title":"Inset medium","lang":"ts"}}>
      
    </Example>,
  'Inset at various breakpoints': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nexport const DividerInsetVariousBreakpoints: React.FunctionComponent = () => (\n  <Divider\n    inset={{\n      default: 'insetMd',\n      md: 'insetNone',\n      lg: 'inset3xl',\n      xl: 'insetLg'\n    }}\n  />\n);\n","title":"Inset at various breakpoints","lang":"ts"}}>
      
    </Example>,
  'Vertical in flex layout': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider, Flex, FlexItem } from '@patternfly/react-core';\n\nexport const DividerVerticalFlex: React.FunctionComponent = () => (\n  <Flex>\n    <FlexItem>first item</FlexItem>\n    <Divider\n      orientation={{\n        default: 'vertical'\n      }}\n    />\n    <FlexItem>second item</FlexItem>\n  </Flex>\n);\n","title":"Vertical in flex layout","lang":"ts"}}>
      
    </Example>,
  'Vertical in flex layout, inset medium': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider, Flex, FlexItem } from '@patternfly/react-core';\n\nexport const DividerVerticalFlexInsetMedium: React.FunctionComponent = () => (\n  <Flex>\n    <FlexItem>first item</FlexItem>\n    <Divider\n      orientation={{\n        default: 'vertical'\n      }}\n      inset={{ default: 'insetMd' }}\n    />\n    <FlexItem>second item</FlexItem>\n  </Flex>\n);\n","title":"Vertical in flex layout, inset medium","lang":"ts"}}>
      
    </Example>,
  'Vertical in flex layout, inset at various breakpoints': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider, Flex, FlexItem } from '@patternfly/react-core';\n\nexport const DividerVerticalFlexInsetVariousBreakpoints: React.FunctionComponent = () => (\n  <Flex>\n    <FlexItem>first item</FlexItem>\n    <Divider\n      orientation={{\n        default: 'vertical'\n      }}\n      inset={{\n        default: 'insetMd',\n        md: 'insetNone',\n        lg: 'insetSm',\n        xl: 'insetXs'\n      }}\n    />\n    <FlexItem>second item</FlexItem>\n  </Flex>\n);\n","title":"Vertical in flex layout, inset at various breakpoints","lang":"ts"}}>
      
    </Example>,
  'Switch orientation at various breakpoints': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider, Flex, FlexItem } from '@patternfly/react-core';\n\nexport const DividerOrientationVariousBreakpoints: React.FunctionComponent = () => (\n  <Flex>\n    <FlexItem>first item</FlexItem>\n    <Divider\n      orientation={{\n        default: 'vertical',\n        sm: 'horizontal',\n        md: 'vertical',\n        lg: 'horizontal',\n        xl: 'vertical',\n        '2xl': 'horizontal'\n      }}\n    />\n    <FlexItem>second item</FlexItem>\n  </Flex>\n);\n","title":"Switch orientation at various breakpoints","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Using hr"])}
    {React.createElement(pageData.examples["Using li"])}
    {React.createElement(pageData.examples["Using div"])}
    {React.createElement(pageData.examples["Inset medium"])}
    {React.createElement(pageData.examples["Inset at various breakpoints"])}
    {React.createElement(pageData.examples["Vertical in flex layout"])}
    {React.createElement(pageData.examples["Vertical in flex layout, inset medium"])}
    {React.createElement(pageData.examples["Vertical in flex layout, inset at various breakpoints"])}
    {React.createElement(pageData.examples["Switch orientation at various breakpoints"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDividerReactDocs';
Component.pageData = pageData;

export default Component;
