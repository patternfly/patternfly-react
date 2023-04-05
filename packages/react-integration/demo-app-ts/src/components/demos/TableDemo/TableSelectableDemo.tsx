import * as React from 'react';
import {
  headerCol,
  ICell,
  IRow,
  RowSelectVariant
} from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

import { Checkbox, Divider, Radio } from '@patternfly/react-core';
import '@patternfly/patternfly/utilities/Spacing/spacing.css';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
  canSelectAll: boolean;
  selectVariant: 'checkbox' | 'radio';
}

export class TableSelectableDemo extends React.Component<TableProps, TableState> {
  static displayName = 'TableSelectableDemo';
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
      canSelectAll: true,
      selectVariant: RowSelectVariant.checkbox
    };
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  onSelect(event: React.FormEvent, isSelected: boolean, rowId: number) {
    let rows: IRow[];
    if (rowId === -1 && this.state.selectVariant) {
      rows = this.state.rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else if (this.state.selectVariant === RowSelectVariant.checkbox) {
      rows = [...this.state.rows];
      rows[rowId] = { ...rows[rowId], selected: isSelected };
    } else {
      rows = this.state.rows.map((oneRow, index) => {
        oneRow.selected = rowId === index;
        return oneRow;
      });
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
    const { columns, rows, canSelectAll, selectVariant } = this.state;

    return (
      <div>
        <div onChange={(event: any) => this.setState({ selectVariant: event.target.value as RowSelectVariant })}>
          <Radio id="checkbox" value="checkbox" label="Checkbox Variant" name="selectVariant" defaultChecked />
          <Radio id="radio" value="radio" label="Radio Variant" name="selectVariant" />
        </div>
        <Divider />
        <Checkbox
          label="Can select all"
          className="pf-u-mb-lg"
          isChecked={canSelectAll}
          onChange={(_event, checked) => this.toggleSelect(checked)}
          aria-label="toggle select all checkbox"
          id="toggle-select-all"
          name="toggle-select-all"
          isDisabled={selectVariant !== 'checkbox'}
        />
        <Table
          onSelect={this.onSelect}
          canSelectAll={canSelectAll}
          selectVariant={selectVariant}
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
