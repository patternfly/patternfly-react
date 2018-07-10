import React from 'react';
import { withInfo } from '@storybook/addon-info';
import MockTreeGrid, {
  mockTreeGridSource
} from '../__mocks__/mockTreeGridTable';
import { CollapsibleTreeGridTable } from '../index';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { reactabularDescription } from './tableStoryDescriptions';

export default stories => {
  stories.add(
    'TreeGrid Table',
    withInfo({
      source: false,
      propTablesExclude: [MockTreeGrid],
      propTables: [CollapsibleTreeGridTable],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{mockTreeGridSource}</pre>
        </div>
      )
    })(() => {
      const story = <MockTreeGrid />;
      return inlineTemplate({
        title: 'Collapsible TreeGrid Table',
        documentationLink: `${
          DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS
        }table-view/`,
        story,
        description: reactabularDescription
      });
    })
  );
};
