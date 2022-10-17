---
id: Tree view
section: components
cssPrefix: pf-c-tree-view
propComponents: ['TreeView', 'TreeViewDataItem', 'TreeViewSearch']
---

import { FolderIcon, FolderOpenIcon, EllipsisVIcon, ClipboardIcon, HamburgerIcon } from '@patternfly/react-icons';

## Examples

### Default

```js
import React from 'react';
import { TreeView, Button } from '@patternfly/react-core';

class DefaultTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: [], allExpanded: null };

    this.onSelect = (evt, treeViewItem) => {
      // Ignore folders for selection
      if (treeViewItem && !treeViewItem.children) {
        this.setState({
          activeItems: [treeViewItem]
        });
      }
    };

    this.onToggle = evt => {
      const { allExpanded } = this.state;
      this.setState({
        allExpanded: allExpanded !== undefined ? !allExpanded : true
      });
    };
  }

  render() {
    const { activeItems, allExpanded } = this.state;

    const options = [
      {
        name: 'Application launcher',
        id: 'example1-AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'example1-App1',
            children: [
              { name: 'Settings', id: 'example1-App1Settings' },
              { name: 'Current', id: 'example1-App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'example1-App2',
            children: [
              { name: 'Settings', id: 'example1-App2Settings' },
              {
                name: 'Loader',
                id: 'example1-App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'example1-LoadApp1' },
                  { name: 'Loading App 2', id: 'example1-LoadApp2' },
                  { name: 'Loading App 3', id: 'example1-LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'example1-Cost',
        children: [
          {
            name: 'Application 3',
            id: 'example1-App3',
            children: [
              { name: 'Settings', id: 'example1-App3Settings' },
              { name: 'Current', id: 'example1-App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'example1-Sources',
        children: [
          { name: 'Application 4', id: 'example1-App4', children: [{ name: 'Settings', id: 'example1-App4Settings' }] }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'example1-Long',
        children: [{ name: 'Application 5', id: 'example1-App5' }]
      }
    ];
    return (
      <React.Fragment>
        <Button variant="link" onClick={this.onToggle}>
          {allExpanded && 'Collapse all'}
          {!allExpanded && 'Expand all'}
        </Button>
        <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} allExpanded={allExpanded} />
      </React.Fragment>
    );
  }
}
```

### With separate selection and expansion

The `hasSelectableNodes` modifier will separate the expansion and selection behaviors, allowing a parent node to be selected or deselected with toggling its expansion.

```js
import React from 'react';
import { TreeView, Button } from '@patternfly/react-core';

class SelectableNodesTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {} };

    this.onSelect = (evt, treeViewItem) => {
      this.setState({
        activeItems: [treeViewItem]
      });
    };
  }

  render() {
    const { activeItems, allExpanded } = this.state;

    const options = [
      {
        name: 'Application launcher',
        id: 'SelNodesTreeView-AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'SelNodesTreeView-App1',
            children: [
              { name: 'Settings', id: 'SelNodesTreeView-App1Settings' },
              { name: 'Current', id: 'SelNodesTreeView-App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'SelNodesTreeView-App2',
            children: [
              { name: 'Settings', id: 'SelNodesTreeView-App2Settings' },
              {
                name: 'Loader',
                id: 'SelNodesTreeView-App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'SelNodesTreeView-LoadApp1' },
                  { name: 'Loading App 2', id: 'SelNodesTreeView-LoadApp2' },
                  { name: 'Loading App 3', id: 'SelNodesTreeView-LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'SelNodesTreeView-Cost',
        children: [
          {
            name: 'Application 3',
            id: 'SelNodesTreeView-App3',
            children: [
              { name: 'Settings', id: 'SelNodesTreeView-App3Settings' },
              { name: 'Current', id: 'SelNodesTreeView-App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'SelNodesTreeView-Sources',
        children: [
          {
            name: 'Application 4',
            id: 'SelNodesTreeView-App4',
            children: [{ name: 'Settings', id: 'SelNodesTreeView-App4Settings' }]
          }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'SelNodesTreeView-Long',
        children: [{ name: 'Application 5', id: 'SelNodesTreeView-App5' }]
      }
    ];
    return (
      <TreeView
        hasSelectableNodes
        data={options}
        activeItems={activeItems}
        onSelect={this.onSelect}
        allExpanded={allExpanded}
      />
    );
  }
}
```

