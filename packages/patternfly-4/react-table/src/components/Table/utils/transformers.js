export { default as selectable } from './decorators/selectable';
export { default as sortable } from './decorators/sortable';
export { default as cellActions } from './decorators/cellActions';
export { default as cellWidth } from './decorators/cellWidth';
export { default as wrappable } from './decorators/wrappable';
export { default as textCenter } from './decorators/textCenter';
export { collapsible, expandedRow, expandable } from './decorators/collapsible';
export { compoundExpand } from './decorators/compoundExpand';
export { default as headerCol } from './decorators/headerCol';
export { default as classNames, Visibility } from './decorators/classNames';

export const emptyTD = () => ({
  scope: '',
  component: 'td'
});

export const scopeColTransformer = () => ({
  scope: 'col'
});

export const emptyCol = label => ({
  ...(label ? {} : { scope: '' })
});

export const parentId = (_value, { rowData }) => ({
  parentId: rowData.parent
});

export const mapProps = (_label, { property, rowData }) => ({
  ...(rowData[property] && rowData[property].props)
});
