import React from 'react';
import brandImg from '../../assets/PF-IconLogo.svg';
import {
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginMainFooterLinksItem,
  LoginPage,
  ListItem,
  ListVariant,
  MenuToggle,
  MenuToggleElement,
  Select,
  SelectList,
  SelectOption,
  Button
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import GoogleIcon from '@patternfly/react-icons/dist/esm/icons/google-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import DropboxIcon from '@patternfly/react-icons/dist/esm/icons/dropbox-icon';
import FacebookSquareIcon from '@patternfly/react-icons/dist/esm/icons/facebook-square-icon';
import GitlabIcon from '@patternfly/react-icons/dist/esm/icons/gitlab-icon';

export const LoginPageLanguageSelect: React.FunctionComponent = () => {
  const [showHelperText, setShowHelperText] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [isValidUsername, setIsValidUsername] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [isRememberMeChecked, setIsRememberMeChecked] = React.useState(false);
  const [isHeaderUtilsOpen, setIsHeaderUtilsOpen] = React.useState(false);
  const [selectedHeaderUtils, setSelectedHeaderUtils] = React.useState('English');

  /** i18n object is used to simulate i18n integration of native language translation */
  const i18n = {
    English: 'English',
    Mandarin: '普通话',
    Hindi: 'हिन्दी',
    Spanish: 'Español',
    Portuguese: 'Português',
    Arabic: 'عربى',
    Bengali: 'বাংলা'
  };

  const headerUtilsOptions = (
    <SelectList>
      <SelectOption key={0} value={i18n.English}>
        {i18n.English}
      </SelectOption>
      <SelectOption key={1} value={i18n.Mandarin}>
        {i18n.Mandarin}
      </SelectOption>
      <SelectOption key={2} value={i18n.Hindi}>
        {i18n.Hindi}
      </SelectOption>
      <SelectOption key={3} value={i18n.Spanish}>
        {i18n.Spanish}
      </SelectOption>
      <SelectOption key={4} value={i18n.Portuguese}>
        {i18n.Portuguese}
      </SelectOption>
      <SelectOption key={5} value={i18n.Arabic}>
        {i18n.Arabic}
      </SelectOption>
      <SelectOption key={6} value={i18n.Bengali}>
        {i18n.Bengali}
      </SelectOption>
    </SelectList>
  );

  const onHeaderUtilsSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | React.ChangeEvent<Element>,
    value: string
  ) => {
    setSelectedHeaderUtils(value);
    setIsHeaderUtilsOpen(false);
  };

  const headerUtils = (
    <Select
      aria-label="Select Language"
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          onClick={() => setIsHeaderUtilsOpen(!isHeaderUtilsOpen)}
          isExpanded={isHeaderUtilsOpen}
        >
          {selectedHeaderUtils}
        </MenuToggle>
      )}
      onSelect={onHeaderUtilsSelect}
      onOpenChange={(isOpen) => setIsHeaderUtilsOpen(isOpen)}
      selected={selectedHeaderUtils}
      isOpen={isHeaderUtilsOpen}
    >
      {headerUtilsOptions}
    </Select>
  );

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
    <React.Fragment>
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
    </React.Fragment>
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
    <React.Fragment>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Terms of Use </LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Help</LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Privacy Policy</LoginFooterItem>
      </ListItem>
    </React.Fragment>
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
      headerUtilities={headerUtils}
      socialMediaLoginContent={socialMediaLoginContent}
      socialMediaLoginAriaLabel="Log in with social media"
      signUpForAccountMessage={signUpForAccountMessage}
      forgotCredentials={forgotCredentials}
    >
      {loginForm}
    </LoginPage>
  );
};
