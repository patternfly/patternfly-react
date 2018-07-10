import { getChildren, getImmediateChildren, fixOrder } from 'treetabular';

export function filterVisible(rows) {
  return rows.filter(oneRow => oneRow.visible).map(oneRow => ({ ...oneRow }));
}

export function setVisibleChildren(rowIndex, rows, defaultVisible = true) {
  let children;
  if (rows[rowIndex].collapsed === true) {
    children = getChildren({ index: rowIndex })(rows);
  } else {
    children = getImmediateChildren({ index: rowIndex })(rows);
  }
  children.forEach(oneRow => {
    oneRow.visible = !rows[rowIndex].collapsed;
    oneRow.collapsed = defaultVisible;
  });

  return children;
}

function makeRow(value, parent) {
  if (parent !== undefined) {
    return { ...value, parent };
  }
  return value;
}

export function flattenRows(rows, parent) {
  return rows.reduce((acc, val) => {
    if (val.hasOwnProperty('children')) {
      const { children, ...value } = val;
      return acc.concat(
        flattenRows(children, value.id),
        makeRow(value, parent)
      );
    }
    return acc.concat(makeRow(val, parent));
  }, []);
}

export function defaultRowValues(rows, isFlat = false) {
  rows = isFlat ? rows : flattenRows(rows);
  return fixOrder()(rows).map((row, key) => {
    row._index = key;
    row.visible = row.visible === undefined ? true : row.visible;
    row.collapsed = row.collapsed === true;
    if (row.visible) {
      setVisibleChildren(row._index, rows, row.collapsed);
    }
    return { ...row };
  });
}

export function getShowingChildren({ rowData }) {
  if (rowData.collapsed !== undefined) {
    return rowData.collapsed;
  }
  return false;
}
