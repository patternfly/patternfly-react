import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY, DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import LoginPage from './LoginPage';
import englishMessages from './mocks/messages.en';
import frenchMessages from './mocks/messages.fr';
import images from './assets/img';
import { name } from '../../../package.json';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.APPLICATION_FRAMEWORK}/Login Page`,
  module
);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Login Page',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_APP_FRAMEWORK}login-page`
  })
);

const storyAction = (e, message) => {
  e.preventDefault();
  action(message)();
};

const createProps = () => {
  const { header, footerLinks, card } = englishMessages;
  footerLinks.forEach(link => {
    link.onClick = e => storyAction(e, 'Footer Link was pressed');
  });
  return {
    container: {
      backgroundUrl: images.background,
      translations: { en: englishMessages, fr: frenchMessages },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: e => storyAction(e, 'Notification was dismissed'),
        show: true
      }
    },
    header: {
      logoSrc: images.brand,
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks,
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          children: card.signUp.link.label,
          href: '#',
          onClick: e => storyAction(e, 'sign up was clicked')
        }
      },
      form: {
        validate: true,
        submitError: card.form.error,
        showError: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors,
          error: card.usernameField.errors.invalid,
          showError: true
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings,
          warning: card.passwordField.warnings.capsLock,
          showWarning: true
        },
        additionalFields: null,
        rememberMe: {
          label: card.rememberMe,
          onClick: e => action('remember me checkbox was clicked')()
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: e => storyAction(e, 'Forgot password was clicked')
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: e => storyAction(e, 'Form was submitted')
      },
      social: {
        links: createLogoList()
      }
    }
  };
};

const createLogoList = () => {
  const socialLinkClick = e => storyAction(e, 'Social Link was clicked');
  const {
    google,
    facebook,
    linkedin,
    github,
    instagram,
    stackExchange,
    twitter,
    git,
    openID,
    dropbox,
    fedora,
    skype
  } = images;
  return [
    {
      src: google,
      alt: 'Google',
      text: 'Google',
      onClick: e => socialLinkClick(e)
    },
    {
      src: facebook,
      alt: 'Facebook',
      text: 'Facebook',
      onClick: e => socialLinkClick(e)
    },
    {
      src: linkedin,
      alt: 'Linkedin',
      text: 'Linkedin',
      onClick: e => socialLinkClick(e)
    },
    {
      src: github,
      alt: 'Github',
      text: 'Github',
      onClick: e => socialLinkClick(e)
    },
    {
      src: instagram,
      alt: 'Instagram',
      text: 'Instagram',
      onClick: e => socialLinkClick(e)
    },
    {
      src: git,
      alt: 'Git',
      text: 'Git',
      onClick: e => socialLinkClick(e)
    },
    {
      src: openID,
      alt: 'OpenID',
      text: 'OpenID',
      onClick: e => socialLinkClick(e)
    },
    {
      src: dropbox,
      alt: 'Dropbox',
      text: 'Dropbox',
      onClick: e => socialLinkClick(e)
    },
    {
      src: fedora,
      alt: 'Fedora',
      text: 'Fedora',
      onClick: e => socialLinkClick(e)
    },
    {
      src: skype,
      alt: 'Skype',
      text: 'Skype',
      onClick: e => socialLinkClick(e)
    },
    {
      src: twitter,
      alt: 'Twitter',
      text: 'Twitter',
      onClick: e => socialLinkClick(e)
    },
    {
      src: stackExchange,
      alt: 'StackExchange',
      text: 'StackExchange',
      onClick: e => socialLinkClick(e)
    }
  ];
};

stories.addWithInfo('Managed Basic Login Page', () => <LoginPage {...createProps()} />);

stories.addWithInfo('Build Your own Basic Login Page', () => {
  const props = { ...createProps() };
  props.card.form.validate = false;
  return LoginPage.Pattern(props);
});

stories.addWithInfo('Managed Social Login Page', () => {
  const logoListCopy = createLogoList();
  const listSize = number('Social List Size', 12);
  const socialLinks = logoListCopy.splice(0, listSize);

  const props = { ...createProps() };
  props.card.social.links = socialLinks;

  return <LoginPage.Social {...props} />;
});

stories.addWithInfo('Build Your own Social Login Page', () => {
  const logoListCopy = createLogoList();
  const listSize = number('Social List Size', 12);
  const socialLinks = logoListCopy.splice(0, listSize);

  const props = { ...createProps() };
  props.card.social.links = socialLinks;
  props.card.form.validate = false;
  return LoginPage.Social.Pattern(props);
});
