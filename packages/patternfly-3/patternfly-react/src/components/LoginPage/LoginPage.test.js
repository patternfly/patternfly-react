import React from 'react';
import { mount } from 'enzyme';
import { DropdownButton } from 'react-bootstrap';
import englishMessages from './mocks/messages.en';
import frenchMessages from './mocks/messages.fr';
import { LoginPage, LoginCardWithValidation } from './index';
import { KEY_CODES } from '../../common/helpers';

const { Input, ForgotPassword, SignUp } = LoginPage.Card;
const { FooterLinks } = LoginPage;

const mockFunction = jest.fn();
const createProps = () => {
  const { header, card } = englishMessages;
  return {
    container: {
      translations: { en: englishMessages, fr: frenchMessages },
      alert: {
        message: header.alert,
        show: true
      }
    },
    header: {
      logoTitle: header.logo,
      caption: header.caption
    },
    footerLinks: [
      { children: 'Terms of Use', href: '#', onClick: mockFunction },
      { children: 'Help', href: '#', onClick: mockFunction },
      { children: 'Privacy Policy', href: '#', onClick: mockFunction }
    ],
    card: {
      title: card.header.title,
      selectedLanguage: card.header.selectedLanguage,
      availableLanguages: card.header.availableLanguages,
      signUp: {
        label: card.signUp.label,
        link: {
          label: card.signUp.link.label,
          href: '#',
          onClick: mockFunction
        }
      },
      form: {
        error: card.form.error,
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
          errors: card.passwordField.errors,
          minLength: 8,
          warnings: card.passwordField.warnings,
          warning: card.passwordField.warnings.capsLock,
          showWarning: true
        },
        rememberMe: {
          label: card.rememberMe,
          onChange: mockFunction
        },
        forgotPassword: {
          label: card.forgotPassword,
          href: '#',
          onClick: mockFunction
        },
        disableSubmit: false,
        submitText: card.form.submitText
      }
    }
  };
};

afterEach(() => mockFunction.mockClear());

test('Component matches snapshot', () => {
  const component = mount(<LoginPage {...createProps()} />);
  expect(component.render()).toMatchSnapshot();
});

test('Alert closes succesfully', () => {
  const component = mount(<LoginPage {...createProps()} />);
  component
    .find('div.alert button')
    .at(0)
    .simulate('click');

  expect(
    component
      .find('div.alert button')
      .at(0)
      .exists()
  ).toEqual(false);
});

test('Dropdown updates succesfully', () => {
  const component = mount(<LoginPage {...createProps()} />);
  component
    .find('ul.dropdown-menu li a')
    .at(1)
    .simulate('click');

  expect(
    component
      .find(DropdownButton)
      .at(0)
      .props().title
  ).toEqual(frenchMessages.card.header.selectedLanguage.text);
});

test('Toggle Caps lock warning in password field by the events: focus, blur and mouseEnter', () => {
  const component = mount(<LoginPage {...createProps()} />);
  const passwordElement = component.find('input[type="password"]').at(0);

  passwordElement.simulate('focus').simulate('keypress', { keyCode: KEY_CODES.A, shiftKey: false });

  expect(
    component
      .find(Input)
      .at(1)
      .props().warning
  ).toEqual(englishMessages.card.passwordField.warnings.capsLock);

  expect(
    component
      .find(Input)
      .at(1)
      .props().showWarning
  ).toEqual(true);

  passwordElement.simulate('blur').simulate('keypress', { keyCode: KEY_CODES.A, shiftKey: false });

  expect(
    component
      .find(Input)
      .at(1)
      .props().showWarning
  ).toEqual(false);

  passwordElement.simulate('keypress', { keyCode: KEY_CODES.A, shiftKey: false }).simulate('focus');

  expect(
    component
      .find(Input)
      .at(1)
      .props().showWarning
  ).toEqual(true);
});

test('Toggle CapsLock cause warning to show under password field when focused', () => {
  const component = mount(<LoginPage {...createProps()} />);
  component.find('input[type="password"]').simulate('change', { target: { value: 'test' } });
  component
    .find(LoginCardWithValidation)
    .instance()
    .toggleCapsLock({ key: 'CapsLock' });

  component.find('input[type="password"]').simulate('focus');

  expect(
    component
      .find(Input)
      .at(1)
      .props().showWarning
  ).toBeTruthy();
});

