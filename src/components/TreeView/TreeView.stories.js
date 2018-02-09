import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';

import { MockTreeView, MockTreeViewSource } from './__mocks__/MockTreeView';
import TreeViewNodeSpecification from './__mocks__/TreeViewNodeSpecification';
import TreeView from './TreeView';

const stories = storiesOf('TreeView', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'TreeView',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS
    }#bootstrap-tree-view`
  })
);

stories.add(
  'TreeView with Selectable Nodes',
  withInfo({
    source: false,
    propTables: [TreeView, TreeViewNodeSpecification],
    propTablesExclude: [MockTreeView],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockTreeViewSource}</pre>
      </div>
    )
  })(() => <MockTreeView />)
);
