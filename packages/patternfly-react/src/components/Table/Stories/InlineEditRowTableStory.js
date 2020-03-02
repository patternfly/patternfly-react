import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { MockInlineEditRowTable, mockInlineEditRowTableSource } from '../__mocks__/mockInlineEditRowTable';
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
 * Inline Edit Row Table stories
 */
const inlineEditRowTableStory = stories => {
  stories.add(
    'Table With Inline Edit Row',
    withInfo({
      source: false,
      propTablesExclude: [MockInlineEditRowTable],
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
          <pre>{mockInlineEditRowTableSource}</pre>
        </div>
      )
    })(() => {
      const story = <MockInlineEditRowTable />;
      return inlineTemplate({
        title: 'Table With Inline Edit Row',
        documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_INLINE_EDIT,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default inlineEditRowTableStory;
