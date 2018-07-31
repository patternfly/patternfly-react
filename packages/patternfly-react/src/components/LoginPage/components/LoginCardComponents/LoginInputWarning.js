import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../../index';

const LoginInputWarning = ({ children, className, ...props }) =>
  children && (
    <div style={{ marginTop: '5px' }} className={className} {...props}>
      <Icon type="pf" name="warning-triangle-o" />
      {`   ${children}`}
    </div>
  );

LoginInputWarning.propTypes = {
  children: PropTypes.string
};

LoginInputWarning.defaultProps = {
  children: null
};

export default LoginInputWarning;
