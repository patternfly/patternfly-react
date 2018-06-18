/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { name } from '../../package.json';
import { storybookPackageName } from 'storybook/constants/siteConstants';

import VncConsole from './VncConsole';

const stories = storiesOf(`${storybookPackageName(name)}/Vnc Console`, module);

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
