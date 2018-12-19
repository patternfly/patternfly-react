import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import { DiffView } from './index';

import { name } from '../../../package.json';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.CONTENT_VIEWS}/DiffView`, module);
const emptyState = <h1>No Diff</h1>;

stories.addDecorator(
  defaultTemplate({
    title: 'Diff View',
    description: (
      <div>
        The Diff View is based on the <a href="https://www.npmjs.com/package/react-diff-view">react-diff-view</a>{' '}
        package. This Component supports both git diff Patch and Old/New text inputs and displays the diff in Unified or
        Split View.
      </div>
    )
  })
);

stories.addDecorator(withKnobs);
stories.add(
  'DiffView',
  withInfo({
    source: true,
    propTables: [DiffView]
  })(() => {
    const viewType = select('View Type', { split: 'split', unified: 'unified' }, 'split');

    return (
      <div style={{ width: '600px', padding: '30' }}>
        <DiffView
          oldText={text('Old Text', 'Old Text')}
          newText={text('New Text', 'New Text')}
          viewType={viewType}
          emptyState={emptyState}
          markEditsByWord={boolean('Mark by Word', false)}
        />
      </div>
    );
  })
);
