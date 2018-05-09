import { storiesOf } from '@storybook/react';
import {
  areaChart,
  barChart,
  donutChart,
  lineChart,
  pieChart
} from './Stories';

const stories = storiesOf('Chart', module);

/**
 * Chart stories
 */

areaChart(stories);
barChart(stories);
donutChart(stories);
lineChart(stories);
pieChart(stories);
