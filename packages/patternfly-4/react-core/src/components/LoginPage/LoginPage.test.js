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
  mainListVariants: 'inline',
  mainBrandImgSrc: 'Brand src',
  mainBrandImgAlt: 'Pf-logo',
  mainBackgroundImgSrc: 'Background src',
  mainBackgroundImgAlt: 'Pf-background',
  mainListItems: 'English',
  mainTextContent: 'This is placeholder text only.',
  loginTitle: 'Log into your account',
  loginSubtitle: subtitle,
  loginLanguageDropdown: myDropdown,
  loginFooterContent: 'Footer'
};

test('check loginpage example against snapshot', () => {
  const view = shallow(<LoginPage {...props} />);
  expect(view).toMatchSnapshot();
});
