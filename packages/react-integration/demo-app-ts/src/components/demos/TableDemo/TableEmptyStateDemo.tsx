import * as React from 'react';
import { IRow, ICell } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateActions,
  Button,
  EmptyStateVariant,
  EmptyStateFooter
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

class EmptyStateTable extends React.Component<TableProps, { columns: (ICell | string)[]; rows: IRow[] }> {
  static displayName = 'EmptyStateTable';
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories' },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        { title: 'Last Commit' }
      ],
      rows: [
        {
          heightAuto: true,
          props: { colSpan: '8' },
          title: (
            <EmptyState headingLevel="h5" titleText="Empty state" icon={CubesIcon} variant={EmptyStateVariant.sm}>
              <EmptyStateBody>
                This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but
                flexible enough to meet a variety of needs.
              </EmptyStateBody>
              <EmptyStateFooter>
                <EmptyStateActions>
                  <Button variant="primary">Primary Action</Button>
                </EmptyStateActions>
                <EmptyStateActions>
                  <Button variant="link">Multiple</Button>
                  <Button variant="link">Action Buttons</Button>
                  <Button variant="link">Can</Button>
                  <Button variant="link">Go here</Button>
                  <Button variant="link">In the secondary</Button>
                  <Button variant="link">Action area</Button>
                </EmptyStateActions>
              </EmptyStateFooter>
            </EmptyState>
          )
        }
      ]
    };
  }
  render() {
    const { columns, rows } = this.state;
    return (
      <Table caption="Empty State Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

EmptyStateTable.displayName = 'EmptyStateTable';

export { EmptyStateTable };
