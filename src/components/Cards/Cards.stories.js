import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Card, CardContainer, CardHeading, CardLink, CardTitle } from './index';
import { Icon } from '../Icon';
import { MenuItem } from '../MenuItem';
import { Grid, Row, Col } from '../Grid';
import CardTimeFrameFilter from './CardTimeFrameFilter';
import CardDropdownButton from './CardDropdownButton';
import CardBody from './CardBody';
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
                <CardTimeFrameFilter>
                  <CardDropdownButton
                    title="Dropdown"
                    onClick={action('onClick')}
                    bsStyle="primary"
                  >
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>
                      Active Item
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </CardDropdownButton>
                </CardTimeFrameFilter>
                <CardTitle>
                  <Icon name="shield" /> Card Title
                </CardTitle>
                <Card.Body>[card contents]</Card.Body>
                <Card.Footer>
                  <CardLink
                    href={
                      'https://github.com/patternfly/patternfly-react/pull/203'
                    }
                  >
                    <Icon type="pf" name="add-circle-o" /> Add New Cluster
                  </CardLink>
                </Card.Footer>
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
