import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-bootstrap';
import LoginCardInputWarning from './LoginCardInputWarning';
import { FormControl, FormGroup, HelpBlock } from '../../../../index';
import { noop } from '../../../../common/helpers';

const LoginCardInput = ({
  id,
  type,
  placeholder,
  size,
  error,
  warning,
  onChange,
  onFocus,
  onBlur,
  onKeyPress,
  showError,
  showWarning,
  className,
  autoComplete,
  attributes
}) => {
  const helpBlock =
    (showError && <HelpBlock>{error}</HelpBlock>) ||
    (showWarning && <LoginCardInputWarning>{warning}</LoginCardInputWarning>);
  return (
    <FormGroup className={`login_card_input ${className}`} controlId={id} validationState={showError ? 'error' : null}>
      <FormControl
        {...attributes}
        type={type}
        placeholder={placeholder}
        bsSize={size}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        autoComplete={autoComplete}
      />

      <Fade in={showError || showWarning}>
        <div>{helpBlock}</div>
      </Fade>
    </FormGroup>
  );
};

LoginCardInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onChange: PropTypes.func,
  showWarning: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  showError: PropTypes.bool,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  attributes: PropTypes.object
};

LoginCardInput.defaultProps = {
  id: Math.random().toString(),
  type: 'text',
  placeholder: 'Enter Text',
  size: 'lg',
  error: null,
  warning: null,
  onChange: noop,
  showWarning: false,
  onBlur: noop,
  onFocus: noop,
  onKeyPress: noop,
  showError: false,
  className: '',
  autoComplete: '',
  attributes: null
};

export default LoginCardInput;
