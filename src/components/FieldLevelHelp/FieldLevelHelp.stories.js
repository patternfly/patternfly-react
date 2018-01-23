import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
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

stories.addWithInfo(
  'with Popover',
  'FieldLevelHelp',
  () => (
    <FieldLevelHelp contentType='popover' content={'Enter the hostname in a valid format <br>  <a href="http://www.test.example.com">Click here for examples of valid hostnames</a>'}>
      Hostname
    </FieldLevelHelp>
  )
);

stories.addWithInfo(
  'with Tooltip',
  'FieldLevelHelp',
  () => (
    <FieldLevelHelp contentType='tooltip' content={'Enter the hostname in a valid format'}>
      Hostname
    </FieldLevelHelp>
  )
);
