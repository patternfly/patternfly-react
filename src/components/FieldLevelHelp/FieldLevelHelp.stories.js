import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { FieldLevelHelp } from './index';

const stories = storiesOf('FieldLevelHelp', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'FieldLevelHelp',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION + 'inline-notifications/'
  })
);

stories.addWithInfo('with Popover', 'FieldLevelHelp', () => {
  const mode = select('mode', ['popover', 'tooltip'], 'popover');
  const content = text(
    'content',
    'Enter the hostname in a valid format <br>  <a target="_blank" href="http://www.test.example.com">Click here for examples of valid hostnames</a>'
  );
  const fieldLabel = text('Field Label', 'Hostname');

  return (
    <div style={{ textAlign: 'center' }}>
      <FieldLevelHelp mode={mode} content={content}>
        {fieldLabel}
      </FieldLevelHelp>
    </div>
  );
});

stories.addWithInfo('with Tooltip', 'FieldLevelHelp', () => {
  const mode = select('mode', ['popover', 'tooltip'], 'tooltip');
  const content = text('content', 'Enter the hostname in a valid format');
  const fieldLabel = text('Field Label', 'Hostname');

  return (
    <div style={{ textAlign: 'center' }}>
      <FieldLevelHelp mode={mode} content={content}>
        {fieldLabel}
      </FieldLevelHelp>
    </div>
  );
});
