import * as React from 'react';
import { Level } from '../Level';
import { LevelItem } from '../LevelItem';
import { shallow } from 'enzyme';

test('Gutter', () => {
  const view = shallow(<Level hasGutter />);
  expect(view).toMatchSnapshot();
});

test('item', () => {
  const view = shallow(<LevelItem>Level Item</LevelItem>);
  expect(view).toMatchSnapshot();
});
