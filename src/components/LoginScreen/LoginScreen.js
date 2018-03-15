import React from 'react';
import PropTypes from 'prop-types';
import PageCard from './InnerComponents/PageCard';
import PageHeader from './InnerComponents/PageHeader';
import PageFooter from './InnerComponents/PageFooter';
import './login-screen.css';

const LoginScreen = props => (
  <div className={`login-pf ${props.bgClass}`}>
    <div className="login-pf-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
            <PageHeader {...props} />
            <PageCard {...props} />
            <PageFooter {...props} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

LoginScreen.propTypes = {
  bgClass: PropTypes.string
};

LoginScreen.defaultProps = {
  bgClass: null
};

export default LoginScreen;
