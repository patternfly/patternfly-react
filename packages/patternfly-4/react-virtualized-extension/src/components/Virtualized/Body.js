import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableContext } from '@patternfly/react-table';
import calculateAverageHeight from './utils/calculateAverageHeight';
import calculateRows from './utils/calculateRows';
import createDetectElementResize from './utils/detectElementResize';

const initialContext = {
  amountOfRowsToRender: 3, // First few rows for initial measurement
  startIndex: 0, // Index where to start rendering
  startHeight: 0, // Heights for extra rows to mimic scrolling
  endHeight: 0,
  showExtraRow: false // Show extra row (even/odd issue)
};
export const VirtualizedBodyContext = React.createContext(initialContext);

class Body extends React.Component {
  state = initialContext;
  measuredRows = {}; // row key -> measurement
  tbodyRef = null; // tbody ref used for gathering scroll position
  initialMeasurement = true;
  scrollTop = 0;
  timeoutId = 0;

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  setTbodyRef = element => {
    this.tbodyRef = element;
  };

  scrollTo = index => {
    const { rows, rowKey } = this.props;
    const startIndex = parseInt(index, 10);

    if (startIndex >= 0) {
      const startHeight = calculateAverageHeight(this.measuredRows) * startIndex;

      this.scrollTop = startHeight;
      this.tbodyRef.scrollTop = startHeight;

      this.setState(this.calculateRows());
    }
  };

  checkMeasurements = prevProps => {
    // If there are no valid measurements or the rows have changed,
    // calculate some after waiting a while. Without this some styling solutions
    // won't work as you might expect given they can take a while to set container height.
    if (this.initialMeasurement || (prevProps && prevProps.rows !== this.props.rows)) {
      // If the rows have changed, but the user has not scrolled, maintain the existing
      // scroll position
      if (this.tbodyRef) {
        this.tbodyRef.scrollTop = this.scrollTop;
      }
      this.timeoutId = setTimeout(() => {
        const rows = this.calculateRows();

        if (!rows) {
          // Refresh the rows to trigger measurement.
          this.forceUpdate();

          return;
        }

        this.setState(rows, () => {
          this.initialMeasurement = false;
        });
      }, 100);
    }
  };

  getHeight = () => {
    const { container, height, style } = this.props;
    if (container && container()) {
      return container().clientHeight;
    }
    // If `props.height` is not defined, we use `props.style.maxHeight` instead.
    return height || style.maxHeight;
  };

  // Attach information about measuring status. This way we can implement
  // proper shouldComponentUpdate
  rowsToRender = (rows, startIndex, amountOfRowsToRender, rowKey) => {
    const renderedRows = rows.slice(startIndex, startIndex + amountOfRowsToRender).map((rowData, rowIndex) => {
      const ariaRowIndex = startIndex + rowIndex + 1; // aria-rowindex should be 1-based, not 0-based.
      return {
        ...rowData,
        'aria-rowindex': ariaRowIndex,
        _measured: !!this.measuredRows[ariaRowIndex]
      };
    });
    return renderedRows;
  };

  getBodyOffset = container =>
    // this is a bug in reactabular-virtualized, return this.tbodyRef.parentElement.offsetTop + this.tbodyRef.offsetTop;
    // simply returning the tbodyRef.offsetTop does not account for cases that other parent elements set position:relative
    // could be the offset parent. We want the offset from tbody to the passed container element. This can change as the
    // user scrolls so it should only be calculated initially or on resize after scroll position is reset.
    this.tbodyRef.getBoundingClientRect().top - container.getBoundingClientRect().top;

  registerContainer = () => {
    setTimeout(() => {
      const element = this.props.container();
      element && element.addEventListener('scroll', this.onScroll);
      this._detectElementResize = createDetectElementResize();
      this._detectElementResize.addResizeListener(element, this.onResize);
      this.setContainerOffset();
    }, 0);
  };

  setContainerOffset = () => {
    const element = this.props.container && this.props.container();
    if (element) {
      this.containerOffset = this.getBodyOffset(element);
    }
  };

  calculateRows = () => {
    const { rows, rowKey } = this.props;
    return calculateRows({
      scrollTop: this.scrollTop,
      measuredRows: this.measuredRows,
      height: this.getHeight(),
      rowKey,
      rows
    });
  };

  componentDidMount() {
    this.checkMeasurements();
    if (this.props.container) {
      this.registerContainer();
    } else {
      this._detectElementResize = createDetectElementResize();
      this._detectElementResize.addResizeListener(this.tbodyRef, this.onResize);
    }
  }

