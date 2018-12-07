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
import { List } from '../List';

const LoginListVariant = {
  grid: 'grid',
  inline: 'inline'
};

const propTypes = {
  /** Anything that can be rendered inside of the LoginPage (e.g. <LoginPageForm>) */
  children: PropTypes.node,
  /** Additional classes added to the LoginPage. */
  className: PropTypes.string,
  /** Attribute that specifies the URL of the brand image for the LoginPage */
  brandImgSrc: PropTypes.string,
  /** Attribute that specifies the alt text of the brand image for the LoginPage. */
  brandImgAlt: PropTypes.string,
  /** Attribute that specifies the URL of the background image for the LoginPage */
  backgroundImgSrc: PropTypes.string,
  /** Attribute that specifies the alt text of the background image for the LoginPage. */
  backgroundImgAlt: PropTypes.string,
  /** Content rendered inside of the Text Component of the LoginPage */
  textContent: PropTypes.string,
  /** Items rendered inside of the Footer List Component of the LoginPage */
  footerListItems: PropTypes.node,
  /** Adds list variant styles for the Footer List component of the LoginPage.  Values are 'grid' or 'inline' */
  footerListVariants: PropTypes.oneOf(Object.values(LoginListVariant)),
  /** Language dropdown component for the Login Main Body Header of the LoginPage */
  languageSelector: PropTypes.node,
  /** Title for the Login Main Body Header of the LoginPage */
  loginTitle: PropTypes.string.isRequired,
  /** Login message that contains the Text, URL, and URL Text for the sign up for an account Login Message */
  signUpForAccountMessage: PropTypes.node,
  /** Content rendered inside of Social Media Login footer section . */
  socialMediaLoginContent: PropTypes.node
};

const defaultProps = {
  children: null,
  className: '',
  brandImgSrc: '',
  brandImgAlt: '',
  backgroundImgSrc: '',
  backgroundImgAlt: '',
  footerListItems: null,
  textContent: '',
  footerListVariants: null,
  languageSelector: null,
  signUpForAccountMessage: null,
  socialMediaLoginContent: null
};

const LoginPage = ({
  className,
  children,
  brandImgSrc,
  brandImgAlt,
  backgroundImgSrc,
  backgroundImgAlt,
  textContent,
  footerListItems,
  footerListVariants,
  languageSelector,
  loginTitle,
  signUpForAccountMessage,
  socialMediaLoginContent,
  ...props
}) => {
  const HeaderBrand = (
    <React.Fragment>
      <Brand src={brandImgSrc} alt={brandImgAlt} />
      <p>{textContent}</p>
    </React.Fragment>
  );
  const Header = <LoginHeader headerBrand={HeaderBrand} />;
  const Footer = (
    <LoginFooter>
      <List variant={footerListVariants}>{footerListItems}</List>
    </LoginFooter>
  );

  return (
    <React.Fragment>
      {backgroundImgSrc && <BackgroundImage src={backgroundImgSrc} alt={backgroundImgAlt} />}
      <Login header={Header} footer={Footer} {...props} className={css(className)}>
        <LoginMainHeader title={loginTitle} dropdown={languageSelector} subtitle={signUpForAccountMessage} />
        <LoginMainBody>{children}</LoginMainBody>
        {socialMediaLoginContent && <LoginMainFooter>{socialMediaLoginContent}</LoginMainFooter>}
      </Login>
    </React.Fragment>
  );
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default LoginPage;
