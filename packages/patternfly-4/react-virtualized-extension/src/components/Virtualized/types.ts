import * as React from 'react';
import ScalingCellSizeAndPositionManager from './utils/ScalingCellSizeAndPositionManager';

export interface CellPosition {
  columnIndex?: number;
  rowIndex?: number;
}

export interface CellRendererParams {
  columnIndex: number;
  isScrolling: boolean;
  isVisible: boolean;
  key: string;
  parent: any;
  rowIndex: number;
  style: any;
}

export type CellRenderer = (props: CellRendererParams) => React.ReactElement<any>;

export interface CellCache {
  [key: string]: React.ReactElement<any>;
}
export interface StyleCache {
  [key: string]: any;
}

export interface CellRangeRendererParams {
  cellCache: CellCache;
  cellRenderer: CellRenderer;
  columnSizeAndPositionManager: ScalingCellSizeAndPositionManager;
  columnStartIndex: number;
  columnStopIndex: number;
  deferredMeasurementCache?: any;
  horizontalOffsetAdjustment: number;
  isScrolling: boolean;
  isScrollingOptOut: boolean;
  parent: any;
  rowSizeAndPositionManager: ScalingCellSizeAndPositionManager;
  rowStartIndex: number;
  rowStopIndex: number;
  scrollLeft: number;
  scrollTop: number;
  styleCache: StyleCache;
  verticalOffsetAdjustment: number;
  visibleColumnIndices: any;
  visibleRowIndices: any;
}

export type CellRangeRenderer = (params: CellRangeRendererParams) => React.ReactElement<any>[];

export type CellSizeGetter = (params: { index: number }) => number;

export type CellSize = CellSizeGetter | number;

export type NoContentRenderer = () => React.ReactElement<any> | null;

export interface Scroll {
  clientHeight: number;
  clientWidth: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
}

export interface ScrollbarPresenceChange {
  horizontal: boolean;
  vertical: boolean;
  size: number;
}

export interface RenderedSection {
  columnOverscanStartIndex: number;
  columnOverscanStopIndex: number;
  columnStartIndex: number;
  columnStopIndex: number;
  rowOverscanStartIndex: number;
  rowOverscanStopIndex: number;
  rowStartIndex: number;
  rowStopIndex: number;
}

export interface OverscanIndicesGetterParams {
  // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
  direction: 'horizontal' | 'vertical';

  // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
  scrollDirection: -1 | 1;

  // Number of rows or columns in the current axis
  cellCount: number;

  // Maximum number of cells to over-render in either direction
  overscanCellsCount: number;

  // Begin of range of visible cells
  startIndex: number;

  // End of range of visible cells
  stopIndex: number;
}

export interface OverscanIndices {
  overscanStartIndex: number;
  overscanStopIndex: number;
}

export type OverscanIndicesGetter = (params: OverscanIndicesGetterParams) => OverscanIndices;

export type Alignment = 'auto' | 'end' | 'start' | 'center';

export interface VisibleCellRange {
  start?: number;
  stop?: number;
}
