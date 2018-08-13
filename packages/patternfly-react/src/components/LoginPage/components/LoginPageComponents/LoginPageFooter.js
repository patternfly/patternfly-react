import React from 'react';
import PropTypes from 'prop-types';
import LoginFooterLinks from './LoginFooterLinks';

const LoginPageFooter = ({ links }) => (
  <footer className="login-pf-page-footer">
    <LoginFooterLinks links={links} />
  </footer>
);

LoginPageFooter.propTypes = {
  links: PropTypes.array
};

LoginPageFooter.defaultProps = {
  links: LoginFooterLinks.defaultProps.links
};

export default LoginPageFooter;
