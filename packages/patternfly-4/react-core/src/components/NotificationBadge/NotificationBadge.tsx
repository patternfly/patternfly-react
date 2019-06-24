import * as React from 'react';
import { Button,  ButtonVariant } from '../Button';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationBadge/notification-badge';

export interface NotificationBadgeProps extends React.HTMLProps<HTMLButtonElement> {
  /**  Adds styling to the badge to indicate it has been read */
  isRead?: boolean;
  /** content rendered inside the Badge */
  children?: React.ReactNode;
  /** additional classes added to the Badge */
  className?: string;
  /** Adds accessible text to the button. */
  'aria-label'?: string; 
}

export const NotificationBadge: React.FunctionComponent<NotificationBadgeProps> = ({ 
  isRead = false, 
  className = '', 
  children = '', 
  ...props }: NotificationBadgeProps) => {

     return (
    <Button variant={ButtonVariant.plain} className={ className }>
        <span className={css(styles.notificationBadge, (isRead ? styles.modifiers.read : styles.modifiers.unread))}>
            {children}
        </span>
    </Button>
)}
;