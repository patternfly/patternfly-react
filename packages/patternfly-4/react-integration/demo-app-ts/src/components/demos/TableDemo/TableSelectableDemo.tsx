import * as React from 'react';
import { Table, TableHeader, TableBody, TableProps, headerCol, IRow } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';

export class TableSelectableDemo extends React.Component<
  TableProps,
  { columns: any; rows: IRow[]; canSelectAll: boolean }
> {
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
  }

  onSelect(event, isSelected, rowId) {
    let rows;
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
          caption="Selectable Table"
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
