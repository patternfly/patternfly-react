import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/EmptyState/empty-state.css';

const EmptyStateAction = ({ children, className, ...props }) => (
  <div className={css(styles.emptyStateAction, className)} {...props}>
    {children}
  </div>
);

EmptyStateAction.propTypes = {
  /** Additional classes added to the EmptyState */
  className: PropTypes.string,
  /** Content rendered inside the EmptyState */
  children: PropTypes.node
};

EmptyStateAction.defaultProps = {
  className: ''
};

export default EmptyStateAction;
