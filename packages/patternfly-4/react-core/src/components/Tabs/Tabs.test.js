import React from 'react';
import { shallow, mount } from 'enzyme';
import Tabs from './Tabs';
import Tab from './Tab';

test('should render simple tabs', () => {
  const view = shallow(
    <Tabs>
      <Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render filled tabs', () => {
  const view = shallow(
    <Tabs isFilled>
      <Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should render secondary tabs', () => {
  const view = shallow(
    <Tabs>
      <Tab id="tab1" eventKey={0} title="Tab item 1">
        <Tabs>
          <Tab id="secondary tab1" eventKey={10} title="Secondary Tab 1">
            Secondary Tab 1 section
          </Tab>
          <Tab id="secondary tab2" eventKey={11} title="Secondary Tab 2">
            Secondary Tab 2 section
          </Tab>
          <Tab id="secondary tab3" eventKey={12} title="Secondary Tab 3">
            Secondary Tab 3 section
          </Tab>
        </Tabs>
      </Tab>
      <Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
  expect(view).toMatchSnapshot();
});

test('should call scrollLeft tabs with scrolls', () => {
  const view = mount(
    <Tabs isFilled>
      <Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
  view
    .find('.pf-c-tabs__scroll-button')
    .first()
    .simulate('click');
  expect(view).toMatchSnapshot();
});

test('should call scrollRight tabs with scrolls', () => {
  const view = mount(
    <Tabs isFilled>
      <Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
  view
    .find('.pf-c-tabs__scroll-button')
    .last()
    .simulate('click');
  expect(view).toMatchSnapshot();
});

test('should call handleScrollButtons tabs with scrolls', () => {
  const view = mount(
    <Tabs isFilled>
      <Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
  view.simulate('scroll');
  expect(view).toMatchSnapshot();
});

test('onSelect callback called when tab selected', () => {
  const mockFn = jest.fn();
  const view = shallow(
    <Tabs activeKey={0} onSelect={mockFn}>
      <Tab id="tab1" eventKey={0} title="Tab item 1">
        Tab 1 section
      </Tab>
      <Tab id="tab2" eventKey={1} title="Tab item 2">
        Tab 2 section
      </Tab>
      <Tab id="tab3" eventKey={2} title="Tab item 3">
        Tab 3 section
      </Tab>
    </Tabs>
  );
  view
    .find('.pf-c-tabs__button')
    .first()
    .simulate('click');
  expect(mockFn).toHaveBeenCalled();
  expect(view).toMatchSnapshot();
});
