import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { UtilizationBar } from './index';
import { Tooltip } from '../Tooltip';

const stories = storiesOf('UtilizationBar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Utilization Bar',
    documentationLink:
      'http://www.patternfly.org/pattern-library/cards/utilization-bar-card/'
  })
);

const overriddenTooltip = () => {
  return <Tooltip id="usedTooltip">This tooltip is overridden.</Tooltip>;
};

stories.addWithInfo('Utilization Bar', 'Utilization Bar', () => (
  <div>
    <h1>Utilization bar</h1>
    <UtilizationBar
      now={number('Actual value', 70)}
      min={number('Minimal value', 0)}
      max={number('Maximal value', 100)}
      thresholdWarning={number('Warning threshold value', 40)}
      thresholdError={number('Error threshold value', 80)}
      availableTooltipFunction={overriddenTooltip}
      usedTooltipFunction={overriddenTooltip}
      description={text('Description', 'Label')}
      label={text('Label', '%')}
      descriptionPlacementTop={boolean('Description placement', false)}
    />
  </div>
));
