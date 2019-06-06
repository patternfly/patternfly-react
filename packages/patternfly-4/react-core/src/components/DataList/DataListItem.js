import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

const DataListItem = ({ children, className, isExpanded, 'aria-labelledby': ariaLabelledBy, ...props }) => (
  <li
    className={css(styles.dataListItem, isExpanded && styles.modifiers.expanded, className)}
    aria-labelledby={ariaLabelledBy}
    {...props}
  >
    {React.Children.map(
      children,
      child =>
        React.isValidElement(child) &&
        React.cloneElement(child, {
          rowid: ariaLabelledBy
        })
    )}
  </li>
);

DataListItem.propTypes = {
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: PropTypes.bool,
  /** Content rendered inside the DataList item */
  children: PropTypes.node.isRequired,
  /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
  className: PropTypes.string,
  /** Adds accessible text to the DataList item */
  'aria-labelledby': PropTypes.string.isRequired,
  /** Additional props are spread to the container <li> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

DataListItem.defaultProps = {
  isExpanded: false,
  className: ''
};

export default DataListItem;
