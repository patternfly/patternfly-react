import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

test('should render Login form', () => {
  const view = shallow(<LoginForm />);
  expect(view).toMatchSnapshot();
});

test('default function onChangeUsername', () => {
  const view = shallow(<LoginForm rememberMeLabel="Login Form" rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-username-id').simulate('change');
  const result = LoginForm.defaultProps.onChangeUsername();
  expect(result).toBe(undefined);
});

test('should call onChangeUsername callback', () => {
  const mockFn = jest.fn();
  const view = shallow(
    <LoginForm onChangeUsername={mockFn} rememberMeLabel="Login Form" rememberMeAriaLabel="Login Form" />
  );
  view.find('#pf-login-username-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});

test('default function onChangePassword', () => {
  const view = shallow(<LoginForm rememberMeLabel="Login Form" rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-password-id').simulate('change');
  const result = LoginForm.defaultProps.onChangePassword();
  expect(result).toBe(undefined);
});

test('should call onChangePassword callback', () => {
  const mockFn = jest.fn();
  const view = shallow(
    <LoginForm onChangePassword={mockFn} rememberMeLabel="Login Form" rememberMeAriaLabel="Login Form" />
  );
  view.find('#pf-login-password-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});

test('default function onChangeRememberMe', () => {
  const view = shallow(<LoginForm rememberMeLabel="Login Form" rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-remember-me-id').simulate('change');
  const result = LoginForm.defaultProps.onChangeRememberMe();
  expect(result).toBe(undefined);
});

test('should call onChangeRememberMe callback', () => {
  const mockFn = jest.fn();
  const view = shallow(
    <LoginForm onChangeRememberMe={mockFn} rememberMeLabel="Login Form" rememberMeAriaLabel="Login Form" />
  );
  view.find('#pf-login-remember-me-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});

test('LoginForm with rememberMeLabel and no rememberMeAriaLabel generates console error', () => {
  const myMock = jest.fn();
  const mockFn = jest.fn();
  global.console = { error: myMock };
  const view = shallow(<LoginForm onChangeRememberMe={mockFn} rememberMeLabel="remember me" />);
  expect(view).toMatchSnapshot();
  expect(myMock).toBeCalled();
});

test('LoginForm with rememberMeLabel and rememberMeAriaLabel does not generates console error', () => {
  const myMock = jest.fn();
  const mockFn = jest.fn();
  global.console = { error: myMock };
  const view = shallow(
    <LoginForm onChangeRememberMe={mockFn} rememberMeAriaLabel="remember me" rememberMeLabel="remember me" />
  );
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});
