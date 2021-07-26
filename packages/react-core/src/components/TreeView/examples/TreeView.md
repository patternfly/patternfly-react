---
id: Tree view
section: components
cssPrefix: pf-c-treeview
propComponents: ['TreeView', 'TreeViewDataItem']
beta: true
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

    this.state = { activeItems: {}, allExpanded: null };

    this.onSelect = (evt, treeViewItem) => {
      this.setState({
        activeItems: [treeViewItem]
      });
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
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [
              { name: 'Settings', id: 'App1Settings' },
              { name: 'Current', id: 'App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'App2',
            children: [
              { name: 'Settings', id: 'App2Settings' },
              {
                name: 'Loader',
                id: 'App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'LoadApp1' },
                  { name: 'Loading App 2', id: 'LoadApp2' },
                  { name: 'Loading App 3', id: 'LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [
              { name: 'Settings', id: 'App3Settings' },
              { name: 'Current', id: 'App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'Sources',
        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'Long',
        children: [{ name: 'Application 5', id: 'App5' }]
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

### With search

```js
import React from 'react';
import { TreeView } from '@patternfly/react-core';

class SearchTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.options = [
      {
        name: 'Application launcher',
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [
              { name: 'Settings', id: 'App1Settings' },
              { name: 'Current', id: 'App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'App2',
            children: [
              { name: 'Settings', id: 'App2Settings' },
              {
                name: 'Loader',
                id: 'App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'LoadApp1' },
                  { name: 'Loading App 2', id: 'LoadApp2' },
                  { name: 'Loading App 3', id: 'LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [
              { name: 'Settings', id: 'App3Settings' },
              { name: 'Current', id: 'App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'Sources',
        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'Long',
        children: [{ name: 'Application 5', id: 'App5' }]
      }
    ];

    this.state = { activeItems: {}, filteredItems: this.options, isFiltered: null };

    this.onSelect = (evt, treeViewItem) => {
      this.setState({
        activeItems: [treeViewItem]
      });
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

    return (
      <TreeView
        data={filteredItems}
        activeItems={activeItems}
        onSelect={this.onSelect}
        onSearch={this.onSearch}
        searchProps={{ id: 'input-search', name: 'search-input', 'aria-label': 'Search input example' }}
        allExpanded={isFiltered}
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
        id: 'AppLaunch',
        checkProps: { 'aria-label': 'app-launcher-check', checked: false },
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            checkProps: { checked: false },
            children: [
              {
                name: 'Settings',
                id: 'App1Settings',
                checkProps: { checked: false }
              },
              {
                name: 'Current',
                id: 'App1Current',
                checkProps: { checked: false }
              }
            ]
          },
          {
            name: 'Application 2',
            id: 'App2',
            checkProps: { checked: false },
            children: [
              {
                name: 'Settings',
                id: 'App2Settings',
                checkProps: { checked: false }
              },
              {
                name: 'Loader',
                id: 'App2Loader',
                checkProps: { checked: false },
                children: [
                  {
                    name: 'Loading App 1',
                    id: 'LoadApp1',
                    checkProps: { checked: false }
                  },
                  {
                    name: 'Loading App 2',
                    id: 'LoadApp2',
                    checkProps: { checked: false }
                  },
                  {
                    name: 'Loading App 3',
                    id: 'LoadApp3',
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
        id: 'Cost',
        checkProps: { 'aria-label': 'cost-check', checked: false },
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            checkProps: { 'aria-label': 'app-3-check', checked: false },
            children: [
              {
                name: 'Settings',
                id: 'App3Settings',
                checkProps: { 'aria-label': 'app-3-settings-check', checked: false }
              },
              {
                name: 'Current',
                id: 'App3Current',
                checkProps: { 'aria-label': 'app-3-current-check', checked: false }
              }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'Sources',
        checkProps: { 'aria-label': 'sources-check', checked: false },
        children: [
          {
            name: 'Application 4',
            id: 'App4',
            checkProps: { 'aria-label': 'app-4-check', checked: false },
            children: [
              {
                name: 'Settings',
                id: 'App4Settings',
                checkProps: { 'aria-label': 'app-4-settings-check', checked: false }
              }
            ]
          }
        ]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'Long',
        checkProps: { 'aria-label': 'long-check', checked: false },
        children: [{ name: 'Application 5', id: 'App5', checkProps: { 'aria-label': 'app-5-check', checked: false } }]
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
    return (
      <TreeView data={mapped} onCheck={this.onCheck} hasChecks />
    );
  }
}
```

### With icons

```js
import React from 'react';
import { TreeView } from '@patternfly/react-core';
import FolderIcon from '@patternfly/react-icons/dist/js/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/js/icons/folder-open-icon';

class IconTreeView extends React.Component {
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
    const { activeItems } = this.state;
    const options = [
      {
        name: 'Application launcher',
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [
              { name: 'Settings', id: 'App1Settings' },
              { name: 'Current', id: 'App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'App2',
            children: [
              { name: 'Settings', id: 'App2Settings' },
              {
                name: 'Loader',
                id: 'App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'LoadApp1' },
                  { name: 'Loading App 2', id: 'LoadApp2' },
                  { name: 'Loading App 3', id: 'LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [
              { name: 'Settings', id: 'App3Settings' },
              { name: 'Current', id: 'App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'Sources',
        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'Long',
        children: [{ name: 'Application 5', id: 'App5' }]
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
      this.setState({
        activeItems: [treeViewItem]
      });
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'Application launcher',
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [
              { name: 'Settings', id: 'App1Settings' },
              { name: 'Current', id: 'App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'App2',
            children: [
              { name: 'Settings', id: 'App2Settings' },
              {
                name: 'Loader',
                id: 'App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'LoadApp1' },
                  { name: 'Loading App 2', id: 'LoadApp2' },
                  { name: 'Loading App 3', id: 'LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [
              { name: 'Settings', id: 'App3Settings' },
              { name: 'Current', id: 'App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'Sources',
        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'Long',
        children: [{ name: 'Application 5', id: 'App5' }]
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
      this.setState({
        activeItems: [treeViewItem]
      });
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'Application launcher',
        id: 'AppLaunch',
        customBadgeContent: '2 applications',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            customBadgeContent: '2 children',
            children: [
              { name: 'Settings', id: 'App1Settings' },
              { name: 'Current', id: 'App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'App2',
            customBadgeContent: '2 children',
            children: [
              { name: 'Settings', id: 'App2Settings' },
              {
                name: 'Loader',
                id: 'App2Loader',
                customBadgeContent: '3 loading apps',
                children: [
                  { name: 'Loading app 1', id: 'LoadApp1' },
                  { name: 'Loading app 2', id: 'LoadApp2' },
                  { name: 'Loading app 3', id: 'LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'Cost',
        customBadgeContent: '1 applications',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            customBadgeContent: '2 children',
            children: [
              { name: 'Settings', id: 'App3Settings' },
              { name: 'Current', id: 'App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'Sources',
        customBadgeContent: '1 source',
        children: [{ name: 'Application 4', id: 'App4', customBadgeContent: '1 child', children: [{ name: 'Settings', id: 'App4Settings' }] }]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'Long',
        customBadgeContent: '1 application',
        children: [{ name: 'Application 5', id: 'App5' }]
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
import ClipboardIcon from '@patternfly/react-icons/dist/js/icons/clipboard-icon';
import HamburgerIcon from '@patternfly/react-icons/dist/js/icons/hamburger-icon';

class IconTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {}, isOpen: false };

    this.onSelect = (evt, treeViewItem) => {
      this.setState({
        activeItems: [treeViewItem]
      });
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
        id: 'AppLaunch',
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
            id: 'App1',
            action: (
              <Button variant="plain" aria-label="Launch app 1">
                <ClipboardIcon />
              </Button>
            ),
            actionProps: {
              'aria-label': 'Launch app 1'
            },
            children: [
              { name: 'Settings', id: 'App1Settings' },
              { name: 'Current', id: 'App1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'App2',
            action: (
              <Button variant="plain" aria-label="Launch app 1">
                <HamburgerIcon />
              </Button>
            ),
            children: [
              { name: 'Settings', id: 'App2Settings' },
              {
                name: 'Loader',
                id: 'App2Loader',
                children: [
                  { name: 'Loading App 1', id: 'LoadApp1' },
                  { name: 'Loading App 2', id: 'LoadApp2' },
                  { name: 'Loading App 3', id: 'LoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [
              { name: 'Settings', id: 'App3Settings' },
              { name: 'Current', id: 'App3Current' }
            ]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'Sources',
        children: [{ name: 'Application 4', id: 'App4', children: [{ name: 'Settings', id: 'App4Settings' }] }]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'Long',
        children: [{ name: 'Application 5', id: 'App5' }]
      }
    ];
    return <TreeView data={options} activeItems={activeItems} onSelect={this.onSelect} />;
  }
}
```
