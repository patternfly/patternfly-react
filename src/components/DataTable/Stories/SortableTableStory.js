import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { MockSortableTable } from '../__mocks__/mockSortableTable';

/**
 * Sortable Table stories
 */

const sortableTableAddWithInfo = stories => {
  stories.add(
    'Sortable Table',
    withInfo({
      source: false,
      propTablesExclude: [MockSortableTable],
      text: <div />
    })(() => <MockSortableTable />)
  );
};

export default sortableTableAddWithInfo;
