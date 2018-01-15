import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { decorateAction } from '@storybook/addon-actions';
import { MockServerPaginationTable } from '../__mocks__/mockServerPaginationTable';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';

/**
 * Server Pagination Table stories
 */

const serverPaginationTableAddWithInfo = stories => {
  stories.add(
    'Server Paginated Table',
    withInfo({
      source: false,
      propTablesExclude: [MockServerPaginationTable],
      text: <div />
    })(() => {
      const logAction = decorateAction([args => args]);
      let story = (
        <MockServerPaginationTable
          onServerPageLogger={logAction('Server page requested')}
        />
      );
      let description = (
        <div>
          Server side sorting for PatternFly React Data Tables is based on
          Reactabular. See the following{' '}
          <a href="https://reactabular.js.org/#/">API docs</a> for more details.
        </div>
      );
      return inlineTemplate({
        title: 'Server Paginated Table',
        documentationLink:
          DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS + 'table-view/',
        story: story,
        description: description
      });
    })
  );
};

export default serverPaginationTableAddWithInfo;
