import * as React from 'react';
import { Table, TableHeader, TableBody, TableProps, headerCol, ICell, IRow } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';
import '@patternfly/patternfly/utilities/Spacing/spacing.css';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
  canSelectAll: boolean;
}

export class TableSelectableDemo extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last Commit'
      ],
      rows: [
        {
          cells: ['one', 'two', 'a', 'four', 'five'],
          selected: false
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five'],
          selected: false
        },
        {
          cells: ['p', 'two', 'b', 'four', 'five'],
          selected: false
        }
      ],
      canSelectAll: true
    };
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  onSelect(event: React.FormEvent, isSelected: boolean, rowId: number) {
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

  toggleSelect = (checked: boolean) => {
    this.setState({
      canSelectAll: checked
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows, canSelectAll } = this.state;

    return (
      <div>
        <Checkbox
          label="Can select all"
          className="pf-u-mb-lg"
          isChecked={canSelectAll}
          onChange={this.toggleSelect}
          aria-label="toggle select all checkbox"
          id="toggle-select-all"
          name="toggle-select-all"
        />
        <Table
          onSelect={this.onSelect}
          canSelectAll={canSelectAll}
          caption="Selectable Table"
          cells={columns}
          rows={rows}
        >
          <TableHeader />
          <TableBody />
        </Table>
      </div>
    );
  }
}
