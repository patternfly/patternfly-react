import React from 'react';
import { shallow } from 'enzyme';
import { ProgressiveDisclosureItem } from './ProgressiveDisclosureItem';

test('ProgressiveDisclosureItem default render', () => {
  const view = shallow(<ProgressiveDisclosureItem />);
  expect(
    view
      .find('div')
      .at(1)
      .props().className
  ).toBe('progressive-disclosure-item-children hidden');
  expect(
    view
      .find('div')
      .at(1)
      .props().children
  ).toBe(null);
  expect(view.props().children).toHaveLength(2);
  expect(view.props().children[0]).toEqual(null);
});

test('ProgressiveDisclosureItem show displays div', () => {
  const view = shallow(<ProgressiveDisclosureItem show />);
  expect(
    view
      .find('div')
      .at(1)
      .props().className
  ).toBe('progressive-disclosure-item-children show');
});

test('ProgressiveDisclosureItem children are nested inside div', () => {
  const view = shallow(
    <ProgressiveDisclosureItem>
      <li>one</li>
      <li>two</li>
    </ProgressiveDisclosureItem>
  );
  expect(
    view
      .find('div')
      .at(1)
      .props().children
  ).toHaveLength(2);
  expect(
    view
      .find('div')
      .at(1)
      .props().children
  ).toEqual([<li>one</li>, <li>two</li>]);
});

test('ProgressiveDisclosureItem control button rendered before div', () => {
  const view = shallow(<ProgressiveDisclosureItem controlButton={<button>control button</button>} />);
  expect(view.find('button').text()).toEqual('control button');
  expect(view.props().children[0]).toEqual(<button>control button</button>);
});
