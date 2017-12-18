import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { withInfo } from '@storybook/addon-info/dist/index';
import {
  Filter,
  FilterTypeSelector,
  FilterValueSelector,
  FilterCategorySelector,
  FilterCategoryValueSelector
} from '../../index';

import {
  MockFilterExample,
  mockFilterExampleSource
} from './__mocks__/mockFilterExample';

const stories = storiesOf('Filter', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Filter',
    documentationLink:
      'http://www.patternfly.org/pattern-library/forms-and-controls/filter/'
  })
);

stories.add(
  'Filter',
  withInfo({
    source: false,
    propTables: [
      Filter,
      FilterTypeSelector,
      FilterValueSelector,
      FilterCategorySelector,
      FilterCategoryValueSelector
    ],
    propTablesExclude: [MockFilterExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockFilterExampleSource}</pre>
      </div>
    )
  })(() => <MockFilterExample />)
);
