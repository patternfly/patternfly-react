import React from 'react';
import { mount } from 'enzyme';
import VerticalTabs from './VerticalTabs';

test('Vertical Tabs renders tabs properly', () => {
  const component = mount(
    <VerticalTabs id="vertical-tabs" className="test-vertical-tabs">
      <VerticalTabs.Tab id="all" className="test-vertical-tabs-tab" title="All" />
      <VerticalTabs.Tab id="one" title="Tab One">
        <VerticalTabs>
          <VerticalTabs.Tab key="one-one" id="one-one" title="Tab One-One">
            <VerticalTabs activeTab>
              <VerticalTabs.Tab key="one-one-one" id="one-one-one" title="Tab One-One-One" active />
              <VerticalTabs.Tab key="one-one-two" id="one-one-two" title="Tab One-One-Two" active={false} />
              <VerticalTabs.Tab key="one-one-three" id="one-one-three" title="Tab One-One-Three" />
            </VerticalTabs>
          </VerticalTabs.Tab>
          <VerticalTabs.Tab key="one-two" id="one-two" title="Tab One-Two" />
          <VerticalTabs.Tab key="one-three" id="one-three" title="Tab One-Three" />
        </VerticalTabs>
      </VerticalTabs.Tab>
      <VerticalTabs.Tab id="two" title="Tab Two" className="test-tab-class">
        <VerticalTabs>
          <VerticalTabs.Tab key="one-one-one" id="two-one" title="Tab Two-One" />
          <VerticalTabs.Tab key="one-one-two" id="two-two" title="Tab Two-Two" />
          <VerticalTabs.Tab key="one-one-three" id="two-three" title="Tab Two-Three" />
        </VerticalTabs>
      </VerticalTabs.Tab>
      <VerticalTabs.Tab id="three" title="Tab Three">
        <VerticalTabs>
          <VerticalTabs.Tab key="three-one" id="three-one" title="Tab Three-One" />
          <VerticalTabs.Tab key="three-two" id="three-two" title="Tab Three-Two" />
        </VerticalTabs>
      </VerticalTabs.Tab>
      <VerticalTabs.Tab id="four" title="Tab Four" />
      <VerticalTabs.Tab id="five" title="Tab Five" />
      <VerticalTabs.Tab id="six" title="Tab Six" />
      <VerticalTabs.Tab id="seven" title="Tab Seven" />
    </VerticalTabs>
  );
  expect(component.render()).toMatchSnapshot();
});

test('Vertical Tabs renders restricted tabs properly', () => {
  const component = mount(
    <VerticalTabs id="vertical-tabs" className="test-vertical-tabs" restrictTabs>
      <VerticalTabs.Tab id="all" className="test-vertical-tabs-tab" title="All" shown />
      <VerticalTabs.Tab id="one" title="Tab One" hasActiveDescendant>
        <VerticalTabs restrictTabs>
          <VerticalTabs.Tab key="one-one" id="one-one" title="Tab One-One">
            <VerticalTabs restrictTabs activeTab>
              <VerticalTabs.Tab key="one-one-one" id="one-one-one" title="Tab One-One-One" active />
              <VerticalTabs.Tab key="one-one-two" id="one-one-two" title="Tab One-One-Two" active={false} />
              <VerticalTabs.Tab key="one-one-three" id="one-one-three" title="Tab One-One-Three" />
            </VerticalTabs>
          </VerticalTabs.Tab>
          <VerticalTabs.Tab key="one-two" id="one-two" title="Tab One-Two" />
          <VerticalTabs.Tab key="one-three" id="one-three" title="Tab One-Three" />
        </VerticalTabs>
      </VerticalTabs.Tab>
      <VerticalTabs.Tab id="two" title="Tab Two" className="test-tab-class">
        <VerticalTabs restrictTabs activeTab>
          <VerticalTabs.Tab key="one-one-one" id="two-one" title="Tab Two-One" active />
          <VerticalTabs.Tab key="one-one-two" id="two-two" title="Tab Two-Two" active={false} />
          <VerticalTabs.Tab key="one-one-three" id="two-three" title="Tab Two-Three" />
        </VerticalTabs>
      </VerticalTabs.Tab>
      <VerticalTabs.Tab id="three" title="Tab Three">
        <VerticalTabs restrictTabs>
          <VerticalTabs.Tab key="three-one" id="three-one" title="Tab Three-One" />
          <VerticalTabs.Tab key="three-two" id="three-two" title="Tab Three-Two" />
        </VerticalTabs>
      </VerticalTabs.Tab>
      <VerticalTabs.Tab id="four" title="Tab Four" />
      <VerticalTabs.Tab id="five" title="Tab Five" />
      <VerticalTabs.Tab id="six" title="Tab Six" />
      <VerticalTabs.Tab id="seven" title="Tab Seven" />
    </VerticalTabs>
  );
  expect(component.render()).toMatchSnapshot();
});

test('Vertical Tabs Tab onActivate is called correctly', () => {
  const onActivateMock = jest.fn();

  const component = mount(<VerticalTabs.Tab id="text-click" title="Click Me" onActivate={onActivateMock} />);
  component.find('#text-click > a').simulate('click');

  expect(component.render()).toMatchSnapshot();
  expect(onActivateMock).toBeCalled();
});

test('Vertical Tabs Tab wrap styling is set correctly', () => {
  const component = mount(
    <div>
      <VerticalTabs.Tab id="default-wrap" title="Default Wrap" />
      <VerticalTabs.Tab id="word-wrap" title="Word Wrap" wrapStyle="wrap" />
      <VerticalTabs.Tab id="truncate" title="Truncate" wrapStyle="truncate" />
      <VerticalTabs.Tab id="no-wrap" title="No Wrap" wrapStyle="nowrap" />
    </div>
  );

  expect(component.render()).toMatchSnapshot();
});
