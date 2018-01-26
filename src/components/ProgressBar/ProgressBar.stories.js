import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { ProgressBar } from './index';
import { OverlayTrigger, Tooltip } from '../../index';

const stories = storiesOf('ProgressBar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Progress Bar',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS + '/#progress-bars/'
  })
);

stories.addWithInfo('Progress Bar types', 'Those are the available progress bar types', () =>
  <div>
      <h1>Default progress bar</h1>
      <ProgressBar now={60}/>
      <h1>Progress bar with label</h1>
      <ProgressBar now={60} label={`${60}%`} />
      <h1>Progress bars with contextual colors</h1>
      <div>
          <ProgressBar bsStyle="success" now={40} />
          <ProgressBar bsStyle="info" now={20} />
          <ProgressBar bsStyle="warning" now={60} />
          <ProgressBar bsStyle="danger" now={80} />
      </div>
      <h1>Striped progress bar</h1>
          <ProgressBar striped bsStyle="success" now={40} />
      <h1>Animated progress bar</h1>
      <ProgressBar active now={45} />
      <h1>Stacked progress bar</h1>
      <ProgressBar>
          <ProgressBar bsStyle="success" now={35} key={1} />
          <ProgressBar bsStyle="warning" now={20} key={2} />
          <ProgressBar bsStyle="danger" now={90} key={3} />
      </ProgressBar>
  </div>
);

