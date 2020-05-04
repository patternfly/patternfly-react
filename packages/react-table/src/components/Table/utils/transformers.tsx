export { selectable } from './decorators/selectable';
export { sortable } from './decorators/sortable';
export { cellActions } from './decorators/cellActions';
export { cellWidth } from './decorators/cellWidth';
export { editable } from './decorators/editable';
export { breakWord, fitContent, nowrap, truncate, wrappable } from './decorators/wrappable';
export { textCenter } from './decorators/textCenter';
export { collapsible, expandedRow, expandable } from './decorators/collapsible';
export { compoundExpand } from './decorators/compoundExpand';
export { headerCol } from './decorators/headerCol';
export { classNames, Visibility } from './decorators/classNames';

import { IFormatterValueType, IExtra, ITransform } from '../Table';

const emptyTD: ITransform = () => ({
  scope: '',
  component: 'td'
});

const scopeColTransformer: ITransform = () => ({
  scope: 'col'
});

const emptyCol: ITransform = (label: IFormatterValueType) => ({
  ...(label ? {} : { scope: '' })
});

const parentId: ITransform = (_value: IFormatterValueType, { rowData }: IExtra) => ({
  parentId: rowData.parent
});

const mapProps: ITransform = (_label: IFormatterValueType, { property, rowData }: IExtra) => ({
  ...(rowData[property] && rowData[property].props)
});

export { emptyTD, scopeColTransformer, emptyCol, parentId, mapProps };
