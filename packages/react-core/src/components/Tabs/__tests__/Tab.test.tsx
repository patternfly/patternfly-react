import React from 'react';
import { mount } from 'enzyme';
import { Tab } from '../Tab';
import { TabTitleText } from '../TabTitleText';

test('should not render anything', () => {
  const view = mount(
  <Tab eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
      Tab 1 section
    </Tab>
  );
  expect(view).toMatchSnapshot();
});
