import React from 'react';
import { Login, LoginFooter, LoginHeader, LoginHeaderBrand } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleLoginLayout extends React.Component {
  static title = 'Login Layout';
  static getContainerProps = getContainerProps;

  render() {
    const HeaderBrand = <LoginHeaderBrand>Header Brand</LoginHeaderBrand>;
    const Header = <LoginHeader headerBrand={HeaderBrand}>Header Text</LoginHeader>;
    const Footer = <LoginFooter>Footer</LoginFooter>;

    return <Login footer={Footer} header={Header}>Main</Login>;
  }
}

export default SimpleLoginLayout;
