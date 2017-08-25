import React from 'react'
import renderer from 'react-test-renderer'
import { Row, Col } from 'react-bootstrap'

import { ListView, ListViewItem, ListViewIcon } from '../index'
import {
  mockListItems,
  renderActions,
  renderAdditionalInfoItems
} from './__mocks__/mockListItems'

test('ListView renders properly', () => {
  const component = renderer.create(
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
          stacked
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

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
