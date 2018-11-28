export { default as selectable } from './decorators/selectable';
export { default as sortable } from './decorators/sortable';
export { default as cellActions } from './decorators/cellActions';
export { default as cellWidth } from './decorators/cellWidth';
export { collapsible, expandedRow } from './decorators/collapsible';

export const emptyTD = () => ({
  scope: '',
  component: 'td'
})

export const scopeColTransformer = () => ({
  scope: 'col'
});

export const headerCol = () => ({
  component: 'th'
})

export const emptyCol = (label) => ({
  ...label ? {} : { scope: '' }
})

export const parentId = (_value, { rowData }) => ({
  parentId: rowData.parent
})

export const mapProps = (_label, { property, rowData }) => ({
  ...rowData[property] && rowData[property].props
})