### With search

```js
import React from 'react';
import { Toolbar, ToolbarContent, ToolbarItem, TreeView, TreeViewSearch } from '@patternfly/react-core';

class SearchTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.options = [
      {
        name: 'Application launcher',
        id: 'example2-AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'example2-App1',
            children: [
              { name: 'Settings', id: 'example2-App1Settings' },
              { name: 'Current', id: 'example2-App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'example2-App2',
            children: [
              { name: 'Settings', id: 'example2-App2Settings' },
              {
                name: 'Loader',
                id: 'example2-App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'example2-LoadApp1' },
                  { name: 'Loading App 2', id: 'example2-LoadApp2' },
                  { name: 'Loading App 3', id: 'example2-LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'example2-Cost',
        children: [
          {
            name: 'Application 3',
            id: 'example2-App3',
            children: [
              { name: 'Settings', id: 'example2-App3Settings' },
              { name: 'Current', id: 'example2-App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'example2-Sources',
        children: [
          {
            name: 'Application 4',
            id: 'example2-App4',
            children: [{ name: 'Settingexample2-s', id: 'example2-App4Settings' }]
          }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'example2-Long',
        children: [{ name: 'Application 5', id: 'example2-App5' }]
      }
    ];

    this.state = { activeItems: {}, filteredItems: this.options, isFiltered: null };

    this.onSelect = (evt, treeViewItem) => {
      // Ignore folders for selection
      if (treeViewItem && !treeViewItem.children) {
        this.setState({
          activeItems: [treeViewItem]
        });
      }
    };

    this.onSearch = evt => {
      const input = evt.target.value;
      if (input === '') {
        this.setState({ filteredItems: this.options, isFiltered: false });
      } else {
        const filtered = this.options.map(opt => Object.assign({}, opt)).filter(item => this.filterItems(item, input));
        this.setState({ filteredItems: filtered, isFiltered: true });
      }
    };

    this.filterItems = (item, input) => {
      if (item.name.toLowerCase().includes(input.toLowerCase())) {
        return true;
      }

      if (item.children) {
        return (
          (item.children = item.children
            .map(opt => Object.assign({}, opt))
            .filter(child => this.filterItems(child, input))).length > 0
        );
      }
    };
  }

  render() {
    const { activeItems, filteredItems, isFiltered } = this.state;

    const toolbar = (
      <Toolbar style={{ padding: 0 }}>
        <ToolbarContent style={{ padding: 0 }}>
          <ToolbarItem widths={{ default: '100%' }}>
            <TreeViewSearch
              onSearch={this.onSearch}
              id="input-search"
              name="search-input"
              aria-label="Search input example"
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );

    return (
      <TreeView
        data={filteredItems}
        activeItems={activeItems}
        onSelect={this.onSelect}
        allExpanded={isFiltered}
        toolbar={toolbar}
      />
    );
  }
}
```

### With checkboxes

