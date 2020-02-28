import React from 'react';
import PropTypes from 'prop-types';

const LoginPageHeader = ({ logoSrc, logoTitle, caption }) => (
  <header className="login-pf-page-header">
    <img className="login-pf-brand" src={logoSrc} title={logoTitle} alt="logo" />
    <div className="login-pf-caption">{caption}</div>
  </header>
);

LoginPageHeader.propTypes = {
  logoSrc: PropTypes.string,
  logoTitle: PropTypes.string,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

LoginPageHeader.defaultProps = {
  logoSrc: null,
  logoTitle: null,
  caption: null
};

export default LoginPageHeader;
