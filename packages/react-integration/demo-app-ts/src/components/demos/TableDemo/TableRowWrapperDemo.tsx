import * as React from 'react';
import { Table, TableHeader, TableBody, RowWrapperProps, TableProps, ICell, IRow } from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface ITableRowWrapperDemoState {
  rows: IRow[];
  columns: (ICell | string)[];
}

export class TableRowWrapperDemo extends React.Component<TableProps, ITableRowWrapperDemoState> {
  customRowWrapper: (props: RowWrapperProps) => JSX.Element;
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [{ title: 'Repositories' }, 'Branches', { title: 'Pull requests' }, 'Workspaces'],
      rows: [
        {
          cells: ['Repositories one', 'Branches one', 'Pull requests one', 'Workspaces one']
        },
        {
          cells: ['Repositories two', 'Branches two', 'Pull requests two', 'Workspaces two']
        },
        {
          cells: ['Repositories three', 'Branches three', 'Pull requests three', 'Workspaces three']
        }
      ]
    };
    this.customRowWrapper = ({ trRef, className, rowProps = { rowIndex: 0, rowKey: '' }, ...rest }) => {
      const isExpanded = rest.row ? rest.row.isExpanded : false;
      const isOddRow = (rowProps.rowIndex + 1) % 2;
      const customStyle = {
        borderLeft: '3px solid var(--pf-global--primary-color--100)'
      };
      return (
        <tr
          {...rest}
          ref={trRef as React.Ref<any>}
          className={css(
            className,
            isOddRow ? 'odd-row-class' : 'even-row-class',
            'custom-static-class',
            isExpanded !== undefined && styles.tableExpandableRow,
            isExpanded && styles.modifiers.expanded
          )}
          hidden={isExpanded !== undefined && !isExpanded}
          style={isOddRow ? customStyle : {}}
        />
      );
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Table with custom row wrapper that styles odd rows"
        cells={columns}
        rows={rows}
        rowWrapper={this.customRowWrapper}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
