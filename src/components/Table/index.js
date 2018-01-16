import { Table } from './Table';
import {
  TABLE_ALIGN,
  TABLE_ALIGNMENT_TYPES,
  TABLE_SORT_DIRECTION,
  TABLE_SORT_DIRECTIONS
} from './constants';
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
Table.TABLE_ALIGN = TABLE_ALIGN;
Table.TABLE_ALIGNMENT_TYPES = TABLE_ALIGNMENT_TYPES;
Table.TABLE_SORT_DIRECTION = TABLE_SORT_DIRECTION;
Table.TABLE_SORT_DIRECTIONS = TABLE_SORT_DIRECTIONS;

export {
  Table,
  TableCell,
  TableHeading,
  TablePfProvider,
  TableSelectionCell,
  TableSelectionHeading,
  TABLE_ALIGN,
  TABLE_ALIGNMENT_TYPES,
  TABLE_SORT_DIRECTION,
  TABLE_SORT_DIRECTIONS
};
