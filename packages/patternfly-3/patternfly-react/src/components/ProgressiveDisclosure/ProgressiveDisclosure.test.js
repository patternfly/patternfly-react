import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProgressiveDisclosure from './ProgressiveDisclosure';
import { ProgressiveDisclosureItem } from './ProgressiveDisclosureItem';

test('ProgressiveDisclosure empty render', () => {
  const view = shallow(<ProgressiveDisclosure name="pd-name" onChange={jest.fn()} />);
  expect(toJson(view)).toEqual([]);
});

test('ProgressiveDisclosure one non ProgressiveDisclosure render', () => {
  const view = shallow(
    <ProgressiveDisclosure name="pd-name" onChange={jest.fn()}>
      <div>a simple div</div>
    </ProgressiveDisclosure>
  );
  expect(view).toMatchSnapshot();
});

test('ProgressiveDisclosure renders a checkbox when only one progressive disclosure item exists', () => {
  const view = shallow(
    <ProgressiveDisclosure name="pd-name" onChange={jest.fn()}>
      <ProgressiveDisclosureItem>
        <span>progressive disclosure form</span>
      </ProgressiveDisclosureItem>
    </ProgressiveDisclosure>
  );
  expect(view).toMatchSnapshot();
});

test('ProgressiveDisclosure renders a radio button when more than one progressive disclosure items exist', () => {
  const view = shallow(
    <ProgressiveDisclosure name="pd-name" onChange={jest.fn()}>
      <ProgressiveDisclosureItem />
      <ProgressiveDisclosureItem />
    </ProgressiveDisclosure>
  );
  expect(view).toMatchSnapshot();
});

const clickItem = (view, place) => {
  let type = 'Radio';
  if (view.find(type).length === 0) {
    type = 'Checkbox';
  }
  view
    .find(type)
    .at(place)
    .props()
    .onChange();
  view.update();
};

const isItemShown = (view, place) =>
  view
    .find('ProgressiveDisclosureItem')
    .at(place)
    .props().show;

test('ProgressiveDisclosure multi display selected item', () => {
  const changeFn = jest.fn();
  const view = mount(
    <ProgressiveDisclosure name="pd-name" onChange={changeFn}>
      <ProgressiveDisclosureItem text="item-1" />
      <ProgressiveDisclosureItem text="item-2" />
    </ProgressiveDisclosure>
  );
  expect(isItemShown(view, 0)).toBe(false);
  expect(isItemShown(view, 1)).toBe(false);
  clickItem(view, 0);
  expect(changeFn).toHaveBeenLastCalledWith({ name: 'pd-name', text: 'item-1', value: 0, selected: [0] });
  expect(isItemShown(view, 0)).toBe(true);
  expect(isItemShown(view, 1)).toBe(false);
  clickItem(view, 1);
  expect(changeFn).toHaveBeenLastCalledWith({ name: 'pd-name', text: 'item-2', value: 1, selected: [1] });
  expect(isItemShown(view, 0)).toBe(false);
  expect(isItemShown(view, 1)).toBe(true);
  clickItem(view, 1);
  expect(changeFn).toHaveBeenLastCalledWith({ name: 'pd-name', text: 'item-2', value: 1, selected: [] });
  expect(isItemShown(view, 0)).toBe(false);
  expect(isItemShown(view, 1)).toBe(false);
});

test('ProgressiveDisclosure single display selected item', () => {
  const changeFn = jest.fn();
  const view = mount(
    <ProgressiveDisclosure name="pd-1" onChange={changeFn}>
      <ProgressiveDisclosureItem text="enabler" />
    </ProgressiveDisclosure>
  );
  expect(isItemShown(view, 0)).toBe(false);
  clickItem(view, 0);
  expect(changeFn).toHaveBeenLastCalledWith({ name: 'pd-1', text: 'enabler', value: 0, selected: [0] });
  expect(isItemShown(view, 0)).toBe(true);
  clickItem(view, 0);
  expect(changeFn).toHaveBeenLastCalledWith({ name: 'pd-1', text: 'enabler', value: 0, selected: [] });
  expect(isItemShown(view, 0)).toBe(false);
});
