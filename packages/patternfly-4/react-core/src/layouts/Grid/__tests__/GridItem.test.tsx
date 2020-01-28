import * as React from 'react';
import { shallow } from 'enzyme';
import { GridItem } from '../GridItem';
import { DeviceSizes } from '../../../styles/sizes';

it('GridItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <GridItem
      children={<>ReactNode</>}
			className={"''"}
			span={null}
			rowSpan={null}
			offset={null}
			sm={1}
			smRowSpan={1}
			smOffset={1}
			md={1}
			mdRowSpan={1}
			mdOffset={1}
			lg={1}
			lgRowSpan={1}
			lgOffset={1}
			xl={1}
			xlRowSpan={1}
			xlOffset={1}
			xl2={1}
			xl2RowSpan={1}
			xl2Offset={1}
    />);
  expect(view).toMatchSnapshot();
});

test('adds span class', () => {
  const view = shallow(<GridItem span={4} />);
  expect(view.props().className).toMatchSnapshot();
});

test('adds offset class', () => {
  const view = shallow(<GridItem offset={4} />);
  expect(view.props().className).toMatchSnapshot();
});

test('adds row class', () => {
  const view = shallow(<GridItem rowSpan={4} />);
  expect(view.props().className).toMatchSnapshot();
});

Object.values(DeviceSizes).forEach(size => {
  test(`adds ${size} span class`, () => {
    const props = { [size]: 4 };
    const view = shallow(<GridItem {...props} />);
    expect(view.props().className).toMatchSnapshot();
  });

  test(`adds ${size} offset classes`, () => {
    const props = { [`${size}Offset`]: 1 };
    const view = shallow(<GridItem {...props} />);
    expect(view.props().className).toMatchSnapshot();
  });

  test(`adds ${size} row classes`, () => {
    const props = { [`${size}RowSpan`]: 1 };
    const view = shallow(<GridItem {...props} />);
    expect(view.props().className).toMatchSnapshot();
  });
});
