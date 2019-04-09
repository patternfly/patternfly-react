import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ActionGroup, FormHelperText } from '../Form';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

const propTypes = {
  /** Additional classes added to the Login Main Body's Form */
  className: PropTypes.string,
  /** Flag indicating the Helper Text is visible * */
  showHelperText: PropTypes.bool,
  /** Content displayed in the Helper Text component * */
  helperText: PropTypes.node,
  /** Label for the Username Input Field */
  usernameLabel: PropTypes.string,
  /** Value for the Username */
  usernameValue: PropTypes.string,
  /** Function that handles the onChange event for the Username */
  onChangeUsername: PropTypes.func,
  /** Flag indicating if the Username is valid */
  isValidUsername: PropTypes.bool,
  /** Label for the Password Input Field */
  passwordLabel: PropTypes.string,
  /** Value for the Password */
  passwordValue: PropTypes.string,
  /** Function that handles the onChange event for the Password */
  onChangePassword: PropTypes.func,
  /** Flag indicating if the Password is valid */
  isValidPassword: PropTypes.bool,
  /** Label for the Log in Button Input */
  loginButtonLabel: PropTypes.string,
  /** Flag indicating if the Login Button is disabled */
  isLoginButtonDisabled: PropTypes.bool,
  /** Function that is called when the Login button is clicked */
  onLoginButtonClick: PropTypes.func,
  /** Label for the Remember Me Checkbox that indicates the user should be kept logged in.  If the label is not provided, the checkbox will not show. */
  rememberMeLabel: PropTypes.string,
  /** Flag indicating if the remember me Checkbox is checked. */
  isRememberMeChecked: PropTypes.bool,
  /** Function that handles the onChange event for the Remember Me Checkbox */
  onChangeRememberMe: PropTypes.func,
  /** Aria Label for the Remember me checkbox */
  'aria-label': props => {
    if (props.rememberMeLabel && !props['aria-label']) {
      return new Error('aria-label is required with the Remember me checkbox');
    }
    return null;
  },
  /** Additional props are spread to the Form component */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  showHelperText: false,
  helperText: null,
  usernameLabel: 'Username',
  usernameValue: '',
  onChangeUsername: () => undefined,
  isValidUsername: true,
  passwordLabel: 'Password',
  passwordValue: '',
  onChangePassword: () => undefined,
  isValidPassword: true,
  loginButtonLabel: 'Log In',
  isLoginButtonDisabled: false,
  onLoginButtonClick: () => undefined,
  rememberMeLabel: '',
  isRememberMeChecked: false,
  onChangeRememberMe: () => undefined,
  'aria-label': ''
};

const LoginForm = ({
  className,
  showHelperText,
  helperText,
  usernameLabel,
  usernameValue,
  onChangeUsername,
  isValidUsername,
  passwordLabel,
  passwordValue,
  onChangePassword,
  isValidPassword,
  loginButtonLabel,
  isLoginButtonDisabled,
  onLoginButtonClick,
  rememberMeLabel,
  isRememberMeChecked,
  onChangeRememberMe,
  'aria-label': ariaLabel,
  ...props
}) => (
  <Form className={className} {...props}>
    <FormHelperText isError={!isValidUsername || !isValidPassword} isHidden={!showHelperText}>
      {helperText}
    </FormHelperText>
    <FormGroup label={usernameLabel} isRequired isValid={isValidUsername} fieldId="pf-login-username-id">
      <TextInput
        id="pf-login-username-id"
        isRequired
        isValid={isValidUsername}
        type="text"
        name="pf-login-username-id"
        value={usernameValue}
        onChange={onChangeUsername}
      />
    </FormGroup>
    <FormGroup label={passwordLabel} isRequired isValid={isValidPassword} fieldId="pf-login-password-id">
      <TextInput
        isRequired
        type="password"
        id="pf-login-password-id"
        name="pf-login-password-id"
        isValid={isValidPassword}
        value={passwordValue}
        onChange={onChangePassword}
      />
    </FormGroup>
    {rememberMeLabel.length > 0 && (
      <FormGroup fieldId="pf-login-remember-me-id">
        <Checkbox
          id="pf-login-remember-me-id"
          label={rememberMeLabel}
          checked={isRememberMeChecked}
          onChange={onChangeRememberMe}
          aria-label={ariaLabel}
        />
      </FormGroup>
    )}
    <ActionGroup>
      <Button variant="primary" type="submit" onClick={onLoginButtonClick} isBlock isDisabled={isLoginButtonDisabled}>
        {loginButtonLabel}
      </Button>
    </ActionGroup>
  </Form>
);

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
