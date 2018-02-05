import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Card, CardContainer, CardHeading, CardLink } from './index';
import { Icon } from '../Icon';
import { MenuItem } from '../MenuItem';
import { Grid, Row, Col } from '../Grid';
import CardTimeFrameFilter from './CardTimeFrameFilter';
import CardDropdownButton from './CardDropdownButton';

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
                <Card.Title>
                  <Icon name="shield" /> Card Title
                </Card.Title>
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

/*                 <div>
        <p>
          <a href="#" className="card-pf-link-with-icon">
            <span className="pficon pficon-add-circle-o" />Add New
                        Cluster
                      </a>
        </p>
      </div>
      */
