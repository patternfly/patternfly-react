import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';

import {
  areaChartAddWithInfo,
  barChartAddWithInfo,
  donutChartAddWithInfo,
  lineChartAddWithInfo,
  pieChartAddWithInfo,
} from './Stories';

const stories = storiesOf('Chart', module);
const description = (
  <p>
    This component is based on Patternfly Chart component. See{' '}
    <a href="http://www.patternfly.org/pattern-library/data-visualization/line-chart/">
      Patternfly Chart Docs
    </a>{' '}
    for complete Chart component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Chart',
    documentationLink:
      'http://www.patternfly.org/pattern-library/data-visualization/line-chart/',
    description: description,
  }),
);

/**
 * Chart stories
 */

areaChartAddWithInfo(stories);
barChartAddWithInfo(stories);
donutChartAddWithInfo(stories);
lineChartAddWithInfo(stories);
pieChartAddWithInfo(stories);
