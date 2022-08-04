import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';
import pfLogo2 from '../../../../../react-catalog-view-extension/src/components/CatalogTile/examples/./pfLogo2.svg';
import '../../../../../react-catalog-view-extension/src/components/CatalogTile/examples/./catalogTile.css';
const pageData = {
  "id": "Catalog view tile",
  "section": "extensions",
  "source": "react",
  "slug": "/extensions/catalog-view-tile/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-catalog-view-extension/src/components/CatalogTile/examples/CatalogTile.md",
  "propComponents": [
    {
      "name": "CatalogTile",
      "description": "",
      "props": [
        {
          "name": "badges",
          "type": "React.ReactNode[]",
          "description": "Array of badges",
          "defaultValue": "[]"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Body content that isn't truncated",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes",
          "defaultValue": "''"
        },
        {
          "name": "description",
          "type": "string | React.ReactNode",
          "description": "Description of the catalog item",
          "defaultValue": "null"
        },
        {
          "name": "featured",
          "type": "boolean",
          "description": "Flag if the tile is 'featured'",
          "defaultValue": "false"
        },
        {
          "name": "footer",
          "type": "string | React.ReactNode",
          "description": "Footer for the tile",
          "defaultValue": "null"
        },
        {
          "name": "href",
          "type": "string",
          "description": "href for the tile if used as a link",
          "defaultValue": "null"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Alternatively provided JSX for the icon",
          "defaultValue": "null"
        },
        {
          "name": "iconAlt",
          "type": "string",
          "description": "Alternate text for the item's icon",
          "defaultValue": "''"
        },
        {
          "name": "iconClass",
          "type": "string",
          "description": "Class for the image when an icon is to be used (exclusive from iconImg)",
          "defaultValue": "''"
        },
        {
          "name": "iconImg",
          "type": "string",
          "description": "URL of an image for the item's icon",
          "defaultValue": "null"
        },
        {
          "name": "id",
          "type": "any",
          "description": "Id",
          "defaultValue": "null"
        },
        {
          "name": "onClick",
          "type": "(event: React.SyntheticEvent<HTMLElement>) => void",
          "description": "Callback for a click on the tile",
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
    "Basic featured tile",
    "Basic with footer",
    "Link variant",
    "With multiple icon badges",
    "With text badge",
    "With children instead of description"
  ]
};
pageData.liveContext = {
  CatalogTile,
  CatalogTileBadge,
  CogIcon,
  OutlinedCheckCircleIcon,
  pfLogo2
};
pageData.examples = {
  'Basic featured tile': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\nimport pfLogo2 from './pfLogo2.svg';\nimport '../../../../dist/css/react-catalog-view-extension.css';\n\nconst BasicFeaturedTile = () => (\n  <CatalogTile\n    id=\"simple\"\n    featured\n    iconImg={pfLogo2}\n    iconAlt=\"PatternFly logo\"\n    badges={[\n      <CatalogTileBadge title=\"Certified\">\n        <CogIcon />\n      </CatalogTileBadge>\n    ]}\n    title=\"Patternfly-React\"\n    vendor=\"provided by Red Hat\"\n    description={\n      'This is a very, very long description that should be truncated after three lines. ' +\n      'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +\n      'This has changed from PatternFly 3.'\n    }\n  />\n)","title":"Basic featured tile","lang":"js"}}>
      
    </Example>,
  'Basic with footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\nimport OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';\nimport pfLogo2 from './pfLogo2.svg';\n\nconst BasicWithFooter = () => (\n  <CatalogTile\n    id=\"simple-footer\"\n    iconImg={pfLogo2}\n    iconAlt=\"PatternFly logo\"\n    badges={[\n      <CatalogTileBadge title=\"Certified\">\n        <CogIcon />\n      </CatalogTileBadge>\n    ]}\n    title=\"Patternfly-React\"\n    vendor=\"provided by Red Hat\"\n    description={\n      'This is a very, very long description that should be truncated after one line. ' +\n      'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +\n      'This has changed from PatternFly 3.'\n    }\n    footer={\n      <span>\n        <OutlinedCheckCircleIcon style={{color: 'var(--pf-global--success-color--100)'}} /> Enabled\n      </span>\n    }\n  />\n)","title":"Basic with footer","lang":"js"}}>
      
    </Example>,
  'Link variant': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\nimport pfLogo2 from './pfLogo2.svg';\n\nconst LinkVariant = () => (\n  <CatalogTile\n    id=\"link-variant\"\n    iconImg={pfLogo2}\n    iconAlt=\"PatternFly logo\"\n    badges={[\n      <CatalogTileBadge title=\"Certified\">\n        <CogIcon />\n      </CatalogTileBadge>\n    ]}\n    href=\"http://patternfly.org/v4\"\n    title=\"Patternfly-React\"\n    vendor=\"provided by Red Hat\"\n    description={\n      'This is a very, very long description that should be truncated after three lines. ' +\n      'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +\n      'This has changed from PatternFly 3.'\n    }\n  />\n)","title":"Link variant","lang":"js"}}>
      
    </Example>,
  'With multiple icon badges': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\nimport OutlinedCheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-check-circle-icon';\nimport pfLogo2 from './pfLogo2.svg';\n\nconst WithMultipleIconBadges = () => (\n  <CatalogTile\n    id=\"multiIcon\"\n    iconImg={pfLogo2}\n    iconAlt=\"PatternFly logo\"\n    badges={[\n      <CatalogTileBadge title=\"Certified\">\n        <CogIcon />\n      </CatalogTileBadge>,\n      <CatalogTileBadge title=\"USDA Approved\">\n        <OutlinedCheckCircleIcon style={{color: 'var(--pf-global--success-color--100)'}} />\n      </CatalogTileBadge>\n    ]}\n    title=\"Patternfly-React\"\n    vendor={<React.Fragment>provided by <a href=\"http://redhat.com\">Red Hat</a></React.Fragment>}\n    description={\n      'This is a very, very long description that should be truncated after three lines. ' +\n      'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +\n      'This has changed from PatternFly 3.'\n    }\n  />\n)","title":"With multiple icon badges","lang":"js"}}>
      
    </Example>,
  'With text badge': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogTile } from '@patternfly/react-catalog-view-extension';\nimport pfLogo2 from './pfLogo2.svg';\n\nconst WithTextBadge = () => (\n  <CatalogTile\n    id=\"text-badge\"\n    iconImg={pfLogo2}\n    iconAlt=\"PatternFly logo\"\n    badges={[\n      'Community'\n    ]}\n    title=\"Patternfly-React\"\n    vendor={<React.Fragment>provided by <a href=\"http://redhat.com\">Red Hat</a></React.Fragment>}\n    description={\n      'This is a very, very long description that should be truncated after three lines. ' +\n      'Three lines is the default for cards without a footer. Cards with a footer are truncated after one line. Truncation function use is deprecated; please pass in a maxDescriptionLength of -1 to override it. ' +\n      'This has changed from PatternFly 3.'\n    }\n  />\n)","title":"With text badge","lang":"js"}}>
      
    </Example>,
  'With children instead of description': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CatalogTile, CatalogTileBadge } from '@patternfly/react-catalog-view-extension';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\nimport pfLogo2 from './pfLogo2.svg';\n\nconst WithChildrenInsteadOfDescription = () => (\n  <CatalogTile\n    id=\"simple\"\n    featured\n    iconImg={pfLogo2}\n    iconAlt=\"PatternFly logo\"\n    badges={[\n      <CatalogTileBadge title=\"Certified\">\n        <CogIcon />\n      </CatalogTileBadge>\n    ]}\n    title=\"Patternfly-React\"\n    vendor=\"provided by Red Hat\"\n  >\n    This is a very, very long stetch of child text that should be not be truncated\n    and illustrates how Flyers can add longer content to PatternFly 4 catalog tiles\n    using the children prop. Cards usually truncate descriptions at three lines.\n    Cards with a footer are truncated after one line. This has changed from PatternFly 3.\n    Children can be of any length.\n  </CatalogTile>\n)","title":"With children instead of description","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: Catalog tile lives in its own package at `}
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
    {React.createElement(pageData.examples["Basic featured tile"])}
    {React.createElement(pageData.examples["Basic with footer"])}
    {React.createElement(pageData.examples["Link variant"])}
    {React.createElement(pageData.examples["With multiple icon badges"])}
    {React.createElement(pageData.examples["With text badge"])}
    {React.createElement(pageData.examples["With children instead of description"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsCatalogViewTileReactDocs';
Component.pageData = pageData;

export default Component;
