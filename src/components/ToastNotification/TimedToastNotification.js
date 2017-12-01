import React from 'react';
import PropTypes from 'prop-types';
import { bindMethods } from '../../common/helpers';
import Timer from '../../common/Timer';
import ToastNotification from './ToastNotification';
import { TOAST_NOTIFICATION_TYPES } from './constants';

/**
 * TimedToastNotification Component for Patternfly React
 */
class TimedToastNotification extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this, ['onMouseEnter', 'onMouseLeave']);
  }

  componentDidMount() {
    const { paused, persistent, onDismiss, timerdelay } = this.props;

    if (!persistent) {
      this.timer = new Timer(onDismiss, timerdelay);
      this.timer.startTimer();
    }

    /** if we are paused on mount, then clear the timer
     * after having initialized with the correct delay */
    if (paused) {
      this.timer && this.timer.clearTimer();
    }
  }

  componentWillReceiveProps(nextProps) {
    /**
     * If paused prop changes, update our timer
     */
    if (nextProps.paused !== this.props.paused) {
      if (nextProps.paused) {
        this.timer && this.timer.clearTimer();
      } else {
        this.timer && this.timer.startTimer();
      }
    }
  }

  componentWillUnmount() {
    this.timer && this.timer.clearTimer();
  }

  onMouseEnter() {
    const { onMouseEnter } = this.props;
    onMouseEnter && onMouseEnter();
  }

  onMouseLeave() {
    const { onMouseLeave } = this.props;
    onMouseLeave && onMouseLeave();
  }
  render() {
    const { children } = this.props;
    return (
      <ToastNotification
        {...this.props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
      </ToastNotification>
    );
  }
}

TimedToastNotification.propTypes = {
  /** pauses notification from dismissing */
  paused: PropTypes.bool,
  /** persistent keeps the notification up endlessly until closed */
  persistent: PropTypes.bool,
  /** timer delay until dismiss */
  timerdelay: PropTypes.number,
  /** additional notification classes */
  className: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /** callback when alert is dismissed  */
  onDismiss: PropTypes.func,
  /** onMouseEnter callback */
  onMouseEnter: PropTypes.func,
  /** onMouseLeave callback */
  onMouseLeave: PropTypes.func,
  /** the type of alert  */
  type: PropTypes.oneOf(TOAST_NOTIFICATION_TYPES).isRequired, // eslint-disable-line react/no-unused-prop-types
  /** children nodes  */
  children: PropTypes.node,
};
TimedToastNotification.defaultProps = {
  paused: false,
  type: 'error',
  timerdelay: 8000,
};

TimedToastNotification.TOAST_NOTIFICATION_TYPES = TOAST_NOTIFICATION_TYPES;

export default TimedToastNotification;
