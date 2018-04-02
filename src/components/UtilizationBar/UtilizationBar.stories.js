import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { UtilizationBar } from './index';

const stories = storiesOf('UtilizationBar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Utilization Bar',
    documentationLink:
      'http://www.patternfly.org/pattern-library/cards/utilization-bar-card/'
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
