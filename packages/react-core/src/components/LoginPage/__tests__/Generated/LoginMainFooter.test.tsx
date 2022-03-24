/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { LoginMainFooter } from '../../LoginMainFooter';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('LoginMainFooter should match snapshot (auto-generated)', () => {
  const view = render(
    <LoginMainFooter
      className={"''"}
      children={<>ReactNode</>}
      socialMediaLoginContent={null}
      signUpForAccountMessage={null}
      forgotCredentials={null}
    />
  );
  expect(view.container).toMatchSnapshot();
});
