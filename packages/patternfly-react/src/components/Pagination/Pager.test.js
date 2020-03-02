import React from 'react';
import { mount } from 'enzyme';
import { Pager } from './index';

const testPagerSnapshot = props => <Pager {...props} />;

test('Pager default renders properly', () => {
  const component = mount(testPagerSnapshot(Pager));

  expect(component.render()).toMatchSnapshot();
});

test('Pager mini size renders properly', () => {
  const component = mount(
    testPagerSnapshot({
      className: 'pager-sm',
      messages: {
        nextPage: 'The Next Page',
        previousPage: 'The Previous Page'
      },
      disableNext: true,
      disablePrevious: true
    })
  );

  expect(component.render()).toMatchSnapshot();
});

test('Pager buttons fire when enabled', () => {
  let eventCount = 0;
  const component = mount(
    testPagerSnapshot({
      onPreviousPage: () => eventCount++,
      onNextPage: () => eventCount++
    })
  );

  component
    .find('a')
    .first()
    .simulate('click');
  component
    .find('a')
    .last()
    .simulate('click');

  expect(eventCount).toBe(2);
});

test('Pager buttons do not fire when disabled', () => {
  let eventCount = 0;
  const component = mount(
    testPagerSnapshot({
      onPreviousPage: () => eventCount++,
      onNextPage: () => eventCount++,
      disableNext: true,
      disablePrevious: true
    })
  );

  component
    .find('a')
    .first()
    .simulate('click');
  component
    .find('a')
    .last()
    .simulate('click');

  expect(eventCount).toBe(0);
});
