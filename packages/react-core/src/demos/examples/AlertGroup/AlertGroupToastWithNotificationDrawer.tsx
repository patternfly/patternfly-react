import React, { useEffect } from 'react';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  NotificationBadge,
  NotificationBadgeVariant,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  PageSection,
  Content,
  EmptyStateVariant,
  NumberInput,
  Alert,
  AlertProps,
  AlertGroup,
  AlertActionCloseButton,
  ToolbarItem,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { DashboardHeader } from '@patternfly/react-core/dist/js/demos/DashboardHeader';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

interface NotificationProps {
  title: string;
  srTitle: string;
  variant: 'custom' | 'success' | 'danger' | 'warning' | 'info';
  key: React.Key;
  timestamp: string;
  description: string;
  isNotificationRead: boolean;
}

export const AlertGroupToastWithNotificationDrawer: React.FunctionComponent = () => {
  const maxDisplayedAlerts = 3;
  const minAlerts = 0;
  const maxAlerts = 100;
  const alertTimeout = 8000;

  const [isDrawerExpanded, setDrawerExpanded] = React.useState(false);
  const [openDropdownKey, setOpenDropdownKey] = React.useState<React.Key | null>(null);
  const [overflowMessage, setOverflowMessage] = React.useState<string>('');
  const [maxDisplayed, setMaxDisplayed] = React.useState(maxDisplayedAlerts);
  const [alerts, setAlerts] = React.useState<React.ReactElement<AlertProps>[]>([]);
  const [notifications, setNotifications] = React.useState<NotificationProps[]>([]);

  useEffect(() => {
    setOverflowMessage(buildOverflowMessage());
  }, [maxDisplayed, notifications, alerts]);

  const addNewNotification = (variant: NotificationProps['variant']) => {
    const variantFormatted = variant.charAt(0).toUpperCase() + variant.slice(1);
    const title = variantFormatted + ' alert notification';
    const srTitle = variantFormatted + ' alert';
    const description = variantFormatted + ' alert notification description';
    const key = getUniqueId();
    const timestamp = getTimeCreated();

    setNotifications((prevNotifications) => [
      { title, srTitle, variant, key, timestamp, description, isNotificationRead: false },
      ...prevNotifications
    ]);

    if (!isDrawerExpanded) {
      setAlerts((prevAlerts) => [
        <Alert
          variant={variant}
          title={title}
          timeout={alertTimeout}
          onTimeout={() => removeAlert(key)}
          isLiveRegion
          actionClose={
            <AlertActionCloseButton title={title} variantLabel={`${variant} alert`} onClose={() => removeAlert(key)} />
          }
          key={key}
          id={key.toString()}
        >
          <p>{description}</p>
        </Alert>,
        ...prevAlerts
      ]);
    }
  };

  const removeNotification = (key: React.Key) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.key !== key));
  };

  const removeAllNotifications = () => {
    setNotifications([]);
  };

  const isNotificationRead = (key: React.Key) =>
    notifications.find((notification) => notification.key === key)?.isNotificationRead;

  const markNotificationRead = (key: React.Key) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.key === key ? { ...notification, isNotificationRead: true } : notification
      )
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, isNotificationRead: true }))
    );
  };

  const getUnreadNotificationsNumber = () =>
    notifications.filter((notification) => notification.isNotificationRead === false).length;

  const containsUnreadAlertNotification = () =>
    notifications.filter(
      (notification) => notification.isNotificationRead === false && notification.variant === 'danger'
    ).length > 0;

  const getNotificationBadgeVariant = () => {
    if (getUnreadNotificationsNumber() === 0) {
      return NotificationBadgeVariant.read;
    }
    if (containsUnreadAlertNotification()) {
      return NotificationBadgeVariant.attention;
    }
    return NotificationBadgeVariant.unread;
  };

  const onNotificationBadgeClick = () => {
    removeAllAlerts();
    setDrawerExpanded(!isDrawerExpanded);
  };

  const onDropdownToggle = (id: React.Key) => {
    if (id && openDropdownKey !== id) {
      setOpenDropdownKey(id);
      return;
    }
    setOpenDropdownKey(null);
  };

  const onDropdownSelect = () => {
    setOpenDropdownKey(null);
  };

  const buildOverflowMessage = () => {
    const overflow = alerts.length - maxDisplayed;
    if (overflow > 0 && maxDisplayed > 0) {
      return `View ${overflow} more notification(s) in notification drawer`;
    }
    return '';
  };

  const getUniqueId = () => new Date().getTime();

  const getTimeCreated = () => {
    const dateCreated = new Date();
    return (
      dateCreated.toDateString() +
      ' at ' +
      ('00' + dateCreated.getHours().toString()).slice(-2) +
      ':' +
      ('00' + dateCreated.getMinutes().toString()).slice(-2)
    );
  };

  const removeAlert = (key: React.Key) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.props.id !== key.toString()));
  };

  const removeAllAlerts = () => {
    setAlerts([]);
  };

  const onAlertGroupOverflowClick = () => {
    removeAllAlerts();
    setDrawerExpanded(true);
  };

  const onMaxDisplayedAlertsMinus = () => {
    setMaxDisplayed(normalizeAlertsNumber(maxDisplayed - 1));
  };

  const onMaxDisplayedAlertsChange = (event: any) => {
    setMaxDisplayed(normalizeAlertsNumber(Number(event.target.value)));
  };

  const onMaxDisplayedAlertsPlus = () => {
    setMaxDisplayed(normalizeAlertsNumber(maxDisplayed + 1));
  };

  const normalizeAlertsNumber = (value: number) => Math.max(Math.min(value, maxAlerts), minAlerts);

  const alertButtonStyle = { marginRight: '8px', marginTop: '8px' };

  const notificationBadge = (
    <ToolbarItem>
      <NotificationBadge
        variant={getNotificationBadgeVariant()}
        onClick={onNotificationBadgeClick}
        aria-label="Notifications"
      ></NotificationBadge>
    </ToolbarItem>
  );

  const notificationDrawerActions = (
    <>
      <DropdownItem key="markAllRead" onClick={markAllNotificationsRead}>
        Mark all read
      </DropdownItem>
      <DropdownItem key="clearAll" onClick={removeAllNotifications}>
        Clear all
      </DropdownItem>
    </>
  );
  const notificationDrawerDropdownItems = (key: React.Key) => [
    <DropdownItem key={`markRead-${key}`} onClick={() => markNotificationRead(key)}>
      Mark as read
    </DropdownItem>,
    <DropdownItem key={`clear-${key}`} onClick={() => removeNotification(key)}>
      Clear
    </DropdownItem>
  ];

  const notificationDrawer = (
    <NotificationDrawer>
      <NotificationDrawerHeader count={getUnreadNotificationsNumber()} onClose={(_event) => setDrawerExpanded(false)}>
        <Dropdown
          id="notification-drawer-0"
          isOpen={openDropdownKey === 'dropdown-toggle-id-0'}
          onSelect={onDropdownSelect}
          popperProps={{ position: 'right' }}
          onOpenChange={(isOpen: boolean) => !isOpen && setOpenDropdownKey(null)}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              isExpanded={openDropdownKey === 'dropdown-toggle-id-0'}
              variant="plain"
              onClick={() => onDropdownToggle('dropdown-toggle-id-0')}
              aria-label="Notification drawer actions"
              icon={<EllipsisVIcon aria-hidden="true" />}
            />
          )}
        >
          <DropdownList>{notificationDrawerActions}</DropdownList>
        </Dropdown>
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        {notifications.length !== 0 && (
          <NotificationDrawerList>
            {notifications.map(({ key, variant, title, srTitle, description, timestamp }, index) => (
              <NotificationDrawerListItem
                key={key}
                variant={variant}
                isRead={isNotificationRead(key)}
                onClick={() => markNotificationRead(key)}
              >
                <NotificationDrawerListItemHeader variant={variant} title={title} srTitle={srTitle}>
                  <Dropdown
                    id={key.toString()}
                    isOpen={openDropdownKey === key}
                    onSelect={onDropdownSelect}
                    popperProps={{ position: 'right' }}
                    onOpenChange={(isOpen: boolean) => !isOpen && setOpenDropdownKey(null)}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        isExpanded={openDropdownKey === key}
                        variant="plain"
                        onClick={() => onDropdownToggle(key)}
                        aria-label={`Notification ${index + 1} actions`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
                      />
                    )}
                  >
                    <DropdownList>{notificationDrawerDropdownItems(key)}</DropdownList>
                  </Dropdown>
                </NotificationDrawerListItemHeader>
                <NotificationDrawerListItemBody timestamp={timestamp}> {description} </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
            ))}
          </NotificationDrawerList>
        )}
        {notifications.length === 0 && (
          <EmptyState
            headingLevel="h2"
            titleText="No notifications found"
            icon={SearchIcon}
            variant={EmptyStateVariant.full}
          >
            <EmptyStateBody>There are currently no notifications.</EmptyStateBody>
          </EmptyState>
        )}
      </NotificationDrawerBody>
    </NotificationDrawer>
  );

  return (
    <DashboardWrapper
      masthead={<DashboardHeader notificationBadge={notificationBadge} />}
      mainContainerId="main-content-page-layout-default-nav"
      notificationDrawer={notificationDrawer}
      isNotificationDrawerExpanded={isDrawerExpanded}
    >
      <PageSection>
        <Content>
          <h1>Alert group with notification drawer demo</h1>
          <p>
            New alerts can be added with the following buttons. Each alert has a timeout of 7 seconds, however, even
            after the timeout expires, all alerts are still visible in the notification drawer. By default, only 3
            alerts are displayed. The rest can be accessed in the notification drawer after clicking on the bell icon in
            the header or by clicking on the overflow message.
          </p>
        </Content>
      </PageSection>

      <PageSection>
        <Button variant="secondary" onClick={() => addNewNotification('success')} style={alertButtonStyle}>
          Add toast success alert
        </Button>
        <Button variant="secondary" onClick={() => addNewNotification('danger')} style={alertButtonStyle}>
          Add toast danger alert
        </Button>
        <Button variant="secondary" onClick={() => addNewNotification('info')} style={alertButtonStyle}>
          Add toast info alert
        </Button>
        <br />
        <br />
        <Button variant="secondary" onClick={() => addNewNotification('warning')} style={alertButtonStyle}>
          Add toast warning alert
        </Button>
        <Button variant="secondary" onClick={() => addNewNotification('custom')} style={alertButtonStyle}>
          Add toast custom alert
        </Button>
      </PageSection>

      <PageSection>
        <Content>
          <br />
          <h2>Max displayed alerts</h2>
          <p>Adjust the maximum number of displayed alerts.</p>
        </Content>
        <NumberInput
          value={maxDisplayed}
          min={minAlerts}
          max={maxAlerts}
          onMinus={onMaxDisplayedAlertsMinus}
          onChange={onMaxDisplayedAlertsChange}
          onPlus={onMaxDisplayedAlertsPlus}
          inputName="input"
          inputAriaLabel="max diplayed alerts number input"
          minusBtnAriaLabel="minus"
          plusBtnAriaLabel="plus"
          style={{ margin: '12px 0' }}
        />
      </PageSection>
      <PageSection>
        <AlertGroup isToast isLiveRegion onOverflowClick={onAlertGroupOverflowClick} overflowMessage={overflowMessage}>
          {alerts.slice(0, maxDisplayed)}
        </AlertGroup>
      </PageSection>
    </DashboardWrapper>
  );
};
