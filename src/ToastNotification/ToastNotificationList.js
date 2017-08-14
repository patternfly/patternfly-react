import React from 'react'
import PropTypes from 'prop-types'

/**
 * ToastNotificationList Component for Patternfly React
 */
const ToastNotificationList = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
ToastNotificationList.propTypes = {
  /** additional notification list classes */
  className: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
}
ToastNotificationList.defaultProps = {
  className: 'toast-notifications-list-pf'
}

export default ToastNotificationList
