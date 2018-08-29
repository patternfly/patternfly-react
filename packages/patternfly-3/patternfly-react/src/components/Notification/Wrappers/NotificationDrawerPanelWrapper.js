import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';
import { Notification } from '../index';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { MenuItem } from '../../MenuItem';
import { noop } from '../../../common/helpers';
import getIconClass from './Icon.consts';

const NotificationDrawerPanelWrapper = ({
  panelkey,
  panelName,
  className,
  notifications,
  isExpanded,
  togglePanel,
  onNotificationClick,
  onNotificationAsRead,
  onNotificationHide,
  onMarkPanelAsRead,
  onClickedLink,
  onMarkPanelAsClear,
  showLoading,
  translations
}) => {
  const unreadCount = notifications.filter(notification => !notification.seen).length;

  const getUnread = () => {
    if (unreadCount !== 1) return `${unreadCount} ${translations.unreadEvents}`;
    return `1 ${translations.unreadEvent}`;
  };

  const notificationClickHandler = (panel, notification, seen) => {
    onNotificationClick(panel, notification);

    if (!seen) {
      onNotificationAsRead(panel, notification);
    }
  };

  const notificationsMap = notifications.map((notification, i) => (
    <Notification
      key={i}
      seen={notification.seen}
      onClick={() => notificationClickHandler(panelkey, notification.id, notification.seen)}
    >
      {notification.actions
        ? Object.keys(notification.actions).length > 0 && (
            <NotificationDrawer.Dropdown pullRight id={i}>
              {notification.actions.links.map((link, j) => (
                <MenuItem key={j} id={`notification-kebab-${j}`} onClick={() => onClickedLink(link)}>
                  {link.title}
                </MenuItem>
              ))}
              <MenuItem divider />
              <MenuItem id="notification-kebab-hide" onClick={() => onNotificationHide(panelkey, notification.id)}>
                {translations.deleteNotification}
              </MenuItem>
            </NotificationDrawer.Dropdown>
          )
        : null}
      <Icon className="pull-left" type="pf" name={getIconClass(notification.level)} />
      <Notification.Content>
        <Notification.Message>{notification.text}</Notification.Message>
        {notification.created_at && (
          <Notification.Info
            leftText={new Date(notification.created_at).toLocaleDateString()}
            rightText={new Date(notification.created_at).toLocaleTimeString()}
          />
        )}
      </Notification.Content>
    </Notification>
  ));

  const renderNotifications = (
    <NotificationDrawer.PanelBody key="containsNotifications">
      {showLoading ? [notificationsMap, <Notification key="loading" type="loading" />] : notificationsMap}
    </NotificationDrawer.PanelBody>
  );

  const renderClearReadButtons = (
    <NotificationDrawer.PanelAction key={panelkey}>
      {unreadCount > 0 && (
        <NotificationDrawer.PanelActionLink className="drawer-pf-action-link" data-toggle="mark-all-read">
          <Button bsStyle="link" onClick={() => onMarkPanelAsRead(panelkey)}>
            {translations.readAll}
          </Button>
        </NotificationDrawer.PanelActionLink>
      )}
      <NotificationDrawer.PanelActionLink data-toggle="clear-all">
        <Button bsStyle="link" onClick={() => onMarkPanelAsClear(panelkey)}>
          <Icon type="pf" name="close" />
          {translations.clearAll}
        </Button>
      </NotificationDrawer.PanelActionLink>
    </NotificationDrawer.PanelAction>
  );

  const noNotificationsMessage = <NotificationDrawer.EmptyState title={translations.emptyState} />;

  return (
    <NotificationDrawer.Panel className={className} expanded={isExpanded}>
      <NotificationDrawer.PanelHeading onClick={() => togglePanel(panelkey)}>
        <NotificationDrawer.PanelTitle>
          <a className={isExpanded ? '' : 'collapsed'}>{panelName}</a>
        </NotificationDrawer.PanelTitle>
        <NotificationDrawer.PanelCounter text={getUnread()} />
      </NotificationDrawer.PanelHeading>
      <Collapse in={isExpanded}>
        <NotificationDrawer.PanelCollapse id={panelkey}>
          {notifications.length > 0 ? [renderNotifications, renderClearReadButtons] : noNotificationsMessage}
        </NotificationDrawer.PanelCollapse>
      </Collapse>
    </NotificationDrawer.Panel>
  );
};

NotificationDrawerPanelWrapper.propTypes = {
  /** Panel Key,Name */
  panelkey: PropTypes.string,
  panelName: PropTypes.string,
  className: PropTypes.string,
  /** Notification Panels Array */
  notifications: PropTypes.array,
  /** is Expanded Bool */
  isExpanded: PropTypes.bool,
  /** function(panelkey, notificationkey) on Notification Click */
  onNotificationClick: PropTypes.func,
  /** function(panelkey, notificationkey) on Notification Mark as Read Click */
  onNotificationAsRead: PropTypes.func,
  /** on function(panelkey) Panel Read All Click */
  onMarkPanelAsRead: PropTypes.func,
  /** function(url) on Dropdown Link Click */
  onClickedLink: PropTypes.func,
  /** function(panelkey, notificationkey) on Notification Hide Click */
  onNotificationHide: PropTypes.func,

  /** function(panelkey) Panel Clear All Click */
  onMarkPanelAsClear: PropTypes.func,
  /** function() togglePanel Click */
  togglePanel: PropTypes.func,
  /** show Loading notification Bool */
  showLoading: PropTypes.bool,
  /** translations for Title, EmptyState, Read/Clear */
  translations: PropTypes.shape({
    title: PropTypes.string,
    unreadEvent: PropTypes.string,
    unreadEvents: PropTypes.string,
    emptyState: PropTypes.string,
    readAll: PropTypes.string,
    clearAll: PropTypes.string,
    deleteNotification: PropTypes.string
  })
};
NotificationDrawerPanelWrapper.defaultProps = {
  panelkey: '1',
  notifications: PropTypes.array,
  isExpanded: false,
  className: null,
  panelName: null,
  onNotificationClick: noop,
  onNotificationAsRead: noop,
  onMarkPanelAsRead: noop,
  onClickedLink: noop,
  onNotificationHide: noop,
  onMarkPanelAsClear: noop,
  togglePanel: noop,
  showLoading: false,
  translations: {
    title: 'Notifications',
    unreadEvent: 'Unread Event',
    unreadEvents: 'Unread Events',
    emptyState: 'No Notifications Available',
    readAll: 'Mark All Read',
    clearAll: 'Clear All',
    deleteNotification: 'Hide this notification'
  }
};

export default NotificationDrawerPanelWrapper;
