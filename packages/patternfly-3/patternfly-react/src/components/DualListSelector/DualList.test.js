import React from 'react';
import { mount, shallow } from 'enzyme';
import { DualListControlled } from './index';
import { getCounterMessage as counterMessage, getFilterredItemsLength } from './helpers';

jest.mock('../../common/helpers', () => {
  const selectKeys = (obj, keys, fn = val => val) =>
    keys.reduce((values, key) => ({ ...values, [key]: fn(obj[key]) }), {});

  /** Returns a subset of the given object with a validator function applied to its keys. */
  const filterKeys = (obj, validator) => selectKeys(obj, Object.keys(obj).filter(validator));

  return {
    debounce: fn => fn,
    noop: Function.prototype,
    excludeKeys: (obj, keys) => filterKeys(obj, key => !keys.includes(key))
  };
});

const getProps = () => ({
  left: {
    items: [
      {
        value: 'Brittany Turner',
        label: 'Brittany Turner',
        children: [{ value: 'zzz', label: 'zzz' }, { value: 'ppp', label: 'ppp' }]
      },
      { value: 'Heather Davis', label: 'Heather Davis' }
    ]
  },
  right: {
    items: [{ value: 'Donald Trump', label: 'Donald Trump' }]
  },
  allowHiddenInputs: true
});

test('dual-list render properly ', () => {
  const component = shallow(<DualListControlled {...getProps()} />);
  expect(component).toMatchSnapshot();
});

test('dual-list items match the list length ', () => {
  const props = getProps();
  const component = mount(<DualListControlled {...props} />);
  const selectors = component.find('.dual-list-pf-selector');
  const leftSelectorItems = selectors.first().find('.dual-list-pf-item');
  const rightSelectorItems = selectors.at(1).find('.dual-list-pf-item');
  expect(leftSelectorItems).toHaveLength(4);
  expect(rightSelectorItems).toHaveLength(1);
});

test('Footer updates when items are selected ', () => {
  const props = getProps();
  const getCounterMessage = jest.fn((selected, total) => counterMessage(selected, total));
  props.left = { ...props.left, getCounterMessage };
  const component = mount(<DualListControlled {...props} />);
  expect(getCounterMessage.mock.calls).toHaveLength(1);
  const footer = component.find('.dual-list-pf-footer').first();
  expect(footer.text()).toBe(counterMessage(0, 3));
  const body = component.find('.dual-list-pf-body').first();
  const listItems = body.find('.dual-list-pf-item');
  const input = listItems.first().find('input');
  const { 'data-side': side, 'data-position': position } = input.props();
  const mockedEvent = { target: { checked: true, dataset: { position, side } } };
  input.simulate('change', mockedEvent);
  expect(footer.text()).toBe(getCounterMessage(2, 3));
  expect(getCounterMessage.mock.calls).toHaveLength(3);
});

test('selecting child items works properly', () => {
  const props = getProps();
  const component = mount(<DualListControlled {...props} />);
  const childItemsCheckbox = component.find('label.dual-list-pf-item .child > input[type="checkbox"]');
  const {
    'data-side': side,
    'data-position': position,
    'data-parent-position': parentPosition
  } = childItemsCheckbox.first().props();
  const firstMockedEvent = { target: { checked: true, dataset: { position, side, parentPosition } } };
  const secondMockedEvent = { target: { checked: true, dataset: { position: position + 1, side, parentPosition } } };
  childItemsCheckbox.first().simulate('change', firstMockedEvent);
  childItemsCheckbox.at(1).simulate('change', secondMockedEvent);
  expect(component.state().left.items[0].checked).toBeTruthy();
});

