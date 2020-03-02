import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../LoginPageComponents/LoginPageLink';

const LoginCardSignUp = ({ label, link, className, ...props }) =>
  label && (
    <div {...props} className={classNames('login-pf-signup', className)}>
      <p>
        {label}
        <Link {...link} />
      </p>
    </div>
  );

LoginCardSignUp.propTypes = {
  /** Additional css classes. */
  className: PropTypes.string,
  /** The sign up label. */
  label: PropTypes.string,
  /** The sign up label. */
  link: PropTypes.shape({ ...Link.propTypes })
};

LoginCardSignUp.defaultProps = {
  className: '',
  label: null,
  link: {}
};

export default LoginCardSignUp;
