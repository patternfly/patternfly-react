import { UIEventHandler } from 'react';

export interface RowWrapperRow {
  isOpen: Boolean;
  isExpanded: Boolean;
}

export interface RowWrapper {
  trRef?: Function;
  onScroll?: UIEventHandler;
  onResize?: UIEventHandler;
  row?: RowWrapperRow;
  rowProps?: Object;
}

export default RowWrapper;
