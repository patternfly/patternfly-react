import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/EmptyState/empty-state.css';

const EmptyState = ({ children, className, ...props }) => (
  <div className={css(styles.emptyState, className)} {...props}>
    {children}
  </div>
);

EmptyState.propTypes = {
  /** Additional classes added to the EmptyState */
  className: PropTypes.string,
  /** Content rendered inside the EmptyState */
  children: PropTypes.node.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

EmptyState.defaultProps = {
  className: ''
};

export default EmptyState;
