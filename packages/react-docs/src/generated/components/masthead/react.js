import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import { Link } from '@reach/router';
import pfIcon from '../../../../../react-core/src/components/Masthead/examples/./pf-logo-small.svg';
const pageData = {
  "id": "Masthead",
  "section": "components",
  "source": "react",
  "slug": "/components/masthead/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Masthead/examples/Masthead.md",
  "propComponents": [
    {
      "name": "Masthead",
      "description": "",
      "props": [
        {
          "name": "backgroundColor",
          "type": "'dark' | 'light' | 'light200'",
          "description": "Background theme color of the masthead",
          "defaultValue": "'dark'"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside of the masthead"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the masthead"
        },
        {
          "name": "display",
          "type": "{\n  default?: 'inline' | 'stack';\n  sm?: 'inline' | 'stack';\n  md?: 'inline' | 'stack';\n  lg?: 'inline' | 'stack';\n  xl?: 'inline' | 'stack';\n  '2xl'?: 'inline' | 'stack';\n}",
          "description": "Display type at various breakpoints",
          "defaultValue": "{\n  md: 'inline'\n}"
        },
        {
          "name": "inset",
          "type": "{\n  default?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  sm?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  md?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  lg?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  xl?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n  '2xl'?: 'insetNone' | 'insetXs' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl' | 'inset3xl';\n}",
          "description": "Insets at various breakpoints"
        }
      ]
    },
    {
      "name": "MastheadToggle",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside of the masthead toggle."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the masthead toggle."
        }
      ]
    },
    {
      "name": "MastheadMain",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside of the masthead main block."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the masthead main."
        }
      ]
    },
    {
      "name": "MastheadBrand",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside of the masthead brand."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the masthead brand."
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Component type of the masthead brand.",
          "defaultValue": "'a'"
        }
      ]
    },
    {
      "name": "MastheadContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside of the masthead content block."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the masthead content."
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-masthead"
  ],
  "examples": [
    "Basic",
    "Basic with mixed content",
    "Display inline",
    "Display stack",
    "Display stack, display inline responsive",
    "Light variant",
    "Light 200 variant",
    "Inset",
    "With icon router link"
  ]
};
pageData.liveContext = {
  BarsIcon,
  Link,
  pfIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nconst Basic = () => (\n  <Masthead id=\"basic\">\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand>Logo</MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <span>Content</span>\n    </MastheadContent>\n  </Masthead>\n)","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Basic with mixed content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Masthead,\n  MastheadToggle,\n  MastheadMain,\n  MastheadBrand,\n  MastheadContent,\n  Button,\n  Flex,\n  FlexItem\n} from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nconst BasicWithMixedContent = () => (\n  <Masthead id=\"basic-mixed\">\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand>Logo</MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <Flex>\n        <span>Testing text color</span>\n        <Button>testing</Button>\n        <FlexItem alignSelf={{ default: 'alignSelfFlexEnd' }}>\n          <Button>testing</Button>\n        </FlexItem>\n      </Flex>\n    </MastheadContent>\n  </Masthead>\n)","title":"Basic with mixed content","lang":"ts"}}>
      
    </Example>,
  'Display inline': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nconst DisplayInline = () => (\n  <Masthead id=\"inline-masthead\" display={{ default: 'inline' }}>\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand>Logo</MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <span>Content</span>\n    </MastheadContent>\n  </Masthead>\n)","title":"Display inline","lang":"ts"}}>
      
    </Example>,
  'Display stack': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nconst DisplayStack = () => (\n  <Masthead id=\"stack-masthead\" display={{ default: 'stack' }}>\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand>Logo</MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <span>Content</span>\n    </MastheadContent>\n  </Masthead>\n)","title":"Display stack","lang":"ts"}}>
      
    </Example>,
  'Display stack, display inline responsive': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nconst DisplayStackDisplayInlineResponsive = () => (\n  <Masthead id=\"stack-masthead\" display={{ default: 'inline', lg: 'stack', '2xl': 'inline' }}>\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand>Logo</MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <span>Content</span>\n    </MastheadContent>\n  </Masthead>\n)","title":"Display stack, display inline responsive","lang":"ts"}}>
      
    </Example>,
  'Light variant': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nconst LightVariant = () => (\n  <Masthead id=\"light-masthead\" backgroundColor=\"light\">\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand>Logo</MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <span>Content</span>\n    </MastheadContent>\n  </Masthead>\n)","title":"Light variant","lang":"ts"}}>
      
    </Example>,
  'Light 200 variant': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nconst Light200Variant = () => (\n  <Masthead id=\"light200-masthead\" backgroundColor=\"light200\">\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand>Logo</MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <span>Content</span>\n    </MastheadContent>\n  </Masthead>\n)","title":"Light 200 variant","lang":"ts"}}>
      
    </Example>,
  'Inset': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\n\nconst Inset = () => (\n  <Masthead id=\"inset-masthead\" inset={{ default: 'insetSm' }}>\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand>Logo</MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <span>Content</span>\n    </MastheadContent>\n  </Masthead>\n)","title":"Inset","lang":"ts"}}>
      
    </Example>,
  'With icon router link': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';\nimport { Link } from '@reach/router';\nimport pfIcon from './pf-logo-small.svg';\n\nconst WithIconRouterLink = () => (\n  <Masthead id=\"basic\">\n    <MastheadToggle>\n      <Button variant=\"plain\" onClick={() => {}} aria-label=\"Global navigation\">\n        <BarsIcon />\n      </Button>\n    </MastheadToggle>\n    <MastheadMain>\n      <MastheadBrand component={props => <Link {...props} to=\"#\" />}>\n        <img src={pfIcon} alt=\"Patterfly Logo\" />\n      </MastheadBrand>\n    </MastheadMain>\n    <MastheadContent>\n      <span>Content</span>\n    </MastheadContent>\n  </Masthead>\n)","title":"With icon router link","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`Masthead`}
      </code>
      {` should contain the following components to maintain proper layout and formatting: `}
      <code {...{"className":"ws-code"}}>
        {`MastheadToggle`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`MastheadMain`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`MastheadContent`}
      </code>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`MastheadMain`}
      </code>
      {` represents the smaller area taken up by a logo, and will typically contain a `}
      <code {...{"className":"ws-code"}}>
        {`MastheadBrand`}
      </code>
      {`. `}
      <code {...{"className":"ws-code"}}>
        {`MastheadContent`}
      </code>
      {` represents the main portion of the masthead area and will typically contain a `}
      <code {...{"className":"ws-code"}}>
        {`Toolbar`}
      </code>
      {` or other menu-like content such as `}
      <code {...{"className":"ws-code"}}>
        {`Dropdown`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Basic with mixed content"])}
    {React.createElement(pageData.examples["Display inline"])}
    {React.createElement(pageData.examples["Display stack"])}
    {React.createElement(pageData.examples["Display stack, display inline responsive"])}
    {React.createElement(pageData.examples["Light variant"])}
    {React.createElement(pageData.examples["Light 200 variant"])}
    {React.createElement(pageData.examples["Inset"])}
    {React.createElement(pageData.examples["With icon router link"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsMastheadReactDocs';
Component.pageData = pageData;

export default Component;
