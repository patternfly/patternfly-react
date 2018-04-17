/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import VncConsole from './VncConsole';

const stories = storiesOf('@patternfly-react/console', module);

stories.add(
  'VncConsole',
  withInfo()(() => {
    const story = <VncConsole />;
    return inlineTemplate({
      story,
      title: 'VncConsole'
    });
  })
);
