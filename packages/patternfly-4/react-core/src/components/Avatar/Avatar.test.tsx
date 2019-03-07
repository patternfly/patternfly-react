
import { shallow } from 'enzyme';
import React from 'react';
import { Avatar } from './Avatar';


test('simple avatar', () => {
  const view: any = shallow(<Avatar alt="avatar" />);
  expect(view).toMatchSnapshot();
});
