import React from 'react';
import { mount } from 'enzyme';
import { Row, Col } from '../Grid';

import { ListView } from './index';
import { mockListItems, renderActions, renderAdditionalInfoItems } from './__mocks__/mockListItems';

test('ListView renders properly', () => {
  const component = mount(
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
    </ListView>
  );

  expect(component.render()).toMatchSnapshot();
});
