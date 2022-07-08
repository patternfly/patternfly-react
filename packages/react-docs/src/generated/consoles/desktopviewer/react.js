import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { DesktopViewer } from '@patternfly/react-console';
const pageData = {
  "id": "DesktopViewer",
  "section": "consoles",
  "source": "react",
  "slug": "/consoles/desktopviewer/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-console/src/components/DesktopViewer/examples/DesktopViewer.md",
  "propComponents": [
    {
      "name": "DesktopViewer",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Custom content of more-info section",
          "defaultValue": "null"
        },
        {
          "name": "rdp",
          "type": "ConsoleDetailPropType",
          "description": "Connection details for RDP",
          "defaultValue": "null"
        },
        {
          "name": "spice",
          "type": "ConsoleDetailPropType",
          "description": "Connection details for Spice",
          "defaultValue": "null"
        },
        {
          "name": "textAddress",
          "type": "string",
          "description": ""
        },
        {
          "name": "textConnectWith",
          "type": "string",
          "description": ""
        },
        {
          "name": "textConnectWithRDP",
          "type": "string",
          "description": ""
        },
        {
          "name": "textConnectWithRemoteViewer",
          "type": "string",
          "description": ""
        },
        {
          "name": "textManualConnection",
          "type": "string",
          "description": ""
        },
        {
          "name": "textMoreInfo",
          "type": "string",
          "description": "Text that appears in the toggle"
        },
        {
          "name": "textMoreInfoContent",
          "type": "string | React.ReactNode",
          "description": "The information content appearing above the description list for guidelines to install virt-viewer"
        },
        {
          "name": "textMoreRDPInfo",
          "type": "string",
          "description": "Text that appears in the toggle"
        },
        {
          "name": "textMoreRDPInfoContent",
          "type": "string | React.ReactNode",
          "description": "The information content appearing above the description list for guidelines to install virt-viewer"
        },
        {
          "name": "textNoProtocol",
          "type": "string",
          "description": ""
        },
        {
          "name": "textRdpAddress",
          "type": "string",
          "description": ""
        },
        {
          "name": "textRDPPort",
          "type": "string",
          "description": ""
        },
        {
          "name": "textSpiceAddress",
          "type": "string",
          "description": ""
        },
        {
          "name": "textSpicePort",
          "type": "string",
          "description": ""
        },
        {
          "name": "textSpiceTlsPort",
          "type": "string",
          "description": ""
        },
        {
          "name": "textVNCAddress",
          "type": "string",
          "description": ""
        },
        {
          "name": "textVNCPort",
          "type": "string",
          "description": ""
        },
        {
          "name": "textVNCTlsPort",
          "type": "string",
          "description": ""
        },
        {
          "name": "vnc",
          "type": "ConsoleDetailPropType",
          "description": "Connection details for VNC",
          "defaultValue": "null"
        }
      ]
    }
  ],
  "beta": true,
  "examples": [
    "Basic Usage"
  ]
};
pageData.liveContext = {
  DesktopViewer
};
pageData.examples = {
  'Basic Usage': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DesktopViewer } from '@patternfly/react-console';\n\nconst BasicUsage = () => <DesktopViewer spice={{ address: \"127.0.0.1\", port: \"5900\" }} vnc={{ address: \"127.0.0.1\", port: \"5901\" }} />","title":"Basic Usage","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"note","size":"h3","className":"ws-title ws-h3"}}>
      {`Note`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`DesktopViewer lives in its own package at `}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-console"}}>
        <code {...{"className":"ws-code"}}>
          {`@patternfly/react-console`}
        </code>
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic Usage"])}
  </React.Fragment>
);
Component.displayName = 'ConsolesDesktopviewerReactDocs';
Component.pageData = pageData;

export default Component;
