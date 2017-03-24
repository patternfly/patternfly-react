import ClassNames from 'classnames'
import React, { PropTypes } from 'react'

/**
 * React <b>Alert</b> Component for Patternfly Web Components
 *
 * @prop {string} type danger, error, warning, success, info
 * @prop {func} onDismiss alert dismiss handler function
 * @prop {node} children alert contents
 *
 * @example {@lang xml}
 * <Alert type="danger" onDismiss={this.handleAlertClose}>
 *  <span>Danger Will Robinson!</span>
 * </Alert>
 *
 */
const Alert = ({ children, onDismiss, type }) => {
  const alertClass = ClassNames({
    'alert': true,
    'alert-danger': type === 'danger' || type === 'error',
    'alert-warning': type === 'warning',
    'alert-success': type === 'success',
    'alert-info': type === 'info',
    'alert-dismissable': onDismiss
  })
  const iconClass = ClassNames({
    'pficon': true,
    'pficon-error-circle-o': type === 'danger' || type === 'error',
    'pficon-warning-triangle-o': type === 'warning',
    'pficon-ok': type === 'success',
    'pficon-info': type === 'info'
  })

  return (
    <div className={alertClass}>
      {onDismiss &&
        <button type='button' className='close' aria-hidden='true' onClick={onDismiss}>
          <span className='pficon pficon-close' />
        </button>}
      <span className={iconClass} />
      {children}
    </div>
  )
}
Alert.propTypes = {
  children: PropTypes.node,
  onDismiss: PropTypes.func,
  type: PropTypes.oneOf(['danger', 'error', 'warning', 'success', 'info']).isRequired
}
Alert.defaultProps = {
  type: 'error'
}

export default Alert
