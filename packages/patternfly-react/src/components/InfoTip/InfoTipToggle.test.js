import React from 'react';
import { shallow } from 'enzyme';
import InfoTipToggle from './InfoTipToggle';

test('defaults props', () => {
  const view = shallow(<InfoTipToggle bsRole="bsRole" bsClass="bsClass" />);
  expect(view).toMatchSnapshot('props are defaulted to expected values');
});

test('removes bs props', () => {
  const view = shallow(<InfoTipToggle bsRole="bsRole" bsClass="bsClass" />);
  expect(view.first().props().bsClass).toBeUndefined();
  expect(view.first().props().bsRole).toBeUndefined();
});

test('sets aria-expanded to true if open = true', () => {
  const view = shallow(<InfoTipToggle open />);
  expect(view.first().props()['aria-expanded']).toBe(true);
});

test('sets aria-expanded to false if open = false', () => {
  const view = shallow(<InfoTipToggle open={false} />);
  expect(view.first().props()['aria-expanded']).toBe(false);
});

test('passes extra props to the root element', () => {
  const id = 'id';
  const view = shallow(<InfoTipToggle id={id} />);
  expect(view.first().props().id).toBe(id);
});

test('uses classsName from props', () => {
  const className = 'className';
  const view = shallow(<InfoTipToggle className={className} />);
  expect(view.first().props().className).toBe(className);
});
