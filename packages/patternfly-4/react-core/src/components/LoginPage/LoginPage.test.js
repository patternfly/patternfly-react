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

const subtitle = (
  <React.Fragment>
    Login to your account <a href="https://www.patternfly.org">Need an account?</a>
  </React.Fragment>
);

const props = {
  loginListVariants: 'inline',
  loginTitle: 'Log into your account',
  loginSubtitle: subtitle,
  loginLanguageDropdown: myDropdown,
  loginBrandImgSrc: 'Brand src',
  loginBrandImgAlt: 'Pf-logo',
  loginBackgroundImgSrc: 'Background src',
  loginBackgroundImgAlt: 'Pf-background',
  loginListItems: 'English',
  loginTextContent: 'This is placeholder text only.',
  loginFooterContent: 'Footer'
};

test('check loginpage example against snapshot', () => {
  const view = shallow(<LoginPage {...props} />);
  expect(view).toMatchSnapshot();
});
