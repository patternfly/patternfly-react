import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Badge/badge.css';

const defaultProps = {
  isRead: false,
  children: '',
  className: ''
};

export interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  /**  Adds styling to the badge to indicate it has been read */
  isRead: boolean;
  /** content rendered inside the Badge */
  children: ReactNode;
  /** additional classes added to the Badge */
  className?: string;
}

const Badge: React.FunctionComponent<BadgeProps> = ({ isRead, className, children, ...props }: BadgeProps) => (
  <span {...props} className={css(styles.badge, (isRead ? styles.modifiers.read : styles.modifiers.unread) as any, className)}>
    {children}
  </span>
);

Badge.defaultProps = defaultProps;
export default Badge;
