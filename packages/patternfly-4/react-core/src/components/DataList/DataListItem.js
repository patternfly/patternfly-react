import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/DataList/data-list.css';

const DataListItem = ({ children, className, isExpanded, 'aria-labelledby': ariaLabelledBy, ...props }) => (
  <li
    className={css(styles.dataListItem, isExpanded && styles.modifiers.expanded, className)}
    aria-labelledby={ariaLabelledBy}
    {...props}
  >
    {children}
  </li>
);

DataListItem.propTypes = {
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: PropTypes.bool,
  /** Content rendered inside the DataList item */
  children: PropTypes.node,
  /** Additional classes added to the DataList item */
  className: PropTypes.string,
  /** Adds accessible text to the DataList item */
  'aria-labelledby': PropTypes.string.isRequired,
  /** Additional props are spread to the container <li> */
  '': PropTypes.any
};

DataListItem.defaultProps = {
  isExpanded: false,
  children: null,
  className: ''
};

export default DataListItem;
