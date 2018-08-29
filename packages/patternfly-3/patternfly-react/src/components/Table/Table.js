import * as Table from 'reactabular-table';

import actionHeaderCellFormatter from './Formatters/actionHeaderCellFormatter';
import customHeaderFormattersDefinition from './Formatters/customHeaderFormattersDefinition';
import selectionCellFormatter from './Formatters/selectionCellFormatter';
import selectionHeaderCellFormatter from './Formatters/selectionHeaderCellFormatter';
import sortableHeaderCellFormatter from './Formatters/sortableHeaderCellFormatter';
import tableCellFormatter from './Formatters/tableCellFormatter';
import inlineEditFormatterFactory from './Formatters/inlineEditFormatterFactory';

import {
  defaultSortingOrder,
  TABLE_ALIGN,
  TABLE_ALIGNMENT_TYPES,
  TABLE_SORT_DIRECTION,
  TABLE_SORT_DIRECTIONS
} from './TableConstants';
import TableActions from './TableActions';
import TableButton from './TableButton';
import TableCell from './TableCell';
import TableCheckbox from './TableCheckbox';
import TableDropdownKebab from './TableDropdownKebab';
import TableHeading from './TableHeading';
import TableInlineEditRow from './TableInlineEditRow';
import TableInlineEditHeaderRow from './TableInlineEditHeaderRow';
import TablePfProvider from './TablePfProvider';
import TableSelectionCell from './TableSelectionCell';
import TableSelectionHeading from './TableSelectionHeading';

Table.actionHeaderCellFormatter = actionHeaderCellFormatter;
Table.customHeaderFormattersDefinition = customHeaderFormattersDefinition;
Table.defaultSortingOrder = defaultSortingOrder;
Table.selectionCellFormatter = selectionCellFormatter;
Table.selectionHeaderCellFormatter = selectionHeaderCellFormatter;
Table.sortableHeaderCellFormatter = sortableHeaderCellFormatter;
Table.tableCellFormatter = tableCellFormatter;
Table.inlineEditFormatterFactory = inlineEditFormatterFactory;

Table.Actions = TableActions;
Table.Button = TableButton;
Table.Cell = TableCell;
Table.Checkbox = TableCheckbox;
Table.DropdownKebab = TableDropdownKebab;
Table.Heading = TableHeading;
Table.PfProvider = TablePfProvider;
Table.InlineEditRow = TableInlineEditRow;
Table.TableInlineEditHeaderRow = TableInlineEditHeaderRow;
Table.SelectionCell = TableSelectionCell;
Table.SelectionHeading = TableSelectionHeading;
Table.TABLE_ALIGN = TABLE_ALIGN;
Table.TABLE_ALIGNMENT_TYPES = TABLE_ALIGNMENT_TYPES;
Table.TABLE_SORT_DIRECTION = TABLE_SORT_DIRECTION;
Table.TABLE_SORT_DIRECTIONS = TABLE_SORT_DIRECTIONS;

export { Table };
