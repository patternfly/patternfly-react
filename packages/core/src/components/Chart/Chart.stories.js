import { storiesOf } from '@storybook/react';
import {
  areaChart,
  barChart,
  donutChart,
  lineChart,
  pieChart
} from './Stories';

import { name } from '../../../package.json';

const stories = storiesOf(`${name}/Chart`, module);

/**
 * Chart stories
 */

areaChart(stories);
barChart(stories);
donutChart(stories);
lineChart(stories);
pieChart(stories);
