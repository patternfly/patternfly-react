import React, { Component, Children, Fragment } from 'react';
import styles from '@patternfly/patternfly/components/Table/table.css';
import { css } from '@patternfly/react-styles';
import { mapOpenedRows } from './utils/headerUtils';
import PropTypes from 'prop-types';

class BodyWrapper extends Component {
  render() {
    const { mappedRows, tbodyRef, ...props } = this.props;
    if (mappedRows && mappedRows.some(row => row.hasOwnProperty('parent'))) {
      return (
        <Fragment>
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
        </Fragment>
      );
    }
    return <tbody {...props} ref={tbodyRef} />;
  }
}

BodyWrapper.propTypes = {
  rows: PropTypes.array,
  onCollapse: PropTypes.func,
  tbodyRef: PropTypes.func
};

BodyWrapper.defaultProps = {
  rows: [],
  tbodyRef: null
};

export default BodyWrapper;
