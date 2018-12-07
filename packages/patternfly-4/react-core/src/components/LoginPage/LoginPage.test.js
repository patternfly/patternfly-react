import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';
import { Dropdown, DropdownItem } from '../Dropdown';

const dropdownToggle = jest.fn();

const myDropdown = (
  <Dropdown toggle={dropdownToggle}>
    <DropdownItem>English</DropdownItem>
  </Dropdown>
);

const needAccountMesseage = (
  <React.Fragment>
    Login to your account <a href="https://www.patternfly.org">Need an account?</a>
  </React.Fragment>
);

const props = {
  footerListVariants: 'inline',
  brandImgSrc: 'Brand src',
  brandImgAlt: 'Pf-logo',
  backgroundImgSrc: 'Background src',
  backgroundImgAlt: 'Pf-background',
  footerListItems: 'English',
  textContent: 'This is placeholder text only.',
  loginTitle: 'Log into your account',
  signUpForAccountMessage: needAccountMesseage,
  languageSelector: myDropdown,
  socialMediaLoginContent: 'Footer'
};

test('check loginpage example against snapshot', () => {
  const view = shallow(<LoginPage {...props} />);
  expect(view).toMatchSnapshot();
});
