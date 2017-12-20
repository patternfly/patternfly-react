import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { getClassName, getIconName } from './helpers';
import { ALERT_TYPES, ALERT_TYPE_ERROR } from './constants';

/**
 * Alert Component for Patternfly React
 */
const Alert = ({ children, className, onDismiss, type, ...props }) => {
  const alertClass = ClassNames(className, 'alert', getClassName(type), {
    'alert-dismissable': onDismiss
  });

  const iconName = getIconName(type);

  return (
    <div className={alertClass} {...props}>
      {onDismiss && (
        <button
          type="button"
          className="close"
          aria-hidden="true"
          onClick={onDismiss}
        >
          <Icon type="pf" name="close" />
        </button>
      )}
      <Icon type="pf" name={iconName} />
      {children}
    </div>
  );
};
Alert.propTypes = {
  /** additional alert classes */
  className: PropTypes.string,
  /** callback when alert is dismissed  */
  onDismiss: PropTypes.func,
  /** the type of alert  */
  type: PropTypes.oneOf(ALERT_TYPES).isRequired,
  /** children nodes  */
  children: PropTypes.node
};
Alert.defaultProps = {
  type: ALERT_TYPE_ERROR
};
Alert.ALERT_TYPES = ALERT_TYPES;

export default Alert;
