import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { MockInlineEditColumnTable, mockInlineEditColumnTableSource } from '../__mocks__/mockInlineEditColumnTable';
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
 * Inline Edit Column Table stories
 */
const inlineEditColumnTable = stories => {
  stories.addDecorator(withKnobs);
  stories.add(
    'Table With Inline Edit Column',
    withInfo({
      source: false,
      propTablesExclude: [MockInlineEditColumnTable],
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
          <pre>{mockInlineEditColumnTableSource}</pre>
        </div>
      )
    })(() => {
      const story = <MockInlineEditColumnTable fullTableEdit={boolean('Edit whole table', true)} />;
      return inlineTemplate({
        title: 'Table With Inline Edit Column',
        documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_INLINE_EDIT,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default inlineEditColumnTable;
