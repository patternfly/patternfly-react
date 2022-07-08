import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import brandImg2 from '../../../../../react-core/src/components/LoginPage/examples/./brandImgColor2.svg';
import {
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginMainFooterLinksItem,
  LoginPage,
  ListItem
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import srcImportbasic from './react/basic.png';
import srcImportshowhidepassword from './react/showhide-password.png';
const pageData = {
  "id": "Login page",
  "section": "components",
  "source": "react",
  "slug": "/components/login-page/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/LoginPage/examples/LoginPage.md",
  "propComponents": [
    {
      "name": "LoginPage",
      "description": "",
      "props": [
        {
          "name": "backgroundImgAlt",
          "type": "string",
          "description": "Attribute that specifies the alt text of the background image for the LoginPage.",
          "defaultValue": "''"
        },
        {
          "name": "backgroundImgSrc",
          "type": "string | BackgroundImageSrcMap",
          "description": "Attribute that specifies the URL of the background image for the LoginPage",
          "defaultValue": "''"
        },
        {
          "name": "brandImgAlt",
          "type": "string",
          "description": "Attribute that specifies the alt text of the brand image for the LoginPage.",
          "defaultValue": "''"
        },
        {
          "name": "brandImgSrc",
          "type": "string",
          "description": "Attribute that specifies the URL of the brand image for the LoginPage",
          "defaultValue": "''"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of the LoginPage (e.g. <LoginPageForm>)",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the LoginPage.",
          "defaultValue": "''"
        },
        {
          "name": "footerListItems",
          "type": "React.ReactNode",
          "description": "Items rendered inside of the Footer List Component of the LoginPage",
          "defaultValue": "null"
        },
        {
          "name": "footerListVariants",
          "type": "ListVariant.inline",
          "description": "Adds list variant styles for the Footer List component of the LoginPage. The only current value is'inline'"
        },
        {
          "name": "forgotCredentials",
          "type": "React.ReactNode",
          "description": "Content rendered inside of Login Main Footer Band to display a forgot credentials link*",
          "defaultValue": "null"
        },
        {
          "name": "loginSubtitle",
          "type": "string",
          "description": "Subtitle for the Login Main Body Header of the LoginPage"
        },
        {
          "name": "loginTitle",
          "type": "string",
          "description": "Title for the Login Main Body Header of the LoginPage",
          "required": true
        },
        {
          "name": "signUpForAccountMessage",
          "type": "React.ReactNode",
          "description": "Content rendered inside of Login Main Footer Band to display a sign up for account message",
          "defaultValue": "null"
        },
        {
          "name": "socialMediaLoginContent",
          "type": "React.ReactNode",
          "description": "Content rendered inside of Social Media Login footer section .",
          "defaultValue": "null"
        },
        {
          "name": "textContent",
          "type": "string",
          "description": "Content rendered inside of the Text Component of the LoginPage",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "Login",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the main section of the login layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the login layout",
          "defaultValue": "''"
        },
        {
          "name": "footer",
          "type": "React.ReactNode",
          "description": "Footer component (e.g. <LoginFooter />)",
          "defaultValue": "null"
        },
        {
          "name": "header",
          "type": "React.ReactNode",
          "description": "Header component (e.g. <LoginHeader />)",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "LoginForm",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Login Main Body's Form",
          "defaultValue": "''"
        },
        {
          "name": "helperText",
          "type": "React.ReactNode",
          "description": "Content displayed in the Helper Text component *",
          "defaultValue": "null"
        },
        {
          "name": "helperTextIcon",
          "type": "React.ReactNode",
          "description": "Icon displayed to the left in the Helper Text",
          "defaultValue": "null"
        },
        {
          "name": "hidePasswordAriaLabel",
          "type": "string",
          "description": "Accessible label for the hide password button",
          "defaultValue": "'Hide password'"
        },
        {
          "name": "isLoginButtonDisabled",
          "type": "boolean",
          "description": "Flag indicating if the Login Button is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isRememberMeChecked",
          "type": "boolean",
          "description": "Flag indicating if the remember me Checkbox is checked.",
          "defaultValue": "false"
        },
        {
          "name": "isShowPasswordEnabled",
          "type": "boolean",
          "description": "Flag indicating if the user can toggle hiding the password",
          "defaultValue": "false"
        },
        {
          "name": "isValidPassword",
          "type": "boolean",
          "description": "Flag indicating if the Password is valid",
          "defaultValue": "true"
        },
        {
          "name": "isValidUsername",
          "type": "boolean",
          "description": "Flag indicating if the Username is valid",
          "defaultValue": "true"
        },
        {
          "name": "loginButtonLabel",
          "type": "string",
          "description": "Label for the Log in Button Input",
          "defaultValue": "'Log In'"
        },
        {
          "name": "noAutoFocus",
          "type": "boolean",
          "description": "Flag to indicate if the first dropdown item should not gain initial focus",
          "defaultValue": "false"
        },
        {
          "name": "onChangePassword",
          "type": "(value: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "Function that handles the onChange event for the Password",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onChangeRememberMe",
          "type": "(checked: boolean, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "Function that handles the onChange event for the Remember Me Checkbox",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onChangeUsername",
          "type": "(value: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "Function that handles the onChange event for the Username",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onLoginButtonClick",
          "type": "(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void",
          "description": "Function that is called when the Login button is clicked",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "passwordLabel",
          "type": "string",
          "description": "Label for the Password Input Field",
          "defaultValue": "'Password'"
        },
        {
          "name": "passwordValue",
          "type": "string",
          "description": "Value for the Password",
          "defaultValue": "''"
        },
        {
          "name": "rememberMeLabel",
          "type": "string",
          "description": "Label for the Remember Me Checkbox that indicates the user should be kept logged in.  If the label is not provided, the checkbox will not show.",
          "defaultValue": "''"
        },
        {
          "name": "showHelperText",
          "type": "boolean",
          "description": "Flag indicating the Helper Text is visible *",
          "defaultValue": "false"
        },
        {
          "name": "showPasswordAriaLabel",
          "type": "string",
          "description": "Accessible label for the show password button",
          "defaultValue": "'Show password'"
        },
        {
          "name": "usernameLabel",
          "type": "string",
          "description": "Label for the Username Input Field",
          "defaultValue": "'Username'"
        },
        {
          "name": "usernameValue",
          "type": "string",
          "description": "Value for the Username",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "LoginMainBody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Login Main Body",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Login Main Body",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "LoginMainHeader",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Login Main Header",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Login Main Header",
          "defaultValue": "''"
        },
        {
          "name": "subtitle",
          "type": "string",
          "description": "Subtitle that contains the Text, URL, and URL Text for the Login Main Header",
          "defaultValue": "''"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Title for the Login Main Header",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "LoginHeader",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the header of the login layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the login header",
          "defaultValue": "''"
        },
        {
          "name": "headerBrand",
          "type": "React.ReactNode",
          "description": "Header Brand component (e.g. <LoginHeader />)",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "LoginFooter",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the footer of the login layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional props are spread to the container <footer>",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "LoginMainFooter",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Login Main Footer",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Login Main Footer",
          "defaultValue": "''"
        },
        {
          "name": "forgotCredentials",
          "type": "React.ReactNode",
          "description": "Content rendered inside of Login Main Footer Band do display a forgot credentials link*",
          "defaultValue": "null"
        },
        {
          "name": "signUpForAccountMessage",
          "type": "React.ReactNode",
          "description": "Content rendered inside of Login Main Footer Band to display a sign up for account message",
          "defaultValue": "null"
        },
        {
          "name": "socialMediaLoginContent",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Login Main Footer as Social Media Links*",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "LoginFooterItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the footer Link Item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Footer Link Item"
        },
        {
          "name": "href",
          "type": "string",
          "description": "The URL of the Footer Link Item",
          "defaultValue": "'#'"
        },
        {
          "name": "target",
          "type": "string",
          "description": "Specifies where to open the linked document",
          "defaultValue": "'_blank'"
        }
      ]
    },
    {
      "name": "LoginMainFooterBandItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the footer Link Item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Footer Link Item",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "LoginMainFooterLinksItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the footer Link Item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Footer Link Item",
          "defaultValue": "''"
        },
        {
          "name": "href",
          "type": "string",
          "description": "HREF for Footer Link Item",
          "defaultValue": "''"
        },
        {
          "name": "linkComponent",
          "type": "React.ReactNode",
          "description": "Component used to render the Footer Link Item",
          "defaultValue": "'a'"
        },
        {
          "name": "linkComponentProps",
          "type": "any",
          "description": "Props for the LinkComponent"
        },
        {
          "name": "target",
          "type": "string",
          "description": "Target for Footer Link Item",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-login"
  ],
  "fullscreenExamples": [
    "Basic",
    "Show/hide password"
  ]
};
pageData.liveContext = {
  brandImg2,
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginMainFooterLinksItem,
  LoginPage,
  ListItem,
  ExclamationCircleIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasic} {...{"code":"import React from 'react';\nimport brandImg from './brandImgColor.svg';\nimport {\n  LoginFooterItem,\n  LoginForm,\n  LoginMainFooterBandItem,\n  LoginMainFooterLinksItem,\n  LoginPage,\n  BackgroundImageSrc,\n  ListItem\n} from '@patternfly/react-core';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nclass SimpleLoginPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showHelperText: false,\n      usernameValue: '',\n      isValidUsername: true,\n      passwordValue: '',\n      isValidPassword: true,\n      isRememberMeChecked: false\n    };\n\n    this.handleUsernameChange = value => {\n      this.setState({ usernameValue: value });\n    };\n\n    this.handlePasswordChange = passwordValue => {\n      this.setState({ passwordValue });\n    };\n\n    this.onRememberMeClick = () => {\n      this.setState({ isRememberMeChecked: !this.state.isRememberMeChecked });\n    };\n\n    this.onLoginButtonClick = event => {\n      event.preventDefault();\n      this.setState({ isValidUsername: !!this.state.usernameValue });\n      this.setState({ isValidPassword: !!this.state.passwordValue });\n      this.setState({ showHelperText: !this.state.usernameValue || !this.state.passwordValue });\n    };\n  }\n\n  render() {\n    const helperText = (\n      <React.Fragment>\n        <ExclamationCircleIcon />\n        &nbsp;Invalid login credentials.\n      </React.Fragment>\n    );\n\n    const socialMediaLoginContent = (\n      <React.Fragment>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Google' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 488 512\">\n            <path d=\"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Github' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\">\n            <path d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Dropbox' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 528 512\">\n            <path d=\"M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Facebook' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n            <path d=\"M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Gitlab' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <path d=\"M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n      </React.Fragment>\n    );\n\n    const signUpForAccountMessage = (\n      <LoginMainFooterBandItem>\n        Need an account? <a href=\"#\">Sign up.</a>\n      </LoginMainFooterBandItem>\n    );\n    const forgotCredentials = (\n      <LoginMainFooterBandItem>\n        <a href=\"#\">Forgot username or password?</a>\n      </LoginMainFooterBandItem>\n    );\n\n    const listItem = (\n      <React.Fragment>\n        <ListItem>\n          <LoginFooterItem href=\"#\">Terms of Use </LoginFooterItem>\n        </ListItem>\n        <ListItem>\n          <LoginFooterItem href=\"#\">Help</LoginFooterItem>\n        </ListItem>\n        <ListItem>\n          <LoginFooterItem href=\"#\">Privacy Policy</LoginFooterItem>\n        </ListItem>\n      </React.Fragment>\n    );\n\n    const loginForm = (\n      <LoginForm\n        showHelperText={this.state.showHelperText}\n        helperText={helperText}\n        helperTextIcon={<ExclamationCircleIcon />}\n        usernameLabel=\"Username\"\n        usernameValue={this.state.usernameValue}\n        onChangeUsername={this.handleUsernameChange}\n        isValidUsername={this.state.isValidUsername}\n        passwordLabel=\"Password\"\n        passwordValue={this.state.passwordValue}\n        onChangePassword={this.handlePasswordChange}\n        isValidPassword={this.state.isValidPassword}\n        rememberMeLabel=\"Keep me logged in for 30 days.\"\n        isRememberMeChecked={this.state.isRememberMeChecked}\n        onChangeRememberMe={this.onRememberMeClick}\n        onLoginButtonClick={this.onLoginButtonClick}\n        loginButtonLabel=\"Log in\"\n      />\n    );\n\n    const images = {\n      lg: '/assets/images/pfbg_1200.jpg',\n      sm: '/assets/images/pfbg_768.jpg',\n      sm2x: '/assets/images/pfbg_768@2x.jpg',\n      xs: '/assets/images/pfbg_576.jpg',\n      xs2x: '/assets/images/pfbg_576@2x.jpg'\n    };\n\n    return (\n      <LoginPage\n        footerListVariants=\"inline\"\n        brandImgSrc={brandImg2}\n        brandImgAlt=\"PatternFly logo\"\n        backgroundImgSrc={images}\n        backgroundImgAlt=\"Images\"\n        footerListItems={listItem}\n        textContent=\"This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.\"\n        loginTitle=\"Log in to your account\"\n        loginSubtitle=\"Enter your single sign-on LDAP credentials.\"\n        socialMediaLoginContent={socialMediaLoginContent}\n        signUpForAccountMessage={signUpForAccountMessage}\n        forgotCredentials={forgotCredentials}\n      >\n        {loginForm}\n      </LoginPage>\n    );\n  }\n}","title":"Basic","lang":"js","isFullscreen":true}}>
      
    </Example>,
  'Show/hide password': props => 
    <Example {...pageData} {...props} thumbnail={srcImportshowhidepassword} {...{"code":"import React from 'react';\nimport brandImg from './brandImgColor.svg';\nimport {\n  LoginFooterItem,\n  LoginForm,\n  LoginMainFooterBandItem,\n  LoginMainFooterLinksItem,\n  LoginPage,\n  BackgroundImageSrc,\n  ListItem\n} from '@patternfly/react-core';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nclass HideShowPasswordPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showHelperText: false,\n      usernameValue: '',\n      isValidUsername: true,\n      passwordValue: '',\n      isValidPassword: true,\n      isRememberMeChecked: false\n    };\n\n    this.handleUsernameChange = value => {\n      this.setState({ usernameValue: value });\n    };\n\n    this.handlePasswordChange = passwordValue => {\n      this.setState({ passwordValue });\n    };\n\n    this.onRememberMeClick = () => {\n      this.setState({ isRememberMeChecked: !this.state.isRememberMeChecked });\n    };\n\n    this.onLoginButtonClick = event => {\n      event.preventDefault();\n      this.setState({ isValidUsername: !!this.state.usernameValue });\n      this.setState({ isValidPassword: !!this.state.passwordValue });\n      this.setState({ showHelperText: !this.state.usernameValue || !this.state.passwordValue });\n    };\n  }\n\n  render() {\n    const helperText = (\n      <React.Fragment>\n        <ExclamationCircleIcon />\n        &nbsp;Invalid login credentials.\n      </React.Fragment>\n    );\n\n    const socialMediaLoginContent = (\n      <React.Fragment>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Google' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 488 512\">\n            <path d=\"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Github' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\">\n            <path d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Dropbox' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 528 512\">\n            <path d=\"M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Facebook' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n            <path d=\"M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n        <LoginMainFooterLinksItem href=\"#\" linkComponentProps={{ 'aria-label': 'Login with Gitlab' }}>\n          <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n            <path d=\"M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z\" />\n          </svg>\n        </LoginMainFooterLinksItem>\n      </React.Fragment>\n    );\n\n    const signUpForAccountMessage = (\n      <LoginMainFooterBandItem>\n        Need an account? <a href=\"#\">Sign up.</a>\n      </LoginMainFooterBandItem>\n    );\n    const forgotCredentials = (\n      <LoginMainFooterBandItem>\n        <a href=\"#\">Forgot username or password?</a>\n      </LoginMainFooterBandItem>\n    );\n\n    const listItem = (\n      <React.Fragment>\n        <ListItem>\n          <LoginFooterItem href=\"#\">Terms of Use </LoginFooterItem>\n        </ListItem>\n        <ListItem>\n          <LoginFooterItem href=\"#\">Help</LoginFooterItem>\n        </ListItem>\n        <ListItem>\n          <LoginFooterItem href=\"#\">Privacy Policy</LoginFooterItem>\n        </ListItem>\n      </React.Fragment>\n    );\n\n    const loginForm = (\n      <LoginForm\n        showHelperText={this.state.showHelperText}\n        helperText={helperText}\n        helperTextIcon={<ExclamationCircleIcon />}\n        usernameLabel=\"Username\"\n        usernameValue={this.state.usernameValue}\n        onChangeUsername={this.handleUsernameChange}\n        isValidUsername={this.state.isValidUsername}\n        passwordLabel=\"Password\"\n        passwordValue={this.state.passwordValue}\n        isShowPasswordEnabled\n        onChangePassword={this.handlePasswordChange}\n        isValidPassword={this.state.isValidPassword}\n        rememberMeLabel=\"Keep me logged in for 30 days.\"\n        isRememberMeChecked={this.state.isRememberMeChecked}\n        onChangeRememberMe={this.onRememberMeClick}\n        onLoginButtonClick={this.onLoginButtonClick}\n        loginButtonLabel=\"Log in\"\n      />\n    );\n\n    const images = {\n      lg: '/assets/images/pfbg_1200.jpg',\n      sm: '/assets/images/pfbg_768.jpg',\n      sm2x: '/assets/images/pfbg_768@2x.jpg',\n      xs: '/assets/images/pfbg_576.jpg',\n      xs2x: '/assets/images/pfbg_576@2x.jpg'\n    };\n\n    return (\n      <LoginPage\n        footerListVariants=\"inline\"\n        brandImgSrc={brandImg2}\n        brandImgAlt=\"PatternFly logo\"\n        backgroundImgSrc={images}\n        backgroundImgAlt=\"Images\"\n        footerListItems={listItem}\n        textContent=\"This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.\"\n        loginTitle=\"Log in to your account\"\n        loginSubtitle=\"Enter your single sign-on LDAP credentials.\"\n        socialMediaLoginContent={socialMediaLoginContent}\n        signUpForAccountMessage={signUpForAccountMessage}\n        forgotCredentials={forgotCredentials}\n      >\n        {loginForm}\n      </LoginPage>\n    );\n  }\n}","title":"Show/hide password","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Show/hide password"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsLoginPageReactDocs';
Component.pageData = pageData;

export default Component;