```js
import React from 'react';
import { TreeView } from '@patternfly/react-core';

class CheckboxTreeView extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      {
        name: 'Application launcher',
        id: 'example3-AppLaunch',
        checkProps: { 'aria-label': 'app-launcher-check', checked: false },
        children: [
          {
            name: 'Application 1',
            id: 'example3-App1',
            checkProps: { checked: false },
            children: [
              {
                name: 'Settings',
                id: 'example3-App1Settings',
                checkProps: { checked: false }
              },
              {
                name: 'Current',
                id: 'example3-App1Current',
                checkProps: { checked: false }
              }
            ]
          },
          {
            name: 'Application 2',
            id: 'example3-App2',
            checkProps: { checked: false },
            children: [
              {
                name: 'Settings',
                id: 'example3-App2Settings',
                checkProps: { checked: false }
              },
              {
                name: 'Loader',
                id: 'example3-App2Loader',
                checkProps: { checked: false },
                children: [
                  {
                    name: 'Loading App 1',
                    id: 'example3-LoadApp1',
                    checkProps: { checked: false }
                  },
                  {
                    name: 'Loading App 2',
                    id: 'example3-LoadApp2',
                    checkProps: { checked: false }
                  },
                  {
                    name: 'Loading App 3',
                    id: 'example3-LoadApp3',
                    checkProps: { checked: false }
                  }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'example3-Cost',
        checkProps: { 'aria-label': 'cost-check', checked: false },
        children: [
          {
            name: 'Application 3',
            id: 'example3-App3',
            checkProps: { 'aria-label': 'app-3-check', checked: false },
            children: [
              {
                name: 'Settings',
                id: 'example3-App3Settings',
                checkProps: { 'aria-label': 'app-3-settings-check', checked: false }
              },
              {
                name: 'Current',
                id: 'example3-App3Current',
                checkProps: { 'aria-label': 'app-3-current-check', checked: false }
              }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'example3-Sources',
        checkProps: { 'aria-label': 'sources-check', checked: false },
        children: [
          {
            name: 'Application 4',
            id: 'example3-App4',
            checkProps: { 'aria-label': 'app-4-check', checked: false },
            children: [
              {
                name: 'Settings',
                id: 'example3-App4Settings',
                checkProps: { 'aria-label': 'app-4-settings-check', checked: false }
              }
            ]
          }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'example3-Long',
        checkProps: { 'aria-label': 'long-check', checked: false },
        children: [
          { name: 'Application 5', id: 'example3-App5', checkProps: { 'aria-label': 'app-5-check', checked: false } }
        ]
      }
    ];

    this.state = { checkedItems: [] };

    this.onCheck = (evt, treeViewItem) => {
      const checked = evt.target.checked;
      console.log(checked);

      const checkedItemTree = this.options
        .map(opt => Object.assign({}, opt))
        .filter(item => this.filterItems(item, treeViewItem));
      const flatCheckedItems = this.flattenTree(checkedItemTree);
      console.log('flat', flatCheckedItems);

      this.setState(
        prevState => ({
          checkedItems: checked
            ? prevState.checkedItems.concat(
                flatCheckedItems.filter(item => !prevState.checkedItems.some(i => i.id === item.id))
              )
            : prevState.checkedItems.filter(item => !flatCheckedItems.some(i => i.id === item.id))
        }),
        () => {
          console.log('Checked items: ', this.state.checkedItems);
        }
      );
    };

    // Helper functions
    const isChecked = dataItem => this.state.checkedItems.some(item => item.id === dataItem.id);
    const areAllDescendantsChecked = dataItem =>
      dataItem.children ? dataItem.children.every(child => areAllDescendantsChecked(child)) : isChecked(dataItem);
    const areSomeDescendantsChecked = dataItem =>
      dataItem.children ? dataItem.children.some(child => areSomeDescendantsChecked(child)) : isChecked(dataItem);

    this.flattenTree = tree => {
      var result = [];
      tree.forEach(item => {
        result.push(item);
        if (item.children) {
          result = result.concat(this.flattenTree(item.children));
        }
      });
      return result;
    };

    this.mapTree = item => {
      const hasCheck = areAllDescendantsChecked(item);
      // Reset checked properties to be updated
      item.checkProps.checked = false;

      if (hasCheck) {
        item.checkProps.checked = true;
      } else {
        const hasPartialCheck = areSomeDescendantsChecked(item);
        if (hasPartialCheck) {
          item.checkProps.checked = null;
        }
      }

      if (item.children) {
        return {
          ...item,
          children: item.children.map(child => this.mapTree(child))
        };
      }
      return item;
    };

    this.filterItems = (item, checkedItem) => {
      if (item.id === checkedItem.id) {
        return true;
      }

      if (item.children) {
        return (
          (item.children = item.children
            .map(opt => Object.assign({}, opt))
            .filter(child => this.filterItems(child, checkedItem))).length > 0
        );
      }
    };
  }

  render() {
    const mapped = this.options.map(item => this.mapTree(item));
    return <TreeView data={mapped} onCheck={this.onCheck} hasChecks />;
  }
}
```

### With icons

