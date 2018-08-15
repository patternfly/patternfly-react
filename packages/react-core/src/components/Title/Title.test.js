import Title, { TitleSize } from './Title';
import React from 'react';
import { shallow } from 'enzyme';

Object.values(TitleSize).forEach(size => {
  test(`${size} Title`, () => {
    const view = shallow(<Title size={size}>{size} Title</Title>);
    expect(view).toMatchSnapshot();
  });
});
