import {
  Button,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  TreeView,
  TreeViewDataItem,
  TreeViewSearch
} from '@patternfly/react-core';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';
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
      name: 'Cost Management',
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

  compactOptions: TreeViewDataItem[] = [
    {
      name:
        'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',
      title: 'apiVersion',
      id: 'apiVersion'
    },
    {
      name:
        'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',
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
          name:
            'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',
          title: 'minReadySeconds',
          id: 'minReadySeconds'
        },
        {
          name: 'Indicates that the deployment is paused',
          title: 'paused',
          id: 'paused'
        },
        {
          name:
            'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',
          title: 'progressDeadlineSeconds',
          id: 'progressDeadlineSeconds',
          children: [
            {
              name:
                'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',
              title: 'revisionHistoryLimit',
              id: 'revisionHistoryLimit',
              children: [
                {
                  name:
                    'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.',
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

  state = {
    allExpanded: null as boolean,
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

  onToggle = () => {
    const { allExpanded } = this.state;
    this.setState({
      allExpanded: allExpanded !== undefined ? !allExpanded : true
    });
  };

  render() {
    const { activeItems, activeItems2, filteredItems, allExpanded } = this.state;
    const flagOptions: TreeViewDataItem[] = [
      {
        name: 'ApplicationLauncher',
        id: 'FAppLaunch',
        hasCheckbox: true,
        icon: <FolderIcon />,
        expandedIcon: <FolderOpenIcon />,
        children: [
          {
            name: 'Application 1',
            id: 'FApp1',
            children: [
              { name: 'Settings', id: 'FApp1Settings' },
              { name: 'Current', id: 'FApp1Current' }
            ]
          },
          {
            name: 'Application 2',
            id: 'FApp2',
            hasBadge: true,
            children: [
              { name: 'Settings', id: 'FApp2Settings', hasCheckbox: true },
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
        customBadgeContent: 'custom badge',
        action: (
          <Button variant="plain" aria-label="Folder action">
            <FolderIcon />
          </Button>
        ),
        children: [
          {
            name: 'Application 3',
            id: 'FApp3',
            children: [
              { name: 'Settings', id: 'FApp3Settings' },
              { name: 'Current', id: 'FApp3Current' }
            ]
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

    const toolbar = (
      <Toolbar style={{ padding: 0 }}>
        <ToolbarContent style={{ padding: 0 }}>
          <ToolbarItem widths={{ default: '100%' }}>
            <TreeViewSearch
              onSearch={this.onChange}
              id="input-search"
              name="search-input"
              aria-label="Search input example"
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );

    return (
      <React.Fragment>
        <Button id="expand" variant="link" onClick={this.onToggle}>
          {allExpanded && 'Collapse all'}
          {!allExpanded && 'Expand all'}
        </Button>
        <TreeView
          id="basic"
          allExpanded={allExpanded}
          data={filteredItems}
          activeItems={activeItems}
          onSelect={this.onClick}
          toolbar={toolbar}
          hasGuides
        />
        <br />
        <TreeView id="mixed" data={flagOptions} activeItems={activeItems2} onSelect={this.onClick2} />
        <br />
        <TreeView
          id="compact"
          data={this.compactOptions}
          activeItems={activeItems2}
          onSelect={this.onClick2}
          variant="compact"
        />
        <br />
        <TreeView
          id="compactNoBackground"
          data={this.compactOptions}
          activeItems={activeItems2}
          onSelect={this.onClick2}
          variant="compactNoBackground"
        />
      </React.Fragment>
    );
  }
}
