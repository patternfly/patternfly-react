import React from 'react';
import { patternfly } from '../../../common/patternfly';
import { PieChart } from '../index';

import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';

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
  stories.addWithInfo('Pie Charts', '', () => {
    const story = (
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
    );
    return inlineTemplate({
      title: 'Pie Charts',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_DATA_VISUALIZATION
      }pie-chart/`,
      story
    });
  });
};

export default pieChartAddWithInfo;
