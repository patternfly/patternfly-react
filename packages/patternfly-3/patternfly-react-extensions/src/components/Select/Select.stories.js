import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import StatefulWrapperSelect from './StatefulWrapperSelect';
import Select from './Select';
import { optionsArray } from './Select.fixtures';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Select`, module);

const description = (
  <p>
    See <a href="http://silviomoreto.github.io/bootstrap-select/">http://silviomoreto.github.io/bootstrap-select/</a>{' '}
    for complete Bootstrap Select documentation.
  </p>
);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Select',
    description
  })
);

stories.add(
  'Select',
  withInfo()(() => (
    <div style={{ width: '260px' }}>
      <Select
        options={optionsArray}
        placeholder="Filter..."
        open
        searchValue="one"
        selectedItem={{ id: '3', name: 'selected' }}
        isLoading={boolean('isLoading', false)}
        isSearchable={boolean('isSearchable', true)}
      />
    </div>
  ))
);

stories.add(
  'Stateful Select',
  withInfo()(() => (
    <div style={{ width: '260px' }}>
      <StatefulWrapperSelect />
    </div>
  ))
);
