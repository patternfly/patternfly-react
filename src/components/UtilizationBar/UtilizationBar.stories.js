import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { withKnobs, number} from '@storybook/addon-knobs';
import { UtilizationBar } from './index';
import { Tooltip } from '../Tooltip';

const stories = storiesOf('UtilizationBar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Utilization Bar'
  })
);

const overriddenTooltip = () => {
    return (
        <Tooltip id="usedTooltip">
            This tooltip is overridden.
        </Tooltip>
    );
};

stories.addWithInfo(
  'Utilization Bar types',
  'Those are the available progress bar types',
  () => (
    <div>
      <h1>Default utilization bar</h1>
        <UtilizationBar now={42} />
      <h1>Utilization bar with thresholds</h1>
        <UtilizationBar now={number("Actual value", 70)}
                        min={number("Minimal value", 0)}
                        max={number("Maximal value", 100)}
                        thresholdWarning={number("Warning threshold value", 40)}
                        thresholdError={number("Error threshold value", 80)} />
      <h1>Utilization bar with overridden tooltips</h1>
        <UtilizationBar now={65}
                        availableTooltipFunction={overriddenTooltip}
                        usedTooltipFunction={overriddenTooltip} />
    </div>
  )
);
