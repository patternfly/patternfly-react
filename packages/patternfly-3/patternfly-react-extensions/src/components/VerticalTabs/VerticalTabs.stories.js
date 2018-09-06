import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { VerticalTabs, VerticalTabsTab } from './index';
import { MockVerticalTabsExample, MockVerticalTabsExampleSource } from './_mocks_/mockVerticalTabsExample';

import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Vertical Tabs`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Vertical Tabs'
  })
);

stories.add(
  'Vertical Tabs',
  withInfo({
    source: false,
    propTables: [VerticalTabs, VerticalTabsTab],
    propTablesExclude: [MockVerticalTabsExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockVerticalTabsExampleSource}</pre>
      </div>
    )
  })(() => <MockVerticalTabsExample />)
);
