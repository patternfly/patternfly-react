import * as React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from '../Spinner';

test('simple spinner', () => {
  const view = shallow(<Spinner />);
  expect(view).toMatchSnapshot();
});

test('small spinner', () => {
  const view = shallow(<Spinner size="sm" />);
  expect(view).toMatchSnapshot();
});

test('medium spinner', () => {
  const view = shallow(<Spinner size="md" />);
  expect(view).toMatchSnapshot();
});

test('large spinner', () => {
  const view = shallow(<Spinner size="lg" />);
  expect(view).toMatchSnapshot();
});

test('extra large spinner', () => {
  const view = shallow(<Spinner size="xl" />);
  expect(view).toMatchSnapshot();
});
