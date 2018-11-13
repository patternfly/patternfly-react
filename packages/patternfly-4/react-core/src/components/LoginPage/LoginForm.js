import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import flexStyles from '@patternfly/patternfly-next/utilities/Flex/flex.css';
import displayStyles from '@patternfly/patternfly-next/utilities/Display/display.css';
import alignmentStyles from '@patternfly/patternfly-next/utilities/Alignment/alignment.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import { Form, FormGroup, ActionGroup } from '../Form';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

const propTypes = {
  /** Additional classes added to the LoginBox Body */
  className: PropTypes.string,
  /** Label for the Username Input Field */
  usernameLabel: PropTypes.string,
  /** Value for the Username */
  usernameValue: PropTypes.string,
  /** Function that handles the onChange event for the Username */
  onChangeUsername: PropTypes.func,
  /** Helper Text for the Username Input Field */
  usernameHelperText: PropTypes.string,
  /** Helper Text for the Username Input Field when it is invalid */
  usernameHelperTextInvalid: PropTypes.string,
  /** Flag indicating if the Username is valid */
  isValidUsername: PropTypes.bool,
  /** Label for the Password Input Field */
  passwordLabel: PropTypes.string,
  /** Value for the Password */
  passwordValue: PropTypes.string,
  /** Function that handles the onChange event for the Password */
  onChangePassword: PropTypes.func,
  /** Helper Text for the Username Input Field */
  passwordHelperText: PropTypes.string,
  /** Helper Text for the Password Input Field when it is invalid */
  passwordHelperTextInvalid: PropTypes.string,
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
  rememberMeAriaLabel: props => {
    if (props.rememberMeLabel && !props.rememberMeAriaLabel) {
      return new Error('rememberMeAriaLabel is required with the Remember me checkbox');
    }
    return null;
  }
};

const defaultProps = {
  className: '',
  usernameLabel: 'Username',
  usernameValue: '',
  onChangeUsername: () => undefined,
  usernameHelperText: '',
  usernameHelperTextInvalid: '',
  isValidUsername: true,
  passwordLabel: 'Password',
  passwordValue: '',
  onChangePassword: () => undefined,
  passwordHelperText: '',
  passwordHelperTextInvalid: '',
  isValidPassword: true,
  loginButtonLabel: 'Log In',
  isLoginButtonDisabled: false,
  onLoginButtonClick: () => undefined,
  rememberMeLabel: '',
  isRememberMeChecked: false,
  onChangeRememberMe: () => undefined,
  rememberMeAriaLabel: ''
};

const LoginForm = ({
  className,
  usernameLabel,
  usernameValue,
  onChangeUsername,
  usernameHelperText,
  usernameHelperTextInvalid,
  isValidUsername,
  passwordLabel,
  passwordValue,
  onChangePassword,
  passwordHelperText,
  passwordHelperTextInvalid,
  isValidPassword,
  loginButtonLabel,
  isLoginButtonDisabled,
  onLoginButtonClick,
  rememberMeLabel,
  isRememberMeChecked,
  onChangeRememberMe,
  rememberMeAriaLabel,
  ...props
}) => (
  <Form className={className} {...props}>
    <FormGroup
      label={usernameLabel}
      isRequired
      helperText={usernameHelperText}
      helperTextInvalid={usernameHelperTextInvalid}
      isValid={isValidUsername}
      fieldId="pf-login-username-id"
    >
      <TextInput
        id="pf-login-username-id"
        isRequired
        isValid={isValidUsername}
        type="text"
        mame="pf-login-username-id"
        value={usernameValue}
        onChange={onChangeUsername}
      />
    </FormGroup>
    <FormGroup
      label={passwordLabel}
      isRequired
      helperText={passwordHelperText}
      helperTextInvalid={passwordHelperTextInvalid}
      isValid={isValidPassword}
      fieldId="pf-login-password-id"
    >
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
    <ActionGroup
      className={css(
        displayStyles.displayFlex,
        flexStyles.alignItemsCenter,
        flexStyles.flexDirectionColumn,
        flexStyles.flexDirectionRowOnMd
      )}
    >
      <Button
        className={css(
          spacingStyles.mrLgOnMd,
          spacingStyles.pxXl,
          flexStyles.alignSelfStretch,
          flexStyles.alignSelfFlexStartOnMd
        )}
        variant="primary"
        type="submit"
        onClick={onLoginButtonClick}
        isDisabled={isLoginButtonDisabled}
      >
        {loginButtonLabel}
      </Button>
      <div className={css(alignmentStyles.textAlignCenter, alignmentStyles.textAlignLeftOnMd)}>
        {rememberMeLabel.length > 0 && (
          <Checkbox
            className={css(spacingStyles.mMd, flexStyles.alignItemsCenter, displayStyles.displayFlex)}
            id="pf-login-remember-me-id"
            label={rememberMeLabel}
            checked={isRememberMeChecked}
            onChange={onChangeRememberMe}
            aria-label={rememberMeAriaLabel}
          />
        )}
      </div>
    </ActionGroup>
  </Form>
);

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
