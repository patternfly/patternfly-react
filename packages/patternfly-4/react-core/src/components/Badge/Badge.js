import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Badge/styles.css';

export const propTypes = {
  isRead: PropTypes.bool,
  children: PropTypes.node,
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
