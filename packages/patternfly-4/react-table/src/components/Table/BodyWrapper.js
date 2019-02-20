import React, { Component, Children, Fragment } from 'react';
import styles from '@patternfly/patternfly/components/Table/table.css';
import { css } from '@patternfly/react-styles';
import { mapOpenedRows } from './utils/headerUtils';
import PropTypes from 'prop-types';

class BodyWrapper extends Component {
  render() {
    const { mappedRows, ...props } = this.props;
    if (mappedRows.some(row => row.hasOwnProperty('isOpen'))) {
      return (
        <Fragment>
          {mapOpenedRows(mappedRows, this.props.children).map((oneRow, key) => (
            <tbody {...props} className={css(oneRow.isOpen && styles.modifiers.expanded)} key={`tbody-${key}`}>
              {oneRow.rows}
            </tbody>
          ))}
        </Fragment>
      );
    }
    return <tbody {...props} />;
  }
}

BodyWrapper.propTypes = {
  rows: PropTypes.array,
  onCollapse: PropTypes.func
};

BodyWrapper.defaultProps = {
  rows: []
};

export default BodyWrapper;
