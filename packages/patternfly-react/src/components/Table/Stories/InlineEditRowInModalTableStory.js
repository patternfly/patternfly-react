import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { MockInlineEditRowTable } from '../__mocks__/mockInlineEditRowTable';
import { MockModalManager } from '../../Modal/__mocks__/mockModalManager';
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
const inlineEditRowInModalTableStory = stories => {
  stories.add(
    'Table in Modal With Inline Edit Row',
    withInfo({
      source: false,
      propTablesExclude: [MockInlineEditRowTable, MockModalManager],
      propTables: [
        Table.Cell,
        Table.Heading,
        Table.PfProvider,
        actionHeaderCellFormatter,
        customHeaderFormattersDefinition,
        sortableHeaderCellFormatter,
        tableCellFormatter
      ]
    })(() => {
      const story = (
        <MockModalManager>
          <MockInlineEditRowTable />
        </MockModalManager>
      );
      return inlineTemplate({
        title: 'Table in Modal With Inline Edit Row',
        documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_INLINE_EDIT,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default inlineEditRowInModalTableStory;
