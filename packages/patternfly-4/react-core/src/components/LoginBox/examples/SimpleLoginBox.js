import React from 'react';
import { LoginBox, LoginBoxHeader, LoginBoxBody, LoginBoxFooter } from '@patternfly/react-core';

class SimpleLoginBox extends React.Component {
  static title = 'Simple LoginBox';

  render() {
    return (
      <LoginBox>
        <LoginBoxHeader>LoginBox Header</LoginBoxHeader>
        <LoginBoxBody>LoginBox Body</LoginBoxBody>
        <LoginBoxFooter>LoginBox Footer</LoginBoxFooter>
      </LoginBox>
    );
  }
}

export default SimpleLoginBox;
