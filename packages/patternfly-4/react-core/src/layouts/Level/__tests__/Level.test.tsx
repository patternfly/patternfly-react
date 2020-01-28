import * as React from 'react';
import { shallow } from 'enzyme';
import { Level } from '../Level';
import { LevelItem } from '../LevelItem';
import { GutterSize } from '../../../styles/gutters';

it('Level should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Level
      gutter={null}
			className={"''"}
			children={<>ReactNode</>}
    />);
  expect(view).toMatchSnapshot();
});

Object.values(GutterSize).forEach(gutter => {
  test(`Gutter ${gutter}`, () => {
    const view = shallow(<Level gutter={gutter} />);
    expect(view).toMatchSnapshot();
  });
});

test('item', () => {
  const view = shallow(<LevelItem>Level Item</LevelItem>);
  expect(view).toMatchSnapshot();
});
