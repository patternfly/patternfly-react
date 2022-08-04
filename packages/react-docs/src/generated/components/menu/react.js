import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
const pageData = {
  "id": "Menu",
  "section": "components",
  "source": "react",
  "slug": "/components/menu/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Menu/examples/Menu.md",
  "propComponents": [
    {
      "name": "Menu",
      "description": "",
      "props": [
        {
          "name": "activeItemId",
          "type": "string | number",
          "description": "itemId of the currently active item. You can also specify isActive on the MenuItem.",
          "beta": true
        },
        {
          "name": "activeMenu",
          "type": "string",
          "description": "ID of the currently active menu for the drilldown variant",
          "beta": true
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessibility label"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of the Menu"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Menu"
        },
        {
          "name": "containsDrilldown",
          "type": "boolean",
          "description": "Indicates if menu contains a drilldown menu",
          "beta": true
        },
        {
          "name": "containsFlyout",
          "type": "boolean",
          "description": "Indicates if menu contains a flyout menu",
          "beta": true
        },
        {
          "name": "drilldownItemPath",
          "type": "string[]",
          "description": "Indicates the path of drilled in menu itemIds",
          "beta": true
        },
        {
          "name": "drilledInMenus",
          "type": "string[]",
          "description": "Array of menus that are drilled in",
          "beta": true
        },
        {
          "name": "hasSearchInput",
          "type": "boolean",
          "description": "Search input of menu"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the menu"
        },
        {
          "name": "isMenuDrilledIn",
          "type": "boolean",
          "description": "Indicates if a menu is drilled into",
          "beta": true
        },
        {
          "name": "isNavFlyout",
          "type": "boolean",
          "description": "Indicating that the menu should have nav flyout styling",
          "beta": true
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Indicates if the menu should be without the outer box-shadow"
        },
        {
          "name": "isRootMenu",
          "type": "boolean",
          "description": "Internal flag indicating if the Menu is the root of a menu tree"
        },
        {
          "name": "isScrollable",
          "type": "boolean",
          "description": "Indicates if the menu should be srollable"
        },
        {
          "name": "onActionClick",
          "type": "(event?: any, itemId?: any, actionId?: any) => void",
          "description": "Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction."
        },
        {
          "name": "onDrillIn",
          "type": "(fromItemId: string, toItemId: string, itemId: string) => void",
          "description": "Callback for drilling into a submenu",
          "beta": true
        },
        {
          "name": "onDrillOut",
          "type": "(toItemId: string, itemId: string) => void",
          "description": "Callback for drilling out of a submenu",
          "beta": true
        },
        {
          "name": "onGetMenuHeight",
          "type": "(menuId: string, height: number) => void",
          "description": "Callback for collecting menu heights",
          "beta": true
        },
        {
          "name": "onSearchInputChange",
          "type": "(\n  event: React.FormEvent<HTMLInputElement> | React.SyntheticEvent<HTMLButtonElement>,\n  value: string\n) => void",
          "description": "A callback for when the input value changes."
        },
        {
          "name": "onSelect",
          "type": "(event?: React.MouseEvent, itemId?: string | number) => void",
          "description": "Callback for updating when item selection changes. You can also specify onClick on the MenuItem."
        },
        {
          "name": "parentMenu",
          "type": "string",
          "description": "ID of parent menu for drilldown menus",
          "beta": true
        },
        {
          "name": "selected",
          "type": "any | any[]",
          "description": "Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem."
        }
      ]
    },
    {
      "name": "MenuList",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of menu list",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the menu list"
        }
      ]
    },
    {
      "name": "MenuItem",
      "description": "",
      "props": [
        {
          "name": "actions",
          "type": "React.ReactNode",
          "description": "Render item with one or more actions"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessibility label"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the menu list item."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the menu list item"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Component used to render the menu item"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "Description of the menu item"
        },
        {
          "name": "direction",
          "type": "'down' | 'up'",
          "description": "Sub menu direction",
          "beta": true
        },
        {
          "name": "drilldownMenu",
          "type": "React.ReactNode | (() => React.ReactNode)",
          "description": "Drilldown menu of the item. Should be a Menu or DrilldownMenu type.",
          "beta": true
        },
        {
          "name": "flyoutMenu",
          "type": "React.ReactElement",
          "description": "Flyout menu",
          "beta": true
        },
        {
          "name": "hasCheck",
          "type": "boolean",
          "description": "Flag indicating the item has a checkbox",
          "beta": true
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Render item with icon"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Flag indicating whether the item is active"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Render item as disabled option"
        },
        {
          "name": "isExternalLink",
          "type": "boolean",
          "description": "Render external link icon"
        },
        {
          "name": "isFavorited",
          "type": "boolean",
          "description": "Flag indicating if the item is favorited"
        },
        {
          "name": "isLoadButton",
          "type": "boolean",
          "description": "Flag indicating if the item causes a load"
        },
        {
          "name": "isLoading",
          "type": "boolean",
          "description": "Flag indicating a loading state"
        },
        {
          "name": "isOnPath",
          "type": "boolean",
          "description": "True if item is on current selection path",
          "beta": true
        },
        {
          "name": "isSelected",
          "type": "boolean",
          "description": "Flag indicating if the option is selected"
        },
        {
          "name": "itemId",
          "type": "any",
          "description": "Identifies the component in the Menu onSelect or onActionClick callback"
        },
        {
          "name": "onClick",
          "type": "(event?: any) => void",
          "description": "Callback for item click"
        },
        {
          "name": "onShowFlyout",
          "type": "(event?: any) => void",
          "description": "Callback function when mouse leaves trigger",
          "beta": true
        },
        {
          "name": "to",
          "type": "string",
          "description": "Target navigation link"
        }
      ]
    },
    {
      "name": "MenuItemAction",
      "description": "",
      "props": [
        {
          "name": "actionId",
          "type": "any",
          "description": "Identifies the action item in the onActionClick on the Menu"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessibility label"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the action button"
        },
        {
          "name": "icon",
          "type": "'favorites' | React.ReactNode",
          "description": "The action icon to use"
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Disables action, can also be specified on the MenuItem instead"
        },
        {
          "name": "isFavorited",
          "type": "boolean",
          "description": "Flag indicating if the item is favorited"
        },
        {
          "name": "onClick",
          "type": "(event?: any) => void",
          "description": "Callback on action click, can also specify onActionClick on the Menu instead"
        }
      ]
    },
    {
      "name": "MenuContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Items within group"
        },
        {
          "name": "getHeight",
          "type": "(height: string) => void",
          "description": "Callback to return the height of the menu content"
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "maxMenuHeight",
          "type": "string",
          "description": "Maximum height of menu content"
        },
        {
          "name": "menuHeight",
          "type": "string",
          "description": "Height of the menu content"
        }
      ]
    },
    {
      "name": "MenuInput",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Items within input"
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-menu"
  ],
  "examples": [
    "Basic",
    "With icons",
    "With checkbox",
    "Filtering with text input",
    "With links",
    "With separator(s)",
    "With titled groups",
    "With description",
    "With actions",
    "With favorites",
    "Option single select",
    "Option multi select",
    "With drilldown",
    "With drilldown - initial drill in state",
    "With drilldown - submenu functions",
    "With drilldown breadcrumbs",
    "Scrollable",
    "Scrollable with custom menu height",
    "With footer",
    "With view more"
  ]
};
pageData.liveContext = {
  BarsIcon,
  ClipboardIcon,
  CodeBranchIcon,
  LayerGroupIcon,
  CubeIcon,
  TableIcon,
  BellIcon,
  StorageDomainIcon,
  AngleLeftIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem, Checkbox } from '@patternfly/react-core';\n\nclass MenuBasicList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0,\n      isPlain: false\n    };\n    this.onSelect = (event, itemId) => {\n      console.log(`clicked ${itemId}`);\n      this.setState({\n        activeItem: itemId\n      });\n    };\n    this.togglePlain = checked => {\n      this.setState({\n        isPlain: checked\n      });\n    };\n  }\n\n  render() {\n    const { activeItem, isPlain } = this.state;\n    return (\n      <React.Fragment>\n        <Menu activeItemId={activeItem} onSelect={this.onSelect} isPlain={isPlain}>\n          <MenuContent>\n            <MenuList>\n              <MenuItem itemId={0}>Action</MenuItem>\n              <MenuItem\n                itemId={1}\n                to=\"#default-link2\"\n                // just for demo so that navigation is not triggered\n                onClick={event => event.preventDefault()}\n              >\n                Link\n              </MenuItem>\n              <MenuItem isDisabled>Disabled action</MenuItem>\n              <MenuItem isDisabled to=\"#default-link4\">\n                Disabled link\n              </MenuItem>\n            </MenuList>\n          </MenuContent>\n        </Menu>\n        <div style={{ marginTop: 20 }}>\n          <Checkbox\n            label=\"Plain menu\"\n            isChecked={isPlain}\n            onChange={this.togglePlain}\n            aria-label=\"plain menu checkbox\"\n            id=\"toggle-plain\"\n            name=\"toggle-plain\"\n          />\n        </div>\n      </React.Fragment>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\nimport LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\n\nclass MenuIconsList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (event, itemId) => {\n      this.setState({\n        activeItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Menu onSelect={this.onSelect} activeItemId={activeItem}>\n        <MenuContent>\n          <MenuList>\n            <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId={0}>\n              From git\n            </MenuItem>\n            <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId={1}>\n              Container image\n            </MenuItem>\n            <MenuItem icon={<CubeIcon aria-hidden />} itemId={2}>\n              Docker file\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"With icons","lang":"js"}}>
      
    </Example>,
  'With checkbox': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\n\nexport const MenuCheckboxList: React.FunctionComponent = () => {\n  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);\n\n  /* eslint no-unused-vars: [\"error\", {\"args\": \"after-used\"}] */\n  const onSelect = (event: React.MouseEvent<Element, MouseEvent>, itemId: number | string) => {\n    const item = itemId as number;\n    if (selectedItems.includes(item)) {\n      setSelectedItems(selectedItems.filter(id => id !== item));\n    } else {\n      setSelectedItems([...selectedItems, item]);\n    }\n  };\n\n  return (\n    <Menu onSelect={onSelect} selected={selectedItems}>\n      <MenuContent>\n        <MenuList>\n          <MenuItem hasCheck itemId={0} isSelected={selectedItems.includes(0)}>\n            Checkbox 1\n          </MenuItem>\n          <MenuItem hasCheck itemId={1} isSelected={selectedItems.includes(1)}>\n            Checkbox 2\n          </MenuItem>\n          <MenuItem hasCheck itemId={2} isDisabled>\n            Checkbox 3\n          </MenuItem>\n        </MenuList>\n      </MenuContent>\n    </Menu>\n  );\n};\n","title":"With checkbox","lang":"ts","isBeta":true}}>
      
    </Example>,
  'Filtering with text input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuList, MenuItem, MenuContent, MenuInput, TextInput, Divider } from '@patternfly/react-core';\n\nclass MenuWithFiltering extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0,\n      input: ''\n    };\n\n    this.onSelect = (event, itemId) => {\n      this.setState({\n        activeItem: itemId\n      });\n    };\n\n    this.handleTextInputChange = (value, field) => {\n      this.setState({ [field]: value });\n    };\n  }\n\n  render() {\n    const { activeItem, input } = this.state;\n    const menuListItemsText = ['Action 1', 'Action 2', 'Action 3'];\n\n    const menuListItems = menuListItemsText\n      .filter(item => !input || item.toLowerCase().includes(input.toString().toLowerCase()))\n      .map((currentValue, index) => (\n        <MenuItem key={currentValue} itemId={index}>\n          {currentValue}\n        </MenuItem>\n      ));\n    if (input && menuListItems.length === 0) {\n      menuListItems.push(\n        <MenuItem isDisabled key=\"no result\">\n          No results found\n        </MenuItem>\n      );\n    }\n\n    return (\n      <Menu onSelect={this.onSelect} activeItemId={activeItem}>\n        <MenuInput>\n          <TextInput\n            value={input}\n            aria-label=\"Filter menu items\"\n            iconVariant=\"search\"\n            type=\"search\"\n            onChange={value => this.handleTextInputChange(value, 'input')}\n          />\n        </MenuInput>\n        <Divider />\n        <MenuContent>\n          <MenuList>{menuListItems}</MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"Filtering with text input","lang":"js"}}>
      
    </Example>,
  'With links': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\n\nclass MenuWithLinks extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (event, itemId) => {\n      this.setState({\n        activeItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Menu onSelect={this.onSelect} activeItemId={activeItem}>\n        <MenuContent>\n          <MenuList>\n            <MenuItem isExternalLink to=\"#default-link1\" itemId={0}>\n              Link 1\n            </MenuItem>\n            <MenuItem isExternalLink to=\"#default-link2\" itemId={1}>\n              Link 2\n            </MenuItem>\n            <MenuItem to=\"#default-link3\" itemId={2}>\n              Link 3\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"With links","lang":"js"}}>
      
    </Example>,
  'With separator(s)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Divider, Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\n\nclass MenuWithSeparators extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (event, itemId) => {\n      this.setState({\n        activeItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Menu onSelect={this.onSelect} activeItemId={activeItem}>\n        <MenuContent>\n          <MenuList>\n            <MenuItem itemId={0}>Action 1</MenuItem>\n            <MenuItem itemId={1}>Action 2</MenuItem>\n            <Divider component=\"li\" />\n            <MenuItem itemId={2}>Action 3</MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"With separator(s)","lang":"js"}}>
      
    </Example>,
  'With titled groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuGroup, MenuList, MenuItem, Divider } from '@patternfly/react-core';\n\nclass MenuWithTitledGroups extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (event, itemId) => {\n      this.setState({\n        activeItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Menu onSelect={this.onSelect} activeItemId={activeItem}>\n        <MenuContent>\n          <MenuGroup>\n            <MenuList>\n              <MenuItem to=\"#\" itemId={0}>\n                Link not in group\n              </MenuItem>\n            </MenuList>\n          </MenuGroup>\n          <Divider />\n          <MenuGroup label=\"Group 1\">\n            <MenuList>\n              <MenuItem to=\"#\" itemId={1}>\n                Link 1\n              </MenuItem>\n              <MenuItem itemId={2}>Link 2</MenuItem>\n            </MenuList>\n          </MenuGroup>\n          <Divider />\n          <MenuGroup label=\"Group 2\">\n            <MenuList>\n              <MenuItem to=\"#\" itemId={3}>\n                Link 1\n              </MenuItem>\n              <MenuItem to=\"#\" itemId={4}>\n                Link 2\n              </MenuItem>\n            </MenuList>\n          </MenuGroup>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"With titled groups","lang":"js"}}>
      
    </Example>,
  'With description': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\n\nclass MenuWithDescription extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (event, itemId) => {\n      this.setState({\n        activeItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Menu onSelect={this.onSelect} activeItemId={activeItem}>\n        <MenuContent>\n          <MenuList>\n            <MenuItem icon={<CodeBranchIcon aria-hidden />} description=\"Description\" itemId={0}>\n              Action 1\n            </MenuItem>\n            <MenuItem isDisabled icon={<CodeBranchIcon aria-hidden />} description=\"Description\" itemId={1}>\n              Action 2 disabled\n            </MenuItem>\n            <MenuItem\n              icon={<CodeBranchIcon aria-hidden />}\n              description=\"Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est.\"\n              itemId={2}\n            >\n              Action 3\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"With description","lang":"js"}}>
      
    </Example>,
  'With actions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuGroup, MenuList, MenuItem, MenuItemAction } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';\nimport ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\n\nclass MenuWithActions extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0,\n      isActionMenuOpen: false,\n      selectedItems: [0, 2, 3]\n    };\n\n    this.onSelect = (event, itemId) => {\n      if (this.state.selectedItems.indexOf(itemId) !== -1) {\n        this.setState({\n          selectedItems: this.state.selectedItems.filter(id => id !== itemId)\n        });\n      } else {\n        this.setState({\n          selectedItems: [...this.state.selectedItems, itemId]\n        });\n      }\n    };\n  }\n\n  render() {\n    const { activeItem, selectedItems } = this.state;\n\n    return (\n      <Menu\n        onSelect={this.onSelect}\n        onActionClick={(event, itemId, actionId) => console.log(`clicked on ${itemId} - ${actionId}`)}\n        activeItemId={activeItem}\n      >\n        <MenuContent>\n          <MenuGroup label=\"Actions\">\n            <MenuList>\n              <MenuItem\n                isSelected={selectedItems.indexOf(0) !== -1}\n                actions={\n                  <MenuItemAction\n                    icon={<CodeBranchIcon aria-hidden />}\n                    actionId=\"code\"\n                    onClick={() => console.log('clicked on code icon')}\n                    aria-label=\"Code\"\n                  />\n                }\n                description=\"This is a description\"\n                itemId={0}\n              >\n                Item 1\n              </MenuItem>\n              <MenuItem\n                isDisabled\n                isSelected={selectedItems.indexOf(1) !== -1}\n                actions={<MenuItemAction icon={<BellIcon aria-hidden />} actionId=\"alert\" aria-label=\"Alert\" />}\n                description=\"This is a description\"\n                itemId={1}\n              >\n                Item 2\n              </MenuItem>\n              <MenuItem\n                isSelected={selectedItems.indexOf(2) !== -1}\n                actions={<MenuItemAction icon={<ClipboardIcon aria-hidden />} actionId=\"copy\" aria-label=\"Copy\" />}\n                itemId={2}\n              >\n                Item 3\n              </MenuItem>\n              <MenuItem\n                isSelected={selectedItems.indexOf(3) !== -1}\n                actions={<MenuItemAction icon={<BarsIcon aria-hidden />} actionId=\"expand\" aria-label=\"Expand\" />}\n                description=\"This is a description\"\n                itemId={3}\n              >\n                Item 4\n              </MenuItem>\n            </MenuList>\n          </MenuGroup>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"With actions","lang":"js"}}>
      
    </Example>,
  'With favorites': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuItem, MenuItemAction, MenuGroup, MenuList, Divider } from '@patternfly/react-core';\nimport BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';\nimport ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\n\nclass MenuWithFavorites extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0,\n      favorites: []\n    };\n\n    this.onSelect = (event, itemId) => {\n      this.setState({\n        activeItem: itemId\n      });\n    };\n    this.onFavorite = (event, itemId, actionId) => {\n      console.log(`clicked ${itemId} - ${actionId}`);\n      if (actionId === 'fav') {\n        const isFavorite = this.state.favorites.includes(itemId);\n        if (isFavorite) {\n          this.setState({\n            favorites: this.state.favorites.filter(fav => fav !== itemId)\n          });\n        } else {\n          this.setState({\n            favorites: [...this.state.favorites, itemId]\n          });\n        }\n      }\n    };\n  }\n\n  render() {\n    const { activeItem, favorites } = this.state;\n\n    const items = [\n      {\n        text: 'Item 1',\n        description: 'Description 1',\n        itemId: 'item-1',\n        action: <BarsIcon aria-hidden />,\n        actionId: 'bars'\n      },\n      {\n        text: 'Item 2',\n        description: 'Description 2',\n        itemId: 'item-2',\n        action: <ClipboardIcon aria-hidden />,\n        actionId: 'clipboard'\n      },\n      {\n        text: 'Item 3',\n        description: 'Description 3',\n        itemId: 'item-3',\n        action: <BellIcon aria-hidden />,\n        actionId: 'bell'\n      }\n    ];\n\n    return (\n      <Menu onSelect={this.onSelect} onActionClick={this.onFavorite} activeItemId={activeItem}>\n        <MenuContent>\n          {favorites.length > 0 && (\n            <React.Fragment>\n              <MenuGroup label=\"Favorites\">\n                <MenuList>\n                  {items\n                    // map the items into the favorites group that have been favorited\n                    .filter(item => favorites.includes(item.itemId))\n                    .map(item => {\n                      const { text, description, itemId, action, actionId } = item;\n                      return (\n                        <MenuItem\n                          key={`fav-${itemId}`}\n                          isFavorited\n                          description={description}\n                          itemId={itemId}\n                          actions={<MenuItemAction actionId={actionId} icon={action} aria-label={actionId} />}\n                        >\n                          {text}\n                        </MenuItem>\n                      );\n                    })}\n                </MenuList>\n              </MenuGroup>\n              <Divider />\n            </React.Fragment>\n          )}\n          <MenuGroup label=\"All actions\">\n            <MenuList>\n              {items.map(item => {\n                const { text, description, itemId, action, actionId } = item;\n                const isFavorited = favorites.includes(item.itemId);\n                return (\n                  <MenuItem\n                    key={itemId}\n                    isFavorited={isFavorited}\n                    description={description}\n                    itemId={itemId}\n                    actions={<MenuItemAction actionId={actionId} icon={action} aria-label={actionId} />}\n                  >\n                    {text}\n                  </MenuItem>\n                );\n              })}\n            </MenuList>\n          </MenuGroup>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"With favorites","lang":"js"}}>
      
    </Example>,
  'Option single select': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\nimport TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';\n\nclass MenuOptionSingleSelect extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0,\n      selectedItem: 0\n    };\n\n    this.onSelect = (event, itemId) => {\n      this.setState({\n        activeItem: itemId,\n        selectedItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem, selectedItem } = this.state;\n    return (\n      <Menu onSelect={this.onSelect} activeItemId={activeItem} selected={selectedItem}>\n        <MenuContent>\n          <MenuList>\n            <MenuItem itemId={0}>Option 1</MenuItem>\n            <MenuItem itemId={1}>Option 2</MenuItem>\n            <MenuItem icon={<TableIcon aria-hidden />} itemId={2}>\n              Option 3\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"Option single select","lang":"js"}}>
      
    </Example>,
  'Option multi select': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\nimport TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';\n\nclass MenuOptionMultiSelect extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0,\n      selectedItems: []\n    };\n    this.onSelect = (event, itemId) => {\n      if (this.state.selectedItems.indexOf(itemId) !== -1) {\n        this.setState({\n          selectedItems: this.state.selectedItems.filter(id => id !== itemId)\n        });\n      } else {\n        this.setState({\n          selectedItems: [...this.state.selectedItems, itemId]\n        });\n      }\n    };\n  }\n\n  render() {\n    const { activeItem, selectedItems } = this.state;\n    return (\n      <Menu onSelect={this.onSelect} activeItemId={activeItem} selected={selectedItems}>\n        <MenuContent>\n          <MenuList>\n            <MenuItem itemId={0}>Option 1</MenuItem>\n            <MenuItem itemId={1}>Option 2</MenuItem>\n            <MenuItem icon={<TableIcon aria-hidden />} itemId={2}>\n              Option 3\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"Option multi select","lang":"js"}}>
      
    </Example>,
  'With drilldown': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem, Divider, DrilldownMenu } from '@patternfly/react-core';\nimport StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\nimport LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\n\nexport const MenuDrilldown: React.FunctionComponent = () => {\n  const [menuDrilledIn, setMenuDrilledIn] = React.useState<string[]>([]);\n  const [drilldownPath, setDrilldownPath] = React.useState<string[]>([]);\n  const [menuHeights, setMenuHeights] = React.useState<any>({});\n  const [activeMenu, setActiveMenu] = React.useState<string>('rootMenu');\n\n  const drillIn = (fromMenuId: string, toMenuId: string, pathId: string) => {\n    setMenuDrilledIn([...menuDrilledIn, fromMenuId]);\n    setDrilldownPath([...drilldownPath, pathId]);\n    setActiveMenu(toMenuId);\n  };\n\n  const drillOut = (toMenuId: string) => {\n    const menuDrilledInSansLast = menuDrilledIn.slice(0, menuDrilledIn.length - 1);\n    const pathSansLast = drilldownPath.slice(0, drilldownPath.length - 1);\n    setMenuDrilledIn(menuDrilledInSansLast);\n    setDrilldownPath(pathSansLast);\n    setActiveMenu(toMenuId);\n  };\n\n  const setHeight = (menuId: string, height: number) => {\n    if (menuHeights[menuId] === undefined) {\n      setMenuHeights({ ...menuHeights, [menuId]: height });\n    }\n  };\n\n  return (\n    <Menu\n      id=\"rootMenu\"\n      containsDrilldown\n      drilldownItemPath={drilldownPath}\n      drilledInMenus={menuDrilledIn}\n      activeMenu={activeMenu}\n      onDrillIn={drillIn}\n      onDrillOut={drillOut}\n      onGetMenuHeight={setHeight}\n    >\n      <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>\n        <MenuList>\n          <MenuItem\n            itemId=\"group:start_rollout\"\n            direction=\"down\"\n            drilldownMenu={\n              <DrilldownMenu id=\"drilldownMenuStart\">\n                <MenuItem itemId=\"group:start_rollout_breadcrumb\" direction=\"up\">\n                  Start rollout\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem\n                  itemId=\"group:app_grouping\"\n                  description=\"Groups A-C\"\n                  direction=\"down\"\n                  drilldownMenu={\n                    <DrilldownMenu id=\"drilldownMenuStartGrouping\">\n                      <MenuItem itemId=\"group:app_grouping_breadcrumb\" direction=\"up\">\n                        Application grouping\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"group_a\">Group A</MenuItem>\n                      <MenuItem itemId=\"group_b\">Group B</MenuItem>\n                      <MenuItem itemId=\"group_c\">Group C</MenuItem>\n                    </DrilldownMenu>\n                  }\n                >\n                  Application grouping\n                </MenuItem>\n                <MenuItem itemId=\"count\">Count</MenuItem>\n                <MenuItem\n                  itemId=\"group:labels\"\n                  direction=\"down\"\n                  drilldownMenu={\n                    <DrilldownMenu id=\"drilldownMenuStartLabels\">\n                      <MenuItem itemId=\"group:labels_breadcrumb\" direction=\"up\">\n                        Labels\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"label_1\">Label 1</MenuItem>\n                      <MenuItem itemId=\"label_2\">Label 2</MenuItem>\n                      <MenuItem itemId=\"label_3\">Label 3</MenuItem>\n                    </DrilldownMenu>\n                  }\n                >\n                  Labels\n                </MenuItem>\n                <MenuItem itemId=\"annotations\">Annotations</MenuItem>\n              </DrilldownMenu>\n            }\n          >\n            Start rollout\n          </MenuItem>\n          <MenuItem\n            itemId=\"group:pause_rollout\"\n            direction=\"down\"\n            drilldownMenu={\n              <DrilldownMenu id=\"drilldownMenuPause\">\n                <MenuItem itemId=\"group:pause_rollout_breadcrumb\" direction=\"up\">\n                  Pause rollouts\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem\n                  itemId=\"group:app_grouping\"\n                  description=\"Groups A-C\"\n                  direction=\"down\"\n                  drilldownMenu={\n                    <DrilldownMenu id=\"drilldownMenuGrouping\">\n                      <MenuItem itemId=\"group:app_grouping_breadcrumb\" direction=\"up\">\n                        Application grouping\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"group_a\">Group A</MenuItem>\n                      <MenuItem itemId=\"group_b\">Group B</MenuItem>\n                      <MenuItem itemId=\"group_c\">Group C</MenuItem>\n                    </DrilldownMenu>\n                  }\n                >\n                  Application grouping\n                </MenuItem>\n                <MenuItem itemId=\"count\">Count</MenuItem>\n                <MenuItem\n                  itemId=\"group:labels\"\n                  direction=\"down\"\n                  drilldownMenu={\n                    <DrilldownMenu id=\"drilldownMenuLabels\">\n                      <MenuItem itemId=\"group:labels_breadcrumb\" direction=\"up\">\n                        Labels\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"label_1\">Label 1</MenuItem>\n                      <MenuItem itemId=\"label_2\">Label 2</MenuItem>\n                      <MenuItem itemId=\"label_3\">Label 3</MenuItem>\n                    </DrilldownMenu>\n                  }\n                >\n                  Labels\n                </MenuItem>\n                <MenuItem itemId=\"annotations\">Annotations</MenuItem>\n              </DrilldownMenu>\n            }\n          >\n            Pause rollouts\n          </MenuItem>\n          <MenuItem\n            itemId=\"group:storage\"\n            icon={<StorageDomainIcon aria-hidden />}\n            direction=\"down\"\n            drilldownMenu={\n              <DrilldownMenu id=\"drilldownMenuStorage\">\n                <MenuItem itemId=\"group:storage_breadcrumb\" icon={<StorageDomainIcon aria-hidden />} direction=\"up\">\n                  Add storage\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId=\"git\">\n                  From git\n                </MenuItem>\n                <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId=\"container\">\n                  Container image\n                </MenuItem>\n                <MenuItem icon={<CubeIcon aria-hidden />} itemId=\"docker\">\n                  Docker file\n                </MenuItem>\n              </DrilldownMenu>\n            }\n          >\n            Add storage\n          </MenuItem>\n          <MenuItem itemId=\"edit\">Edit</MenuItem>\n          <MenuItem itemId=\"delete_deployment\">Delete deployment config</MenuItem>\n        </MenuList>\n      </MenuContent>\n    </Menu>\n  );\n};\n","title":"With drilldown","lang":"ts","isBeta":true}}>
      
    </Example>,
  'With drilldown - initial drill in state': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem, Divider, DrilldownMenu } from '@patternfly/react-core';\nimport StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\nimport LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\n\nexport const MenuDrilldownInitialState: React.FunctionComponent = () => {\n  const [menuDrilledIn, setMenuDrilledIn] = React.useState<string[]>(['rootMenu', 'drilldownMenuStart']);\n  const [drilldownPath, setDrilldownPath] = React.useState<string[]>(['group:start_rollout', 'group:app_grouping']);\n  const [menuHeights, setMenuHeights] = React.useState<any>({ rootMenu: 216 }); // The root menu height must be defined when starting from a drilled in state\n  const [activeMenu, setActiveMenu] = React.useState<string>('drilldownMenuStartGrouping');\n\n  const drillIn = (fromMenuId: string, toMenuId: string, pathId: string) => {\n    setMenuDrilledIn([...menuDrilledIn, fromMenuId]);\n    setDrilldownPath([...drilldownPath, pathId]);\n    setActiveMenu(toMenuId);\n  };\n\n  const drillOut = (toMenuId: string) => {\n    const menuDrilledInSansLast = menuDrilledIn.slice(0, menuDrilledIn.length - 1);\n    const pathSansLast = drilldownPath.slice(0, drilldownPath.length - 1);\n    setMenuDrilledIn(menuDrilledInSansLast);\n    setDrilldownPath(pathSansLast);\n    setActiveMenu(toMenuId);\n  };\n\n  const setHeight = (menuId: string, height: number) => {\n    if (menuHeights[menuId] === undefined || (menuId !== 'rootMenu' && menuHeights[menuId] !== height)) {\n      setMenuHeights({ ...menuHeights, [menuId]: height });\n    }\n  };\n\n  return (\n    <Menu\n      id=\"rootMenu\"\n      containsDrilldown\n      drilldownItemPath={drilldownPath}\n      drilledInMenus={menuDrilledIn}\n      activeMenu={activeMenu}\n      onDrillIn={drillIn}\n      onDrillOut={drillOut}\n      onGetMenuHeight={setHeight}\n    >\n      <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>\n        <MenuList>\n          <MenuItem\n            itemId=\"group:start_rollout\"\n            direction=\"down\"\n            drilldownMenu={\n              <DrilldownMenu id=\"drilldownMenuStart\">\n                <MenuItem itemId=\"group:start_rollout_breadcrumb\" direction=\"up\">\n                  Start rollout\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem\n                  itemId=\"group:app_grouping\"\n                  description=\"Groups A-C\"\n                  direction=\"down\"\n                  drilldownMenu={\n                    <DrilldownMenu id=\"drilldownMenuStartGrouping\">\n                      <MenuItem itemId=\"group:app_grouping_breadcrumb\" direction=\"up\">\n                        Application grouping\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"group_a\">Group A</MenuItem>\n                      <MenuItem itemId=\"group_b\">Group B</MenuItem>\n                      <MenuItem itemId=\"group_c\">Group C</MenuItem>\n                    </DrilldownMenu>\n                  }\n                >\n                  Application grouping\n                </MenuItem>\n                <MenuItem itemId=\"count\">Count</MenuItem>\n                <MenuItem\n                  itemId=\"group:labels\"\n                  direction=\"down\"\n                  drilldownMenu={\n                    <DrilldownMenu id=\"drilldownMenuStartLabels\">\n                      <MenuItem itemId=\"group:labels_breadcrumb\" direction=\"up\">\n                        Labels\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"label_1\">Label 1</MenuItem>\n                      <MenuItem itemId=\"label_2\">Label 2</MenuItem>\n                      <MenuItem itemId=\"label_3\">Label 3</MenuItem>\n                    </DrilldownMenu>\n                  }\n                >\n                  Labels\n                </MenuItem>\n                <MenuItem itemId=\"annotations\">Annotations</MenuItem>\n              </DrilldownMenu>\n            }\n          >\n            Start rollout\n          </MenuItem>\n          <MenuItem\n            itemId=\"group:pause_rollout\"\n            direction=\"down\"\n            drilldownMenu={\n              <DrilldownMenu id=\"drilldownMenuPause\">\n                <MenuItem itemId=\"group:pause_rollout_breadcrumb\" direction=\"up\">\n                  Pause rollouts\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem\n                  itemId=\"group:app_grouping\"\n                  description=\"Groups A-C\"\n                  direction=\"down\"\n                  drilldownMenu={\n                    <DrilldownMenu id=\"drilldownMenuGrouping\">\n                      <MenuItem itemId=\"group:app_grouping_breadcrumb\" direction=\"up\">\n                        Application grouping\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"group_a\">Group A</MenuItem>\n                      <MenuItem itemId=\"group_b\">Group B</MenuItem>\n                      <MenuItem itemId=\"group_c\">Group C</MenuItem>\n                    </DrilldownMenu>\n                  }\n                >\n                  Application grouping\n                </MenuItem>\n                <MenuItem itemId=\"count\">Count</MenuItem>\n                <MenuItem\n                  itemId=\"group:labels\"\n                  direction=\"down\"\n                  drilldownMenu={\n                    <DrilldownMenu id=\"drilldownMenuLabels\">\n                      <MenuItem itemId=\"group:labels_breadcrumb\" direction=\"up\">\n                        Labels\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"label_1\">Label 1</MenuItem>\n                      <MenuItem itemId=\"label_2\">Label 2</MenuItem>\n                      <MenuItem itemId=\"label_3\">Label 3</MenuItem>\n                    </DrilldownMenu>\n                  }\n                >\n                  Labels\n                </MenuItem>\n                <MenuItem itemId=\"annotations\">Annotations</MenuItem>\n              </DrilldownMenu>\n            }\n          >\n            Pause rollouts\n          </MenuItem>\n          <MenuItem\n            itemId=\"group:storage\"\n            icon={<StorageDomainIcon aria-hidden />}\n            direction=\"down\"\n            drilldownMenu={\n              <DrilldownMenu id=\"drilldownMenuStorage\">\n                <MenuItem itemId=\"group:storage_breadcrumb\" icon={<StorageDomainIcon aria-hidden />} direction=\"up\">\n                  Add storage\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId=\"git\">\n                  From git\n                </MenuItem>\n                <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId=\"container\">\n                  Container image\n                </MenuItem>\n                <MenuItem icon={<CubeIcon aria-hidden />} itemId=\"docker\">\n                  Docker file\n                </MenuItem>\n              </DrilldownMenu>\n            }\n          >\n            Add storage\n          </MenuItem>\n          <MenuItem itemId=\"edit\">Edit</MenuItem>\n          <MenuItem itemId=\"delete_deployment\">Delete deployment config</MenuItem>\n        </MenuList>\n      </MenuContent>\n    </Menu>\n  );\n};\n","title":"With drilldown - initial drill in state","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`To render an initially drilled in menu, the `}
        
        <code {...{"className":"ws-code"}}>
          {`menuDrilledIn`}
        </code>
        {`, `}
        
        <code {...{"className":"ws-code"}}>
          {`drilldownPath`}
        </code>
        {`, and `}
        
        <code {...{"className":"ws-code"}}>
          {`activeMenu`}
        </code>
        {` states must be set to an initial state. The `}
        
        <code {...{"className":"ws-code"}}>
          {`menuHeights`}
        </code>
        {` state must also be set, defining the height of the root menu. The `}
        
        <code {...{"className":"ws-code"}}>
          {`setHeight`}
        </code>
        {` function passed into the `}
        
        <code {...{"className":"ws-code"}}>
          {`onGetMenuHeight`}
        </code>
        {` property must also account for updating heights, other than the root menu, as menus drill in and out of view.`}
      </p>
    </Example>,
  'With drilldown - submenu functions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem, Divider, DrilldownMenu } from '@patternfly/react-core';\nimport StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\nimport LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\n\nexport const MenuDrilldownSubmenuFunctions: React.FunctionComponent = () => {\n  const [menuDrilledIn, setMenuDrilledIn] = React.useState<string[]>([]);\n  const [drilldownPath, setDrilldownPath] = React.useState<string[]>([]);\n  const [menuHeights, setMenuHeights] = React.useState<any>({});\n  const [activeMenu, setActiveMenu] = React.useState<string>('rootMenu');\n\n  const drillIn = (fromMenuId: string, toMenuId: string, pathId: string) => {\n    setMenuDrilledIn([...menuDrilledIn, fromMenuId]);\n    setDrilldownPath([...drilldownPath, pathId]);\n    setActiveMenu(toMenuId);\n  };\n\n  const drillOut = (toMenuId: string) => {\n    const menuDrilledInSansLast = menuDrilledIn.slice(0, menuDrilledIn.length - 1);\n    const pathSansLast = drilldownPath.slice(0, drilldownPath.length - 1);\n    setMenuDrilledIn(menuDrilledInSansLast);\n    setDrilldownPath(pathSansLast);\n    setActiveMenu(toMenuId);\n  };\n\n  const setHeight = (menuId: string, height: number) => {\n    if (menuHeights[menuId] === undefined) {\n      setMenuHeights({ ...menuHeights, [menuId]: height });\n    }\n  };\n\n  return (\n    <Menu\n      id=\"rootMenu\"\n      containsDrilldown\n      drilldownItemPath={drilldownPath}\n      drilledInMenus={menuDrilledIn}\n      activeMenu={activeMenu}\n      onDrillIn={drillIn}\n      onDrillOut={drillOut}\n      onGetMenuHeight={setHeight}\n    >\n      <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>\n        <MenuList>\n          <MenuItem\n            itemId=\"group:start_rollout\"\n            direction=\"down\"\n            drilldownMenu={() => (\n              <DrilldownMenu id=\"drilldownMenuStart\">\n                <MenuItem itemId=\"group:start_rollout_breadcrumb\" direction=\"up\">\n                  Start rollout\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem\n                  itemId=\"group:app_grouping\"\n                  description=\"Groups A-C\"\n                  direction=\"down\"\n                  drilldownMenu={() => (\n                    <DrilldownMenu id=\"drilldownMenuStartGrouping\">\n                      <MenuItem itemId=\"group:app_grouping_breadcrumb\" direction=\"up\">\n                        Application grouping\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"group_a\">Group A</MenuItem>\n                      <MenuItem itemId=\"group_b\">Group B</MenuItem>\n                      <MenuItem itemId=\"group_c\">Group C</MenuItem>\n                    </DrilldownMenu>\n                  )}\n                >\n                  Application grouping\n                </MenuItem>\n                <MenuItem itemId=\"count\">Count</MenuItem>\n                <MenuItem\n                  itemId=\"group:labels\"\n                  direction=\"down\"\n                  drilldownMenu={() => (\n                    <DrilldownMenu id=\"drilldownMenuStartLabels\">\n                      <MenuItem itemId=\"group:labels_breadcrumb\" direction=\"up\">\n                        Labels\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"label_1\">Label 1</MenuItem>\n                      <MenuItem itemId=\"label_2\">Label 2</MenuItem>\n                      <MenuItem itemId=\"label_3\">Label 3</MenuItem>\n                    </DrilldownMenu>\n                  )}\n                >\n                  Labels\n                </MenuItem>\n                <MenuItem itemId=\"annotations\">Annotations</MenuItem>\n              </DrilldownMenu>\n            )}\n          >\n            Start rollout\n          </MenuItem>\n          <MenuItem\n            itemId=\"group:pause_rollout\"\n            direction=\"down\"\n            drilldownMenu={() => (\n              <DrilldownMenu id=\"drilldownMenuPause\">\n                <MenuItem itemId=\"group:pause_rollout_breadcrumb\" direction=\"up\">\n                  Pause rollouts\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem\n                  itemId=\"group:app_grouping\"\n                  description=\"Groups A-C\"\n                  direction=\"down\"\n                  drilldownMenu={() => (\n                    <DrilldownMenu id=\"drilldownMenuGrouping\">\n                      <MenuItem itemId=\"group:app_grouping_breadcrumb\" direction=\"up\">\n                        Application grouping\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"group_a\">Group A</MenuItem>\n                      <MenuItem itemId=\"group_b\">Group B</MenuItem>\n                      <MenuItem itemId=\"group_c\">Group C</MenuItem>\n                    </DrilldownMenu>\n                  )}\n                >\n                  Application grouping\n                </MenuItem>\n                <MenuItem itemId=\"count\">Count</MenuItem>\n                <MenuItem\n                  itemId=\"group:labels\"\n                  direction=\"down\"\n                  drilldownMenu={() => (\n                    <DrilldownMenu id=\"drilldownMenuLabels\">\n                      <MenuItem itemId=\"group:labels_breadcrumb\" direction=\"up\">\n                        Labels\n                      </MenuItem>\n                      <Divider component=\"li\" />\n                      <MenuItem itemId=\"label_1\">Label 1</MenuItem>\n                      <MenuItem itemId=\"label_2\">Label 2</MenuItem>\n                      <MenuItem itemId=\"label_3\">Label 3</MenuItem>\n                    </DrilldownMenu>\n                  )}\n                >\n                  Labels\n                </MenuItem>\n                <MenuItem itemId=\"annotations\">Annotations</MenuItem>\n              </DrilldownMenu>\n            )}\n          >\n            Pause rollouts\n          </MenuItem>\n          <MenuItem\n            itemId=\"group:storage\"\n            icon={<StorageDomainIcon aria-hidden />}\n            direction=\"down\"\n            drilldownMenu={() => (\n              <DrilldownMenu id=\"drilldownMenuStorage\">\n                <MenuItem itemId=\"group:storage_breadcrumb\" icon={<StorageDomainIcon aria-hidden />} direction=\"up\">\n                  Add storage\n                </MenuItem>\n                <Divider component=\"li\" />\n                <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId=\"git\">\n                  From git\n                </MenuItem>\n                <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId=\"container\">\n                  Container image\n                </MenuItem>\n                <MenuItem icon={<CubeIcon aria-hidden />} itemId=\"docker\">\n                  Docker file\n                </MenuItem>\n              </DrilldownMenu>\n            )}\n          >\n            Add storage\n          </MenuItem>\n          <MenuItem itemId=\"edit\">Edit</MenuItem>\n          <MenuItem itemId=\"delete_deployment\">Delete deployment config</MenuItem>\n        </MenuList>\n      </MenuContent>\n    </Menu>\n  );\n};\n","title":"With drilldown - submenu functions","lang":"ts","isBeta":true}}>
      
    </Example>,
  'With drilldown breadcrumbs': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Menu,\n  MenuContent,\n  MenuList,\n  MenuItem,\n  Divider,\n  DrilldownMenu,\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbHeading,\n  MenuBreadcrumb,\n  Dropdown,\n  DropdownItem,\n  BadgeToggle,\n  Checkbox\n} from '@patternfly/react-core';\nimport StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\nimport LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';\nimport AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\n\nclass MenuWithDrilldownBreadcrumbs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      menuDrilledIn: [],\n      drilldownPath: [],\n      menuHeights: {},\n      activeMenu: 'rootMenu',\n      breadcrumb: undefined,\n      withMaxMenuHeight: false\n    };\n\n    this.onToggle = (isOpen, key) => {\n      switch (key) {\n        case 'app':\n          this.setState({\n            breadcrumb: this.appGroupingBreadcrumb(isOpen)\n          });\n          break;\n        case 'label':\n          this.setState({\n            breadcrumb: this.labelsBreadcrumb(isOpen)\n          });\n          break;\n        default:\n          break;\n      }\n    };\n\n    this.onToggleMaxMenuHeight = checked => {\n      this.setState({\n        withMaxMenuHeight: checked\n      });\n    };\n\n    this.drillOut = (toMenuId, fromPathId, breadcrumb) => {\n      const indexOfMenuId = this.state.menuDrilledIn.indexOf(toMenuId);\n      const menuDrilledInSansLast = this.state.menuDrilledIn.slice(0, indexOfMenuId);\n      const indexOfMenuIdPath = this.state.drilldownPath.indexOf(fromPathId);\n      const pathSansLast = this.state.drilldownPath.slice(0, indexOfMenuIdPath);\n      this.setState({\n        menuDrilledIn: menuDrilledInSansLast,\n        drilldownPath: pathSansLast,\n        activeMenu: toMenuId,\n        breadcrumb\n      });\n    };\n    this.setHeight = (menuId, height) => {\n      if (!this.state.menuHeights[menuId]) {\n        this.setState({\n          menuHeights: {\n            ...this.state.menuHeights,\n            [menuId]: height\n          }\n        });\n      }\n    };\n    this.drillIn = (fromMenuId, toMenuId, pathId) => {\n      this.setState({\n        menuDrilledIn: [...this.state.menuDrilledIn, fromMenuId],\n        drilldownPath: [...this.state.drilldownPath, pathId],\n        activeMenu: toMenuId\n      });\n    };\n\n    this.startRolloutBreadcrumb = (\n      <Breadcrumb>\n        <BreadcrumbItem component=\"button\" onClick={() => this.drillOut('rootMenu', 'group:start_rollout', null)}>\n          Root\n        </BreadcrumbItem>\n        <BreadcrumbHeading component=\"button\">Start rollout</BreadcrumbHeading>\n      </Breadcrumb>\n    );\n\n    this.appGroupingBreadcrumb = isOpen => {\n      return (\n        <Breadcrumb>\n          <BreadcrumbItem component=\"button\" onClick={() => this.drillOut('rootMenu', 'group:start_rollout', null)}>\n            Root\n          </BreadcrumbItem>\n          <BreadcrumbItem isDropdown>\n            <Dropdown\n              toggle={\n                <BadgeToggle id=\"toggle-id\" onToggle={open => this.onToggle(open, 'app')}>\n                  1\n                </BadgeToggle>\n              }\n              isOpen={isOpen}\n              dropdownItems={[\n                <DropdownItem\n                  key=\"dropdown-start\"\n                  component=\"button\"\n                  icon={<AngleLeftIcon />}\n                  onClick={() =>\n                    this.drillOut('drilldownMenuStart', 'group:app_grouping_start', this.startRolloutBreadcrumb)\n                  }\n                >\n                  Start rollout\n                </DropdownItem>\n              ]}\n            />\n          </BreadcrumbItem>\n          <BreadcrumbHeading component=\"button\">Application Grouping</BreadcrumbHeading>\n        </Breadcrumb>\n      );\n    };\n\n    this.labelsBreadcrumb = isOpen => (\n      <Breadcrumb>\n        <BreadcrumbItem component=\"button\" onClick={() => this.drillOut('rootMenu', 'group:start_rollout', null)}>\n          Root\n        </BreadcrumbItem>\n        <BreadcrumbItem isDropdown>\n          <Dropdown\n            toggle={\n              <BadgeToggle id=\"toggle-id\" onToggle={open => this.onToggle(open, 'label')}>\n                1\n              </BadgeToggle>\n            }\n            isOpen={isOpen}\n            dropdownItems={[\n              <DropdownItem\n                key=\"dropdown-start\"\n                component=\"button\"\n                icon={<AngleLeftIcon />}\n                onClick={() => this.drillOut('drilldownMenuStart', 'group:labels_start', this.startRolloutBreadcrumb)}\n              >\n                Start rollout\n              </DropdownItem>\n            ]}\n          />\n        </BreadcrumbItem>\n        <BreadcrumbHeading component=\"button\">Labels</BreadcrumbHeading>\n      </Breadcrumb>\n    );\n\n    this.pauseRolloutsBreadcrumb = (\n      <Breadcrumb>\n        <BreadcrumbItem component=\"button\" onClick={() => this.drillOut('rootMenu', 'group:pause_rollout', null)}>\n          Root\n        </BreadcrumbItem>\n        <BreadcrumbHeading component=\"button\">Pause rollouts</BreadcrumbHeading>\n      </Breadcrumb>\n    );\n\n    this.pauseRolloutsAppGrpBreadcrumb = (\n      <Breadcrumb>\n        <BreadcrumbItem component=\"button\" onClick={() => this.drillOut('rootMenu', 'group:pause_rollout', null)}>\n          Root\n        </BreadcrumbItem>\n        <BreadcrumbItem\n          component=\"button\"\n          onClick={() => this.drillOut('drilldownMenuPause', 'group:app_grouping', this.pauseRolloutsBreadcrumb)}\n        >\n          Pause rollouts\n        </BreadcrumbItem>\n        <BreadcrumbHeading component=\"button\">Application Grouping</BreadcrumbHeading>\n      </Breadcrumb>\n    );\n\n    this.pauseRolloutsLabelsBreadcrumb = (\n      <Breadcrumb>\n        <BreadcrumbItem component=\"button\" onClick={() => this.drillOut('rootMenu', 'group:pause_rollout', null)}>\n          Root\n        </BreadcrumbItem>\n        <BreadcrumbItem\n          component=\"button\"\n          onClick={() => this.drillOut('drilldownMenuPause', 'group:labels', this.pauseRolloutsBreadcrumb)}\n        >\n          Pause rollouts\n        </BreadcrumbItem>\n        <BreadcrumbHeading component=\"button\">Labels</BreadcrumbHeading>\n      </Breadcrumb>\n    );\n\n    this.addStorageBreadcrumb = (\n      <Breadcrumb>\n        <BreadcrumbItem component=\"button\" onClick={() => this.drillOut('rootMenu', 'group:storage', null)}>\n          Root\n        </BreadcrumbItem>\n        <BreadcrumbHeading component=\"button\">Add storage</BreadcrumbHeading>\n      </Breadcrumb>\n    );\n  }\n\n  render() {\n    const { menuDrilledIn, drilldownPath, activeMenu, menuHeights, breadcrumb, withMaxMenuHeight } = this.state;\n\n    return (\n      <>\n        <Checkbox\n          label=\"Set max menu height\"\n          isChecked={withMaxMenuHeight}\n          onChange={this.onToggleMaxMenuHeight}\n          aria-label=\"Set max menu height checkbox\"\n          id=\"toggle-max-menu-height\"\n          name=\"toggle-max-menu-height\"\n        />\n        <br />\n        <Menu\n          id=\"rootMenu\"\n          containsDrilldown\n          drilldownItemPath={drilldownPath}\n          drilledInMenus={menuDrilledIn}\n          activeMenu={activeMenu}\n          onDrillIn={this.drillIn}\n          onDrillOut={this.drillOut}\n          onGetMenuHeight={this.setHeight}\n        >\n          {breadcrumb && (\n            <>\n              <MenuBreadcrumb>{breadcrumb}</MenuBreadcrumb>\n              <Divider component=\"li\" />\n            </>\n          )}\n          <MenuContent menuHeight={`${menuHeights[activeMenu]}px`} maxMenuHeight={withMaxMenuHeight ? '100px' : 'auto'}>\n            <MenuList>\n              <MenuItem\n                itemId=\"group:start_rollout\"\n                direction=\"down\"\n                onClick={() => this.setState({ breadcrumb: this.startRolloutBreadcrumb })}\n                drilldownMenu={\n                  <DrilldownMenu id=\"drilldownMenuStart\">\n                    <MenuItem\n                      itemId=\"group:app_grouping_start\"\n                      description=\"Groups A-G\"\n                      direction=\"down\"\n                      onClick={() => this.setState({ breadcrumb: this.appGroupingBreadcrumb(false) })}\n                      drilldownMenu={\n                        <DrilldownMenu id=\"drilldownMenuStartGrouping\">\n                          <MenuItem itemId=\"group_a\">Group A</MenuItem>\n                          <MenuItem itemId=\"group_b\">Group B</MenuItem>\n                          <MenuItem itemId=\"group_c\">Group C</MenuItem>\n                          <MenuItem itemId=\"group_d\">Group D</MenuItem>\n                          <MenuItem itemId=\"group_e\">Group E</MenuItem>\n                          <MenuItem itemId=\"group_f\">Group F</MenuItem>\n                          <MenuItem itemId=\"group_g\">Group G</MenuItem>\n                        </DrilldownMenu>\n                      }\n                    >\n                      Application grouping\n                    </MenuItem>\n                    <MenuItem itemId=\"count\">Count</MenuItem>\n                    <MenuItem\n                      itemId=\"group:labels_start\"\n                      direction=\"down\"\n                      onClick={() => this.setState({ breadcrumb: this.labelsBreadcrumb(false) })}\n                      drilldownMenu={\n                        <DrilldownMenu id=\"drilldownMenuStartLabels\">\n                          <MenuItem itemId=\"label_1\">Label 1</MenuItem>\n                          <MenuItem itemId=\"label_2\">Label 2</MenuItem>\n                          <MenuItem itemId=\"label_3\">Label 3</MenuItem>\n                        </DrilldownMenu>\n                      }\n                    >\n                      Labels\n                    </MenuItem>\n                    <MenuItem itemId=\"annotations\">Annotations</MenuItem>\n                  </DrilldownMenu>\n                }\n              >\n                Start rollout\n              </MenuItem>\n              <MenuItem\n                itemId=\"group:pause_rollout\"\n                direction=\"down\"\n                onClick={() => this.setState({ breadcrumb: this.pauseRolloutsBreadcrumb })}\n                drilldownMenu={\n                  <DrilldownMenu id=\"drilldownMenuPause\">\n                    <MenuItem\n                      itemId=\"group:app_grouping\"\n                      description=\"Groups A-C\"\n                      direction=\"down\"\n                      onClick={() => this.setState({ breadcrumb: this.pauseRolloutsAppGrpBreadcrumb })}\n                      drilldownMenu={\n                        <DrilldownMenu id=\"drilldownMenuGrouping\">\n                          <MenuItem itemId=\"group_a\">Group A</MenuItem>\n                          <MenuItem itemId=\"group_b\">Group B</MenuItem>\n                          <MenuItem itemId=\"group_c\">Group C</MenuItem>\n                        </DrilldownMenu>\n                      }\n                    >\n                      Application grouping\n                    </MenuItem>\n                    <MenuItem itemId=\"count\">Count</MenuItem>\n                    <MenuItem\n                      itemId=\"group:labels\"\n                      direction=\"down\"\n                      onClick={() => this.setState({ breadcrumb: this.pauseRolloutsLabelsBreadcrumb })}\n                      drilldownMenu={\n                        <DrilldownMenu id=\"drilldownMenuLabels\">\n                          <MenuItem itemId=\"label_1\">Label 1</MenuItem>\n                          <MenuItem itemId=\"label_2\">Label 2</MenuItem>\n                          <MenuItem itemId=\"label_3\">Label 3</MenuItem>\n                        </DrilldownMenu>\n                      }\n                    >\n                      Labels\n                    </MenuItem>\n                    <MenuItem itemId=\"annotations\">Annotations</MenuItem>\n                  </DrilldownMenu>\n                }\n              >\n                Pause rollouts\n              </MenuItem>\n              <MenuItem\n                itemId=\"group:storage\"\n                icon={<StorageDomainIcon aria-hidden />}\n                direction=\"down\"\n                onClick={() => this.setState({ breadcrumb: this.addStorageBreadcrumb })}\n                drilldownMenu={\n                  <DrilldownMenu id=\"drilldownMenuStorage\">\n                    <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId=\"git\">\n                      From git\n                    </MenuItem>\n                    <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId=\"container\">\n                      Container image\n                    </MenuItem>\n                    <MenuItem icon={<CubeIcon aria-hidden />} itemId=\"docker\">\n                      Docker file\n                    </MenuItem>\n                  </DrilldownMenu>\n                }\n              >\n                Add storage\n              </MenuItem>\n              <MenuItem itemId=\"edit\">Edit</MenuItem>\n              <MenuItem itemId=\"delete_deployment\">Delete deployment config</MenuItem>\n            </MenuList>\n          </MenuContent>\n        </Menu>\n      </>\n    );\n  }\n}","title":"With drilldown breadcrumbs","lang":"js","isBeta":true}}>
      
    </Example>,
  'Scrollable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\n\nclass MenuBasicList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (event, itemId) => {\n      console.log(`clicked ${itemId}`);\n      this.setState({\n        activeItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Menu activeItemId={activeItem} onSelect={this.onSelect} isScrollable>\n        <MenuContent>\n          <MenuList>\n            <MenuItem>Action 1</MenuItem>\n            <MenuItem>Action 2</MenuItem>\n            <MenuItem>Action 3</MenuItem>\n            <MenuItem>Action 4</MenuItem>\n            <MenuItem>Action 5</MenuItem>\n            <MenuItem>Action 6</MenuItem>\n            <MenuItem>Action 7</MenuItem>\n            <MenuItem>Action 8</MenuItem>\n            <MenuItem>Action 9</MenuItem>\n            <MenuItem>Action 10</MenuItem>\n            <MenuItem>Action 11</MenuItem>\n            <MenuItem>Action 12</MenuItem>\n            <MenuItem>Action 13</MenuItem>\n            <MenuItem>Action 14</MenuItem>\n            <MenuItem>Action 15</MenuItem>\n            <MenuItem\n              itemId={1}\n              to=\"#default-link2\"\n              // just for demo so that navigation is not triggered\n              onClick={event => event.preventDefault()}\n            >\n              Link\n            </MenuItem>\n            <MenuItem isDisabled>Disabled action</MenuItem>\n            <MenuItem isDisabled to=\"#default-link4\">\n              Disabled link\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"Scrollable","lang":"js"}}>
      
    </Example>,
  'Scrollable with custom menu height': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';\n\nclass MenuBasicList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (event, itemId) => {\n      console.log(`clicked ${itemId}`);\n      this.setState({\n        activeItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Menu activeItemId={activeItem} onSelect={this.onSelect} isScrollable>\n        <MenuContent menuHeight=\"200px\">\n          <MenuList>\n            <MenuItem>Action 1</MenuItem>\n            <MenuItem>Action 2</MenuItem>\n            <MenuItem>Action 3</MenuItem>\n            <MenuItem>Action 4</MenuItem>\n            <MenuItem>Action 5</MenuItem>\n            <MenuItem>Action 6</MenuItem>\n            <MenuItem>Action 7</MenuItem>\n            <MenuItem>Action 8</MenuItem>\n            <MenuItem>Action 9</MenuItem>\n            <MenuItem>Action 10</MenuItem>\n            <MenuItem>Action 11</MenuItem>\n            <MenuItem>Action 12</MenuItem>\n            <MenuItem>Action 13</MenuItem>\n            <MenuItem>Action 14</MenuItem>\n            <MenuItem>Action 15</MenuItem>\n            <MenuItem\n              itemId={1}\n              to=\"#default-link2\"\n              // just for demo so that navigation is not triggered\n              onClick={event => event.preventDefault()}\n            >\n              Link\n            </MenuItem>\n            <MenuItem isDisabled>Disabled action</MenuItem>\n            <MenuItem isDisabled to=\"#default-link4\">\n              Disabled link\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"Scrollable with custom menu height","lang":"js"}}>
      
    </Example>,
  'With footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuList, MenuItem, MenuContent, MenuFooter, Button } from '@patternfly/react-core';\n\nclass FooterMenu extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0\n    };\n    this.onSelect = (event, itemId) => {\n      console.log(`clicked ${itemId}`);\n      this.setState({\n        activeItem: itemId\n      });\n    };\n  }\n\n  render() {\n    const { activeItem } = this.state;\n    return (\n      <Menu activeItemId={activeItem} onSelect={this.onSelect}>\n        <MenuContent>\n          <MenuList>\n            <MenuItem itemId={0}>Action</MenuItem>\n            <MenuItem\n              itemId={1}\n              to=\"#default-link2\"\n              // just for demo so that navigation is not triggered\n              onClick={event => event.preventDefault()}\n            >\n              Link\n            </MenuItem>\n            <MenuItem isDisabled>Disabled action</MenuItem>\n            <MenuItem isDisabled to=\"#default-link4\">\n              Disabled link\n            </MenuItem>\n          </MenuList>\n        </MenuContent>\n        <MenuFooter>\n          <Button variant=\"link\" isInline>\n            Action\n          </Button>\n        </MenuFooter>\n      </Menu>\n    );\n  }\n}","title":"With footer","lang":"js"}}>
      
    </Example>,
  'With view more': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Menu, MenuList, MenuItem, MenuContent, MenuFooter, Spinner } from '@patternfly/react-core';\n\nclass ViewMoreMenu extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeItem: 0,\n      isLoading: false,\n      numOptions: 3\n    };\n    this.activeItemRef = React.createRef();\n    this.viewMoreRef = React.createRef();\n\n    this.menuOptions = [\n      <MenuItem key={0} itemId={'view-more-0'}>\n        Action\n      </MenuItem>,\n      <MenuItem\n        key={1}\n        itemId={'view-more-1'}\n        to=\"#default-link2\"\n        // just for demo so that navigation is not triggered\n        onClick={event => event.preventDefault()}\n      >\n        Link\n      </MenuItem>,\n      <MenuItem key={2} itemId=\"view-more-2\" isDisabled>\n        Disabled action\n      </MenuItem>,\n      <MenuItem key={3} itemId=\"view-more-3\" isDisabled to=\"#default-link4\">\n        Disabled link\n      </MenuItem>,\n      <MenuItem key={4} itemId=\"view-more-4\" ref={this.activeItemRef}>\n        Action 2\n      </MenuItem>,\n      <MenuItem key={5} itemId=\"view-more-5\">\n        Action 3\n      </MenuItem>,\n      <MenuItem key={6} itemId=\"view-more-6\">\n        Action 4\n      </MenuItem>,\n      <MenuItem key={7} itemId=\"view-more-7\">\n        Action 5\n      </MenuItem>,\n      <MenuItem key={8} itemId=\"view-more-8\">\n        Final option\n      </MenuItem>\n    ];\n\n    this.onSelect = (event, itemId) => {\n      console.log(`clicked ${itemId}`);\n      this.setState({\n        activeItem: itemId\n      });\n    };\n\n    this.simulateNetworkCall = networkCallback => {\n      setTimeout(networkCallback, 2000);\n    };\n\n    this.getNextValidItem = (startingIndex, maxLength) => {\n      let validItem;\n      for (let i = startingIndex; i < maxLength; i++) {\n        if (this.menuOptions[i].props.isDisabled) {\n          continue;\n        } else {\n          validItem = this.menuOptions[i];\n          break;\n        }\n      }\n      return validItem;\n    };\n\n    this.loadMoreOptions = stateCallback => {\n      const newLength =\n        this.state.numOptions + 3 <= this.menuOptions.length ? this.state.numOptions + 3 : this.menuOptions.length;\n      const prevPosition = this.state.numOptions;\n      const nextValidItem = this.getNextValidItem(prevPosition, newLength);\n\n      this.setState({ numOptions: newLength, isLoading: false, activeItem: nextValidItem.props.itemId }, stateCallback);\n    };\n\n    this.onViewMoreClick = event => {\n      this.setState({ isLoading: true });\n      this.simulateNetworkCall(() => {\n        this.loadMoreOptions(() => {\n          this.activeItemRef.current.focus();\n        });\n      });\n    };\n\n    this.onViewMoreKeyDown = event => {\n      if (!(event.key === ' ' || event.key === 'Enter')) {\n        return;\n      }\n      event.stopPropagation();\n      event.preventDefault();\n\n      this.setState({ isLoading: true });\n      this.simulateNetworkCall(() => {\n        this.loadMoreOptions(() => {\n          if (this.viewMoreRef.current) {\n            this.viewMoreRef.current.tabIndex = -1;\n          }\n          const firstMenuItem = this.activeItemRef.current.closest('ul').firstChild;\n          firstMenuItem.querySelector('button, a').tabIndex = -1;\n          this.activeItemRef.current.tabIndex = 0;\n          this.activeItemRef.current.focus();\n        });\n      });\n    };\n  }\n\n  render() {\n    const { activeItem, isLoading, numOptions } = this.state;\n    return (\n      <Menu activeItemId={activeItem} onSelect={this.onSelect}>\n        <MenuContent>\n          <MenuList>\n            {this.menuOptions.slice(0, numOptions).map(option => {\n              const props = option.props;\n\n              return (\n                <MenuItem\n                  key={option.key}\n                  {...props}\n                  ref={props.itemId === this.state.activeItem ? this.activeItemRef : null}\n                />\n              );\n            })}\n            {numOptions !== this.menuOptions.length && (\n              <MenuItem\n                {...(!isLoading && { isLoadButton: true })}\n                {...(isLoading && { isLoading: true })}\n                onKeyDown={this.onViewMoreKeyDown}\n                onClick={this.onViewMoreClick}\n                itemId=\"loader\"\n                ref={this.viewMoreRef}\n              >\n                {isLoading ? <Spinner size=\"lg\" /> : 'View more'}\n              </MenuItem>\n            )}\n          </MenuList>\n        </MenuContent>\n      </Menu>\n    );\n  }\n}","title":"With view more","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With icons"])}
    {React.createElement(pageData.examples["With checkbox"])}
    {React.createElement(pageData.examples["Filtering with text input"])}
    {React.createElement(pageData.examples["With links"])}
    {React.createElement(pageData.examples["With separator(s)"])}
    {React.createElement(pageData.examples["With titled groups"])}
    {React.createElement(pageData.examples["With description"])}
    {React.createElement(pageData.examples["With actions"])}
    {React.createElement(pageData.examples["With favorites"])}
    {React.createElement(pageData.examples["Option single select"])}
    {React.createElement(pageData.examples["Option multi select"])}
    {React.createElement(pageData.examples["With drilldown"])}
    {React.createElement(pageData.examples["With drilldown - initial drill in state"])}
    {React.createElement(pageData.examples["With drilldown - submenu functions"])}
    {React.createElement(pageData.examples["With drilldown breadcrumbs"])}
    {React.createElement(pageData.examples["Scrollable"])}
    {React.createElement(pageData.examples["Scrollable with custom menu height"])}
    {React.createElement(pageData.examples["With footer"])}
    {React.createElement(pageData.examples["With view more"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsMenuReactDocs';
Component.pageData = pageData;

export default Component;
