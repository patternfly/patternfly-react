import * as React from 'react';
import { Gallery } from '../Gallery';
import { shallow } from 'enzyme';

test('gutter', () => {
  const view = shallow(<Gallery gutter="md" />);
  expect(view).toMatchSnapshot();
});

