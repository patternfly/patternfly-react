import { IFormatterValueType, IFormatter } from '../base';

const defaultTitle: IFormatter = (data: IFormatterValueType) =>
  data && data.hasOwnProperty('title') ? data.title : data;

export { defaultTitle };
