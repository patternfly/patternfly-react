import * as React from 'react';
import { Form, FormGroup, ActionGroup, FormHelperText } from '../Form';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { ValidatedOptions } from '../../helpers/constants';
import { InputGroup } from '../InputGroup';
import EyeSlashIcon from '@patternfly/react-icons/dist/esm/icons/eye-slash-icon';
import EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';

export interface LoginFormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'ref'> {
  /** Flag to indicate if the first dropdown item should not gain initial focus */
  noAutoFocus?: boolean;
  /** Additional classes added to the login main body's form */
  className?: string;
  /** Flag indicating the helper text is visible * */
  showHelperText?: boolean;
  /** Content displayed in the helper text component * */
  helperText?: React.ReactNode;
  /** Icon displayed to the left in the helper text */
  helperTextIcon?: React.ReactNode;
  /** Label for the username input field */
  usernameLabel?: string;
  /** Value for the username */
  usernameValue?: string;
  /** Function that handles the onChange event for the username */
  onChangeUsername?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
  /** Flag indicating if the username is valid */
  isValidUsername?: boolean;
  /** Label for the password input field */
  passwordLabel?: string;
  /** Value for the password */
  passwordValue?: string;
  /** Function that handles the onChange event for the password */
  onChangePassword?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
  /** Flag indicating if the password is valid */
  isValidPassword?: boolean;
  /** Flag indicating if the user can toggle hiding the password */
  isShowPasswordEnabled?: boolean;
  /** Accessible label for the show password button */
  showPasswordAriaLabel?: string;
  /** Accessible label for the hide password button */
  hidePasswordAriaLabel?: string;
  /** Label for the log in button input */
  loginButtonLabel?: string;
  /** Flag indicating if the login button is disabled */
  isLoginButtonDisabled?: boolean;
  /** Function that is called when the login button is clicked */
  onLoginButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Label for the remember me checkbox that indicates the user should be kept logged in.  If the label is not provided, the checkbox will not show. */
  rememberMeLabel?: string;
  /** Flag indicating if the remember me checkbox is checked. */
  isRememberMeChecked?: boolean;
  /** Function that handles the onChange event for the remember me checkbox */
  onChangeRememberMe?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  noAutoFocus = false,
  className = '',
  showHelperText = false,
  helperText = null,
  helperTextIcon = null,
  usernameLabel = 'Username',
  usernameValue = '',
  onChangeUsername = () => undefined as any,
  isValidUsername = true,
  passwordLabel = 'Password',
  passwordValue = '',
  onChangePassword = () => undefined as any,
  isShowPasswordEnabled = false,
  hidePasswordAriaLabel = 'Hide password',
  showPasswordAriaLabel = 'Show password',
  isValidPassword = true,
  loginButtonLabel = 'Log In',
  isLoginButtonDisabled = false,
  onLoginButtonClick = () => undefined as any,
  rememberMeLabel = '',
  isRememberMeChecked = false,
  onChangeRememberMe = () => undefined as any,
  ...props
}: LoginFormProps) => {
  const [passwordHidden, setPasswordHidden] = React.useState(true);

  const passwordInput = (
    <TextInput
      isRequired
      type={passwordHidden ? 'password' : 'text'}
      id="pf-login-password-id"
      name="pf-login-password-id"
      validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
      value={passwordValue}
      onChange={onChangePassword}
    />
  );

  return (
    <Form className={className} {...props}>
      <FormHelperText isError={!isValidUsername || !isValidPassword} isHidden={!showHelperText} icon={helperTextIcon}>
        {helperText}
      </FormHelperText>
      <FormGroup
        label={usernameLabel}
        isRequired
        validated={isValidUsername ? ValidatedOptions.default : ValidatedOptions.error}
        fieldId="pf-login-username-id"
      >
        <TextInput
          autoFocus={!noAutoFocus}
          id="pf-login-username-id"
          isRequired
          validated={isValidUsername ? ValidatedOptions.default : ValidatedOptions.error}
          type="text"
          name="pf-login-username-id"
          value={usernameValue}
          onChange={onChangeUsername}
        />
      </FormGroup>
      <FormGroup
        label={passwordLabel}
        isRequired
        validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
        fieldId="pf-login-password-id"
      >
        {isShowPasswordEnabled && (
          <InputGroup>
            {passwordInput}
            <Button
              variant="control"
              onClick={() => setPasswordHidden(!passwordHidden)}
              aria-label={passwordHidden ? showPasswordAriaLabel : hidePasswordAriaLabel}
            >
              {passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
            </Button>
          </InputGroup>
        )}
        {!isShowPasswordEnabled && passwordInput}
      </FormGroup>
      {rememberMeLabel.length > 0 && (
        <FormGroup fieldId="pf-login-remember-me-id">
          <Checkbox
            id="pf-login-remember-me-id"
            label={rememberMeLabel}
            isChecked={isRememberMeChecked}
            onChange={onChangeRememberMe}
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
};
LoginForm.displayName = 'LoginForm';
