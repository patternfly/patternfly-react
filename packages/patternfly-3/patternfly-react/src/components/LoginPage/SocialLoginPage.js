import React from 'react';
import LoginCard from './components/LoginCardComponents/LoginCard';
import LoginPage from './LoginPage';

const SocialLoginPagePattern = ({ container, header, footerLinks, card }) => (
  <LoginPage.SocialContainer {...container}>
    <LoginPage.Alert {...container.alert} />
    <LoginPage.Header {...header} />
    <LoginCard.Social>
      <LoginCard.Header>
        <LoginCard.LanguagePicker
          selectedLanguage={card.selectedLanguage}
          availableLanguages={card.availableLanguages}
          onLanguageChange={card.onLanguageChange}
        />
        <h1>{card.title}</h1>
      </LoginCard.Header>
      <LoginCard.SocialSection>
        <LoginCard.WithValidation {...card.form}>
          <LoginCard.Form />
        </LoginCard.WithValidation>
      </LoginCard.SocialSection>
      <LoginCard.SocialSection>
        <LoginCard.SocialColumns {...card.social} />
      </LoginCard.SocialSection>
      <LoginCard.SignUp {...card.signUp} />
    </LoginCard.Social>
    <LoginPage.Footer links={footerLinks} />
  </LoginPage.SocialContainer>
);

const SocialLoginPage = props => (
  <LoginPage.WithTranslation {...props}>
    <SocialLoginPagePattern />
  </LoginPage.WithTranslation>
);

const getLoginPage = props => LoginPage(props);

SocialLoginPage.Pattern = SocialLoginPagePattern;

SocialLoginPagePattern.propTypes = {
  ...getLoginPage.propTypes
};

SocialLoginPagePattern.defaultProps = {
  ...getLoginPage.defaultProps
};

export default SocialLoginPage;
