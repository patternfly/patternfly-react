import { Fragment } from 'react';
import { render } from '@testing-library/react';

import { LoginPage } from '../LoginPage';
import { ListVariant } from '../../List';

const needAccountMessage = (
  <Fragment>
    Login to your account <a href="https://www.patternfly.org">Need an account?</a>
  </Fragment>
);

test('check loginpage example against snapshot', () => {
  const { asFragment } = render(
    <LoginPage
      footerListVariants={ListVariant.inline}
      brandImgSrc="Brand src"
      brandImgAlt="Pf-logo"
      backgroundImgSrc="Background src"
      footerListItems="English"
      textContent="This is placeholder text only."
      loginTitle="Log into your account"
      signUpForAccountMessage={needAccountMessage}
      socialMediaLoginContent="Footer"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('brand is absent without brandImgSrc and brandImgProps.src', () => {
  const { asFragment } = render(<LoginPage loginTitle="Log into your account" />);
  expect(asFragment()).toMatchSnapshot();
});

test('brand is present with brandImgSrc prop', () => {
  const { asFragment } = render(<LoginPage brandImgSrc="Brand src" loginTitle="Log into your account" />);
  expect(asFragment()).toMatchSnapshot();
});

test('brandImgProps successfully renders brand with props', () => {
  const { asFragment } = render(
    <LoginPage brandImgProps={{ src: 'Brand src', alt: 'Pf-logo' }} loginTitle="Log into your account" />
  );
  expect(asFragment()).toMatchSnapshot();
});
