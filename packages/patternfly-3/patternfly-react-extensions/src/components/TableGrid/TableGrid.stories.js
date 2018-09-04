import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { MockTableGridExample, MockTableGridExampleSource } from './_mocks_/mockTableGridExample';

import { TableGrid, TableGridHead, TableGridColumnHeader, TableGridBody, TableGridRow } from './index';

import { name } from '../../../package.json';
import { boolean, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.CONTENT_VIEWS}/TableGrid`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Table Grid',
    description:
      'The TableGrid is based on the Bootstrap Grid Layout. The TableGridColumnHeaders should have the same ' +
      'bootstrap col classes as the children of the TableGridRow component in order to maintain equal widths.'
  })
);

stories.addDecorator(withKnobs);
stories.add(
  'TableGrid',
  withInfo({
    source: false,
    propTables: [TableGrid, TableGridHead, TableGridColumnHeader, TableGridBody, TableGridRow],
    propTablesExclude: [MockTableGridExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockTableGridExampleSource}</pre>
      </div>
    )
  })(() => {
    const bordered = boolean('Bordered', true);
    return <MockTableGridExample bordered={bordered} />;
  })
);
