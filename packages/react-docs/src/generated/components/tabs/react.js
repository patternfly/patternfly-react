import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';
import ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';
import LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';
import ProjectDiagramIcon from '@patternfly/react-icons/dist/esm/icons/project-diagram-icon';
const pageData = {
  "id": "Tabs",
  "section": "components",
  "source": "react",
  "slug": "/components/tabs/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Tabs/examples/Tabs.md",
  "propComponents": [
    {
      "name": "Tabs",
      "description": "",
      "props": [
        {
          "name": "activeKey",
          "type": "number | string",
          "description": "The index of the active tab",
          "defaultValue": "0"
        },
        {
          "name": "addButtonAriaLabel",
          "type": "string",
          "description": "Aria-label for the add button",
          "beta": true
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the tabs component. Must be React.ReactElement<TabProps>[]",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the tabs"
        },
        {
          "name": "component",
          "type": "'div' | 'nav'",
          "description": "Determines what tag is used around the tabs. Use \"nav\" to define the tabs inside a navigation region",
          "defaultValue": "TabsComponent.div"
        },
        {
          "name": "defaultActiveKey",
          "type": "number | string",
          "description": "The index of the default active tab. Set this for uncontrolled Tabs"
        },
        {
          "name": "defaultIsExpanded",
          "type": "boolean",
          "description": "Flag indicating the default expanded state for uncontrolled expand/collapse of"
        },
        {
          "name": "expandable",
          "type": "{\n  default?: 'expandable' | 'nonExpandable';\n  sm?: 'expandable' | 'nonExpandable';\n  md?: 'expandable' | 'nonExpandable';\n  lg?: 'expandable' | 'nonExpandable';\n  xl?: 'expandable' | 'nonExpandable';\n  '2xl'?: 'expandable' | 'nonExpandable';\n}",
          "description": "Enable expandable vertical tabs at various breakpoints. (isVertical should be set to true for this to work)"
        },
        {
          "name": "hasBorderBottom",
          "type": "boolean",
          "description": "Enables border bottom tab styling on tabs. Defaults to true. To remove the bottom border, set this prop to false.",
          "defaultValue": "true"
        },
        {
          "name": "hasSecondaryBorderBottom",
          "type": "boolean",
          "description": "Enables border bottom styling for secondary tabs"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Uniquely identifies the tabs"
        },
        {
          "name": "inset",
          "type": "{\n  default?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  sm?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  md?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  lg?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  xl?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  '2xl'?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n}",
          "description": "Insets at various breakpoints."
        },
        {
          "name": "isBox",
          "type": "boolean",
          "description": "Enables box styling to the tab component",
          "defaultValue": "false"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag to indicate if the vertical tabs are expanded"
        },
        {
          "name": "isFilled",
          "type": "boolean",
          "description": "Enables the filled tab list layout",
          "defaultValue": "false"
        },
        {
          "name": "isSecondary",
          "type": "boolean",
          "description": "Enables secondary tab styling",
          "defaultValue": "false"
        },
        {
          "name": "isVertical",
          "type": "boolean",
          "description": "Enables vertical tab styling",
          "defaultValue": "false"
        },
        {
          "name": "leftScrollAriaLabel",
          "type": "string",
          "description": "Aria-label for the left scroll button",
          "defaultValue": "'Scroll left'"
        },
        {
          "name": "mountOnEnter",
          "type": "boolean",
          "description": "Waits until the first \"enter\" transition to mount tab children (add them to the DOM)",
          "defaultValue": "false"
        },
        {
          "name": "onAdd",
          "type": "() => void",
          "description": "Callback for the add button. Passing this property inserts the add button",
          "beta": true
        },
        {
          "name": "onClose",
          "type": "(event: React.MouseEvent<HTMLElement, MouseEvent>, eventKey: number | string) => void",
          "description": "Callback to handle tab closing",
          "beta": true
        },
        {
          "name": "onSelect",
          "type": "(event: React.MouseEvent<HTMLElement, MouseEvent>, eventKey: number | string) => void",
          "description": "Callback to handle tab selection",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onToggle",
          "type": "(isExpanded: boolean) => void",
          "description": "Callback function to toggle the expandable tabs.",
          "defaultValue": "(isExpanded): void => undefined"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "rightScrollAriaLabel",
          "type": "string",
          "description": "Aria-label for the right scroll button",
          "defaultValue": "'Scroll right'"
        },
        {
          "name": "toggleAriaLabel",
          "type": "string",
          "description": "Aria-label for the expandable toggle"
        },
        {
          "name": "toggleText",
          "type": "string",
          "description": "Text that appears in the expandable toggle"
        },
        {
          "name": "unmountOnExit",
          "type": "boolean",
          "description": "Unmounts tab children (removes them from the DOM) when they are no longer visible",
          "defaultValue": "false"
        },
        {
          "name": "usePageInsets",
          "type": "boolean",
          "description": "Flag indicates that the tabs should use page insets."
        },
        {
          "name": "variant",
          "type": "'default' | 'light300'",
          "description": "Tabs background color variant",
          "defaultValue": "'default'"
        }
      ]
    },
    {
      "name": "Tab",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Tab content area."
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Tab"
        },
        {
          "name": "closeButtonAriaLabel",
          "type": "string",
          "description": "Aria-label for the close button added by passing the onClose property to Tabs.",
          "beta": true
        },
        {
          "name": "eventKey",
          "type": "number | string",
          "description": "uniquely identifies the tab",
          "required": true
        },
        {
          "name": "href",
          "type": "string",
          "description": "URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component=\"nav\"> should have an href."
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "inoperableEvents",
          "type": "string[]",
          "description": "Events to prevent when the button is in an aria-disabled state"
        },
        {
          "name": "isAriaDisabled",
          "type": "boolean",
          "description": "Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute"
        },
        {
          "name": "isCloseDisabled",
          "type": "boolean",
          "description": "Flag indicating the close button should be disabled",
          "beta": true
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Adds disabled styling and disables the button using the disabled html attribute"
        },
        {
          "name": "isHidden",
          "type": "boolean",
          "description": "whether to render the tab or not"
        },
        {
          "name": "tabContentId",
          "type": "string | number",
          "description": "child id for case in which a TabContent section is defined outside of a Tabs component"
        },
        {
          "name": "tabContentRef",
          "type": "React.RefObject<any>",
          "description": "child reference for case in which a TabContent section is defined outside of a Tabs component"
        },
        {
          "name": "title",
          "type": "React.ReactNode",
          "description": "Content rendered in the tab title. Should be <TabTitleText> and/or <TabTitleIcon> for proper styling.",
          "required": true
        },
        {
          "name": "tooltip",
          "type": "React.ReactElement<any>",
          "description": "Optional Tooltip rendered to a Tab. Should be <Tooltip> with appropriate props for proper rendering."
        }
      ]
    },
    {
      "name": "TabContent",
      "description": "",
      "props": [
        {
          "name": "activeKey",
          "type": "number | string",
          "description": "Identifies the active Tab"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "title of controlling Tab if used outside Tabs component"
        },
        {
          "name": "child",
          "type": "React.ReactElement<any>",
          "description": "Child to show in the content area"
        },
        {
          "name": "children",
          "type": "any",
          "description": "content rendered inside the tab content area if used outside Tabs component"
        },
        {
          "name": "className",
          "type": "string",
          "description": "class of tab content area if used outside Tabs component"
        },
        {
          "name": "eventKey",
          "type": "number | string",
          "description": "uniquely identifies the controlling Tab if used outside Tabs component"
        },
        {
          "name": "id",
          "type": "string",
          "description": "id passed from parent to identify the content section",
          "required": true
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Callback for the section ref"
        }
      ]
    },
    {
      "name": "TabTitleText",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Text to be rendered inside the tab button title.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the tab title text",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "TabTitleIcon",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Icon to be rendered inside the tab button title.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the tab title icon",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-tabs"
  ],
  "examples": [
    "Default",
    "With tooltip react ref",
    "Uncontrolled",
    "Box light variation",
    "Default overflow",
    "Vertical",
    "Vertical expandable",
    "Vertical expandable uncontrolled",
    "Inset",
    "Page Insets",
    "Icons and text",
    "Tabs with sub tabs",
    "Filled",
    "Filled with icons",
    "Using the nav element",
    "Sub nav using the nav element",
    "Separate content",
    "Tab content with body and padding",
    "Children mounting on click",
    "Unmounting invisible children",
    "Toggled separate content",
    "Dynamic"
  ]
};
pageData.liveContext = {
  UsersIcon,
  BoxIcon,
  DatabaseIcon,
  ServerIcon,
  LaptopIcon,
  ProjectDiagramIcon
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';\n\nclass SimpleTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isBox: false\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox } = this.state;\n    const tooltip = (\n      <Tooltip content=\"Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.\" />\n    );\n\n    return (\n      <div>\n        <Tabs\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          isBox={isBox}\n          aria-label=\"Tabs in the default example\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>\n            Disabled\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>\n            ARIA Disabled\n          </Tab>\n          <Tab\n            tooltip={tooltip}\n            eventKey={5}\n            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}\n            isAriaDisabled\n          >\n            ARIA Disabled (Tooltip)\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox\"\n            id=\"toggle-box\"\n            name=\"toggle-box\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Default","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`When passing in a Tooltip component to the Tab component, the Tooltip can also be passed in directly to the `}
        
        <code {...{"className":"ws-code"}}>
          {`tooltip`}
        </code>
        {` prop.`}
      </p>
    </Example>,
  'With tooltip react ref': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';\n\nclass SimpleTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isBox: false\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox } = this.state;\n    const tooltipRef = React.createRef();\n\n    return (\n      <div>\n        <Tabs\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          isBox={isBox}\n          aria-label=\"Tabs in the example with a tooltip ref\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>\n            Disabled\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>\n            ARIA Disabled\n          </Tab>\n          <Tab\n            eventKey={5}\n            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}\n            isAriaDisabled\n            ref={tooltipRef}\n            aria-describedby=\"tooltip-ref1\"\n          >\n            ARIA Disabled (Tooltip)\n          </Tab>\n        </Tabs>\n        <Tooltip\n          id=\"tooltip-ref1\"\n          content=\"Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.\"\n          reference={tooltipRef}\n        />\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox\"\n            id=\"toggle-box\"\n            name=\"toggle-box\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"With tooltip react ref","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`When using a React ref to link a Tooltip to a Tab component via the `}
        
        <code {...{"className":"ws-code"}}>
          {`reference`}
        </code>
        {` prop, you should avoid manually passing in a value of "off" to the `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-live`}
        </code>
        {` prop. Doing so may lead to the tooltip becoming less accessible to assistive technologies.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The tooltip should also have the `}
        
        <code {...{"className":"ws-code"}}>
          {`id`}
        </code>
        {` prop passed in. The value given to this prop should then be passed into the tab's `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-describedby`}
        </code>
        {` prop. This ensures a tooltip used with a React ref will be announced by the JAWS and NVDA screen readers.`}
      </p>
    </Example>,
  'Uncontrolled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';\n\nclass UncontrolledSimpleTabs extends React.Component {\n  render() {\n    const tooltip = (\n      <Tooltip content=\"Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.\" />\n    );\n\n    return (\n      <>\n        <Tabs defaultActiveKey={0} aria-label=\"Tabs in the uncontrolled example\">\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>\n            Disabled\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>\n            ARIA Disabled\n          </Tab>\n          <Tab\n            eventKey={5}\n            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}\n            isAriaDisabled\n            tooltip={tooltip}\n          >\n            ARIA Disabled (Tooltip)\n          </Tab>\n        </Tabs>\n      </>\n    );\n  }\n}","title":"Uncontrolled","lang":"js"}}>
      
    </Example>,
  'Box light variation': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';\n\nclass SimpleTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isTabsLightScheme: true\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleScheme = checked => {\n      this.setState({\n        isTabsLightScheme: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox, isTabsLightScheme } = this.state;\n    const tooltip = (\n      <Tooltip content=\"Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.\" />\n    );\n\n    return (\n      <div>\n        <Tabs\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          variant={isTabsLightScheme ? 'light300' : 'default'}\n          isBox\n          aria-label=\"Tabs in the box light variation example\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>\n            Disabled\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>\n            ARIA Disabled\n          </Tab>\n          <Tab\n            eventKey={5}\n            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}\n            isAriaDisabled\n            tooltip={tooltip}\n          >\n            ARIA Disabled (Tooltip)\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"Tabs light variation\"\n            isChecked={isTabsLightScheme}\n            onChange={this.toggleScheme}\n            aria-label=\"show light scheme variation checkbox\"\n            id=\"toggle-scheme\"\n            name=\"toggle-scheme\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Box light variation","lang":"js"}}>
      
    </Example>,
  'Default overflow': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';\n\nclass ScrollButtonsPrimaryTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isBox: false\n    };\n\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox } = this.state;\n    return (\n      <div>\n        <Tabs\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          isBox={isBox}\n          aria-label=\"Tabs in the default overflow example\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>\n            Server\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>\n            System\n          </Tab>\n          <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>\n            Network\n          </Tab>\n          <Tab eventKey={7} title={<TabTitleText>Tab item 7</TabTitleText>}>\n            Tab 7 section\n          </Tab>\n          <Tab eventKey={8} title={<TabTitleText>Tab item 8</TabTitleText>}>\n            Tab 8 section\n          </Tab>\n          <Tab eventKey={9} title={<TabTitleText>Tab item 9</TabTitleText>}>\n            Tab 9 section\n          </Tab>\n          <Tab eventKey={10} title={<TabTitleText>Tab item 10</TabTitleText>}>\n            Tab 10 section\n          </Tab>\n          <Tab eventKey={11} title={<TabTitleText>Tab item 11</TabTitleText>}>\n            Tab 11 section\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox on overflow\"\n            id=\"toggle-box-overflow\"\n            name=\"toggle-box-overflow\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Default overflow","lang":"js"}}>
      
    </Example>,
  'Vertical': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';\n\nclass VerticalTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isBox: false\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox } = this.state;\n    const tooltip = (\n      <Tooltip content=\"Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support.\" />\n    );\n\n    return (\n      <div>\n        <Tabs\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          isVertical\n          isBox={isBox}\n          aria-label=\"Tabs in the vertical example\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled>\n            Disabled\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled>\n            ARIA Disabled\n          </Tab>\n          <Tab\n            eventKey={5}\n            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}\n            isAriaDisabled\n            tooltip={tooltip}\n          >\n            ARIA Disabled (Tooltip)\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox with vertical\"\n            id=\"toggle-box-vertical\"\n            name=\"toggle-box-vertical\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Vertical","lang":"js"}}>
      
    </Example>,
  'Vertical expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';\nclass VerticalExpandableTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isExpanded: false\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n    this.onToggle = isExpanded => {\n      this.setState({\n        isExpanded\n      });\n    };\n  }\n  render() {\n    const { activeTabKey, isExpanded } = this.state;\n    return (\n      <Tabs\n        activeKey={activeTabKey}\n        onSelect={this.handleTabClick}\n        isVertical\n        expandable={{ default: 'expandable', md: 'nonExpandable', lg: 'expandable' }}\n        isExpanded={isExpanded}\n        onToggle={this.onToggle}\n        toggleText=\"Containers\"\n        aria-label=\"Tabs in the vertical expandable example\"\n      >\n        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n          Users\n        </Tab>\n        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n          Containers\n        </Tab>\n        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n          Database\n        </Tab>\n        <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>\n          Server\n        </Tab>\n        <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>\n          System\n        </Tab>\n        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>\n          Network\n        </Tab>\n      </Tabs>\n    );\n  }\n}","title":"Vertical expandable","lang":"js"}}>
      
    </Example>,
  'Vertical expandable uncontrolled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';\nclass VerticalExpandableUncontrolledTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n  }\n  render() {\n    const { activeTabKey } = this.state;\n    return (\n      <Tabs\n        activeKey={activeTabKey}\n        onSelect={this.handleTabClick}\n        isVertical\n        expandable={{ default: 'expandable', md: 'nonExpandable', lg: 'expandable' }}\n        defaultIsExpanded={false}\n        toggleText=\"Containers\"\n        aria-label=\"Tabs in the vertical expandable uncontrolled example\"\n      >\n        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n          Users\n        </Tab>\n        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n          Containers\n        </Tab>\n        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n          Database\n        </Tab>\n        <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>\n          Server\n        </Tab>\n        <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>\n          System\n        </Tab>\n        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>\n          Network\n        </Tab>\n      </Tabs>\n    );\n  }\n}","title":"Vertical expandable uncontrolled","lang":"js"}}>
      
    </Example>,
  'Inset': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';\n\nclass InsetTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isBox: false\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox } = this.state;\n    return (\n      <div>\n        <Tabs\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          inset={{\n            default: 'insetNone',\n            md: 'insetSm',\n            xl: 'insetLg',\n            '2xl': 'inset2xl'\n          }}\n          isBox={isBox}\n          aria-label=\"Tabs in the inset example\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>\n            Server\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>\n            System\n          </Tab>\n          <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>\n            Network\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox with inset\"\n            id=\"toggle-box-inset\"\n            name=\"toggle-box-inset\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Inset","lang":"js"}}>
      
    </Example>,
  'Page Insets': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';\n\nclass PageInsetsTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isBox: false\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox } = this.state;\n    return (\n      <div>\n        <Tabs\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          usePageInsets\n          isBox={isBox}\n          aria-label=\"Tabs in the page insets example\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>\n            Server\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>\n            System\n          </Tab>\n          <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>\n            Network\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox with inset\"\n            id=\"toggle-box-inset\"\n            name=\"toggle-box-inset\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Page Insets","lang":"js"}}>
      
    </Example>,
  'Icons and text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, TabTitleIcon } from '@patternfly/react-core';\nimport UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';\nimport BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';\nimport DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';\nimport ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';\nimport LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';\nimport ProjectDiagramIcon from '@patternfly/react-icons/dist/esm/icons/project-diagram-icon';\n\nclass IconAndTextTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        activeKey={this.state.activeTabKey}\n        onSelect={this.handleTabClick}\n        aria-label=\"Tabs in the icons and text example\"\n      >\n        <Tab\n          eventKey={0}\n          title={\n            <>\n              <TabTitleIcon>\n                <UsersIcon />\n              </TabTitleIcon>{' '}\n              <TabTitleText>Users</TabTitleText>{' '}\n            </>\n          }\n        >\n          Users\n        </Tab>\n        <Tab\n          eventKey={1}\n          title={\n            <>\n              <TabTitleIcon>\n                <BoxIcon />\n              </TabTitleIcon>{' '}\n              <TabTitleText>Containers</TabTitleText>{' '}\n            </>\n          }\n        >\n          Containers\n        </Tab>\n        <Tab\n          eventKey={2}\n          title={\n            <>\n              <TabTitleIcon>\n                <DatabaseIcon />\n              </TabTitleIcon>{' '}\n              <TabTitleText>Database</TabTitleText>{' '}\n            </>\n          }\n        >\n          Database\n        </Tab>\n        <Tab\n          eventKey={3}\n          title={\n            <>\n              <TabTitleIcon>\n                <ServerIcon />\n              </TabTitleIcon>{' '}\n              <TabTitleText>Server</TabTitleText>{' '}\n            </>\n          }\n        >\n          Server\n        </Tab>\n        <Tab\n          eventKey={4}\n          title={\n            <>\n              <TabTitleIcon>\n                <LaptopIcon />\n              </TabTitleIcon>{' '}\n              <TabTitleText>System</TabTitleText>{' '}\n            </>\n          }\n        >\n          System\n        </Tab>\n        <Tab\n          eventKey={6}\n          title={\n            <>\n              <TabTitleIcon>\n                <ProjectDiagramIcon />\n              </TabTitleIcon>{' '}\n              <TabTitleText>Network</TabTitleText>{' '}\n            </>\n          }\n        >\n          Network\n        </Tab>\n      </Tabs>\n    );\n  }\n}","title":"Icons and text","lang":"js"}}>
      
    </Example>,
  'Tabs with sub tabs': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';\n\nclass SecondaryTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey1: 0,\n      activeTabKey2: 10,\n      isBox: false\n    };\n    // Toggle currently active tab\n    this.handleTabClickFirst = (event, tabIndex) => {\n      this.setState({\n        activeTabKey1: tabIndex\n      });\n    };\n    // Toggle currently active secondary tab\n    this.handleTabClickSecond = (event, tabIndex) => {\n      this.setState({\n        activeTabKey2: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey1, activeTabKey2, isBox } = this.state;\n    return (\n      <div>\n        <Tabs\n          activeKey={activeTabKey1}\n          onSelect={this.handleTabClickFirst}\n          isBox={isBox}\n          aria-label=\"Tabs in the tabs with subtabs example\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            <Tabs\n              aria-label=\"secondary tabs for users\"\n              activeKey={activeTabKey2}\n              isSecondary\n              onSelect={this.handleTabClickSecond}\n            >\n              <Tab eventKey={20} title={<TabTitleText>Secondary tab item 1</TabTitleText>}>\n                Secondary tab item 1 item section\n              </Tab>\n              <Tab eventKey={21} title={<TabTitleText>Secondary tab item 2</TabTitleText>}>\n                Secondary tab item 2 section\n              </Tab>\n              <Tab eventKey={22} title={<TabTitleText>Secondary tab item 3</TabTitleText>}>\n                Secondary tab item 3 section\n              </Tab>\n              <Tab eventKey={23} title={<TabTitleText>Secondary tab item 4</TabTitleText>}>\n                Secondary tab item 4 section\n              </Tab>\n              <Tab eventKey={24} title={<TabTitleText>Secondary tab item 5</TabTitleText>}>\n                Secondary tab item 5 section\n              </Tab>\n              <Tab eventKey={25} title={<TabTitleText>Secondary tab item 6</TabTitleText>}>\n                Secondary tab item 6 section\n              </Tab>\n              <Tab eventKey={26} title={<TabTitleText>Secondary tab item 7</TabTitleText>}>\n                Secondary tab item 7 section\n              </Tab>\n              <Tab eventKey={27} title={<TabTitleText>Secondary tab item 8</TabTitleText>}>\n                Secondary tab item 8 section\n              </Tab>\n            </Tabs>\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n          <Tab eventKey={3} title={<TabTitleText>Server</TabTitleText>}>\n            Server\n          </Tab>\n          <Tab eventKey={4} title={<TabTitleText>System</TabTitleText>}>\n            System\n          </Tab>\n          <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>}>\n            Network\n          </Tab>\n          <Tab eventKey={7} title={<TabTitleText>Tab item 7</TabTitleText>}>\n            Tab 7 section\n          </Tab>\n          <Tab eventKey={8} title={<TabTitleText>Tab item 8</TabTitleText>}>\n            Tab 8 section\n          </Tab>\n          <Tab eventKey={9} title={<TabTitleText>Tab item 9</TabTitleText>}>\n            Tab 9 section\n          </Tab>\n          <Tab eventKey={10} title={<TabTitleText>Tab item 10</TabTitleText>}>\n            Tab 10 section\n          </Tab>\n          <Tab eventKey={11} title={<TabTitleText>Tab item 11</TabTitleText>}>\n            Tab 11 section\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox with sub tabs\"\n            id=\"toggle-box-secondary\"\n            name=\"toggle-box-secondary\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Tabs with sub tabs","lang":"js"}}>
      
    </Example>,
  'Filled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, Checkbox } from '@patternfly/react-core';\n\nclass FilledTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isBox: false\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox } = this.state;\n    return (\n      <div>\n        <Tabs\n          isFilled\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          isBox={isBox}\n          aria-label=\"Tabs in the filled example\"\n        >\n          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>\n            Users\n          </Tab>\n          <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>\n            Containers\n          </Tab>\n          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>\n            Database\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox with filled tabs\"\n            id=\"toggle-box-filled\"\n            name=\"toggle-box-filled\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Filled","lang":"js"}}>
      
    </Example>,
  'Filled with icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, TabTitleIcon, Checkbox } from '@patternfly/react-core';\nimport UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';\nimport BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';\nimport DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';\n\nclass FilledTabsWithIcons extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0,\n      isBox: false\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n\n    this.toggleBox = checked => {\n      this.setState({\n        isBox: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeTabKey, isBox } = this.state;\n    return (\n      <div>\n        <Tabs\n          isFilled\n          activeKey={activeTabKey}\n          onSelect={this.handleTabClick}\n          isBox={isBox}\n          aria-label=\"Tabs in the filled with icons example\"\n        >\n          <Tab\n            eventKey={0}\n            title={\n              <>\n                <TabTitleIcon>\n                  <UsersIcon />\n                </TabTitleIcon>{' '}\n                <TabTitleText>Users</TabTitleText>{' '}\n              </>\n            }\n          >\n            Users\n          </Tab>\n          <Tab\n            eventKey={1}\n            title={\n              <>\n                <TabTitleIcon>\n                  <BoxIcon />\n                </TabTitleIcon>{' '}\n                <TabTitleText>Containers</TabTitleText>{' '}\n              </>\n            }\n          >\n            Containers\n          </Tab>\n          <Tab\n            eventKey={2}\n            title={\n              <>\n                <TabTitleIcon>\n                  <DatabaseIcon />\n                </TabTitleIcon>{' '}\n                <TabTitleText>Database</TabTitleText>{' '}\n              </>\n            }\n          >\n            Database\n          </Tab>\n        </Tabs>\n        <div style={{ marginTop: '20px' }}>\n          <Checkbox\n            label=\"isBox\"\n            isChecked={isBox}\n            onChange={this.toggleBox}\n            aria-label=\"show box variation checkbox with filled icon tabs\"\n            id=\"toggle-box-filled-icon\"\n            name=\"toggle-box-filled-icon\"\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Filled with icons","lang":"js"}}>
      
    </Example>,
  'Using the nav element': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabsComponent, TabTitleText } from '@patternfly/react-core';\n\nclass TabsNav extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0\n    };\n\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        activeKey={this.state.activeTabKey}\n        onSelect={this.handleTabClick}\n        aria-label=\"Local\"\n        component={TabsComponent.nav}\n        aria-label=\"Tabs in the nav element example\"\n      >\n        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} href=\"#users\">\n          Users\n        </Tab>\n        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>} href=\"#containers\">\n          Containers\n        </Tab>\n        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} href=\"#database\">\n          Database\n        </Tab>\n        <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled href=\"#disabled\">\n          Disabled\n        </Tab>\n        <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href=\"#aria-disabled\">\n          ARIA Disabled\n        </Tab>\n        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>} href=\"#network\">\n          Network\n        </Tab>\n      </Tabs>\n    );\n  }\n}","title":"Using the nav element","lang":"js"}}>
      
    </Example>,
  'Sub nav using the nav element': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabsComponent, TabTitleText } from '@patternfly/react-core';\n\nclass SecondaryTabsNav extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey1: 0,\n      activeTabKey2: 10\n    };\n\n    // Toggle currently active tab\n    this.handleTabClickFirst = (event, tabIndex) => {\n      this.setState({\n        activeTabKey1: tabIndex\n      });\n    };\n\n    // Toggle currently active secondary tab\n    this.handleTabClickSecond = (event, tabIndex) => {\n      this.setState({\n        activeTabKey2: tabIndex\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        activeKey={this.state.activeTabKey1}\n        onSelect={this.handleTabClickFirst}\n        aria-label=\"Local\"\n        component={TabsComponent.nav}\n        aria-label=\"Tabs in the sub tabs with nav element example\"\n      >\n        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} href=\"#\">\n          <Tabs\n            activeKey={this.state.activeTabKey2}\n            isSecondary\n            onSelect={this.handleTabClickSecond}\n            aria-label=\"Local secondary\"\n            component={TabsComponent.nav}\n          >\n            <Tab eventKey={20} title={<TabTitleText>Item 1</TabTitleText>} href=\"#\">\n              Item 1 item section\n            </Tab>\n            <Tab eventKey={21} title={<TabTitleText>Item 2</TabTitleText>} href=\"#\">\n              Item 2 section\n            </Tab>\n            <Tab eventKey={22} title={<TabTitleText>Item 3</TabTitleText>} href=\"#\">\n              Item 3 section\n            </Tab>\n            <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled href=\"#\">\n              Disabled\n            </Tab>\n            <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href=\"#\">\n              ARIA Disabled\n            </Tab>\n            <Tab eventKey={25} title={<TabTitleText>Item 6</TabTitleText>} href=\"#\">\n              Item 6 section\n            </Tab>\n          </Tabs>\n        </Tab>\n        <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>} href=\"#\">\n          Containers\n        </Tab>\n        <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} href=\"#\">\n          Database\n        </Tab>\n        <Tab eventKey={3} title={<TabTitleText>Disabled</TabTitleText>} isDisabled href=\"#\">\n          Disabled\n        </Tab>\n        <Tab eventKey={4} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled href=\"#\">\n          ARIA Disabled\n        </Tab>\n        <Tab eventKey={6} title={<TabTitleText>Network</TabTitleText>} href=\"#\">\n          Network\n        </Tab>\n      </Tabs>\n    );\n  }\n}","title":"Sub nav using the nav element","lang":"js"}}>
      
    </Example>,
  'Separate content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, TabContent } from '@patternfly/react-core';\n\nclass SeparateTabContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeKey: 0\n    };\n\n    this.contentRef1 = React.createRef();\n    this.contentRef2 = React.createRef();\n    this.contentRef3 = React.createRef();\n\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <Tabs\n          activeKey={this.state.activeTabKey}\n          onSelect={this.handleTabClick}\n          aria-label=\"Tabs in the seperate content example\"\n        >\n          <Tab\n            eventKey={0}\n            title={<TabTitleText>Tab item 1</TabTitleText>}\n            tabContentId=\"refTab1Section\"\n            tabContentRef={this.contentRef1}\n          />\n          <Tab\n            eventKey={1}\n            title={<TabTitleText>Tab item 2</TabTitleText>}\n            tabContentId=\"refTab2Section\"\n            tabContentRef={this.contentRef2}\n          />\n          <Tab\n            eventKey={2}\n            title={<TabTitleText>Tab item 3</TabTitleText>}\n            tabContentId=\"refTab3Section\"\n            tabContentRef={this.contentRef3}\n          />\n        </Tabs>\n        <div>\n          <TabContent\n            eventKey={0}\n            id=\"refTab1Section\"\n            ref={this.contentRef1}\n            aria-label=\"This is content for the first tab\"\n          >\n            Tab 1 section\n          </TabContent>\n          <TabContent\n            eventKey={1}\n            id=\"refTab2Section\"\n            ref={this.contentRef2}\n            aria-label=\"This is content for the second tab\"\n            hidden\n          >\n            Tab 2 section\n          </TabContent>\n          <TabContent\n            eventKey={2}\n            id=\"refTab3Section\"\n            ref={this.contentRef3}\n            aria-label=\"This is content for the third tab\"\n            hidden\n          >\n            Tab 3 section\n          </TabContent>\n        </div>\n      </React.Fragment>\n    );\n  }\n}","title":"Separate content","lang":"js"}}>
      
    </Example>,
  'Tab content with body and padding': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText, TabContent, TabContentBody } from '@patternfly/react-core';\n\nconst TabContentWithBody = () => {\n  const [activeTabKey, setActiveTabKey] = React.useState(0);\n\n  // Toggle currently active tab\n  const handleTabClick = (event, tabIndex) => {\n    setActiveTabKey(tabIndex);\n  };\n\n  const contentRef1 = React.createRef();\n  const contentRef2 = React.createRef();\n  const contentRef3 = React.createRef();\n\n  return (\n    <React.Fragment>\n      <Tabs activeKey={activeTabKey} onSelect={handleTabClick} aria-label=\"Tabs in the body and padding example\">\n        <Tab\n          eventKey={0}\n          title={<TabTitleText>Tab item 1</TabTitleText>}\n          tabContentId=\"refTab1Section\"\n          tabContentRef={contentRef1}\n        />\n        <Tab\n          eventKey={1}\n          title={<TabTitleText>Tab item 2</TabTitleText>}\n          tabContentId=\"refTab2Section\"\n          tabContentRef={contentRef2}\n        />\n        <Tab\n          eventKey={2}\n          title={<TabTitleText>Tab item 3</TabTitleText>}\n          tabContentId=\"refTab3Section\"\n          tabContentRef={contentRef3}\n        />\n      </Tabs>\n      <div>\n        <TabContent eventKey={0} id=\"refTab1Section\" ref={contentRef1} aria-label=\"This is content for the first tab\">\n          <TabContentBody hasPadding> Tab 1 section </TabContentBody>\n        </TabContent>\n        <TabContent\n          eventKey={1}\n          id=\"refTab2Section\"\n          ref={contentRef2}\n          aria-label=\"This is content for the second tab\"\n          hidden\n        >\n          <TabContentBody hasPadding> Tab 2 section </TabContentBody>\n        </TabContent>\n        <TabContent\n          eventKey={2}\n          id=\"refTab3Section\"\n          ref={contentRef3}\n          aria-label=\"This is content for the third tab\"\n          hidden\n        >\n          <TabContentBody hasPadding> Tab 3 section </TabContentBody>\n        </TabContent>\n      </div>\n    </React.Fragment>\n  );\n};","title":"Tab content with body and padding","lang":"js"}}>
      
    </Example>,
  'Children mounting on click': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText } from '@patternfly/react-core';\n\nclass MountingSimpleTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        mountOnEnter\n        activeKey={this.state.activeTabKey}\n        onSelect={this.handleTabClick}\n        aria-label=\"Tabs in the children mounting on click example\"\n      >\n        <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>}>\n          Tab 1 section\n        </Tab>\n        <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>\n          Tab 2 section\n        </Tab>\n        <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>}>\n          Tab 3 section\n        </Tab>\n      </Tabs>\n    );\n  }\n}","title":"Children mounting on click","lang":"js"}}>
      
    </Example>,
  'Unmounting invisible children': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText } from '@patternfly/react-core';\n\nclass UnmountingSimpleTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeTabKey: 0\n    };\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Tabs\n        unmountOnExit\n        activeKey={this.state.activeTabKey}\n        onSelect={this.handleTabClick}\n        aria-label=\"Tabs in the unmounting invisible children example\"\n      >\n        <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>}>\n          Tab 1 section\n        </Tab>\n        <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>\n          Tab 2 section\n        </Tab>\n        <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>}>\n          Tab 3 section\n        </Tab>\n      </Tabs>\n    );\n  }\n}","title":"Unmounting invisible children","lang":"js"}}>
      
    </Example>,
  'Toggled separate content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabContent, Button, Divider } from '@patternfly/react-core';\n\nclass ToggledSeparateContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeKey: 0,\n      isTab2Hidden: false\n    };\n\n    this.contentRef1 = React.createRef();\n    this.contentRef2 = React.createRef();\n    this.contentRef3 = React.createRef();\n\n    // Toggle currently active tab\n    this.handleTabClick = (event, tabIndex) => {\n      this.setState({\n        activeTabKey: tabIndex\n      });\n    };\n  }\n\n  render() {\n    const { activeKey, isTab2Hidden } = this.state;\n    return (\n      <React.Fragment>\n        <Button onClick={() => this.setState({ isTab2Hidden: !isTab2Hidden })}>\n          {isTab2Hidden ? 'Show' : 'Hide'} tab 2\n        </Button>\n        <Divider style={{ paddingTop: '1rem', paddingBottom: '1rem' }} />\n        <Tabs\n          activeKey={this.state.activeTabKey}\n          onSelect={this.handleTabClick}\n          aria-label=\"Tabs in the toggled separate content example\"\n        >\n          <Tab eventKey={0} title=\"Tab item 1\" tabContentId=\"refTab1Section\" tabContentRef={this.contentRef1} />\n          {!isTab2Hidden && (\n            <Tab eventKey={1} title=\"Tab item 2\" tabContentId=\"refTab2Section\" tabContentRef={this.contentRef2} />\n          )}\n          <Tab eventKey={2} title=\"Tab item 3\" tabContentId=\"refTab3Section\" tabContentRef={this.contentRef3} />\n        </Tabs>\n        <div>\n          <TabContent\n            eventKey={0}\n            id=\"refTab1Section\"\n            ref={this.contentRef1}\n            aria-label=\"This is content for the first tab\"\n          >\n            Tab 1 section\n          </TabContent>\n          {!isTab2Hidden && (\n            <TabContent\n              eventKey={1}\n              id=\"refTab2Section\"\n              ref={this.contentRef2}\n              aria-label=\"This is content for the second tab\"\n              hidden\n            >\n              Tab 2 section\n            </TabContent>\n          )}\n          <TabContent\n            eventKey={2}\n            id=\"refTab3Section\"\n            ref={this.contentRef3}\n            aria-label=\"This is content for the third tab\"\n            hidden\n          >\n            Tab 3 section\n          </TabContent>\n        </div>\n      </React.Fragment>\n    );\n  }\n}","title":"Toggled separate content","lang":"js"}}>
      
    </Example>,
  'Dynamic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tabs, Tab, TabTitleText } from '@patternfly/react-core';\n\nexport const TabsDynamic: React.FunctionComponent = () => {\n  const [activeTabKey, setActiveTabKey] = React.useState<number>(0);\n  const [tabs, setTabs] = React.useState<string[]>(['Terminal 1', 'Terminal 2', 'Terminal 3']);\n  const [newTabNumber, setNewTabNumber] = React.useState<number>(4);\n  const tabComponentRef = React.useRef<any>();\n  const firstMount = React.useRef(true);\n\n  const onClose = (event: any, tabIndex: string | number) => {\n    const tabIndexNum = tabIndex as number;\n    let nextTabIndex = activeTabKey;\n    if (tabIndexNum < activeTabKey) {\n      // if a preceding tab is closing, keep focus on the new index of the current tab\n      nextTabIndex = activeTabKey - 1 > 0 ? activeTabKey - 1 : 0;\n    } else if (activeTabKey === tabs.length - 1) {\n      // if the closing tab is the last tab, focus the preceding tab\n      nextTabIndex = tabs.length - 2 > 0 ? tabs.length - 2 : 0;\n    }\n    setActiveTabKey(nextTabIndex);\n    setTabs(tabs.filter((tab, index) => index !== tabIndex));\n  };\n\n  const onAdd = () => {\n    setTabs([...tabs, `Terminal ${newTabNumber}`]);\n    setActiveTabKey(tabs.length);\n    setNewTabNumber(newTabNumber + 1);\n  };\n\n  React.useEffect(() => {\n    if (firstMount.current) {\n      firstMount.current = false;\n      return;\n    } else {\n      const first = tabComponentRef.current.tabList.current.childNodes[activeTabKey];\n      first && first.firstChild.focus();\n    }\n  }, [tabs]);\n\n  return (\n    <Tabs\n      activeKey={activeTabKey}\n      onSelect={(event: any, tabIndex: string | number) => setActiveTabKey(tabIndex as number)}\n      onClose={onClose}\n      onAdd={onAdd}\n      aria-label=\"Tabs in the addable/closeable example\"\n      addButtonAriaLabel=\"Add new tab\"\n      ref={tabComponentRef}\n    >\n      {tabs.map((tab, index) => (\n        <Tab\n          key={index}\n          eventKey={index}\n          title={<TabTitleText>{tab}</TabTitleText>}\n          closeButtonAriaLabel={`Close ${tab}`}\n          isCloseDisabled={tabs.length === 1}\n        >\n          {tab}\n        </Tab>\n      ))}\n    </Tabs>\n  );\n};\n","title":"Dynamic","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`To enable closeable tabs, pass the `}
        
        <code {...{"className":"ws-code"}}>
          {`onClose`}
        </code>
        {` property to `}
        
        <code {...{"className":"ws-code"}}>
          {`Tabs`}
        </code>
        {`, and to enable the add button, pass the `}
        
        <code {...{"className":"ws-code"}}>
          {`onAdd`}
        </code>
        {` property to `}
        
        <code {...{"className":"ws-code"}}>
          {`Tabs`}
        </code>
        {`. Aria labels may be controlled manually by passing `}
        
        <code {...{"className":"ws-code"}}>
          {`closeButtonAriaLabel`}
        </code>
        {` to `}
        
        <code {...{"className":"ws-code"}}>
          {`Tab`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`addButtonAriaLabel`}
        </code>
        {` to `}
        
        <code {...{"className":"ws-code"}}>
          {`Tabs`}
        </code>
        {`.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Most tab variations are available as open (default) or box style tabs. Select the 'isBox' checkbox to preview an example with box styled tabs.
The Tabs items background can be also toggled with 'Tab light variation' checkbox.
Similarly the 'Tab content light variation' checkbox affects the TabContent background.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["With tooltip react ref"])}
    {React.createElement(pageData.examples["Uncontrolled"])}
    {React.createElement(pageData.examples["Box light variation"])}
    {React.createElement(pageData.examples["Default overflow"])}
    {React.createElement(pageData.examples["Vertical"])}
    {React.createElement(pageData.examples["Vertical expandable"])}
    {React.createElement(pageData.examples["Vertical expandable uncontrolled"])}
    {React.createElement(pageData.examples["Inset"])}
    {React.createElement(pageData.examples["Page Insets"])}
    {React.createElement(pageData.examples["Icons and text"])}
    {React.createElement(pageData.examples["Tabs with sub tabs"])}
    {React.createElement(pageData.examples["Filled"])}
    {React.createElement(pageData.examples["Filled with icons"])}
    {React.createElement(pageData.examples["Using the nav element"])}
    {React.createElement(pageData.examples["Sub nav using the nav element"])}
    {React.createElement(pageData.examples["Separate content"])}
    {React.createElement(pageData.examples["Tab content with body and padding"])}
    {React.createElement(pageData.examples["Children mounting on click"])}
    {React.createElement(pageData.examples["Unmounting invisible children"])}
    {React.createElement(pageData.examples["Toggled separate content"])}
    {React.createElement(pageData.examples["Dynamic"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTabsReactDocs';
Component.pageData = pageData;

export default Component;
