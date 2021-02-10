import { IFormatterValueType, IExtra, ITransform } from '../TableTypes';

export const emptyTD: ITransform = () => ({
  component: 'td'
});

export const scopeColTransformer: ITransform = () => ({
  scope: 'col'
});

export const emptyCol: ITransform = (label: IFormatterValueType) => ({
  ...(label ? {} : { scope: '' })
});

export const parentId: ITransform = (_value: IFormatterValueType, { rowData }: IExtra) => ({
  parentId: rowData.parent
});

export const mapProps: ITransform = (_label: IFormatterValueType, { property, rowData }: IExtra) => ({
  ...(rowData[property] && rowData[property].props)
});
