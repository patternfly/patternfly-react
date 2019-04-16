import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VirtualizedBodyContext } from './Body';
import { BodyWrapper as ReactTableBodyWrapper } from '@patternfly/react-table';
import { bodyWrapperContextTypes, bodyWrapperTypes } from './types';

import { virtualizedCss } from './css/virtualized-css';

virtualizedCss.inject();

class BodyWrapper extends Component {
  tr = props => React.createElement('tr', props);
  render() {
    const { children, tbodyRef, startHeight, endHeight, showExtraRow, mappedRows, ...props } = this.props;
    const startRow = this.tr({
      key: 'start-row',
      style: {
        height: startHeight
      },
      'aria-hidden': true,
      className: 'pf-virtualized-spacer'
    });
    const endRow = this.tr({
      key: 'end-row',
      style: {
        height: endHeight
      },
      'aria-hidden': true,
      className: 'pf-virtualized-spacer'
    });
    // Extra row to keep onRow indexing stable instead of even/odd. This is important
    // for styling.
    const rows = [startRow].concat(children).concat(endRow);

    if (showExtraRow) {
      rows.unshift(
        this.tr({
          key: 'extra-row',
          style: {
            height: 0
          },
          'aria-hidden': true,
          className: 'pf-virtualized-spacer'
        })
      );
    }

    return (
      <ReactTableBodyWrapper {...props} tbodyRef={tbodyRef}>
        {rows}
      </ReactTableBodyWrapper>
    );
  }
}
BodyWrapper.contextTypes = bodyWrapperContextTypes;
BodyWrapper.propTypes = {
  ...bodyWrapperTypes,
  ...ReactTableBodyWrapper.propTypes
};

const propTypes = {
  rows: PropTypes.array,
  tbodyRef: PropTypes.func
};
const defaultProps = {
  rows: [],
  tbodyRef: null
};

const VirtualizedBodyWrapper = ({ ...props }) => (
  <VirtualizedBodyContext.Consumer>
    {({ tbodyRef, startHeight, endHeight, showExtraRow }) => (
      <BodyWrapper
        {...props}
        tbodyRef={tbodyRef}
        startHeight={startHeight}
        endHeight={endHeight}
        showExtraRow={showExtraRow}
      />
    )}
  </VirtualizedBodyContext.Consumer>
);
VirtualizedBodyWrapper.propTypes = propTypes;
VirtualizedBodyWrapper.defaultProps = defaultProps;

export default VirtualizedBodyWrapper;
