import React from 'react';
import PropTypes from 'prop-types';

const LoginCardSocialSection = ({ children, className, ...props }) => (
  <section {...props} className={`login-pf-social-section ${className}`}>
    {children}
  </section>
);

LoginCardSocialSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

LoginCardSocialSection.defaultProps = {
  className: '',
  children: null
};

export default LoginCardSocialSection;
