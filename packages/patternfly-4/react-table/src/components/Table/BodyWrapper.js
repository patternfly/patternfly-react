import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Table/table.css';
import { css } from '@patternfly/react-styles';
import { mapOpenedRows } from './utils/headerUtils';

const BodyWrapper = ({ children, mappedRows, ...props }) => {
  if (mappedRows.some(row => row.hasOwnProperty('parent'))) {
    return (
      <React.Fragment>
        {mapOpenedRows(mappedRows, children).map((oneRow, key) => (
          <tbody {...props} className={css(oneRow.isOpen && styles.modifiers.expanded)} key={`tbody-${key}`}>
            {oneRow.rows}
          </tbody>
        ))}
      </React.Fragment>
    );
  }
  return <tbody {...props}>{children}</tbody>;
};

BodyWrapper.propTypes = {
  children: PropTypes.node,
  mappedRows: PropTypes.array
};

BodyWrapper.defaultProps = {
  children: null,
  mappedRows: undefined
};

export default BodyWrapper;
