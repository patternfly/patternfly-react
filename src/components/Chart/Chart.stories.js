import { storiesOf } from '@storybook/react';
import {
  areaChartAddWithInfo,
  barChartAddWithInfo,
  donutChartAddWithInfo,
  lineChartAddWithInfo,
  pieChartAddWithInfo
} from './Stories';

const stories = storiesOf('Chart', module);

/**
 * Chart stories
 */

areaChartAddWithInfo(stories);
barChartAddWithInfo(stories);
donutChartAddWithInfo(stories);
lineChartAddWithInfo(stories);
pieChartAddWithInfo(stories);
