import React from 'react';
import PropTypes from 'prop-types';
import Link from '../LoginPageComponents/LoginPageLink';

const LoginCardSocialLink = ({ link }) =>
  link && (
    <li className="login-pf-social-link">
      <Link href={link.href} onClick={link.onClick}>
        <img src={link.src} alt={link.alt} />
        {link.text}
      </Link>
    </li>
  );

LoginCardSocialLink.propTypes = {
  link: PropTypes.shape({ ...Link.propTypes })
};

LoginCardSocialLink.defaultProps = {
  link: { ...Link.defaultProps, onClick: e => e.preventDefault() }
};

export default LoginCardSocialLink;
