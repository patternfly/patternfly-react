import { IFormatterValueType, IFormatter } from '../Table';

const defaultTitle: IFormatter = (data: IFormatterValueType) => (data && data.hasOwnProperty('title') ? data.title : data);

export { defaultTitle };
