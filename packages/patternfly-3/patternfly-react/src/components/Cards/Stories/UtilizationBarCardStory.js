import React from 'react';
import { Card, CardGrid, CardHeading, CardTitle, CardBody } from '../index';
import { UtilizationBar } from '../../UtilizationBar';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';

const utilizationBarCardStory = stories => {
  stories.addWithInfo('Utilization Bar Card', '', () => {
    const story = (
      <body className="cards-pf">
        <CardGrid>
          <CardGrid.Row style={{ marginBottom: '20px', marginTop: '20px' }}>
            <CardGrid.Col xs={12} md={5}>
              <Card>
                <CardHeading>
                  <CardTitle>Top Utilized Clusters</CardTitle>
                </CardHeading>
                <CardBody>
                  <UtilizationBar
                    min={0}
                    max={100}
                    now={95}
                    thresholdWarning={40}
                    thresholdError={70}
                    descriptionPlacementTop
                    description="RHOS6-Controller"
                    label="190.0 of 200.0 GB Used"
                  />
                  <UtilizationBar
                    min={0}
                    max={100}
                    now={50}
                    thresholdWarning={60}
                    thresholdError={80}
                    descriptionPlacementTop
                    description="CFMEQE-Cluster"
                    label="100.0 of 200.0 GB Used"
                  />
                  <UtilizationBar
                    min={0}
                    max={100}
                    now={70}
                    thresholdWarning={40}
                    thresholdError={80}
                    descriptionPlacementTop
                    description="RHOS-Undercloud"
                    label="140.0 of 200.0 GB Used"
                  />
                  <UtilizationBar
                    min={0}
                    max={100}
                    now={76.5}
                    thresholdWarning={40}
                    thresholdError={80}
                    descriptionPlacementTop
                    description="RHEL6-Controller"
                    label="153.0 of 200.0 GB Used"
                  />
                </CardBody>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={12} md={5}>
              <Card>
                <CardHeading>
                  <CardTitle>Quotas</CardTitle>
                </CardHeading>
                <CardBody>
                  <UtilizationBar min={0} max={100} now={25} description="CPU" label="115 of 460 MHz" />
                  <UtilizationBar min={0} max={100} now={50} description="Memory" label="8 of 16 GB" />
                  <UtilizationBar min={0} max={100} now={62.5} description="Pods" label="5 of 8 Total" />
                  <UtilizationBar min={0} max={100} now={100} description="Services" label="2 of 2 Total" />
                </CardBody>
              </Card>
            </CardGrid.Col>
          </CardGrid.Row>
        </CardGrid>
      </body>
    );
    return inlineTemplate({
      title: 'Utilization Bar Card',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS}utilization-bar-card/#code`,
      story
    });
  });
};

export default utilizationBarCardStory;