test('Submit while inputs are empty cause specific errors to be shown and onChange they disappear', () => {
  const component = mount(<LoginPage {...createProps()} />);
  const usernameElement = component.find('input[type="email"]').at(0);
  const passwordElement = component.find('input[type="password"]').at(0);
  component
    .find('form')
    .at(0)
    .simulate('submit');

  // check username field
  expect(
    component
      .find(Input)
      .at(0)
      .props().error
  ).toEqual(englishMessages.card.usernameField.errors.empty);

  expect(
    component
      .find(Input)
      .at(0)
      .props().showError
  ).toEqual(true);

  usernameElement.simulate('change', { target: { value: 'Ron' } });

  expect(
    component
      .find(Input)
      .at(0)
      .props().showError
  ).toEqual(false);

  // check password field
  expect(
    component
      .find(Input)
      .at(1)
      .props().error
  ).toEqual(englishMessages.card.passwordField.errors.empty);

  expect(
    component
      .find(Input)
      .at(1)
      .props().showError
  ).toEqual(true);

  passwordElement.simulate('change', { target: { value: 'Q!w2e3' } });

  expect(
    component
      .find(Input)
      .at(1)
      .props().showError
  ).toEqual(false);
});

test('Submit while password is too short raises the correct error', () => {
  const component = mount(<LoginPage {...createProps()} />);
  const passwordElement = component.find('input[type="password"]').at(0);

  passwordElement.simulate('change', { target: { value: 'short' } });

  component
    .find('form')
    .at(0)
    .simulate('submit');

  expect(
    component
      .find(Input)
      .at(1)
      .props().showError
  ).toEqual(true);

  expect(
    component
      .find(Input)
      .at(1)
      .props().error
  ).toEqual(englishMessages.card.passwordField.errors.short);
});

test('Submit while username is invalid cause a specific error to be shown and onChange is disappears', () => {
  const component = mount(<LoginPage {...createProps()} />);
  const usernameElement = component.find('input[type="email"]').at(0);
  usernameElement.simulate('change', { target: { value: 'agagagagag@' } });

  component
    .find('form')
    .at(0)
    .simulate('submit');

  // check username field
  expect(
    component
      .find(Input)
      .at(0)
      .props().error
  ).toEqual(englishMessages.card.usernameField.errors.invalid);

  expect(
    component
      .find(Input)
      .at(0)
      .props().showError
  ).toEqual(true);

  usernameElement.simulate('change', { target: { value: 'ron@redhat.com' } });

  expect(
    component
      .find(Input)
      .at(0)
      .props().showError
  ).toEqual(false);
});

test('Remember-me checkbox change trigger mock function', () => {
  const component = mount(<LoginPage {...createProps()} />);
  component
    .find('div.login-pf-settings input[type="checkbox"]')
    .at(0)
    .simulate('change');

  expect(mockFunction).toHaveBeenCalled();
});

test('Forgot Password link click trigger mock function', () => {
  const component = mount(<LoginPage {...createProps()} />);
  component
    .find(ForgotPassword)
    .find('a')
    .at(0)
    .simulate('click');

  expect(mockFunction).toHaveBeenCalled();
});

test('Sign-up click trigger mock function', () => {
  const component = mount(<LoginPage {...createProps()} />);
  component
    .find(SignUp)
    .find('a')
    .at(0)
    .simulate('click');

  expect(mockFunction).toHaveBeenCalled();
});

test('Footer-links click trigger mock function', () => {
  const component = mount(<LoginPage {...createProps()} />);
  component
    .find(FooterLinks)
    .find('ul li a')
    .at(0)
    .simulate('click');

  expect(mockFunction).toHaveBeenCalled();
});

test('Translation works', () => {
  const component = mount(<LoginPage {...createProps()} />);

  // Click on french
  component
    .find('ul.dropdown-menu li a')
    .at(1)
    .simulate('click');

  expect(
    component
      .find(DropdownButton)
      .at(0)
      .props().title
  ).toEqual(frenchMessages.card.header.selectedLanguage.text);

  expect(
    component
      .find(LoginPage.Pattern)
      .at(0)
      .props().header.caption
  ).toEqual(frenchMessages.header.caption);
});
