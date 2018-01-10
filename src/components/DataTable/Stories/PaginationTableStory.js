import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { decorateAction } from '@storybook/addon-actions';
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
    })(() => {
      const logAction = decorateAction([args => args]);
      return <MockPaginationTable onRowsLogger={logAction('onRowsLogger')} />;
    })
  );
};

export default paginationTableAddWithInfo;
