import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../LoginForm';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('LoginForm should match snapshot (auto-generated)', () => {
  const view = shallow(
    <LoginForm
      noAutoFocus={false}
			className={"''"}
			showHelperText={false}
			helperText={null}
			usernameLabel={"'Username'"}
			usernameValue={"''"}
			onChangeUsername={() => undefined as any}
			isValidUsername={true}
			passwordLabel={"'Password'"}
			passwordValue={"''"}
			onChangePassword={() => undefined as any}
			isValidPassword={true}
			loginButtonLabel={"'Log In'"}
			isLoginButtonDisabled={false}
			onLoginButtonClick={() => undefined as any}
			rememberMeLabel={"''"}
			isRememberMeChecked={false}
			onChangeRememberMe={() => undefined as any}
			rememberMeAriaLabel={"''"}
    />);
  expect(view).toMatchSnapshot();
});

test('should render Login form', () => {
  const view = shallow(<LoginForm />);
  expect(view).toMatchSnapshot();
});

test('should call onChangeUsername callback', () => {
  const mockFn = jest.fn();
  const view = shallow(<LoginForm onChangeUsername={mockFn} rememberMeLabel="Login Form" />);
  view.find('#pf-login-username-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});

test('should call onChangePassword callback', () => {
  const mockFn = jest.fn();
  const view = shallow(<LoginForm onChangePassword={mockFn} rememberMeLabel="Login Form" />);
  view.find('#pf-login-password-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});

test('should call onChangeRememberMe callback', () => {
  const mockFn = jest.fn();
  const view = shallow(<LoginForm onChangeRememberMe={mockFn} rememberMeLabel="Login Form" />);
  view.find('#pf-login-remember-me-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});

test('LoginForm with rememberMeLabel', () => {
  const view = shallow(<LoginForm rememberMeLabel="remember me" />);
  expect(view).toMatchSnapshot();
});

test('LoginForm with rememberMeLabel and rememberMeAriaLabel uses the rememberMeAriaLabel', () => {
  const view = shallow(<LoginForm rememberMeAriaLabel="ARIA remember me" rememberMeLabel="remember me" />);
  expect(view).toMatchSnapshot();
});