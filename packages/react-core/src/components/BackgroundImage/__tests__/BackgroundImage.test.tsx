import { BackgroundImage } from '../BackgroundImage';
import * as React from 'react';
import { shallow } from 'enzyme';

const images = {
  'lg': '/assets/images/pfbg_1200.jpg',
  'sm': '/assets/images/pfbg_768.jpg',
  'sm2x': '/assets/images/pfbg_768@2x.jpg',
  'xs': '/assets/images/pfbg_576.jpg',
  'xs2x': '/assets/images/pfbg_576@2x.jpg'
};

test('BackgroundImage', () => {
  const view = shallow(<BackgroundImage src={images} />);
  expect(view).toMatchSnapshot();
});

test('allows passing in a single string as the image src', () => {
  const view = shallow(<BackgroundImage src={images.lg} />);
  expect(view).toMatchSnapshot();
});
