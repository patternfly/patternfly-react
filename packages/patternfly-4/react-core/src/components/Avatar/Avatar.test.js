import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

test('simple avatar', () => {
  const view = shallow(<Avatar alt="avatar" />);
  expect(view).toMatchSnapshot();
});
