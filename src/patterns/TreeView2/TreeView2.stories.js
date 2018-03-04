import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';

import { TreeView2, TreeView2Managed } from './index';

const stories = storiesOf('TreeView2', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'TreeView',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS
    }#bootstrap-tree-view`
  })
);

const createProps = () => ({
  highlightSelected: boolean('highlightSelected', true),
  highlightOnHover: boolean('highlightOnHover', true),
  onNodeClick: action('on-node-click'),
  nodes: [
    {
      id: 'parent-1',
      text: 'Parent 1',
      icon: 'folder',
      expandable: true,
      expanded: true,
      visible: true,
      nodes: [
        {
          id: 'child-1',
          text: 'Child 1',
          icon: 'folder',
          selected: true,
          expandable: true,
          expanded: true,
          nodes: [
            { id: 'grandchild-1', text: 'Grandchild 1', icon: 'file-o' },
            { id: 'grandchild-2', text: 'Grandchild 2', icon: 'file-o' }
          ]
        },
        {
          id: 'child-2',
          text: 'Child 2',
          icon: 'folder',
          expandable: true,
          expanded: false
        },
        {
          id: 'child-3',
          text: 'Child 3',
          icon: 'file-o'
        }
      ]
    },
    {
      id: 'parent-2',
      text: 'Parent 2',
      icon: 'folder'
    },
    {
      id: 'parent-3',
      text: 'Parent 3',
      icon: 'folder'
    },
    {
      id: 'parent-4',
      text: 'Parent 4',
      icon: 'folder'
    },
    {
      id: 'parent-5',
      text: 'Parent 5',
      icon: 'folder'
    }
  ]
});

stories.addWithInfo('Managed TreeView2 Pattern demo', () => (
  <TreeView2Managed {...createProps()} />
));

stories.addWithInfo('TreeView2 Pattern demo', () => (
  <TreeView2 {...createProps()} />
));

stories.addWithInfo('Build your own TreeView2 Pattern', () =>
  TreeView2(createProps())
);
