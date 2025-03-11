import { Component, type JSX } from 'react';
import { RowWrapperProps, ICell, IRow } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
/* eslint-disable camelcase */
import t_global_color_brand_default from '@patternfly/react-tokens/dist/esm/t_global_color_brand_default';

interface ITableRowWrapperDemoState {
  rows: IRow[];
  columns: (ICell | string)[];
}

export class TableRowWrapperDemo extends Component<TableProps, ITableRowWrapperDemoState> {
  static displayName = 'TableRowWrapperDemo';
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.customRowWrapper = ({ trRef, className, rowProps = { rowIndex: 0, rowKey: '' }, onResize, ...rest }) => {
      const isExpanded = rest.row ? rest.row.isExpanded : false;
      const isOddRow = (rowProps.rowIndex + 1) % 2;
      const customStyle = {
        borderLeft: `3px solid ${t_global_color_brand_default.var}`
      };
      return (
        <tr
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
