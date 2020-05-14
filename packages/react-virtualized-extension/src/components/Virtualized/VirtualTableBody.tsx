/* eslint-disable */

import * as React from 'react';
import {
  NoContentRenderer,
  Alignment,
  CellSize,
  CellPosition,
  OverscanIndicesGetter,
  RenderedSection,
  CellRendererParams,
  Scroll as VirtualGridScroll,
  Scroll
} from './types';

import accessibilityOverscanIndicesGetter from './accessibilityOverscanIndicesGetter';
import { VirtualGrid } from './VirtualGrid';
import clsx from 'clsx';

/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

interface Props {
  'aria-label'?: string;

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: boolean;

  /** Optional CSS class name */
  className?: string;

  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: number;

  /** Height constraint for list (determines how many actual rows are rendered) */
  height: number;

  /** Optional renderer to be used in place of rows when rowCount is 0 */
  noRowsRenderer: NoContentRenderer;

  /** Callback invoked with information about the slice of rows that were just rendered.  */

  onRowsRendered: (params: any) => void;

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  onScroll: (params: Scroll) => void;

  /** See VirtualGrid#overscanIndicesGetter */
  overscanIndicesGetter: OverscanIndicesGetter;

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: number;

  /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
  rowHeight: CellSize;

  /** Responsible for rendering a row given an index; ({ index: number }): node */
  rowRenderer: any;

  /** Number of rows in list. */
  rowCount: number;

  /** See VirtualGrid#scrollToAlignment */
  scrollToAlignment: Alignment;

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: number;

  /** Vertical offset. */
  scrollTop?: number;

  /** Optional inline style */
  style: Object;

  /** Tab index for focus */
  tabIndex?: number;

  /** Width of list */
  width: number;

  columns?: any[];

  columnCount?: number;

  rows: any[];
}

export class VirtualTableBody extends React.PureComponent<Props> {
  static defaultProps = {
    autoHeight: false,
    estimatedRowSize: 30,
    onScroll: () => {},
    noRowsRenderer: () => null as any,
    onRowsRendered: () => {},
    overscanIndicesGetter: accessibilityOverscanIndicesGetter,
    overscanRowCount: 10,
    scrollToAlignment: 'auto',
    scrollToIndex: -1,
    style: {}
  };

  VirtualGrid: any;

  forceUpdateVirtualGrid() {
    if (this.VirtualGrid) {
      this.VirtualGrid.forceUpdate();
    }
  }

  /** See VirtualGrid#getOffsetForCell */
  getOffsetForRow({ alignment, index }: { alignment: Alignment; index: number }) {
    if (this.VirtualGrid) {
      const { scrollTop } = this.VirtualGrid.getOffsetForCell({
        alignment,
        rowIndex: index,
        columnIndex: 0
      });

      return scrollTop;
    }
    return 0;
  }

  /** CellMeasurer compatibility */
  invalidateCellSizeAfterRender({ columnIndex, rowIndex }: CellPosition) {
    if (this.VirtualGrid) {
      this.VirtualGrid.invalidateCellSizeAfterRender({
        rowIndex,
        columnIndex
      });
    }
  }

  /** See VirtualGrid#measureAllCells */
  measureAllRows() {
    if (this.VirtualGrid) {
      this.VirtualGrid.measureAllCells();
    }
  }

  /** CellMeasurer compatibility */
  recomputeVirtualGridSize({ columnIndex = 0, rowIndex = 0 }: CellPosition = {}) {
    if (this.VirtualGrid) {
      this.VirtualGrid.recomputeVirtualGridSize({
        rowIndex,
        columnIndex
      });
    }
  }

  /** See VirtualGrid#recomputeVirtualGridSize */
  recomputeRowHeights(index: number = 0) {
    if (this.VirtualGrid) {
      this.VirtualGrid.recomputeVirtualGridSize({
        rowIndex: index,
        columnIndex: 0
      });
    }
  }

  /** See VirtualGrid#scrollToPosition */
  scrollToPosition(scrollTop: number = 0) {
    if (this.VirtualGrid) {
      this.VirtualGrid.scrollToPosition({ scrollTop });
    }
  }

  /** See VirtualGrid#scrollToCell */
  scrollToRow(index: number = 0) {
    if (this.VirtualGrid) {
      this.VirtualGrid.scrollToCell({
        columnIndex: 0,
        rowIndex: index
      });
    }
  }

  render() {
    const { className, noRowsRenderer, scrollToIndex, width, columns, columnCount, rows, tabIndex, style } = this.props;

    const classNames = clsx('ReactVirtualized__List', className);

    const VirtualGridAny = VirtualGrid as any;
    return (
      // note: these aria props if rendered will break a11y for role="presentation"
      // this approach attempts to fix non standard table grids
      // see: https://www.html5accessibility.com/tests/aria-table-fix.html
      <VirtualGridAny
        {...this.props}
        style={{
          tableLayout: 'fixed',
          display: 'block',
          ...style
        }}
        containerStyle={{
          display: 'block'
        }}
        aria-label={null}
        aria-readonly={null}
        tabIndex={null}
        role="presentation"
        autoContainerWidth
        cellRenderer={this._cellRenderer}
        className={classNames}
        columnWidth={width}
        columnCount={columns ? columns.length : columnCount}
        noContentRenderer={noRowsRenderer}
        onScroll={this._onScroll}
        onSectionRendered={this._onSectionRendered}
        ref={this._setRef}
        scrollToRow={scrollToIndex}
        columns={columns}
        rows={rows}
        scrollContainerComponent="table"
        innerScrollContainerComponent="tbody"
      />
    );
  }

  _cellRenderer = ({ parent, rowIndex, style, isScrolling, isVisible, key }: CellRendererParams) => {
    const { rowRenderer } = this.props;

    // TRICKY The style object is sometimes cached by VirtualGrid.
    // This prevents new style objects from bypassing shallowCompare().
    // However as of React 16, style props are auto-frozen (at least in dev mode)
    // Check to make sure we can still modify the style before proceeding.
    // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713
    const { writable } = Object.getOwnPropertyDescriptor(style, 'width');
    if (writable) {
      // By default, List cells should be 100% width.
      // This prevents them from flowing under a scrollbar (if present).
      style.width = '100%';
    }

    return rowRenderer({
      index: rowIndex,
      style,
      isScrolling,
      isVisible,
      key,
      parent
    });
  };

  _setRef = (ref: any) => {
    this.VirtualGrid = ref;
  };

  _onScroll = ({ clientHeight, scrollHeight, scrollTop }: VirtualGridScroll) => {
    const { onScroll } = this.props;

    onScroll({ clientHeight, scrollHeight, scrollTop } as VirtualGridScroll);
  };

  _onSectionRendered = ({
    rowOverscanStartIndex,
    rowOverscanStopIndex,
    rowStartIndex,
    rowStopIndex
  }: RenderedSection) => {
    const { onRowsRendered } = this.props;

    onRowsRendered({
      overscanStartIndex: rowOverscanStartIndex,
      overscanStopIndex: rowOverscanStopIndex,
      startIndex: rowStartIndex,
      stopIndex: rowStopIndex
    });
  };
}
