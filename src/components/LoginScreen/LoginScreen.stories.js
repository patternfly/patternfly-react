import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Checkbox, FormGroup } from '../../index';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import LoginScreen from './LoginScreen';

const stories = storiesOf('Login Screen', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Login Screen',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#spinner`
  })
);

stories.addWithInfo('Login Screen', () => {
  const cardInputs = [
    { id: 'card_email', type: 'email', placeholder: 'Email Address' },
    { id: 'card_password', type: 'password', placeholder: 'Password' }
  ];
  const cardLowerBody = [
    <FormGroup controlId="checkbox" className="login-pf-settings">
      <Checkbox>Keep me logged in for 30 days</Checkbox>
      <a href="#">Forgot password?</a>
    </FormGroup>
  ];
  const pageDescription = `This is placeholder text, only. Use this area to place
    any information or introductory message about your application that may be
    relevant for users.`;

  return (
    <LoginScreen
      logoClass="page_logo"
      bgClass="page_bg"
      pageDescription={pageDescription}
      cardSelectPickerOptions={['English', 'Hebrew', 'Czech']}
      cardTitle="Log In to Your Account"
      cardInputs={cardInputs}
      cardLowerBody={cardLowerBody}
      cardFooter={[
        <p className="login-pf-signup">
          Need an account?<a href="#">Sign up</a>
        </p>
      ]}
      submitButton={{
        bsStyle: 'primary',
        bsSize: 'large',
        isBlock: true,
        text: 'Log In'
      }}
      footerLinks={['Terms of Use', 'Help', 'Privacy Policy']}
    />
  );
});
