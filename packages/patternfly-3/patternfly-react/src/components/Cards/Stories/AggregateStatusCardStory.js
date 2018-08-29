import React from 'react';
import { action } from '@storybook/addon-actions';
import { OverlayTrigger, Tooltip } from '../../../index';
import { Card, CardGrid, CardTitle, CardBody } from '../index';
import {
  AggregateStatusCount,
  AggregateStatusNotification,
  AggregateStatusNotifications
} from '../AggregateStatusCard';
import { Icon } from '../../Icon';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';

const handleClick = e => {
  e.preventDefault();
  action('some on click')();
};
const tooltip = <Tooltip id="tooltip">Tooltip!</Tooltip>;

const aggregateCardAddWithInfo = stories => {
  stories.addWithInfo('Aggregate Status Card', '', () => {
    const story = (
      <body className="cards-pf">
        <CardGrid>
          <CardGrid.Row style={{ marginBottom: '20px', marginTop: '20px' }}>
            <CardGrid.Col xs={6} sm={3} md={3}>
              <Card accented aggregated>
                <CardTitle onClick={handleClick}>
                  <a href="#">
                    <Icon name="shield" />
                    <AggregateStatusCount> 9 </AggregateStatusCount>
                    Ipsum
                  </a>
                </CardTitle>
                <CardBody>
                  <AggregateStatusNotifications>
                    <AggregateStatusNotification onClick={handleClick}>
                      <OverlayTrigger overlay={tooltip}>
                        <a href="#" className="add">
                          <Icon type="pf" name="add-circle-o" />
                        </a>
                      </OverlayTrigger>
                    </AggregateStatusNotification>
                  </AggregateStatusNotifications>
                </CardBody>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={6} sm={3} md={3}>
              <Card accented aggregated>
                <CardTitle onClick={handleClick}>
                  <a href="#">
                    <Icon name="shield" />
                    <AggregateStatusCount>20 </AggregateStatusCount>
                    Amet{' '}
                  </a>
                </CardTitle>
                <CardBody>
                  <AggregateStatusNotifications>
                    <AggregateStatusNotification onClick={handleClick}>
                      <a href="#">
                        <Icon type="pf" name="error-circle-o" />4
                      </a>{' '}
                    </AggregateStatusNotification>
                    <AggregateStatusNotification onClick={handleClick}>
                      <a href="#">
                        <Icon type="pf" name="warning-triangle-o" />1
                      </a>
                    </AggregateStatusNotification>
                  </AggregateStatusNotifications>
                </CardBody>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={6} sm={3} md={3}>
              <Card accented aggregated>
                <CardTitle onClick={handleClick}>
                  <a href="#">
                    <Icon name="shield" />
                    <AggregateStatusCount> 9 </AggregateStatusCount>
                    Adipiscing
                  </a>
                </CardTitle>
                <CardBody>
                  <AggregateStatusNotifications>
                    <AggregateStatusNotification onClick={handleClick}>
                      <Icon type="pf" name="ok" />
                    </AggregateStatusNotification>
                  </AggregateStatusNotifications>
                </CardBody>
              </Card>
            </CardGrid.Col>
          </CardGrid.Row>
          <div>
            <h2> Mini Card Alternate</h2>
          </div>
          <CardGrid.Row>
            <CardGrid.Col xs={6} sm={3} md={3}>
              <Card accented aggregatedMini>
                <CardTitle>
                  <Icon name="rebel" />
                  <AggregateStatusCount> 0 </AggregateStatusCount>
                  Ipsum
                </CardTitle>
                <CardBody>
                  <AggregateStatusNotifications>
                    <AggregateStatusNotification onClick={handleClick}>
                      <OverlayTrigger overlay={tooltip}>
                        <a href="#" className="add">
                          <Icon type="pf" name="add-circle-o" />
                        </a>
                      </OverlayTrigger>
                    </AggregateStatusNotification>
                  </AggregateStatusNotifications>
                </CardBody>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={6} sm={3} md={3}>
              <Card accented aggregatedMini>
                <CardTitle onClick={handleClick}>
                  <a href="#">
                    <Icon name="paper-plane" />
                    <AggregateStatusCount> 20 </AggregateStatusCount>
                    Amet
                  </a>
                </CardTitle>
                <CardBody>
                  <AggregateStatusNotifications>
                    <AggregateStatusNotification onClick={handleClick}>
                      <OverlayTrigger overlay={tooltip}>
                        <a href="#" className="add">
                          <Icon type="pf" name="error-circle-o" />4
                        </a>
                      </OverlayTrigger>
                    </AggregateStatusNotification>
                  </AggregateStatusNotifications>
                </CardBody>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={6} sm={3} md={3}>
              <Card accented aggregatedMini>
                <CardTitle onClick={handleClick}>
                  <a href="#">
                    <Icon type="pf" name="cluster" />
                    <AggregateStatusCount> 9 </AggregateStatusCount>
                    Adipiscing
                  </a>
                </CardTitle>
                <CardBody>
                  <AggregateStatusNotifications>
                    <AggregateStatusNotification>
                      <Icon type="pf" name="ok" />
                    </AggregateStatusNotification>
                  </AggregateStatusNotifications>
                </CardBody>
              </Card>
            </CardGrid.Col>
          </CardGrid.Row>
        </CardGrid>
      </body>
    );
    return inlineTemplate({
      title: 'Aggregate Status Card',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS}aggregate-status-card/#code`,
      story
    });
  });
};

export default aggregateCardAddWithInfo;
