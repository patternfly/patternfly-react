import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { SessionTimeout, CountDownSessionTimeout } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/Session Timeout`, module);

stories.addDecorator(withKnobs).addDecorator(
  defaultTemplate({
    title: 'Session Timeout',
    documentationLink: 'http://www.patternfly.org/pattern-library/communication/session-timeout/'
  })
);

stories
  .add('Session Timeout', () => (
    <SessionTimeout
      logoutFnc={() => {}}
      continueFnc={() => {}}
      displayBefore={number('displayBefore', 30)}
      timeLeft={number('timeLeft', 30)}
      primaryContent={<p className="lead">{text('primary content', 'Your session is about to expire')}</p>}
      secondaryContent={<div>{text('secondary content', `to continue click on "Continue Session".`)}</div>}
    />
  ))
  .add('Count Down Session Timeout', () => (
    <CountDownSessionTimeout
      timeLeft={3}
      displayBefore={7}
      sessionTime={10}
      units="seconds"
      secondaryContent={<p>You will be logged out in 3 seconds.</p>}
    />
  ));
