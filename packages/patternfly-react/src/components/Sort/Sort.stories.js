import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { Sort, SortTypeSelector, SortDirectionSelector } from '../../index';
import { name } from '../../../package.json';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { MockSortExample, mockSortExampleSource } from './__mocks__/mockSortExample';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Sort`, module);

export const mockSortFields = [
  {
    id: 'name',
    title: 'Name',
    isNumeric: false
  },
  {
    id: 'address',
    title: 'Address',
    isNumeric: false
  },
  {
    id: 'birthMonth',
    title: 'Birth Month',
    isNumeric: true
  },
  {
    id: 'car',
    title: 'Car',
    isNumeric: false
  }
];

stories.addDecorator(
  defaultTemplate({
    title: 'Sort',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}sort/`
  })
);

stories.add(
  'Sort',
  withInfo({
    source: false,
    propTables: [Sort, SortTypeSelector, SortDirectionSelector],
    propTablesExclude: [MockSortExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{mockSortExampleSource}</pre>
      </div>
    )
  })(() => <MockSortExample />)
);