  componentDidUpdate(prevProps) {
    this.checkMeasurements(prevProps);
  }

  componentWillUnmount() {
    if (this.tbodyRef && this.tbodyRef.__resizeListeners__) {
      this.tbodyRef && this._detectElementResize.removeResizeListener(this.tbodyRef, this.onResize);
    }
    clearTimeout(this.timeoutId);
  }

  onResize() {
    // if the containing element resizes reset all measurements & `measuredRows`
    this.initialMeasurement = true;
    this.scrollTop = 0;
    this.setState(initialContext);
    this.measuredRows = {};
    this.setContainerOffset();
    this.checkMeasurements();
  }

  onScroll(e) {
    const { onScroll, container } = this.props;
    onScroll && onScroll(e);

    const {
      target: { scrollTop }
    } = e;

    // Y didn't change, bail to avoid rendering rows
    if (this.scrollTop === scrollTop) {
      return;
    }
    this.scrollTop = container ? scrollTop - this.containerOffset : scrollTop;
    this.setState(this.calculateRows());
  }

  render() {
    const { onRow, rows, onScroll, container, rowKey, ...props } = this.props;
    const { startIndex, amountOfRowsToRender, startHeight, endHeight, showExtraRow } = this.state;
    const height = this.getHeight();

    const rowsToRender = this.rowsToRender(rows, startIndex, amountOfRowsToRender, rowKey);
    if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.LOG_VIRTUALIZED) {
      console.log(
        // eslint-disable-line no-console
        'rendering',
        rowsToRender.length,
        '/',
        rows.length,
        'rows to render',
        rowsToRender,
        'start index',
        startIndex,
        'amount of rows to render',
        amountOfRowsToRender
      );
    }

    const style = { height };
    if (!container) {
      // if we do not have a parent container to scroll, set the body to scroll
      style.display = 'block';
      style.overflow = 'auto';
    }
    const tableBodyProps = {
      ...props,
      height,
      style,
      onRow: (row, extra) => ({
        // Pass index so that row heights can be tracked properly
        'data-id': row.id || row['aria-rowindex'],
        'aria-rowindex': row['aria-rowindex'],
        ...(onRow ? onRow(row, extra) : {})
      }),
      rowsToRender
    };

    // do not listen to tbody onScroll if we are using window scroller
    if (!container) {
      tableBodyProps.onScroll = this.onScroll;
    }

    return (
      <VirtualizedBodyContext.Provider
        value={{
          tbodyRef: this.setTbodyRef,
          startHeight,
          endHeight,
          showExtraRow,
          updateHeight: (oneRowKey, rowHeight) => {
            this.measuredRows[oneRowKey] = rowHeight;
          },
          // Capture height data only during the initial measurement or during resize
          initialMeasurement: this.initialMeasurement
        }}
      >
        <TableBody {...tableBodyProps} />
      </VirtualizedBodyContext.Provider>
    );
  }
}
Body.propTypes = {
  ...TableBody.propTypes,
  height: heightPropCheck,
  container: PropTypes.func
};
Body.defaultProps = {
  height: undefined,
  container: undefined
};

const VirtualizedBody = ({ tableBody, ...props }) => (
  <TableContext.Consumer>
    {({ headerData, rows }) => <Body {...props} ref={tableBody} headerData={headerData} rows={rows} />}
  </TableContext.Consumer>
);

VirtualizedBody.defaultProps = TableBody.defaultProps;
VirtualizedBody.propTypes = {
  /** Additional classes for table body. */
  className: PropTypes.string,
  /** Specify key which should be used for labeling each row. */
  rowKey: PropTypes.string,
  /** Function that is fired when user clicks on row.  */
  onRowClick: PropTypes.func,
  /** Virtualized rows (optional provided in place of rows) */
  rowsToRender: PropTypes.array,
  /** the height of the body or window container */
  height: heightPropCheck,
  /** a callback return the container ref */
  container: PropTypes.func,
  /** a react ref that can be used by the consumer to scroll to a given index */
  tableBody: PropTypes.object
};

export function heightPropCheck(props, propName, componentName) {
  if (
    typeof props[propName] !== 'number' &&
    (!props.style || typeof props.style.maxHeight !== 'number') &&
    (!props.container || typeof props.container !== 'function')
  ) {
    return new Error(
      `height or style.maxHeight of type 'number' or container of type 'function' is marked as required in ${componentName}`
    );
  }

  return undefined;
}

export default VirtualizedBody;
