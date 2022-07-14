import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { AccessConsoles, SerialConsole, VncConsole, DesktopViewer } from '@patternfly/react-console';
import { SerialConsoleCustom } from '../../../../../react-console/src/components/AccessConsoles/examples/./SerialConsoleCustom.jsx';
const pageData = {
  "id": "Access consoles",
  "section": "extensions",
  "source": "react",
  "slug": "/extensions/access-consoles/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-console/src/components/AccessConsoles/examples/AccessConsoles.md",
  "propComponents": [
    {
      "name": "AccessConsoles",
      "description": "",
      "props": [
        {
          "name": "preselectedType",
          "type": "No type info",
          "defaultValue": "null"
        },
        {
          "name": "textDesktopViewerConsole",
          "type": "No type info",
          "defaultValue": "'Desktop viewer'"
        },
        {
          "name": "textSelectConsoleType",
          "type": "No type info",
          "defaultValue": "'Select console type'"
        },
        {
          "name": "textSerialConsole",
          "type": "No type info",
          "defaultValue": "'Serial console'"
        },
        {
          "name": "textVncConsole",
          "type": "No type info",
          "defaultValue": "'VNC console'"
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
  AccessConsoles,
  SerialConsole,
  VncConsole,
  DesktopViewer,
  SerialConsoleCustom
};
pageData.examples = {
  'Basic Usage': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { AccessConsoles, SerialConsole, VncConsole, DesktopViewer } from '@patternfly/react-console';\nimport { SerialConsoleCustom } from './SerialConsoleCustom.jsx';\n\nAccessConsolesVariants = () => {\n  const [status, setStatus] = React.useState('disconnected');\n  const setConnected = React.useRef(debounce(() => setStatus('connected'), 3000)).current;\n  const ref = React.createRef();\n\n  return (\n    <AccessConsoles preselectedType=\"SerialConsole\">\n      <VncConsole host=\"localhost\" port=\"9090\" encrypt shared />\n      <SerialConsole\n        onConnect={() => {\n          setStatus('loading');\n          setConnected();\n        }}\n        status={status}\n        onDisconnect={() => setStatus('disconnected')}\n        onData={data => {\n          ref.current.onDataReceived(data);\n        }}\n        ref={ref}\n      />\n      <SerialConsoleCustom type='Serial Console pty2' />\n      <DesktopViewer spice={{ address: '127.0.0.1', port: '5900' }} vnc={{ address: '127.0.0.1', port: '5901' }} />\n    </AccessConsoles>\n  );\n};","title":"Basic Usage","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"note","size":"h3","className":"ws-title ws-h3"}}>
      {`Note`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`AccessConsoles lives in its own package at `}
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
Component.displayName = 'ExtensionsAccessConsolesReactDocs';
Component.pageData = pageData;

export default Component;
