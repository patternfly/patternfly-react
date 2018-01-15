import { Table } from './Table';
import { TABLE_ALIGN, TABLE_SORT_DIRECTION } from './constants';
import TableActions from './TableActions';
import TableButton from './TableButton';
import TableCell from './TableCell';
import TableCheckbox from './TableCheckbox';
import TableHeading from './TableHeading';
import TablePfProvider from './TablePfProvider';
import TableSelectionCell from './TableSelectionCell';
import TableSelectionHeading from './TableSelectionHeading';

Table.Actions = TableActions;
Table.Button = TableButton;
Table.Cell = TableCell;
Table.Checkbox = TableCheckbox;
Table.Heading = TableHeading;
Table.PfProvider = TablePfProvider;
Table.SelectionCell = TableSelectionCell;
Table.SelectionHeading = TableSelectionHeading;

export {
  Table,
  TableCell,
  TableHeading,
  TablePfProvider,
  TableSelectionCell,
  TableSelectionHeading,
  TABLE_ALIGN,
  TABLE_SORT_DIRECTION
};