```js
import React from 'react';
import { TreeView } from '@patternfly/react-core';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

class IconTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {} };

    this.onSelect = (evt, treeViewItem) => {
      // Ignore folders for selection
      if (treeViewItem && !treeViewItem.children) {
        this.setState({
          activeItems: [treeViewItem]
        });
      }
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'Application launcher',
        id: 'example4-AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'example4-App1',
            children: [
              { name: 'Settings', id: 'example4-App1Settings' },
              { name: 'Current', id: 'example4-App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'example4-App2',
            children: [
              { name: 'Settings', id: 'example4-App2Settings' },
              {
                name: 'Loader',
                id: 'example4-App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'example4-LoadApp1' },
                  { name: 'Loading App 2', id: 'example4-LoadApp2' },
                  { name: 'Loading App 3', id: 'example4-LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'example4-Cost',
        children: [
          {
            name: 'Application 3',
            id: 'example4-App3',
            children: [
              { name: 'Settings', id: 'example4-App3Settings' },
              { name: 'Current', id: 'example4-App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'example4-Sources',
        children: [
          { name: 'Application 4', id: 'example4-App4', children: [{ name: 'Settings', id: 'example4-App4Settings' }] }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'example4-Long',
        children: [{ name: 'Application 5', id: 'example4-App5' }]
      }
    ];
    return (
      <TreeView
        data={options}
        activeItems={activeItems}
        onSelect={this.onSelect}
        icon={<FolderIcon />}
        expandedIcon={<FolderOpenIcon />}
      />
    );
  }
}
```

### With badges

```js
import React from 'react';
import { TreeView } from '@patternfly/react-core';

class BadgesTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {} };

    this.onSelect = (evt, treeViewItem) => {
      // Ignore folders for selection
      if (treeViewItem && !treeViewItem.children) {
        this.setState({
          activeItems: [treeViewItem]
        });
      }
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'Application launcher',
        id: 'example5-AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'example5-App1',
            children: [
              { name: 'Settings', id: 'example5-App1Settings' },
              { name: 'Current', id: 'example5-App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'example5-App2',
            children: [
              { name: 'Settings', id: 'example5-App2Settings' },
              {
                name: 'Loader',
                id: 'example5-App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'example5-LoadApp1' },
                  { name: 'Loading App 2', id: 'example5-LoadApp2' },
                  { name: 'Loading App 3', id: 'example5-LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'example5-Cost',
        children: [
          {
            name: 'Application 3',
            id: 'example5-App3',
            children: [
              { name: 'Settings', id: 'example5-App3Settings' },
              { name: 'Current', id: 'example5-App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'example5-Sources',
        children: [
          { name: 'Application 4', id: 'example5-App4', children: [{ name: 'Settings', id: 'example5-App4Settings' }] }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'example5-Long',
        children: [{ name: 'Application 5', id: 'example5-App5' }]
      }
    ];
    return <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} hasBadges />;
  }
}
```

### With custom badges

```js
import React from 'react';
import { TreeView } from '@patternfly/react-core';

class CustomBadgesTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {} };

    this.onSelect = (evt, treeViewItem) => {
      // Ignore folders for selection
      if (treeViewItem && !treeViewItem.children) {
        this.setState({
          activeItems: [treeViewItem]
        });
      }
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'Application launcher',
        id: 'example6-AppLaunch',
        customBadgeContent: '2 applications',
        children: [
          {
            name: 'Application 1',
            id: 'example6-App1',
            customBadgeContent: '2 children',
            children: [
              { name: 'Settings', id: 'example6-App1Settings' },
              { name: 'Current', id: 'example6-App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'example6-App2',
            customBadgeContent: '2 children',
            children: [
              { name: 'Settings', id: 'example6-App2Settings' },
              {
                name: 'Loader',
                id: 'example6-App2Loader',
                customBadgeContent: '3 loading apps',
                children: [
                  { name: 'Loading app 1', id: 'example6-LoadApp1' },
                  { name: 'Loading app 2', id: 'example6-LoadApp2' },
                  { name: 'Loading app 3', id: 'example6-LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'example6-Cost',
        customBadgeContent: '1 applications',
        children: [
          {
            name: 'Application 3',
            id: 'example6-App3',
            customBadgeContent: '2 children',
            children: [
              { name: 'Settings', id: 'example6-App3Settings' },
              { name: 'Current', id: 'example6-App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'example6-Sources',
        customBadgeContent: '1 source',
        children: [
          {
            name: 'Application 4',
            id: 'example6-App4',
            customBadgeContent: '1 child',
            children: [{ name: 'Settings', id: 'example6-App4Settings' }]
          }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'example6-Long',
        customBadgeContent: '1 application',
        children: [{ name: 'Application 5', id: 'example6-App5' }]
      }
    ];
    return <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} hasBadges />;
  }
}
```

