import React from 'react';
import PropTypes from 'prop-types';
import Link from '../LoginPageComponents/LoginPageLink';

const LoginFooterLinks = ({ links }) => {
  const listItems = links.map((link, index) => (
    <li key={index}>
      <Link className="login-pf-page-footer-link" href={link.href} onClick={e => link.onClick(e)}>
        {link.children}
      </Link>
    </li>
  ));

  return <ul className="login-pf-page-footer-links list-unstyled">{listItems}</ul>;
};

LoginFooterLinks.propTypes = {
  links: PropTypes.array
};

LoginFooterLinks.defaultProps = {
  links: []
};

export default LoginFooterLinks;
