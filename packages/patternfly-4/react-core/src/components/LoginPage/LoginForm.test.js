import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

test('should render Login form', () => {
  const view = shallow(<LoginForm rememberMeAriaLabel="Login Form" />);
  expect(view).toMatchSnapshot();
});

test('default function onChangeUsername', () => {
  const view = shallow(<LoginForm rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-username-id').simulate('change');
  const result = LoginForm.defaultProps.onChangeUsername();
  expect(result).toBe(undefined);
});

test('should call onChangeUsername callback', () => {
  const mockFn = jest.fn();
  const view = shallow(<LoginForm onChangeUsername={mockFn} rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-username-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});

test('default function onChangePassword', () => {
  const view = shallow(<LoginForm rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-password-id').simulate('change');
  const result = LoginForm.defaultProps.onChangePassword();
  expect(result).toBe(undefined);
});

test('should call onChangePassword callback', () => {
  const mockFn = jest.fn();
  const view = shallow(<LoginForm onChangePassword={mockFn} rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-password-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});

test('default function onChangeRememberMe', () => {
  const view = shallow(<LoginForm rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-remember-me-id').simulate('change');
  const result = LoginForm.defaultProps.onChangeRememberMe();
  expect(result).toBe(undefined);
});

test('should call onChangeRememberMe callback', () => {
  const mockFn = jest.fn();
  const view = shallow(<LoginForm onChangeRememberMe={mockFn} rememberMeAriaLabel="Login Form" />);
  view.find('#pf-login-remember-me-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
