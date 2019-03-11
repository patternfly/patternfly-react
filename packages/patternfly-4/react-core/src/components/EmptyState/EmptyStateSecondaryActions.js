import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/EmptyState/empty-state.css';

const EmptyStateSecondaryActions = ({ children, className, ...props }) => (
  <div className={css(styles.emptyStateSecondary, className)} {...props}>
    {children}
  </div>
);

EmptyStateSecondaryActions.propTypes = {
  /** Additional classes added to the EmptyState */
  className: PropTypes.string,
  /** Content rendered inside the EmptyState */
  children: PropTypes.node,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

EmptyStateSecondaryActions.defaultProps = {
  className: '',
  children: null
};

export default EmptyStateSecondaryActions;
