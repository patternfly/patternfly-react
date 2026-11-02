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

  test('Renders LoginForm with password field required by default', () => {
    render(<LoginForm />);
    const passwordField = screen.getByLabelText(/password/i);
    expect(passwordField).toBeRequired();
  });

  test('Renders LoginForm with password field not required when isPasswordRequired set to false', () => {
    render(<LoginForm isPasswordRequired={false} />);
    const passwordField = screen.getByLabelText(/password/i);
    expect(passwordField).not.toBeRequired();
  });

  test('preserves form autocomplete without setting input autocomplete by default', () => {
    render(<LoginForm aria-label="Login" autoComplete="off" />);

    expect(screen.getByRole('form', { name: 'Login' })).toHaveAttribute('autocomplete', 'off');
    expect(screen.getByRole('textbox', { name: /username/i })).not.toHaveAttribute('autocomplete');
    expect(screen.getByLabelText(/password/i)).not.toHaveAttribute('autocomplete');
  });

  test.each(['username', 'email', 'off'])('sets username autocomplete to %s', (usernameAutoComplete) => {
    render(<LoginForm usernameAutoComplete={usernameAutoComplete} />);

    expect(screen.getByRole('textbox', { name: /username/i })).toHaveAttribute('autocomplete', usernameAutoComplete);
    expect(screen.getByLabelText(/password/i)).not.toHaveAttribute('autocomplete');
  });

  test.each(['current-password', 'new-password', 'off'])('sets password autocomplete to %s', (passwordAutoComplete) => {
    render(<LoginForm passwordAutoComplete={passwordAutoComplete} />);

    expect(screen.getByLabelText(/password/i)).toHaveAttribute('autocomplete', passwordAutoComplete);
    expect(screen.getByRole('textbox', { name: /username/i })).not.toHaveAttribute('autocomplete');
  });

  test('sets input autocomplete independently of form autocomplete', () => {
    render(
      <LoginForm
        aria-label="Login"
        autoComplete="off"
        usernameAutoComplete="username"
        passwordAutoComplete="current-password"
      />
    );

    expect(screen.getByRole('form', { name: 'Login' })).toHaveAttribute('autocomplete', 'off');
    expect(screen.getByRole('textbox', { name: /username/i })).toHaveAttribute('autocomplete', 'username');
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('autocomplete', 'current-password');
  });

  test('preserves password autocomplete when showing and hiding the password', async () => {
    const user = userEvent.setup();
    render(<LoginForm passwordAutoComplete="new-password" isShowPasswordEnabled />);

    expect(screen.getByLabelText(/^password/i)).toHaveAttribute('type', 'password');
    expect(screen.getByLabelText(/^password/i)).toHaveAttribute('autocomplete', 'new-password');

    await user.click(screen.getByRole('button', { name: 'Show password' }));

    expect(screen.getByLabelText(/^password/i)).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText(/^password/i)).toHaveAttribute('autocomplete', 'new-password');

    await user.click(screen.getByRole('button', { name: 'Hide password' }));

    expect(screen.getByLabelText(/^password/i)).toHaveAttribute('type', 'password');
    expect(screen.getByLabelText(/^password/i)).toHaveAttribute('autocomplete', 'new-password');
  });
});
