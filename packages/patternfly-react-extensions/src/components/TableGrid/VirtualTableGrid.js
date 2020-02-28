import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AutoSizer, List as VirtualList, WindowScroller, CellMeasurerCache, CellMeasurer } from 'react-virtualized';

import TableGridHead from './TableGridHead';
import TableGridColumnHeader from './TableGridColumnHeader';
import TableGridRow from './TableGridRow';
import TableGridCol from './TableGridCol';
import TableGrid from './TableGrid';

/**
 * VirtualTableGrid Component for PatternFly
 */

const VirtualTableGrid = ({
  className,
  bordered,
  selectType,
  scrollable,
  scrollableElementId,
  header,
  row,
  bodyClassName,
  empty,
  emptyComponent,
  measurementCache,
  data,
  tableData,
  ...props
}) => {
  const cellMeasurementCache =
    measurementCache ||
    new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 44
    });

  const rowRenderer = rowProps => {
    const { index, style, key, parent } = rowProps;
    const obj = data[index];

    return (
      <CellMeasurer cache={cellMeasurementCache} columnIndex={0} key={key} rowIndex={index} parent={parent}>
        <div style={style}>{row({ obj, tableData, index })}</div>
      </CellMeasurer>
    );
  };

  const classes = classNames(
    {
      'table-grid-pf': true,
      'container-fluid': true,
      bordered,
      'row-select': selectType === 'row',
      'cell-select': selectType === 'cell',
      'checkbox-select': selectType === 'checkbox'
    },
    className
  );

  const renderAutoSizer = sizerProps => {
    const { height, isScrolling, registerChild, onChildScroll, scrollTop } = sizerProps;

    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <div ref={registerChild}>
            <VirtualList
              autoHeight
              data={data}
              height={height || 0}
              deferredMeasurementCache={cellMeasurementCache}
              rowHeight={cellMeasurementCache.rowHeight}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              rowRenderer={rowRenderer}
              rowCount={data.length}
              scrollTop={scrollTop}
              width={width}
              tabIndex={null}
            />
          </div>
        )}
      </AutoSizer>
    );
  };

  const scrollElement = scrollable || document.getElementById(scrollableElementId) || window;

  const bodyComponent = empty ? (
    emptyComponent
  ) : (
    <WindowScroller scrollElement={scrollElement}>{renderAutoSizer}</WindowScroller>
  );

  return (
    <div className={classes} {...props}>
      {header(tableData)}
      <TableGrid.Body className={bodyClassName}>{bodyComponent}</TableGrid.Body>
    </div>
  );
};

VirtualTableGrid.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to use a bordered grid */
  bordered: PropTypes.bool,
  /** Type of selection for the grid */
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none']),
  /** Scrollable element for the list (use scrollableElementId or scrollable or neither to default to window) */
  scrollable: PropTypes.any,
  /** Id of the scrollable element for the list (use scrollableElementId or scrollable or neither to default to window) */
  scrollableElementId: PropTypes.any,
  /** Function(tableData) to return the header for the grid */
  header: PropTypes.func.isRequired,
  /** Function({obj, tableData, index}) to return a row  */
  row: PropTypes.func.isRequired,
  /** Classes to add to the body */
  bodyClassName: PropTypes.string,
  /** Flag if there is no data */
  empty: PropTypes.bool,
  /** Component to show if empty */
  emptyComponent: PropTypes.node,
  /* react-virtualized: Cache to be shared between CellMeasurer and its parent Grid. */
  measurementCache: PropTypes.object,
  /** Data to fill the table */
  data: PropTypes.array,
  /** Global table data to be passed to each row (state values?) */
  tableData: PropTypes.any
};

VirtualTableGrid.defaultProps = {
  className: '',
  bordered: true,
  selectType: 'none',
  scrollable: null,
  scrollableElementId: '',
  bodyClassName: '',
  empty: false,
  emptyComponent: null,
  measurementCache: null,
  data: [],
  tableData: null
};

VirtualTableGrid.Head = TableGridHead;
VirtualTableGrid.ColumnHeader = TableGridColumnHeader;
VirtualTableGrid.Row = TableGridRow;
VirtualTableGrid.Col = TableGridCol;

export default VirtualTableGrid;
