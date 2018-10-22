import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import LoginFooter from './LoginFooter';
import LoginHeader from './LoginHeader';
import LoginHeaderBrand from './LoginHeaderBrand';

test('Check login layout example against snapshot', () => {
  const HeaderBrand = <LoginHeaderBrand>Header Brand</LoginHeaderBrand>;
  const Header = <LoginHeader headerBrand={HeaderBrand}>Header Text</LoginHeader>;
  const Footer = <LoginFooter>Footer</LoginFooter>;
  const view = shallow(
    <Login footer={Footer} header={Header}>
      Main
    </Login>
  );
  expect(view).toMatchSnapshot();
});
