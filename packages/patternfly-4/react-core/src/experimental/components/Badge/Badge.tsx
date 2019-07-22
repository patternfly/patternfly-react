import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Badge/badge';
import { BadgeProps as StandardBadgeProps } from '../../../components/Badge';

export interface BadgeProps extends StandardBadgeProps {
  /**  Adds styling to the badge to indicate it has been read */
  testThing?: boolean;
}

export const Badge: React.FunctionComponent<BadgeProps> = ({ 
  isRead = false, 
  className = '', 
  children = '', 
  ...props }: BadgeProps) => (
  <span {...props} className={css(styles.badge, (isRead ? styles.modifiers.read : styles.modifiers.unread) as any, className)}>
    Im experimental!
    {children}
  </span>
);
