import React from 'react';
import PropTypes from 'prop-types';
import RememberMe from './LoginCardRememberMe';
import { FormGroup } from '../../../../index';
import ForgotPassword from './LoginCardForgotPassword';

const LoginCardSettings = ({ rememberMe, forgotPassword, className, ...props }) => (
  <FormGroup {...props} className={`login-pf-settings ${className}`}>
    <RememberMe {...rememberMe} />
    <ForgotPassword {...forgotPassword} />
  </FormGroup>
);

LoginCardSettings.propTypes = {
  className: PropTypes.string,
  rememberMe: PropTypes.shape({ ...RememberMe.propTypes }),
  forgotPassword: PropTypes.shape({ ...ForgotPassword.propTypes })
};

LoginCardSettings.defaultProps = {
  className: '',
  rememberMe: PropTypes.shape({ ...RememberMe.defaultProps }),
  forgotPassword: PropTypes.shape({ ...ForgotPassword.defaultProps })
};

export default LoginCardSettings;
