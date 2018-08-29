import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { decorateAction } from '@storybook/addon-actions';
import { MockServerPaginationTable, mockServerPaginationTableSource } from '../__mocks__/mockServerPaginationTable';
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
 * Server Pagination Table stories
 */

const serverPaginationTable = stories => {
  stories.add(
    'Server Paginated Table',
    withInfo({
      source: false,
      propTablesExclude: [MockServerPaginationTable],
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
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{mockServerPaginationTableSource}</pre>
        </div>
      )
    })(() => {
      const logAction = decorateAction([args => args]);
      const story = <MockServerPaginationTable onServerPageLogger={logAction('Server page requested')} />;
      return inlineTemplate({
        title: 'Server Paginated Table',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS}table-view/`,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default serverPaginationTable;
