import React from 'react';
import PropTypes from 'prop-types';
import Container from './components/LoginPageComponents/LoginPageContainer';
import Header from './components/LoginPageComponents/LoginPageHeader';
import Footer from './components/LoginPageComponents/LoginPageFooter';
import FooterLinks from './components/LoginPageComponents/LoginFooterLinks';
import LoginCard from './components/LoginCardComponents/LoginCard';
import WithTranslation from './components/LoginPageComponents/LoginPageWithTranslation';
import LoginPageAlert from './components/LoginPageComponents/LoginPageAlert';
import LoginPageLink from './components/LoginPageComponents/LoginPageLink';
import SocialLoginPage from './SocialLoginPage';
import SocialLoginPageContainer from './components/LoginPageComponents/SocialLoginPageContainer';
import BasicLoginPageLayout from './components/LoginPageComponents/BasicLoginPageLayout';

const LoginPagePattern = ({ container, header, footerLinks, card }) => (
  <LoginPage.Container {...container}>
    <LoginPage.Alert {...container.alert} />
    <LoginPage.BasicLayout>
      <LoginPage.Header {...header} />
      <LoginCard.BasicLayout>
        <LoginCard>
          <LoginCard.Header>
            <LoginCard.LanguagePicker
              selectedLanguage={card.selectedLanguage}
              availableLanguages={card.availableLanguages}
              onLanguageChange={card.onLanguageChange}
            />
            <h1>{card.title}</h1>
          </LoginCard.Header>
          <LoginCard.WithValidation {...card.form}>
            <LoginCard.Form />
          </LoginCard.WithValidation>
          <LoginCard.SignUp {...card.signUp} />
        </LoginCard>
        <LoginPage.Footer links={footerLinks} />
      </LoginCard.BasicLayout>
    </LoginPage.BasicLayout>
  </LoginPage.Container>
);

const LoginPage = props => (
  <LoginPage.WithTranslation {...props}>
    <LoginPage.Pattern />
  </LoginPage.WithTranslation>
);

LoginPage.Container = Container;
LoginPage.Header = Header;
LoginPage.Footer = Footer;
LoginPage.Card = LoginCard;
LoginPage.FooterLinks = FooterLinks;
LoginPage.WithTranslation = WithTranslation;
LoginPage.Alert = LoginPageAlert;
LoginPage.Pattern = LoginPagePattern;
LoginPage.Social = SocialLoginPage;
LoginPage.SocialContainer = SocialLoginPageContainer;
LoginPage.BasicLayout = BasicLoginPageLayout;
LoginPage.Link = LoginPageLink;

LoginPagePattern.propTypes = {
  container: PropTypes.shape({ ...LoginPage.Container.propTypes }),
  header: PropTypes.shape({ ...LoginPage.Header.propTypes }),
  card: PropTypes.shape({
    ...LoginCard.LanguagePicker.propTypes,
    ...LoginCard.Form.propTypes,
    ...LoginCard.SignUp.propTypes,
    ...LoginCard.RememberMe.propTypes,
    ...LoginCard.ForgotPassword.propTypes
  }),
  footerLinks: PropTypes.array
};

LoginPagePattern.defaultProps = {
  container: { ...LoginPage.Container.defaultProps },
  header: { ...LoginPage.Header.defaultProps },
  card: {
    ...LoginCard.LanguagePicker.defaultProps,
    ...LoginCard.Form.defaultProps,
    ...LoginCard.SignUp.defaultProps,
    ...LoginCard.RememberMe.defaultProps,
    ...LoginCard.ForgotPassword.defaultProps
  },
  footerLinks: [...LoginPage.Footer.defaultProps.links]
};

LoginPage.propTypes = { ...LoginPagePattern.propTypes };
LoginPage.defaultProps = { ...LoginPagePattern.defaultProps };

export default LoginPage;
