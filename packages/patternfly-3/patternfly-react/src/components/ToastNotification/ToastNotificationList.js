import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop, hasDisplayName } from '../../common/helpers';
import TimedToastNotification from './TimedToastNotification';

/**
 * ToastNotificationList Component for Patternfly React
 */
class ToastNotificationList extends React.Component {
  state = { paused: false };

  componentWillReceiveProps() {
    this.setState({ paused: false });
  }

  onMouseEnter = () => {
    this.setState({ paused: true });
    const { onMouseEnter } = this.props;
    onMouseEnter();
  };

  onMouseLeave = () => {
    this.setState({ paused: false });
    const { onMouseLeave } = this.props;
    onMouseLeave();
  };

  onMouseOver = () => {
    this.setState({ paused: true });
    const { onMouseOver } = this.props;
    onMouseOver();
  };

  renderChildren() {
    const { paused } = this.state;
    return React.Children.map(this.props.children, child => {
      if (hasDisplayName(child, TimedToastNotification.displayName)) {
        /**
         * If any of the notifications are hovered, pause
         * all child notifications from dismissing
         */
        return React.cloneElement(child, {
          paused
        });
      }
      return child;
    });
  }
  render() {
    const { className } = this.props;
    const classes = classNames('toast-notifications-list-pf', className);

    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
        onFocus={this.onMouseOver}
        className={classes}
      >
        {this.renderChildren()}
      </div>
    );
  }
}
ToastNotificationList.propTypes = {
  /** additional notification list classes */
  className: PropTypes.string,
  /** onMouseEnter callback */
  onMouseEnter: PropTypes.func,
  /** onMouseLeave callback */
  onMouseLeave: PropTypes.func,
  /** onMouseOver callback */
  onMouseOver: PropTypes.func,
  /** children nodes  */
  children: PropTypes.node
};
ToastNotificationList.defaultProps = {
  className: '',
  onMouseEnter: noop,
  onMouseLeave: noop,
  onMouseOver: noop,
  children: null
};
export default ToastNotificationList;
