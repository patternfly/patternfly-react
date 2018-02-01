import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Card, CardContainer, CardHeading } from './index';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Grid, Row, Col } from '../Grid';

const stories = storiesOf('Cards', module);

stories.addDecorator(
  defaultTemplate({
    title: 'Card',
    documentationLink: DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS + 'base-card/'
  })
);

stories.addWithInfo('Card', () => {
  return (
    <Grid>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={12} md={3}>
          <CardContainer>
            <Card>
              <CardHeading>
                <div className="dropdown card-pf-time-frame-filter">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Last 30 Days <span className="caret" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" role="menu">
                    <li className="selected">
                      <a href="#">Last 30 Days</a>
                    </li>
                    <li>
                      <a href="#">Last 60 Days</a>
                    </li>
                    <li>
                      <a href="#">Last 90 Days</a>
                    </li>
                  </ul>
                </div>
                <Card.Title>
                  <span>
                    <Icon name="shield" /> Card Title
                  </span>
                </Card.Title>
                <Card.Body>This is the Card component.</Card.Body>
                <Card.Footer>
                  <div>
                    <div className="dropdown card-pf-time-frame-filter">
                      <button
                        type="button"
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Last 30 Days <span className="caret" />
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-right"
                        role="menu"
                      >
                        <li className="selected">
                          <a href="#">Last 30 Days</a>
                        </li>
                        <li>
                          <a href="#">Last 60 Days</a>
                        </li>
                        <li>
                          <a href="#">Last 90 Days</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      <a href="#" className="card-pf-link-with-icon">
                        <span className="pficon pficon-add-circle-o" />Add New
                        Cluster
                      </a>
                    </p>
                  </div>
                </Card.Footer>
              </CardHeading>
            </Card>
          </CardContainer>
        </Col>
        <Col xs={12} md={3}>
          <CardContainer>
            <Card accented aggregated>
              <CardHeading>
                <div className="dropdown card-pf-time-frame-filter">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Last 30 Days <span className="caret" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" role="menu">
                    <li className="selected">
                      <a href="#">Last 30 Days</a>
                    </li>
                    <li>
                      <a href="#">Last 60 Days</a>
                    </li>
                    <li>
                      <a href="#">Last 90 Days</a>
                    </li>
                  </ul>
                </div>
                <Card.Title>
                  <span>
                    <Icon name="shield" /> Card Title
                  </span>
                </Card.Title>
                <Card.Body>This is the Card component.</Card.Body>
                <Card.Footer>
                  <div>
                    <div className="dropdown card-pf-time-frame-filter">
                      <button
                        type="button"
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Last 30 Days <span className="caret" />
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-right"
                        role="menu"
                      >
                        <li className="selected">
                          <a href="#">Last 30 Days</a>
                        </li>
                        <li>
                          <a href="#">Last 60 Days</a>
                        </li>
                        <li>
                          <a href="#">Last 90 Days</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      <a href="#" className="card-pf-link-with-icon">
                        <span className="pficon pficon-add-circle-o" />Add New
                        Cluster
                      </a>
                    </p>
                  </div>
                </Card.Footer>
              </CardHeading>
            </Card>
          </CardContainer>
        </Col>
      </Row>
    </Grid>
  );
});

stories.addWithInfo('Utilization Bar Card', () => {
  return (
    <Card>
      <Card.Title>
        <span>
          <Icon name="shield" /> Top Utilized Clusters
        </span>
      </Card.Title>
      <Card.Body>
        <div>
          <div className="progress-description">Gilad Knows React</div>
          <div className="progress progress-label-top-right">
            <div
              className="progress-bar progress-bar-danger"
              role="progressbar"
              aria-valuenow={95}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: '95%' }}
              data-toggle="tooltip"
              title="95% Used"
            >
              <span>
                <strong>190.0 of 200.0 GB</strong> Used
              </span>
            </div>
            <div
              className="progress-bar progress-bar-remaining"
              role="progressbar"
              aria-valuenow={5}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: '5%' }}
              data-toggle="tooltip"
              title="5% Available"
            >
              <span className="sr-only">5% Available</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
});
