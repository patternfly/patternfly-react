import React from 'react';
import { shallow } from 'enzyme';
import { Tab } from './Tab';

test('should render tab', () => {
  const view = shallow(
    <Tab eventKey={0} title="Tab item 1">
      Tab 1 section
    </Tab>
  );
  expect(view).toMatchSnapshot();
});

test('should render tab with node', () => {
  const view = shallow(
    <Tab eventKey={0} title={<span>Tab item 1</span>}>
      Tab 1 section
    </Tab>
  );
  expect(view).toMatchSnapshot();
});

test('should render active tab', () => {
  const view = shallow(
    <Tab eventKey={0} title="Tab item 1">
      Tab 1 section
    </Tab>
  );
  expect(view).toMatchSnapshot();
});
