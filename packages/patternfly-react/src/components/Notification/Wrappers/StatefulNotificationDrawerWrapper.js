import React from 'react';
import PropTypes from 'prop-types';
import { NotificationDrawerWrapper } from './index';

class StatefulNotificationDrawerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: props.panels,
      isExpanded: props.isExpanded,
      expandedPanel: props.expandedPanel
    };
  }

  onClickLink = url => {
    window.open(url.href);
  };

  onMarkPanelAsRead = panelkey => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === panelkey) {
        panel.notifications.map(notification => {
          notification.seen = true;
          return notification;
        });
      }
      return panel;
    });
    this.setState({ panels });
    this.updateUnreadCount();
  };

  onMarkPanelAsClear = key => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === key) panel.notifications = [];
      return panel;
    });
    this.setState({ panels });
    this.updateUnreadCount();
  };

  onNotificationAsRead = (panelkey, nkey) => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === panelkey) {
        panel.notifications.map(notification => {
          if (notification.id === nkey) notification.seen = true;
          return notification;
        });
      }
      return panel;
    });
    this.setState({ panels });
    this.updateUnreadCount();
  };

  onNotificationClick = () => {
    // On Click
  };

  onNotificationHide = (panelkey, nkey) => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === panelkey) {
        for (let i = 0; i < panel.notifications.length; i++) {
          if (nkey === panel.notifications[i].id) {
            panel.notifications.splice(i, 1);
          }
        }
      }
      return panel;
    });
    this.setState({ panels });
    this.updateUnreadCount();
  };

  togglePanel = key => {
    if (this.state.expandedPanel === key) this.setState({ expandedPanel: '-1' });
    else this.setState({ expandedPanel: key });
  };

  toggleDrawerExpand = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  updateUnreadCount = () => {
    let hasunread = false;
    for (let i = 0; i < this.state.panels.length; i++) {
      for (let j = 0; j < this.state.panels[i].notifications.length; j++) {
        if (this.state.panels[i].notifications[j].seen === false) {
          hasunread = true;
        }
      }
    }
    this.props.updateUnreadCount(hasunread);
  };

  render() {
    return (
      <NotificationDrawerWrapper
        panels={this.state.panels}
        togglePanel={this.togglePanel}
        toggleDrawerExpand={this.toggleDrawerExpand}
        isExpanded={this.state.isExpanded}
        isExpandable={this.props.isExpandable}
        expandedPanel={this.state.expandedPanel}
        toggleDrawerHide={this.props.toggleDrawer}
        onNotificationClick={this.onNotificationClick}
        onNotificationAsRead={this.onNotificationAsRead}
        onNotificationHide={this.onNotificationHide}
        onMarkPanelAsClear={this.onMarkPanelAsClear}
        onMarkPanelAsRead={this.onMarkPanelAsRead}
        onClickedLink={this.onClickLink}
      />
    );
  }
}

StatefulNotificationDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: PropTypes.array,
  /** is Expanded Bool */
  isExpanded: PropTypes.bool,
  /** updateUnreadCount Func */
  updateUnreadCount: PropTypes.func,
  /** toggleDrawer Func */
  toggleDrawer: PropTypes.func,
  /** is Drawer Expandable prop */
  isExpandable: PropTypes.bool,
  /** expanded Panel */
  expandedPanel: PropTypes.string
};
StatefulNotificationDrawerWrapper.defaultProps = {
  panels: null,
  isExpanded: false,
  updateUnreadCount: null,
  toggleDrawer: null,
  isExpandable: true,
  expandedPanel: null
};

export default StatefulNotificationDrawerWrapper;
