import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { decorateAction } from '@storybook/addon-actions';
import { MockClientPaginationTable, mockClientPaginationTableSource } from '../__mocks__/mockClientPaginationTable';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  Table
} from '../index';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { reactabularDescription } from './tableStoryDescriptions';

/**
 * Client Pagination Table stories
 */

const clientPaginationTable = stories => {
  stories.add(
    'Client Paginated Table',
    withInfo({
      source: false,
      propTables: [
        Table.Actions,
        Table.Button,
        Table.Cell,
        Table.Checkbox,
        Table.DropdownKebab,
        Table.Heading,
        Table.PfProvider,
        Table.SelectionCell,
        Table.SelectionHeading,
        actionHeaderCellFormatter,
        customHeaderFormattersDefinition,
        selectionCellFormatter,
        selectionHeaderCellFormatter,
        sortableHeaderCellFormatter,
        tableCellFormatter
      ],
      propTablesExclude: [MockClientPaginationTable],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{mockClientPaginationTableSource}</pre>
        </div>
      )
    })(() => {
      const logAction = decorateAction([args => args]);
      const story = <MockClientPaginationTable onRowsLogger={logAction('onRowsLogger')} />;
      return inlineTemplate({
        title: 'Client Paginated Table',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS}table-view/`,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default clientPaginationTable;
