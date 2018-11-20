import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-collapse';
import { default as cx } from 'classnames';
import { excludeKeys } from '../../../../common/helpers';

const LoginFormError = ({ children, show, className, ...props }) =>
  children && (
    <Collapse {...excludeKeys(props, ['className'])} isOpened={show} className={cx('login-form-error', className)}>
      {children}
    </Collapse>
  );

LoginFormError.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  show: PropTypes.bool
};

LoginFormError.defaultProps = {
  className: '',
  children: null,
  show: false
};

export default LoginFormError;
