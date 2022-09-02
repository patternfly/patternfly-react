import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginForm } from '../LoginForm';

describe('LoginForm', () => {
  test('should render Login form', () => {
    const { asFragment } = render(<LoginForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should call onChangeUsername callback', async () => {
    const mockFn = jest.fn();
    const user = userEvent.setup();

    render(<LoginForm onChangeUsername={mockFn} rememberMeLabel="Remember me" />);

    await user.type(screen.getByText('Username'), 'updatedUserName');
    expect(mockFn).toHaveBeenCalled();
  });

  test('should call onChangePassword callback', async () => {
    const mockFn = jest.fn();
    const user = userEvent.setup();

    render(<LoginForm onChangePassword={mockFn} rememberMeLabel="Remember me" />);

    await user.type(screen.getByText('Password'), 'updatedPassword');
    expect(mockFn).toHaveBeenCalled();
  });

  test('should call onChangeRememberMe callback', async () => {
    const mockFn = jest.fn();
    const user = userEvent.setup();

    render(<LoginForm onChangeRememberMe={mockFn} rememberMeLabel="Remember me" />);

    await user.click(screen.getByLabelText('Remember me'));
    expect(mockFn).toHaveBeenCalled();
  });

  test('LoginForm with rememberMeLabel', () => {
    const { asFragment } = render(<LoginForm rememberMeLabel="Remember me" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('LoginForm with show password', () => {
    const { asFragment } = render(<LoginForm isShowPasswordEnabled />);
    expect(asFragment()).toMatchSnapshot();
  });
});
