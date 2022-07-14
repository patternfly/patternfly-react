import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { PropertiesSidePanel, PropertyItem } from '@patternfly/react-catalog-view-extension';
import OkIcon from '@patternfly/react-icons/dist/esm/icons/ok-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import GlobeIcon from '@patternfly/react-icons/dist/esm/icons/globe-icon';
import '../../../../../react-catalog-view-extension/src/components/PropertiesSidePanel/examples/./propertiesSidePanel.css';
const pageData = {
  "id": "Catalog view properties side panel",
  "section": "extensions",
  "source": "react",
  "slug": "/extensions/catalog-view-properties-side-panel/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-catalog-view-extension/src/components/PropertiesSidePanel/examples/PropertiesSidePanel.md",
  "propComponents": [
    {
      "name": "PropertiesSidePanel",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children, should be PropertyItem items plus any action buttons, etc.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes for the Property Item",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "PropertyItem",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes for the Property Item",
          "defaultValue": "''"
        },
        {
          "name": "label",
          "type": "string | React.ReactNode",
          "description": "Label for the property",
          "required": true
        },
        {
          "name": "value",
          "type": "string | React.ReactNode",
          "description": "Value of the property",
          "defaultValue": "null"
        }
      ]
    }
  ],
  "examples": [
    "Properties side panel with property items"
  ]
};
pageData.liveContext = {
  PropertiesSidePanel,
  PropertyItem,
  OkIcon,
  ExternalLinkAltIcon,
  GlobeIcon
};
pageData.examples = {
  'Properties side panel with property items': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { PropertiesSidePanel, PropertyItem } from '@patternfly/react-catalog-view-extension';\nimport OkIcon from '@patternfly/react-icons/dist/esm/icons/ok-icon';\nimport ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';\nimport GlobeIcon from '@patternfly/react-icons/dist/esm/icons/globe-icon';\n\nconst PropertiesSidePanelWithPropertyItems = () => (\n  <div style={{ display: 'inline-block', padding: '15px', border: '1px solid grey' }}>\n    <PropertiesSidePanel>\n      <PropertyItem label=\"Operator Version\" value=\"0.9.8 (latest)\" />\n      <PropertyItem\n        label=\"Certified Level\"\n        value={\n          <span>\n            <OkIcon style={{color: 'var(--pf-global--success-color--100)'}} /> Certified\n          </span>\n        }\n      />\n      <PropertyItem label=\"Provider\" value=\"Red Hat, Inc\" />\n      <PropertyItem label=\"Health Index\" value=\"A\" />\n      <PropertyItem\n        label=\"Repository\"\n        value={\n          <a href=\"https://quay.io/repository/redhat/prometheus-operator\">\n            https://quay.io/repository/redhat/prometheus-operator\n          </a>\n        }\n      />\n      <PropertyItem\n        label=\"Container Image\"\n        value={\n          <a href=\"#\">\n            0.22.2 <ExternalLinkAltIcon />\n          </a>\n        }\n      />\n      <PropertyItem\n        label=\"Created At\"\n        value={\n          <span>\n            <GlobeIcon /> Aug 23, 1:58pm\n          </span>\n        }\n      />\n      <PropertyItem label=\"Support\" value={<a href=\"#\">Red Hat</a>} />\n    </PropertiesSidePanel>\n  </div>\n)","title":"Properties side panel with property items","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: PropertiesSidePanel lives in its own package at `}
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
    {React.createElement(pageData.examples["Properties side panel with property items"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsCatalogViewPropertiesSidePanelReactDocs';
Component.pageData = pageData;

export default Component;
