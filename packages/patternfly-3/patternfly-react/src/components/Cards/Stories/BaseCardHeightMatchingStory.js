import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '../../Button';
import { Card, CardGrid, CardHeading, CardDropdownButton, CardTitle, CardBody, CardFooter, CardLink } from '../index';
import { Icon } from '../../Icon';
import { MenuItem } from '../../MenuItem';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { EmptyState, EmptyStateTitle, EmptyStateIcon, EmptyStateInfo, EmptyStateAction } from '../../../index';

const handleClick = e => {
  e.preventDefault();
  action('some on click')();
};

const fakeContent =
  'This is card content that is used to fill up the card. There is lots of content so it should cause ' +
  'the card to grow in height so that we can test the match height attribute and what happens when card ' +
  'contents change and cause the card to grow. The other cards should grow as well and it should only cause ' +
  'the resize sensor to be called one time.';

const baseCardHeightMatchingStory = stories => {
  stories.addWithInfo('Base Card w/HeightMatching', '', () => {
    const matchHeightBool = boolean('Match Height', true);
    const content = boolean('Content', false);
    const story = (
      <body className="cards-pf">
        <CardGrid matchHeight={matchHeightBool}>
          <CardGrid.Row style={{ marginBottom: '20px', marginTop: '20px' }}>
            <CardGrid.Col xs={6} sm={4} md={4}>
              <Card matchHeight={matchHeightBool} accented>
                <CardHeading>
                  <CardDropdownButton id="cardDropdownButton1" title="Last 30 Days" onClick={action('onClick')}>
                    <MenuItem eventKey="1" active>
                      Last 30 Days
                    </MenuItem>
                    <MenuItem eventKey="2">Last 60 Days</MenuItem>
                    <MenuItem eventKey="3">Last 90 Days</MenuItem>
                  </CardDropdownButton>
                  <CardTitle>
                    <Icon name="shield" /> Card Title
                  </CardTitle>
                </CardHeading>
                <CardBody>{content ? <span>{fakeContent}</span> : '[card contents]'}</CardBody>
                <CardFooter>
                  <CardLink onClick={handleClick} href="#" icon={<Icon type="pf" name="add-circle-o" />}>
                    Add New Cluster
                  </CardLink>
                </CardFooter>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={6} sm={4} md={4}>
              <Card matchHeight={matchHeightBool} accented>
                <CardTitle>Card Title</CardTitle>
                <CardBody>[card contents]</CardBody>
                <CardFooter>
                  <CardDropdownButton id="cardDropdownButton1" title="Last 30 Days" onClick={action('onClick')}>
                    <MenuItem eventKey="1" active>
                      Last 30 Days
                    </MenuItem>
                    <MenuItem eventKey="2">Last 60 Days</MenuItem>
                    <MenuItem eventKey="3">Last 90 Days</MenuItem>
                  </CardDropdownButton>
                  <CardLink disabled onClick={action('some on click')} icon={<Icon type="pf" name="flag" />}>
                    View CPU Events
                  </CardLink>
                </CardFooter>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={6} sm={4} md={4}>
              <Card matchHeight={matchHeightBool}>
                <CardHeading>
                  <CardTitle>Empty Card</CardTitle>
                </CardHeading>
                <CardBody>
                  <EmptyState>
                    <EmptyStateIcon />
                    <EmptyStateTitle>Empty Card</EmptyStateTitle>
                    <EmptyStateInfo>No Data</EmptyStateInfo>
                    <EmptyStateAction>
                      <Button bsStyle="primary" bsSize="large" onClick={action('Click')()}>
                        Upload Data
                      </Button>
                    </EmptyStateAction>
                  </EmptyState>
                </CardBody>
              </Card>
            </CardGrid.Col>
          </CardGrid.Row>
        </CardGrid>
      </body>
    );
    return inlineTemplate({
      title: 'Base Card',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_CARDS}base-card/#code`,
      story
    });
  });
};

export default baseCardHeightMatchingStory;
