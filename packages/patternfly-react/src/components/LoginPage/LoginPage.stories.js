import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY, DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import LoginPage from './LoginPage';

import { name } from '../../../package.json';
import {
  getManagedPageWithErrorsOnTopProps,
  getManagedPageProps,
  getBuildYourOwnPageProps,
  createLogoList,
  getManagedSocialLoginPageProps,
  getBuildYourOwnSocialLoginPageProps
} from './LoginPageFixtures';

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

stories.add('Managed Login Page with errors display on top of the form', () => (
  <LoginPage {...getManagedPageWithErrorsOnTopProps()} />
));

stories.add('Managed Login Page with errors display under form inputs', () => <LoginPage {...getManagedPageProps()} />);

stories.add('Build Your own Basic Login Page', () => LoginPage.Pattern(getBuildYourOwnPageProps()));

stories.add('Managed Social Login Page', () => {
  const logoListCopy = createLogoList();
  const listSize = number('Social List Size', 12);
  const socialLinks = logoListCopy.splice(0, listSize);

  const props = { ...getManagedSocialLoginPageProps() };
  props.card.social.links = socialLinks;

  return <LoginPage.Social {...props} />;
});

stories.add('Build Your own Social Login Page', () => {
  const logoListCopy = createLogoList();
  const listSize = number('Social List Size', 12);
  const socialLinks = logoListCopy.splice(0, listSize);

  const props = { ...getBuildYourOwnSocialLoginPageProps() };
  props.card.social.links = socialLinks;
  props.card.form.validate = false;
  return LoginPage.Social.Pattern(props);
});
