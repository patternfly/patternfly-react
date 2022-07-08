import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';
import AlignCenterIcon from '@patternfly/react-icons/dist/esm/icons/align-center-icon';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
const pageData = {
  "id": "Overflow menu",
  "section": "components",
  "source": "react",
  "slug": "/components/overflow-menu/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/OverflowMenu/examples/OverflowMenu.md",
  "propComponents": [
    {
      "name": "OverflowMenu",
      "description": "",
      "props": [
        {
          "name": "breakpoint",
          "type": "'md' | 'lg' | 'xl' | '2xl'",
          "description": "Indicates breakpoint at which to switch between horizontal menu and vertical dropdown",
          "required": true
        },
        {
          "name": "children",
          "type": "any",
          "description": "Any elements that can be rendered in the menu"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the OverflowMenu."
        }
      ]
    },
    {
      "name": "OverflowMenuContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "any",
          "description": "Any elements that can be rendered in the menu"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the OverflowMenuContent"
        },
        {
          "name": "isPersistent",
          "type": "boolean",
          "description": "Modifies the overflow menu content visibility"
        }
      ]
    },
    {
      "name": "OverflowMenuControl",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "any",
          "description": "Any elements that can be rendered in the menu"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the OverflowMenuControl"
        },
        {
          "name": "hasAdditionalOptions",
          "type": "boolean",
          "description": "Triggers the overflow dropdown to persist at all viewport sizes"
        }
      ]
    },
    {
      "name": "OverflowMenuDropdownItem",
      "description": "",
      "props": [
        {
          "name": "index",
          "type": "number",
          "description": "Indicates the index of the list item"
        },
        {
          "name": "isShared",
          "type": "boolean",
          "description": "Indicates when a dropdown item shows and hides the corresponding list item",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "OverflowMenuGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "any",
          "description": "Any elements that can be rendered in the menu"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the OverflowMenuGroup"
        },
        {
          "name": "groupType",
          "type": "'button' | 'icon'",
          "description": "Indicates a button or icon group"
        },
        {
          "name": "isPersistent",
          "type": "boolean",
          "description": "Modifies the overflow menu group visibility",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "OverflowMenuItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "any",
          "description": "Any elements that can be rendered in the menu"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the OverflowMenuItem"
        },
        {
          "name": "isPersistent",
          "type": "boolean",
          "description": "Modifies the overflow menu item visibility",
          "defaultValue": "false"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-overflow-menu"
  ],
  "examples": [
    "Simple (responsive)",
    "Group types",
    "Multiple groups",
    "Persistent"
  ]
};
pageData.liveContext = {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon
};
pageData.examples = {
  'Simple (responsive)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core';\nimport { Dropdown, KebabToggle } from '@patternfly/react-core';\n\nclass SimpleOverflowMenu extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false\n    };\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    };\n  }\n\n  render() {\n    const { isOpen } = this.state;\n    const dropdownItems = [\n      <OverflowMenuDropdownItem key=\"item1\" isShared>Item 1</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"item2\" isShared>Item 2</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"item3\" isShared>Item 3</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"item4\" isShared>Item 4</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"item5\" isShared>Item 5</OverflowMenuDropdownItem>\n    ]\n    return (\n      <OverflowMenu breakpoint=\"lg\">\n        <OverflowMenuContent>\n          <OverflowMenuItem>Item</OverflowMenuItem>\n          <OverflowMenuItem>Item</OverflowMenuItem>\n          <OverflowMenuGroup>\n            <OverflowMenuItem>Item</OverflowMenuItem>\n            <OverflowMenuItem>Item</OverflowMenuItem>\n            <OverflowMenuItem>Item</OverflowMenuItem>\n          </OverflowMenuGroup>\n        </OverflowMenuContent>\n        <OverflowMenuControl>\n          <Dropdown\n            onSelect={this.onSelect}\n            toggle={<KebabToggle onToggle={this.onToggle} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            isFlipEnabled\n            menuAppendTo=\"parent\"\n          />\n        </OverflowMenuControl>\n      </OverflowMenu>\n    )\n  }\n}","title":"Simple (responsive)","lang":"js"}}>
      
    </Example>,
  'Group types': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core';\nimport { Dropdown, KebabToggle, Button, ButtonVariant } from '@patternfly/react-core';\nimport AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';\nimport AlignCenterIcon from '@patternfly/react-icons/dist/esm/icons/align-center-icon';\nimport AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';\n\nclass OverflowMenuGroupTypes extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false\n    };\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    };\n  }\n\n  render() {\n    const { isOpen } = this.state;\n    const dropdownItems = [\n      <OverflowMenuDropdownItem key=\"item1\" isShared>Item 1</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"item2\" isShared>Item 2</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"item3\" isShared>Item 3</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"primary\" isShared>Primary</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"secondary\" isShared>Secondary</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"tertiary\" isShared>Tertiary</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"action1\" isShared>Action 1</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"action2\" isShared>Action 2</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"action3\" isShared>Action 3</OverflowMenuDropdownItem>,\n    ];\n    return (\n      <OverflowMenu breakpoint=\"lg\">\n        <OverflowMenuContent>\n          <OverflowMenuGroup>\n            <OverflowMenuItem>Item</OverflowMenuItem>\n            <OverflowMenuItem>Item</OverflowMenuItem>\n            <OverflowMenuItem>Item</OverflowMenuItem>\n          </OverflowMenuGroup>\n          <OverflowMenuGroup groupType=\"button\">\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.primary}>Primary</Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.secondary}>Secondary</Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.tertiary}>Tertiary</Button>\n            </OverflowMenuItem>\n          </OverflowMenuGroup>\n          <OverflowMenuGroup groupType=\"icon\">\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.plain} aria-label=\"Align left\">\n                <AlignLeftIcon />\n              </Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.plain} aria-label=\"Align center\">\n                <AlignCenterIcon />\n              </Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.plain} aria-label=\"Align right\">\n                <AlignRightIcon />\n              </Button>\n            </OverflowMenuItem>\n          </OverflowMenuGroup>\n        </OverflowMenuContent>\n        <OverflowMenuControl>\n          <Dropdown\n            onSelect={this.onSelect}\n            toggle={<KebabToggle onToggle={this.onToggle} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            isFlipEnabled\n            menuAppendTo=\"parent\"\n          />\n        </OverflowMenuControl>\n      </OverflowMenu>\n    )\n  }\n}","title":"Group types","lang":"js"}}>
      
    </Example>,
  'Multiple groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core';\nimport { Dropdown, KebabToggle, Button, ButtonVariant } from '@patternfly/react-core';\nimport AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';\nimport AlignCenterIcon from '@patternfly/react-icons/dist/esm/icons/align-center-icon';\nimport AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';\n\nclass OverflowMenuAdditionalOptions extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false\n    };\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    };\n  }\n\n  render() {\n    const { isOpen } = this.state;\n    const dropdownItems = [\n      <OverflowMenuDropdownItem key=\"1\" isShared>Primary</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"2\" isShared>Secondary</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"3\" isShared>Tertiary</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"4\" isShared>Action 4</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"5\" isShared>Action 5</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"6\" isShared>Action 6</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"7\">Action 7</OverflowMenuDropdownItem>,\n    ];\n    return (\n      <OverflowMenu breakpoint=\"lg\">\n        <OverflowMenuContent>\n          <OverflowMenuGroup groupType=\"button\">\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.primary}>Primary</Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.secondary}>Secondary</Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.tertiary}>Tertiary</Button>\n            </OverflowMenuItem>\n          </OverflowMenuGroup>\n          <OverflowMenuGroup groupType=\"icon\">\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.plain} aria-label=\"Align left\">\n                <AlignLeftIcon />\n              </Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.plain} aria-label=\"Align center\">\n                <AlignCenterIcon />\n              </Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.plain} aria-label=\"Align right\">\n                <AlignRightIcon />\n              </Button>\n            </OverflowMenuItem>\n          </OverflowMenuGroup>\n        </OverflowMenuContent>\n        <OverflowMenuControl hasAdditionalOptions>\n          <Dropdown\n            onSelect={this.onSelect}\n            toggle={<KebabToggle onToggle={this.onToggle} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            isFlipEnabled\n            menuAppendTo=\"parent\"\n          />\n        </OverflowMenuControl>\n      </OverflowMenu>\n    )\n  }\n}","title":"Multiple groups","lang":"js"}}>
      
    </Example>,
  'Persistent': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core';\nimport { Dropdown, KebabToggle, Button, ButtonVariant } from '@patternfly/react-core';\n\nclass OverflowMenuPersist extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false\n    };\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    };\n  }\n\n  render() {\n    const { isOpen } = this.state;\n    const dropdownItems = [\n      <OverflowMenuDropdownItem key=\"secondary\" isShared>Secondary</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"tertiary\" isShared>Tertiary</OverflowMenuDropdownItem>,\n      <OverflowMenuDropdownItem key=\"action\">Action 4</OverflowMenuDropdownItem>\n    ];\n    return (\n      <OverflowMenu breakpoint=\"lg\">\n        <OverflowMenuContent isPersistent>\n          <OverflowMenuGroup groupType=\"button\" isPersistent>\n            <OverflowMenuItem isPersistent>\n              <Button variant={ButtonVariant.primary}>Primary</Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.secondary}>Secondary</Button>\n            </OverflowMenuItem>\n            <OverflowMenuItem>\n              <Button variant={ButtonVariant.tertiary}>Tertiary</Button>\n            </OverflowMenuItem>\n          </OverflowMenuGroup>\n        </OverflowMenuContent>\n        <OverflowMenuControl hasAdditionalOptions>\n          <Dropdown\n            onSelect={this.onSelect}\n            toggle={<KebabToggle onToggle={this.onToggle} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            isFlipEnabled\n            menuAppendTo=\"parent\"\n          />\n        </OverflowMenuControl>\n      </OverflowMenu>\n    )\n  }\n}","title":"Persistent","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Simple (responsive)"])}
    {React.createElement(pageData.examples["Group types"])}
    {React.createElement(pageData.examples["Multiple groups"])}
    {React.createElement(pageData.examples["Persistent"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsOverflowMenuReactDocs';
Component.pageData = pageData;

export default Component;
