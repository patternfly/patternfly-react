import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RememberMe from './LoginCardRememberMe';
import { FormGroup } from '../../../../index';
import ForgotPassword from './LoginCardForgotPassword';

const LoginCardSettings = ({ rememberMe, forgotPassword, className, ...props }) =>
  rememberMe.label || forgotPassword.label ? (
    <FormGroup {...props} className={classNames('login-pf-settings', className)}>
      <RememberMe {...rememberMe} />
      <ForgotPassword {...forgotPassword} />
    </FormGroup>
  ) : null;

LoginCardSettings.propTypes = {
  /** Additional css classes. */
  className: PropTypes.string,
  /** RememberMe component's props. */
  rememberMe: PropTypes.shape({ ...RememberMe.propTypes }),
  /** ForgotPassword component's props. */
  forgotPassword: PropTypes.shape({ ...ForgotPassword.propTypes })
};

LoginCardSettings.defaultProps = {
  className: null,
  rememberMe: {},
  forgotPassword: {}
};

export default LoginCardSettings;
