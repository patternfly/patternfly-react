import React, { useEffect } from 'react';
import {
  Dropdown,
  DropdownItem,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  KebabToggle,
  NotificationBadge,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Title,
  DropdownPosition,
  EmptyStateVariant,
  NumberInput,
  Alert,
  AlertProps,
  AlertGroup,
  AlertActionCloseButton
} from '@patternfly/react-core';

import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import DashboardWrapper from '../examples/DashboardWrapper';
import DashboardHeader from '../examples/DashboardHeader';

interface NotificationProps {
  title: string;
  srTitle: string;
  variant: 'default' | 'success' | 'danger' | 'warning' | 'info';
  key: React.Key;
  timestamp: string;
  description: string;
  isNotificationRead: boolean;
}

const AlertGroupDemo: React.FunctionComponent = () => {
  const maxDisplayedAlerts = 3;
  const minAlerts = 0;
  const maxAlerts = 100;
  const alertTimeout = 7000;

  const [isDrawerExpanded, setDrawerExpanded] = React.useState(false);
  const [openDropdownKey, setOpenDropdownKey] = React.useState<React.Key | null>(null);
  const [overflowMessage, setOverflowMessage] = React.useState<string>('');
  const [maxDisplayed, setMaxDisplayed] = React.useState(maxDisplayedAlerts);
  const [alerts, setAlerts] = React.useState<React.ReactElement<AlertProps>[]>([]);
  const [notifications, setNotifications] = React.useState<NotificationProps[]>([]);

  useEffect(() => {
    setOverflowMessage(buildOverflowMessage());
  }, [maxDisplayed, notifications, alerts]);

  const addNotification = (
    title: string,
    srTitle: string,
    variant: NotificationProps['variant'],
    key: React.Key,
    timestamp: string,
    description: string
  ) => {
    setNotifications([
      { title, srTitle, variant, key, timestamp, description, isNotificationRead: false },
      ...notifications
    ]);

    if (!isDrawerExpanded) {
      setAlerts([
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
          uniqueId={key.toString()}
        >
          <p>{description}</p>
        </Alert>,
        ...alerts
      ]);
    }
  };

  const removeNotification = (key: React.Key) => {
    setNotifications(prevNotifications => prevNotifications.filter(notification => notification.key !== key));
  };

  const removeAllNotifications = () => {
    setNotifications([]);
  };

  const removeAlert = (key: React.Key) => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.props.uniqueId !== key.toString()));
  };

  const removeAllAlerts = () => {
    setAlerts([]);
  };

  const onNotificationBadgeClick = () => {
    removeAllAlerts();
    setDrawerExpanded(!isDrawerExpanded);
  };

  const onDropdownToggle = (id: React.Key, isActive: boolean) => {
    if (!isActive) {
      setOpenDropdownKey(null);
      return;
    }
    setOpenDropdownKey(id);
  };

  const onDropdownSelect = () => {
    setOpenDropdownKey(null);
  };

  const isNotificationRead = (key: React.Key) =>
    notifications.length === 0 ||
    notifications.find(notification => notification.key === key)?.isNotificationRead === true;

  const markNotificationAsRead = (key: React.Key) => {
    setNotifications([
      ...notifications.map(notification =>
        notification.key === key ? { ...notification, isNotificationRead: true } : notification
      )
    ]);
  };

  const getUnreadNotificationsNumber = () =>
    notifications.filter(notification => notification.isNotificationRead === false).length;

  const markAllNotificationsRead = () => {
    setNotifications([...notifications.map(notification => ({ ...notification, isNotificationRead: true }))]);
  };

  const buildOverflowMessage = () => {
    const overflow = alerts.length - maxDisplayed;
    if (overflow > 0 && maxDisplayed > 0) {
      return `View ${overflow} more notifications in notification drawer`;
    }
    return '';
  };

  const getUniqueId = () => new Date().getTime();

  const getTimeCreated = () => {
    const date = new Date();
    return (
      date.toDateString() +
      ' at ' +
      ('00' + date.getHours().toString()).slice(-2) +
      ':' +
      ('00' + date.getMinutes().toString()).slice(-2)
    );
  };

  const addSuccessAlert = () => {
    addNotification(
      'Success alert notification',
      'Success alert',
      'success',
      getUniqueId(),
      getTimeCreated(),
      'Success alert notification description'
    );
  };

  const addDangerAlert = () => {
    addNotification(
      'Danger alert notification',
      'Danger alert',
      'danger',
      getUniqueId(),
      getTimeCreated(),
      'Danger alert notification description'
    );
  };

  const addInfoAlert = () => {
    addNotification(
      'Info alert notification',
      'Info alert',
      'info',
      getUniqueId(),
      getTimeCreated(),
      'Info alert notification description'
    );
  };

  const addWarningAlert = () => {
    addNotification(
      'Warning alert notification',
      'Warning alert',
      'warning',
      getUniqueId(),
      getTimeCreated(),
      'Warning alert notification description'
    );
  };

  const addDefaultAlert = () => {
    addNotification(
      'Default alert notification',
      'Default alert',
      'default',
      getUniqueId(),
      getTimeCreated(),
      'Default alert notification description'
    );
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

  const alertButtonClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');

  const alertButtonStyle = { marginRight: '8px' };

  const notificationBadge = (
    <NotificationBadge
      variant={getUnreadNotificationsNumber() === 0 ? 'read' : 'unread'}
      onClick={onNotificationBadgeClick}
      aria-label="Notifications"
    >
      <BellIcon />
    </NotificationBadge>
  );

  const notificationDrawerActions = [
    <DropdownItem key="markAllRead" onClick={markAllNotificationsRead} component="button">
      Mark all read
    </DropdownItem>,
    <DropdownItem key="clearAll" onClick={removeAllNotifications} component="button">
      Clear all
    </DropdownItem>,
    <DropdownItem key="close" component="button" onClick={() => setDrawerExpanded(false)}>
      Close
    </DropdownItem>
  ];

  const notificationDrawerDropdownItems = (key: React.Key) => [
    <DropdownItem key="markRead" component="button" onClick={() => markNotificationAsRead(key)}>
      Mark as read
    </DropdownItem>,
    <DropdownItem key="action" component="button" onClick={() => removeNotification(key)}>
      Clear
    </DropdownItem>
  ];

  const notificationDrawer = (
    <NotificationDrawer>
      <NotificationDrawerHeader count={getUnreadNotificationsNumber()}>
        <Dropdown
          onSelect={onDropdownSelect}
          toggle={<KebabToggle onToggle={isActive => onDropdownToggle('toggle-id-0', isActive)} id="toggle-id-0" />}
          isOpen={openDropdownKey === 'toggle-id-0'}
          isPlain
          dropdownItems={notificationDrawerActions}
          id="notification-drawer-0"
          position={DropdownPosition.right}
        />
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        {notifications.length !== 0 && (
          <NotificationDrawerList>
            {notifications.map(({ key, variant, title, srTitle, description, timestamp }) => (
              <NotificationDrawerListItem key={key} variant={variant} isRead={isNotificationRead(key)}>
                <NotificationDrawerListItemHeader variant={variant} title={title} srTitle={srTitle}>
                  <Dropdown
                    position={DropdownPosition.right}
                    onSelect={onDropdownSelect}
                    toggle={<KebabToggle onToggle={isActive => onDropdownToggle(key, isActive)} id={key.toString()} />}
                    isOpen={openDropdownKey === key}
                    isPlain
                    dropdownItems={notificationDrawerDropdownItems(key)}
                    id={key.toString()}
                  />
                </NotificationDrawerListItemHeader>
                <NotificationDrawerListItemBody timestamp={timestamp}> {description} </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
            ))}
          </NotificationDrawerList>
        )}
        {notifications.length === 0 && (
          <EmptyState variant={EmptyStateVariant.full}>
            <EmptyStateIcon icon={SearchIcon} />
            <Title headingLevel="h2" size="lg">
              No notifications found
            </Title>
            <EmptyStateBody>There are currently no notifications.</EmptyStateBody>
          </EmptyState>
        )}
      </NotificationDrawerBody>
    </NotificationDrawer>
  );

  return (
    <DashboardWrapper
      header={<DashboardHeader notificationBadge={notificationBadge} />}
      mainContainerId="main-content-page-layout-default-nav"
      notificationDrawer={notificationDrawer}
      isNotificationDrawerExpanded={isDrawerExpanded}
    >
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Alert Group with Notification Drawer demo</Text>
          <Text component="p">
            New alerts can be added with buttons below. By default, only 3 alerts are displayed. <br />
            The rest can be accessed in the Notification Drawer after clicking on the bell icon in the header
            <br /> or by clicking on the overflow message.
          </Text>
        </TextContent>
      </PageSection>

      <PageSection variant={PageSectionVariants.light}>
        <button onClick={addSuccessAlert} type="button" className={alertButtonClasses} style={alertButtonStyle}>
          Add toast success alert
        </button>
        <button onClick={addDangerAlert} type="button" className={alertButtonClasses} style={alertButtonStyle}>
          Add toast danger alert
        </button>
        <button onClick={addInfoAlert} type="button" className={alertButtonClasses} style={alertButtonStyle}>
          Add toast info alert
        </button>
        <br />
        <br />
        <button onClick={addWarningAlert} type="button" className={alertButtonClasses} style={alertButtonStyle}>
          Add toast warning alert
        </button>
        <button onClick={addDefaultAlert} type="button" className={alertButtonClasses} style={alertButtonStyle}>
          Add toast default alert
        </button>
      </PageSection>

      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <br />
          <Text component="h3">Max displayed alerts</Text>
          <Text component="p">The maximal number of displayed alerts can be set below.</Text>
        </TextContent>
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

      <PageSection variant={PageSectionVariants.light}>
        <AlertGroup isToast isLiveRegion onOverflowClick={onAlertGroupOverflowClick} overflowMessage={overflowMessage}>
          {alerts.slice(0, maxDisplayed)}
        </AlertGroup>
      </PageSection>
    </DashboardWrapper>
  );
};

AlertGroupDemo.displayName = 'AlertGroupDemo';

export default AlertGroupDemo;
