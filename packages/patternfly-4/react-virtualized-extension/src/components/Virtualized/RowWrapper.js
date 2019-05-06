import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash-es';
import { columnsAreEqual } from 'reactabular-table';
import { RowWrapper } from '@patternfly/react-table';
import { VirtualizedBodyContext } from './Body';

class VirtualizedRowWrapper extends React.Component {
  trRef = null;

  setTrRef = element => {
    this.trRef = element;
  };

  updateRowHeight = () => {
    if (this.trRef) {
      const { updateHeight, rowProps } = this.props;
      updateHeight(rowProps['aria-rowindex'], this.getAbsoluteHeight(this.trRef));
    }
  };

  // offsetHeight does not include margins, so we use this helper for better accuracy
  getAbsoluteHeight = el => {
    const styles = window.getComputedStyle(el);
    const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    return Math.ceil(el.offsetHeight + margin);
  };

  componentDidMount() {
    this.updateRowHeight();
  }
  componentDidUpdate() {
    // update height every update since we have flex css that can change row heights after resize rendering
    this.updateRowHeight();
  }

  render() {
    const { updateHeight, initialMeasurement, row, rowProps, ...props } = this.props;
    return (
      <RowWrapper
        trRef={this.setTrRef}
        row={row}
        aria-rowindex={row['aria-rowindex']}
        data-id={rowProps['data-id']}
        {...props}
      />
    );
  }
}
VirtualizedRowWrapper.propTypes = {
  ...RowWrapper.propTypes,
  rowProps: PropTypes.shape({
    'data-id': PropTypes.string.isRequired,
    'aria-rowindex': PropTypes.number.isRequired
  }).isRequired,
  updateHeight: PropTypes.func.isRequired,
  initialMeasurement: PropTypes.bool.isRequired
};

const VirtualizedRowWrapperWithContext = props => (
  <VirtualizedBodyContext.Consumer>
    {({ updateHeight, initialMeasurement }) => (
      <VirtualizedRowWrapper {...props} updateHeight={updateHeight} initialMeasurement={initialMeasurement} />
    )}
  </VirtualizedBodyContext.Consumer>
);

export default VirtualizedRowWrapperWithContext;
