---
id: Tree view
section: components
cssPrefix: pf-c-treeview
propComponents: ['TreeView', 'TreeViewDataItem', 'TreeViewSearch']
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
import * as React from "react";
import { Spinner, TreeView, TreeViewDataItem } from "@patternfly/react-core";

export const SearchTreeView = (props) => {
    const [allItems, setAllItems] = React.useState([]);
    const [activeItems, setActiveItems] = React.useState([]);
    const [filteredItems, setFilteredItems] = React.useState([]);
    const [isFiltered, setIsFiltered] = React.useState(false);

    React.useEffect(() => {
        const items = [
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
        setAllItems(items);
        setFilteredItems(items);
    }, []);

    function filterTree(item,input) {
        let children = [];
        if (item.children) {
            for (const child of item.children) {
                const c = filterTree(child, input);
                if (c) {
                    children.push(c);
                }
            }
        }
        const hasMatchingChild = children.length > 0;
        const matches =
            item.name !== undefined &&
            item.name !== null &&
            item.name.toString().toLowerCase().startsWith(input.toLowerCase());
        if (hasMatchingChild || matches) {
            let copied = {};
            Object.assign(copied, item);
            copied.defaultExpanded = true;
            if (hasMatchingChild) {
                copied.children = children;
            }
            return copied;
        }
        return null;
    }

    function onSearch(event) {
        const input = event.target.value;
        if (input === "") {
            setFilteredItems(allItems);
            setIsFiltered(false);
        } else {
            let filtered = [];
            for (const item of allItems) {
                const i = filterTree(item, input);
                if (i) {
                    filtered.push(i);
                }
            }
            setFilteredItems(filtered);
            setIsFiltered(true);
        }
    }

    function onSelect(event,item,parentItem) {
        setActiveItems([item, parentItem]);
    }

    if (filteredItems.length === 0 && !isFiltered) {
        return (
            <div>
                <Spinner isSVG size="lg" />
            </div>
        );
    }
    

    return (
        <TreeView
            data={filteredItems}
            activeItems={activeItems}
            onSelect={onSelect}
            onSearch={onSearch}
            searchProps={{
                id: "input-search",
                name: "search-input",
                "aria-label": "Search input example"
            }}
            {...props}
        />
    );
};
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
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

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
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import HamburgerIcon from '@patternfly/react-icons/dist/esm/icons/hamburger-icon';

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

### Guides

```ts
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

const GuidesTreeView: React.FunctionComponent = () => {
  const options: TreeViewDataItem[] = [
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
    return <TreeView data={options} hasGuides={true} />;
}
```

### Compact

```ts
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

const CompactTreeView: React.FunctionComponent = () => {
  const options: TreeViewDataItem[] = [
      {
        name: 'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',
        title: 'apiVersion',
        id: 'apiVersion'
      },
      {
        name: 'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',
        title: 'kind',
        id: 'kind'
      },
      {
        name: 'Standard metadata object',
        title: 'metadata',
        id: 'metadata'
      },
      {
        name: 'Standard metadata object',
        title: 'spec',
        id: 'spec',
        children: [
          {
            name: 'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',
            title: 'minReadySeconds',
            id: 'minReadySeconds'
          },
          {
            name: 'Indicates that the deployment is paused',
            title: 'paused',
            id: 'paused'
          },
          {
            name: 'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',
            title: 'progressDeadlineSeconds',
            id: 'progressDeadlineSeconds',
            children: [
              {
                name: 'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',
                title: 'revisionHistoryLimit',
                id: 'revisionHistoryLimit',
                children: [
                  {
                    name: 'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.',
                    title: 'matchLabels',
                    id: 'matchLabels'
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
    return <TreeView data={options} variant='compact' />;
}
``` 

### Compact, no background

```ts
import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

const CompactNoBackgroundTreeView: React.FunctionComponent = () => {
  const options: TreeViewDataItem[] = [
      {
        name: 'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',
        title: 'apiVersion',
        id: 'apiVersion'
      },
      {
        name: 'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',
        title: 'kind',
        id: 'kind'
      },
      {
        name: 'Standard metadata object',
        title: 'metadata',
        id: 'metadata'
      },
      {
        name: 'Standard metadata object',
        title: 'spec',
        id: 'spec',
        children: [
          {
            name: 'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',
            title: 'minReadySeconds',
            id: 'minReadySeconds'
          },
          {
            name: 'Indicates that the deployment is paused',
            title: 'paused',
            id: 'paused'
          },
          {
            name: 'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',
            title: 'progressDeadlineSeconds',
            id: 'progressDeadlineSeconds',
            children: [
              {
                name: 'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',
                title: 'revisionHistoryLimit',
                id: 'revisionHistoryLimit',
                children: [
                  {
                    name: 'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.',
                    title: 'matchLabels',
                    id: 'matchLabels'
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
    return <TreeView data={options} variant='compactNoBackground' />;
}
```