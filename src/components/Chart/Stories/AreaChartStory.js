import React from 'react';
import { AreaChart, SingleAreaChart } from '../index';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';

/**
 * Story constants
 */

const areaChartDataColumns = [
  ['data1', 350, 400, 350, 0],
  ['data2', 140, 100, 150, 205, 145, 50],
  ['data3', 10, 60, 90, 10, 325, 400],
  ['data4', 260, 10, 305, 100, 50, 150]
];
const areaChartData = {
  columns: areaChartDataColumns,
  type: 'area-spline'
};

const singleAreaChartDataColumns = [['data2', 140, 100, 150, 205, 145, 50]];
const singleAreaChartData = {
  columns: singleAreaChartDataColumns,
  type: 'area-spline'
};

/**
 * AreaChart stories
 */

const areaChartAddWithInfo = stories => {
  stories.addWithInfo('Area Charts', '', () => {
    const story = (
      <div>
        <h2>Area Chart</h2>
        <div>
          <AreaChart
            id="area-chart-1"
            size={{ width: 600 }}
            data={areaChartData}
          />
        </div>

        <h2>Single Area Chart</h2>
        <div>
          <SingleAreaChart
            id="area-chart-2"
            size={{ width: 600 }}
            data={singleAreaChartData}
          />
        </div>
      </div>
    );
    return inlineTemplate({
      title: 'Area Charts',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_DATA_VISUALIZATION
      }area-chart/`,
      story
    });
  });
};

export default areaChartAddWithInfo;
