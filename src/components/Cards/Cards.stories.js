import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Card, CardContainer, CardHeading } from './index';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Grid, Row, Col } from '../Grid';

const stories = storiesOf('Cards', module);
stories.addDecorator(withKnobs);

stories.addWithInfo('Base Card', () => {
  const accentedBool = boolean('Accent', false);
  const aggregatedBool = boolean('Aggregate', false);

  let story = (
    <Grid>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={6} sm={4} md={4}>
          <CardContainer>
            <Card accented={accentedBool} aggregated={aggregatedBool}>
              <CardHeading>
                <div className="dropdown card-pf-time-frame-filter">
                  <Button>
                    Button
                    <span className="caret" />
                  </Button>
                </div>
                <Card.Title>
                  <span>
                    <Icon name="shield" /> Card Title
                  </span>
                </Card.Title>
                <Card.Body>Card Body</Card.Body>
                <Card.Footer>
                  <div>
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
  return inlineTemplate({
    title: 'Base Card',
    documentationLink:
      DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS + 'base-card/#code',
    story: story
  });
});