### With action items

```js
import React from 'react';
import { TreeView, Button, Dropdown, DropdownItem, KebabToggle } from '@patternfly/react-core';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import HamburgerIcon from '@patternfly/react-icons/dist/esm/icons/hamburger-icon';

class IconTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {}, isOpen: false };

    this.onSelect = (evt, treeViewItem) => {
      // Ignore folders for selection
      if (treeViewItem && !treeViewItem.children) {
        this.setState({
          activeItems: [treeViewItem]
        });
      }
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onAppLaunchSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { activeItems, isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled href="www.google.com">
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>
    ];
    const options = [
      {
        name: 'Application launcher',
        id: 'example7-AppLaunch',
        action: (
          <Dropdown
            onSelect={this.onAppLaunchSelect}
            toggle={<KebabToggle onToggle={this.onToggle} />}
            isOpen={isOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        ),
        children: [
          {
            name: 'Application 1',
            id: 'example7-App1',
            action: (
              <Button variant="plain" aria-label="Launch app 1">
                <ClipboardIcon />
              </Button>
            ),
            actionProps: {
              'aria-label': 'Launch app 1'
            },
            children: [
              { name: 'Settings', id: 'example7-App1Settings' },
              { name: 'Current', id: 'example7-App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'example7-App2',
            action: (
              <Button variant="plain" aria-label="Launch app 1">
                <HamburgerIcon />
              </Button>
            ),
            children: [
              { name: 'Settings', id: 'example7-App2Settings' },
              {
                name: 'Loader',
                id: 'example7-App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'example7-LoadApp1' },
                  { name: 'Loading App 2', id: 'example7-LoadApp2' },
                  { name: 'Loading App 3', id: 'example7-LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'example7-Cost',
        children: [
          {
            name: 'Application 3',
            id: 'example7-App3',
            children: [
              { name: 'Settings', id: 'example7-App3Settings' },
              { name: 'Current', id: 'example7-App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'example7-Sources',
        children: [
          { name: 'Application 4', id: 'example7-App4', children: [{ name: 'Settings', id: 'example7-App4Settings' }] }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'example7-Long',
        children: [{ name: 'Application 5', id: 'example7-App5' }]
      }
    ];
    return <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} />;
  }
}
```

### Guides

```ts
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

const GuidesTreeView: React.FunctionComponent = () => {
  const options: TreeViewDataItem[] = [
    {
      name: 'Application launcher',
      id: 'example8-AppLaunch',
      children: [
        {
          name: 'Application 1',
          id: 'example8-App1',
          children: [
            { name: 'Settings', id: 'example8-App1Settings' },
            { name: 'Current', id: 'example8-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'example8-App2',
          children: [
            { name: 'Settings', id: 'example8-App2Settings' },
            {
              name: 'Loader',
              id: 'example8-App2Loader',
              children: [
                { name: 'Loading App 1', id: 'example8-LoadApp1' },
                { name: 'Loading App 2', id: 'example8-LoadApp2' },
                { name: 'Loading App 3', id: 'example8-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'example8-Cost',
      children: [
        {
          name: 'Application 3',
          id: 'example8-App3',
          children: [
            { name: 'Settings', id: 'example8-App3Settings' },
            { name: 'Current', id: 'example8-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'example8-Sources',
      children: [
        { name: 'Application 4', id: 'example8-App4', children: [{ name: 'Settings', id: 'example8-App4Settings' }] }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'example8-Long',
      children: [{ name: 'Application 5', id: 'example8-App5' }]
    }
  ];
  return <TreeView data={options} hasGuides={true} />;
};
```

### Compact

