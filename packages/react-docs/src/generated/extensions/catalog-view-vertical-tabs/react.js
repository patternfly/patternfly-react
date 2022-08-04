import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { VerticalTabs, VerticalTabsTab } from '@patternfly/react-catalog-view-extension';
import '../../../../../react-catalog-view-extension/src/components/VerticalTabs/examples/./verticalTab.css';
const pageData = {
  "id": "Catalog view vertical tabs",
  "section": "extensions",
  "source": "react",
  "slug": "/extensions/catalog-view-vertical-tabs/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-catalog-view-extension/src/components/VerticalTabs/examples/VerticalTabs.md",
  "propComponents": [
    {
      "name": "VerticalTabs",
      "description": "",
      "props": [
        {
          "name": "activeTab",
          "type": "boolean",
          "description": "Flag if a direct child is active (only used in restrictTabs mode)",
          "defaultValue": "false"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children nodes",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes",
          "defaultValue": "''"
        },
        {
          "name": "restrictTabs",
          "type": "boolean",
          "description": "Flag to restrict shown tabs to active tabs, their parents, their siblings, and direct children",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "VerticalTabsTab",
      "description": "",
      "props": [
        {
          "name": "active",
          "type": "boolean",
          "description": "Flag if this is the active tab",
          "defaultValue": "false"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Child tab nodes (VerticalTabsTab's)",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional css classes",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Sets the base component to render. defaults to a"
        },
        {
          "name": "hasActiveDescendant",
          "type": "boolean",
          "description": "Flag if a descendant tab is active (used only in restrictTabs mode)",
          "defaultValue": "false"
        },
        {
          "name": "href",
          "type": "string",
          "description": "HREF location"
        },
        {
          "name": "onActivate",
          "type": "() => void",
          "description": "Callback function when the tab is activated",
          "defaultValue": "null"
        },
        {
          "name": "shown",
          "type": "boolean",
          "description": "Flag to force show the tab (if parent tab is shown, used only in restrictTabs mode)",
          "defaultValue": "false"
        },
        {
          "name": "title",
          "type": "string | React.ReactNode",
          "description": "Title for the tab",
          "defaultValue": "null"
        },
        {
          "name": "wrapStyle",
          "type": "'wrap' | 'truncate' | 'nowrap'",
          "description": "Title wrap style",
          "defaultValue": "'wrap'"
        }
      ]
    }
  ],
  "examples": [
    "Basic"
  ]
};
pageData.liveContext = {
  VerticalTabs,
  VerticalTabsTab
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { VerticalTabs, VerticalTabsTab } from '@patternfly/react-catalog-view-extension';\n\nclass MockVerticalTabsExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { activeTabId: 'all' };\n    this.onActivateTab = id => {\n      this.setState({ activeTabId: id });\n    };\n  }\n\n  render() {\n    const { restrictTabs, wrapStyle } = this.props;\n    const { activeTabId } = this.state;\n\n    const topLevelIds = ['all', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];\n\n    const renderTab = (id, title, children, props) => {\n      const childIds = React.Children.map(children, child => child.props.id);\n\n      return (\n        <VerticalTabsTab\n          id={id}\n          key={id}\n          title={title}\n          wrapStyle={wrapStyle}\n          onActivate={() => this.onActivateTab(id)}\n          active={activeTabId === id}\n          hasActiveDescendant={activeTabId.startsWith(id)}\n          {...props}\n        >\n          {children && (\n            <VerticalTabs restrictTabs={restrictTabs} activeTab={childIds.includes(activeTabId)}>\n              {children}\n            </VerticalTabs>\n          )}\n        </VerticalTabsTab>\n      );\n    };\n\n    return (\n      <VerticalTabs id=\"vertical-tabs\" restrictTabs={restrictTabs} activeTab={topLevelIds.includes(activeTabId)}>\n        {renderTab('all', 'All', null, { shown: true })}\n        {renderTab('one', 'Tab One', [\n          renderTab('one-one', 'Tab One-One', [\n            renderTab('one-one-one', 'About Modal', null, {href: \"../components/about-modal\"}),\n            renderTab('one-one-two', 'Accordion', null, {href: \"../components/accordion\"}),\n            renderTab('one-one-three', 'Redhat', null, {href: \"http://www.redhat.com\"})\n          ]),\n          renderTab('one-two', 'Tab One-Two', [\n            renderTab('one-two-one', 'Tab One-Two-One'),\n            renderTab('one-two-two', 'Tab One-Two-Two'),\n            renderTab('one-two-three', 'Tab One-Two-Three')\n          ]),\n          renderTab('one-three', 'Tab One-Thee')\n        ])}\n        {renderTab('two', 'Tab Two', [\n          renderTab('two-one', 'Tab Two-One'),\n          renderTab('two-two', 'Tab Two-Two'),\n          renderTab('two-three', 'Tab Two-Three')\n        ])}\n        {renderTab('three', 'Tab Three - Donec id elit non mi porta gravida at eget metus')}\n        {renderTab('four', 'Tab Four')}\n        {renderTab('five', 'Tab Five')}\n        {renderTab('six', 'Tab Six')}\n        {renderTab('seven', 'Tab Seven')}\n      </VerticalTabs>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: Vertical tabs lives in its own package at `}
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
  </React.Fragment>
);
Component.displayName = 'ExtensionsCatalogViewVerticalTabsReactDocs';
Component.pageData = pageData;

export default Component;
