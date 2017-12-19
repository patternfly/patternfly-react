import React from 'react';
import { Table } from '../index';
import { mockRows } from '../__mocks__/mockRows';
import { mockBootstrapColumns } from '../__mocks__/mockColumns';

/**
 * Bootstrap Table stories
 */

const bootstrapTableAddWithInfo = stories => {
  stories.addWithInfo('Bootstrap Table Styles', '', () => (
    <div>
      <h2>Boostrap examples</h2>
      <h3>Basic example</h3>
      <Table.PfProvider columns={mockBootstrapColumns}>
        <caption>Optional table caption.</caption>
        <Table.Header />
        <Table.Body rows={mockRows.slice(0, 3)} rowKey="id" />
      </Table.PfProvider>

      <h3>Striped Rows</h3>
      <Table.PfProvider striped columns={mockBootstrapColumns}>
        <Table.Header />
        <Table.Body rows={mockRows.slice(0, 3)} rowKey="id" />
      </Table.PfProvider>

      <h3>Bordered Table</h3>
      <Table.PfProvider bordered columns={mockBootstrapColumns}>
        <Table.Header />
        <Table.Body rows={mockRows.slice(0, 3)} rowKey="id" />
      </Table.PfProvider>

      <h3>Hover Rows</h3>
      <Table.PfProvider hover columns={mockBootstrapColumns}>
        <Table.Header />
        <Table.Body rows={mockRows.slice(0, 3)} rowKey="id" />
      </Table.PfProvider>

      <h3>Condensed table</h3>
      <Table.PfProvider condensed columns={mockBootstrapColumns}>
        <Table.Header />
        <Table.Body rows={mockRows.slice(0, 3)} rowKey="id" />
      </Table.PfProvider>

      <h3>Contextual Classes</h3>
      <Table.PfProvider condensed columns={mockBootstrapColumns}>
        <Table.Header />
        <Table.Body
          rows={mockRows}
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
            }
          }}
        />
      </Table.PfProvider>

      <h3>Responsive Tables</h3>
      <div className="table-responsive">
        <Table.PfProvider columns={mockBootstrapColumns}>
          <Table.Header />
          <Table.Body rows={mockRows.slice(0, 3)} rowKey="id" />
        </Table.PfProvider>
      </div>
    </div>
  ));
};

export default bootstrapTableAddWithInfo;
