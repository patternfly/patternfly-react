import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Table/table.css';
import { css } from '@patternfly/react-styles';

const RowWrapper = ({ isOpen, isExpanded, ...props }) => (
  <tr
    {...props}
    className={css(isExpanded !== undefined && styles.tableExpandableRow, isExpanded && styles.modifiers.expanded)}
    hidden={isExpanded !== undefined && !isExpanded}
  />
);

RowWrapper.propTypes = {
  isOpen: PropTypes.bool,
  isExpanded: PropTypes.bool
};

RowWrapper.defaultProps = {
  isOpen: undefined,
  isExpanded: undefined
};

export default RowWrapper;
