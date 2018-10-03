import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Badge/badge.css';

export const propTypes = {
  /**  Adds styling to the badge to indicate it has been read */
  isRead: PropTypes.bool,
  /** content rendered inside the Badge */
  children: PropTypes.node,
  /** additional classes added to the Badge */
  className: PropTypes.string
};

export const defaultProps = {
  isRead: false,
  children: '',
  className: ''
};

const Badge = ({ isRead, className, children, ...props }) => (
  <span {...props} className={css(styles.badge, isRead ? styles.modifiers.read : styles.modifiers.unread, className)}>
    {children}
  </span>
);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
export default Badge;
