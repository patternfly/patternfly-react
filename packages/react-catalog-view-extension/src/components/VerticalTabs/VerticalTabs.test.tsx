import React from 'react';
import { mount } from 'enzyme';

import { VerticalTabs } from './VerticalTabs';
import { VerticalTabsTab } from './VerticalTabsTab';

test('Vertical Tabs renders tabs properly', () => {
  const component = mount(
    <VerticalTabs id="vertical-tabs" className="test-vertical-tabs">
      <VerticalTabsTab id="all" className="test-vertical-tabs-tab" title="All" />
      <VerticalTabsTab id="one" title="Tab One">
        <VerticalTabs>
          <VerticalTabsTab key="one-one" id="one-one" title="Tab One-One">
            <VerticalTabs activeTab>
              <VerticalTabsTab key="one-one-one" id="one-one-one" title="Tab One-One-One" active />
              <VerticalTabsTab key="one-one-two" id="one-one-two" title="Tab One-One-Two" active={false} />
              <VerticalTabsTab key="one-one-three" id="one-one-three" title="Tab One-One-Three" />
            </VerticalTabs>
          </VerticalTabsTab>
          <VerticalTabsTab key="one-two" id="one-two" title="Tab One-Two" />
          <VerticalTabsTab key="one-three" id="one-three" title="Tab One-Three" />
        </VerticalTabs>
      </VerticalTabsTab>
      <VerticalTabsTab id="two" title="Tab Two" className="test-tab-class">
        <VerticalTabs>
          <VerticalTabsTab key="one-one-one" id="two-one" title="Tab Two-One" />
          <VerticalTabsTab key="one-one-two" id="two-two" title="Tab Two-Two" />
          <VerticalTabsTab key="one-one-three" id="two-three" title="Tab Two-Three" />
        </VerticalTabs>
      </VerticalTabsTab>
      <VerticalTabsTab id="three" title="Tab Three">
        <VerticalTabs>
          <VerticalTabsTab key="three-one" id="three-one" title="Tab Three-One" />
          <VerticalTabsTab key="three-two" id="three-two" title="Tab Three-Two" />
        </VerticalTabs>
      </VerticalTabsTab>
      <VerticalTabsTab id="four" title="Tab Four" />
      <VerticalTabsTab id="five" title="Tab Five" />
      <VerticalTabsTab id="six" title="Tab Six" />
      <VerticalTabsTab id="seven" title="Tab Seven" />
    </VerticalTabs>
  );
  expect(component).toMatchSnapshot();
});

test('Vertical Tabs renders restricted tabs properly', () => {
  const component = mount(
    <VerticalTabs id="vertical-tabs" className="test-vertical-tabs" restrictTabs>
      <VerticalTabsTab id="all" className="test-vertical-tabs-tab" title="All" shown />
      <VerticalTabsTab id="one" title="Tab One" hasActiveDescendant>
        <VerticalTabs restrictTabs>
          <VerticalTabsTab key="one-one" id="one-one" title="Tab One-One">
            <VerticalTabs restrictTabs activeTab>
              <VerticalTabsTab key="one-one-one" id="one-one-one" title="Tab One-One-One" active />
              <VerticalTabsTab key="one-one-two" id="one-one-two" title="Tab One-One-Two" active={false} />
              <VerticalTabsTab key="one-one-three" id="one-one-three" title="Tab One-One-Three" />
            </VerticalTabs>
          </VerticalTabsTab>
          <VerticalTabsTab key="one-two" id="one-two" title="Tab One-Two" />
          <VerticalTabsTab key="one-three" id="one-three" title="Tab One-Three" />
        </VerticalTabs>
      </VerticalTabsTab>
      <VerticalTabsTab id="two" title="Tab Two" className="test-tab-class">
        <VerticalTabs restrictTabs activeTab>
          <VerticalTabsTab key="one-one-one" id="two-one" title="Tab Two-One" active />
          <VerticalTabsTab key="one-one-two" id="two-two" title="Tab Two-Two" active={false} />
          <VerticalTabsTab key="one-one-three" id="two-three" title="Tab Two-Three" />
        </VerticalTabs>
      </VerticalTabsTab>
      <VerticalTabsTab id="three" title="Tab Three">
        <VerticalTabs restrictTabs>
          <VerticalTabsTab key="three-one" id="three-one" title="Tab Three-One" />
          <VerticalTabsTab key="three-two" id="three-two" title="Tab Three-Two" />
        </VerticalTabs>
      </VerticalTabsTab>
      <VerticalTabsTab id="four" title="Tab Four" />
      <VerticalTabsTab id="five" title="Tab Five" />
      <VerticalTabsTab id="six" title="Tab Six" />
      <VerticalTabsTab id="seven" title="Tab Seven" />
    </VerticalTabs>
  );
  expect(component).toMatchSnapshot();
});

test('Vertical Tabs Tab onActivate is called correctly', () => {
  const onActivateMock = jest.fn();

  const component = mount(<VerticalTabsTab id="text-click" title="Click Me" onActivate={onActivateMock} />);
  component.find('#text-click > a').simulate('click');

  expect(component).toMatchSnapshot();
  expect(onActivateMock).toBeCalled();
});

test('Vertical Tabs Tab wrap styling is set correctly', () => {
  const component = mount(
    <div>
      <VerticalTabsTab id="default-wrap" title="Default Wrap" />
      <VerticalTabsTab id="word-wrap" title="Word Wrap" wrapStyle="wrap" />
      <VerticalTabsTab id="truncate" title="Truncate" wrapStyle="truncate" />
      <VerticalTabsTab id="no-wrap" title="No Wrap" wrapStyle="nowrap" />
    </div>
  );

  expect(component).toMatchSnapshot();
});
