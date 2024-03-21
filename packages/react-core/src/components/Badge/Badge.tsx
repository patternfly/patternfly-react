import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Badge/badge';

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  /** Text announced by screen readers to indicate the current content/status of the badge. */
  screenReaderText?: string;
  /**  Adds styling to the badge to indicate it has been read */
  isRead?: boolean;
  /** content rendered inside the Badge */
  children?: ReactNode;
  /** additional classes added to the Badge */
  className?: string;
}

export const Badge: FunctionComponent<BadgeProps> = ({
  isRead = false,
  className = '',
  children = '',
  screenReaderText,
  ...props
}: BadgeProps) => (
  <span
    {...props}
    className={css(styles.badge, (isRead ? styles.modifiers.read : styles.modifiers.unread) as any, className)}
  >
    {children}
    {screenReaderText && <span className="pf-v5-screen-reader">{screenReaderText}</span>}
  </span>
);
Badge.displayName = 'Badge';
