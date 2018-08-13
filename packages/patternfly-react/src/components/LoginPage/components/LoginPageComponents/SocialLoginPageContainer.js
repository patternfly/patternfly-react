import React from 'react';
import PropTypes from 'prop-types';
import LoginPageContainer from './LoginPageContainer';

const SocialLoginPageContainer = ({ children, className, ...props }) => (
  <LoginPageContainer {...props} className={`${className} login-pf-page-accounts`}>
    {children}
  </LoginPageContainer>
);

SocialLoginPageContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

SocialLoginPageContainer.defaultProps = {
  children: null,
  className: ''
};

export default SocialLoginPageContainer;
