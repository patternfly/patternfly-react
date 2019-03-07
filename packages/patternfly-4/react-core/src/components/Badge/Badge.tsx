import React, { HTMLProps, ReactNode } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Badge/badge.css';

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  /**  Adds styling to the badge to indicate it has been read */
  isRead?: boolean;
  /** content rendered inside the Badge */
  children?: ReactNode;
  /** additional classes added to the Badge */
  className?: string;
}

export const defaultBadgeProps = {
  isRead: false,
  children: '',
  className: ''
};

export const Badge: React.FunctionComponent<BadgeProps> = ({ isRead, className, children, ...props }: BadgeProps) => (
  <span {...props} className={css(styles.badge, (isRead ? styles.modifiers.read : styles.modifiers.unread) as any, className)}>
    {children}
  </span>
);

Badge.defaultProps = defaultBadgeProps;
