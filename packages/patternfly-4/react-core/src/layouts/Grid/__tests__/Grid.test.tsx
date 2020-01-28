import * as React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../Grid';
import { GutterSize } from '../../../styles/gutters';

it('Grid should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Grid
      children={<>ReactNode</>}
			className={"''"}
			gutter={null}
			span={null}
			sm={1}
			md={1}
			lg={1}
			xl={1}
			xl2={1}
    />);
  expect(view).toMatchSnapshot();
});

Object.values(GutterSize).forEach(gutter => {
  test(`gutter ${gutter}`, () => {
    const view = shallow(<Grid gutter="md" />);
    expect(view).toMatchSnapshot();
  });
});
