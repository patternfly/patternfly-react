import { Fragment, useState } from 'react';
import brandImg from '../../assets/PF-IconLogo.svg';
import {
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginMainFooterLinksItem,
  LoginPage,
  ListItem,
  ListVariant,
  Button
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import GoogleIcon from '@patternfly/react-icons/dist/esm/icons/google-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import DropboxIcon from '@patternfly/react-icons/dist/esm/icons/dropbox-icon';
import FacebookSquareIcon from '@patternfly/react-icons/dist/esm/icons/facebook-square-icon';
import GitlabIcon from '@patternfly/react-icons/dist/esm/icons/gitlab-icon';

export const SimpleLoginPage: React.FunctionComponent = () => {
  const [showHelperText, setShowHelperText] = useState(false);
  const [username, setUsername] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  const handleUsernameChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setPassword(value);
  };

  const onRememberMeClick = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  const onLoginButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsValidUsername(!!username);
    setIsValidPassword(!!password);
    setShowHelperText(!username || !password);
  };

  const socialMediaLoginContent = (
    <Fragment>
      <LoginMainFooterLinksItem>
        <Button variant="plain" aria-label="Login with Google" icon={<GoogleIcon />} />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem>
        <Button variant="plain" aria-label="Login with Github" icon={<GithubIcon />} />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem>
        <Button variant="plain" aria-label="Login with Dropbox" icon={<DropboxIcon />} />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem>
        <Button variant="plain" aria-label="Login with Facebook" icon={<FacebookSquareIcon />} />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem>
        <Button variant="plain" aria-label="Login with Gitlab" icon={<GitlabIcon />} />
      </LoginMainFooterLinksItem>
    </Fragment>
  );

  const signUpForAccountMessage = (
    <LoginMainFooterBandItem>
      Need an account? <a href="https://www.patternfly.org/">Sign up.</a>
    </LoginMainFooterBandItem>
  );

  const forgotCredentials = (
    <LoginMainFooterBandItem>
      <a href="https://www.patternfly.org/">Forgot username or password?</a>
    </LoginMainFooterBandItem>
  );

  const listItem = (
    <Fragment>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Terms of Use </LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Help</LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Privacy Policy</LoginFooterItem>
      </ListItem>
    </Fragment>
  );

  const loginForm = (
    <LoginForm
      showHelperText={showHelperText}
      helperText="Invalid login credentials."
      helperTextIcon={<ExclamationCircleIcon />}
      usernameLabel="Username"
      usernameValue={username}
      onChangeUsername={handleUsernameChange}
      isValidUsername={isValidUsername}
      passwordLabel="Password"
      passwordValue={password}
      onChangePassword={handlePasswordChange}
      isValidPassword={isValidPassword}
      rememberMeLabel="Keep me logged in for 30 days."
      isRememberMeChecked={isRememberMeChecked}
      onChangeRememberMe={onRememberMeClick}
      onLoginButtonClick={onLoginButtonClick}
      loginButtonLabel="Log in"
    />
  );

  return (
    <LoginPage
      footerListVariants={ListVariant.inline}
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
      forgotCredentials={forgotCredentials}
    >
      {loginForm}
    </LoginPage>
  );
};
