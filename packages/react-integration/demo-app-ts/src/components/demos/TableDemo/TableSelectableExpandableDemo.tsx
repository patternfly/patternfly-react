import * as React from 'react';
import { Table, TableHeader, TableBody, TableProps, headerCol, ICell, IRow, expandable } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
  canSelectAll: boolean;
}

export class TableSelectableExpandableDemo extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()], cellFormatters: [expandable] },
        'Branches',
        { title: 'Pull requests' }
      ],
      rows: [
        {
          cells: ['row0 - one', 'row0 - two', 'row0 - three'],
          selected: true,
          showSelect: true,
          isOpen: false
        },
        {
          cells: ['row1 - one', 'row1 - two', 'row1 - three'],
          selected: false,
          parent: 0
        },
        {
          cells: ['row2 - one', 'row2 - two', 'row2 - three'],
          selected: false,
          isOpen: false
        },
        {
          cells: ['row3 - one', 'row3 - two', 'row3 - three'],
          selected: false,
          parent: 2
        }
      ],
      canSelectAll: true
    };
    this.onSelect = this.onSelect.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(event: React.MouseEvent, rowKey: number, isOpen: boolean) {
    const { rows } = this.state;
    rows[rowKey].isOpen = isOpen;
    this.setState({
      rows
    });
  }

  onSelect(event: React.MouseEvent, isSelected: boolean, rowId: number) {
    let rows: IRow[];
    if (rowId === -1) {
      rows = this.state.rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      rows = [...this.state.rows];
      rows[rowId].selected = isSelected;
    }
    this.setState({
      rows
    });
  }

  toggleSelect = checked => {
    this.setState({
      canSelectAll: checked
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <div>
        <Table
          caption="Selectable expandable Table"
          onCollapse={this.onCollapse}
          onSelect={this.onSelect}
          cells={columns}
          rows={rows}
          canSelectAll={this.state.canSelectAll}
        >
          <TableHeader />
          <TableBody />
        </Table>
        <Checkbox
          label="canSelectAll"
          isChecked={this.state.canSelectAll}
          onChange={this.toggleSelect}
          aria-label="toggle select all checkbox"
          id="toggle-select-all"
          name="toggle-select-all"
        />
      </div>
    );
  }
}
