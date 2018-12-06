import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../../../../index';

const LoginCardInputWarning = ({ children, className, ...props }) =>
  children && (
    <div {...props} className={classNames('login-pf-input-warning', className)}>
      <Icon type="pf" name="warning-triangle-o" />
      {`   `}
      {children}
    </div>
  );

LoginCardInputWarning.propTypes = {
  /** Children nodes. */
  children: PropTypes.string,
  /** Additional css classes. */
  className: PropTypes.string
};

LoginCardInputWarning.defaultProps = {
  children: null,
  className: null
};

export default LoginCardInputWarning;
