import * as React from 'react';
import { Gallery } from '../Gallery';
import { shallow } from 'enzyme';

test('gutter', () => {
  const view = shallow(<Gallery hasGutter />);
  expect(view).toMatchSnapshot();
});

