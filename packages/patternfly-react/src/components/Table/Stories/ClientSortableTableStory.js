import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { MockClientSortableTable, mockClientSortableTableSource } from '../__mocks__/mockClientSortableTable';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  Table
} from '../index';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { reactabularDescription } from './tableStoryDescriptions';

/**
 * Client Sortable Table stories
 */

const clientSortableTable = stories => {
  stories.add(
    'Client Sortable Table',
    withInfo({
      source: false,
      propTablesExclude: [MockClientSortableTable],
      propTables: [
        Table.Actions,
        Table.Button,
        Table.Cell,
        Table.DropdownKebab,
        Table.Heading,
        Table.PfProvider,
        actionHeaderCellFormatter,
        customHeaderFormattersDefinition,
        sortableHeaderCellFormatter,
        tableCellFormatter
      ],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{mockClientSortableTableSource}</pre>
        </div>
      )
    })(() => {
      const story = <MockClientSortableTable />;
      return inlineTemplate({
        title: 'Client Sortable Table',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS}table-view/`,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default clientSortableTable;
