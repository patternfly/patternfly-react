import React from 'react';
import PropTypes from 'prop-types';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { StatefulNotificationDrawerWrapper } from './index';

class StatefulToggleNotificationDrawerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: props.panels,
      isDrawerOpen: props.isDrawerOpen,
      hasUnreadMessages: props.hasUnreadMessages
    };
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }));
  };

  updateUnreadCount = bool => {
    if (bool) this.setState({ hasUnreadMessages: true });
    else this.setState({ hasUnreadMessages: false });
  };

  render() {
    return (
      <ul className="nav navbar-nav navbar-right navbar-iconic">
        <NotificationDrawer.Toggle hasUnreadMessages={this.state.hasUnreadMessages} onClick={this.toggleDrawer} />
        {this.state.isDrawerOpen && (
          <StatefulNotificationDrawerWrapper
            panels={this.state.panels}
            maxPanelHeight={this.props.maxPanelHeight}
            isDrawerOpen
            isExpandable={this.props.isExpandable}
            hasUnreadMessages
            updateUnreadCount={this.updateUnreadCount}
            toggleDrawer={this.toggleDrawer}
          />
        )}
      </ul>
    );
  }
}

StatefulToggleNotificationDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: PropTypes.array,
  /** Is Drawer Open Bool */
  isDrawerOpen: PropTypes.bool,
  /** has Unread Messages Bool */
  hasUnreadMessages: PropTypes.bool,
  /** is Drawer Expandable */
  isExpandable: PropTypes.bool,
  /** Max Panel Height */
  maxPanelHeight: PropTypes.string
};
StatefulToggleNotificationDrawerWrapper.defaultProps = {
  panels: null,
  isDrawerOpen: false,
  hasUnreadMessages: false,
  isExpandable: true,
  maxPanelHeight: null
};

export default StatefulToggleNotificationDrawerWrapper;
