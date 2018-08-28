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
  showError
}) => (
  <Form onSubmit={onSubmit} noValidate>
    <LoginFormError show={showError}>{submitError}</LoginFormError>
    <LoginCardInput {...usernameField} />
    <LoginCardInput {...passwordField} />
    {additionalFields}
    <LoginCardSettings rememberMe={rememberMe} forgotPassword={forgotPassword} />
    <Button type="submit" bsStyle="primary" bsSize="large" block disabled={disableSubmit}>
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
  showError: PropTypes.bool
};

LoginCardForm.defaultProps = {
  usernameField: {
    ...LoginCardInput,
    id: 'card_email',
    type: 'email',
    placeholder: 'Email Address'
  },
  passwordField: {
    ...LoginCardInput,
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
  showError: false
};

export default LoginCardForm;
