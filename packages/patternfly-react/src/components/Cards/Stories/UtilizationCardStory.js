import React from 'react';
import { CardGrid, CardTitle, CardBody } from '../index';
import { DonutChart, SparklineChart } from '../../Chart/index';
import { patternfly } from '../../../common/patternfly';
import {
  UtilizationCard,
  UtilizationCardDetails,
  UtilizationCardDetailsCount,
  UtilizationCardDetailsDesc,
  UtilizationCardDetailsLine1,
  UtilizationCardDetailsLine2
} from '../UtilizationTrendCard/index';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';

const utilizationCardAddWithInfo = stories => {
  stories.addWithInfo('Utilization Trend Card', () => {
    const donutConfigData = {
      columns: [['Used', 1100], ['Available', 200]],
      groups: [['used', 'available']],
      colors: {
        Used: patternfly.pfPaletteColors.red,
        Avaliable: patternfly.pfPaletteColors.green
      },
      order: null
    };
    const pfGetUtilizationDonutTooltipContents = d =>
      `<span class="donut-tooltip-pf" style="white-space: nowrap;">${Math.round(d[0].ratio * 1000) / 10} ${
        d[0].name
      }</span>`;

    const donutConfigTooltip = {
      contents: pfGetUtilizationDonutTooltipContents
    };
    const singleLineChartDataColumns = [['data1', 30, 200, 100, 400, 150, 250]];
    const singleLineChartConfigData = {
      columns: singleLineChartDataColumns
    };

    const story = (
      <body className="cards-pf">
        <CardGrid>
          <CardGrid.Row style={{ marginBottom: '20px', marginTop: '20px' }}>
            <CardGrid.Col xs={6} sm={4} md={4}>
              <UtilizationCard>
                <CardTitle>Network</CardTitle>
                <CardBody>
                  <UtilizationCardDetails>
                    <UtilizationCardDetailsCount>200</UtilizationCardDetailsCount>
                    <UtilizationCardDetailsDesc>
                      <UtilizationCardDetailsLine1>Available</UtilizationCardDetailsLine1>
                      <UtilizationCardDetailsLine2>of 1300 Gbps</UtilizationCardDetailsLine2>
                    </UtilizationCardDetailsDesc>
                  </UtilizationCardDetails>
                  <DonutChart
                    id="donunt-chart-1"
                    data={donutConfigData}
                    title={{ type: 'max' }}
                    tooltip={donutConfigTooltip}
                  />
                  <SparklineChart id="line-chart-1" data={singleLineChartConfigData} />
                </CardBody>
              </UtilizationCard>
            </CardGrid.Col>
          </CardGrid.Row>
        </CardGrid>
      </body>
    );

    return inlineTemplate({
      title: 'Utilization Trend Card',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS}utilization-trend-card/#code`,
      story
    });
  });
};

export default utilizationCardAddWithInfo;
