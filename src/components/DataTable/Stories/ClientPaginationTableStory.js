import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { decorateAction } from '@storybook/addon-actions';
import { MockClientPaginationTable } from '../__mocks__/mockClientPaginationTable';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';

/**
 * Client Pagination Table stories
 */

const clientPaginationTableAddWithInfo = stories => {
  stories.add(
    'Client Paginated Table',
    withInfo({
      source: false,
      propTablesExclude: [MockClientPaginationTable],
      text: <div />
    })(() => {
      const logAction = decorateAction([args => args]);
      let story = (
        <MockClientPaginationTable onRowsLogger={logAction('onRowsLogger')} />
      );
      let description = (
        <div>
          Client side pagination for PatternFly React Data Tables is based on
          Reactabular pagination. See the following{' '}
          <a href="https://reactabular.js.org/#/data/pagination">API docs</a>{' '}
          for more details.
        </div>
      );
      return inlineTemplate({
        title: 'Client Paginated Table',
        documentationLink:
          DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS + 'table-view/',
        story: story,
        description: description
      });
    })
  );
};

export default clientPaginationTableAddWithInfo;
