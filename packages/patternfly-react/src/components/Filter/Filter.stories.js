import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
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

import { MockFilterExample, mockFilterExampleSource } from './__mocks__/mockFilterExample';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Filter`, module);

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
