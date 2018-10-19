import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { MockVirtualTableGridExample, MockVirtualTableGridExampleSource } from './_mocks_/mockVirtualTableGridExample';

import { VirtualTableGrid, TableGridHead, TableGridColumnHeader, TableGridRow, TableGridCol } from './index';

import { name } from '../../../package.json';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.CONTENT_VIEWS}/VirtualTableGrid`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Virtual Table Grid',
    description: (
      <div>
        The VirtualTableGrid is based on the Bootstrap Grid Layout and uses{' '}
        <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a> to efficiently render large lists
        of data.
        <br />
        <br />
        The <b>VirtualTableGrid.ColumnHeaders</b> should have the same bootstrap column classes as the children of the{' '}
        <b>VirtualTableGrid.Row</b> component in order to maintain equal widths.
        <br />
        <br />
        When using <i>cell</i> selection, the <b>VirtualTableGrid.Col</b> component should be used in place of the
        <b> Grid.Col</b> component for correct selection styling.
      </div>
    )
  })
);

stories.addDecorator(withKnobs);
stories.add(
  'VirtualTableGrid',
  withInfo({
    source: false,
    propTables: [VirtualTableGrid, TableGridHead, TableGridColumnHeader, TableGridRow, TableGridCol],
    propTablesExclude: [MockVirtualTableGridExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockVirtualTableGridExampleSource}</pre>
      </div>
    )
  })(() => {
    const bordered = boolean('Bordered', true);
    const selectType = select(
      'Selection Type',
      { none: 'None', row: 'Row', checkbox: 'Checkbox', cell: 'Cell' },
      'none'
    );

    return <MockVirtualTableGridExample bordered={bordered} selectType={selectType} />;
  })
);
