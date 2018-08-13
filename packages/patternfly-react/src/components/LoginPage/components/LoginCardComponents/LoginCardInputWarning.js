import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../../index';

const LoginCardInputWarning = ({ children, className, ...props }) =>
  children && (
    <div style={{ marginTop: '5px' }} className={className} {...props}>
      <Icon type="pf" name="warning-triangle-o" />
      {`   ${children}`}
    </div>
  );

LoginCardInputWarning.propTypes = {
  children: PropTypes.string
};

LoginCardInputWarning.defaultProps = {
  children: null
};

export default LoginCardInputWarning;
