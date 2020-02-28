import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { getClassName, getIconName, warnIfDeprecatedType } from './helpers';
import { ALERT_TYPES, DEPRECATED_ALERT_TYPES, ALERT_TYPE_ERROR } from './AlertConstants';

/**
 * Alert Component for Patternfly React
 */
const Alert = ({ children, className, onDismiss, type, ...props }) => {
  warnIfDeprecatedType(type);

  const alertClass = classNames('alert', className, getClassName(type), {
    'alert-dismissable': onDismiss
  });

  const iconName = getIconName(type);

  return (
    <div className={alertClass} {...props}>
      {onDismiss && (
        <Button bsClass="close" aria-hidden="true" onClick={onDismiss}>
          <Icon type="pf" name="close" />
        </Button>
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
  type: PropTypes.oneOf([...ALERT_TYPES, ...DEPRECATED_ALERT_TYPES]),
  /** children nodes  */
  children: PropTypes.node
};
Alert.defaultProps = {
  className: '',
  onDismiss: null, // we do not want to default noop b/c of conditional dismiss button
  type: ALERT_TYPE_ERROR,
  children: null
};
Alert.ALERT_TYPES = ALERT_TYPES;

export default Alert;
