import React from 'react';
import { mount } from 'enzyme';
import VerticalTabs from './VerticalTabs';

test('Vertical Tabs renders properly', () => {
  const component = mount(
    <VerticalTabs id="vertical-tabs" className="test-class">
      <VerticalTabs.Tab id="one" title="Tab One" active />
      <VerticalTabs.Tab id="two" title="Tab Two" className="test-tab-class" />
      <VerticalTabs.Tab id="three" title="Tab Three" />
      <VerticalTabs.Tab id="four" title="Tab Four" />
      <VerticalTabs.Tab id="five" title="Tab Five" />
      <VerticalTabs.Tab id="six" title="Tab Six" />
      <VerticalTabs.Tab id="seven" title="Tab Seven" />
    </VerticalTabs>
  );
  expect(component.render()).toMatchSnapshot();
});
