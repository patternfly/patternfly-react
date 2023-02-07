import * as React from 'react';
import { css } from '@patternfly/react-styles';

import { BackgroundImage, BackgroundImageSrcMap } from '../BackgroundImage';
import { Brand } from '../Brand';
import { List, ListVariant } from '../List';

import { Login } from './Login';
import { LoginHeader } from './LoginHeader';
import { LoginFooter } from './LoginFooter';
import { LoginMainHeader } from './LoginMainHeader';
import { LoginMainBody } from './LoginMainBody';
import { LoginMainFooter } from './LoginMainFooter';

export interface LoginPageProps extends React.HTMLProps<HTMLDivElement> {
  /** Anything that can be rendered inside of the login page (e.g. <LoginPageForm>) */
  children?: React.ReactNode;
  /** Additional classes added to the login page */
  className?: string;
  /** Attribute that specifies the URL of the brand image for the login page */
  brandImgSrc?: string;
  /** Attribute that specifies the alt text of the brand image for the login page */
  brandImgAlt?: string;
  /** Attribute that specifies the URL of the background image for the login page */
  backgroundImgSrc?: string | BackgroundImageSrcMap;
  /** Attribute that specifies the alt text of the background image for the login page */
  backgroundImgAlt?: string;
  /** Content rendered inside of the text component of the login page */
  textContent?: string;
  /** Items rendered inside of the footer list component of the login page */
  footerListItems?: React.ReactNode;
  /** Adds list variant styles for the footer list component of the login page. The only current value is'inline' */
  footerListVariants?: ListVariant.inline;
  /** Title for the login main body header of the login page */
  loginTitle: string;
  /** Subtitle for the login main body header of the login page */
  loginSubtitle?: string;
  /** Header utilities for the login main body header of the login page */
  headerUtilities?: React.ReactNode;
  /** Content rendered inside of login main footer band to display a sign up for account message */
  signUpForAccountMessage?: React.ReactNode;
  /** Content rendered inside of login main footer band to display a forgot credentials link. */
  forgotCredentials?: React.ReactNode;
  /** Content rendered inside of social media login footer section */
  socialMediaLoginContent?: React.ReactNode;
}

export const LoginPage: React.FunctionComponent<LoginPageProps> = ({
  children = null,
  className = '',
  brandImgSrc = '',
  brandImgAlt = '',
  backgroundImgSrc = '',
  backgroundImgAlt = '',
  footerListItems = null,
  textContent = '',
  footerListVariants,
  loginTitle,
  loginSubtitle,
  headerUtilities,
  signUpForAccountMessage = null,
  forgotCredentials = null,
  socialMediaLoginContent = null,
  ...props
}: LoginPageProps) => {
  const HeaderBrand = (
    <React.Fragment>
      <Brand src={brandImgSrc} alt={brandImgAlt} />
    </React.Fragment>
  );
  const Header = <LoginHeader headerBrand={HeaderBrand} />;
  const Footer = (
    <LoginFooter>
      <p>{textContent}</p>
      <List variant={footerListVariants}>{footerListItems}</List>
    </LoginFooter>
  );

  return (
    <React.Fragment>
      {backgroundImgSrc && <BackgroundImage src={backgroundImgSrc} alt={backgroundImgAlt} />}
      <Login header={Header} footer={Footer} className={css(className)} {...props}>
        <LoginMainHeader title={loginTitle} subtitle={loginSubtitle} headerUtilities={headerUtilities} />
        <LoginMainBody>{children}</LoginMainBody>
        {(socialMediaLoginContent || forgotCredentials || signUpForAccountMessage) && (
          <LoginMainFooter
            socialMediaLoginContent={socialMediaLoginContent}
            forgotCredentials={forgotCredentials}
            signUpForAccountMessage={signUpForAccountMessage}
          />
        )}
      </Login>
    </React.Fragment>
  );
};
LoginPage.displayName = 'LoginPage';
