import React from 'react';
import { patternfly } from '../../../common/patternfly';
import { DonutChart } from '../index';

/**
 * DonutChart constants
 */

const pfGetUtilizationDonutTooltipContents = d => {
  return (
    '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
    Math.round(d[0].ratio * 1000) / 10 +
    ' ' +
    d[0].name +
    '</span>'
  );
};

const donutConfigData = {
  columns: [['MHz Used', 60], ['MHz Available', 40]],
  groups: [['used', 'available']],
  order: null
};
const donutConfigTooltip = {
  contents: pfGetUtilizationDonutTooltipContents
};
const donutData = {
  colors: {
    Cats: patternfly.pfPaletteColors.blue,
    Hamsters: patternfly.pfPaletteColors.green,
    Fish: patternfly.pfPaletteColors.orange,
    Dogs: patternfly.pfPaletteColors.red
  },
  columns: [['Dogs', 2], ['Cats', 2], ['Fish', 3], ['Hamsters', 1]]
};

const donutRightConfigData = donutData;
const donutRightConfigLegend = {
  show: true,
  position: 'right'
};
const donutRightConfigTooltip = {
  show: true,
  contents: patternfly.pfDonutTooltipContents
};
const donutRightConfigTitle = { type: 'total', secondary: 'Animals' };

/**
 * DonutChart stories
 */

const donutChartAddWithInfo = stories => {
  stories.addWithInfo('Donut Charts', '', () => (
    <div>
      <h2>Donut Chart - Utilization</h2>
      <div>
        <DonutChart
          id="donunt-chart-1"
          size={{
            width: 210,
            height: 210
          }}
          data={donutConfigData}
          tooltip={donutConfigTooltip}
          title={{ type: 'max' }}
        />
      </div>

      <h2>Donut Chart - Relationship to a Whole</h2>
      <div>
        <DonutChart
          id="donunt-chart-2"
          size={{
            width: 210,
            height: 210
          }}
          data={donutRightConfigData}
          tooltip={donutRightConfigTooltip}
          title={donutRightConfigTitle}
          legend={donutRightConfigLegend}
        />
      </div>
    </div>
  ));
};

export default donutChartAddWithInfo;
