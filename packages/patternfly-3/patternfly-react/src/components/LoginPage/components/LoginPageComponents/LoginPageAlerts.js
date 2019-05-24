import React from 'react';
import PropTypes from 'prop-types';
import { isArray, isEmpty } from 'lodash';
import LoginPageAlert from './LoginPageAlert';

const LoginPageAlerts = ({ alert }) => {
  if (isEmpty(alert)) {
    return null;
  }

  if (isArray(alert)) {
    return alert.map((item, index) => <LoginPageAlert key={index} {...item} />);
  }

  return <LoginPageAlert {...alert} />;
};

LoginPageAlerts.propTypes = {
  alert: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

LoginPageAlerts.defaultProps = {
  alert: null
};

export default LoginPageAlerts;
