import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

import Login from './Login';
import LoginHeader from './LoginHeader';
import LoginHeaderBrand from './LoginHeaderBrand';
import LoginFooter from './LoginFooter';

import LoginBox from './LoginBox';
import LoginBoxHeader from './LoginBoxHeader';
import LoginBoxBody from './LoginBoxBody';
import LoginBoxFooter from './LoginBoxFooter';

import { BackgroundImage } from '../BackgroundImage';
import { Brand } from '../Brand';
import { Text, TextContent } from '../Text';
import { List } from '../List';

const LoginListVariant = {
  grid: 'grid',
  inline: 'inline'
};

const propTypes = {
  /** Anything that can be rendered inside of the LoginPage */
  children: PropTypes.node,
  /** Additional classes added to the LoginPage. */
  className: PropTypes.string,
  /** Attribute that specifies the URL of the brand image for the LoginPage */
  loginBrandImgSrc: PropTypes.string,
  /** Attribute that specifies the alt text of the brand image for the LoginPage. */
  loginBrandImgAlt: PropTypes.string,
  /** Attribute that specifies the URL of the background image for the LoginPage */
  loginBackgroundImgSrc: PropTypes.string,
  /** Attribute that specifies the alt text of the background image for the LoginPage. */
  loginBackgroundImgAlt: PropTypes.string,
  /** Language dropdown component for the LoginBox Header of the LoginPage */
  loginLanguageDropdown: PropTypes.node,
  /** Content rendered inside of the Text Component of the LoginPage */
  loginTextContent: PropTypes.string,
  /** Title for the LoginBox Header of the LoginPage */
  loginTitle: PropTypes.string.isRequired,
  /** Items rendered inside of the List Component of the LoginPage */
  loginListItems: PropTypes.node,
  /** Login subtitle that contains the Text, URL, and URL Text for the LoginBox Header of the LoginPage */
  loginSubtitle: PropTypes.node,
  /** Content rendered inside of the LoginBox Footer of the LoginPage */
  loginFooterContent: PropTypes.node,
  /** Adds list variant styles for the List component of the LoginPage */
  loginListVariants: PropTypes.oneOf(Object.values(LoginListVariant))
};

const defaultProps = {
  children: null,
  className: '',
  loginBrandImgSrc: '',
  loginBrandImgAlt: '',
  loginBackgroundImgSrc: '',
  loginBackgroundImgAlt: '',
  loginLanguageDropdown: null,
  loginTextContent: '',
  loginListItems: null,
  loginSubtitle: null,
  loginFooterContent: null,
  loginListVariants: null
};

const LoginPage = ({
  className,
  children,
  loginBrandImgSrc,
  loginBrandImgAlt,
  loginBackgroundImgSrc,
  loginBackgroundImgAlt,
  loginLanguageDropdown,
  loginTitle,
  loginSubtitle,
  loginTextContent,
  loginListItems,
  loginFooterContent,
  loginListVariants,
  ...props
}) => {
  const HeaderBrand = (
    <React.Fragment>
      <LoginHeaderBrand>
        <Brand src={loginBrandImgSrc} alt={loginBrandImgAlt} />
      </LoginHeaderBrand>
      <TextContent>
        <Text>{loginTextContent}</Text>
      </TextContent>
    </React.Fragment>
  );
  const Header = <LoginHeader headerBrand={HeaderBrand} />;
  const Footer = (
    <LoginFooter>
      <List variant={loginListVariants}>{loginListItems}</List>
    </LoginFooter>
  );

  return (
    <React.Fragment>
      <BackgroundImage src={loginBackgroundImgSrc} alt={loginBackgroundImgAlt} />
      <Login header={Header} footer={Footer} {...props} className={css(className)}>
        <LoginBox>
          <LoginBoxHeader title={loginTitle} dropdown={loginLanguageDropdown} subtitle={loginSubtitle} />
          <LoginBoxBody>{children}</LoginBoxBody>
          {loginFooterContent && <LoginBoxFooter>{loginFooterContent}</LoginBoxFooter>}
        </LoginBox>
      </Login>
    </React.Fragment>
  );
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default LoginPage;
