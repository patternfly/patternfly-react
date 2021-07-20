import * as React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from '../Avatar';

test('simple avatar', () => {
  const view: any = shallow(<Avatar alt="avatar" src="test.png" border="light" />);
  expect(view).toMatchSnapshot();
});
