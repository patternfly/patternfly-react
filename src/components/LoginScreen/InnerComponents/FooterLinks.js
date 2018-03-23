import React from 'react';
import PropTypes from 'prop-types';

const FooterLinks = props => {
  const listItems =
    props.footerLinks &&
    props.footerLinks.map(link => (
      <li>
        <a className="login-pf-page-footer-link" href="#">
          {link}
        </a>
      </li>
    ));

  return (
    <ul className="login-pf-page-footer-links list-unstyled">{listItems}</ul>
  );
};

FooterLinks.propTypes = {
  footerLinks: PropTypes.array
};

FooterLinks.defaultProps = {
  footerLinks: []
};

export default FooterLinks;
