import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import '../../../../../react-core/src/components/NotificationBadge/examples/./notificationBadge.css';
const pageData = {
  "id": "Notification badge",
  "section": "components",
  "source": "react",
  "slug": "/components/notification-badge/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/NotificationBadge/examples/NotificationBadge.md",
  "propComponents": [
    {
      "name": "NotificationBadge",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the notification badge."
        },
        {
          "name": "attentionIcon",
          "type": "React.ReactNode",
          "description": "Icon to display for attention variant",
          "defaultValue": "<AttentionBellIcon />"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the notification badge"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the notification badge"
        },
        {
          "name": "count",
          "type": "number",
          "description": "A number displayed in the badge alongside the icon",
          "defaultValue": "0"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon do display in notification badge",
          "defaultValue": "<BellIcon />"
        },
        {
          "name": "isRead",
          "type": "boolean",
          "description": "Use the variant prop instead - Adds styling to the notification badge to indicate it has been read",
          "deprecated": true
        },
        {
          "name": "variant",
          "type": "NotificationBadgeVariant | 'read' | 'unread' | 'attention'",
          "description": "Determines the variant of the notification badge",
          "defaultValue": "isRead ? 'read' : 'unread'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-notification-badge"
  ],
  "examples": [
    "Basic",
    "With count"
  ]
};
pageData.liveContext = {
  BellIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NotificationBadge } from '@patternfly/react-core';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\n\nclass SimpleNotificationBadge extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      unreadVariant: 'unread',\n      attentionVariant: 'attention'\n    };\n    this.onFirstClick = () => {\n      this.setState({\n        unreadVariant: 'read'\n      });\n    };\n    this.onSecondClick = () => {\n      this.setState({\n        attentionVariant: 'read'\n      });\n    };\n  }\n\n  render() {\n    const { unreadVariant, attentionVariant } = this.state;\n    return (\n      <div className=\"pf-t-dark\">\n        <NotificationBadge variant={unreadVariant} onClick={this.onFirstClick} aria-label=\"First notifications\" />\n        <NotificationBadge variant={attentionVariant} onClick={this.onSecondClick} aria-label=\"Second notifications\" />\n      </div>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With count': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NotificationBadge } from '@patternfly/react-core';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\n\nclass NotificationBadgeWithCount extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      firstVariant: 'unread',\n      firstCount: 30,\n      secondVariant: 'attention',\n      secondCount: 30\n    };\n    this.onFirstClick = () => {\n      this.setState({\n        firstVariant: 'read',\n      });\n    };\n    this.onSecondClick = () => {\n      this.setState({\n        secondVariant: 'read'\n      });\n    };\n  }\n\n  render() {\n    const { firstVariant, firstCount, secondVariant, secondCount } = this.state;\n    return (\n      <div className=\"pf-t-dark\">\n        <NotificationBadge variant={firstVariant} onClick={this.onFirstClick} aria-label=\"First notifications\" count={firstCount} />\n        <NotificationBadge variant={secondVariant} onClick={this.onSecondClick} aria-label=\"Second notifications\" count={secondCount} />\n      </div>\n    );\n  }\n}","title":"With count","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    <AutoLinkHeader {...{"id":"examples-0","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["With count"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsNotificationBadgeReactDocs';
Component.pageData = pageData;

export default Component;
