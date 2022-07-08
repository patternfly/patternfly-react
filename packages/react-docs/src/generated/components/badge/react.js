import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Badge",
  "section": "components",
  "source": "react",
  "slug": "/components/badge/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Badge/examples/Badge.md",
  "propComponents": [
    {
      "name": "Badge",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Badge",
          "defaultValue": "''"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Badge",
          "defaultValue": "''"
        },
        {
          "name": "isRead",
          "type": "boolean",
          "description": "Adds styling to the badge to indicate it has been read",
          "defaultValue": "false"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-badge"
  ],
  "examples": [
    "Read",
    "Unread"
  ]
};
pageData.examples = {
  'Read': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Badge } from '@patternfly/react-core';\n\nexport const BadgeRead: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Badge key={1} isRead>\n      7\n    </Badge>{' '}\n    <Badge key={2} isRead>\n      24\n    </Badge>{' '}\n    <Badge key={3} isRead>\n      240\n    </Badge>{' '}\n    <Badge key={4} isRead>\n      999+\n    </Badge>\n  </React.Fragment>\n);\n","title":"Read","lang":"ts"}}>
      
    </Example>,
  'Unread': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Badge } from '@patternfly/react-core';\n\nexport const BadgeUnread: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Badge key={1}>7</Badge> <Badge key={2}>24</Badge> <Badge key={3}>240</Badge> <Badge key={4}>999+</Badge>\n  </React.Fragment>\n);\n","title":"Unread","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Read"])}
    {React.createElement(pageData.examples["Unread"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBadgeReactDocs';
Component.pageData = pageData;

export default Component;
