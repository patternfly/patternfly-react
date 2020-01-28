import * as React from 'react';
import { shallow } from 'enzyme';
import { Gallery } from '../Gallery';
import { GutterSize } from '../../../styles/gutters';

it('Gallery should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Gallery
      children={<>ReactNode</>}
			className={"''"}
			gutter={null}
    />);
  expect(view).toMatchSnapshot();
});

Object.values(GutterSize).forEach(gutter => {
  test(`gutter ${gutter}`, () => {
    const view = shallow(<Gallery gutter={gutter} />);
    expect(view).toMatchSnapshot();
  });
});
