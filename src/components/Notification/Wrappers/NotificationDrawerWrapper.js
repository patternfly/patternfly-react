import React from 'react';
import PropTypes from 'prop-types';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { NotificationDrawerPanelWrapper } from './index';
import { EmptyState, EmptyStateIcon, EmptyStateTitle } from '../../EmptyState';

const NotificationDrawerWrapper = ({
  panels,
  toggleDrawerHide,
  toggleDrawerExpand,
  isExpandable,
  isExpanded,
  expandedPanel,
  togglePanel,
  onNotificationClick,
  onNotificationHide,
  onMarkPanelAsRead,
  onMarkPanelAsClear,
  onClickedLink
}) => {
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
      onNotificationHide={onNotificationHide}
      onMarkPanelAsRead={onMarkPanelAsRead}
      onMarkPanelAsClear={onMarkPanelAsClear}
      showLoading={panel.showLoading}
    />
  ));
  const noNotificationsMessage = (
    <EmptyState>
      <EmptyStateIcon name="info" />
      <EmptyStateTitle>No Notifications Available</EmptyStateTitle>
    </EmptyState>
  );

  return (
    <NotificationDrawer expanded={isExpanded}>
      <NotificationDrawer.Title
        title="Notifications"
        onCloseClick={() => toggleDrawerHide()}
        expandable={isExpandable}
        onExpandClick={toggleDrawerExpand}
      />
      <NotificationDrawer.Accordion>
        {notificationPanels.length === 0
          ? noNotificationsMessage
          : notificationPanels}
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
  expandedPanel: PropTypes.string
};

NotificationDrawerWrapper.defaultProps = {
  panels: null,
  toggleDrawerHide: null,
  toggleDrawerExpand: null,
  togglePanel: null,
  isExpanded: false,
  onNotificationClick: null,
  onMarkPanelAsRead: null,
  onClickedLink: null,
  onNotificationHide: null,
  onMarkPanelAsClear: null,
  isExpandable: true,
  expandedPanel: null
};

export default NotificationDrawerWrapper;
