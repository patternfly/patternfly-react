import { useRef, useState, FunctionComponent, RefObject } from 'react';
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
  MenuToggle,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader
} from '../..';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import { NotificationType } from './types';

interface ItemProps {
  notification: NotificationType;
  onRead: () => void;
}
const NotificationListItem: FunctionComponent<ItemProps> = ({ notification, onRead }) => {
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState<boolean>(false);

  return (
    <NotificationDrawerListItem
      key={notification.id}
      variant={notification.variant}
      onClick={onRead}
      isRead={notification.isRead}
    >
      <NotificationDrawerListItemHeader
        variant={notification.variant}
        title={notification.title}
        srTitle={notification.title}
      >
        <Dropdown
          onSelect={() => setIsActionsMenuOpen(false)}
          isOpen={isActionsMenuOpen}
          id={notification.id}
          onOpenChange={setIsActionsMenuOpen}
          popperProps={{ position: 'right' }}
          toggle={(toggleRef: RefObject<any>) => (
            <MenuToggle
              ref={toggleRef}
              id={`toggle-${notification.id}`}
              aria-label="Notification drawer actions"
              variant="plain"
              onClick={() => setIsActionsMenuOpen((prev) => !prev)}
              isExpanded={isActionsMenuOpen}
              icon={<EllipsisVIcon />}
            />
          )}
        >
          <DropdownList>
            <DropdownItem
              key="link"
              to="#"
              // Prevent default onClick behavior for demo purposes
              onClick={(ev: any) => ev.preventDefault()}
            >
              Link
            </DropdownItem>
            <DropdownItem key="action">Action</DropdownItem>
            <Divider component="li" key="separator" />
            <DropdownItem key="disabled link" isDisabled>
              Disabled Link
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </NotificationDrawerListItemHeader>
      <NotificationDrawerListItemBody timestamp="Just now">{notification.message}</NotificationDrawerListItemBody>
    </NotificationDrawerListItem>
  );
};

interface Props {
  notifications: NotificationType[];
  updateNotifications: (updatedNotifications: NotificationType[]) => void;
  onClose: () => void;
}

export const AnimationsNotificationsDrawer: FunctionComponent<Props> = ({
  notifications,
  updateNotifications,
  onClose
}) => {
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLElement | null>(null);

  const unreadNotificationCount = notifications.filter((n) => !n.isRead).length;

  const markAllRead = () => {
    updateNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  return (
    <NotificationDrawer ref={drawerRef}>
      <NotificationDrawerHeader count={unreadNotificationCount} onClose={onClose}>
        <Dropdown
          onSelect={() => setIsActionsMenuOpen(false)}
          isOpen={isActionsMenuOpen}
          id="notification-0"
          onOpenChange={(isOpen: boolean) => !isOpen && setIsActionsMenuOpen(false)}
          popperProps={{ position: 'right' }}
          toggle={(toggleRef: RefObject<any>) => (
            <MenuToggle
              ref={toggleRef}
              id="toggle-id-0"
              aria-label="Notification drawer actions"
              variant="plain"
              onClick={() => setIsActionsMenuOpen((prev) => !prev)}
              isExpanded={isActionsMenuOpen}
              icon={<EllipsisVIcon />}
            />
          )}
        >
          <DropdownList>
            <DropdownItem key="markAllRead" onClick={markAllRead}>
              Mark all read
            </DropdownItem>
            <DropdownItem key="clearAll" onClick={() => updateNotifications([])}>
              Clear all
            </DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
          </DropdownList>
        </Dropdown>
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        {notifications.length && (
          <NotificationDrawerList>
            {notifications.map((notification) => (
              <NotificationListItem
                key={notification.id}
                notification={notification}
                onRead={() => {
                  updateNotifications(
                    notifications.reduce((acc, next) => {
                      if (next.id === notification.id) {
                        acc.push({ ...next, isRead: true });
                      } else {
                        acc.push(next);
                      }
                      return acc;
                    }, [])
                  );
                }}
              />
            ))}
          </NotificationDrawerList>
        )}
        {!notifications.length && (
          <EmptyState headingLevel="h2" titleText="No alerts found" icon={SearchIcon} variant={EmptyStateVariant.full}>
            <EmptyStateBody>
              There are currently no alerts. There may be silenced critical alerts however.
            </EmptyStateBody>
            <EmptyStateFooter>
              <EmptyStateActions>
                <Button variant="link">Action</Button>
              </EmptyStateActions>
            </EmptyStateFooter>
          </EmptyState>
        )}
      </NotificationDrawerBody>
    </NotificationDrawer>
  );
};
