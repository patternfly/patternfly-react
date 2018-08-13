import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../../common/helpers';

const LoginCardRememberMe = ({ onClick, label, className, ...props }) => (
  <label className={`checkbox-label ${className}`}>
    <input {...props} type="checkbox" onClick={onClick} /> {label}
  </label>
);

LoginCardRememberMe.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

LoginCardRememberMe.defaultProps = {
  label: 'Keep me logged in for 30 days',
  className: '',
  onClick: noop
};

export default LoginCardRememberMe;
