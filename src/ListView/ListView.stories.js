import cx from 'classnames'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Col } from 'react-bootstrap'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'

import {
  Button,
  DropdownKebab,
  ListView,
  ListViewInfoItem,
  ListViewItem,
  ListViewIcon,
  MenuItem
} from '../index'
import { mockListItems } from './__mocks__/mockListItems'

const stories = storiesOf('ListView', module)
stories.addDecorator(withKnobs)
stories.addDecorator(
  defaultTemplate({
    title: 'ListView',
    documentationLink:
      'http://www.patternfly.org/pattern-library/content-views/list-view/'
  })
)

const renderActions = () =>
  <div>
    <Button>Details</Button>
  </div>

const renderAdditionalInfoItems = itemProperties => {
  return (
    itemProperties &&
    Object.keys(itemProperties).map(prop => {
      const classNames = cx('pficon', {
        'pficon-flavor': prop === 'hosts',
        'pficon-cluster': prop === 'clusters',
        'pficon-container-node': prop === 'nodes',
        'pficon-image': prop === 'images'
      })
      return (
        <ListViewInfoItem key={prop}>
          <span className={classNames} />
          <strong>{itemProperties[prop]}</strong> {prop}
        </ListViewInfoItem>
      )
    })
  )
}

stories.addWithInfo(
  'List of expandable items',
  `ListView usage example.`,
  () => {
    return (
      <ListView>
        {mockListItems.map((item, index) =>
          <ListViewItem
            key={index}
            actions={renderActions(item.actions)}
            checkboxInput={<input type="checkbox" />}
            leftContent={<ListViewIcon icon="fa fa-plane" />}
            additionalInfo={renderAdditionalInfoItems(item.properties)}
            heading={item.title}
            description={item.description}
            stacked={boolean('Stacked', false)}
          >
            <Row>
              <Col sm={11}>
                {item.expandedContentText}
              </Col>
            </Row>
          </ListViewItem>
        )}
      </ListView>
    )
  }
)

stories.addWithInfo('ListItem variants', `ListView usage example.`, () =>
  <ListView
    id="listView--listItemVariants"
    className="listView--listItemVariants"
  >
    <ListViewItem
      id="item1"
      className="listViewItem--listItemVariants"
      key="item1"
      description="Expandable item with description, additional items and actions"
      heading="Event One"
      checkboxInput={<input type="checkbox" />}
      leftContent={<ListViewIcon icon="fa fa-plane" />}
      additionalInfo={[
        <ListViewInfoItem key="1">
          <span className="pficon pficon-flavor" /> Item 1
        </ListViewInfoItem>,
        <ListViewInfoItem key="2">
          <span className="fa fa-bug" /> Item 2
        </ListViewInfoItem>
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
    </ListViewItem>
    <ListViewItem
      key="item2"
      leftContent={<ListViewIcon size="lg" icon="fa fa-plane" />}
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
    <ListViewItem
      key="item3"
      checkboxInput={<input type="checkbox" />}
      heading="Stacked Additional Info items"
      description={
        <span>
          The following snippet of text is rendered as <a href="">link text</a>.
        </span>
      }
      additionalInfo={[
        <ListViewInfoItem key="1" stacked>
          <strong>113,735</strong>
          <span>Service One</span>
        </ListViewInfoItem>,
        <ListViewInfoItem key="2" stacked>
          <strong>35%</strong>
          <span>Service Two</span>
        </ListViewInfoItem>
      ]}
      stacked={boolean('Stacked', false)}
    />
    <ListViewItem
      key="item4"
      additionalInfo={[
        <ListViewInfoItem key="1">
          <span className="pficon pficon-screen" /> Only Additional
        </ListViewInfoItem>,
        <ListViewInfoItem key="2">
          <span className="pficon pficon-cluster" /> Info Items
        </ListViewInfoItem>
      ]}
      stacked={boolean('Stacked', false)}
    />
    <ListViewItem
      key="item5"
      heading="Custom Event Icon"
      leftContent={
        <ListViewIcon
          size="md"
          icon="pficon pficon-ok list-view-pf-icon-success"
        />
      }
      description={
        <span>
          The following snippet of text is rendered as <a href="">link text</a>.
        </span>
      }
      additionalInfo={[
        <ListViewInfoItem key="1">
          <span className="pficon pficon-screen" />
          <strong>108</strong> Hosts
        </ListViewInfoItem>,
        <ListViewInfoItem key="2">
          <span className="pficon pficon-cluster" />
          <strong>28</strong> Clusters
        </ListViewInfoItem>
      ]}
      stacked={boolean('Stacked', false)}
    />
  </ListView>
)
