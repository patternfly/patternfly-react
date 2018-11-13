import React from 'react';
import PropTypes from 'prop-types';
import LoginCardInput from './LoginCardInput';
import LoginCardSettings from './LoginCardSettings';
import LoginFormError from './LoginFormError';
import { Button, Form } from '../../../../index';
import { noop } from '../../../../common/helpers';

const LoginCardForm = ({
  usernameField,
  passwordField,
  additionalFields,
  submitText,
  disableSubmit,
  onSubmit,
  forgotPassword,
  rememberMe,
  submitError,
  showError,
  attributes
}) => (
  <Form onSubmit={onSubmit} noValidate {...attributes}>
    <LoginFormError show={showError}>{submitError}</LoginFormError>
    <LoginCardInput {...usernameField} />
    <LoginCardInput {...passwordField} />
    {additionalFields}
    <LoginCardSettings rememberMe={rememberMe} forgotPassword={forgotPassword} />
    <Button
      className="login-pf-submit-button"
      type="submit"
      bsStyle="primary"
      bsSize="large"
      block
      disabled={disableSubmit}
    >
      {submitText}
    </Button>
  </Form>
);

LoginCardForm.propTypes = {
  usernameField: PropTypes.shape({ ...LoginCardInput.propTypes }),
  passwordField: PropTypes.shape({ ...LoginCardInput.propTypes }),
  additionalFields: PropTypes.node,
  submitText: PropTypes.string,
  disableSubmit: PropTypes.bool,
  onSubmit: PropTypes.func,
  forgotPassword: PropTypes.object,
  rememberMe: PropTypes.object,
  submitError: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showError: PropTypes.bool,
  attributes: PropTypes.object
};

LoginCardForm.defaultProps = {
  usernameField: {
    ...LoginCardInput.defaultProps,
    id: 'card_email',
    type: 'email',
    placeholder: 'Email Address'
  },
  passwordField: {
    ...LoginCardInput.defaultProps,
    id: 'card_password',
    type: 'password',
    placeholder: 'Password',
    minLength: 8
  },
  additionalFields: null,
  submitText: null,
  disableSubmit: false,
  onSubmit: noop,
  forgotPassword: {
    label: null,
    href: '#',
    onClick: noop
  },
  rememberMe: { label: null },
  submitError: null,
  showError: false,
  attributes: null
};

export default LoginCardForm;
