import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { LineChart, SingleLineChart, SparklineChart } from '../index';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL, DESCRIPTION } from 'storybook/constants/siteConstants';

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

const lineChart = stories => {
  stories.add(
    'Line Chart',
    withInfo()(() => {
      const story = (
        <div>
          <h2>Sparkline</h2>
          <div>
            <SparklineChart id="line-chart-1" data={singleLineChartConfigData} size={{ width: 200, height: 40 }} />
          </div>
          <div>Less than one year remaining</div>

          <h2>Line Chart</h2>
          <div>
            <LineChart id="line-chart-2" data={lineChartConfigData} size={{ width: 600 }} />
          </div>

          <h2>Single Line Chart</h2>
          <div>
            <SingleLineChart id="line-chart-3" data={singleLineChartConfigData} size={{ width: 600 }} />
          </div>

          <h2>Spline Chart</h2>
          <div>
            <LineChart id="line-chart-4" data={splineChartConfigData} size={{ width: 600 }} />
          </div>

          <h2>Single Spline Chart</h2>
          <div>
            <SingleLineChart id="line-chart-5" data={singleSplineChartConfigData} size={{ width: 600 }} />
          </div>

          <h2>Zoomable Single Line Chart</h2>
          <small>scroll up/down to zoom out/in</small>
          <div>
            <SingleLineChart
              id="line-chart-3"
              data={singleLineChartConfigData}
              size={{ width: 600 }}
              zoom={{ enabled: true }}
            />
          </div>

          <h2>Subchart Single Line Chart</h2>
          <small>select the desired area in the bottom chart</small>
          <div>
            <SingleLineChart
              id="line-chart-3"
              data={singleLineChartConfigData}
              size={{ width: 600 }}
              subchart={{ show: true }}
            />
          </div>
        </div>
      );

      return inlineTemplate({
        title: 'Line Charts',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_DATA_VISUALIZATION}line-chart/`,
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

export default lineChart;
