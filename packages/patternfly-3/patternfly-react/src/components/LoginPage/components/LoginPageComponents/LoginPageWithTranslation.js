import React from 'react';
import PropTypes from 'prop-types';
import LoginCard from '../LoginCardComponents/LoginCard';
import LoginCardHeader from '../LoginCardComponents/LoginCardHeader';
import LoginPageContainer from './LoginPageContainer';

class LoginPageWithTranslation extends React.Component {
  constructor(props) {
    super(props);
    const { selectedLanguage, availableLanguages } = props.card;
    this.state = {
      language:
        (selectedLanguage && selectedLanguage.value) ||
        (availableLanguages && availableLanguages[0] && availableLanguages[0].value),
      passwordValue: '',
      usernameValue: '',
      translatedProps: {}
    };
  }

  onLanguageChange = e => {
    const newLanguage = e.target.attributes.value.value;
    if (!newLanguage || this.state.language === newLanguage) {
      return;
    }
    this.switchToLanguage(newLanguage);
  };

  onPasswordChange = e => {
    const { card } = this.props;
    card.form.passwordField.onChange && card.form.passwordField.onChange(e);
    this.setState({ passwordValue: e.target.value });
  };

  onUsernameChange = e => {
    const { card } = this.props;
    card.form.usernameField.onChange && card.form.usernameField.onChange(e);
    this.setState({ usernameValue: e.target.value });
  };

  getDefaultPropsToPass = () => {
    const { card } = this.props;
    return {
      card: {
        ...card,
        onLanguageChange: e => this.onLanguageChange(e),
        form: {
          ...card.form,
          usernameField: {
            ...card.form.usernameField,
            value: this.state.usernameValue,
            onChange: e => this.onUsernameChange(e)
          },
          passwordField: {
            ...card.form.passwordField,
            value: this.state.passwordValue,
            onChange: e => this.onPasswordChange(e)
          }
        }
      }
    };
  };

  switchToLanguage = language => {
    const { container, card, header } = this.props;
    const languageFile = container.translations[language];
    const translatedProps = {
      ...this.props,
      container: {
        ...container,
        alert: {
          ...header.alert,
          message: languageFile.header.alert
        }
      },
      header: {
        ...header,
        logoTitle: languageFile.header.logo,
        caption: languageFile.header.caption
      },
      footerLinks: languageFile.footerLinks,
      card: {
        ...card,
        title: languageFile.card.header.title,
        selectedLanguage: languageFile.card.header.selectedLanguage,
        availableLanguages: languageFile.card.header.availableLanguages,
        onLanguageChange: e => this.onLanguageChange(e),
        signUp: {
          label: languageFile.card.signUp.label,
          link: {
            ...card.signUp.link,
            children: languageFile.card.signUp.link.label
          }
        },
        form: {
          ...card.form,
          submitError: languageFile.card.form.error,
          usernameField: {
            ...card.form.usernameField,
            onChange: e => this.onUsernameChange(e),
            value: this.state.usernameValue,
            placeholder: languageFile.card.usernameField.placeholder,
            errors: languageFile.card.usernameField.errors
          },
          passwordField: {
            ...card.form.passwordField,
            onChange: e => this.onPasswordChange(e),
            value: this.state.passwordValue,
            placeholder: languageFile.card.passwordField.placeholder,
            errors: languageFile.card.passwordField.errors,
            warnings: languageFile.card.passwordField.warnings
          },
          submitText: languageFile.card.form.submitText,
          rememberMe: {
            ...card.rememberMe,
            label: languageFile.card.rememberMe
          },
          forgotPassword: {
            ...card.forgotPassword,
            label: languageFile.card.forgotPassword
          }
        }
      }
    };

    this.setState({ translatedProps, language });
  };

  render() {
    const newProps = {
      ...this.props,
      ...this.getDefaultPropsToPass(),
      ...this.state.translatedProps
    };

    return React.cloneElement(this.props.children, newProps);
  }
}

LoginPageWithTranslation.propTypes = {
  card: PropTypes.shape({
    ...LoginCard.LanguagePicker.propTypes,
    ...LoginCard.Form.propTypes,
    ...LoginCard.SignUp.propTypes,
    ...LoginCard.RememberMe.propTypes,
    ...LoginCard.ForgotPassword.propTypes
  }),
  header: PropTypes.shape({ ...LoginCardHeader.propTypes }),
  container: PropTypes.shape({ ...LoginPageContainer.propTypes }),
  children: PropTypes.node.isRequired
};

LoginPageWithTranslation.defaultProps = {
  card: {
    ...LoginCard.LanguagePicker.defaultProps,
    ...LoginCard.Form.defaultProps,
    ...LoginCard.SignUp.defaultProps,
    ...LoginCard.RememberMe.defaultProps,
    ...LoginCard.ForgotPassword.defaultProps
  },
  header: { ...LoginCardHeader.defaultProps },
  container: { ...LoginPageContainer.defaultProps }
};

export default LoginPageWithTranslation;
