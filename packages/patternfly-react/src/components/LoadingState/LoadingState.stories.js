import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import LoadableState, { LoadableStateSource } from './Stories/LoadableState';
import LoadingState from './LoadingState';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/Loading State`, module);

stories.addDecorator(withKnobs);

stories
  .add(
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
  )
  .add(
    'Loading State with Delay',
    withInfo({
      source: false,
      propTables: [LoadingState],
      propTablesExclude: [LoadableState],
      text: (
        <div>
          <h1>Story Source</h1>
          <pre>{LoadableStateSource}</pre>
        </div>
      )
    })(() => {
      const story = (
        <LoadableState timeout={number('server response time', 3000)} delay={number('spinner delay', 150)} />
      );
      return inlineTemplate({
        title: 'Loading State with Delay',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}loading-state/`,
        story
      });
    })
  );
