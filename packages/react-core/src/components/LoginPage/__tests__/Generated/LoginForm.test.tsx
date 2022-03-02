/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { LoginForm } from '../../LoginForm';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('LoginForm should match snapshot (auto-generated)', () => {
  const view = render(
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
    />
  );
  expect(view.container).toMatchSnapshot();
});
