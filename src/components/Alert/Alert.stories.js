import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Alert } from './index';

const stories = storiesOf('Alert', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Alert / Inline Notification',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION + 'inline-notifications/'
  })
);

stories.addWithInfo(
  'with danger',
  `This is the Alert with danger type.`,
  () => (
    <Alert type="danger" onDismiss={action('onDismiss')}>
      <span>{text('Label', 'Danger Will Robinson!')}</span>
    </Alert>
  )
);

stories.addWithInfo(
  'with warning',
  `This is the Alert with warning type.`,
  () => (
    <Alert type="warning" onDismiss={action('onDismiss')}>
      <span>
        {text(
          'Label',
          'Warning! Better check yourself, you are not looking too good.'
        )}
      </span>
    </Alert>
  )
);

stories.addWithInfo('with info', `This is the Alert with info type.`, () => (
  <Alert type="info" onDismiss={action('onDismiss')}>
    <span>
      {text(
        'Label',
        'Heads up! This alert needs your attention, but it is not super important.'
      )}
    </span>
  </Alert>
));

stories.addWithInfo(
  'with success',
  `This is the Alert with success type.`,
  () => (
    <Alert type="success" onDismiss={action('onDismiss')}>
      <span>
        {text(
          'Label',
          'Well done! You successfully read this important alert message.'
        )}
      </span>
    </Alert>
  )
);

stories.addWithInfo(
  'without dismiss',
  `This is the Alert without a dismiss icon.`,
  () => (
    <Alert type="success">
      <span>
        {text(
          'Label',
          'Well done! You successfully read this important alert message.'
        )}
      </span>
    </Alert>
  )
);
