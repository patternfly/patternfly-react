import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../../common/helpers';

const LoginPageLink = ({ onClick, href, children, ...props }) => (
  <a href={href} onClick={onClick} {...props}>
    {children}
  </a>
);

LoginPageLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func
};

LoginPageLink.defaultProps = {
  children: null,
  href: '#',
  onClick: noop
};

export default LoginPageLink;
