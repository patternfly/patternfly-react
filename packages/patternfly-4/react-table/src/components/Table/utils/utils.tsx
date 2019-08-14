import { IRow, IRowCell } from '../Table';

const hasCompoundParentsExpanded = (parentId: number, compoundParent: number, rows: IRow[]) => {
  // max rows.length parents
  for (const i of rows) {
    if (rows[parentId].hasOwnProperty('parent')) {
      parentId = rows[parentId].parent;
    } else {
      return (rows[parentId].cells[compoundParent] as IRowCell).props.isOpen;
    }
  }
  return false;
};

const hasParentsExpanded = (parentId: number, rows: IRow[]) => {
  // max rows.length parents
  for (const i of rows) {
    if (rows[parentId].hasOwnProperty('parent')) {
      parentId = rows[parentId].parent;
    } else {
      return rows[parentId].isOpen;
    }
  }
  return false;
};

export const isRowExpanded = (row: IRow, rows: IRow[]) => {
  if (row.parent !== undefined) {
    if (row.hasOwnProperty('compoundParent')) {
      return hasCompoundParentsExpanded(row.parent, row.compoundParent, rows);
    }
    return hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen;
  }
  return undefined;
};
