import React from 'react';
import PropTypes from 'prop-types';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { NotificationDrawerPanelWrapper } from './index';
import { noop } from '../../../common/helpers';

const NotificationDrawerWrapper = ({
  panels,
  translations,
  toggleDrawerHide,
  toggleDrawerExpand,
  isExpandable,
  isExpanded,
  expandedPanel,
  togglePanel,
  onNotificationClick,
  onNotificationAsRead,
  onNotificationHide,
  onMarkPanelAsRead,
  onMarkPanelAsClear,
  onClickedLink
}) => {
  const translationsWrapper = {
    ...NotificationDrawerPanelWrapper.defaultProps.translations,
    ...translations
  };

  const notificationPanels = panels.map((panel, i) => (
    <NotificationDrawerPanelWrapper
      key={i}
      panelName={panel.panelName}
      panelkey={panel.panelkey}
      onClickedLink={onClickedLink}
      notifications={panel.notifications}
      togglePanel={togglePanel}
      isExpanded={expandedPanel === panel.panelkey}
      onNotificationClick={onNotificationClick}
      onNotificationAsRead={onNotificationAsRead}
      onNotificationHide={onNotificationHide}
      onMarkPanelAsRead={onMarkPanelAsRead}
      onMarkPanelAsClear={onMarkPanelAsClear}
      showLoading={panel.showLoading}
      translations={translationsWrapper}
    />
  ));
  const noNotificationsMessage = <NotificationDrawer.EmptyState title={translations.emptyState} />;

  return (
    <NotificationDrawer expanded={isExpanded}>
      <NotificationDrawer.Title
        title={translations.title}
        onCloseClick={() => toggleDrawerHide()}
        expandable={isExpandable}
        onExpandClick={toggleDrawerExpand}
      />
      <NotificationDrawer.Accordion>
        {notificationPanels.length === 0 ? noNotificationsMessage : notificationPanels}
      </NotificationDrawer.Accordion>
    </NotificationDrawer>
  );
};

NotificationDrawerWrapper.propTypes = {
  /** toggleDrawer Hide/Expand func */
  toggleDrawerExpand: PropTypes.func,
  toggleDrawerHide: PropTypes.func,
  /** Notification Panels Array */
  panels: PropTypes.array,
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
  isExpandable: PropTypes.bool,
  /** expanded Panel */
  expandedPanel: PropTypes.string,
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

NotificationDrawerWrapper.defaultProps = {
  panels: null,
  toggleDrawerHide: noop,
  toggleDrawerExpand: noop,
  togglePanel: null,
  isExpanded: false,
  onNotificationClick: noop,
  onNotificationAsRead: noop,
  onMarkPanelAsRead: noop,
  onClickedLink: noop,
  onNotificationHide: noop,
  onMarkPanelAsClear: noop,
  isExpandable: true,
  expandedPanel: null,
  translations: {}
};

export default NotificationDrawerWrapper;
