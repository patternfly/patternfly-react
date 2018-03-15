import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => (
  <header className="login-pf-page-header">
    <img
      className={`login-pf-brand ${props.logoClass}`}
      src={props.logoSrc}
      alt="logo"
    />
    <p>{props.pageDescription}</p>
  </header>
);

PageHeader.propTypes = {
  logoClass: PropTypes.string,
  logoSrc: PropTypes.string,
  pageDescription: PropTypes.string
};

PageHeader.defaultProps = {
  logoClass: null,
  logoSrc: null,
  pageDescription: null
};

export default PageHeader;
