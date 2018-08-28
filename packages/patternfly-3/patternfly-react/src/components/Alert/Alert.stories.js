import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { ALERT_TYPES } from './AlertConstants';
import { Alert } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Alert`, module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Alert / Inline Notification',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}inline-notifications/`
  })
);

stories.add(
  'Alert types',
  withInfo('Those are the available alert types')(() =>
    ALERT_TYPES.map((type, index) => (
      <Alert key={index} type={type} onDismiss={action(`${type}Dismissed`)}>
        I am an Alert with type=&quot;
        {type}
        &quot;
      </Alert>
    ))
  )
);

stories.add(
  'Alert without dismiss',
  withInfo(`This is the Alert without a dismiss icon.`)(() => (
    <Alert type={select('Type', ALERT_TYPES)}>
      <span>{text('Label', 'Well done! You successfully read this important alert message.')}</span>
    </Alert>
  ))
);
