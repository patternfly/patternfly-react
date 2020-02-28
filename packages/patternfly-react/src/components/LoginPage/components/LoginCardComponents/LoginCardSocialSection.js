import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LoginCardSocialSection = ({ children, className, ...props }) => (
  <section {...props} className={classNames('login-pf-social-section', className)}>
    {children}
  </section>
);

LoginCardSocialSection.propTypes = {
  /** Additional css classes. */
  className: PropTypes.string,
  /** Children nodes. */
  children: PropTypes.node
};

LoginCardSocialSection.defaultProps = {
  className: null,
  children: null
};

export default LoginCardSocialSection;
