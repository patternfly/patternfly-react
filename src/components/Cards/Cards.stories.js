import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import {
  Card,
  CardTitle,
  CardBody,
  CardContainer,
  CardHeading,
  CardFooter,
  CardLink,
  CardDropdownButton
} from './index';
import { Icon } from '../Icon';
import { MenuItem } from '../MenuItem';
import { Grid, Row, Col } from '../Grid';
import {
  AggregateStatusCount,
  AggregateStatusNotification,
  AggregateStatusNotifications
} from './AggregateStatusCard/index';

const stories = storiesOf('Cards', module);
stories.addDecorator(withKnobs);

stories.addWithInfo('Base Card', () => {
  const accentedBool = boolean('Accent', false);
  const aggregatedBool = boolean('Aggregate', false);
  const aggregatedMiniBool = boolean('Mini Aggregate', false);
  let story = (
    <Grid>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={6} sm={4} md={4}>
          <CardContainer>
            <Card
              accented={accentedBool}
              aggregated={aggregatedBool}
              aggregatedMini={aggregatedMiniBool}
            >
              <CardHeading>
                <CardDropdownButton
                  id="cardDropdownButton1"
                  title="Last 30 Days"
                  onClick={action('onClick')}
                >
                  <MenuItem eventKey="1" active>
                    Last 30 Days
                  </MenuItem>
                  <MenuItem eventKey="2">Last 60 Days</MenuItem>
                  <MenuItem eventKey="3">Last 90 Days</MenuItem>
                </CardDropdownButton>
                <CardTitle>
                  <Icon name="shield" /> Card Title
                </CardTitle>
                <CardBody>[card contents]</CardBody>
                <CardFooter>
                  <CardLink
                    href={
                      'https://github.com/patternfly/patternfly-react/pull/203'
                    }
                    icon={<Icon type="pf" name="add-circle-o" />}
                  >
                    Add New Cluster
                  </CardLink>
                </CardFooter>
              </CardHeading>
            </Card>
          </CardContainer>
        </Col>
      </Row>
    </Grid>
  );
  return inlineTemplate({
    title: 'Base Card',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS + 'base-card/#code',
    story: story
  });
});

stories.addWithInfo('Aggregate Status Card', () => {
  let story = (
    <CardContainer>
      <Row className={'row-cards-pf'}>
        <Col xs={6} sm={4} md={4}>
          <Card accented aggregated>
            <CardTitle>
              <Icon name="shield" />
              <AggregateStatusCount> 9 </AggregateStatusCount>
              Ipsum
            </CardTitle>
            <CardBody>
              <AggregateStatusNotifications>
                <AggregateStatusNotification>
                  <a
                    href="#"
                    className="add"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add Ipsum"
                  >
                    <Icon type="pf" name="add-circle-o" />
                  </a>
                </AggregateStatusNotification>
              </AggregateStatusNotifications>
            </CardBody>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={4}>
          <Card accented aggregated>
            <CardTitle>
              <a href="#">
                <Icon name="shield" />
                <AggregateStatusCount> 20 </AggregateStatusCount>
                Amet{' '}
              </a>
            </CardTitle>
            <CardBody>
              <AggregateStatusNotifications>
                <AggregateStatusNotification>
                  <a href="#">
                    <Icon type="pf" name="error-circle-o" />4
                  </a>
                </AggregateStatusNotification>
                <AggregateStatusNotification>
                  <a href="#">
                    <Icon type="pf" name="warning-triangle-o" />1
                  </a>
                </AggregateStatusNotification>
              </AggregateStatusNotifications>
            </CardBody>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={4}>
          <Card accented aggregated>
            <CardTitle>
              <a href="#">
                <Icon name="shield" />
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
        </Col>
      </Row>
      <div>
        <h2> Mini Card Alternate</h2>
      </div>
      <Row>
        <Col xs={6} sm={4} md={4}>
          <Card accented aggregated aggregatedMini>
            <CardTitle>
              <Icon name="rebel" />
              <AggregateStatusCount> 0 </AggregateStatusCount>
              Ipsum
            </CardTitle>
            <CardBody>
              <AggregateStatusNotifications>
                <AggregateStatusNotification>
                  <a
                    href="#"
                    className="add"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add Ipsum"
                  >
                    <Icon type="pf" name="add-circle-o" />
                  </a>
                </AggregateStatusNotification>
              </AggregateStatusNotifications>
            </CardBody>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={4}>
          <Card accented aggregated aggregatedMini>
            <CardTitle>
              <Icon name="paper-plane" />
              <AggregateStatusCount> 20 </AggregateStatusCount>
              Amet
            </CardTitle>
            <CardBody>
              <AggregateStatusNotifications>
                <AggregateStatusNotification>
                  <a
                    href="#"
                    className="add"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add Ipsum"
                  >
                    <Icon type="pf" name="error-circle-o" />4
                  </a>
                </AggregateStatusNotification>
              </AggregateStatusNotifications>
            </CardBody>
          </Card>
        </Col>
        <Col xs={6} sm={4} md={4}>
          <Card accented aggregated aggregatedMini>
            <CardTitle>
              <Icon type="pf" name="cluster" />
              <AggregateStatusCount> 9 </AggregateStatusCount>
              Adipiscing
            </CardTitle>
            <CardBody>
              <AggregateStatusNotifications>
                <AggregateStatusNotification>
                  <a
                    href="#"
                    className="add"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add Ipsum"
                  >
                    <Icon type="pf" name="ok" />
                  </a>
                </AggregateStatusNotification>
              </AggregateStatusNotifications>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </CardContainer>
  );
  return inlineTemplate({
    title: 'Aggregate Status Card',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS + 'aggregate-status-card/#code',
    story: story
  });
});
