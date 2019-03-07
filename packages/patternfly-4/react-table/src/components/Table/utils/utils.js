const hasParentsExpanded = (parentId, rows) => {
  // max rows.length parents
  for (let i = 0; i < rows.length; i++) {
    if (rows[parentId].hasOwnProperty('parent')) {
      parentId = rows[parentId].parent;
    } else {
      return rows[parentId].isOpen;
    }
  }
  return false;
};

export const isRowExpanded = (row, rows) =>
  row.parent !== undefined ? hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen : undefined;
