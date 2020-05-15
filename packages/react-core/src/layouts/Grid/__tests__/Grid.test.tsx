import * as React from 'react';
import { Grid } from '../Grid';
import { shallow } from 'enzyme';

test('gutter', () => {
  const view = shallow(<Grid hasGutter />);
  expect(view).toMatchSnapshot();
});
