import figma from '@figma/code-connect';
import { Toolbar, ToolbarContent, ToolbarItem, TreeView, TreeViewSearch } from '@patternfly/react-core';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

// Note: TreeView relies upon js objects as data, not figma components.
// Documentation for TreeView can be found at https://www.patternfly.org/components/tree-view

figma.connect(
  TreeView,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-2825',
  {
    props: {
      options: [
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
            {
              name: 'Application 4',
              id: 'example4-App4',
              children: [{ name: 'Settings', id: 'example4-App4Settings' }]
            }
          ]
        },
        {
          name: 'Really really really long folder name that overflows the container it is in',
          id: 'example4-Long',
          children: [{ name: 'Application 5', id: 'example4-App5' }]
        }
      ],
      hasBadges: figma.enum('Type', { 'With Badges': true }),
      hasGuides: figma.enum('Type', { 'With Branching': true }),
      hasIcons: figma.enum('Type', {
        Default: {
          expandedIcon: undefined,
          icon: undefined
        },
        'separate selection & expansion': {
          expandedIcon: undefined,
          icon: undefined
        },
        'With Brancing': {
          expandedIcon: undefined,
          icon: undefined
        },
        'With Checkboxes': {
          expandedIcon: undefined,
          icon: undefined
        },
        'With Badges': {
          expandedIcon: undefined,
          icon: undefined
        },
        'With Actions': {
          expandedIcon: undefined,
          icon: undefined
        },
        'With Icons': {
          expandedIcon: <FolderOpenIcon />,
          icon: <FolderIcon />
        }
      }),
      hasSearch: figma.boolean('With Search', {
        true: (
          <Toolbar style={{ padding: 0 }}>
            <ToolbarContent style={{ padding: 0 }}>
              <ToolbarItem>
                <TreeViewSearch
                  onSearch={() => {}}
                  id="input-search"
                  name="search-input"
                  aria-label="Search input example"
                />
              </ToolbarItem>
            </ToolbarContent>
          </Toolbar>
        ),
        false: undefined
      })
    },
    example: (props) => (
      <TreeView
        aria-label="Tree View with icons example"
        data={props.options}
        expandedIcon={props.hasIcons.expandedIcon}
        hasBadges={props.hasBadges}
        hasGuides={props.hasGuides}
        icon={props.hasIcons.icon}
        toolbar={props.hasSearch}
      />
    )
  }
);
