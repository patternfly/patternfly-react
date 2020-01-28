import * as React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../Login';
import { LoginFooter } from '../LoginFooter';
import { LoginHeader } from '../LoginHeader';

it('Login should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Login
      children={<>ReactNode</>}
			className={"''"}
			footer={null}
			header={null}
    />);
  expect(view).toMatchSnapshot();
});

test('Check login layout example against snapshot', () => {
  const Header = <LoginHeader headerBrand="HeaderBrand">Header Text</LoginHeader>;
  const Footer = <LoginFooter>Footer</LoginFooter>;
  const view = shallow(
    <Login footer={Footer} header={Header}>
      Main
    </Login>
  );
  expect(view).toMatchSnapshot();
});
