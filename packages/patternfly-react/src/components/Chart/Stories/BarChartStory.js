import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { patternfly } from '../../../common/patternfly';
import { BarChart, GroupedBarChart, StackedBarChart } from '../index';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL, DESCRIPTION } from 'storybook/constants/siteConstants';

/**
 * BarChart constants
 */

const categories = ['Q1', 'Q2', 'Q3', 'Q4'];
const columnsData = [['data1', 400, 360, 320, 175]];
const barChartConfigAxis = {
  x: {
    categories,
    type: 'category'
  }
};
const barChartConfigData = {
  columns: columnsData
};

const groupedcCategories = ['2013', '2014', '2015'];
const groupedColumnsData = [['Q1', 400, 250, 375], ['Q2', 355, 305, 300], ['Q3', 315, 340, 276], ['Q4', 180, 390, 190]];
const groupedColors = {
  pattern: [
    patternfly.pfPaletteColors.red,
    patternfly.pfPaletteColors.blue,
    patternfly.pfPaletteColors.orange,
    patternfly.pfPaletteColors.green
  ]
};
const groupedBarChartConfigAxis = {
  x: {
    categories: groupedcCategories,
    type: 'category'
  }
};
const groupedBarChartConfigData = {
  columns: groupedColumnsData,
  order: null
};
const groupedBarChartConfigColor = groupedColors;

const stackedBarChartConfigAxis = {
  x: {
    categories: groupedcCategories,
    type: 'category'
  }
};
const stackedBarChartConfigData = {
  groups: [categories],
  columns: groupedColumnsData,
  order: null
};

const horizontalBarChartConfigAxis = {
  rotated: true,
  x: {
    categories: groupedcCategories,
    type: 'category'
  }
};

/**
 * BarChart stories
 */

const barChart = stories => {
  stories.add(
    'Bar Chart',
    withInfo()(() => {
      const story = (
        <div>
          <h2> Bar Chart</h2>
          <div>
            <BarChart
              id="bar-chart-1"
              size={{ width: 400 }}
              axis={barChartConfigAxis}
              data={barChartConfigData}
              categories={categories}
            />
          </div>

          <h2>Grouped Bar Chart</h2>
          <div>
            <GroupedBarChart
              id="bar-chart-2"
              size={{ width: 400 }}
              axis={groupedBarChartConfigAxis}
              data={groupedBarChartConfigData}
              color={groupedBarChartConfigColor}
            />
          </div>

          <h2>Stacked Bar Chart</h2>
          <div>
            <StackedBarChart
              id="bar-chart-3"
              size={{ width: 400 }}
              axis={stackedBarChartConfigAxis}
              data={stackedBarChartConfigData}
              color={groupedBarChartConfigColor}
            />
          </div>

          <h2>Horizontal Bar Chart</h2>
          <div>
            <GroupedBarChart
              id="bar-chart-4"
              size={{ width: 400 }}
              axis={horizontalBarChartConfigAxis}
              data={groupedBarChartConfigData}
              color={groupedBarChartConfigColor}
            />
          </div>
        </div>
      );
      return inlineTemplate({
        title: 'Bar Charts',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_DATA_VISUALIZATION}bar-chart/`,
        description: (
          <span>
            {DESCRIPTION.C3JS_TEXT} <a href={DESCRIPTION.C3JS_URL}>{DESCRIPTION.C3JS_URL}</a>
          </span>
        ),
        story
      });
    })
  );
};

export default barChart;
