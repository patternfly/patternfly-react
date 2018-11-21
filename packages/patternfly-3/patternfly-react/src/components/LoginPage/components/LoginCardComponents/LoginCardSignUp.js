import React from 'react';
import PropTypes from 'prop-types';
import Link from '../LoginPageComponents/LoginPageLink';

const LoginCardSignUp = ({ label, link, className, ...props }) =>
  label && (
    <div {...props} className={`login-pf-signup ${className}`}>
      <p>
        {label}
        <Link {...link} />
      </p>
    </div>
  );

LoginCardSignUp.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.shape({ ...Link.propTypes })
};

LoginCardSignUp.defaultProps = {
  className: '',
  label: null,
  link: {}
};

export default LoginCardSignUp;
