/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { name } from '../../package.json';
import { storybookPackageName } from 'storybook/constants/siteConstants';

// import SpiceConsole from './SpiceConsole';

const stories = storiesOf(`${storybookPackageName(name)}/Spice Console`, module);

const SpiceConsoleConnector = () => (
  <div>
    There is recently no mock Spice backend implemented, so preview of the <strong>SpiceConsole</strong> component is
    not available.
  </div>
);

stories.add(
  'SpiceConsole',
  withInfo()(() => {
    const story = <SpiceConsoleConnector />;
    return inlineTemplate({
      story,
      title: 'SpiceConsole'
    });
  })
);
