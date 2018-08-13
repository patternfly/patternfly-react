import React from 'react';
import PropTypes from 'prop-types';

const LoginPageContainer = ({ backgroundUrl, className, children }) => {
  const style = {
    backgroundImage: `url(${backgroundUrl})`
  };

  return (
    <div className="login-pf" style={style}>
      <div className={`login-pf-page ${className}`}>{children}</div>
    </div>
  );
};

LoginPageContainer.propTypes = {
  children: PropTypes.node,
  backgroundUrl: PropTypes.string,
  className: PropTypes.string
};

LoginPageContainer.defaultProps = {
  children: null,
  backgroundUrl: null,
  className: ''
};

export default LoginPageContainer;
