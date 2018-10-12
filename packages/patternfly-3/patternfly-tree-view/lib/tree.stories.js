/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { name } from '../package.json';
import { storybookPackageName } from 'storybook/constants/siteConstants';
import { x as Foo} from './';

const stories = storiesOf(`${storybookPackageName(name)}/Tree view`, module);

stories.add(
  'Tree view',
  withInfo()(() => {
    const story = <Foo />;
    return inlineTemplate({
      story,
      title: 'TreeView'
    });
  })
);