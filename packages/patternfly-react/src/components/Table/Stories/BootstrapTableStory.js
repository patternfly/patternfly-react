import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Table } from '../index';
import { mockBootstrapRows } from '../__mocks__/mockBootstrapRows';
import { mockBootstrapColumns } from '../__mocks__/mockBootstrapColumns';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { reactabularDescription } from './tableStoryDescriptions';

/**
 * Bootstrap Table stories
 */

const bootstrapTable = stories => {
  stories.add(
    'Bootstrap Table Styles',
    withInfo()(() => {
      const story = (
        <div>
          <h3>Basic example</h3>
          <Table.PfProvider columns={mockBootstrapColumns}>
            <caption>Optional table caption.</caption>
            <Table.Header />
            <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
          </Table.PfProvider>

          <h3>Striped Rows</h3>
          <Table.PfProvider striped columns={mockBootstrapColumns}>
            <Table.Header />
            <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
          </Table.PfProvider>

          <h3>Bordered Table</h3>
          <Table.PfProvider bordered columns={mockBootstrapColumns}>
            <Table.Header />
            <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
          </Table.PfProvider>

          <h3>Hover Rows</h3>
          <Table.PfProvider hover columns={mockBootstrapColumns}>
            <Table.Header />
            <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
          </Table.PfProvider>

          <h3>Condensed table</h3>
          <Table.PfProvider condensed columns={mockBootstrapColumns}>
            <Table.Header />
            <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
          </Table.PfProvider>

          <h3>Contextual Classes</h3>
          <Table.PfProvider condensed columns={mockBootstrapColumns}>
            <Table.Header />
            <Table.Body
              rows={mockBootstrapRows}
              rowKey="id"
              onRow={(row, { rowIndex }) => {
                switch (rowIndex) {
                  case 0:
                    return { className: 'active' };
                  case 2:
                    return { className: 'success' };
                  case 4:
                    return { className: 'warning' };
                  case 6:
                    return { className: 'danger' };
                  default:
                    return null;
                }
              }}
            />
          </Table.PfProvider>

          <h3>Responsive Tables</h3>
          <div className="table-responsive">
            <Table.PfProvider columns={mockBootstrapColumns}>
              <Table.Header />
              <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
            </Table.PfProvider>
          </div>
        </div>
      );

      return inlineTemplate({
        title: 'Bootstrap Table Styles',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CONTENT_VIEWS}table-view/`,
        story,
        description: reactabularDescription
      });
    })
  );
};

export default bootstrapTable;
