import React from 'react';
import PropTypes from 'prop-types';
import LoginCard from './LoginCard';

const SocialLoginCard = ({ children, className, ...props }) => (
  <LoginCard {...props} className={`login-pf-accounts ${className}`}>
    {children}
  </LoginCard>
);

SocialLoginCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

SocialLoginCard.defaultProps = {
  children: null,
  className: ''
};

export default SocialLoginCard;
