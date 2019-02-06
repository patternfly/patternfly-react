import englishMessages from './mocks/messages.en';
import frenchMessages from './mocks/messages.fr';
import images from './assets/img';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

const storyAction = (e, message) => {
  e.preventDefault();
  action(message)();
};

export const createLogoList = () => {
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

export const getManagedPageWithErrorsOnTopProps = () => {
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
        topErrorOnly: true,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
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
        onSubmit: (e, onError) => {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(() => onError('Returning some server error'), 2000);
        }
      }
    }
  };
};

export const getManagedPageProps = () => {
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
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
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
        onSubmit: (e, onError) => {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(() => onError('Returning some server error'), 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};

export const getBuildYourOwnPageProps = () => {
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
        validate: false,
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
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
        onSubmit: (e, onError) => {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(() => onError('Returning some server error'), 2000);
        }
      }
    }
  };
};

export const getManagedSocialLoginPageProps = () => {
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
        usernameField: {
          id: 'card_email',
          type: 'email',
          placeholder: card.usernameField.placeholder,
          errors: card.usernameField.errors
        },
        passwordField: {
          id: 'card_password',
          type: 'password',
          placeholder: card.passwordField.placeholder,
          minLength: 8,
          errors: card.passwordField.errors,
          warnings: card.passwordField.warnings
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
        onSubmit: (e, onError) => {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(() => onError('Returning some server error'), 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};

export const getBuildYourOwnSocialLoginPageProps = () => {
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
        validate: false,
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
        onSubmit: (e, onError) => {
          storyAction(e, 'Form was submitted successfully !');
          setTimeout(() => onError('Returning some server error'), 2000);
        }
      },
      social: {
        links: createLogoList()
      }
    }
  };
};
