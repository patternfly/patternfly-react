import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../../common/helpers';

const RememberMe = ({ onClick, label, className, ...props }) => (
  <label className={`checkbox-label ${className}`}>
    <input {...props} type="checkbox" onClick={onClick} /> {label}
  </label>
);

RememberMe.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

RememberMe.defaultProps = {
  label: 'Keep me logged in for 30 days',
  className: '',
  onClick: noop
};

export default RememberMe;
