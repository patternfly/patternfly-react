import { storiesOf } from '@storybook/react';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { areaChart, barChart, bulletChart, donutChart, lineChart, pieChart } from './Stories';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.DATA_VISUALIZATION}/Charts`, module);

/**
 * Chart stories
 */

areaChart(stories);
barChart(stories);
bulletChart(stories);
donutChart(stories);
lineChart(stories);
pieChart(stories);
