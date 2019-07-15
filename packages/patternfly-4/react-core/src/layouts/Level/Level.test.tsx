import * as React from 'react';
import { Level } from './Level';
import { LevelItem } from './LevelItem';
import { shallow } from 'enzyme';

[true, false].forEach(hasGutter => {
  test(`Gutter ${hasGutter}`, () => {
    const view = shallow(<Level hasGutter={hasGutter} />);
    expect(view).toMatchSnapshot();
  });
});

test('item', () => {
  const view = shallow(<LevelItem>Level Item</LevelItem>);
  expect(view).toMatchSnapshot();
});
