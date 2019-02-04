import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/EmptyState/empty-state.css';

const EmptyStateBody = ({ children, className, ...props }) => (
  <p className={css(styles.emptyStateBody, className)} {...props}>
    {children}
  </p>
);

EmptyStateBody.propTypes = {
  /** Additional classes added to the EmptyState */
  className: PropTypes.string,
  /** Content rendered inside the EmptyState */
  children: PropTypes.node,
  /** Additional props are spread to the container <p> */
  '': PropTypes.any
};

EmptyStateBody.defaultProps = {
  className: ''
};

export default EmptyStateBody;
