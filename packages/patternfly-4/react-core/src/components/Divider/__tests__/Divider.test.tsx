import * as React from 'react';
import { shallow } from 'enzyme';
import { Divider } from '../Divider';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('Divider should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Divider
      className={"''"}
			component={'hr'}
    />);
  expect(view).toMatchSnapshot();
});

test('divider using hr', () => {
  const view = shallow(<Divider/>);
  expect(view).toMatchSnapshot();
});

test('divider using li', () => {
  const view = shallow(<Divider component="li"/>);
  expect(view).toMatchSnapshot();
});

test('divider using div', () => {
  const view = shallow(<Divider component="div"/>);
  expect(view).toMatchSnapshot();
});
