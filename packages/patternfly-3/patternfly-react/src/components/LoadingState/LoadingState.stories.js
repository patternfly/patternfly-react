import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import { LoadingState } from './index';

import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/Loading State`, module);

stories.addDecorator(withKnobs);

stories.add(
  'Loading State',
  withInfo('Loading State shows centered spinner when loading')(() => {
    const loading = boolean('Loading', true);

    const size = select('Size', ['lg', 'md', 'sm', 'xs'], 'lg');

    const story = (
      <LoadingState loading={loading} size={size}>
        <div>Look at me! I am loaded content!</div>
      </LoadingState>
    );

    return inlineTemplate({
      title: 'Loading State',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}loading-state/`,
      story
    });
  })
);
