import cx from 'classnames';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from 'react-bootstrap';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';

import { Button } from '../Button';
import { DropdownKebab } from '../DropdownKebab';
import { Icon } from '../Icon';
import { MenuItem } from '../MenuItem';
import { ListView } from './index';
import { mockListItems } from './__mocks__/mockListItems';

const stories = storiesOf('ListView', module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'ListView',
    documentationLink:
      'http://www.patternfly.org/pattern-library/content-views/list-view/',
  }),
);

const renderActions = () => (
  <div>
    <Button>Details</Button>
  </div>
);

const renderAdditionalInfoItems = itemProperties => {
  return (
    itemProperties &&
    Object.keys(itemProperties).map(prop => {
      const classNames = cx('pficon', {
        'pficon-flavor': prop === 'hosts',
        'pficon-cluster': prop === 'clusters',
        'pficon-container-node': prop === 'nodes',
        'pficon-image': prop === 'images',
      });
      return (
        <ListView.InfoItem key={prop}>
          <span className={classNames} />
          <strong>{itemProperties[prop]}</strong> {prop}
        </ListView.InfoItem>
      );
    })
  );
};

stories.addWithInfo(
  'List of expandable items',
  `ListView usage example.`,
  () => {
    return (
      <ListView>
        {mockListItems.map((item, index) => (
          <ListView.Item
            key={index}
            actions={renderActions(item.actions)}
            checkboxInput={<input type="checkbox" />}
            leftContent={<ListView.Icon name="plane" />}
            additionalInfo={renderAdditionalInfoItems(item.properties)}
            heading={item.title}
            description={item.description}
            stacked={boolean('Stacked', false)}
          >
            <Row>
              <Col sm={11}>{item.expandedContentText}</Col>
            </Row>
          </ListView.Item>
        ))}
      </ListView>
    );
  },
);

stories.addWithInfo('ListItem variants', `ListView usage example.`, () => (
  <ListView
    id="listView--listItemVariants"
    className="listView--listItemVariants"
  >
    <ListView.Item
      id="item1"
      className="listViewItem--listItemVariants"
      key="item1"
      description="Expandable item with description, additional items and actions"
      heading="Event One"
      checkboxInput={<input type="checkbox" />}
      leftContent={<ListView.Icon name="plane" />}
      additionalInfo={[
        <ListView.InfoItem key="1">
          <Icon type="pf" name="flavor" /> Item 1
        </ListView.InfoItem>,
        <ListView.InfoItem key="2">
          <Icon name="bug" /> Item 2
        </ListView.InfoItem>,
      ]}
      actions={
        <div>
          <Button>Action 1</Button>
          <DropdownKebab id="action2kebab" pullRight>
            <MenuItem>Action 2</MenuItem>
          </DropdownKebab>
        </div>
      }
      stacked={boolean('Stacked', false)}
    >
      Expanded Content
    </ListView.Item>
    <ListView.Item
      key="item2"
      leftContent={<ListView.Icon size="lg" name="plane" />}
      heading={
        <span>
          This is EVENT One that is with very LONG and should not overflow and
          push other elements out of the bounding box.
          <small>Feb 23, 2015 12:32 am</small>
        </span>
      }
      description={
        <span>
          The following snippet of text is rendered as <a href="">link text</a>.
        </span>
      }
      stacked={boolean('Stacked', false)}
    />
    <ListView.Item
      key="item3"
      checkboxInput={<input type="checkbox" />}
      heading="Stacked Additional Info items"
      description={
        <span>
          The following snippet of text is rendered as <a href="">link text</a>.
        </span>
      }
      additionalInfo={[
        <ListView.InfoItem key="1" stacked>
          <strong>113,735</strong>
          <span>Service One</span>
        </ListView.InfoItem>,
        <ListView.InfoItem key="2" stacked>
          <strong>35%</strong>
          <span>Service Two</span>
        </ListView.InfoItem>,
      ]}
      stacked={boolean('Stacked', false)}
    />
    <ListView.Item
      key="item4"
      additionalInfo={[
        <ListView.InfoItem key="1">
          <Icon type="pf" name="screen" /> Only Additional
        </ListView.InfoItem>,
        <ListView.InfoItem key="2">
          <Icon type="pf" name="cluster" /> Info Items
        </ListView.InfoItem>,
      ]}
      stacked={boolean('Stacked', false)}
    />
    <ListView.Item
      key="item5"
      heading="Custom Event Icon"
      leftContent={
        <ListView.Icon
          type="pf"
          name="ok"
          size="md"
          className="list-view-pf-icon-success"
        />
      }
      description={
        <span>
          The following snippet of text is rendered as <a href="">link text</a>.
        </span>
      }
      additionalInfo={[
        <ListView.InfoItem key="1">
          <Icon type="pf" name="screen" />
          <strong>108</strong> Hosts
        </ListView.InfoItem>,
        <ListView.InfoItem key="2">
          <Icon type="pf" name="cluster" />
          <strong>28</strong> Clusters
        </ListView.InfoItem>,
      ]}
      stacked={boolean('Stacked', false)}
    />
  </ListView>
));
