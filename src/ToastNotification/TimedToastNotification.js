import React from 'react'
import PropTypes from 'prop-types'
import helpers from '../common/helpers'
import Timer from '../common/Timer'
import { TOAST_NOTIFICATION_TYPES } from '../common/constants'
import { ToastNotification } from '../index.js'

/**
 * TimedToastNotification Component for Patternfly React
 */
class TimedToastNotification extends React.Component {
  constructor(props) {
    super(props)
    helpers.bindMethods(this, ['onMouseEnter', 'onMouseLeave'])
  }

  componentDidMount() {
    const { sticky, onDismiss, timerDelay } = this.props

    if (!sticky) {
      this.timer = new Timer(onDismiss, timerDelay)
      this.timer.startTimer()
    }
  }

  componentWillUnmount() {
    this.timer && this.timer.clearTimer()
  }

  onMouseEnter() {
    this.timer && this.timer.clearTimer()
    const { onMouseEnter } = this.props
    onMouseEnter && onMouseEnter()
  }

  onMouseLeave() {
    this.timer && this.timer.startTimer()
    const { onMouseLeave } = this.props
    onMouseLeave && onMouseLeave()
  }
  render() {
    const { children } = this.props
    return (
      <ToastNotification
        {...this.props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
      </ToastNotification>
    )
  }
}

TimedToastNotification.propTypes = {
  /** sticky keeps the notification up endlessly */
  sticky: PropTypes.bool,
  /** timer delay */
  timerDelay: PropTypes.number,
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
  children: PropTypes.node
}
TimedToastNotification.defaultProps = {
  type: 'error',
  timerDelay: 8000
}

export default TimedToastNotification
