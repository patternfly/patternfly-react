import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import pfLogo from '../../../../../react-core/src/components/Brand/examples/./pfLogo.svg';
import logoXl from '../../../../../react-core/src/components/Brand/examples/./pf-c-brand--logo-on-xl.svg';
import logoLg from '../../../../../react-core/src/components/Brand/examples/./pf-c-brand--logo-on-lg.svg';
import logoMd from '../../../../../react-core/src/components/Brand/examples/./pf-c-brand--logo-on-md.svg';
import logoSm from '../../../../../react-core/src/components/Brand/examples/./pf-c-brand--logo-on-sm.svg';
import logo from '../../../../../react-core/src/components/Brand/examples/./pf-c-brand--logo.svg';
import logoBase from '../../../../../react-core/src/components/Brand/examples/./pf-c-brand--logo-base.jpg';
const pageData = {
  "id": "Brand",
  "section": "components",
  "source": "react",
  "slug": "/components/brand/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Brand/examples/Brand.md",
  "propComponents": [
    {
      "name": "Brand",
      "description": "",
      "props": [
        {
          "name": "alt",
          "type": "string",
          "description": "Attribute that specifies the alt text of a <img> Brand. For a <picture> Brand this specifies the fallback <img> alt text.",
          "required": true
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Transforms the Brand into a <picture> element from an <img> element. Container for <source> child elements."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the either type of Brand.",
          "defaultValue": "''"
        },
        {
          "name": "heights",
          "type": "{\n  default?: string;\n  sm?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Heights at various breakpoints for a <picture> Brand."
        },
        {
          "name": "src",
          "type": "string",
          "description": "Attribute that specifies the URL of a <img> Brand. For a <picture> Brand this specifies the fallback <img> URL.",
          "defaultValue": "''"
        },
        {
          "name": "widths",
          "type": "{\n  default?: string;\n  sm?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Widths at various breakpoints for a <picture> Brand."
        }
      ]
    }
  ],
  "examples": [
    "Basic",
    "Responsive"
  ]
};
pageData.liveContext = {
  pfLogo,
  logoXl,
  logoLg,
  logoMd,
  logoSm,
  logo,
  logoBase
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Brand } from '@patternfly/react-core';\nimport pfLogo from './pfLogo.svg';\n\nexport const BrandBasic: React.FunctionComponent = () => <Brand src={pfLogo} alt=\"Patternfly Logo\" />;\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Responsive': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Brand } from '@patternfly/react-core';\nimport logoXl from './pf-c-brand--logo-on-xl.svg';\nimport logoLg from './pf-c-brand--logo-on-lg.svg';\nimport logoMd from './pf-c-brand--logo-on-md.svg';\nimport logoSm from './pf-c-brand--logo-on-sm.svg';\nimport logo from './pf-c-brand--logo.svg';\nimport logoBase from './pf-c-brand--logo-base.jpg';\n\nexport const BrandBasic: React.FunctionComponent = () => (\n  <Brand src={logoBase} alt=\"Fallback patternfly default logo\" widths={{ default: '40px', sm: '60px', md: '220px' }}>\n    <source media=\"(min-width: 1200px)\" srcSet={logoXl} />\n    <source media=\"(min-width: 992px)\" srcSet={logoLg} />\n    <source media=\"(min-width: 768px)\" srcSet={logoMd} />\n    <source media=\"(min-width: 576px)\" srcSet={logoSm} />\n    <source srcSet={logo} />\n  </Brand>\n);\n","title":"Responsive","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Passing `}
        
        <code {...{"className":"ws-code"}}>
          {`<source>`}
        </code>
        {` elements as children to `}
        
        <code {...{"className":"ws-code"}}>
          {`Brand`}
        </code>
        {` will change the component from an `}
        
        <code {...{"className":"ws-code"}}>
          {`<img>`}
        </code>
        {` to a `}
        
        <code {...{"className":"ws-code"}}>
          {`<picture>`}
        </code>
        {` element. In this form, breakpoint modifiers for width and height may be passed to `}
        
        <code {...{"className":"ws-code"}}>
          {`Brand`}
        </code>
        {`. The `}
        
        <code {...{"className":"ws-code"}}>
          {`src`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`alt`}
        </code>
        {` properties should still be passed to populate the fallback `}
        
        <code {...{"className":"ws-code"}}>
          {`img`}
        </code>
        {` of the brand.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Responsive"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBrandReactDocs';
Component.pageData = pageData;

export default Component;
