import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { UtilizationBar } from './index';

const stories = storiesOf('UtilizationBar', module);
stories.addDecorator(
  defaultTemplate({
    title: 'Utilization Bar',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS + '/#progress-bars/'
  })
);

stories.addWithInfo(
  'Utilization Bar types',
  'Those are the available progress bar types',
  () => (
    <div>
      <h1>Default utilization bar</h1>
        <UtilizationBar units="UNIT"/>
    </div>
  )
);
