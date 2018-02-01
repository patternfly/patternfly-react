import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Card, CardContainer, CardHeading, CardLinkWithIcon } from './index';
import { Icon } from '../Icon';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { Grid, Row, Col } from '../Grid';
import CardTimeFrameFilter from './CardTimeFrameFilter';

const stories = storiesOf('Cards', module);
stories.addDecorator(withKnobs);

stories.addWithInfo('Base Card', () => {
  const accentedBool = boolean('Accent', false);
  const aggregatedBool = boolean('Aggregate', false);

  // const bsStyle = select(
  //   'Style',
  //   ['danger', 'default', 'primary', 'link'],
  //   'default'
  // );
  // const bsSize = select('Size', [undefined, 'xsmall', 'small', 'large']);
  // const props = { bsStyle, title: bsStyle, id: 'dropdown-example' };
  // if (bsSize) props.bsSize = bsSize;

  let story = (
    <Grid>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={6} sm={4} md={4}>
          <CardContainer>
            <Card accented={accentedBool} aggregated={aggregatedBool}>
              <CardHeading>
                <CardTimeFrameFilter>
                  <DropdownButton
                    className="card-pf-time-frame-filter"
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
                  </DropdownButton>
                </CardTimeFrameFilter>
                <Card.Title>
                  <Icon name="shield" /> Card Title
                </Card.Title>
                <Card.Body>Card Body</Card.Body>
                <Card.Footer>
                  <CardLinkWithIcon
                    href={
                      'https://github.com/patternfly/patternfly-react/pull/203'
                    }
                  >
                    <Icon type="pf" name="add-circle-o" /> Add New Cluster
                  </CardLinkWithIcon>
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
