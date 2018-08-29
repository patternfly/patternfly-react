import React from 'react';
import { mount } from 'enzyme';
import englishMessages from './mocks/messages.en';
import frenchMessages from './mocks/messages.fr';
import { SocialLoginPage } from './index';

const mockFunction = jest.fn();
const logoList = [
  {
    alt: 'Google',
    text: 'Google',
    onClick: mockFunction
  },
  {
    alt: 'Facebook',
    text: 'Facebook',
    onClick: mockFunction
  },
  {
    alt: 'Linkedin',
    text: 'Linkedin',
    onClick: mockFunction
  },
  {
    alt: 'Github',
    text: 'Github',
    onClick: mockFunction
  },
  {
    alt: 'Instagram',
    text: 'Instagram',
    onClick: mockFunction
  },
  {
    alt: 'Git',
    text: 'Git',
    onClick: mockFunction
  },
  {
    alt: 'OpenID',
    text: 'OpenID',
    onClick: mockFunction
  },
  {
    alt: 'Dropbox',
    text: 'Dropbox',
    onClick: mockFunction
  },
  {
    alt: 'Fedora',
    text: 'Fedora',
    onClick: mockFunction
  },
  {
    alt: 'Skype',
    text: 'Skype',
    onClick: mockFunction
  },
  {
    alt: 'Twitter',
    text: 'Twitter',
    onClick: mockFunction
  },
  {
    alt: 'StackExchange',
    text: 'StackExchange',
    onClick: mockFunction
  }
];
const createProps = () => {
  const { header, footerLinks, card } = englishMessages;
  return {
    container: {
      translations: { en: englishMessages, fr: frenchMessages },
      className: '',
      alert: {
        message: header.alert,
        onDismiss: mockFunction,
        show: true
      }
    },
    header: {
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
          onClick: mockFunction
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
        rememberMe: {
          label: card.rememberMe,
          onClick: mockFunction
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: mockFunction
        },
        disableSubmit: false,
        submitText: card.form.submitText,
        onSubmit: mockFunction
      },
      social: {
        links: logoList
      }
    }
  };
};

afterEach(() => mockFunction.mockClear());

test('Component matches snapshot', () => {
  const props = { ...createProps() };
  props.card.social.links = [];
  const component = mount(<SocialLoginPage {...props} />);
  expect(component.render()).toMatchSnapshot();
});

test('Click on social link triggers mock function', () => {
  const component = mount(<SocialLoginPage {...createProps()} />);
  component
    .find('.login-pf-social-link')
    .at(0)
    .find('a')
    .simulate('click');

  expect(mockFunction).toHaveBeenCalled();
});

test('Click on the "More" button will expend the list and the button will change to "Less"', () => {
  const component = mount(<SocialLoginPage {...createProps()} />);
  const toggleBtn = component.find('.login-pf-social-toggle');

  toggleBtn.simulate('click');

  expect(toggleBtn.text()).toEqual(expect.stringMatching('Less'));

  expect(component.find('.ReactCollapse--collapse > ul > li')).toBeTruthy();
});

test("While the social list has 4 or less links, it won't have the 'double-col' class and the expend button won't exist", () => {
  const props = { ...createProps() };
  props.card.social.links = [...logoList].splice(0, 4);
  const component = mount(<SocialLoginPage {...props} />);
  const socialList = component.find('ul.login-pf-social');
  expect(socialList.hasClass('login-pf-social-double-col')).toBeFalsy();
  const toggleBtn = component.find('.login-pf-social-toggle');
  expect(toggleBtn.exists()).toBeFalsy();
});
