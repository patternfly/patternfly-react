// This is for charts for jest.
declare module 'victory-core' {
  export const Data: any;
  export const Helpers: any;
  export const Line: any;
  export const Path: any;
  export const TextSize: any;
}

declare module 'linear-layout-vector' {
  export const getLength: any;
  LinearLayoutVector.prototype.getLength = getLength;
  LinearLayoutVector.prototype.setLength = setLength;
  LinearLayoutVector.prototype.getDefaultSize = getDefaultSize;
  LinearLayoutVector.prototype.setDefaultSize = setDefaultSize;
  LinearLayoutVector.prototype.getAxisOffset = getAxisOffset;
  LinearLayoutVector.prototype.setAxisOffset = setAxisOffset;
  LinearLayoutVector.prototype.getGap = getGap;
  LinearLayoutVector.prototype.setGap = setGap;
  LinearLayoutVector.prototype.getItemSize = getItemSize;
  LinearLayoutVector.prototype.setItemSize = setItemSize;
  LinearLayoutVector.prototype.insert = insert;
  LinearLayoutVector.prototype.remove = remove;
  LinearLayoutVector.prototype.start = start;
  LinearLayoutVector.prototype.end = end;
  LinearLayoutVector.prototype.indexOf = indexOf;
  LinearLayoutVector.prototype.clear = clear;
  LinearLayoutVector.prototype.toString = toString;
}