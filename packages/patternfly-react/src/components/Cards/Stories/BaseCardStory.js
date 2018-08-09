import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Card, CardGrid, CardHeading, CardDropdownButton, CardTitle, CardBody, CardFooter, CardLink } from '../index';
import { Icon } from '../../Icon';
import { MenuItem } from '../../MenuItem';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';

const handleClick = e => {
  e.preventDefault();
  action('some on click')();
};

const baseCardAddWithInfo = stories => {
  stories.addWithInfo('Base Card', '', () => {
    const accentedBool = boolean('Accent', false);

    const story = (
      <body className="cards-pf">
        <CardGrid>
          <CardGrid.Row style={{ marginBottom: '20px', marginTop: '20px' }}>
            <CardGrid.Col xs={12} md={5}>
              <Card accented={accentedBool}>
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
                  <CardLink disabled onClick={handleClick} icon={<Icon type="pf" name="flag" />}>
                    View CPU Events
                  </CardLink>
                </CardFooter>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={12} md={5}>
              <Card accented={accentedBool}>
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
                  <CardLink onClick={handleClick} href="#" icon={<Icon type="pf" name="add-circle-o" />}>
                    Add New Cluster
                  </CardLink>
                </CardFooter>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={12} md={5}>
              <Card accented={accentedBool}>
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
                <CardBody>[card contents]</CardBody>
              </Card>
            </CardGrid.Col>
            <CardGrid.Col xs={12} md={5}>
              <Card style={{ height: '120px' }}>
                <CardTitle>Empty Card</CardTitle>
                <CardBody>[card contents]</CardBody>
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

export default baseCardAddWithInfo;
