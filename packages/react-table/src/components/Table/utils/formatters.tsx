import { IFormatterValueType, IFormatter } from '../TableTypes';

const defaultTitle: IFormatter = (data: IFormatterValueType) =>
  data && data.hasOwnProperty('title') ? data.title : data;

export { defaultTitle };
