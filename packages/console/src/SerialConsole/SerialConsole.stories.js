/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import SerialConsole from './SerialConsole';

const stories = storiesOf('@patternfly-react/console', module);

stories.add(
  'SerialConsole',
  withInfo()(() => {
    const story = <SerialConsole />;
    return inlineTemplate({
      story,
      title: 'SerialConsole'
    });
  })
);
