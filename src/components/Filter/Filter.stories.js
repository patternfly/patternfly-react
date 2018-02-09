import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import {
  Filter,
  FilterTypeSelector,
  FilterValueSelector,
  FilterCategorySelector,
  FilterCategoryValueSelector,
  FilterActiveLabel,
  FilterList,
  FilterItem
} from '../../index';

import {
  MockFilterExample,
  mockFilterExampleSource
} from './__mocks__/mockFilterExample';

const stories = storiesOf('Filter', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Filter',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}filter/`
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
      FilterCategoryValueSelector,
      FilterActiveLabel,
      FilterList,
      FilterItem
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
