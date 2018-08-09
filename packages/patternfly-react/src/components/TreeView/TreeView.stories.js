import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import { MockTreeView, MockTreeViewSource, keyboardNavigation } from './__mocks__/MockTreeView';
import TreeViewNodeSpecification from './__mocks__/TreeViewNodeSpecification';
import TreeView from './TreeView';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Tree View`, module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'TreeView',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#bootstrap-tree-view`
  })
);

stories.add(
  'TreeView',
  withInfo({
    source: false,
    propTables: [TreeView, TreeViewNodeSpecification],
    propTablesExclude: [MockTreeView],
    text: (
      <div>
        <h1>Keyboard Navigation</h1>
        {keyboardNavigation}
        <h1>Story Source</h1>
        <pre>{MockTreeViewSource}</pre>
      </div>
    )
  })(() => <MockTreeView />)
);
