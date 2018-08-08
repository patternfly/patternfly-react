import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../../common/helpers';

const ForgotPassword = ({ href, onClick, label, ...props }) => (
  <a {...props} href={href} onClick={onClick}>
    {label}
  </a>
);

ForgotPassword.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

ForgotPassword.defaultProps = {
  label: 'Forgot password?',
  href: '#',
  className: 'forgot-password',
  onClick: noop
};

export default ForgotPassword;
