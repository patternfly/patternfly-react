import React from 'react';
import { LoginForm } from '@patternfly/react-core';

class SimpleLoginForm extends React.Component {
  static title = 'Simple Login Form';

  state = {
    usernameValue: '',
    passwordValue: '',
    isRememberMeChecked: false
  };

  handleUsernameChange = value => {
    this.setState({ usernameValue: value });
  };

  handlePasswordChange = passwordValue => {
    this.setState({ passwordValue });
  };

  onRememberMeClick = () => {
    this.setState({ isRememberMeChecked: !this.state.isRememberMeChecked });
  };

  onLoginBtnClick = () => {
    this.setState({ passwordValue: '', usernameValue: '', isRememberMeChecked: false });
  };

  render() {
    return (
      <LoginForm
        usernameLabel="Username"
        usernameValue={this.state.usernameValue}
        onChangeUsername={this.handleUsernameChange}
        usernameHelperTextInvalid="Unknown Username"
        isValidUsername
        passwordLabel="Password"
        passwordValue={this.state.passwordValue}
        onChangePassword={this.handlePasswordChange}
        passwordHelperTextInvalid="Password Invalid"
        isValidPassword
        rememberMeLabel="Keep Me logged in for 30 days."
        isRememberMeChecked={this.state.isRememberMeChecked}
        onChangeRememberMe={this.onRememberMeClick}
        rememberMeAriaLabel="Remember me Checkbox"
        onLoginButtonClick={this.onLoginBtnClick}
      />
    );
  }
}

export default SimpleLoginForm;
