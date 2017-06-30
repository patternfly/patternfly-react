import ClassNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Alert Component for Patternfly React
 */
const Alert = ({ children, onDismiss, type }) => {
  const alertClass = ClassNames({
    alert: true,
    'alert-danger': type === 'danger' || type === 'error',
    'alert-warning': type === 'warning',
    'alert-success': type === 'success',
    'alert-info': type === 'info',
    'alert-dismissable': onDismiss
  })
  const iconClass = ClassNames({
    pficon: true,
    'pficon-error-circle-o': type === 'danger' || type === 'error',
    'pficon-warning-triangle-o': type === 'warning',
    'pficon-ok': type === 'success',
    'pficon-info': type === 'info'
  })

  return (
    <div className={alertClass}>
      {onDismiss &&
        <button
          type="button"
          className="close"
          aria-hidden="true"
          onClick={onDismiss}
        >
          <span className="pficon pficon-close" />
        </button>}
      <span className={iconClass} />
      {children}
    </div>
  )
}
Alert.propTypes = {
  /** callback when alert is dismissed  */
  onDismiss: PropTypes.func,
  /** the type of alert  */
  type: PropTypes.oneOf(['danger', 'error', 'warning', 'success', 'info'])
    .isRequired,
  /** children nodes  */
  children: PropTypes.node
}
Alert.defaultProps = {
  type: 'error'
}

export default Alert
