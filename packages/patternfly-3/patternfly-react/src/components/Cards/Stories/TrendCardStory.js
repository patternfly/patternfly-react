import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card, CardGrid, CardHeading, CardDropdownButton, CardTitle, CardBody, CardFooter, CardLink } from '../index';
import { SparklineChart } from '../../Chart/index';
import {
  UtilizationCardDetails,
  UtilizationCardDetailsCount,
  UtilizationCardDetailsDesc,
  UtilizationCardDetailsLine1,
  UtilizationCardDetailsLine2
} from '../UtilizationTrendCard/index';
import { Icon } from '../../Icon';
import { MenuItem } from '../../MenuItem';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';

const handleClick = e => {
  e.preventDefault();
  action('some on click')();
};

const trendCardAddWithInfo = stories => {
  stories.addWithInfo('Trend Card', () => {
    const singleLineChartDataColumns = [['data1', 30, 200, 100, 400, 150, 250]];
    const singleLineChartConfigData = {
      columns: singleLineChartDataColumns
    };

    const story = (
      <body className="cards-pf">
        <CardGrid>
          <CardGrid.Row style={{ marginBottom: '20px', marginTop: '20px' }}>
            <CardGrid.Col xs={3} sm={4} md={4}>
              <Card>
                <CardTitle>Network</CardTitle>
                <CardBody>
                  <UtilizationCardDetails>
                    <UtilizationCardDetailsCount>35%</UtilizationCardDetailsCount>
                    <UtilizationCardDetailsDesc>
                      <UtilizationCardDetailsLine1>Available</UtilizationCardDetailsLine1>
                      <UtilizationCardDetailsLine2>of 1000Mhz</UtilizationCardDetailsLine2>
                    </UtilizationCardDetailsDesc>
                  </UtilizationCardDetails>
                  <SparklineChart id="line-chart-1" data={singleLineChartConfigData} />
                </CardBody>
              </Card>
            </CardGrid.Col>
          </CardGrid.Row>
          <CardGrid.Row style={{ marginBottom: '20px' }}>
            <CardGrid.Col xs={6} sm={4} md={4}>
              <Card accented>
                <CardHeading>
                  <CardTitle>Cluster Utilization</CardTitle>
                </CardHeading>
                <CardBody>
                  <div>
                    <h2> Data </h2>
                  </div>
                  <SparklineChart id="line-chart-1" data={singleLineChartConfigData} />
                </CardBody>
                <CardFooter>
                  <CardDropdownButton id="cardDropdownButton2" title="Last 30 Days" onClick={action('onClick')}>
                    <MenuItem eventKey="1" active>
                      Last 30 Days
                    </MenuItem>
                    <MenuItem eventKey="2">Last 60 Days</MenuItem>
                    <MenuItem eventKey="3">Last 90 Days</MenuItem>
                  </CardDropdownButton>
                  <CardLink onClick={handleClick} href="#" icon={<Icon type="pf" name="add-circle-o" />}>
                    {' '}
                    Add New Cluster
                  </CardLink>
                </CardFooter>
              </Card>
            </CardGrid.Col>
          </CardGrid.Row>
        </CardGrid>
      </body>
    );

    return inlineTemplate({
      title: 'Trend Card',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS}trend-card/`,
      story
    });
  });
};

export default trendCardAddWithInfo;
