/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { name } from '../../package.json';

import VncConsole from './VncConsole';

const stories = storiesOf(`${name}/vncConsole`, module);

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
