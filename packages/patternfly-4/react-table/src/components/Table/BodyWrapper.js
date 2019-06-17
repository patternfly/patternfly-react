import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';
import { mapOpenedRows } from './utils/headerUtils';

// eslint-disable-next-line react/prefer-stateless-function
class BodyWrapper extends React.Component {
  render() {
    const { mappedRows, tbodyRef, rows, onCollapse, ...props } = this.props;
    if (mappedRows && mappedRows.some(row => row.hasOwnProperty('parent'))) {
      return (
        <React.Fragment>
          {mapOpenedRows(mappedRows, this.props.children).map((oneRow, key) => (
            <tbody
              {...props}
              className={css(oneRow.isOpen && styles.modifiers.expanded)}
              key={`tbody-${key}`}
              ref={tbodyRef}
            >
              {oneRow.rows}
            </tbody>
          ))}
        </React.Fragment>
      );
    }

    return <tbody {...props} ref={tbodyRef} />;
  }
}

BodyWrapper.propTypes = {
  children: PropTypes.node,
  mappedRows: PropTypes.array,
  rows: PropTypes.array,
  onCollapse: PropTypes.func,
  tbodyRef: PropTypes.func
};

BodyWrapper.defaultProps = {
  children: null,
  mappedRows: undefined,
  rows: [],
  onCollapse: null,
  tbodyRef: null
};

export default BodyWrapper;
