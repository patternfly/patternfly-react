import React from 'react';
import { patternfly } from '../../../common/patternfly';
import { PieChart } from '../index';

/**
 * PieChart constants
 */

const pieChartRightConfigData = {
  colors: {
    Cats: patternfly.pfPaletteColors.blue,
    Hamsters: patternfly.pfPaletteColors.green,
    Fish: patternfly.pfPaletteColors.orange,
    Dogs: patternfly.pfPaletteColors.red
  },
  columns: [['Dogs', 2], ['Cats', 2], ['Fish', 3], ['Hamsters', 1]]
};
const pieChartRightConfigLegend = {
  show: true,
  position: 'right'
};

/**
 * PieChart stories
 */

const pieChartAddWithInfo = stories => {
  stories.addWithInfo('Pie Charts', '', () => (
    <div>
      <h2>Pie Chart - Relationship to a Whole</h2>
      <div>
        <PieChart
          id="pie-chart-1"
          size={{
            width: 251,
            height: 161
          }}
          data={pieChartRightConfigData}
          legend={pieChartRightConfigLegend}
        />
      </div>
    </div>
  ));
};

export default pieChartAddWithInfo;
