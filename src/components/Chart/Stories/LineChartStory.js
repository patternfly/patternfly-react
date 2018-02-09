import React from 'react';
import { LineChart, SingleLineChart, SparklineChart } from '../index';

import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';

/**
 * LineChart constants
 */

const lineChartDataColumns = [
  ['data1', 30, 200, 100, 400, 150, 250],
  ['data2', 50, 220, 310, 240, 115, 25],
  ['data3', 70, 100, 390, 295, 170, 220],
  ['data4', 10, 340, 30, 290, 35, 20],
  ['data5', 90, 150, 160, 165, 180, 5]
];
const lineChartConfigData = {
  columns: lineChartDataColumns
};

const singleLineChartDataColumns = [['data1', 30, 200, 100, 400, 150, 250]];
const singleLineChartConfigData = {
  columns: singleLineChartDataColumns
};

const splineChartConfigData = {
  columns: lineChartDataColumns,
  type: 'spline'
};

const singleSplineChartConfigData = {
  columns: singleLineChartDataColumns,
  type: 'spline'
};

/**
 * LineChart stories
 */

const lineChartAddWithInfo = stories => {
  stories.addWithInfo('Line Charts', '', () => {
    const story = (
      <div>
        <h2>Sparkline</h2>
        <div>
          <SparklineChart
            id="line-chart-1"
            data={singleLineChartConfigData}
            size={{ width: 200, height: 40 }}
          />
        </div>
        <div>Less than one year remaining</div>

        <h2>Line Chart</h2>
        <div>
          <LineChart
            id="line-chart-2"
            data={lineChartConfigData}
            size={{ width: 600 }}
          />
        </div>

        <h2>Single Line Chart</h2>
        <div>
          <SingleLineChart
            id="line-chart-3"
            data={singleLineChartConfigData}
            size={{ width: 600 }}
          />
        </div>

        <h2>Spline Chart</h2>
        <div>
          <LineChart
            id="line-chart-4"
            data={splineChartConfigData}
            size={{ width: 600 }}
          />
        </div>

        <h2>Single Spline Chart</h2>
        <div>
          <SingleLineChart
            id="line-chart-5"
            data={singleSplineChartConfigData}
            size={{ width: 600 }}
          />
        </div>
      </div>
    );

    return inlineTemplate({
      title: 'Line Charts',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_DATA_VISUALIZATION
      }line-chart/`,
      story
    });
  });
};

export default lineChartAddWithInfo;
