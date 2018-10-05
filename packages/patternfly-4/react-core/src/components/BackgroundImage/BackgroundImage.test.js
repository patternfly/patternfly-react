import BackgroundImage, { BackgroundImageSrc } from './BackgroundImage';
import React from 'react';
import { shallow } from 'enzyme';

const images = {
  [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
  [BackgroundImageSrc.md]: '/assets/images/pfbg_992.jpg',
  [BackgroundImageSrc.md2x]: '/assets/images/pfbg_992@2x.jpg',
  [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
  [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
  [BackgroundImageSrc.xl]: '/assets/images/pfbg_2000.jpg',
  [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
  [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
  [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg'
};

Object.values([true, false]).forEach(isRead => {
  test(`BackgroundImage`, () => {
    const view = shallow(<BackgroundImage src={images} />);
    expect(view).toMatchSnapshot();
  });
});

test('allows passing in a single string as the image src', () => {
  const view = shallow(<BackgroundImage src={images.xl} />);
  expect(view).toMatchSnapshot();
});
