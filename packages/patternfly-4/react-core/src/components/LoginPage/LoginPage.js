import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

import Login from './Login';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';

import LoginMainHeader from './LoginMainHeader';
import LoginMainBody from './LoginMainBody';
import LoginMainFooter from './LoginMainFooter';

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
  mainBrandImgSrc: PropTypes.string,
  /** Attribute that specifies the alt text of the brand image for the LoginPage. */
  mainBrandImgAlt: PropTypes.string,
  /** Attribute that specifies the URL of the background image for the LoginPage */
  mainBackgroundImgSrc: PropTypes.string,
  /** Attribute that specifies the alt text of the background image for the LoginPage. */
  mainBackgroundImgAlt: PropTypes.string,
  /** Content rendered inside of the Text Component of the LoginPage */
  mainTextContent: PropTypes.string,
  /** Items rendered inside of the List Component of the LoginPage */
  mainListItems: PropTypes.node,
  /** Adds list variant styles for the List component of the LoginPage */
  mainListVariants: PropTypes.oneOf(Object.values(LoginListVariant)),
  /** Language dropdown component for the Login Main Body Header of the LoginPage */
  loginLanguageDropdown: PropTypes.node,
  /** Title for the Login Main Body Header of the LoginPage */
  loginTitle: PropTypes.string.isRequired,
  /** Login subtitle that contains the Text, URL, and URL Text for the Login Main Body Header of the LoginPage */
  loginSubtitle: PropTypes.node,
  /** Content rendered inside of the Login Main Body Footer of the LoginPage */
  loginFooterContent: PropTypes.node
};

const defaultProps = {
  children: null,
  className: '',
  mainBrandImgSrc: '',
  mainBrandImgAlt: '',
  mainBackgroundImgSrc: '',
  mainBackgroundImgAlt: '',
  mainListItems: null,
  mainTextContent: '',
  mainListVariants: null,
  loginLanguageDropdown: null,
  loginSubtitle: null,
  loginFooterContent: null
};

const LoginPage = ({
  className,
  children,
  mainBrandImgSrc,
  mainBrandImgAlt,
  mainBackgroundImgSrc,
  mainBackgroundImgAlt,
  mainTextContent,
  mainListItems,
  mainListVariants,
  loginLanguageDropdown,
  loginTitle,
  loginSubtitle,
  loginFooterContent,
  ...props
}) => {
  const HeaderBrand = (
    <React.Fragment>
      <Brand src={mainBrandImgSrc} alt={mainBrandImgAlt} />
      <TextContent>
        <Text>{mainTextContent}</Text>
      </TextContent>
    </React.Fragment>
  );
  const Header = <LoginHeader headerBrand={HeaderBrand} />;
  const Footer = (
    <LoginFooter>
      <List variant={mainListVariants}>{mainListItems}</List>
    </LoginFooter>
  );

  return (
    <React.Fragment>
      {mainBackgroundImgSrc && <BackgroundImage src={mainBackgroundImgSrc} alt={mainBackgroundImgAlt} />}
      <Login header={Header} footer={Footer} {...props} className={css(className)}>
        <LoginMainHeader title={loginTitle} dropdown={loginLanguageDropdown} subtitle={loginSubtitle} />
        <LoginMainBody>{children}</LoginMainBody>
        {loginFooterContent && <LoginMainFooter>{loginFooterContent}</LoginMainFooter>}
      </Login>
    </React.Fragment>
  );
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default LoginPage;
