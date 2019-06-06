import { FunctionComponent, UIEventHandler } from 'react';

export interface RowWrapperRow {
  isOpen: Boolean;
  isExpanded: Boolean;
}

export interface RowWrapperProps {
  trRef?: Function;
  onScroll?: UIEventHandler;
  onResize?: UIEventHandler;
  row?: RowWrapperRow;
  rowProps?: Object;
}

declare const RowWrapper: FunctionComponent<RowWrapperProps>;

export default RowWrapper;

