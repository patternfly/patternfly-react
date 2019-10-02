import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../common/Timer';
import ToastNotification from './ToastNotification';
import { Alert } from '../Alert';

/**
 * TimedToastNotification Component for Patternfly React
 */
class TimedToastNotification extends React.Component {
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

  onMouseEnter = () => {
    const { onMouseEnter } = this.props;
    onMouseEnter && onMouseEnter();
  };

  onMouseLeave = () => {
    const { onMouseLeave } = this.props;
    onMouseLeave && onMouseLeave();
  };
  render() {
    const { children, className, type, onDismiss } = this.props;
    const { onMouseEnter, onMouseLeave } = this;

    const toastProps = {
      className,
      type,
      onDismiss,
      onMouseEnter,
      onMouseLeave
    };

    return <ToastNotification {...toastProps}>{children}</ToastNotification>;
  }
}

// WARNING: This should be kept consistent with ToastNotification.propTypes
TimedToastNotification.propTypes = {
  ...Alert.propTypes,
  /** pauses notification from dismissing */
  paused: PropTypes.bool,
  /** persistent keeps the notification up endlessly until closed */
  persistent: PropTypes.bool,
  /** timer delay until dismiss */
  timerdelay: PropTypes.number,
  /** onMouseEnter callback */
  onMouseEnter: PropTypes.func,
  /** onMouseLeave callback */
  onMouseLeave: PropTypes.func
};
// WARNING: This should be kept consistent with ToastNotification.defaultProps
TimedToastNotification.defaultProps = {
  ...Alert.defaultProps,
  paused: false,
  timerdelay: 8000
};

TimedToastNotification.TOAST_NOTIFICATION_TYPES = [...Alert.ALERT_TYPES];

TimedToastNotification.displayName = 'TimedToastNotification';

export default TimedToastNotification;
