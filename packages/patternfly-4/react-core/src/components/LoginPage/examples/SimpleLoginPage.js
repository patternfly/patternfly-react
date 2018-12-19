import React from 'react';
import brandImg from './pf_logo_color.svg';
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  LoginFooterItem,
  LoginForm,
  LoginPage,
  BackgroundImageSrc,
  ListItem
} from '@patternfly/react-core';

/**
 * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
 */

const images = {
  [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
  [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
  [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
  [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
  [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
  [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
};

class SimpleLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownOpen: false,
      usernameValue: '',
      passwordValue: '',
      isRememberMeChecked: false
    };
  }

  onDropDownToggle = isOpen => {
    this.setState({
      isDropDownOpen: isOpen
    });
  };

  onDropDownSelect = event => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    });
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

  render() {
    const { isDropDownOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="english">English</DropdownItem>,
      <DropdownItem key="spanish">Spanish</DropdownItem>
    ];
    const languageDropdown = (
      <Dropdown
        dropdownItems={dropdownItems}
        onSelect={this.onDropDownSelect}
        toggle={<DropdownToggle onToggle={this.onDropDownToggle}>English</DropdownToggle>}
        isOpen={isDropDownOpen}
      />
    );

    const signUpMessage = (
      <React.Fragment>
        Need an account? <a href="https://www.patternfly.org">Sign Up.</a>
      </React.Fragment>
    );

    const listItem = (
      <React.Fragment>
        <ListItem>
          <LoginFooterItem href="#">Terms of Use </LoginFooterItem>
        </ListItem>
        <ListItem>
          <LoginFooterItem href="#">Help</LoginFooterItem>
        </ListItem>
        <ListItem>
          <LoginFooterItem href="#">Privacy Policy</LoginFooterItem>
        </ListItem>
      </React.Fragment>
    );

    const loginForm = (
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
        rememberMeLabel="Keep me logged in for 30 days."
        isRememberMeChecked={this.state.isRememberMeChecked}
        onChangeRememberMe={this.onRememberMeClick}
        rememberMeAriaLabel="Remember me Checkbox"
      />
    );

    return (
      <LoginPage
        footerListVariants="inline"
        brandImgSrc={brandImg}
        brandImgAlt="PatternFly logo"
        backgroundImgSrc={images}
        backgroundImgAlt="Images"
        footerListItems={listItem}
        textContent="This is placeholder text only. Use this area to place any information or introductory message about your
        application that may be relevant to users."
        loginTitle="Log in to your account"
        signUpForAccountMessage={signUpMessage}
        languageSelector={languageDropdown}
      >
        {loginForm}
      </LoginPage>
    );
  }
}

export default SimpleLoginPage;
