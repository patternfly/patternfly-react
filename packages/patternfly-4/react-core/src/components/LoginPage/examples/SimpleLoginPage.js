import React from 'react';
import brandImg from './pf_logo_color.svg';
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  LoginPage,
  BackgroundImageSrc,
  ListItem
} from '@patternfly/react-core';

/**
 * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
 */

const images = {
  [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
  [BackgroundImageSrc.md]: '/assets/images/pfbg_992.jpg',
  [BackgroundImageSrc.md2x]: '/assets/images/pfbg_992@2x.jpg',
  [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
  [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
  [BackgroundImageSrc.xl]: '/assets/images/pfbg_2000.jpg',
  [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
  [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
  [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
};

class SimpleLoginPage extends React.Component {
  static title = 'Simple LoginPage';

  constructor(props) {
    super(props);
    this.state = {
      isDropDownOpen: false
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

    const subtitle = (
      <React.Fragment>
        Need an account? <a href="https://www.patternfly.org">Sign Up.</a>
      </React.Fragment>
    );

    const listItem = (
      <React.Fragment>
        <ListItem>
          <a href="#">Terms of Use</a>
        </ListItem>
        <ListItem>
          <a href="#">Help</a>
        </ListItem>
        <ListItem>
          <a href="#">Privacy Policy</a>
        </ListItem>
      </React.Fragment>
    );
    return (
      <LoginPage
        loginListVariants="inline"
        loginTitle="Login to your account"
        loginLanguageDropdown={languageDropdown}
        loginBrandImgSrc={brandImg}
        loginBrandImgAlt="pf-logo"
        loginBackgroundImgSrc={images}
        loginBackgroundImgAlt="Images"
        loginListItems={listItem}
        loginSubtitle={subtitle}
        loginTextContent="This is placeholder text only. Use this area to place any information or introductory message about your
          application that may be relevant to users."
      />
    );
  }
}

export default SimpleLoginPage;
