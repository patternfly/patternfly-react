import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { TreeView } from './index';
import { basic, expandedByDefault, selectableNodes } from './__mocks__/data';

import TreeViewWithNodeDisplay, {
  selectNode
} from './__mocks__/mockClickableNodesExample';

const stories = storiesOf('TreeView', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'TreeView',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS + '#bootstrap-tree-view'
  })
);

stories.addWithInfo('TreeView', `TreeView usage example`, () => (
  <TreeView data={basic} />
));

stories.addWithInfo(
  'TreeView expanded by default',
  `TreeView usage example`,
  () => <TreeView data={expandedByDefault} />
);

stories.addWithInfo(
  'TreeView with selectable nodes',
  `TreeView usage example`,
  () => (
    <TreeViewWithNodeDisplay
      selectableNodes={selectableNodes}
      selectNode={selectNode}
    />
  )
);
