import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from '../../../../../react-catalog-view-extension/src/components/CatalogItemHeader/examples/./pfLogo2.svg';
import '../../../../../react-catalog-view-extension/src/components/CatalogItemHeader/examples/./catalogItemHeader.css';
const pageData = {
  "id": "Catalog view item header",
  "section": "extensions",
  "source": "react",
  "slug": "/extensions/catalog-view-item-header/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-catalog-view-extension/src/components/CatalogItemHeader/examples/CatalogItemHeader.md",
  "propComponents": [
    {
      "name": "CatalogItemHeader",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes",
          "defaultValue": "''"
        },
        {
          "name": "iconClass",
          "type": "string",
          "description": "Class for the image when an icon is to be used (exclusive from iconImg)",
          "defaultValue": "null"
        },
        {
          "name": "iconImg",
          "type": "string",
          "description": "URL of an image for the item's icon",
          "defaultValue": "null"
        },
        {
          "name": "title",
          "type": "string | React.ReactNode",
          "description": "Tile for the catalog item",
          "required": true
        },
        {
          "name": "vendor",
          "type": "string | React.ReactNode",
          "description": "Vendor for the catalog item",
          "defaultValue": "null"
        }
      ]
    }
  ],
  "examples": [
    "Basic",
    "With vendor description"
  ]
};
pageData.liveContext = {
  CatalogItemHeader,
  pfLogo2
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';\nimport pfLogo2 from './examples/pfLogo2.svg';\n\nconst Basic = () => (\n  <CatalogItemHeader\n    iconImg={pfLogo2}\n    title=\"PatternFly\"\n    />\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With vendor description': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';\nimport pfLogo2 from './examples/pfLogo2.svg';\n\nconst WithVendorDescription = () => (\n  <CatalogItemHeader\n    iconImg={pfLogo2}\n    title=\"Patternfly-React\"\n    vendor={\n      <span>\n        provided by <a href=\"http://redhat.com\">Red Hat</a>\n      </span>\n    }\n  />\n)","title":"With vendor description","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: Catalog item header lives in its own package at `}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-catalog-view-extension"}}>
        <code {...{"className":"ws-code"}}>
          {`@patternfly/react-catalog-view-extension`}
        </code>
      </PatternflyThemeLink>
      {`!`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With vendor description"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsCatalogViewItemHeaderReactDocs';
Component.pageData = pageData;

export default Component;
