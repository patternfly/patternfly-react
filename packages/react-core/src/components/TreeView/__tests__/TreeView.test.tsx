import React from 'react';
import { mount } from 'enzyme';
import { TreeView } from '../TreeView';
import { Button } from '@patternfly/react-core';
import { FolderIcon, FolderOpenIcon } from '@patternfly/react-icons';
import { TreeViewSearch } from '../TreeViewSearch';

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

const flagOptions = [
  {
    name: 'ApplicationLauncher',
    id: 'AppLaunch',
    hasCheck: true,
    icon: <FolderIcon />,
    expandedIcon: <FolderOpenIcon />,
    children: [
      {
        name: 'Application 1',
        id: 'App1',
        children: [{ name: 'Settings', id: 'App1Settings' }, { name: 'Current', id: 'App1Current' }]
      },
      {
        name: 'Application 2',
        id: 'App2',
        hasBadge: true,
        children: [
          { name: 'Settings', id: 'App2Settings', hasCheck: true },
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
    hasBadge: true,
    action: (
      <Button variant="plain" aria-label="Folder action">
        <FolderIcon />
      </Button>
    ),
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

const active = [
  {
    name: 'Application 1',
    id: 'App1',
    children: [{ name: 'Settings', id: 'App1Settings' }, { name: 'Current', id: 'App1Current' }]
  }
];

describe('tree view', () => {
  test('renders basic successfully', () => {
    const view = mount(<TreeView data={options} onSelect={jest.fn()} />);
    expect(view).toMatchSnapshot();
  });

  test('renders active successfully', () => {
    const view = mount(<TreeView data={options} activeItems={active} onSelect={jest.fn()} />);
    expect(view).toMatchSnapshot();
  });

  test('renders search successfully', () => {
    const view = mount(
      <TreeViewSearch
        onSearch={jest.fn()}
        id='input-search'
        name='search-input'
        aria-label='Search input example'
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('renders toolbar successfully', () => {
    const view = mount(<TreeView data={options} activeItems={active} onSelect={jest.fn()} toolbar={<div>test</div>} />);
    expect(view).toMatchSnapshot();
  });

  test('renders checkboxes successfully', () => {
    const view = mount(<TreeView data={options} activeItems={active} onSelect={jest.fn()} hasChecks />);
    expect(view).toMatchSnapshot();
  });

  test('renders icons successfully', () => {
    const view = mount(
      <TreeView
        data={options}
        activeItems={active}
        onSelect={jest.fn()}
        icon={<FolderIcon />}
        expandedIcon={<FolderOpenIcon />}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('renders badges successfully', () => {
    const view = mount(<TreeView data={options} activeItems={active} onSelect={jest.fn()} hasBadges />);
    expect(view).toMatchSnapshot();
  });

  test('renders individual flag options successfully', () => {
    const view = mount(<TreeView data={flagOptions} activeItems={active} onSelect={jest.fn()} />);
    expect(view).toMatchSnapshot();
  });
});

test('renders guides successfully', () => {
  const view = mount(<TreeView data={options} onSelect={jest.fn()} hasGuides={true}/>);
    expect(view).toMatchSnapshot();
});

test('renders compact successfully', () => {
  const view = mount(<TreeView data={options} onSelect={jest.fn()} variant='compact'/>);
    expect(view).toMatchSnapshot();
});

test('renders compact no background successfully', () => {
  const view = mount(<TreeView data={options} onSelect={jest.fn()} variant='compactNoBackground' />);
    expect(view).toMatchSnapshot();
});