import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/components/Nav/examples/./nav.css';
const pageData = {
  "id": "Navigation",
  "section": "components",
  "source": "react",
  "slug": "/components/navigation/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Nav/examples/Nav.md",
  "propComponents": [
    {
      "name": "Nav",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessibility label"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of the nav"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the container"
        },
        {
          "name": "onSelect",
          "type": "(selectedItem: {\n  groupId: number | string;\n  itemId: number | string;\n  to: string;\n  event: React.FormEvent<HTMLInputElement>;\n}) => void",
          "description": "Callback for updating when item selection changes",
          "defaultValue": "() => undefined"
        },
        {
          "name": "onToggle",
          "type": "(toggledItem: {\n  groupId: number | string;\n  isExpanded: boolean;\n  event: React.MouseEvent<HTMLButtonElement>;\n}) => void",
          "description": "Callback for when a list is expanded or collapsed",
          "defaultValue": "() => undefined"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "theme",
          "type": "'dark' | 'light'",
          "description": "Indicates which theme color to use",
          "defaultValue": "'dark'"
        },
        {
          "name": "variant",
          "type": "'default' | 'horizontal' | 'tertiary' | 'horizontal-subnav'",
          "description": "For horizontal navs"
        }
      ]
    },
    {
      "name": "NavList",
      "description": "",
      "props": [
        {
          "name": "ariaLeftScroll",
          "type": "string",
          "description": "Aria-label for the left scroll button",
          "defaultValue": "'Scroll left'"
        },
        {
          "name": "ariaRightScroll",
          "type": "string",
          "description": "Aria-label for the right scroll button",
          "defaultValue": "'Scroll right'"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children nodes"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the list"
        }
      ]
    },
    {
      "name": "NavGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of the group",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the container",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Identifier to use for the section aria label",
          "defaultValue": "getUniqueId()"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Title shown for the group"
        }
      ]
    },
    {
      "name": "NavItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the nav item."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the nav item"
        },
        {
          "name": "component",
          "type": "React.ReactNode",
          "description": "Component used to render NavItems if  React.isValidElement(children) is false",
          "defaultValue": "'a'"
        },
        {
          "name": "flyout",
          "type": "React.ReactElement",
          "description": "Flyout of a nav item. This should be a Menu component."
        },
        {
          "name": "groupId",
          "type": "string | number | null",
          "description": "Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component",
          "defaultValue": "null"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Flag indicating whether the item is active",
          "defaultValue": "false"
        },
        {
          "name": "itemId",
          "type": "string | number | null",
          "description": "Item identifier, will be returned with the onToggle and onSelect callback passed to the Nav component",
          "defaultValue": "null"
        },
        {
          "name": "onClick",
          "type": "NavSelectClickHandler",
          "description": "Callback for item click",
          "defaultValue": "null"
        },
        {
          "name": "onShowFlyout",
          "type": "() => void",
          "description": "Callback when flyout is opened or closed"
        },
        {
          "name": "preventDefault",
          "type": "boolean",
          "description": "If true prevents the default anchor link action to occur. Set to true if you want to handle navigation yourself.",
          "defaultValue": "false"
        },
        {
          "name": "styleChildren",
          "type": "boolean",
          "description": "Whether to set className on children when React.isValidElement(children)",
          "defaultValue": "true"
        },
        {
          "name": "to",
          "type": "string",
          "description": "Target navigation link"
        }
      ]
    },
    {
      "name": "NavItemSeparator",
      "description": "",
      "props": [
        {
          "name": "component",
          "type": "No type info",
          "defaultValue": "'li'"
        }
      ]
    },
    {
      "name": "NavExpandable",
      "description": "",
      "props": [
        {
          "name": "buttonProps",
          "type": "any",
          "description": "Additional props added to the NavExpandable <button>"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of the expandable list",
          "defaultValue": "''"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the container",
          "defaultValue": "''"
        },
        {
          "name": "groupId",
          "type": "string | number",
          "description": "Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component",
          "defaultValue": "null"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Identifier to use for the section aria label",
          "defaultValue": "''"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "If true makes the expandable list title active",
          "defaultValue": "false"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Boolean to programatically expand or collapse section",
          "defaultValue": "false"
        },
        {
          "name": "onExpand",
          "type": "(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, val: boolean) => void",
          "description": "allow consumer to optionally override this callback and manage expand state externally. if passed will not call Nav's onToggle."
        },
        {
          "name": "srText",
          "type": "string",
          "description": "If defined, screen readers will read this text instead of the list title",
          "defaultValue": "''"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Title shown for the expandable list",
          "required": true
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-nav"
  ],
  "examples": [
    "Default",
    "Grouped",
    "Expandable",
    "Expandable (w/subnavigation titles)",
    "Expandable third level",
    "Mixed",
    "Horizontal (only in PageHeader)",
    "Horizontal subnav",
    "Legacy tertiary",
    "Flyout",
    "Drilldown"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';\n\nclass NavDefaultList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = result => {\n      this.setState({\n        activeItem: result.itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Nav onSelect={this.onSelect}>\n        <NavList>\n          <NavItem id=\"default-link1\" to=\"#default-link1\" itemId={0} isActive={activeItem === 0}>\n            Link 1\n          </NavItem>\n          <NavItem id=\"default-link2\" to=\"#default-link2\" itemId={1} isActive={activeItem === 1}>\n            Link 2\n          </NavItem>\n          <NavItem id=\"default-link3\" to=\"#default-link3\" itemId={2} isActive={activeItem === 2}>\n            Link 3\n          </NavItem>\n          <NavItem id=\"default-link4\" to=\"#default-link4\" itemId={3} isActive={activeItem === 3}>\n            Link 4\n          </NavItem>\n        </NavList>\n      </Nav>\n    );\n  }\n}","title":"Default","lang":"js"}}>
      
    </Example>,
  'Grouped': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';\n\nclass NavGroupedList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 'grp-1_itm-1'\n    };\n    this.onSelect = result => {\n      this.setState({\n        activeItem: result.itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Nav onSelect={this.onSelect}>\n        <NavGroup title=\"Section title 1\">\n          <NavItem preventDefault to=\"#grouped-1\" itemId=\"grp-1_itm-1\" isActive={activeItem === 'grp-1_itm-1'}>\n            Link 1\n          </NavItem>\n          <NavItem preventDefault to=\"#grouped-2\" itemId=\"grp-1_itm-2\" isActive={activeItem === 'grp-1_itm-2'}>\n            Link 2\n          </NavItem>\n          <NavItem preventDefault to=\"#grouped-3\" itemId=\"grp-1_itm-3\" isActive={activeItem === 'grp-1_itm-3'}>\n            Link 3\n          </NavItem>\n        </NavGroup>\n        <NavGroup title=\"Section title 2\">\n          <NavItem preventDefault to=\"#grouped-4\" itemId=\"grp-2_itm-1\" isActive={activeItem === 'grp-2_itm-1'}>\n            Link 1\n          </NavItem>\n          <NavItem preventDefault to=\"#grouped-5\" itemId=\"grp-2_itm-2\" isActive={activeItem === 'grp-2_itm-2'}>\n            Link 2\n          </NavItem>\n          <NavItem preventDefault to=\"#grouped-6\" itemId=\"grp-2_itm-3\" isActive={activeItem === 'grp-2_itm-3'}>\n            Link 3\n          </NavItem>\n        </NavGroup>\n      </Nav>\n    );\n  }\n}","title":"Grouped","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Note: to keep nav groups accessible an `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-label`}
        </code>
        {` should be supplied if the `}
        
        <code {...{"className":"ws-code"}}>
          {`title`}
        </code>
        {` prop is not passed.`}
      </p>
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';\n\nclass NavExpandableList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeGroup: 'grp-1',\n      activeItem: 'grp-1_itm-1'\n    };\n    this.onSelect = result => {\n      this.setState({\n        activeGroup: result.groupId,\n        activeItem: result.itemId\n      });\n    };\n    this.onToggle = result => {\n      // eslint-disable-next-line no-console\n      console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);\n    };\n    this.handleItemOnclick = (event, itemId, groupId) => {\n      // eslint-disable-next-line no-console\n      console.log(`my own click handler on ${itemId}`);\n    };\n  }\n\n  render() {\n    const { activeGroup, activeItem } = this.state;\n    return (\n      <Nav onSelect={this.onSelect} onToggle={this.onToggle}>\n        <NavList>\n          <NavExpandable title=\"Link 1\" groupId=\"grp-1\" isActive={activeGroup === 'grp-1'} isExpanded>\n            <NavItem\n              preventDefault\n              to=\"#expandable-1\"\n              groupId=\"grp-1\"\n              itemId=\"grp-1_itm-1\"\n              isActive={activeItem === 'grp-1_itm-1'}\n            >\n              Subnav Link 1\n            </NavItem>\n            <NavItemSeparator />\n            <NavItem preventDefault groupId=\"grp-1\" itemId=\"grp-1_itm-2\" isActive={activeItem === 'grp-1_itm-2'}>\n              Subnav Link 2\n            </NavItem>\n            <NavItem to=\"#expandable-3\" groupId=\"grp-1\" itemId=\"grp-1_itm-3\" isActive={activeItem === 'grp-1_itm-3'}>\n              Subnav Link 3\n            </NavItem>\n          </NavExpandable>\n          <NavExpandable title=\"Link 2\" groupId=\"grp-2\" isActive={activeGroup === 'grp-2'} isExpanded>\n            <NavItem\n              preventDefault\n              onClick={this.handleItemOnclick}\n              groupId=\"grp-2\"\n              itemId=\"own-item-handler\"\n              isActive={activeItem === 'own-item-handler'}\n            >\n              Custom onClick\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#expandable-4\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-1\"\n              isActive={activeItem === 'grp-2_itm-1'}\n            >\n              Subnav Link 1\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#expandable-5\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-2\"\n              isActive={activeItem === 'grp-2_itm-2'}\n            >\n              Subnav Link 2\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#expandable-6\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-3\"\n              isActive={activeItem === 'grp-2_itm-3'}\n            >\n              Subnav Link 3\n            </NavItem>\n          </NavExpandable>\n        </NavList>\n      </Nav>\n    );\n  }\n}","title":"Expandable","lang":"js"}}>
      
    </Example>,
  'Expandable (w/subnavigation titles)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';\n\nclass NavExpandableTitlesList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeGroup: 'grp-1',\n      activeItem: 'grp-1_itm-1'\n    };\n    this.onSelect = result => {\n      this.setState({\n        activeGroup: result.groupId,\n        activeItem: result.itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeGroup, activeItem } = this.state;\n    return (\n      <Nav onSelect={this.onSelect}>\n        <NavList>\n          <NavExpandable title=\"Link 1\" srText=\"SR Link\" groupId=\"grp-1\" isActive={activeGroup === 'grp-1'} isExpanded>\n            <NavItem\n              preventDefault\n              to=\"#sr-expandable-1\"\n              groupId=\"grp-1\"\n              itemId=\"grp-1_itm-1\"\n              isActive={activeItem === 'grp-1_itm-1'}\n            >\n              Subnav Link 1\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#sr-expandable-2\"\n              groupId=\"grp-1\"\n              itemId=\"grp-1_itm-2\"\n              isActive={activeItem === 'grp-1_itm-2'}\n            >\n              Subnav Link 2\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#sr-expandable-3\"\n              groupId=\"grp-1\"\n              itemId=\"grp-1_itm-3\"\n              isActive={activeItem === 'grp-1_itm-3'}\n            >\n              Subnav Link 3\n            </NavItem>\n          </NavExpandable>\n          <NavExpandable title=\"Link 2\" srText=\"SR Link 2\" groupId=\"grp-2\" isActive={activeGroup === 'grp-2'}>\n            <NavItem\n              preventDefault\n              to=\"#sr-expandable-4\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-1\"\n              isActive={activeItem === 'grp-2_itm-1'}\n            >\n              Subnav Link 1\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#sr-expandable-5\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-2\"\n              isActive={activeItem === 'grp-2_itm-2'}\n            >\n              Subnav Link 2\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#sr-expandable-6\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-3\"\n              isActive={activeItem === 'grp-2_itm-3'}\n            >\n              Subnav Link 3\n            </NavItem>\n          </NavExpandable>\n        </NavList>\n      </Nav>\n    );\n  }\n}","title":"Expandable (w/subnavigation titles)","lang":"js"}}>
      
    </Example>,
  'Expandable third level': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';\n\nNavExpandableThirdLevelList = () => {\n  const [activeGroup, setActiveGroup] = React.useState('grp-1');\n  const [activeItem, setActiveItem] = React.useState('grp-1_itm-1');\n\n  onSelect = result => {\n    setActiveGroup(result.groupId);\n    setActiveItem(result.itemId);\n  };\n\n  onToggle = result => {\n    // eslint-disable-next-line no-console\n    console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);\n  };\n\n  return (\n    <Nav onSelect={onSelect} onToggle={onToggle}>\n      <NavList>\n        <NavExpandable title=\"Link 1\" groupId=\"grp-1\" isActive={activeGroup === 'grp-1'} isExpanded>\n          <NavItem\n            preventDefault\n            to=\"#expandable-1\"\n            groupId=\"grp-1\"\n            itemId=\"grp-1_itm-1\"\n            isActive={activeItem === 'grp-1_itm-1'}\n          >\n            Subnav Link 1\n          </NavItem>\n          <NavItem\n            preventDefault\n            to=\"#expandable-2\"\n            groupId=\"grp-1\"\n            itemId=\"grp-1_itm-2\"\n            isActive={activeItem === 'grp-1_itm-2'}\n          >\n            Subnav Link 2\n          </NavItem>\n          <NavItem\n            preventDefault\n            to=\"#expandable-3\"\n            groupId=\"grp-1\"\n            itemId=\"grp-1_itm-3\"\n            isActive={activeItem === 'grp-1_itm-3'}\n          >\n            Subnav Link 3\n          </NavItem>\n        </NavExpandable>\n        <NavExpandable title=\"Link 2\" groupId=\"grp-2\" isActive={activeGroup === 'grp-2'} isExpanded>\n          <NavItem\n            preventDefault\n            to=\"#expandable-4\"\n            groupId=\"grp-2\"\n            itemId=\"grp-2_itm-1\"\n            isActive={activeItem === 'grp-2_itm-1'}\n          >\n            Subnav Link 1\n          </NavItem>\n          <NavExpandable title=\"Third Level\" groupId=\"grp-3\" isActive={activeGroup === 'grp-3'} isExpanded>\n            <NavItem\n              preventDefault\n              to=\"#expandable-6\"\n              groupId=\"grp-3\"\n              itemId=\"grp-3_itm-1\"\n              isActive={activeItem === 'grp-3_itm-1'}\n            >\n              Third Level Link 1\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#expandable-7\"\n              groupId=\"grp-3\"\n              itemId=\"grp-3_itm-2\"\n              isActive={activeItem === 'grp-3_itm-2'}\n            >\n              Third Level Link 2\n            </NavItem>\n          </NavExpandable>\n          <NavItem\n            preventDefault\n            to=\"#expandable-8\"\n            groupId=\"grp-2\"\n            itemId=\"grp-2_itm-2\"\n            isActive={activeItem === 'grp-2_itm-3'}\n          >\n            Subnav Link 3\n          </NavItem>\n        </NavExpandable>\n      </NavList>\n    </Nav>\n  );\n};","title":"Expandable third level","lang":"js"}}>
      
    </Example>,
  'Mixed': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup } from '@patternfly/react-core';\n\nclass NavMixedList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeGroup: '',\n      activeItem: 'itm-1'\n    };\n    this.onSelect = result => {\n      this.setState({\n        activeGroup: result.groupId,\n        activeItem: result.itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeGroup, activeItem } = this.state;\n    return (\n      <Nav onSelect={this.onSelect}>\n        <NavList>\n          <NavItem preventDefault to=\"#mixed-1\" itemId=\"itm-1\" isActive={activeItem === 'itm-1'}>\n            Link 1 (not expandable)\n          </NavItem>\n          <NavExpandable title=\"Link 2 - expandable\" groupId=\"grp-1\" isActive={activeGroup === 'grp-1'}>\n            <NavItem\n              preventDefault\n              to=\"#mixed-2\"\n              groupId=\"grp-1\"\n              itemId=\"grp-1_itm-1\"\n              isActive={activeItem === 'grp-1_itm-1'}\n            >\n              Link 1\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#mixed-3\"\n              groupId=\"grp-1\"\n              itemId=\"grp-1_itm-2\"\n              isActive={activeItem === 'grp-1_itm-2'}\n            >\n              Link 2\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#mixed-4\"\n              groupId=\"grp-1\"\n              itemId=\"grp-1_itm-3\"\n              isActive={activeItem === 'grp-1_itm-3'}\n            >\n              Link 3\n            </NavItem>\n          </NavExpandable>\n          <NavExpandable title=\"Link 3 - expandable\" groupId=\"grp-2\" isActive={activeGroup === 'grp-2'}>\n            <NavItem\n              preventDefault\n              to=\"#mixed-5\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-1\"\n              isActive={activeItem === 'grp-2_itm-1'}\n            >\n              Link 1\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#mixed-6\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-2\"\n              isActive={activeItem === 'grp-2_itm-2'}\n            >\n              Link 2\n            </NavItem>\n            <NavItem\n              preventDefault\n              to=\"#mixed-7\"\n              groupId=\"grp-2\"\n              itemId=\"grp-2_itm-3\"\n              isActive={activeItem === 'grp-2_itm-3'}\n            >\n              Link 3\n            </NavItem>\n          </NavExpandable>\n        </NavList>\n      </Nav>\n    );\n  }\n}","title":"Mixed","lang":"js"}}>
      
    </Example>,
  'Horizontal (only in PageHeader)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader } from '@patternfly/react-core';\n\nclass NavHorizontalList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = result => {\n      this.setState({\n        activeItem: result.itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    const nav = (\n      <Nav onSelect={this.onSelect} variant=\"horizontal\">\n        <NavList>\n          {Array.apply(0, Array(10)).map(function(x, i) {\n            const num = i + 1;\n            return (\n              <NavItem key={num} itemId={num} isActive={activeItem === num} href=\"#\">\n                Horizontal nav item {num}\n              </NavItem>\n            );\n          })}\n        </NavList>\n      </Nav>\n    );\n    return <PageHeader topNav={nav} />;\n  }\n}","title":"Horizontal (only in PageHeader)","lang":"js"}}>
      
    </Example>,
  'Horizontal subnav': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader } from '@patternfly/react-core';\n\nclass HorizontalSubNav extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = result => {\n      this.setState({\n        activeItem: result.itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Nav onSelect={this.onSelect} variant=\"horizontal-subnav\">\n        <NavList>\n          {Array.apply(0, Array(10)).map(function(x, i) {\n            const num = i + 1;\n            return (\n              <NavItem key={num} itemId={num} isActive={activeItem === num} href=\"#\">\n                Horizontal nav item {num}\n              </NavItem>\n            );\n          })}\n        </NavList>\n      </Nav>\n    );\n  }\n}","title":"Horizontal subnav","lang":"js"}}>
      
    </Example>,
  'Legacy tertiary': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageSection } from '@patternfly/react-core';\n\nclass NavTertiaryList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = result => {\n      this.setState({\n        activeItem: result.itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Nav onSelect={this.onSelect} variant=\"tertiary\">\n        <NavList>\n          {Array.apply(0, Array(10)).map(function(x, i) {\n            const num = i + 1;\n            return (\n              <NavItem key={num} itemId={num} isActive={activeItem === num} href=\"#\">\n                Tertiary nav item {num}\n              </NavItem>\n            );\n          })}\n        </NavList>\n      </Nav>\n    );\n  }\n}","title":"Legacy tertiary","lang":"js"}}>
      
    </Example>,
  'Flyout': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Nav,\n  NavExpandable,\n  NavItem,\n  NavItemSeparator,\n  NavList,\n  NavGroup,\n  Menu,\n  MenuContent,\n  MenuList,\n  MenuItem\n} from '@patternfly/react-core';\n\nNavWithFlyout = () => {\n  const [activeItem, setActiveItem] = React.useState(0);\n  const onSelect = result => setActiveItem(result.itemId);\n  const onMenuSelect = (event, itemId) => setActiveItem(itemId);\n\n  const numFlyouts = 5;\n  const FlyoutMenu = ({ depth, children }) => (\n    <Menu key={depth} containsFlyout isNavFlyout id={`menu-${depth}`} onSelect={onMenuSelect}>\n      <MenuContent>\n        <MenuList>\n          <MenuItem flyoutMenu={children} itemId={`next-menu-${depth}`} to={`#menu-link-${depth}`}>\n            Next menu\n          </MenuItem>\n          {[...Array(numFlyouts - depth).keys()].map(j => (\n            <MenuItem key={`${depth}-${j}`} itemId={`${depth}-${j}`} to={`#menu-link-${depth}-${j}`}>\n              Menu {depth} item {j}\n            </MenuItem>\n          ))}\n          <MenuItem flyoutMenu={children} itemId={`next-menu-2-${depth}`} to={`#second-menu-link-${depth}`}>\n            Next menu\n          </MenuItem>\n        </MenuList>\n      </MenuContent>\n    </Menu>\n  );\n\n  let curFlyout = <FlyoutMenu depth={1} />;\n  for (let i = 2; i < numFlyouts - 1; i++) {\n    curFlyout = <FlyoutMenu depth={i}>{curFlyout}</FlyoutMenu>;\n  }\n\n  return (\n    <Nav onSelect={onSelect}>\n      <NavList>\n        <NavItem id=\"default-link1\" to=\"#default-link1\" itemId={0} isActive={activeItem === 0}>\n          Link 1\n        </NavItem>\n        <NavItem id=\"default-link2\" to=\"#default-link2\" itemId={1} isActive={activeItem === 1}>\n          Link 2\n        </NavItem>\n        <NavItem flyout={curFlyout} id=\"default-link3\" to=\"#default-link3\" itemId={2} isActive={activeItem === 2}>\n          Link 3\n        </NavItem>\n        <NavItem id=\"default-link4\" to=\"#default-link4\" itemId={3} isActive={activeItem === 3}>\n          Link 4\n        </NavItem>\n      </NavList>\n    </Nav>\n  );\n};","title":"Flyout","lang":"js","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`A flyout should be a `}
        
        <code {...{"className":"ws-code"}}>
          {`Menu`}
        </code>
        {` component. Press `}
        
        <code {...{"className":"ws-code"}}>
          {`space`}
        </code>
        {` or `}
        
        <code {...{"className":"ws-code"}}>
          {`right arrow`}
        </code>
        {` to open a flyout using the keyboard, use the arrow keys to navigate between flyout items, and press `}
        
        <code {...{"className":"ws-code"}}>
          {`escape`}
        </code>
        {` or `}
        
        <code {...{"className":"ws-code"}}>
          {`left arrow`}
        </code>
        {` to close a flyout.`}
      </p>
    </Example>,
  'Drilldown': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\n\nimport { Nav, MenuContent, MenuItem, MenuList, DrilldownMenu, Menu } from '@patternfly/react-core';\n\ninterface MenuHeights {\n  [menuId: string]: number;\n}\n\nconst subMenuTwo: JSX.Element = (\n  <DrilldownMenu id=\"subMenu-2\">\n    <MenuItem itemId=\"subMenu-2-breadcrumb\" direction=\"up\">\n      SubMenu 1 - Item 1\n    </MenuItem>\n    <MenuItem itemId=\"subMenu-2_item-1\" to=\"#subMenu-2_item-1\">\n      SubMenu 2 - Item 1\n    </MenuItem>\n    <MenuItem itemId=\"subMenu-2_item-2\" to=\"#subMenu-2_item-2\">\n      SubMenu 2 - Item 2\n    </MenuItem>\n    <MenuItem itemId=\"subMenu-2_item-3\" to=\"#subMenu-2_item-3\">\n      SubMenu 2 - Item 3\n    </MenuItem>\n  </DrilldownMenu>\n);\n\nconst subMenuOne: JSX.Element = (\n  <DrilldownMenu id=\"subMenu-1\">\n    <MenuItem itemId=\"subMenu-1-breadcrumb\" direction=\"up\">\n      Item 1\n    </MenuItem>\n    <MenuItem itemId=\"subMenu-1_item-1\" description=\"SubMenu 2\" direction=\"down\" drilldownMenu={subMenuTwo}>\n      SubMenu 1 - Item 1\n    </MenuItem>\n    <MenuItem itemId=\"subMenu-1_item-2\" to=\"#subMenu-1_item-2\">\n      SubMenu 1 - Item 2\n    </MenuItem>\n    <MenuItem itemId=\"subMenu-1_item-3\" to=\"#subMenu-1_item-3\">\n      SubMenu 1 - Item 3\n    </MenuItem>\n  </DrilldownMenu>\n);\n\nexport const NavLevelThreeDrill: React.FunctionComponent = () => {\n  const [menuDrilledIn, setMenuDrilledIn] = React.useState<string[]>([]);\n  const [drilldownPath, setDrilldownPath] = React.useState<string[]>([]);\n  const [menuHeights, setMenuHeights] = React.useState<MenuHeights>({});\n  const [activeMenu, setActiveMenu] = React.useState('rootMenu');\n\n  const onDrillIn = (fromItemId: string, toItemId: string, itemId: string) => {\n    setMenuDrilledIn(prevMenuDrilledIn => [...prevMenuDrilledIn, fromItemId]);\n    setDrilldownPath(prevDrilldownPath => [...prevDrilldownPath, itemId]);\n    setActiveMenu(toItemId);\n  };\n\n  const onDrillOut = (toItemId: string, _itemId: string) => {\n    setMenuDrilledIn(prevMenuDrilledIn => prevMenuDrilledIn.slice(0, prevMenuDrilledIn.length - 1));\n    setDrilldownPath(prevDrilldownPath => prevDrilldownPath.slice(0, prevDrilldownPath.length - 1));\n    setActiveMenu(toItemId);\n  };\n\n  const onGetMenuHeight = (menuId: string, height: number) => {\n    if (!menuHeights[menuId] && menuId !== 'rootMenu') {\n      setMenuHeights(prevMenuHeights => ({ ...prevMenuHeights, [menuId]: height }));\n    }\n  };\n\n  return (\n    <Nav>\n      <Menu\n        id=\"rootMenu\"\n        containsDrilldown\n        drilldownItemPath={drilldownPath}\n        drilledInMenus={menuDrilledIn}\n        activeMenu={activeMenu}\n        onDrillIn={onDrillIn}\n        onDrillOut={onDrillOut}\n        onGetMenuHeight={onGetMenuHeight}\n      >\n        <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>\n          <MenuList>\n            <MenuItem itemId=\"item-1\" direction=\"down\" description=\"SubMenu 1\" drilldownMenu={subMenuOne}>\n              Item 1\n            </MenuItem>\n            <MenuItem itemId=\"item-2\" to=\"#item-2\">\n              Item 2\n            </MenuItem>\n            <MenuItem itemId=\"item-3\" to=\"#item-3\">\n              Item 3\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    </Nav>\n  );\n};\n","title":"Drilldown","lang":"ts","isBeta":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Grouped"])}
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Expandable (w/subnavigation titles)"])}
    {React.createElement(pageData.examples["Expandable third level"])}
    {React.createElement(pageData.examples["Mixed"])}
    {React.createElement(pageData.examples["Horizontal (only in PageHeader)"])}
    {React.createElement(pageData.examples["Horizontal subnav"])}
    {React.createElement(pageData.examples["Legacy tertiary"])}
    {React.createElement(pageData.examples["Flyout"])}
    {React.createElement(pageData.examples["Drilldown"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsNavigationReactDocs';
Component.pageData = pageData;

export default Component;
