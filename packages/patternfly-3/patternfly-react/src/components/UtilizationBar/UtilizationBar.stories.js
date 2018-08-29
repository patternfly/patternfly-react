import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { UtilizationBar } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.DATA_VISUALIZATION}/Charts`, module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Utilization Bar',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS}utilization-bar-card/`
  })
);

stories.add(
  'Utilization Bar',
  withInfo('Utilization Bar')(() => (
    <div>
      <h1>Utilization bar</h1>
      <UtilizationBar
        now={number('Actual value', 70)}
        min={number('Minimal value', 0)}
        max={number('Maximal value', 100)}
        thresholdWarning={number('Warning threshold value', 40)}
        thresholdError={number('Error threshold value', 80)}
        description={text('Description', 'Description')}
        label={text('Label', 'Label')}
        descriptionPlacementTop={boolean('Description placement', false)}
      />
    </div>
  ))
);
