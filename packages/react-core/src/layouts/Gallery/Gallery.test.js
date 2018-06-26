import React from 'react';
import Gallery, { GutterSize } from './Gallery';
import { shallow } from 'enzyme';

Object.values(GutterSize).forEach(gutter => {
  test(`gutter ${gutter}`, () => {
    const view = shallow(<Gallery gutter={gutter} />);
    expect(view).toMatchSnapshot();
  });
});
