import { TreeView, TreeViewDataItem } from '@patternfly/react-core';
import FolderIcon from '@patternfly/react-icons/dist/js/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/js/icons/folder-open-icon';
import React, { Component } from 'react';

export class TreeViewDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  options: TreeViewDataItem[] = [
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

  state = {
    activeItems: [] as TreeViewDataItem[],
    activeItems2: [] as TreeViewDataItem[],
    filteredItems: this.options
  };

  onClick = (evt: React.MouseEvent, treeViewItem: TreeViewDataItem, parentItem: TreeViewDataItem) => {
    this.setState({
      activeItems: [treeViewItem, parentItem]
    });
  };

  onClick2 = (evt: React.MouseEvent, treeViewItem: TreeViewDataItem, parentItem: TreeViewDataItem) => {
    this.setState({
      activeItems2: [treeViewItem, parentItem]
    });
  };

  onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target.value;
    if (input === '') {
      this.setState({ filteredItems: this.options });
    } else {
      const filtered: TreeViewDataItem[] = this.options
        .map(opt => Object.assign({}, opt))
        .filter(item => this.filterItems(item, input));
      this.setState({ filteredItems: filtered });
    }
  };

  filterItems = (item: TreeViewDataItem, input: string): boolean => {
    if (
      item.name
        .toString()
        .toLowerCase()
        .includes(input.toLowerCase())
    ) {
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

  render() {
    const { activeItems, activeItems2, filteredItems } = this.state;
    const flagOptions: TreeViewDataItem[] = [
      {
        name: 'ApplicationLauncher',
        id: 'FAppLaunch',
        hasCheck: true,
        icon: <FolderIcon />,
        expandedIcon: <FolderOpenIcon />,
        children: [
          {
            name: 'Application 1',
            id: 'FApp1',
            children: [{ name: 'Settings', id: 'FApp1Settings' }, { name: 'Current', id: 'FApp1Current' }]
          },
          {
            name: 'Application 2',
            id: 'FApp2',
            hasBadge: true,
            children: [
              { name: 'Settings', id: 'FApp2Settings', hasCheck: true },
              {
                name: 'Loader',
                id: 'FApp2Loader',
                children: [
                  { name: 'Loading App 1', id: 'FLoadApp1' },
                  { name: 'Loading App 2', id: 'FLoadApp2' },
                  { name: 'Loading App 3', id: 'FLoadApp3' }
                ]
              }
            ]
          }
        ],
        defaultExpanded: true
      },
      {
        name: 'Cost Management',
        id: 'FCost',
        hasBadge: true,
        action: <FolderIcon />,
        children: [
          {
            name: 'Application 3',
            id: 'FApp3',
            children: [{ name: 'Settings', id: 'FApp3Settings' }, { name: 'Current', id: 'FApp3Current' }]
          }
        ]
      },
      {
        name: 'Sources',
        id: 'FSources',
        children: [{ name: 'Application 4', id: 'FApp4', children: [{ name: 'Settings', id: 'FApp4Settings' }] }]
      },
      {
        name: 'Really really really long folder name that overflows the container it is in',
        id: 'FLong',
        children: [{ name: 'Application 5', id: 'FApp5' }]
      }
    ];
    return (
      <React.Fragment>
        <TreeView
          id="basic"
          data={filteredItems}
          activeItems={activeItems}
          onSelect={this.onClick}
          onSearch={this.onChange}
          searchProps={{ id: 'input-search', name: 'search-input', 'aria-label': 'Search input example' }}
        />
        <br />
        <TreeView id="mixed" data={flagOptions} activeItems={activeItems2} onSelect={this.onClick2} />
      </React.Fragment>
    );
  }
}
