import { IFormatterValueType, IFormatter } from '../TableContext';

const defaultTitle: IFormatter = (data: IFormatterValueType) =>
  data && data.hasOwnProperty('title') ? data.title : data;

export { defaultTitle };
