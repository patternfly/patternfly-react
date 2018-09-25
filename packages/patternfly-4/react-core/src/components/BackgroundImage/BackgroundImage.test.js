import BackgroundImage from './BackgroundImage';
import React from 'react';
import { shallow } from 'enzyme';

Object.values([true, false]).forEach(isRead => {
  test(`BackgroundImage`, () => {
    const view = shallow(<BackgroundImage />);
    expect(view).toMatchSnapshot();
  });
});
