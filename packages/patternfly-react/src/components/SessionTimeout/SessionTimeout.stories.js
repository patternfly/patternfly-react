import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import {
  storybookPackageName,
  STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import {
  SessionTimeout,
  SessionTimeoutModal,
  CountDownSessionTimeout
} from './index';

const stories = storiesOf(
  `${storybookPackageName(name)}/${
    STORYBOOK_CATEGORY.COMMUNICATION
  }/Session Timeout`,
  module
);

stories.addDecorator(withKnobs).addDecorator(
  defaultTemplate({
    title: 'Session Timeout',
    documentationLink:
      'http://www.patternfly.org/pattern-library/communication/session-timeout/'
  })
);

stories
  .add('Session Timeout Modal', () => (
    <SessionTimeoutModal
      show
      continueText={text('Continue button label', 'Continue')}
      logoutText={text('LogOut Label', 'Logout...')}
      logoutFnc={() => {}}
      continueFnc={() => {}}
    >
      <p>You are about to be logged out.</p>
    </SessionTimeoutModal>
  ))
  .add('Session Timeout', () => (
    <SessionTimeout
      logoutFnc={() => {}}
      continueFnc={() => {}}
      displayBefore={number('displayBefore', 30)}
      timeLeft={number('timeLeft', 30)}
    />
  ))
  .add('Count Down Session Timeout', () => (
    <CountDownSessionTimeout
      timeLeft={3}
      displayBefore={7}
      sessionTime={10}
      units="seconds"
    />
  ));