test('move child items works properly', () => {
  const props = getProps();
  const component = mount(<DualListControlled {...props} />);
  const childItemsCheckbox = component.find('label.dual-list-pf-item .child > input[type="checkbox"]');
  const {
    'data-side': side,
    'data-position': position,
    'data-parent-position': parentPosition
  } = childItemsCheckbox.first().props();
  const firstMockedEvent = { target: { checked: true, dataset: { position, side, parentPosition } } };
  childItemsCheckbox.first().simulate('change', firstMockedEvent);
  const rightArrow = component
    .find('DualListArrows')
    .find('Icon')
    .first();
  rightArrow.simulate('click');
  expect(component.state().right.items[0].checked).toBeFalsy();
  expect(component.state().right.items[0].children[0].checked).toBeFalsy();
});

test('dual-list filter works ', () => {
  const props = getProps();
  const component = mount(<DualListControlled {...props} />);
  const header = component.find('.dual-list-pf-heading').first();
  const filterInput = header
    .find('.dual-list-pf-filter')
    .first()
    .find('input');
  const { 'data-side': side } = filterInput.props();
  const value = props.left.items[0].label.charAt(0);
  const mockedEvent = { target: { value, dataset: { side } } };
  filterInput.simulate('change', mockedEvent);
  expect(getFilterredItemsLength(component.state()[side].items)).toBe(2);
  mockedEvent.target.value = 'test';
  filterInput.simulate('change', mockedEvent);
  expect(getFilterredItemsLength(component.state()[side].items)).toBe(0);
});

test('main checkbox functions properly', () => {
  const props = getProps();
  const component = mount(<DualListControlled {...props} />);
  const selector = component.find('DualListSelector').at(1);
  const itemCheckbox = selector.find('label.dual-list-pf-item > input[type="checkbox"]').first();
  const mainCheckbox = selector.find('input[type="checkbox"].dual-list-pf-main-checkbox');
  const { 'data-side': side, 'data-position': position } = itemCheckbox.props();
  const mockedEvent = { target: { checked: true, dataset: { position, side } } };
  itemCheckbox.simulate('change', mockedEvent);
  expect(component.state()[side].isMainChecked).toBeTruthy();
  mockedEvent.target.checked = false;
  mainCheckbox.simulate('change', mockedEvent);
  expect(component.state()[side].isMainChecked).toBeFalsy();
  expect(component.state()[side].items[0].checked).toBeFalsy();
});

test('transitions between selectors works!', () => {
  const props = getProps();
  const component = mount(<DualListControlled {...props} />);
  const selectors = component.find('DualListSelector');
  const firstItemCheckbox = selectors
    .first()
    .find('label.dual-list-pf-item > input[type="checkbox"]')
    .first();
  const arrows = component.find('DualListArrows').find('Icon');
  const rightArrow = arrows.at(0);
  const { 'data-side': side, 'data-position': position } = firstItemCheckbox.props();
  const mockedEvent = { target: { checked: true, dataset: { position, side } } };
  const getState = () => component.state();
  expect(getState().left.items).toHaveLength(2);
  expect(getState().right.items).toHaveLength(1);
  firstItemCheckbox.simulate('change', mockedEvent);
  rightArrow.simulate('click');
  expect(getState().left.items).toHaveLength(1);
  expect(getState().right.items).toHaveLength(2);
});

test('sorting works ! ', () => {
  const props = getProps();
  const component = mount(<DualListControlled {...props} />);
  const selector = component.find('DualListSelector').first();
  const sortingIcon = selector.find('.dual-list-pf-sort-icon').first();
  const { 'data-side': side } = sortingIcon.props();
  const mockedEvent = { target: { dataset: { side } } };
  const originalList = [...component.state()[side].items];
  sortingIcon.simulate('click', mockedEvent);
  expect(component.state().left.items[0]).toBe(originalList[originalList.length - 1]);
});

test('item is disabled and tooltip exists', () => {
  const props = getProps();
  props.right.items.push({
    value: 'Barack Obama',
    label: 'Barack Obama',
    disabled: true,
    tooltipText: 'Barack Obama'
  });
  const component = mount(<DualListControlled {...props} />);
  expect(component.exists('DualListItemTooltip')).toBeTruthy();
  expect(component.exists('.disabled')).toBeTruthy();
});
