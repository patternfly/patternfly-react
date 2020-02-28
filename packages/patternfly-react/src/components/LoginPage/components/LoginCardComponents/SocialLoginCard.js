import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoginCard from './LoginCard';

const SocialLoginCard = ({ children, className, ...props }) => (
  <LoginCard {...props} className={classNames('login-pf-accounts', className)}>
    {children}
  </LoginCard>
);

SocialLoginCard.propTypes = {
  /** The children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

SocialLoginCard.defaultProps = {
  children: null,
  className: null
};

export default SocialLoginCard;
