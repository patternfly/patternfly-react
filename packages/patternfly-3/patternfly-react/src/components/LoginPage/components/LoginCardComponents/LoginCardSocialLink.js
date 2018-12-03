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
  /** the link element props. */
  link: PropTypes.shape({
    ...Link.propTypes,
    /** The image source */
    src: PropTypes.string.isRequired,
    /** The image alt description */
    alt: PropTypes.string,
    /** The link text */
    text: PropTypes.string
  })
};

LoginCardSocialLink.defaultProps = {
  link: {
    ...Link.defaultProps,
    src: null,
    alt: null,
    text: null
  }
};

export default LoginCardSocialLink;
