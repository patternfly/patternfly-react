import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginForm } from '../LoginForm';
import userEvent from '@testing-library/user-event';

describe('LoginForm', () => {
  test('should render Login form', () => {
    render(<LoginForm data-testid="form-test-id" />);
    expect(screen.getByTestId('form-test-id').outerHTML).toMatchSnapshot();
  });

  test('should call onChangeUsername callback', () => {
    const mockFn = jest.fn();

    render(<LoginForm onChangeUsername={mockFn} rememberMeLabel="Remember me" />);

    userEvent.type(screen.getByText('Username'), 'updatedUserName');
    expect(mockFn).toHaveBeenCalled();
  });

  test('should call onChangePassword callback', () => {
    const mockFn = jest.fn();

    render(<LoginForm onChangePassword={mockFn} rememberMeLabel="Remember me" />);

    userEvent.type(screen.getByText('Password'), 'updatedPassword');
    expect(mockFn).toHaveBeenCalled();
  });

  test('should call onChangeRememberMe callback', () => {
    const mockFn = jest.fn();

    render(<LoginForm onChangeRememberMe={mockFn} rememberMeLabel="Remember me" />);

    userEvent.click(screen.getByLabelText('Remember me'));
    expect(mockFn).toHaveBeenCalled();
  });

  test('LoginForm with rememberMeLabel', () => {
    render(<LoginForm rememberMeLabel="Remember me" data-testid="form-test-id" />);
    expect(screen.getByTestId('form-test-id').outerHTML).toMatchSnapshot();
  });

  test('LoginForm with show password', () => {
    render(<LoginForm isShowPasswordEnabled data-testid="form-test-id" />);
    expect(screen.getByTestId('form-test-id').outerHTML).toMatchSnapshot();
  });
});
