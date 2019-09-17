import React from 'react';
import PropTypes from 'prop-types';
import LoginCardInput from './LoginCardInput';
import LoginCardSettings from './LoginCardSettings';
import LoginCardSubmitButton from './LoginCardSubmitButton';
import LoginFormError from './LoginFormError';
import { Form } from '../../../../index';
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
  attributes,
  isSubmitting,
  topErrorOnly,
  submitButtonAttributes
}) => (
  <Form onSubmit={onSubmit} noValidate {...attributes}>
    <LoginFormError show={showError} topErrorOnly={topErrorOnly}>
      {submitError}
    </LoginFormError>
    <LoginCardInput {...{ ...usernameField, topErrorOnly }} />
    <LoginCardInput {...{ ...passwordField, topErrorOnly }} />
    {additionalFields}
    <LoginCardSettings rememberMe={rememberMe} forgotPassword={forgotPassword} />
    <LoginCardSubmitButton isDisabled={disableSubmit} isLoading={isSubmitting} attributes={submitButtonAttributes}>
      {submitText}
    </LoginCardSubmitButton>
  </Form>
);

LoginCardForm.propTypes = {
  /** login username input's props */
  usernameField: PropTypes.shape({ ...LoginCardInput.propTypes }),
  /** login password input's props */
  passwordField: PropTypes.shape({ ...LoginCardInput.propTypes }),
  /** Add additional fields under the inputs  */
  additionalFields: PropTypes.node,
  /** The submit button text */
  submitText: PropTypes.string,
  /** Sets the submit button disability */
  disableSubmit: PropTypes.bool,
  /** A callback that will be triggered when the form is submitted */
  onSubmit: PropTypes.func,
  /** The forgotPassowrd section props */
  forgotPassword: LoginCardSettings.propTypes.forgotPassword,
  /** The rememberMe section props */
  rememberMe: LoginCardSettings.propTypes.rememberMe,
  /** The login form error which is usually shown after the submit - a server error. */
  submitError: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Controlls the form error visibility */
  showError: PropTypes.bool,
  /** Additional HTML attributes to pass to the form */
  attributes: PropTypes.object,
  /** Indicates the state of the form submit and whether to show a spinner or not */
  isSubmitting: PropTypes.bool,
  /** when topErrorOnly is set to true,
   * the helpblock errors/warnings under each input won't appear,
   * instead we will have only the form error above.
   */
  topErrorOnly: PropTypes.bool,
  /** Override the button attributes */
  submitButtonAttributes: PropTypes.object
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
  attributes: null,
  isSubmitting: false,
  topErrorOnly: false,
  submitButtonAttributes: {}
};

export default LoginCardForm;
