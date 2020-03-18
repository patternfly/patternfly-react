import * as React from 'react';
import { Grid } from '../Grid';
import { shallow } from 'enzyme';

test('gutter', () => {
  const view = shallow(<Grid gutter="md" />);
  expect(view).toMatchSnapshot();
});
