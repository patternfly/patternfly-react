import * as React from 'react';
import { Gallery } from './Gallery';
import { shallow } from 'enzyme';

[true, false].forEach(hasGutter => {
  test(`gutter ${hasGutter}`, () => {
    const view = shallow(<Gallery hasGutter={hasGutter} />);
    expect(view).toMatchSnapshot();
  });
});
