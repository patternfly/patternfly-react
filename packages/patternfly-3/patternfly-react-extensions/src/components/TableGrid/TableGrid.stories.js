import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { MockTableGridExample, MockTableGridExampleSource } from './_mocks_/mockTableGridExample';

import { TableGrid, TableGridHead, TableGridColumnHeader, TableGridBody, TableGridRow, TableGridCol } from './index';

import { name } from '../../../package.json';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.CONTENT_VIEWS}/TableGrid`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Table Grid',
    description: (
      <div>
        The TableGrid is based on the Bootstrap Grid Layout. The <b>TableGrid.ColumnHeaders</b> should have the same
        bootstrap column classes as the children of the <b>TableGrid.Row</b> component in order to maintain equal
        widths.
        <br />
        <br />
        When using <i>cell</i> selection, the <b>TableGrid.Col</b> component should be used in place of the
        <b> Grid.Col</b> component for correct selection styling.
      </div>
    )
  })
);

stories.addDecorator(withKnobs);
stories.add(
  'TableGrid',
  withInfo({
    source: false,
    propTables: [TableGrid, TableGridHead, TableGridColumnHeader, TableGridBody, TableGridRow, TableGridCol],
    propTablesExclude: [MockTableGridExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockTableGridExampleSource}</pre>
      </div>
    )
  })(() => {
    const bordered = boolean('Bordered', true);
    const selectType = select(
      'Selection Type',
      { none: 'None', row: 'Row', checkbox: 'Checkbox', cell: 'Cell' },
      'none'
    );

    return <MockTableGridExample bordered={bordered} selectType={selectType} />;
  })
);
