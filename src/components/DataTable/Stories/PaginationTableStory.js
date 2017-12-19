import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { MockPaginationTable } from '../__mocks__/mockPaginationTable';

/**
 * Pagination Table stories
 */

const paginationTableAddWithInfo = stories => {
  stories.add(
    'Paginated Table',
    withInfo({
      source: false,
      propTablesExclude: [MockPaginationTable],
      text: <div />
    })(() => <MockPaginationTable />)
  );
};

export default paginationTableAddWithInfo;
