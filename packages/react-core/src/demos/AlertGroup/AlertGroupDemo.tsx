import React, { useEffect } from 'react';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownGroup,
  DropdownToggle,
  DropdownItem,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NotificationBadge,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Title,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  DropdownPosition,
  EmptyStateVariant,
  NumberInput,
  Alert,
  AlertGroup,
  AlertActionCloseButton
} from '@patternfly/react-core';

import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import imgBrand from '@patternfly/react-core/src/components/Brand/examples/pfLogo.svg';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';

interface NotificationProps {
  title: string;
  srTitle: string;
  variant: 'default' | 'success' | 'danger' | 'warning' | 'info';
  key: React.Key;
  timestamp: string;
  description: string;
  isAlertDisabled: boolean;
  isNotificationRead: boolean;
}

export const BasicNotificationDrawer: React.FunctionComponent = () => {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setKebabDropdownOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const [isDrawerExpanded, setDrawerExpanded] = React.useState(false);
  const [openDropdownKey, setOpenDropdownKey] = React.useState<React.Key | null>(null);
  const [overflowMessage, setOverflowMessage] = React.useState<string>('');
  const [maxDisplayed, setMaxDisplayed] = React.useState(3);
  const [notifications, setNotifications] = React.useState<NotificationProps[]>([]);

  const minAlerts = 0;
  const maxAlerts = 100;

  useEffect(() => {
    setOverflowMessage(getOverflowMessageCount());
  }, [maxDisplayed, notifications]);

  const addNotification = (
    title: string,
    srTitle: string,
    variant: NotificationProps['variant'],
    key: React.Key,
    timestamp: string,
    description: string,
    isAlertDisabled: boolean
  ) => {
    setNotifications([
      { title, srTitle, variant, key, timestamp, description, isAlertDisabled, isNotificationRead: false },
      ...notifications
    ]);
  };

  const removeNotification = (key: React.Key) => {
    setNotifications([...notifications.filter(alert => alert.key !== key)]);
  };

  const removeAllNotifications = () => {
    setNotifications([]);
  };

  const removeAlert = (key: React.Key) => {
    setNotifications([
      ...notifications.map(alert => (alert.key === key ? { ...alert, isAlertDisabled: true } : alert))
    ]);
  };

  const removeAllAlerts = () => {
    setNotifications([...notifications.map(alert => ({ ...alert, isAlertDisabled: true }))]);
  };

  const onPageNavSelect = (result: any) => {
    setActiveItem(result.itemId);
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
      ...notifications.map(alert => (alert.key === key ? { ...alert, isNotificationRead: true } : alert))
    ]);
  };

  const getUnreadNotificationsNumber = () =>
    notifications.filter(notification => notification.isNotificationRead === false).length;

  const markAllNotificationsRead = () => {
    setNotifications([...notifications.map(alert => ({ ...alert, isNotificationRead: true }))]);
  };

  const getOverflowMessageCount = () => {
    const numberOfAlerts = notifications.filter(notification => notification.isAlertDisabled === false).length;
    const overflow = numberOfAlerts - maxDisplayed;
    if (overflow > 0 && maxDisplayed > 0) {
      return `View ${overflow} more notifications in notification drawer`;
    }
    return '';
  };

  const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');

  const btnStyle = { marginRight: '8px' };

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
      'Success alert notification description',
      isDrawerExpanded
    );
  };

  const addDangerAlert = () => {
    addNotification(
      'Danger alert notification',
      'Danger alert',
      'danger',
      getUniqueId(),
      getTimeCreated(),
      'Danger alert notification description',
      isDrawerExpanded
    );
  };

  const addInfoAlert = () => {
    addNotification(
      'Info alert notification',
      'Info alert',
      'info',
      getUniqueId(),
      getTimeCreated(),
      'Info alert notification description',
      isDrawerExpanded
    );
  };

  const addWarningAlert = () => {
    addNotification(
      'Warning alert notification',
      'Warning alert',
      'warning',
      getUniqueId(),
      getTimeCreated(),
      'Warning alert notification description',
      isDrawerExpanded
    );
  };

  const addDefaultAlert = () => {
    addNotification(
      'Default alert notification',
      'Default alert',
      'default',
      getUniqueId(),
      getTimeCreated(),
      'Default alert notification description',
      isDrawerExpanded
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

  const pageNav = (
    <Nav onSelect={onPageNavSelect} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0}>
          System Panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1}>
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2}>
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3}>
          Network Services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4}>
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const kebabDropdownItems = [
    <DropdownGroup key="group 1">
      <DropdownItem key="group 1 settings">
        <CogIcon /> Settings
      </DropdownItem>
      ,
      <DropdownItem key="group 1 help">
        <HelpIcon /> Help
      </DropdownItem>
    </DropdownGroup>
  ];

  const userDropdownItems = [
    <DropdownGroup key="group 2">
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user" component="button">
        User management
      </DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </DropdownGroup>
  ];

  const headerTools = (
    <PageHeaderTools>
      <PageHeaderToolsItem visibility={{ default: 'visible' }} isSelected={isDrawerExpanded}>
        <NotificationBadge
          variant={getUnreadNotificationsNumber() === 0 ? 'read' : 'unread'}
          onClick={onNotificationBadgeClick}
          aria-label="Notifications"
        >
          <BellIcon />
        </NotificationBadge>
      </PageHeaderToolsItem>
      <PageHeaderToolsGroup
        visibility={{
          default: 'hidden',
          lg: 'visible'
        }} /** the settings and help icon buttons are only visible on desktop sizes and replaced by a kebab dropdown for other sizes */
      >
        <PageHeaderToolsItem>
          <Button aria-label="Settings actions" variant={ButtonVariant.plain}>
            <CogIcon />
          </Button>
        </PageHeaderToolsItem>
        <PageHeaderToolsItem>
          <Button aria-label="Help actions" variant={ButtonVariant.plain}>
            <HelpIcon />
          </Button>
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
      <PageHeaderToolsGroup>
        <PageHeaderToolsItem
          visibility={{
            lg: 'hidden'
          }} /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */
        >
          <Dropdown
            isPlain
            position="right"
            onSelect={() => setKebabDropdownOpen(!isKebabDropdownOpen)}
            toggle={<KebabToggle onToggle={value => setKebabDropdownOpen(value)} />}
            isOpen={isKebabDropdownOpen}
            dropdownItems={kebabDropdownItems}
          />
        </PageHeaderToolsItem>
        <PageHeaderToolsItem
          visibility={{ default: 'hidden', md: 'visible' }} /** this user dropdown is hidden on mobile sizes */
        >
          <Dropdown
            isPlain
            position="right"
            onSelect={() => setDropdownOpen(!isDropdownOpen)}
            isOpen={isDropdownOpen}
            toggle={<DropdownToggle onToggle={value => setDropdownOpen(value)}>John Smith</DropdownToggle>}
            dropdownItems={userDropdownItems}
          />
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
      <Avatar src={imgAvatar} alt="Avatar image" />
    </PageHeaderTools>
  );

  const header = (
    <PageHeader logo={<Brand src={imgBrand} alt="Patternfly Logo" />} headerTools={headerTools} showNavToggle />
  );

  const sidebar = <PageSidebar nav={pageNav} />;

  const pageId = 'main-content-page-layout-default-nav';

  const pageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

  const pageBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem>Section home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section landing
      </BreadcrumbItem>
    </Breadcrumb>
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
          id="notification-0"
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

  const toastAlerts = notifications
    .filter(notification => notification.isAlertDisabled === false)
    .slice(0, maxDisplayed)
    .map(({ key, variant, title, description }) => (
      <Alert
        variant={variant}
        title={title}
        actionClose={
          <AlertActionCloseButton title={title} variantLabel={`${variant} alert`} onClose={() => removeAlert(key)} />
        }
        key={key}
      >
        <p>{description}</p>
      </Alert>
    ));

  return (
    <React.Fragment>
      <Page
        header={header}
        sidebar={sidebar}
        isManagedSidebar
        notificationDrawer={notificationDrawer}
        isNotificationDrawerExpanded={isDrawerExpanded}
        skipToContent={pageSkipToContent}
        breadcrumb={pageBreadcrumb}
        mainContainerId={pageId}
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
          <button onClick={addSuccessAlert} type="button" className={btnClasses} style={btnStyle}>
            Add toast success alert
          </button>
          <button onClick={addDangerAlert} type="button" className={btnClasses} style={btnStyle}>
            Add toast danger alert
          </button>
          <button onClick={addInfoAlert} type="button" className={btnClasses} style={btnStyle}>
            Add toast info alert
          </button>
          <br />
          <br />
          <button onClick={addWarningAlert} type="button" className={btnClasses} style={btnStyle}>
            Add toast warning alert
          </button>
          <button onClick={addDefaultAlert} type="button" className={btnClasses} style={btnStyle}>
            Add toast default alert
          </button>
        </PageSection>

        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <br />
            <Text component="h3">Max displayed alerts</Text>
            <Text component="p">
              The maximal number of alerts to be displayed can be set with the Number Input component below.
            </Text>
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
          <AlertGroup
            isToast
            isLiveRegion
            onOverflowClick={onAlertGroupOverflowClick}
            overflowMessage={overflowMessage}
          >
            {toastAlerts}
          </AlertGroup>
        </PageSection>
      </Page>
    </React.Fragment>
  );
};
BasicNotificationDrawer.displayName = 'BasicNotificationDrawer';
