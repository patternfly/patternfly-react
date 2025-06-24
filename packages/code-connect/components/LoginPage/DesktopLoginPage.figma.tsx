import figma from '@figma/code-connect';
import { LoginPage } from '@patternfly/react-core';

// TODO: Map Figma component to these properties
// Documentation for LoginPage can be found at https://www.patternfly.org/components/login-page

figma.connect(
  LoginPage,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-4180',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <LoginPage
        brandImgSrc={brandImg}
        brandImgAlt="PatternFly logo"
        backgroundImgSrc="/assets/images/pfbg-icon.svg"
        footerListItems={listItem}
        textContent="This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users."
        loginTitle="Log in to your account"
        loginSubtitle="Enter your single sign-on LDAP credentials."
        socialMediaLoginContent={socialMediaLoginContent}
        socialMediaLoginAriaLabel="Log in with social media"
        signUpForAccountMessage={signUpForAccountMessage}
        forgotCredentials={forgotCredentialsprops.isInvalid}
      >
        {props.children}
      </LoginPage>
    )
  }
);
