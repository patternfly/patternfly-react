import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
    const { paused } = this.state;
    return React.Children.map(this.props.children, child => {
      if (child && child.type === TimedToastNotification) {
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
    const classes = cx('toast-notifications-list-pf', className);

    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
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
  /** children nodes  */
  children: PropTypes.node
};

export default ToastNotificationList;
