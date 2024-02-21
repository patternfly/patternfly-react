import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

export interface NotificationDrawerListItemProps extends React.HTMLProps<HTMLLIElement> {
  /**  Content rendered inside the list item */
  children?: React.ReactNode;
  /**  Additional classes added to the list item */
  className?: string;
  /**  Modifies the list item to include hover styles on :hover */
  isHoverable?: boolean;
  /**  Adds styling to the list item to indicate it has been read */
  isRead?: boolean;
  /**  Callback for when a list item is clicked */
  onClick?: (event: any) => void;
  /**  Visually hidden text that conveys the current read state of the notification list item */
  readStateScreenReaderText?: string;
  /**  Tab index for the list item */
  tabIndex?: number;
  /**  Variant indicates the severity level */
  variant?: 'custom' | 'success' | 'danger' | 'warning' | 'info';
}

export const NotificationDrawerListItem: React.FunctionComponent<NotificationDrawerListItemProps> = ({
  children = null,
  className = '',
  isHoverable = true,
  isRead = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick = (event: React.MouseEvent) => undefined as any,
  readStateScreenReaderText,
  tabIndex = 0,
  variant = 'custom',
  ...props
}: NotificationDrawerListItemProps) => {
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!(event.target as HTMLElement).parentElement.classList.contains(styles.notificationDrawerListItemAction)) {
      // Accessibility function. Click on the list item when pressing Enter or Space on it.
      if (event.key === 'Enter' || event.key === ' ') {
        (event.target as HTMLElement).click();
      }
    }
  };

  let readStateSRText;
  if (readStateScreenReaderText) {
    readStateSRText = readStateScreenReaderText;
  } else {
    readStateSRText = isRead ? 'read' : 'unread';
  }

  return (
    <li
      {...props}
      className={css(
        styles.notificationDrawerListItem,
        isHoverable && styles.modifiers.hoverable,
        styles.modifiers[variant],
        isRead && styles.modifiers.read,
        className
      )}
      tabIndex={tabIndex}
      onClick={(e) => onClick(e)}
      onKeyDown={onKeyDown}
    >
      <span className="pf-v6-screen-reader">{readStateSRText}</span>
      {children}
    </li>
  );
};
NotificationDrawerListItem.displayName = 'NotificationDrawerListItem';
