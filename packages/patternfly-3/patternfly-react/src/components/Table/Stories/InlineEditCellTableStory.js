import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { MockInlineEditCellTable, mockInlineEditCellTableSource } from '../__mocks__/mockInlineEditCellTable';
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
 * Inline Edit Cell Table stories
 */
const inlineEditCellTableStory = stories => {
  stories.add(
    'Table With Inline Edit Cells',
    withInfo({
      source: false,
      propTablesExclude: [MockInlineEditCellTable],
      propTables: [
        Table.Cell,
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
          <pre>{mockInlineEditCellTableSource}</pre>
        </div>
      )
    })(() => {
      const story = <MockInlineEditCellTable />;
      return inlineTemplate({
        title: 'Table With Inline Edit Cells',
        documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_INLINE_EDIT,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default inlineEditCellTableStory;
