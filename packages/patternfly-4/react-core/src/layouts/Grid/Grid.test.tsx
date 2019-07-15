import * as React from 'react';
import { Grid } from './Grid';
import { shallow } from 'enzyme';

[true, false].forEach(hasGutter => {
  test(`hasGutter ${hasGutter}`, () => {
    const view = shallow(<Grid hasGutter />);
    expect(view).toMatchSnapshot();
  });
});
