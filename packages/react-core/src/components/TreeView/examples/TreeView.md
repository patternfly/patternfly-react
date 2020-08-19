---
id: TreeView
section: components
cssPrefix: pf-c-treeview
propComponents: ['TreeView', 'TreeViewList', 'TreeViewListItem']
beta: true
---

import { FolderIcon, FolderOpenIcon, EllipsisVIcon, ClipboardIcon, HamburgerIcon } from '@patternfly/react-icons';

## Examples

### Default

```js
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

class DefaultTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {} };

    this.onClick = (evt, treeViewItem, parentItem) => {
      this.setState({
        activeItems: [treeViewItem, parentItem]
      });
    };
  }

  render() {
    const { activeItems } = this.state;

    const options = [
      {
        name: 'ApplicationLauncher',
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [{ name: 'Settings', id: 'App1Settings' }, { name: 'Current', id: 'App1Current' }]
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
        name: 'Cost Management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [{ name: 'Settings', id: 'App3Settings' }, { name: 'Current', id: 'App3Current' }]
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
    return <TreeView data={options} activeItems={activeItems} onSelect={this.onClick} />;
  }
}
```

### With search

```js
import React from 'react';
import { TreeView, TreeViewDataItem, TreeViewSearch, Divider } from '@patternfly/react-core';

class SearchTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.options = [
      {
        name: 'ApplicationLauncher',
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [{ name: 'Settings', id: 'App1Settings' }, { name: 'Current', id: 'App1Current' }]
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
        name: 'Cost Management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [{ name: 'Settings', id: 'App3Settings' }, { name: 'Current', id: 'App3Current' }]
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

    this.state = { activeItems: {}, filteredItems: this.options };

    this.onClick = (evt, treeViewItem, parentItem) => {
      this.setState({
        activeItems: [treeViewItem, parentItem]
      });
    };

    this.onChange = evt => {
      const input = evt.target.value;
      if (input === '') {
        this.setState({ filteredItems: this.options });
      } else {
        const filtered = this.options.map(opt => Object.assign({}, opt)).filter(item => this.filterItems(item, input));
        this.setState({ filteredItems: filtered });
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
    const { activeItems, filteredItems } = this.state;

    return (
      <TreeView
        data={filteredItems}
        activeItems={activeItems}
        onSelect={this.onClick}
        onSearch={this.onChange}
        searchProps={{ id: 'input-search', name: 'search-input', 'aria-label': 'Search input example' }}
      />
    );
  }
}
```

### With checkboxes

```js
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

class CheckboxTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: [], checkedItems: [] };

    this.onClick = (evt, treeViewItem, parentItem) => {
      this.setState({
        activeItems: [treeViewItem, parentItem]
      });
    };

    this.onCheck = (evt, treeViewItem) => {
      const checked = evt.target.checked;
      console.log(checked);

      this.setState(
        prevState => ({
          checkedItems: checked
            ? [...prevState.checkedItems, treeViewItem]
            : prevState.checkedItems.filter(item => item.id !== treeViewItem.id)
        }),
        () => {
          console.log('Checked items: ', this.state.checkedItems);
        }
      );
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'ApplicationLauncher',
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [{ name: 'Settings', id: 'App1Settings' }, { name: 'Current', id: 'App1Current' }]
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
        name: 'Cost Management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [{ name: 'Settings', id: 'App3Settings' }, { name: 'Current', id: 'App3Current' }]
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
      <TreeView data={options} activeItems={activeItems} onSelect={this.onClick} onCheck={this.onCheck} hasChecks />
    );
  }
}
```

### With icons

```js
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';
import { FolderIcon, FolderOpenIcon } from '@patternfly/react-icons';

class IconTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {} };

    this.onClick = (evt, treeViewItem, parentItem) => {
      this.setState({
        activeItems: [treeViewItem, parentItem]
      });
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'ApplicationLauncher',
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [{ name: 'Settings', id: 'App1Settings' }, { name: 'Current', id: 'App1Current' }]
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
        name: 'Cost Management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [{ name: 'Settings', id: 'App3Settings' }, { name: 'Current', id: 'App3Current' }]
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
        onSelect={this.onClick}
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
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

class BadgesTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {} };

    this.onClick = (evt, treeViewItem, parentItem) => {
      this.setState({
        activeItems: [treeViewItem, parentItem]
      });
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'ApplicationLauncher',
        id: 'AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            children: [{ name: 'Settings', id: 'App1Settings' }, { name: 'Current', id: 'App1Current' }]
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
        name: 'Cost Management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [{ name: 'Settings', id: 'App3Settings' }, { name: 'Current', id: 'App3Current' }]
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
    return <TreeView data={options} activeItems={activeItems} onSelect={this.onClick} hasBadges />;
  }
}
```

### With action items

```js
import React from 'react';
import { TreeView, TreeViewDataItem, Button } from '@patternfly/react-core';
import { EllipsisVIcon, ClipboardIcon, HamburgerIcon } from '@patternfly/react-icons';

class IconTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {} };

    this.onClick = (evt, treeViewItem, parentItem) => {
      this.setState({
        activeItems: [treeViewItem, parentItem]
      });
    };
  }

  render() {
    const { activeItems } = this.state;
    const options = [
      {
        name: 'ApplicationLauncher',
        id: 'AppLaunch',
        action: <EllipsisVIcon />,
        children: [
          {
            name: 'Application 1',
            id: 'App1',
            action: <ClipboardIcon />,
            children: [{ name: 'Settings', id: 'App1Settings' }, { name: 'Current', id: 'App1Current' }]
          },
          {
            name: 'Application 2',
            id: 'App2',
            action: <HamburgerIcon />,
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
        name: 'Cost Management',
        id: 'Cost',
        children: [
          {
            name: 'Application 3',
            id: 'App3',
            children: [{ name: 'Settings', id: 'App3Settings' }, { name: 'Current', id: 'App3Current' }]
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
    return <TreeView data={options} activeItems={activeItems} onSelect={this.onClick} />;
  }
}
```
