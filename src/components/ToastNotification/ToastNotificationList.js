import React from 'react';
import PropTypes from 'prop-types';
import { bindMethods } from '../../common/helpers';
import TimedToastNotification from './TimedToastNotification';

/**
 * ToastNotificationList Component for Patternfly React
 */
class ToastNotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paused: false };
    bindMethods(this, ['onMouseEnter', 'onMouseLeave']);
  }
  onMouseEnter() {
    this.setState({ paused: true });
    const { onMouseEnter } = this.props;
    onMouseEnter && onMouseEnter();
  }

  onMouseLeave() {
    this.setState({ paused: false });
    const { onMouseLeave } = this.props;
    onMouseLeave && onMouseLeave();
  }

  renderChildren() {
    const paused = this.state.paused;
    return React.Children.map(this.props.children, child => {
      if (child && child.type === TimedToastNotification) {
        /**
         * If any of the notifications are hovered, pause
         * all child notifications from dismissing
         */
        return React.cloneElement(child, {
          paused: paused,
        });
      } else {
        return child;
      }
    });
  }
  render() {
    const { className } = this.props;
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={className}
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
  /** children nodes  */
  children: PropTypes.node,
};
ToastNotificationList.defaultProps = {
  className: 'toast-notifications-list-pf',
};

export default ToastNotificationList;
