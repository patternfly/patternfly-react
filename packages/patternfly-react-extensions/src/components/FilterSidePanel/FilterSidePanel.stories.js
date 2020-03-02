import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info/dist/index';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { MockFilterSidePanelExample, MockFilterSidePanelExampleSource } from './_mocks_/mockFilterSidePanelExample';

import { FilterSidePanel, FilterSidePanelCategory, FilterSidePanelCategoryItem } from './index';

import { name } from '../../../package.json';
import { number, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/FilterSidePanel`,
  module
);

stories.addDecorator(
  defaultTemplate({
    title: 'Filter Side Panel',
    description: 'Note: the width, border, and top padding styling are not part of the FilterSidePanel.'
  })
);

stories.addDecorator(withKnobs);
stories.add(
  'FilterSidePanel',
  withInfo({
    source: false,
    propTables: [FilterSidePanel, FilterSidePanelCategory, FilterSidePanelCategoryItem],
    propTablesExclude: [MockFilterSidePanelExample],
    text: (
      <div>
        <h1>Story Source</h1>
        <pre>{MockFilterSidePanelExampleSource}</pre>
      </div>
    )
  })(() => {
    const maxShowCountValue = number('Max Shown', 5, {
      range: true,
      min: 1,
      max: 7,
      step: 1
    });
    const leewayValue = number('Leeway', 2, {
      range: true,
      min: 1,
      max: 7,
      step: 1
    });
    return (
      <div style={{ width: '195px', border: '1px solid grey', paddingTop: '20px' }}>
        <MockFilterSidePanelExample maxShowCount={maxShowCountValue} leeway={leewayValue} />
      </div>
    );
  })
);
