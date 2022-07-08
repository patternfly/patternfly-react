import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { FolderIcon, FolderOpenIcon, EllipsisVIcon, ClipboardIcon, HamburgerIcon } from '@patternfly/react-icons';
const pageData = {
  "id": "Tree view",
  "section": "components",
  "source": "react",
  "slug": "/components/tree-view/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/TreeView/examples/TreeView.md",
  "propComponents": [
    {
      "name": "TreeView",
      "description": "",
      "props": [
        {
          "name": "activeItems",
          "type": "TreeViewDataItem[]",
          "description": "Active items of tree view"
        },
        {
          "name": "allExpanded",
          "type": "boolean",
          "description": "Sets the expanded state on all tree nodes, overriding default behavior and current internal state"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Class to add to add if not passed a parentItem"
        },
        {
          "name": "compareItems",
          "type": "(item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean",
          "description": "Comparison function for determining active items",
          "defaultValue": "(item, itemToCheck) => item.id === itemToCheck.id"
        },
        {
          "name": "data",
          "type": "TreeViewDataItem[]",
          "description": "Data of the tree view",
          "required": true
        },
        {
          "name": "defaultAllExpanded",
          "type": "boolean",
          "description": "Sets the default expanded behavior",
          "defaultValue": "false"
        },
        {
          "name": "expandedIcon",
          "type": "React.ReactNode",
          "description": "Icon for all expanded node items"
        },
        {
          "name": "hasBadges",
          "type": "boolean",
          "description": "Flag indicating if all nodes in the tree view should have badges",
          "defaultValue": "false"
        },
        {
          "name": "hasChecks",
          "type": "boolean",
          "description": "Flag indicating if all nodes in the tree view should have checkboxes",
          "defaultValue": "false"
        },
        {
          "name": "hasGuides",
          "type": "boolean",
          "description": "Flag indicating if tree view has guide lines.",
          "defaultValue": "false"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon for all leaf or unexpanded node items"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the tree view"
        },
        {
          "name": "isNested",
          "type": "boolean",
          "description": "Flag indicating if the tree view is nested",
          "defaultValue": "false"
        },
        {
          "name": "onCheck",
          "type": "(event: React.ChangeEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void",
          "description": "Callback for item checkbox selection"
        },
        {
          "name": "onSelect",
          "type": "(event: React.MouseEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void",
          "description": "Callback for item selection"
        },
        {
          "name": "parentItem",
          "type": "TreeViewDataItem",
          "description": "Internal. Parent item of a TreeViewListItem"
        },
        {
          "name": "toolbar",
          "type": "React.ReactNode",
          "description": "Toolbar to display above the tree view"
        },
        {
          "name": "useMemo",
          "type": "boolean",
          "description": "Flag indicating the TreeView should utilize memoization to help render large data sets. Setting this property requires that `activeItems` pass in an array containing every node in the selected item's path."
        },
        {
          "name": "variant",
          "type": "'default' | 'compact' | 'compactNoBackground'",
          "description": "Variant presentation styles for the tree view.",
          "defaultValue": "'default'"
        }
      ]
    },
    {
      "name": "TreeViewDataItem",
      "description": "",
      "props": [
        {
          "name": "action",
          "type": "React.ReactNode",
          "description": "Action of a tree view item, can be a Button or Dropdown"
        },
        {
          "name": "badgeProps",
          "type": "any",
          "description": "Additional properties of the tree view item badge"
        },
        {
          "name": "checkProps",
          "type": "TreeViewCheckProps",
          "description": "Additional properties of the tree view item checkbox"
        },
        {
          "name": "children",
          "type": "TreeViewDataItem[]",
          "description": "Child nodes of a tree view item"
        },
        {
          "name": "customBadgeContent",
          "type": "React.ReactNode",
          "description": "Optional prop for custom badge"
        },
        {
          "name": "defaultExpanded",
          "type": "boolean",
          "description": "Flag indicating if node is expanded by default"
        },
        {
          "name": "expandedIcon",
          "type": "React.ReactNode",
          "description": "Expanded icon of a tree view item"
        },
        {
          "name": "hasBadge",
          "type": "boolean",
          "description": "Flag indicating if a tree view item has a badge"
        },
        {
          "name": "hasCheck",
          "type": "boolean",
          "description": "Flag indicating if a tree view item has a checkbox"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Default icon of a tree view item"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of a tree view item"
        },
        {
          "name": "name",
          "type": "React.ReactNode",
          "description": "Internal content of a tree view item",
          "required": true
        },
        {
          "name": "title",
          "type": "React.ReactNode",
          "description": "Title a tree view item. Only used in Compact presentations."
        }
      ]
    },
    {
      "name": "TreeViewSearch",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the search input"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to the wrapper for the search input"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id for the search input"
        },
        {
          "name": "name",
          "type": "string",
          "description": "Name for the search input"
        },
        {
          "name": "onSearch",
          "type": "(event: React.ChangeEvent<HTMLInputElement>) => void",
          "description": "Callback for search input"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-treeview"
  ],
  "examples": [
    "Default",
    "With search",
    "With checkboxes",
    "With icons",
    "With badges",
    "With custom badges",
    "With action items",
    "Guides",
    "Compact",
    "Compact, no background",
    "With memoization"
  ]
};
pageData.liveContext = {
  FolderIcon,
  FolderOpenIcon,
  EllipsisVIcon,
  ClipboardIcon,
  HamburgerIcon
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView, Button } from '@patternfly/react-core';\n\nclass DefaultTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { activeItems: {}, allExpanded: null };\n\n    this.onSelect = (evt, treeViewItem) => {\n      this.setState({\n        activeItems: [treeViewItem]\n      });\n    };\n\n    this.onToggle = evt => {\n      const { allExpanded } = this.state;\n      this.setState({\n        allExpanded: allExpanded !== undefined ? !allExpanded : true\n      });\n    };\n  }\n\n  render() {\n    const { activeItems, allExpanded } = this.state;\n\n    const options = [\n      {\n        name: 'Application launcher',\n        id: 'AppLaunch',\n        children: [\n          {\n            name: 'Application 1',\n            id: 'App1',\n            children: [\n              { name: 'Settings', id: 'App1Settings' },\n              { name: 'Current', id: 'App1Current' }\n            ]\n          },\n          {\n            name: 'Application 2',\n            id: 'App2',\n            children: [\n              { name: 'Settings', id: 'App2Settings' },\n              {\n                name: 'Loader',\n                id: 'App2Loader',\n                children: [\n                  { name: 'Loading App 1', id: 'LoadApp1' },\n                  { name: 'Loading App 2', id: 'LoadApp2' },\n                  { name: 'Loading App 3', id: 'LoadApp3' }\n                ]\n              }\n            ]\n          }\n        ],\n        defaultExpanded: true\n      },\n      {\n        name: 'Cost management',\n        id: 'Cost',\n        children: [\n          {\n            name: 'Application 3',\n            id: 'App3',\n            children: [\n              { name: 'Settings', id: 'App3Settings' },\n              { name: 'Current', id: 'App3Current' }\n            ]\n          }\n        ]\n      },\n      {\n        name: 'Sources',\n        id: 'Sources',\n        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]\n      },\n      {\n        name: 'Really really really long folder name that overflows the container it is in',\n        id: 'Long',\n        children: [{ name: 'Application 5', id: 'App5' }]\n      }\n    ];\n    return (\n      <React.Fragment>\n        <Button variant=\"link\" onClick={this.onToggle}>\n          {allExpanded && 'Collapse all'}\n          {!allExpanded && 'Expand all'}\n        </Button>\n        <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} allExpanded={allExpanded} />\n      </React.Fragment>\n    );\n  }\n}","title":"Default","lang":"js"}}>
      
    </Example>,
  'With search': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarContent, ToolbarItem, TreeView, TreeViewSearch } from '@patternfly/react-core';\n\nclass SearchTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.options = [\n      {\n        name: 'Application launcher',\n        id: 'AppLaunch',\n        children: [\n          {\n            name: 'Application 1',\n            id: 'App1',\n            children: [\n              { name: 'Settings', id: 'App1Settings' },\n              { name: 'Current', id: 'App1Current' }\n            ]\n          },\n          {\n            name: 'Application 2',\n            id: 'App2',\n            children: [\n              { name: 'Settings', id: 'App2Settings' },\n              {\n                name: 'Loader',\n                id: 'App2Loader',\n                children: [\n                  { name: 'Loading App 1', id: 'LoadApp1' },\n                  { name: 'Loading App 2', id: 'LoadApp2' },\n                  { name: 'Loading App 3', id: 'LoadApp3' }\n                ]\n              }\n            ]\n          }\n        ],\n        defaultExpanded: true\n      },\n      {\n        name: 'Cost management',\n        id: 'Cost',\n        children: [\n          {\n            name: 'Application 3',\n            id: 'App3',\n            children: [\n              { name: 'Settings', id: 'App3Settings' },\n              { name: 'Current', id: 'App3Current' }\n            ]\n          }\n        ]\n      },\n      {\n        name: 'Sources',\n        id: 'Sources',\n        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]\n      },\n      {\n        name: 'Really really really long folder name that overflows the container it is in',\n        id: 'Long',\n        children: [{ name: 'Application 5', id: 'App5' }]\n      }\n    ];\n\n    this.state = { activeItems: {}, filteredItems: this.options, isFiltered: null };\n\n    this.onSelect = (evt, treeViewItem) => {\n      this.setState({\n        activeItems: [treeViewItem]\n      });\n    };\n\n    this.onSearch = evt => {\n      const input = evt.target.value;\n      if (input === '') {\n        this.setState({ filteredItems: this.options, isFiltered: false });\n      } else {\n        const filtered = this.options.map(opt => Object.assign({}, opt)).filter(item => this.filterItems(item, input));\n        this.setState({ filteredItems: filtered, isFiltered: true });\n      }\n    };\n\n    this.filterItems = (item, input) => {\n      if (item.name.toLowerCase().includes(input.toLowerCase())) {\n        return true;\n      }\n\n      if (item.children) {\n        return (\n          (item.children = item.children\n            .map(opt => Object.assign({}, opt))\n            .filter(child => this.filterItems(child, input))).length > 0\n        );\n      }\n    };\n  }\n\n  render() {\n    const { activeItems, filteredItems, isFiltered } = this.state;\n\n    const toolbar = (\n      <Toolbar style={{ padding: 0 }}>\n        <ToolbarContent style={{ padding: 0 }}>\n          <ToolbarItem widths={{ default: '100%' }}>\n            <TreeViewSearch\n              onSearch={this.onSearch}\n              id=\"input-search\"\n              name=\"search-input\"\n              aria-label=\"Search input example\"\n            />\n          </ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n    );\n\n    return (\n      <TreeView\n        data={filteredItems}\n        activeItems={activeItems}\n        onSelect={this.onSelect}\n        allExpanded={isFiltered}\n        toolbar={toolbar}\n      />\n    );\n  }\n}","title":"With search","lang":"js"}}>
      
    </Example>,
  'With checkboxes': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView } from '@patternfly/react-core';\n\nclass CheckboxTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n    this.options = [\n      {\n        name: 'Application launcher',\n        id: 'AppLaunch',\n        checkProps: { 'aria-label': 'app-launcher-check', checked: false },\n        children: [\n          {\n            name: 'Application 1',\n            id: 'App1',\n            checkProps: { checked: false },\n            children: [\n              {\n                name: 'Settings',\n                id: 'App1Settings',\n                checkProps: { checked: false }\n              },\n              {\n                name: 'Current',\n                id: 'App1Current',\n                checkProps: { checked: false }\n              }\n            ]\n          },\n          {\n            name: 'Application 2',\n            id: 'App2',\n            checkProps: { checked: false },\n            children: [\n              {\n                name: 'Settings',\n                id: 'App2Settings',\n                checkProps: { checked: false }\n              },\n              {\n                name: 'Loader',\n                id: 'App2Loader',\n                checkProps: { checked: false },\n                children: [\n                  {\n                    name: 'Loading App 1',\n                    id: 'LoadApp1',\n                    checkProps: { checked: false }\n                  },\n                  {\n                    name: 'Loading App 2',\n                    id: 'LoadApp2',\n                    checkProps: { checked: false }\n                  },\n                  {\n                    name: 'Loading App 3',\n                    id: 'LoadApp3',\n                    checkProps: { checked: false }\n                  }\n                ]\n              }\n            ]\n          }\n        ],\n        defaultExpanded: true\n      },\n      {\n        name: 'Cost management',\n        id: 'Cost',\n        checkProps: { 'aria-label': 'cost-check', checked: false },\n        children: [\n          {\n            name: 'Application 3',\n            id: 'App3',\n            checkProps: { 'aria-label': 'app-3-check', checked: false },\n            children: [\n              {\n                name: 'Settings',\n                id: 'App3Settings',\n                checkProps: { 'aria-label': 'app-3-settings-check', checked: false }\n              },\n              {\n                name: 'Current',\n                id: 'App3Current',\n                checkProps: { 'aria-label': 'app-3-current-check', checked: false }\n              }\n            ]\n          }\n        ]\n      },\n      {\n        name: 'Sources',\n        id: 'Sources',\n        checkProps: { 'aria-label': 'sources-check', checked: false },\n        children: [\n          {\n            name: 'Application 4',\n            id: 'App4',\n            checkProps: { 'aria-label': 'app-4-check', checked: false },\n            children: [\n              {\n                name: 'Settings',\n                id: 'App4Settings',\n                checkProps: { 'aria-label': 'app-4-settings-check', checked: false }\n              }\n            ]\n          }\n        ]\n      },\n      {\n        name: 'Really really really long folder name that overflows the container it is in',\n        id: 'Long',\n        checkProps: { 'aria-label': 'long-check', checked: false },\n        children: [{ name: 'Application 5', id: 'App5', checkProps: { 'aria-label': 'app-5-check', checked: false } }]\n      }\n    ];\n\n    this.state = { checkedItems: [] };\n\n    this.onCheck = (evt, treeViewItem) => {\n      const checked = evt.target.checked;\n      console.log(checked);\n\n      const checkedItemTree = this.options\n        .map(opt => Object.assign({}, opt))\n        .filter(item => this.filterItems(item, treeViewItem));\n      const flatCheckedItems = this.flattenTree(checkedItemTree);\n      console.log('flat', flatCheckedItems);\n\n      this.setState(\n        prevState => ({\n          checkedItems: checked\n            ? prevState.checkedItems.concat(\n                flatCheckedItems.filter(item => !prevState.checkedItems.some(i => i.id === item.id))\n              )\n            : prevState.checkedItems.filter(item => !flatCheckedItems.some(i => i.id === item.id))\n        }),\n        () => {\n          console.log('Checked items: ', this.state.checkedItems);\n        }\n      );\n    };\n\n    // Helper functions\n    const isChecked = dataItem => this.state.checkedItems.some(item => item.id === dataItem.id);\n    const areAllDescendantsChecked = dataItem =>\n      dataItem.children ? dataItem.children.every(child => areAllDescendantsChecked(child)) : isChecked(dataItem);\n    const areSomeDescendantsChecked = dataItem =>\n      dataItem.children ? dataItem.children.some(child => areSomeDescendantsChecked(child)) : isChecked(dataItem);\n\n    this.flattenTree = tree => {\n      var result = [];\n      tree.forEach(item => {\n        result.push(item);\n        if (item.children) {\n          result = result.concat(this.flattenTree(item.children));\n        }\n      });\n      return result;\n    };\n\n    this.mapTree = item => {\n      const hasCheck = areAllDescendantsChecked(item);\n      // Reset checked properties to be updated\n      item.checkProps.checked = false;\n\n      if (hasCheck) {\n        item.checkProps.checked = true;\n      } else {\n        const hasPartialCheck = areSomeDescendantsChecked(item);\n        if (hasPartialCheck) {\n          item.checkProps.checked = null;\n        }\n      }\n\n      if (item.children) {\n        return {\n          ...item,\n          children: item.children.map(child => this.mapTree(child))\n        };\n      }\n      return item;\n    };\n\n    this.filterItems = (item, checkedItem) => {\n      if (item.id === checkedItem.id) {\n        return true;\n      }\n\n      if (item.children) {\n        return (\n          (item.children = item.children\n            .map(opt => Object.assign({}, opt))\n            .filter(child => this.filterItems(child, checkedItem))).length > 0\n        );\n      }\n    };\n  }\n\n  render() {\n    const mapped = this.options.map(item => this.mapTree(item));\n    return <TreeView data={mapped} onCheck={this.onCheck} hasChecks />;\n  }\n}","title":"With checkboxes","lang":"js"}}>
      
    </Example>,
  'With icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView } from '@patternfly/react-core';\nimport FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';\nimport FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';\n\nclass IconTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { activeItems: {} };\n\n    this.onSelect = (evt, treeViewItem) => {\n      this.setState({\n        activeItems: [treeViewItem]\n      });\n    };\n  }\n\n  render() {\n    const { activeItems } = this.state;\n    const options = [\n      {\n        name: 'Application launcher',\n        id: 'AppLaunch',\n        children: [\n          {\n            name: 'Application 1',\n            id: 'App1',\n            children: [\n              { name: 'Settings', id: 'App1Settings' },\n              { name: 'Current', id: 'App1Current' }\n            ]\n          },\n          {\n            name: 'Application 2',\n            id: 'App2',\n            children: [\n              { name: 'Settings', id: 'App2Settings' },\n              {\n                name: 'Loader',\n                id: 'App2Loader',\n                children: [\n                  { name: 'Loading App 1', id: 'LoadApp1' },\n                  { name: 'Loading App 2', id: 'LoadApp2' },\n                  { name: 'Loading App 3', id: 'LoadApp3' }\n                ]\n              }\n            ]\n          }\n        ],\n        defaultExpanded: true\n      },\n      {\n        name: 'Cost management',\n        id: 'Cost',\n        children: [\n          {\n            name: 'Application 3',\n            id: 'App3',\n            children: [\n              { name: 'Settings', id: 'App3Settings' },\n              { name: 'Current', id: 'App3Current' }\n            ]\n          }\n        ]\n      },\n      {\n        name: 'Sources',\n        id: 'Sources',\n        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]\n      },\n      {\n        name: 'Really really really long folder name that overflows the container it is in',\n        id: 'Long',\n        children: [{ name: 'Application 5', id: 'App5' }]\n      }\n    ];\n    return (\n      <TreeView\n        data={options}\n        activeItems={activeItems}\n        onSelect={this.onSelect}\n        icon={<FolderIcon />}\n        expandedIcon={<FolderOpenIcon />}\n      />\n    );\n  }\n}","title":"With icons","lang":"js"}}>
      
    </Example>,
  'With badges': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView } from '@patternfly/react-core';\n\nclass BadgesTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { activeItems: {} };\n\n    this.onSelect = (evt, treeViewItem) => {\n      this.setState({\n        activeItems: [treeViewItem]\n      });\n    };\n  }\n\n  render() {\n    const { activeItems } = this.state;\n    const options = [\n      {\n        name: 'Application launcher',\n        id: 'AppLaunch',\n        children: [\n          {\n            name: 'Application 1',\n            id: 'App1',\n            children: [\n              { name: 'Settings', id: 'App1Settings' },\n              { name: 'Current', id: 'App1Current' }\n            ]\n          },\n          {\n            name: 'Application 2',\n            id: 'App2',\n            children: [\n              { name: 'Settings', id: 'App2Settings' },\n              {\n                name: 'Loader',\n                id: 'App2Loader',\n                children: [\n                  { name: 'Loading App 1', id: 'LoadApp1' },\n                  { name: 'Loading App 2', id: 'LoadApp2' },\n                  { name: 'Loading App 3', id: 'LoadApp3' }\n                ]\n              }\n            ]\n          }\n        ],\n        defaultExpanded: true\n      },\n      {\n        name: 'Cost management',\n        id: 'Cost',\n        children: [\n          {\n            name: 'Application 3',\n            id: 'App3',\n            children: [\n              { name: 'Settings', id: 'App3Settings' },\n              { name: 'Current', id: 'App3Current' }\n            ]\n          }\n        ]\n      },\n      {\n        name: 'Sources',\n        id: 'Sources',\n        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]\n      },\n      {\n        name: 'Really really really long folder name that overflows the container it is in',\n        id: 'Long',\n        children: [{ name: 'Application 5', id: 'App5' }]\n      }\n    ];\n    return <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} hasBadges />;\n  }\n}","title":"With badges","lang":"js"}}>
      
    </Example>,
  'With custom badges': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView } from '@patternfly/react-core';\n\nclass CustomBadgesTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { activeItems: {} };\n\n    this.onSelect = (evt, treeViewItem) => {\n      this.setState({\n        activeItems: [treeViewItem]\n      });\n    };\n  }\n\n  render() {\n    const { activeItems } = this.state;\n    const options = [\n      {\n        name: 'Application launcher',\n        id: 'AppLaunch',\n        customBadgeContent: '2 applications',\n        children: [\n          {\n            name: 'Application 1',\n            id: 'App1',\n            customBadgeContent: '2 children',\n            children: [\n              { name: 'Settings', id: 'App1Settings' },\n              { name: 'Current', id: 'App1Current' }\n            ]\n          },\n          {\n            name: 'Application 2',\n            id: 'App2',\n            customBadgeContent: '2 children',\n            children: [\n              { name: 'Settings', id: 'App2Settings' },\n              {\n                name: 'Loader',\n                id: 'App2Loader',\n                customBadgeContent: '3 loading apps',\n                children: [\n                  { name: 'Loading app 1', id: 'LoadApp1' },\n                  { name: 'Loading app 2', id: 'LoadApp2' },\n                  { name: 'Loading app 3', id: 'LoadApp3' }\n                ]\n              }\n            ]\n          }\n        ],\n        defaultExpanded: true\n      },\n      {\n        name: 'Cost management',\n        id: 'Cost',\n        customBadgeContent: '1 applications',\n        children: [\n          {\n            name: 'Application 3',\n            id: 'App3',\n            customBadgeContent: '2 children',\n            children: [\n              { name: 'Settings', id: 'App3Settings' },\n              { name: 'Current', id: 'App3Current' }\n            ]\n          }\n        ]\n      },\n      {\n        name: 'Sources',\n        id: 'Sources',\n        customBadgeContent: '1 source',\n        children: [\n          {\n            name: 'Application 4',\n            id: 'App4',\n            customBadgeContent: '1 child',\n            children: [{ name: 'Settings', id: 'App4Settings' }]\n          }\n        ]\n      },\n      {\n        name: 'Really really really long folder name that overflows the container it is in',\n        id: 'Long',\n        customBadgeContent: '1 application',\n        children: [{ name: 'Application 5', id: 'App5' }]\n      }\n    ];\n    return <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} hasBadges />;\n  }\n}","title":"With custom badges","lang":"js"}}>
      
    </Example>,
  'With action items': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView, Button, Dropdown, DropdownItem, KebabToggle } from '@patternfly/react-core';\nimport ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';\nimport HamburgerIcon from '@patternfly/react-icons/dist/esm/icons/hamburger-icon';\n\nclass IconTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { activeItems: {}, isOpen: false };\n\n    this.onSelect = (evt, treeViewItem) => {\n      this.setState({\n        activeItems: [treeViewItem]\n      });\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onAppLaunchSelect = event => {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    };\n  }\n\n  render() {\n    const { activeItems, isOpen } = this.state;\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n        Disabled Link\n      </DropdownItem>,\n      <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n        Disabled Action\n      </DropdownItem>\n    ];\n    const options = [\n      {\n        name: 'Application launcher',\n        id: 'AppLaunch',\n        action: (\n          <Dropdown\n            onSelect={this.onAppLaunchSelect}\n            toggle={<KebabToggle onToggle={this.onToggle} />}\n            isOpen={isOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n          />\n        ),\n        children: [\n          {\n            name: 'Application 1',\n            id: 'App1',\n            action: (\n              <Button variant=\"plain\" aria-label=\"Launch app 1\">\n                <ClipboardIcon />\n              </Button>\n            ),\n            actionProps: {\n              'aria-label': 'Launch app 1'\n            },\n            children: [\n              { name: 'Settings', id: 'App1Settings' },\n              { name: 'Current', id: 'App1Current' }\n            ]\n          },\n          {\n            name: 'Application 2',\n            id: 'App2',\n            action: (\n              <Button variant=\"plain\" aria-label=\"Launch app 1\">\n                <HamburgerIcon />\n              </Button>\n            ),\n            children: [\n              { name: 'Settings', id: 'App2Settings' },\n              {\n                name: 'Loader',\n                id: 'App2Loader',\n                children: [\n                  { name: 'Loading App 1', id: 'LoadApp1' },\n                  { name: 'Loading App 2', id: 'LoadApp2' },\n                  { name: 'Loading App 3', id: 'LoadApp3' }\n                ]\n              }\n            ]\n          }\n        ],\n        defaultExpanded: true\n      },\n      {\n        name: 'Cost management',\n        id: 'Cost',\n        children: [\n          {\n            name: 'Application 3',\n            id: 'App3',\n            children: [\n              { name: 'Settings', id: 'App3Settings' },\n              { name: 'Current', id: 'App3Current' }\n            ]\n          }\n        ]\n      },\n      {\n        name: 'Sources',\n        id: 'Sources',\n        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]\n      },\n      {\n        name: 'Really really really long folder name that overflows the container it is in',\n        id: 'Long',\n        children: [{ name: 'Application 5', id: 'App5' }]\n      }\n    ];\n    return <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} />;\n  }\n}","title":"With action items","lang":"js"}}>
      
    </Example>,
  'Guides': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView, TreeViewDataItem } from '@patternfly/react-core';\n\nconst GuidesTreeView: React.FunctionComponent = () => {\n  const options: TreeViewDataItem[] = [\n    {\n      name: 'Application launcher',\n      id: 'AppLaunch',\n      children: [\n        {\n          name: 'Application 1',\n          id: 'App1',\n          children: [\n            { name: 'Settings', id: 'App1Settings' },\n            { name: 'Current', id: 'App1Current' }\n          ]\n        },\n        {\n          name: 'Application 2',\n          id: 'App2',\n          children: [\n            { name: 'Settings', id: 'App2Settings' },\n            {\n              name: 'Loader',\n              id: 'App2Loader',\n              children: [\n                { name: 'Loading App 1', id: 'LoadApp1' },\n                { name: 'Loading App 2', id: 'LoadApp2' },\n                { name: 'Loading App 3', id: 'LoadApp3' }\n              ]\n            }\n          ]\n        }\n      ],\n      defaultExpanded: true\n    },\n    {\n      name: 'Cost management',\n      id: 'Cost',\n      children: [\n        {\n          name: 'Application 3',\n          id: 'App3',\n          children: [\n            { name: 'Settings', id: 'App3Settings' },\n            { name: 'Current', id: 'App3Current' }\n          ]\n        }\n      ]\n    },\n    {\n      name: 'Sources',\n      id: 'Sources',\n      children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]\n    },\n    {\n      name: 'Really really really long folder name that overflows the container it is in',\n      id: 'Long',\n      children: [{ name: 'Application 5', id: 'App5' }]\n    }\n  ];\n  return <TreeView data={options} hasGuides={true} />;\n};","title":"Guides","lang":"ts"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView, TreeViewDataItem } from '@patternfly/react-core';\n\nconst CompactTreeView: React.FunctionComponent = () => {\n  const options: TreeViewDataItem[] = [\n    {\n      name:\n        'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',\n      title: 'apiVersion',\n      id: 'apiVersion'\n    },\n    {\n      name:\n        'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',\n      title: 'kind',\n      id: 'kind'\n    },\n    {\n      name: 'Standard metadata object',\n      title: 'metadata',\n      id: 'metadata'\n    },\n    {\n      name: 'Standard metadata object',\n      title: 'spec',\n      id: 'spec',\n      children: [\n        {\n          name:\n            'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',\n          title: 'minReadySeconds',\n          id: 'minReadySeconds'\n        },\n        {\n          name: 'Indicates that the deployment is paused',\n          title: 'paused',\n          id: 'paused'\n        },\n        {\n          name:\n            'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',\n          title: 'progressDeadlineSeconds',\n          id: 'progressDeadlineSeconds',\n          children: [\n            {\n              name:\n                'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',\n              title: 'revisionHistoryLimit',\n              id: 'revisionHistoryLimit',\n              children: [\n                {\n                  name:\n                    'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\" and the values array contains only \"value\". The requirements are ANDed.',\n                  title: 'matchLabels',\n                  id: 'matchLabels'\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ];\n  return <TreeView data={options} variant=\"compact\" />;\n};","title":"Compact","lang":"ts"}}>
      
    </Example>,
  'Compact, no background': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView, TreeViewDataItem } from '@patternfly/react-core';\n\nconst CompactNoBackgroundTreeView: React.FunctionComponent = () => {\n  const options: TreeViewDataItem[] = [\n    {\n      name:\n        'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',\n      title: 'apiVersion',\n      id: 'apiVersion'\n    },\n    {\n      name:\n        'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',\n      title: 'kind',\n      id: 'kind'\n    },\n    {\n      name: 'Standard metadata object',\n      title: 'metadata',\n      id: 'metadata'\n    },\n    {\n      name: 'Standard metadata object',\n      title: 'spec',\n      id: 'spec',\n      children: [\n        {\n          name:\n            'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',\n          title: 'minReadySeconds',\n          id: 'minReadySeconds'\n        },\n        {\n          name: 'Indicates that the deployment is paused',\n          title: 'paused',\n          id: 'paused'\n        },\n        {\n          name:\n            'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',\n          title: 'progressDeadlineSeconds',\n          id: 'progressDeadlineSeconds',\n          children: [\n            {\n              name:\n                'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',\n              title: 'revisionHistoryLimit',\n              id: 'revisionHistoryLimit',\n              children: [\n                {\n                  name:\n                    'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\" and the values array contains only \"value\". The requirements are ANDed.',\n                  title: 'matchLabels',\n                  id: 'matchLabels'\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ];\n  return <TreeView data={options} variant=\"compactNoBackground\" />;\n};","title":"Compact, no background","lang":"ts"}}>
      
    </Example>,
  'With memoization': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TreeView, Button } from '@patternfly/react-core';\n\nclass MemoTreeView extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { activeItems: {}, allExpanded: false };\n\n    this.onSelect = (evt, treeViewItem) => {\n      let filtered = [];\n      this.options.forEach(item => this.filterItems(item, treeViewItem.id, filtered));\n      this.setState({\n        activeItems: filtered\n      });\n    };\n\n    this.onToggle = evt => {\n      const { allExpanded } = this.state;\n      this.setState({\n        allExpanded: allExpanded !== undefined ? !allExpanded : true\n      });\n    };\n\n    this.filterItems = (item, input, list) => {\n      if (item.children) {\n        let childContained = false;\n        item.children.forEach(child => {\n          if (childContained) {\n            this.filterItems(child, input, list);\n          } else {\n            childContained = this.filterItems(child, input, list);\n          }\n        });\n        if (childContained) {\n          list.push(item);\n        }\n      }\n\n      if (item.id === input) {\n        list.push(item);\n        return true;\n      } else {\n        return false;\n      }\n    };\n\n    this.options = [];\n    for (let i = 1; i <= 20; i++) {\n      const childNum = 5;\n      let childOptions = [];\n      for (let j = 1; j <= childNum; j++) {\n        childOptions.push({ name: 'Child ' + j, id: `Option${i} - Child${j}` });\n      }\n      this.options.push({ name: 'Option ' + i, id: i, children: childOptions });\n    }\n  }\n\n  render() {\n    const { activeItems, allExpanded } = this.state;\n    const tree = (\n      <TreeView\n        data={this.options}\n        activeItems={activeItems}\n        onSelect={this.onSelect}\n        allExpanded={allExpanded}\n        useMemo\n      />\n    );\n\n    return (\n      <React.Fragment>\n        <Button variant=\"link\" onClick={this.onToggle}>\n          {allExpanded && 'Collapse all'}\n          {!allExpanded && 'Expand all'}\n        </Button>\n        {tree}\n      </React.Fragment>\n    );\n  }\n}","title":"With memoization","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Turning on memoization with the `}
        
        <code {...{"className":"ws-code"}}>
          {`useMemo`}
        </code>
        {` property helps prevent unnecessary re-renders for large data sets. With this flag active, `}
        
        <code {...{"className":"ws-code"}}>
          {`activeItems`}
        </code>
        {` must pass in an array of nodes along the selected item's path to update properly.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["With search"])}
    {React.createElement(pageData.examples["With checkboxes"])}
    {React.createElement(pageData.examples["With icons"])}
    {React.createElement(pageData.examples["With badges"])}
    {React.createElement(pageData.examples["With custom badges"])}
    {React.createElement(pageData.examples["With action items"])}
    {React.createElement(pageData.examples["Guides"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Compact, no background"])}
    {React.createElement(pageData.examples["With memoization"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTreeViewReactDocs';
Component.pageData = pageData;

export default Component;
