export { selectable } from './decorators/selectable';
export { sortable } from './decorators/sortable';
export { cellActions } from './decorators/cellActions';
export { cellWidth } from './decorators/cellWidth';
export { wrappable } from './decorators/wrappable';
export { textCenter } from './decorators/textCenter';
export { collapsible, expandedRow, expandable } from './decorators/collapsible';
export { compoundExpand } from './decorators/compoundExpand';
export { headerCol } from './decorators/headerCol';
export { classNames, Visibility } from './decorators/classNames';

import { IFormatterValueType, IExtra } from '../Table';

const emptyTD = () => ({
  scope: '',
  component: 'td'
});

const scopeColTransformer = () => ({
  scope: 'col'
});

const emptyCol = (label: IFormatterValueType) => ({
  ...(label ? {} : { scope: '' })
});

const parentId = (_value: IFormatterValueType, { rowData }: IExtra) => ({
  parentId: rowData.parent
});


const mapProps = (_label: IFormatterValueType, { property, rowData }: IExtra) => ({
  ...(rowData[property] && rowData[property].props)
});

export { emptyTD, scopeColTransformer, emptyCol, parentId, mapProps };
