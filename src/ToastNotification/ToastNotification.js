import ClassNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../index'
import { TOAST_NOTIFICATION_TYPES } from '../common/constants'

/**
 * ToastNotification Component for Patternfly React
 */
const ToastNotification = ({
  className,
  onDismiss,
  type,
  onMouseEnter,
  onMouseLeave,
  children,
  ...props
}) => {
  const notificationClasses = ClassNames(
    {
      alert: true,
      'toast-pf': true,
      'alert-danger': type === 'danger' || type === 'error',
      'alert-warning': type === 'warning',
      'alert-success': type === 'success',
      'alert-info': type === 'info',
      'alert-dismissable': onDismiss
    },
    className
  )
  const iconClass = ClassNames({
    pficon: true,
    'pficon-error-circle-o': type === 'danger' || type === 'error',
    'pficon-warning-triangle-o': type === 'warning',
    'pficon-ok': type === 'success',
    'pficon-info': type === 'info'
  })

  return (
    <div
      className={notificationClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {onDismiss &&
        <Button bsClass="close" aria-hidden="true" onClick={onDismiss}>
          <span className="pficon pficon-close" />
        </Button>}
      <span className={iconClass} />
      {children}
    </div>
  )
}
ToastNotification.propTypes = {
  /** additional notification classes */
  className: PropTypes.string,
  /** callback when alert is dismissed  */
  onDismiss: PropTypes.func,
  /** the type of alert  */
  type: PropTypes.oneOf(TOAST_NOTIFICATION_TYPES).isRequired,
  /** onMouseEnter callback */
  onMouseEnter: PropTypes.func,
  /** onMouseLeave callback */
  onMouseLeave: PropTypes.func,
  /** children nodes  */
  children: PropTypes.node
}
ToastNotification.defaultProps = {
  type: 'error'
}

export default ToastNotification
