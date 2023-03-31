import * as React from 'react';
import { sortable, ICell, IRow, ISortBy } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
import { Checkbox } from '@patternfly/react-core';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
  sortBy: ISortBy;
  canSortFavorites: boolean;
}

export class TableFavoritesDemo extends React.Component<TableProps, TableState> {
  static displayName = 'TableFavoritesDemo';
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable] },
        'Branches',
        'Pull requests',
        'Workspaces',
        'Last commit'
      ],
      rows: [
        {
          favorited: true,
          // The favorites button has defaults that can be overriden
          favoritesProps: {
            'aria-label': 'Favorited', // Defaults to 'Starred' / 'Not starred'
            'aria-labelledby': 'favorites-button-a repository-1' // Defaults to `favorites-button-${rowIndex}`
          },
          cells: ['one', 'two', 'a', 'four', 'five']
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five'],
          disableSelection: true
        },
        {
          favorited: true,
          cells: ['p', 'two', 'b', 'four', 'five']
        }
      ],
      sortBy: {},
      canSortFavorites: true
    };
    this.onSelect = this.onSelect.bind(this);
    this.onFavorite = this.onFavorite.bind(this);
    this.onSort = this.onSort.bind(this);
    this.toggleFavsSort = this.toggleFavsSort.bind(this);
  }

  onSelect(event: React.FormEvent, isSelected: boolean, rowId: number) {
    let rows;
    if (rowId === -1) {
      // header row
      rows = this.state.rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      // body row
      rows = [...this.state.rows];
      rows[rowId] = { ...rows[rowId], selected: isSelected };
    }
    this.setState({
      rows
    });
  }

  onFavorite(event: React.MouseEvent, isFavorited: boolean, rowId: number) {
    this.setState({
      rows: this.state.rows.map((row, index) => {
        if (index === rowId) {
          row.favorited = isFavorited;
          row.favoritesProps = {
            ...row.favoritesProps,
            // Example of how to override the default aria-label of Starred / Not starred
            'aria-label': isFavorited ? 'Favorited' : 'Not favorited'
          };
        }
        return row;
      })
    });
  }

  onSort(_event: React.MouseEvent, index: number, direction: 'asc' | 'desc') {
    let sortedRows;
    if (index === 1) {
      // favorites column
      sortedRows = [...this.state.rows].sort((a, b) => {
        if (a.favorited && !b.favorited) {
          return -1;
        } else if (!a.favorited && b.favorited) {
          return 1;
        }
        return 0;
      });
    } else {
      const userIndex = index - 2;
      sortedRows = [...this.state.rows].sort((a, b) => {
        if (a.cells[userIndex] < b.cells[userIndex]) {
          return -1;
        }
        if (a.cells[userIndex] > b.cells[userIndex]) {
          return 1;
        }
        return 0;
      });
    }
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === 'asc' ? sortedRows : sortedRows.reverse()
    });
  }

  toggleFavsSort(checked: boolean) {
    this.setState({
      canSortFavorites: checked
    });
  }

  render() {
    const { columns, rows, sortBy, canSortFavorites } = this.state;

    return (
      <div>
        <Checkbox
          label="Can sort favorites"
          isChecked={canSortFavorites}
          onChange={(_event, checked) => this.toggleFavsSort(checked)}
          aria-label="toggle select all checkbox"
          id="toggle-select-all"
          name="toggle-select-all"
        />
        <Table
          // using this prop enables the favorites column
          onFavorite={this.onFavorite}
          // if the onSort prop is detected, favorites can be sorted
          // if you want to exclude favorites from sorting you can use this prop with a value of `false`
          canSortFavorites={canSortFavorites}
          onSelect={this.onSelect}
          onSort={this.onSort}
          sortBy={sortBy}
          aria-label="Favoritable Table"
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