```ts
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

const CompactTreeView: React.FunctionComponent = () => {
  const options: TreeViewDataItem[] = [
    {
      name:
        'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',
      title: 'apiVersion',
      id: 'example9-apiVersion'
    },
    {
      name:
        'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',
      title: 'kind',
      id: 'example9-kind'
    },
    {
      name: 'Standard metadata object',
      title: 'metadata',
      id: 'example9-metadata'
    },
    {
      name: 'Standard metadata object',
      title: 'spec',
      id: 'example9-spec',
      children: [
        {
          name:
            'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',
          title: 'minReadySeconds',
          id: 'example9-minReadySeconds'
        },
        {
          name: 'Indicates that the deployment is paused',
          title: 'paused',
          id: 'example9-paused'
        },
        {
          name:
            'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',
          title: 'progressDeadlineSeconds',
          id: 'example9-progressDeadlineSeconds',
          children: [
            {
              name:
                'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',
              title: 'revisionHistoryLimit',
              id: 'example9-revisionHistoryLimit',
              children: [
                {
                  name:
                    'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.',
                  title: 'matchLabels',
                  id: 'example9-matchLabels'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  return <TreeView data={options} variant="compact" />;
};
```

### Compact, no background

```ts
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

const CompactNoBackgroundTreeView: React.FunctionComponent = () => {
  const options: TreeViewDataItem[] = [
    {
      name:
        'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',
      title: 'apiVersion',
      id: 'example10-apiVersion'
    },
    {
      name:
        'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',
      title: 'kind',
      id: 'example10-kind'
    },
    {
      name: 'Standard metadata object',
      title: 'metadata',
      id: 'example10-metadata'
    },
    {
      name: 'Standard metadata object',
      title: 'spec',
      id: 'example10-spec',
      children: [
        {
          name:
            'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',
          title: 'minReadySeconds',
          id: 'example10-minReadySeconds'
        },
        {
          name: 'Indicates that the deployment is paused',
          title: 'paused',
          id: 'example10-paused'
        },
        {
          name:
            'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',
          title: 'progressDeadlineSeconds',
          id: 'example10-progressDeadlineSeconds',
          children: [
            {
              name:
                'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',
              title: 'revisionHistoryLimit',
              id: 'example10-revisionHistoryLimit',
              children: [
                {
                  name:
                    'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.',
                  title: 'matchLabels',
                  id: 'example10-matchLabels'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  return <TreeView data={options} variant="compactNoBackground" />;
};
```

### With memoization

Turning on memoization with the `useMemo` property helps prevent unnecessary re-renders for large data sets. With this flag active, `activeItems` must pass in an array of nodes along the selected item's path to update properly.

```js
import React from 'react';
import { TreeView, Button } from '@patternfly/react-core';

class MemoTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {}, allExpanded: false };

    this.onSelect = (evt, treeViewItem) => {
      let filtered = [];
      this.options.forEach(item => this.filterItems(item, treeViewItem.id, filtered));
      this.setState({
        activeItems: filtered
      });
    };

    this.onToggle = evt => {
      const { allExpanded } = this.state;
      this.setState({
        allExpanded: allExpanded !== undefined ? !allExpanded : true
      });
    };

    this.filterItems = (item, input, list) => {
      if (item.children) {
        let childContained = false;
        item.children.forEach(child => {
          if (childContained) {
            this.filterItems(child, input, list);
          } else {
            childContained = this.filterItems(child, input, list);
          }
        });
        if (childContained) {
          list.push(item);
        }
      }

      if (item.id === input) {
        list.push(item);
        return true;
      } else {
        return false;
      }
    };

    this.options = [];
    for (let i = 1; i <= 20; i++) {
      const childNum = 5;
      let childOptions = [];
      for (let j = 1; j <= childNum; j++) {
        childOptions.push({ name: 'Child ' + j, id: `Option${i} - Child${j}` });
      }
      this.options.push({ name: 'Option ' + i, id: i, children: childOptions });
    }
  }

  render() {
    const { activeItems, allExpanded } = this.state;
    const tree = (
      <TreeView
        data={this.options}
        activeItems={activeItems}
        onSelect={this.onSelect}
        allExpanded={allExpanded}
        useMemo
      />
    );

    return (
      <React.Fragment>
        <Button variant="link" onClick={this.onToggle}>
          {allExpanded && 'Collapse all'}
          {!allExpanded && 'Expand all'}
        </Button>
        {tree}
      </React.Fragment>
    );
  }
}
```
