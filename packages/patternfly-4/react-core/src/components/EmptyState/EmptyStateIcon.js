import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/EmptyState/empty-state.css';

const EmptyStateIcon = ({ icon: IconComponent, className, ...props }) => (
  <IconComponent className={css(styles.emptyStateIcon, className)} {...props} aria-hidden="true" />
);

EmptyStateIcon.propTypes = {
  /** Additional classes added to the EmptyState */
  className: PropTypes.string,
  /** Icon component to be rendered inside the EmptyState */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  /** Additional props are spread to the Icon */
  '': PropTypes.any
};

EmptyStateIcon.defaultProps = {
  className: ''
};

export default EmptyStateIcon;
