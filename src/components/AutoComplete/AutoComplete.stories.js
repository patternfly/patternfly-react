import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';

import AutoComplete from './AutoComplete';
import {
  MockAutoComplete,
  basicExampleSource
} from './__mocks__/mockAutoComplete';

storiesOf('AutoComplete', module).add(
  'AutoComplete',
  withInfo({
    source: false,
    propTables: [AutoComplete],
    propTablesExclude: [MockAutoComplete],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{basicExampleSource}</pre>
      </div>
    )
  })(() => {
    let story = <MockAutoComplete />;
    return inlineTemplate({
      title: 'AutoComplete Example',
      story
    });
  })
);
