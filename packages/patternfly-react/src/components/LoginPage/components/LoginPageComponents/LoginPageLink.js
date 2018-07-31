import React from 'react';
import PropTypes from 'prop-types';

const LoginCardSignUp = ({ onClick, href, children, ...props }) => (
  <a href={href} onClick={onClick} {...props}>
    {children}
  </a>
);

LoginCardSignUp.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func
};

LoginCardSignUp.defaultProps = {
  children: null,
  href: '#',
  onClick: e => null
};

export default LoginCardSignUp;
