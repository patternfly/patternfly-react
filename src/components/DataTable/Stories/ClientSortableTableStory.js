import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { MockClientSortableTable } from '../__mocks__/mockClientSortableTable';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';

/**
 * Client Sortable Table stories
 */

const clientSortableTableAddWithInfo = stories => {
  stories.add(
    'Client Sortable Table',
    withInfo({
      source: false,
      propTablesExclude: [MockClientSortableTable],
      text: <div />
    })(() => {
      let story = <MockClientSortableTable />;
      let description = (
        <div>
          Client side sorting for PatternFly React Data Tables is based on
          Sortabular. See the following{' '}
          <a href="https://reactabular.js.org/#/data/sorting">API docs</a> for
          more details.
        </div>
      );
      return inlineTemplate({
        title: 'Client Sortable Table',
        documentationLink:
          DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS + 'table-view/',
        story: story,
        description: description
      });
    })
  );
};

export default clientSortableTableAddWithInfo;
