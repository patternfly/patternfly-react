import React from 'react';
import PropTypes from 'prop-types';
import LoginPageLink from '../LoginPageComponents/LoginPageLink';

const LoginCardForgotPassword = ({ label, ...props }) => <LoginPageLink {...props}>{label}</LoginPageLink>;

LoginCardForgotPassword.propTypes = {
  /** The forgot password label. */
  label: PropTypes.string
};

LoginCardForgotPassword.defaultProps = {
  label: 'Forgot password?'
};

export default LoginCardForgotPassword;
