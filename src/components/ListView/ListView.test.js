import React from 'react';
import renderer from 'react-test-renderer';
import { Row, Col } from 'react-bootstrap';

import { ListView } from './index';
import {
  mockListItems,
  renderActions,
  renderAdditionalInfoItems,
} from './__mocks__/mockListItems';

test('ListView renders properly', () => {
  const component = renderer.create(
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
          stacked
        >
          <Row>
            <Col sm={11}>{item.expandedContentText}</Col>
          </Row>
        </ListView.Item>
      ))}
    </ListView>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
